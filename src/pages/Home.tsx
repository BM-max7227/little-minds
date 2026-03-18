import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Header } from "@/components/Header";
import { SiteFooter } from "@/components/SiteFooter";
import { Heart, Sparkles, BookOpen, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-home.jpg";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Full-screen hero */}
      <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <img
          src={heroImage}
          alt="Children playing outdoors in golden sunlight"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Branded overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />

        {/* Hero content */}
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
            Welcome to Little Minds
          </h1>
          <p className="text-lg md:text-2xl text-white/90 mb-8 drop-shadow-md leading-relaxed">
            A safe place for kids, parents, and anyone who wants to learn about mental health
          </p>
          <button
            onClick={() => document.getElementById("paths")?.scrollIntoView({ behavior: "smooth" })}
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full border-2 border-white/70 text-white text-lg font-medium backdrop-blur-sm bg-white/10 hover:bg-white/20 transition-all"
          >
            Get Started
            <ChevronDown className="h-5 w-5 animate-bounce" />
          </button>
        </div>
      </section>

      {/* Path cards below the fold */}
      <main id="paths" className="py-16 scroll-mt-8">
        <div className="container max-w-6xl px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Choose Your Path</h2>
            <p className="text-lg text-muted-foreground">
              Pick the one that fits you best
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <Link to="/parent" className="block group">
              <Card className="h-full transition-all hover:shadow-lg hover:border-primary cursor-pointer">
                <CardHeader className="space-y-4">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                    <Heart className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl text-center">I am a parent</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-base">
                    Get steps to support your child and find professional help
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>

            <Link to="/kid" className="block group">
              <Card className="h-full transition-all hover:shadow-lg hover:border-primary cursor-pointer">
                <CardHeader className="space-y-4">
                  <div className="h-16 w-16 rounded-full bg-secondary/20 flex items-center justify-center mx-auto group-hover:bg-secondary/30 transition-colors">
                    <Sparkles className="h-8 w-8 text-secondary-foreground" />
                  </div>
                  <CardTitle className="text-2xl text-center">I am a kid or teen</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-base">
                    Pick what you're dealing with and get ideas, videos, and tools
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>

            <Link to="/learn" className="block group">
              <Card className="h-full transition-all hover:shadow-lg hover:border-primary cursor-pointer">
                <CardHeader className="space-y-4">
                  <div className="h-16 w-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto group-hover:bg-accent/30 transition-colors">
                    <BookOpen className="h-8 w-8 text-accent-foreground" />
                  </div>
                  <CardTitle className="text-2xl text-center">I want to learn more</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-base">
                    Understand the topics and how they can look different for kids
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
