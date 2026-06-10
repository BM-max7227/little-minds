import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

type AskHelperPromptProps = {
  /** Main line of text. Keep it calm and gentle. */
  title?: string;
  /** Smaller supporting line. */
  description?: string;
  /** Label for the button that opens the chat. */
  buttonLabel?: string;
  className?: string;
};

/**
 * A subtle, on-brand card inviting people to open the Little Minds Helper chat.
 * It simply asks the already-mounted chat widget to open via a global event,
 * so it can be dropped onto any page without extra wiring.
 */
export function AskHelperPrompt({
  title = "Have a question right now?",
  description = "Our gentle helper can talk things through, suggest calming activities, and point you to the right place.",
  buttonLabel = "Ask the helper",
  className = "",
}: AskHelperPromptProps) {
  const openChat = () => {
    window.dispatchEvent(new CustomEvent("littleminds:open-chat"));
  };

  return (
    <div
      className={`rounded-2xl border border-primary/15 bg-primary/5 p-5 sm:flex sm:items-center sm:gap-4 ${className}`}
    >
      <div className="flex items-start gap-3 sm:flex-1">
        <div className="h-10 w-10 flex-shrink-0 rounded-full bg-primary/10 flex items-center justify-center">
          <MessageCircle className="h-5 w-5 text-primary" />
        </div>
        <div>
          <p className="font-medium">{title}</p>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
      <div className="mt-4 sm:mt-0 sm:flex-shrink-0">
        <Button variant="outline" onClick={openChat} className="rounded-full">
          <MessageCircle className="h-4 w-4 mr-2" />
          {buttonLabel}
        </Button>
      </div>
    </div>
  );
}
