import { useState, useRef } from "react";
import { AlertCircle, Play, Pause, Square } from "lucide-react";
import { CountryPicker } from "@/components/CountryPicker";
import { HelplineDisplay } from "@/components/HelplineDisplay";
import { getHelplinesForCountry, getSavedCountry } from "@/data/crisisHelplines";
import { Button } from "@/components/ui/button";
import { useReadAloud } from "@/hooks/useReadAloud";

export function HelpNowContent() {
  const [countryCode, setCountryCode] = useState<string>(getSavedCountry() || "");
  const countryData = countryCode ? getHelplinesForCountry(countryCode) : null;
  const contentRef = useRef<HTMLDivElement>(null);

  const { supported, isSpeaking, isPaused, speak, pause, resume, stop } = useReadAloud();

  const readThis = () => {
    const el = contentRef.current;
    if (!el) return;
    const clone = el.cloneNode(true) as HTMLElement;
    clone.querySelectorAll("button, [aria-hidden='true']").forEach((n) => n.remove());
    const text = clone.innerText.replace(/\s+\n/g, "\n").replace(/\n{3,}/g, "\n\n").trim();
    speak(text);
  };

  return (
    <div className="space-y-5 pt-6" ref={contentRef}>
      {supported && (
        <div className="flex items-center gap-2">
          {!isSpeaking ? (
            <Button size="sm" variant="secondary" className="gap-2" onClick={readThis}>
              <Play className="h-4 w-4" />
              Read this aloud
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
      )}

      <div className="flex items-start space-x-3 p-4 border border-destructive rounded-lg bg-destructive/5">
        <AlertCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
        <div className="text-sm">
          <p className="font-semibold text-destructive mb-1">
            If you are in immediate danger
          </p>
          <p>Call your local emergency number immediately</p>
        </div>
      </div>

      <div className="p-4 border rounded-lg space-y-3">
        <p className="font-semibold">Find help in your area</p>
        <p className="text-sm text-muted-foreground">
          Select your country to see local emergency numbers and crisis helplines. Available resources vary by country, and not every country is listed yet.
        </p>
        <CountryPicker selectedCode={countryCode || null} onSelect={setCountryCode} />
      </div>

      {countryData && (
        <HelplineDisplay data={countryData} />
      )}

      {!countryData && countryCode === "" && (
        <div className="p-4 border rounded-lg">
          <p className="font-semibold mb-2">Need help now?</p>
          <p className="text-sm text-muted-foreground">
            Talk to a trusted adult or contact a crisis line in your area.
          </p>
        </div>
      )}

      <div className="p-3 border rounded-lg bg-muted/50">
        <p className="text-xs text-muted-foreground">
          Can't find your country? Visit{" "}
          <a href="https://findahelpline.com" target="_blank" rel="noopener noreferrer" className="text-primary underline">
            findahelpline.com
          </a>{" "}
          for a worldwide directory of helplines.
        </p>
      </div>

      <p className="text-xs text-muted-foreground">
        This information is provided for guidance only and may be incomplete or out of date. This feature and its links may not always work or load. Please don't rely on it as your only way to get help — in an emergency, always call your local emergency number directly. Little Minds is not a crisis service.
      </p>
    </div>
  );
}
