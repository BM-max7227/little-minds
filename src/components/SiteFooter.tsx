import { Link } from "react-router-dom";
import { Instagram } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t py-8 mt-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center space-y-3 text-sm text-muted-foreground">
          <p>
            This website provides general information about mental health and wellbeing.
            It is <strong>not a substitute</strong> for professional medical advice, diagnosis, or treatment.
          </p>
          <p>
            If you or someone you know is in crisis or danger, please contact your local emergency services immediately.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2 text-xs">
            <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
            <Link to="/about" className="hover:text-foreground transition-colors">About Us</Link>
            <Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link>
            <Link to="/faq" className="hover:text-foreground transition-colors">FAQ</Link>
            <Link to="/disclaimer" className="hover:text-foreground transition-colors">Disclaimer</Link>
            <Link to="/terms" className="hover:text-foreground transition-colors">Terms of Use</Link>
            <Link to="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
          </div>
          <div className="flex justify-center pt-3">
            <a
              href="https://www.instagram.com/littleminds.care"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow Little Minds on Instagram"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              <Instagram className="h-5 w-5" aria-hidden="true" />
              <span className="text-sm font-medium">Follow @littleminds.care</span>
            </a>
          </div>
          <p className="text-xs pt-1">
            Made with care by Bode Munk.
          </p>
        </div>
      </div>
    </footer>
  );
}
