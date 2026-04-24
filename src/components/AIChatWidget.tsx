import { useState, useRef, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, X, Send, Bot, User, ShieldCheck, Maximize2, Minimize2, Mic, Check } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { FeedbackButtons } from "@/components/chat/FeedbackButtons";
import { supabase } from "@/integrations/supabase/client";

type Msg = { role: "user" | "assistant"; content: string };

const CHAT_URLS = [
  `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/mental-health-chat`,
  "/functions/v1/mental-health-chat",
];

// Detect which section of the site the user is currently in, so the AI can
// tailor its tone (kid-friendly vs. parent/adult).
function detectAudience(): "kid" | "parent" | "learn" | "general" {
  if (typeof window === "undefined") return "general";
  const path = window.location.pathname.toLowerCase();
  if (path.startsWith("/kid")) return "kid";
  if (path.startsWith("/parent")) return "parent";
  if (path.startsWith("/learn")) return "learn";
  return "general";
}

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
  const lastUserMsgRef = useRef<HTMLDivElement>(null);
  const userHasScrolledUpRef = useRef(false);
  const [lastUserIndex, setLastUserIndex] = useState<number>(-1);
  const recognitionRef = useRef<any>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const animFrameRef = useRef<number>(0);
  const streamRef = useRef<MediaStream | null>(null);
  const typingBufferRef = useRef("");
  const typingTimerRef = useRef<number | null>(null);
  // Unique per chat session so feedback storage keys don't collide with stale entries from prior sessions.
  const sessionIdRef = useRef<string>(`${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`);

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

  // Track if user has scrolled up
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const handleScroll = () => {
      const distanceFromBottom = el.scrollHeight - el.scrollTop - el.clientHeight;
      userHasScrolledUpRef.current = distanceFromBottom > 80;
    };
    el.addEventListener("scroll", handleScroll);
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  // After sending, scroll the user's latest message to the top of the chat viewport.
  // While the assistant streams, do NOT auto-scroll to bottom — let the user read from the top.
  useEffect(() => {
    if (lastUserIndex < 0) return;
    const userEl = lastUserMsgRef.current;
    const scrollEl = scrollRef.current;
    if (!userEl || !scrollEl) return;
    const offset = userEl.offsetTop - scrollEl.offsetTop;
    scrollEl.scrollTo({ top: offset - 8, behavior: "smooth" });
  }, [lastUserIndex]);

  const sendMessage = useCallback(async () => {
    const text = input.trim();
    if (!text || isLoading) return;

    const userMsg: Msg = { role: "user", content: text };
    const allMessages = [...messages, userMsg];
    setMessages(allMessages);
    setInput("");
    userHasScrolledUpRef.current = false;
    setLastUserIndex(allMessages.length - 1);
    setIsLoading(true);

    let assistantSoFar = "";
    typingBufferRef.current = "";

    const upsert = (chunk: string) => {
      assistantSoFar += chunk;
      const snapshot = assistantSoFar;

      setMessages((prev) => {
        const last = prev[prev.length - 1];
        if (last?.role === "assistant") {
          const updated = [...prev];
          updated[updated.length - 1] = { ...last, content: snapshot };
          return updated;
        }
        return [...prev, { role: "assistant", content: snapshot }];
      });
    };

    const stopTypingTimer = () => {
      if (typingTimerRef.current !== null) {
        clearInterval(typingTimerRef.current);
        typingTimerRef.current = null;
      }
    };

    const startTypingTimer = () => {
      if (typingTimerRef.current !== null) return;
      typingTimerRef.current = window.setInterval(() => {
        if (!typingBufferRef.current) {
          stopTypingTimer();
          return;
        }

        const step = Math.min(2, typingBufferRef.current.length);
        const nextChunk = typingBufferRef.current.slice(0, step);
        typingBufferRef.current = typingBufferRef.current.slice(step);
        upsert(nextChunk);
      }, 16);
    };

    const waitForTypingDrain = async () => {
      let safety = 0;
      while (typingBufferRef.current.length > 0 && safety < 3000) {
        await new Promise((resolve) => setTimeout(resolve, 16));
        safety += 1;
      }
    };

    const parseSseText = (raw: string) => {
      let fullText = "";
      for (const rawLine of raw.split("\n")) {
        const line = rawLine.trim();
        if (!line.startsWith("data:")) continue;
        const payload = line.slice(5).trimStart();
        if (!payload || payload === "[DONE]") continue;

        try {
          const parsed = JSON.parse(payload);
          const delta = parsed.choices?.[0]?.delta?.content as string | undefined;
          if (delta) fullText += delta;

          const messageContent = parsed.choices?.[0]?.message?.content as string | undefined;
          if (!fullText && messageContent) fullText = messageContent;
        } catch {
          // Ignore malformed chunks in fallback parsing
        }
      }
      return fullText;
    };

    const MAX_RETRIES = 3;
    const REQUEST_TIMEOUT_MS = 30000;
    let resp: Response | null = null;

    const fetchWithTimeout = async (url: string, options: RequestInit, timeoutMs: number): Promise<Response> => {
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), timeoutMs);
      try {
        const res = await fetch(url, { ...options, signal: controller.signal });
        return res;
      } finally {
        clearTimeout(timer);
      }
    };

    for (const chatUrl of CHAT_URLS) {
      for (let attempt = 0; attempt < MAX_RETRIES; attempt++) {
        try {
          resp = await fetchWithTimeout(
            chatUrl,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
                apikey: import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY,
              },
              body: JSON.stringify({ messages: allMessages, audience: detectAudience() }),
            },
            REQUEST_TIMEOUT_MS,
          );

          // If we got a server error (500/502/503), retry instead of accepting
          if (resp.status >= 500 && attempt < MAX_RETRIES - 1) {
            console.warn(`Chat server error ${resp.status} on attempt ${attempt + 1}, retrying...`);
            resp = null;
            await new Promise((r) => setTimeout(r, 1000 * (attempt + 1)));
            continue;
          }

          break;
        } catch (networkErr: any) {
          const isTimeout = networkErr?.name === "AbortError";
          console.warn(
            `Chat fetch attempt ${attempt + 1}/${MAX_RETRIES} failed for ${chatUrl}:`,
            isTimeout ? "Request timed out" : networkErr,
          );
          if (attempt < MAX_RETRIES - 1) {
            await new Promise((r) => setTimeout(r, 1000 * (attempt + 1)));
          }
        }
      }

      if (resp) break;
    }

    try {
      if (!resp) {
        const { data, error } = await supabase.functions.invoke("mental-health-chat", {
          body: { messages: allMessages },
        });

        if (error) throw error;

        let fallbackContent = "";
        if (typeof data === "string") {
          fallbackContent = parseSseText(data);
        } else if (typeof data === "object" && data !== null && "content" in data && typeof (data as { content?: unknown }).content === "string") {
          fallbackContent = (data as { content: string }).content;
        }

        if (fallbackContent) {
          typingBufferRef.current += fallbackContent;
          startTypingTimer();
          return;
        }

        setMessages((prev) => [...prev, { role: "assistant", content: "I couldn't connect right now, but please try again in a moment." }]);
        return;
      }

      if (!resp.ok || !resp.body) {
        const err = await resp.json().catch(() => ({ error: "Something went wrong" }));
        setMessages((prev) => [...prev, { role: "assistant", content: err.error || "Sorry, something went wrong. Please try again." }]);
        setIsLoading(false);
        return;
      }

      const reader = resp.body.getReader();
      const decoder = new TextDecoder();
      let textBuffer = "";
      let streamDone = false;

      const processLine = (line: string): boolean => {
        if (line.endsWith("\r")) line = line.slice(0, -1);
        if (!line || line.startsWith(":")) return false;
        if (!line.startsWith("data:")) return false;

        const payload = line.slice(5).trimStart();
        if (payload === "[DONE]") return true;
        if (!payload) return false;

        try {
          const parsed = JSON.parse(payload);
          const content = parsed.choices?.[0]?.delta?.content as string | undefined;
          if (content) {
            typingBufferRef.current += content;
            startTypingTimer();
          }
        } catch {
          // put back partial JSON and wait for next chunk
          textBuffer = `${line}\n${textBuffer}`;
        }

        return false;
      };

      const STREAM_CHUNK_TIMEOUT_MS = 15000;

      const readWithTimeout = async () => {
        return Promise.race([
          reader.read(),
          new Promise<never>((_, reject) =>
            setTimeout(() => reject(new Error("Stream chunk timeout")), STREAM_CHUNK_TIMEOUT_MS)
          ),
        ]);
      };

      while (!streamDone) {
        let readResult: ReadableStreamReadResult<Uint8Array>;
        try {
          readResult = await readWithTimeout();
        } catch {
          console.warn("Stream read timed out, ending stream gracefully");
          break;
        }
        const { done, value } = readResult;
        if (done) break;

        textBuffer += decoder.decode(value, { stream: true });

        let newlineIndex = textBuffer.indexOf("\n");
        while (newlineIndex !== -1) {
          const rawLine = textBuffer.slice(0, newlineIndex);
          textBuffer = textBuffer.slice(newlineIndex + 1);

          if (processLine(rawLine)) {
            streamDone = true;
            break;
          }

          newlineIndex = textBuffer.indexOf("\n");
        }
      }

      if (!streamDone && textBuffer.trim()) {
        processLine(textBuffer.trim());
      }
    } catch (e) {
      console.error("Chat stream error:", e);
      setMessages((prev) => [...prev, { role: "assistant", content: "Something went wrong while receiving the response. Please try again." }]);
    } finally {
      startTypingTimer();
      await waitForTypingDrain();
      stopTypingTimer();
      setIsLoading(false);
    }
  }, [input, isLoading, messages]);

  return (
    <>
      {/* Floating button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex items-center justify-center rounded-full bg-primary h-16 w-16 sm:h-14 sm:w-14 text-primary-foreground shadow-lg hover:bg-primary/90 transition-all hover:scale-105"
          aria-label="Open chat assistant"
        >
          <MessageCircle className="h-7 w-7 sm:h-6 sm:w-6" />
        </button>
      )}

      {/* Chat panel — full-screen on mobile, floating panel on sm+ */}
      {open && (
        <div className={`fixed z-50 flex flex-col border bg-background shadow-2xl overflow-hidden transition-all ${
          fullscreen
            ? "inset-2 w-auto h-auto max-w-none max-h-none rounded-2xl"
            : "inset-0 w-full h-full rounded-none sm:rounded-2xl sm:inset-auto sm:bottom-4 sm:right-4 sm:w-[360px] sm:max-w-[calc(100vw-2rem)] sm:h-[520px] sm:max-h-[calc(100vh-2rem)]"
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
              <button onClick={() => setFullscreen(!fullscreen)} className="hidden sm:block hover:bg-primary-foreground/20 rounded p-2 transition" aria-label={fullscreen ? "Exit fullscreen" : "Fullscreen"}>
                {fullscreen ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
              </button>
              <button onClick={() => { setOpen(false); setFullscreen(false); }} className="hover:bg-primary-foreground/20 rounded p-2 transition" aria-label="Close chat">
                <X className="h-5 w-5 sm:h-4 sm:w-4" />
              </button>
            </div>
          </div>

          {/* Trust banner */}
          <div className="flex items-center gap-2 bg-accent/50 px-4 py-2 border-b">
            <ShieldCheck className="h-4 w-4 text-primary flex-shrink-0" />
            <p className="text-xs text-foreground/70">
              Safe & trusted — designed to only discuss children's mental health & wellbeing topics
            </p>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
            {messages.length === 0 && (
              <div className="text-center text-muted-foreground text-sm pt-2 pb-8 space-y-3">
                <Bot className="h-10 w-10 mx-auto text-primary/60" />
                <p className="font-medium">Hi there! 👋</p>
                <p>I'm here to help with anything about feelings, wellbeing, or mental health. Ask me anything!</p>
                <div className="bg-muted/60 rounded-lg px-3 py-2 text-xs text-muted-foreground mx-2">
                  <p>🤖 AI assistant — not a real person. Don't share personal info.</p>
                </div>
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
                <div
                  key={i}
                  ref={i === lastUserIndex ? lastUserMsgRef : undefined}
                  className={`flex gap-2 ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
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
                        <div className="prose prose-sm max-w-none [&>p]:m-0 [&>ul]:my-1 [&>ol]:my-1">
                          <ReactMarkdown>{msg.content}</ReactMarkdown>
                        </div>
                      ) : (
                        msg.content
                      )}
                    </div>
                    {showFeedback && (
                      <FeedbackButtons
                        messageId={`${sessionIdRef.current}-${i}`}
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

            {/* Spacer so the latest user message can scroll near the top of the viewport while the assistant is replying. Removed once streaming is done so there's no big empty gap. */}
            {isLoading && lastUserIndex >= 0 && <div aria-hidden className="h-[60vh]" />}
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
                <div className="flex items-center justify-end gap-2">
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
              This is not therapy, counseling, or crisis intervention. Little Minds Helper can make mistakes. Always check important information with a trusted adult or professional.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
