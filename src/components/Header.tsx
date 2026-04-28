import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { AlertCircle, Heart, Menu } from "lucide-react";
import { HelpNowContent } from "@/components/HelpNowContent";
import { Link } from "react-router-dom";
import { AccessibilityControls } from "@/components/AccessibilityControls";
import { GlobalSearch } from "@/components/GlobalSearch";
import logo from "@/assets/logo.png";

interface HeaderProps {
  audience?: "parent" | "kid" | "learn";
}

export function Header({ audience }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const getNavLinks = () => {
    switch (audience) {
      case "parent":
        return [
          { label: "Home", path: "/parent" },
          { label: "Dashboard", path: "/parent/dashboard" },
          { label: "Guides", path: "/parent/quick-guide" },
          { label: "Find Support", path: "/parent/find-support" },
          { label: "Tools", path: "/parent/tools" },
          { label: "About Us", path: "/about" },
          { label: "Contact", path: "/contact" },
        ];
      case "kid":
        return [
          { label: "Home", path: "/kid" },
          { label: "Try This", path: "/kid/try-this" },
          { label: "Breathe", path: "/kid/breathe" },
          { label: "About Us", path: "/about" },
          { label: "Contact", path: "/contact" },
        ];
      case "learn":
        return [
          { label: "Home", path: "/learn" },
          { label: "Topics", path: "/learn" },
          { label: "About Us", path: "/about" },
          { label: "Contact", path: "/contact" },
        ];
      default:
        return [];
    }
  };

  const navLinks = getNavLinks();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[60] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md"
      >
        Skip to main content
      </a>
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <img src={logo} alt="Little Minds Logo" className="h-28 sm:h-32 w-auto" />
        </Link>

        {/* Desktop nav */}
        {navLinks.length > 0 && (
          <nav className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path + link.label}
                to={link.path}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}

        {/* Right side actions */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          <GlobalSearch />

          {/* Accessibility settings */}
          <AccessibilityControls />

          {/* Donate - icon only on mobile, full on sm+ */}
          <Button
            variant="outline"
            size="sm"
            asChild
            className="text-primary border-primary hover:bg-primary hover:text-primary-foreground h-11 w-11 sm:h-9 sm:w-9 p-0 sm:w-auto sm:px-3"
          >
            <Link to="/donate" aria-label="Donate">
              <Heart className="h-5 w-5 sm:h-4 sm:w-4 sm:mr-2" />
              <span className="hidden sm:inline">Donate</span>
            </Link>
          </Button>

          {/* Help Now */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="destructive" size="sm" className="h-11 w-11 sm:h-9 sm:w-9 p-0 sm:w-auto sm:px-3" aria-label="Help Now">
                <AlertCircle className="h-5 w-5 sm:h-4 sm:w-4 sm:mr-2" />
                <span className="hidden sm:inline">Help Now</span>
              </Button>
            </SheetTrigger>
            <SheetContent className="w-full sm:max-w-md overflow-y-auto">
              <HelpNowContent />
            </SheetContent>
          </Sheet>

          {/* Mobile hamburger menu for nav links */}
          {navLinks.length > 0 && (
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="lg:hidden h-11 w-11 sm:h-9 sm:w-9 p-0" aria-label="Open menu">
                  <Menu className="h-6 w-6 sm:h-5 sm:w-5" />
                  <span className="sr-only">Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-72">
                <nav className="flex flex-col gap-4 pt-8">
                  {navLinks.map((link) => (
                    <Link
                      key={link.path + link.label}
                      to={link.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-base font-medium text-foreground hover:text-primary transition-colors py-2 border-b border-border"
                    >
                      {link.label}
                    </Link>
                  ))}

                  {/* Show accessibility on mobile menu too */}
                  <div className="pt-4 sm:hidden">
                    <p className="text-sm text-muted-foreground mb-2">Accessibility</p>
                    <AccessibilityControls />
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          )}
        </div>
      </div>
    </header>
  );
}
