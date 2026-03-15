import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Settings, Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const AccessibilityControls = () => {
  const [highContrast, setHighContrast] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [readAloud, setReadAloud] = useState(false);
  const [confirmClear, setConfirmClear] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const saved = localStorage.getItem("accessibility-prefs");
    if (saved) {
      const prefs = JSON.parse(saved);
      setHighContrast(prefs.highContrast || false);
      setReduceMotion(prefs.reduceMotion || false);
      setReadAloud(prefs.readAloud || false);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "accessibility-prefs",
      JSON.stringify({ highContrast, reduceMotion, readAloud })
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
  }, [highContrast, reduceMotion, readAloud]);

  const handleReadAloud = (enabled: boolean) => {
    setReadAloud(enabled);
    if (enabled && 'speechSynthesis' in window) {
      const text = document.body.innerText;
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.9;
      window.speechSynthesis.speak(utterance);
    } else if (!enabled && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="sm" aria-label="Accessibility settings">
          <Settings className="w-5 h-5" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
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
          <div className="flex items-center justify-between">
            <Label htmlFor="read-aloud" className="flex flex-col gap-1">
              <span className="font-medium">Read Aloud</span>
              <span className="text-sm text-muted-foreground">Use browser speech to read page content</span>
            </Label>
            <Switch
              id="read-aloud"
              checked={readAloud}
              onCheckedChange={handleReadAloud}
            />
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
                    setReadAloud(false);
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
