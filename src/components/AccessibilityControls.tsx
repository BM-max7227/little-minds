import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Settings, Trash2, Play, Pause, Square } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const supportsSpeech = typeof window !== "undefined" && "speechSynthesis" in window;

// Pick the most natural-sounding English voice available on the device.
const pickBestVoice = (): SpeechSynthesisVoice | null => {
  if (!supportsSpeech) return null;
  const voices = window.speechSynthesis.getVoices();
  if (!voices.length) return null;
  const english = voices.filter((v) => v.lang?.toLowerCase().startsWith("en"));
  const pool = english.length ? english : voices;
  // Prefer higher-quality voices by common naming conventions.
  const preferred = [
    "natural", "neural", "premium", "enhanced", "google",
    "samantha", "aria", "jenny", "libby", "sonia",
  ];
  for (const keyword of preferred) {
    const match = pool.find((v) => v.name.toLowerCase().includes(keyword));
    if (match) return match;
  }
  // Otherwise favor a local (offline) voice for reliability.
  return pool.find((v) => v.localService) || pool[0];
};

// Read only the page's main content, skipping nav, buttons, and footer.
const getReadableText = (): string => {
  const main = document.querySelector("main");
  const source = (main as HTMLElement) || document.body;
  const clone = source.cloneNode(true) as HTMLElement;
  clone
    .querySelectorAll("nav, header, footer, button, script, style, [aria-hidden='true']")
    .forEach((el) => el.remove());
  return clone.innerText.replace(/\s+\n/g, "\n").replace(/\n{3,}/g, "\n\n").trim();
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
  const { toast } = useToast();

  useEffect(() => {
    rateRef.current = rate;
  }, [rate]);

  useEffect(() => {
    const saved = localStorage.getItem("accessibility-prefs");
    if (saved) {
      const prefs = JSON.parse(saved);
      setHighContrast(prefs.highContrast || false);
      setReduceMotion(prefs.reduceMotion || false);
      if (typeof prefs.readRate === "number") {
        setRate(Math.min(2, Math.max(0.5, Math.round(prefs.readRate * 4) / 4)));
      }
    }
  }, []);

  // Warm up the voice list (loads asynchronously in most browsers).
  useEffect(() => {
    if (!supportsSpeech) return;
    const load = () => window.speechSynthesis.getVoices();
    load();
    window.speechSynthesis.addEventListener("voiceschanged", load);
    return () => {
      window.speechSynthesis.removeEventListener("voiceschanged", load);
      window.speechSynthesis.cancel();
    };
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

  const startReading = () => {
    if (!supportsSpeech) {
      toast({
        title: "Read Aloud not available",
        description: "Your browser doesn't support speech. Try a different browser.",
      });
      return;
    }
    // Close the settings panel first so it's clear we're reading the page itself.
    setOpen(false);

    // Wait for the panel to close before grabbing the page text.
    window.setTimeout(() => {
      const text = getReadableText();
      if (!text) {
        toast({ title: "Nothing to read", description: "No readable text was found on this page." });
        return;
      }
      window.speechSynthesis.cancel();

      // Speak in sentence-sized chunks so longer pages don't get cut off.
      const chunks = text.match(/[^.!?\n]+[.!?]?(\s|$)|\n+/g) || [text];
      const voice = pickBestVoice();
      let index = 0;

      const speakNext = () => {
        if (index >= chunks.length) {
          setIsSpeaking(false);
          setIsPaused(false);
          return;
        }
        const chunk = chunks[index++].trim();
        if (!chunk) {
          speakNext();
          return;
        }
        const utterance = new SpeechSynthesisUtterance(chunk);
        if (voice) utterance.voice = voice;
        utterance.rate = rateRef.current;
        utterance.pitch = 1;
        utterance.onend = speakNext;
        utterance.onerror = speakNext;
        window.speechSynthesis.speak(utterance);
      };

      setIsSpeaking(true);
      setIsPaused(false);
      speakNext();
    }, 350);
  };

  const pauseReading = () => {
    if (!supportsSpeech) return;
    window.speechSynthesis.pause();
    setIsPaused(true);
  };

  const resumeReading = () => {
    if (!supportsSpeech) return;
    window.speechSynthesis.resume();
    setIsPaused(false);
  };

  const stopReading = () => {
    if (!supportsSpeech) return;
    window.speechSynthesis.cancel();
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
                Reads the main content of this page out loud using your device's voice.
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
