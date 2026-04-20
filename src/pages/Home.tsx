import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Header } from "@/components/Header";
import { SiteFooter } from "@/components/SiteFooter";
import { Heart, Sparkles, BookOpen, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-home.webp";

// Tiny inlined placeholder (LQIP) — paints instantly so users never see gray
const HERO_LQIP =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAVACADASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAUCAwT/xAAlEAACAgIBAwMFAAAAAAAAAAABAgMRAAQSBSExFCLBQVFhcaH/xAAXAQADAQAAAAAAAAAAAAAAAAAAAQMC/8QAGREAAwEBAQAAAAAAAAAAAAAAAAERAjEh/9oADAMBAAIRAxEAPwBvGya2q0nE+0X4vJwdQU6ks86tGkRosV+BeJIep+pEMMzGMM1Flqr+n9y+HafU1uEZXhIvM0bK3Y+Mz12hzLUG2j1CDeDhDTKRasCOx8ecydSn1RrsWmQA2BR73i0SpJUkcipIrBlJbke34xXtrJ72Z+R5Gh47ffBuOCzmor138WoP7GMHCsDyUUx7gdrwwyW+lSKwxxliq0VB8HMe0xN4YYsesD//2Q==";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Full-screen hero — LQIP shows instantly, full image fades in over it */}
      <section
        className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${HERO_LQIP})` }}
      >
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
