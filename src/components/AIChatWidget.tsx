import { useState, useRef, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, X, Send, Bot, User, ShieldCheck, Maximize2, Minimize2, Mic, Check } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { FeedbackButtons } from "@/components/chat/FeedbackButtons";

type Msg = { role: "user" | "assistant"; content: string };

const CHAT_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/mental-health-chat`;

export function AIChatWidget() {
  const [open, setOpen] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [voiceTranscript, setVoiceTranscript] = useState("");
  const [audioLevels, setAudioLevels] = useState<number[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<any>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const animFrameRef = useRef<number>(0);
  const streamRef = useRef<MediaStream | null>(null);

  const supportsVoice = typeof window !== "undefined" && ("SpeechRecognition" in window || "webkitSpeechRecognition" in window);

  const stopListening = useCallback(() => {
    recognitionRef.current?.stop();
    recognitionRef.current = null;
    cancelAnimationFrame(animFrameRef.current);
    streamRef.current?.getTracks().forEach(t => t.stop());
    audioContextRef.current?.close();
    audioContextRef.current = null;
    setIsListening(false);
  }, []);

  const startListening = useCallback(async () => {
    const SR = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SR) return;

    // Start audio visualizer
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;
      const ctx = new AudioContext();
      audioContextRef.current = ctx;
      const source = ctx.createMediaStreamSource(stream);
      const analyser = ctx.createAnalyser();
      analyser.fftSize = 64;
      source.connect(analyser);
      analyserRef.current = analyser;

      const updateLevels = () => {
        if (!analyserRef.current) return;
        const data = new Uint8Array(analyserRef.current.frequencyBinCount);
        analyserRef.current.getByteFrequencyData(data);
        // Sample 24 bars from the frequency data
        const bars = Array.from({ length: 24 }, (_, i) => {
          const idx = Math.floor((i / 24) * data.length);
          return data[idx] / 255;
        });
        setAudioLevels(bars);
        animFrameRef.current = requestAnimationFrame(updateLevels);
      };
      updateLevels();
    } catch { /* mic denied, still allow speech recognition */ }

    const recognition = new SR();
    recognition.lang = "en-US";
    recognition.interimResults = true;
    recognition.continuous = true;
    recognitionRef.current = recognition;

    setVoiceTranscript("");

    recognition.onresult = (event: SpeechRecognitionEvent) => {
      let interim = "";
      let final = "";
      for (let i = 0; i < event.results.length; i++) {
        const r = event.results[i];
        if (r.isFinal) {
          final += r[0].transcript;
        } else {
          interim += r[0].transcript;
        }
      }
      setVoiceTranscript(final + interim);
    };

    recognition.onend = () => {
      // If still listening, restart (browser can stop after silence)
      if (recognitionRef.current) {
        try { recognitionRef.current.start(); } catch { setIsListening(false); }
      }
    };
    recognition.onerror = (e: any) => {
      if (e.error !== "no-speech") stopListening();
    };

    recognition.start();
    setIsListening(true);
  }, [stopListening]);

  const confirmVoice = useCallback(() => {
    const text = voiceTranscript.trim();
    stopListening();
    setAudioLevels([]);
    if (text) {
      setInput(text);
      setVoiceTranscript("");
    }
  }, [voiceTranscript, stopListening]);

  const discardVoice = useCallback(() => {
    stopListening();
    setVoiceTranscript("");
    setAudioLevels([]);
  }, [stopListening]);

  useEffect(() => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: isLoading ? "auto" : "smooth",
    });
  }, [messages, isLoading]);

  const sendMessage = useCallback(async () => {
    const text = input.trim();
    if (!text || isLoading) return;

    const userMsg: Msg = { role: "user", content: text };
    const allMessages = [...messages, userMsg];
    setMessages(allMessages);
    setInput("");
    setIsLoading(true);

    let assistantSoFar = "";

    try {
      const resp = await fetch(CHAT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
        },
        body: JSON.stringify({ messages: allMessages }),
      });

      if (!resp.ok || !resp.body) {
        const err = await resp.json().catch(() => ({ error: "Something went wrong" }));
        setMessages((prev) => [...prev, { role: "assistant", content: err.error || "Sorry, something went wrong. Please try again." }]);
        setIsLoading(false);
        return;
      }

      const reader = resp.body.getReader();
      const decoder = new TextDecoder();
      let sseBuffer = "";
      let pendingDataLines: string[] = [];
      let streamDone = false;

      const flushEvent = () => {
        if (pendingDataLines.length === 0) return false;

        const payload = pendingDataLines.join("");
        pendingDataLines = [];

        if (!payload) return false;
        if (payload === "[DONE]") return true;

        try {
          const parsed = JSON.parse(payload);
          const content = parsed.choices?.[0]?.delta?.content as string | undefined;
          if (content) upsert(content);
        } catch {
          // ignore malformed non-JSON data chunks
        }

        return false;
      };

      while (!streamDone) {
        const { done, value } = await reader.read();
        if (done) break;

        sseBuffer += decoder.decode(value, { stream: true });
        const lines = sseBuffer.split(/\r?\n/);
        sseBuffer = lines.pop() ?? "";

        for (const line of lines) {
          if (line === "") {
            if (flushEvent()) {
              streamDone = true;
              break;
            }
            continue;
          }

          if (line.startsWith("data:")) {
            pendingDataLines.push(line.slice(5).trimStart());
          }
        }
      }

      if (!streamDone) {
        const trailingLines = sseBuffer.split(/\r?\n/);
        for (const line of trailingLines) {
          if (line.startsWith("data:")) {
            pendingDataLines.push(line.slice(5).trimStart());
          }
        }
        flushEvent();
      }
    } catch (e) {
      console.error(e);
      setMessages((prev) => [...prev, { role: "assistant", content: "Sorry, I couldn't connect. Please try again later." }]);
    } finally {
      setIsLoading(false);
    }
  }, [input, isLoading, messages]);

  return (
    <>
      {/* Floating button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-6 right-6 z-50 flex items-center justify-center rounded-full bg-primary h-14 w-14 text-primary-foreground shadow-lg hover:bg-primary/90 transition-all hover:scale-105"
          aria-label="Open chat assistant"
        >
          <MessageCircle className="h-6 w-6" />
        </button>
      )}

      {/* Chat panel */}
      {open && (
        <div className={`fixed z-50 flex flex-col rounded-2xl border bg-background shadow-2xl overflow-hidden transition-all ${
          fullscreen
            ? "inset-2 w-auto h-auto max-w-none max-h-none"
            : "bottom-4 right-4 w-[360px] max-w-[calc(100vw-2rem)] h-[520px] max-h-[calc(100vh-2rem)]"
        }`}>
          {/* Header */}
          <div className="flex items-center justify-between bg-primary px-4 py-3 text-primary-foreground">
            <div className="flex items-center gap-2">
              <Bot className="h-5 w-5" />
              <div>
                <p className="text-sm font-semibold">Little Minds Helper</p>
                <p className="text-xs opacity-80">Here to help with wellbeing</p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <button onClick={() => setFullscreen(!fullscreen)} className="hover:bg-primary-foreground/20 rounded p-1 transition" aria-label={fullscreen ? "Exit fullscreen" : "Fullscreen"}>
                {fullscreen ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
              </button>
              <button onClick={() => { setOpen(false); setFullscreen(false); }} className="hover:bg-primary-foreground/20 rounded p-1 transition">
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Trust banner */}
          <div className="flex items-center gap-2 bg-accent/50 px-4 py-2 border-b">
            <ShieldCheck className="h-4 w-4 text-primary flex-shrink-0" />
            <p className="text-xs text-foreground/70">
              Safe & trusted — trained only on children's mental health & wellbeing topics
            </p>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
            {messages.length === 0 && (
              <div className="text-center text-muted-foreground text-sm py-8 space-y-3">
                <Bot className="h-10 w-10 mx-auto text-primary/60" />
                <p className="font-medium">Hi there! 👋</p>
                <p>I'm here to help with anything about feelings, wellbeing, or mental health. Ask me anything!</p>
                <div className="flex flex-wrap gap-2 justify-center pt-2">
                  {["How can I manage anxiety?", "Tips for parents", "What is mindfulness?"].map((q) => (
                    <button
                      key={q}
                      onClick={() => { setInput(q); }}
                      className="text-xs border rounded-full px-3 py-1 hover:bg-accent transition"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {messages.map((msg, i) => {
              const prevUserMsg = msg.role === "assistant" && i > 0 ? messages[i - 1]?.content || "" : "";
              const showFeedback = msg.role === "assistant";
              const isStreamingAssistantMessage =
                msg.role === "assistant" &&
                isLoading &&
                i === messages.length - 1;

              return (
                <div key={i} className={`flex gap-2 ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  {msg.role === "assistant" && (
                    <div className="flex-shrink-0 h-7 w-7 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                      <Bot className="h-4 w-4 text-primary" />
                    </div>
                  )}
                  <div className="flex flex-col max-w-[80%]">
                    <div
                      className={`rounded-2xl px-3 py-2 text-sm ${
                        msg.role === "user"
                          ? "bg-primary text-primary-foreground rounded-br-sm"
                          : "bg-muted rounded-bl-sm"
                      }`}
                    >
                      {msg.role === "assistant" ? (
                        isStreamingAssistantMessage ? (
                          <div className="whitespace-pre-wrap">{msg.content}</div>
                        ) : (
                          <div className="prose prose-sm dark:prose-invert max-w-none [&>p]:m-0 [&>ul]:my-1">
                            <ReactMarkdown>{msg.content}</ReactMarkdown>
                          </div>
                        )
                      ) : (
                        msg.content
                      )}
                    </div>
                    {showFeedback && (
                      <FeedbackButtons
                        messageId={`assistant-${i}`}
                        userMessage={prevUserMsg}
                        assistantMessage={msg.content}
                      />
                    )}
                  </div>
                  {msg.role === "user" && (
                    <div className="flex-shrink-0 h-7 w-7 rounded-full bg-primary flex items-center justify-center mt-1">
                      <User className="h-4 w-4 text-primary-foreground" />
                    </div>
                  )}
                </div>
              );
            })}

            {isLoading && messages[messages.length - 1]?.role !== "assistant" && (
              <div className="flex gap-2">
                <div className="flex-shrink-0 h-7 w-7 rounded-full bg-primary/10 flex items-center justify-center">
                  <Bot className="h-4 w-4 text-primary animate-pulse" />
                </div>
                <div className="bg-muted rounded-2xl rounded-bl-sm px-3 py-2 text-sm text-muted-foreground">
                  Thinking...
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="border-t">
            {isListening ? (
              /* Recording UI */
              <div className="px-3 py-2 space-y-2">
                {/* Waveform bar */}
                <div className="flex items-center gap-2 bg-muted rounded-xl px-3 py-2">
                  <div className="flex items-center gap-[2px] flex-1 h-8 justify-center">
                    {audioLevels.map((level, i) => (
                      <div
                        key={i}
                        className="w-1 rounded-full bg-primary transition-all duration-75"
                        style={{ height: `${Math.max(4, level * 28)}px` }}
                      />
                    ))}
                    {audioLevels.length === 0 &&
                      Array.from({ length: 24 }).map((_, i) => (
                        <div key={i} className="w-1 h-1 rounded-full bg-primary/40" />
                      ))
                    }
                  </div>
                </div>
                {/* Transcript preview */}
                {voiceTranscript && (
                  <p className="text-xs text-muted-foreground px-1 truncate italic">
                    "{voiceTranscript}"
                  </p>
                )}
                {/* Actions */}
                <div className="flex items-center justify-between">
                  <button
                    onClick={discardVoice}
                    className="text-xs text-muted-foreground hover:text-foreground transition flex items-center gap-1"
                  >
                    <X className="h-3 w-3" /> Discard
                  </button>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={discardVoice}
                      className="h-8 w-8 rounded-full border flex items-center justify-center hover:bg-muted transition"
                      aria-label="Cancel recording"
                    >
                      <X className="h-4 w-4" />
                    </button>
                    <button
                      onClick={confirmVoice}
                      className="h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition"
                      aria-label="Use recording"
                    >
                      <Check className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              /* Normal input */
              <div className="px-3 py-2 flex gap-2">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && sendMessage()}
                  placeholder="Ask me anything about wellbeing..."
                  className="flex-1 text-sm bg-transparent outline-none placeholder:text-muted-foreground"
                  disabled={isLoading}
                />
                {supportsVoice && (
                  <Button size="icon" variant="ghost" onClick={startListening} disabled={isLoading} aria-label="Voice input">
                    <Mic className="h-4 w-4" />
                  </Button>
                )}
                <Button size="icon" variant="ghost" onClick={sendMessage} disabled={isLoading || !input.trim()}>
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            )}
            <p className={`text-muted-foreground text-center pb-2 px-3 ${fullscreen ? 'text-xs' : 'text-[10px]'}`}>
              Little Minds Helper can make mistakes. Always check important information with a trusted adult or professional.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
