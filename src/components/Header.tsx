import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { AlertCircle, Phone, MessageSquare, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { AccessibilityControls } from "@/components/AccessibilityControls";

interface HeaderProps {
  audience?: "parent" | "kid" | "learn";
}

export function Header({ audience }: HeaderProps) {
  const getNavLinks = () => {
    switch (audience) {
      case "parent":
        return [
          { label: "Home", path: "/parent" },
          { label: "Guides", path: "/parent/quick-guide" },
          { label: "Find Support", path: "/parent/find-support" },
          { label: "Tools", path: "/parent/tools" },
          { label: "About Us", path: "/about" },
          { label: "FAQ", path: "/faq" },
        ];
      case "kid":
        return [
          { label: "Home", path: "/kid" },
          { label: "Pick a Topic", path: "/kid" },
          { label: "Try This", path: "/kid/try-this" },
          { label: "About Us", path: "/about" },
          { label: "FAQ", path: "/faq" },
        ];
      case "learn":
        return [
          { label: "Home", path: "/learn" },
          { label: "Topics", path: "/learn" },
          { label: "About Us", path: "/about" },
          { label: "FAQ", path: "/faq" },
        ];
      default:
        return [];
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-full bg-primary" />
          <span className="font-semibold text-lg">Little Minds</span>
        </Link>

        {audience && (
          <nav className="hidden md:flex items-center space-x-6">
            {getNavLinks().map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}

        <div className="flex items-center space-x-2">
          <AccessibilityControls />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="destructive" size="sm">
                <AlertCircle className="mr-2 h-4 w-4" />
                Help Now
              </Button>
            </SheetTrigger>
            <SheetContent className="w-full sm:max-w-md">
              <div className="space-y-6 pt-6">
                <div className="space-y-3">
                  <div className="flex items-start space-x-3 p-4 border border-destructive rounded-lg bg-destructive/5">
                    <AlertCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                    <div className="text-sm">
                      <p className="font-semibold text-destructive mb-1">
                        If you are in immediate danger
                      </p>
                      <p>Call your local emergency number immediately</p>
                    </div>
                  </div>

                  <div className="p-4 border rounded-lg">
                    <p className="font-semibold mb-2">Need help now?</p>
                    <p className="text-sm text-muted-foreground mb-3">
                      Talk to a trusted adult or contact a crisis line
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="font-semibold">Crisis Hotlines</h3>
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full justify-start" asChild>
                      <a href="tel:placeholder1">
                        <Phone className="mr-2 h-4 w-4" />
                        Crisis Hotline 1 (Add Number)
                      </a>
                    </Button>
                    <Button variant="outline" className="w-full justify-start" asChild>
                      <a href="tel:placeholder2">
                        <Phone className="mr-2 h-4 w-4" />
                        Crisis Hotline 2 (Add Number)
                      </a>
                    </Button>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="font-semibold">Text Chat Support</h3>
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full justify-start" asChild>
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        <MessageSquare className="mr-2 h-4 w-4" />
                        Text Chat 1 (Add Link)
                        <ExternalLink className="ml-auto h-3 w-3" />
                      </a>
                    </Button>
                    <Button variant="outline" className="w-full justify-start" asChild>
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        <MessageSquare className="mr-2 h-4 w-4" />
                        Text Chat 2 (Add Link)
                        <ExternalLink className="ml-auto h-3 w-3" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>

          <Button
            variant="ghost"
            size="sm"
            asChild
            className="text-muted-foreground"
          >
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                window.history.replaceState(null, "", "/");
              }}
            >
              Quick Exit
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
