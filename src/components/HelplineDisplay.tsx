import { CountryHelplines } from "@/data/crisisHelplines";
import { Phone, MessageSquare, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HelplineDisplayProps {
  data: CountryHelplines;
  showDirectories?: boolean;
}

export function HelplineDisplay({ data, showDirectories = false }: HelplineDisplayProps) {
  return (
    <div className="space-y-3">
      <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/20 text-center space-y-1">
        <p className="text-xs font-medium text-destructive uppercase tracking-wide">Emergency Number</p>
        <a href={`tel:${data.emergency.replace(/\s/g, "")}`} className="block text-3xl font-bold text-destructive hover:underline">
          {data.emergency}
        </a>
      </div>

      <div className="space-y-2">
        {data.helplines.map((h) => (
          <div key={h.name} className="p-3 border rounded-lg space-y-1">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium">{h.name}</p>
              {h.url && (
                <a href={h.url} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80">
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              )}
            </div>
            {h.description && (
              <p className="text-xs text-muted-foreground">{h.description}</p>
            )}
            <div className="flex flex-wrap gap-2 pt-1">
              {h.phone && (
                <a href={`tel:${h.phone.replace(/\s/g, "")}`} className="inline-flex items-center gap-1 text-xs text-primary hover:underline">
                  <Phone className="h-3 w-3" />
                  {h.phone}
                </a>
              )}
              {h.text && (
                <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                  <MessageSquare className="h-3 w-3" />
                  {h.text}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {showDirectories && data.directories.length > 0 && (
        <div className="space-y-2 pt-2">
          <p className="text-xs font-medium text-muted-foreground">Find a therapist</p>
          {data.directories.map((d) => (
            <Button key={d.name} variant="outline" className="w-full justify-between" size="sm" asChild>
              <a href={d.url} target="_blank" rel="noopener noreferrer">
                {d.name}
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </Button>
          ))}
        </div>
      )}
    </div>
  );
}
