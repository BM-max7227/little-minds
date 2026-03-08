import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

interface SuggestIdeasBannerProps {
  message?: string;
}

export function SuggestIdeasBanner({ message = "Have an idea for something we should add? We'd love to hear from you!" }: SuggestIdeasBannerProps) {
  return (
    <div className="bg-primary/5 border border-primary/15 rounded-2xl p-6 sm:p-8 text-center max-w-2xl mx-auto">
      <MessageCircle className="h-8 w-8 text-primary mx-auto mb-3" />
      <p className="text-base sm:text-lg text-foreground mb-4">
        {message}
      </p>
      <Button asChild variant="outline" className="rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
        <Link to="/contact">
          <MessageCircle className="h-4 w-4 mr-2" />
          Contact Us
        </Link>
      </Button>
    </div>
  );
}
