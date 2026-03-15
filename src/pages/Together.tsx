import { useState, useCallback } from "react";
import { Header } from "@/components/Header";
import { SiteFooter } from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { conversationCards, categoryLabels, ConversationCard } from "@/data/togetherPrompts";
import { Shuffle, ArrowLeft, Heart } from "lucide-react";
import { Link } from "react-router-dom";

export default function Together() {
  const [categoryFilter, setCategoryFilter] = useState<ConversationCard["category"] | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);

  const filteredCards = categoryFilter
    ? conversationCards.filter((c) => c.category === categoryFilter)
    : conversationCards;

  const currentCard = filteredCards[currentIndex % filteredCards.length];

  const nextCard = useCallback(() => {
    setIsFlipping(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % filteredCards.length);
      setIsFlipping(false);
    }, 250);
  }, [filteredCards.length]);

  const randomCard = useCallback(() => {
    setIsFlipping(true);
    setTimeout(() => {
      let next = Math.floor(Math.random() * filteredCards.length);
      if (next === currentIndex % filteredCards.length && filteredCards.length > 1) {
        next = (next + 1) % filteredCards.length;
      }
      setCurrentIndex(next);
      setIsFlipping(false);
    }, 250);
  }, [filteredCards.length, currentIndex]);

  const handleCategoryChange = (cat: ConversationCard["category"] | null) => {
    setCategoryFilter(cat);
    setCurrentIndex(0);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header audience="parent" />

      <main className="flex-1 py-12">
        <div className="container px-4 max-w-3xl mx-auto">
          <div className="mb-4">
            <Button variant="ghost" size="sm" asChild className="mb-4">
              <Link to="/">
                <ArrowLeft className="h-4 w-4 mr-2" /> Back Home
              </Link>
            </Button>
          </div>

          <div className="text-center mb-10">
            <div className="text-5xl mb-4">👨‍👩‍👧‍👦</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Talk Together</h1>
            <p className="text-xl text-muted-foreground mb-2">
              Sit down together and flip through conversation cards.
            </p>
            <p className="text-sm text-muted-foreground">
              No right or wrong answers. Just a chance to listen, share, and connect.
            </p>
          </div>

          {/* Category filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            <Button
              variant={categoryFilter === null ? "default" : "outline"}
              size="sm"
              className="rounded-full"
              onClick={() => handleCategoryChange(null)}
            >
              All Topics
            </Button>
            {(Object.entries(categoryLabels) as [ConversationCard["category"], typeof categoryLabels.feelings][]).map(
              ([key, val]) => (
                <Button
                  key={key}
                  variant={categoryFilter === key ? "default" : "outline"}
                  size="sm"
                  className="rounded-full"
                  onClick={() => handleCategoryChange(key)}
                >
                  {val.emoji} {val.label}
                </Button>
              )
            )}
          </div>

          {/* Card display */}
          <div className="flex justify-center mb-8">
            <div
              className={`w-full max-w-md transition-all duration-250 ${
                isFlipping ? "opacity-0 scale-95" : "opacity-100 scale-100"
              }`}
            >
              <Card className="border-2 border-primary/20 shadow-lg">
                <CardContent className="pt-10 pb-10 px-8 text-center min-h-[240px] flex flex-col items-center justify-center gap-4">
                  <span className="text-5xl">{currentCard?.emoji}</span>
                  <p className="text-xl sm:text-2xl font-medium leading-relaxed">
                    {currentCard?.prompt}
                  </p>
                  <span className="text-xs text-muted-foreground px-3 py-1 rounded-full bg-muted">
                    {categoryLabels[currentCard?.category]?.label}
                  </span>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Controls */}
          <div className="flex justify-center gap-4 mb-12">
            <Button onClick={nextCard} size="lg" className="rounded-full px-8">
              Next Card →
            </Button>
            <Button onClick={randomCard} variant="outline" size="lg" className="rounded-full">
              <Shuffle className="h-4 w-4 mr-2" /> Random
            </Button>
          </div>

          {/* Tips */}
          <Card className="bg-muted/30 border-muted">
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <Heart className="h-4 w-4 text-primary" /> Tips for a great conversation
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>🎧 Put phones away and give each other your full attention</li>
                <li>💛 Listen without judging or jumping in to fix things</li>
                <li>🔄 Take turns. Parents should share too, not just ask questions</li>
                <li>⏱️ Even 10 minutes makes a difference</li>
                <li>🙅 It is okay to skip a card if it does not feel right today</li>
              </ul>
            </CardContent>
          </Card>

          <div className="text-center mt-8 text-sm text-muted-foreground">
            <p>
              Want more conversation ideas? Check out the{" "}
              <Link to="/parent/conversation-starters" className="text-primary hover:underline">
                Conversation Starters
              </Link>{" "}
              in the Parent section for age specific prompts.
            </p>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
