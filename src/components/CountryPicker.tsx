import { useState, useMemo } from "react";
import { crisisHelplines, getSavedCountry, saveCountry } from "@/data/crisisHelplines";
import { Search, MapPin } from "lucide-react";

interface CountryPickerProps {
  selectedCode: string | null;
  onSelect: (code: string) => void;
}

export function CountryPicker({ selectedCode, onSelect }: CountryPickerProps) {
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    if (!search.trim()) return crisisHelplines;
    const q = search.toLowerCase();
    return crisisHelplines.filter((c) => c.country.toLowerCase().includes(q));
  }, [search]);

  const selected = crisisHelplines.find((c) => c.code === selectedCode);

  if (selected) {
    return (
      <button
        onClick={() => { onSelect(""); }}
        className="flex items-center gap-2 text-sm text-primary hover:underline"
      >
        <MapPin className="h-3.5 w-3.5" />
        {selected.country}
        <span className="text-muted-foreground">(change)</span>
      </button>
    );
  }

  return (
    <div className="space-y-2">
      <div className="relative">
        <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for your country..."
          className="w-full pl-8 pr-3 py-2 text-sm border rounded-lg bg-background outline-none focus:ring-1 focus:ring-primary placeholder:text-muted-foreground"
        />
      </div>
      <div className="max-h-40 overflow-y-auto space-y-0.5">
        {filtered.map((c) => (
          <button
            key={c.code}
            onClick={() => {
              saveCountry(c.code);
              onSelect(c.code);
            }}
            className="w-full text-left text-sm px-3 py-1.5 rounded hover:bg-accent transition"
          >
            {c.country}
          </button>
        ))}
        {filtered.length === 0 && (
          <p className="text-xs text-muted-foreground px-3 py-2">
            Country not found. Visit <a href="https://findahelpline.com" target="_blank" rel="noopener noreferrer" className="text-primary underline">findahelpline.com</a> for worldwide resources.
          </p>
        )}
      </div>
    </div>
  );
}
