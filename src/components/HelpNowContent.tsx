import { useState } from "react";
import { AlertCircle } from "lucide-react";
import { CountryPicker } from "@/components/CountryPicker";
import { HelplineDisplay } from "@/components/HelplineDisplay";
import { getHelplinesForCountry, getSavedCountry } from "@/data/crisisHelplines";

export function HelpNowContent() {
  const [countryCode, setCountryCode] = useState<string>(getSavedCountry() || "");
  const countryData = countryCode ? getHelplinesForCountry(countryCode) : null;

  return (
    <div className="space-y-5 pt-6">
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
          Select your country to see local crisis helplines and resources
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
        This information is provided for guidance only. In an emergency, always call your local emergency number. Little Minds is not a crisis service.
      </p>
    </div>
  );
}
