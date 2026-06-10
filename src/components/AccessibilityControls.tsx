import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Settings, Trash2, Play, Pause, Square } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useReadAloud } from "@/hooks/useReadAloud";

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

export const AccessibilityControls = () => {
  const [highContrast, setHighContrast] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [confirmClear, setConfirmClear] = useState(false);
  const [open, setOpen] = useState(false);

  const { supported, isSpeaking, isPaused, rate, setRate, speak, pause, resume, stop } = useReadAloud();
  const { toast } = useToast();

  useEffect(() => {
    const saved = localStorage.getItem("accessibility-prefs");
    if (saved) {
      const prefs = JSON.parse(saved);
      setHighContrast(prefs.highContrast || false);
      setReduceMotion(prefs.reduceMotion || false);
    }
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem("accessibility-prefs");
    const prefs = saved ? JSON.parse(saved) : {};
    localStorage.setItem(
      "accessibility-prefs",
      JSON.stringify({ ...prefs, highContrast, reduceMotion })
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
  }, [highContrast, reduceMotion]);

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
      speak(text);
    }, 350);
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
                    <Button size="sm" variant="secondary" className="gap-2" onClick={resume}>
                      <Play className="h-4 w-4" />
                      Resume
                    </Button>
                  ) : (
                    <Button size="sm" variant="secondary" className="gap-2" onClick={pause}>
                      <Pause className="h-4 w-4" />
                      Pause
                    </Button>
                  )}
                  <Button size="sm" variant="outline" className="gap-2" onClick={stop}>
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
                onValueChange={(v) => setRate(v[0])}
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
                    stop();
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
