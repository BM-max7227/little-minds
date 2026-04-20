import { useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Header } from "@/components/Header";
import { SiteFooter } from "@/components/SiteFooter";
import { Heart, Sparkles, BookOpen, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-home.webp";

export default function Home() {
  // Preload the hero as early as possible — same technique used by Apple, Stripe, Linear
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = heroImage;
    (link as HTMLLinkElement & { fetchPriority?: string }).fetchPriority = "high";
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Full-screen hero — dark base color matches the overlay so there's no flash */}
      <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden bg-[#1a1f2e]">
        {/* Full-quality background image — eager + high priority */}
        <img
          src={heroImage}
          alt="Two children sitting in a meadow reading a book together"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
          decoding="async"
          // @ts-expect-error - fetchpriority is a valid HTML attribute
          fetchpriority="high"
        />
        {/* Branded overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />

        {/* Hero content */}
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-3 drop-shadow-lg">
            Welcome to Little Minds
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 drop-shadow-md leading-relaxed">
            A safe place for kids, parents, and anyone who wants to learn about mental health
          </p>

          {/* Quick path buttons on the hero */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
            <Link
              to="/parent"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-white/60 text-white text-base font-medium backdrop-blur-sm bg-white/10 hover:bg-white/25 transition-all w-full sm:w-auto justify-center"
            >
              <Heart className="h-5 w-5" />
              I'm a Parent
            </Link>
            <Link
              to="/kid"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-white/60 text-white text-base font-medium backdrop-blur-sm bg-white/10 hover:bg-white/25 transition-all w-full sm:w-auto justify-center"
            >
              <Sparkles className="h-5 w-5" />
              I'm a Kid or Teen
            </Link>
            <Link
              to="/learn"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-white/60 text-white text-base font-medium backdrop-blur-sm bg-white/10 hover:bg-white/25 transition-all w-full sm:w-auto justify-center"
            >
              <BookOpen className="h-5 w-5" />
              I Want to Learn
            </Link>
          </div>

        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
