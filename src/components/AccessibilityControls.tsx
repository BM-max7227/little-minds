import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Settings, Trash2, Play, Pause, Square } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Read the page's main content plus any important disclaimers, skipping nav and buttons.
const getReadableText = (): string => {
  const main = document.querySelector("main");
  const source = (main as HTMLElement) || document.body;
  const clone = source.cloneNode(true) as HTMLElement;
  clone
    .querySelectorAll("nav, header, footer, button, script, style, [aria-hidden='true']")
    .forEach((el) => el.remove());
  let text = clone.innerText;

  // Always include site-wide disclaimers (they live in the footer, outside <main>).
  const disclaimers = Array.from(document.querySelectorAll<HTMLElement>("[data-readable]"))
    .map((el) => el.innerText.trim())
    .filter(Boolean);
  if (disclaimers.length) {
    text += "\n\nPlease remember: " + disclaimers.join(" ");
  }

  return text.replace(/\s+\n/g, "\n").replace(/\n{3,}/g, "\n\n").trim();
};

// Split into sentence-sized pieces. Browser speechSynthesis becomes unreliable with
// long utterances (Chrome stops early / skips words), so short chunks keep it smooth.
const chunkText = (text: string, maxLen = 180): string[] => {
  const sentences = text.match(/[^.!?\n]+[.!?]?(?:\s|$)|\n+/g) || [text];
  const chunks: string[] = [];
  let current = "";
  for (const raw of sentences) {
    const s = raw.replace(/\s+/g, " ").trim();
    if (!s) continue;
    if ((current + " " + s).trim().length > maxLen && current) {
      chunks.push(current.trim());
      current = s;
    } else {
      current = (current + " " + s).trim();
    }
  }
  if (current.trim()) chunks.push(current.trim());
  return chunks;
};

// Pick the most natural-sounding English voice the device offers.
const pickBestVoice = (voices: SpeechSynthesisVoice[]): SpeechSynthesisVoice | null => {
  if (!voices.length) return null;
  const en = voices.filter((v) => v.lang?.toLowerCase().startsWith("en"));
  const pool = en.length ? en : voices;
  // Preferred high-quality voices by name across platforms.
  const preferred = [
    "Google US English",
    "Microsoft Aria",
    "Microsoft Jenny",
    "Microsoft Zira",
    "Samantha",
    "Karen",
    "Daniel",
    "Google UK English Female",
  ];
  for (const name of preferred) {
    const match = pool.find((v) => v.name === name) || pool.find((v) => v.name.includes(name));
    if (match) return match;
  }
  // Prefer non-"compact"/local-quality voices, then default, then first.
  const nice = pool.find((v) => !/compact|eloquence/i.test(v.name));
  return nice || pool.find((v) => v.default) || pool[0];
};

export const AccessibilityControls = () => {
  const [highContrast, setHighContrast] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [confirmClear, setConfirmClear] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [rate, setRate] = useState(1);
  const [open, setOpen] = useState(false);

  const rateRef = useRef(rate);
  const chunksRef = useRef<string[]>([]);
  const indexRef = useRef(0);
  const sessionRef = useRef(0); // bumped on stop to cancel queued speech
  const voiceRef = useRef<SpeechSynthesisVoice | null>(null);
  const keepAliveRef = useRef<number | null>(null);
  const { toast } = useToast();

  // Chrome silently stops/skips after ~15s; a periodic pause+resume keeps it alive.
  const startKeepAlive = () => {
    stopKeepAlive();
    keepAliveRef.current = window.setInterval(() => {
      if (window.speechSynthesis.speaking && !window.speechSynthesis.paused) {
        window.speechSynthesis.pause();
        window.speechSynthesis.resume();
      }
    }, 5000);
  };
  const stopKeepAlive = () => {
    if (keepAliveRef.current !== null) {
      window.clearInterval(keepAliveRef.current);
      keepAliveRef.current = null;
    }
  };

  const supported = typeof window !== "undefined" && "speechSynthesis" in window;

  // Load voices (they populate asynchronously on most browsers).
  useEffect(() => {
    if (!supported) return;
    const load = () => {
      voiceRef.current = pickBestVoice(window.speechSynthesis.getVoices());
    };
    load();
    window.speechSynthesis.onvoiceschanged = load;
    return () => {
      window.speechSynthesis.onvoiceschanged = null;
    };
  }, [supported]);

  // Apply a new speed instantly by re-speaking the current chunk at the new rate.
  useEffect(() => {
    rateRef.current = rate;
    if (isSpeaking && !isPaused && supported) {
      const session = sessionRef.current;
      window.speechSynthesis.cancel();
      // Small delay: Chrome drops the first words if you speak right after cancel().
      window.setTimeout(() => speakFrom(indexRef.current, session), 130);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rate]);

  useEffect(() => {
    const saved = localStorage.getItem("accessibility-prefs");
    if (saved) {
      const prefs = JSON.parse(saved);
      setHighContrast(prefs.highContrast || false);
      setReduceMotion(prefs.reduceMotion || false);
      if (typeof prefs.readRate === "number") {
        setRate(Math.min(1.5, Math.max(0.5, Math.round(prefs.readRate * 4) / 4)));
      }
    }
  }, []);

  useEffect(() => {
    return () => {
      if (supported) window.speechSynthesis.cancel();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "accessibility-prefs",
      JSON.stringify({ highContrast, reduceMotion, readRate: rate })
    );

    if (highContrast) {
      document.documentElement.classList.add("high-contrast");
    } else {
      document.documentElement.classList.remove("high-contrast");
    }

    if (reduceMotion) {
      document.documentElement.classList.add("reduce-motion");
    } else {
      document.documentElement.classList.remove("reduce-motion");
    }
  }, [highContrast, reduceMotion, rate]);

  // Speak the chunk list starting at index `i` for a given session.
  const speakFrom = (i: number, session: number) => {
    if (!supported) return;
    if (session !== sessionRef.current) return;
    if (i >= chunksRef.current.length) {
      setIsSpeaking(false);
      setIsPaused(false);
      return;
    }
    indexRef.current = i;

    const utter = new SpeechSynthesisUtterance(chunksRef.current[i]);
    if (voiceRef.current) {
      utter.voice = voiceRef.current;
      utter.lang = voiceRef.current.lang;
    }
    utter.rate = rateRef.current;
    utter.pitch = 1;
    utter.volume = 1;

    utter.onend = () => {
      if (session !== sessionRef.current) return;
      speakFrom(i + 1, session);
    };
    utter.onerror = () => {
      if (session !== sessionRef.current) return;
      speakFrom(i + 1, session);
    };

    window.speechSynthesis.speak(utter);
  };

  const startReading = () => {
    if (!supported) {
      toast({
        title: "Read Aloud unavailable",
        description: "This browser doesn't support text-to-speech.",
      });
      return;
    }
    // Close the settings panel first so it's clear we're reading the page itself.
    setOpen(false);

    window.setTimeout(() => {
      const text = getReadableText();
      if (!text) {
        toast({ title: "Nothing to read", description: "No readable text was found on this page." });
        return;
      }
      window.speechSynthesis.cancel();
      const session = sessionRef.current + 1;
      sessionRef.current = session;
      chunksRef.current = chunkText(text);
      indexRef.current = 0;
      if (!voiceRef.current) voiceRef.current = pickBestVoice(window.speechSynthesis.getVoices());
      setIsSpeaking(true);
      setIsPaused(false);
      speakFrom(0, session);
    }, 350);
  };

  const pauseReading = () => {
    if (supported) window.speechSynthesis.pause();
    setIsPaused(true);
  };

  const resumeReading = () => {
    if (supported) window.speechSynthesis.resume();
    setIsPaused(false);
  };

  const stopReading = () => {
    sessionRef.current += 1; // invalidate queued speech
    if (supported) window.speechSynthesis.cancel();
    setIsSpeaking(false);
    setIsPaused(false);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="sm" aria-label="Accessibility settings" className="h-11 w-11 sm:h-9 sm:w-9 p-0">
          <Settings className="w-6 h-6 sm:w-5 sm:h-5" />
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-md overflow-y-auto">
        <SheetHeader className="pr-10">
          <SheetTitle>Accessibility Settings</SheetTitle>
        </SheetHeader>
        <div className="space-y-6 mt-6">
          <div className="flex items-center justify-between">
            <Label htmlFor="high-contrast" className="flex flex-col gap-1">
              <span className="font-medium">High Contrast</span>
              <span className="text-sm text-muted-foreground">Increase color contrast for better visibility</span>
            </Label>
            <Switch
              id="high-contrast"
              checked={highContrast}
              onCheckedChange={setHighContrast}
            />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="reduce-motion" className="flex flex-col gap-1">
              <span className="font-medium">Reduce Motion</span>
              <span className="text-sm text-muted-foreground">Remove animations and transitions</span>
            </Label>
            <Switch
              id="reduce-motion"
              checked={reduceMotion}
              onCheckedChange={setReduceMotion}
            />
          </div>
          <div className="space-y-3">
            <div className="flex flex-col gap-1">
              <span className="font-medium">Read Aloud</span>
              <span className="text-sm text-muted-foreground">
                Reads the main content of this page out loud in a clear voice.
              </span>
            </div>

            <div className="flex items-center gap-2">
              {!isSpeaking ? (
                <Button size="sm" variant="secondary" className="gap-2" onClick={startReading}>
                  <Play className="h-4 w-4" />
                  Read this page
                </Button>
              ) : (
                <>
                  {isPaused ? (
                    <Button size="sm" variant="secondary" className="gap-2" onClick={resumeReading}>
                      <Play className="h-4 w-4" />
                      Resume
                    </Button>
                  ) : (
                    <Button size="sm" variant="secondary" className="gap-2" onClick={pauseReading}>
                      <Pause className="h-4 w-4" />
                      Pause
                    </Button>
                  )}
                  <Button size="sm" variant="outline" className="gap-2" onClick={stopReading}>
                    <Square className="h-4 w-4" />
                    Stop
                  </Button>
                </>
              )}
            </div>

            <div className="flex flex-col gap-2 pt-1">
              <div className="flex items-center justify-between">
                <Label htmlFor="read-rate" className="text-sm text-muted-foreground">
                  Reading speed
                </Label>
                <span className="text-sm font-medium">{rate}×</span>
              </div>
              <Slider
                id="read-rate"
                min={0.5}
                max={1.5}
                step={0.25}
                value={[rate]}
                onValueChange={(v) => setRate(Math.round(v[0] * 4) / 4)}
                aria-label="Reading speed"
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Slower</span>
                <span>Normal (1×)</span>
                <span>Faster</span>
              </div>
            </div>
          </div>

          <div className="border-t pt-6 mt-6 space-y-3">
            <Label className="flex flex-col gap-1">
              <span className="font-medium">Clear My Data</span>
              <span className="text-sm text-muted-foreground">
                Remove all locally stored data including journals, progress, favorites, and preferences
              </span>
            </Label>
            {!confirmClear ? (
              <Button
                variant="destructive"
                size="sm"
                onClick={() => setConfirmClear(true)}
                className="gap-2"
              >
                <Trash2 className="h-4 w-4" />
                Clear All Data
              </Button>
            ) : (
              <div className="flex gap-2">
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => {
                    localStorage.clear();
                    sessionStorage.clear();
                    setHighContrast(false);
                    setReduceMotion(false);
                    stopReading();
                    setRate(1);
                    setConfirmClear(false);
                    document.documentElement.classList.remove("high-contrast", "reduce-motion");
                    toast({
                      title: "Data Cleared",
                      description: "All locally stored data has been removed.",
                    });
                  }}
                >
                  Yes, clear everything
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setConfirmClear(false)}
                >
                  Cancel
                </Button>
              </div>
            )}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
