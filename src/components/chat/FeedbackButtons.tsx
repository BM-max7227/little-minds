import { useEffect, useMemo, useState } from "react";
import { ThumbsUp, ThumbsDown, X } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const CATEGORIES = [
  "Incorrect or incomplete",
  "Not what I asked for",
  "Not helpful enough",
  "Style or tone",
  "Safety concern",
  "Other",
];

interface FeedbackButtonsProps {
  userMessage: string;
  assistantMessage: string;
  messageId: string;
}

type SavedFeedback = "positive" | "negative" | null;

export function FeedbackButtons({ userMessage, assistantMessage, messageId }: FeedbackButtonsProps) {
  const [feedback, setFeedback] = useState<SavedFeedback>(null);
  const [showForm, setShowForm] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [details, setDetails] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const storageKey = useMemo(() => `chat-feedback-${messageId}`, [messageId]);

  useEffect(() => {
    const saved = sessionStorage.getItem(storageKey);
    if (!saved) return;

    if (saved === "positive") {
      setFeedback("positive");
      setSubmitted(false);
      setShowForm(false);
      return;
    }

    if (saved === "negative") {
      setFeedback("negative");
      setSubmitted(true);
      setShowForm(false);
    }
  }, [storageKey]);

  const submitFeedback = async (type: "positive" | "negative", category?: string, detailText?: string) => {
    await supabase.from("chat_feedback").insert({
      message_content: userMessage,
      assistant_response: assistantMessage,
      feedback_type: type,
      category: category || null,
      details: detailText || null,
    });
  };

  const handleThumbsUp = async () => {
    setFeedback("positive");
    setShowForm(false);
    sessionStorage.setItem(storageKey, "positive");
    await submitFeedback("positive");
  };

  const handleThumbsDown = () => {
    setFeedback("negative");
    setShowForm(true);
  };

  const handleSubmitNegative = async () => {
    await submitFeedback("negative", selectedCategory || undefined, details || undefined);
    setShowForm(false);
    setSubmitted(true);
    sessionStorage.setItem(storageKey, "negative");
  };

  if (submitted || feedback === "positive") {
    return (
      <div className="flex items-center mt-1">
        {submitted ? (
          <ThumbsDown className="h-3.5 w-3.5 text-muted-foreground fill-muted-foreground" />
        ) : (
          <ThumbsUp className="h-3.5 w-3.5 text-muted-foreground fill-muted-foreground" />
        )}
      </div>
    );
  }

  return (
    <div className="mt-1">
      {!showForm && (
        <div className="flex items-center -space-x-2">
          <button
            onClick={handleThumbsUp}
            className="p-0 m-0 leading-none rounded hover:bg-muted transition"
            aria-label="Good response"
          >
            <ThumbsUp className="h-3.5 w-3.5 text-muted-foreground hover:text-foreground" />
          </button>
          <button
            onClick={handleThumbsDown}
            className="p-0 m-0 leading-none rounded hover:bg-muted transition"
            aria-label="Bad response"
          >
            <ThumbsDown className="h-3.5 w-3.5 text-muted-foreground hover:text-foreground" />
          </button>
        </div>
      )}

      {showForm && (
        <div className="bg-muted rounded-xl p-3 mt-1 space-y-2 max-w-[280px]">
          <div className="flex items-center justify-between">
            <p className="text-xs font-medium text-foreground">Share feedback</p>
            <button
              onClick={() => { setShowForm(false); setFeedback(null); }}
              className="p-0.5 rounded hover:bg-background transition"
            >
              <X className="h-3.5 w-3.5 text-muted-foreground" />
            </button>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(selectedCategory === cat ? null : cat)}
                className={`text-[10px] px-2.5 py-1 rounded-full border transition ${
                  selectedCategory === cat
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-background text-foreground border-border hover:bg-accent"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <textarea
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            placeholder="Share details (optional)"
            className="w-full text-xs bg-background border rounded-lg px-2.5 py-1.5 resize-none outline-none focus:ring-1 focus:ring-primary placeholder:text-muted-foreground"
            rows={2}
          />

          <div className="flex justify-end">
            <button
              onClick={handleSubmitNegative}
              className="text-[10px] px-3 py-1 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition font-medium"
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

