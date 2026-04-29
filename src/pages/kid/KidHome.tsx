import { Header } from "@/components/Header";
import { SiteFooter } from "@/components/SiteFooter";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { getWordOfTheDay } from "@/data/kidEngagement";
import { useDailyValue } from "@/hooks/useDailyValue";
import { BookOpen, ChevronDown, Sparkles, Wind } from "lucide-react";
import { SuggestIdeasBanner } from "@/components/SuggestIdeasBanner";

const topicCards = [
  { id: "anxiety", title: "Anxiety", icon: "🌊" },
  { id: "stress", title: "Stress About School", icon: "📚" },
  { id: "sad", title: "Sad or Low", icon: "🌧️" },
  { id: "sleep", title: "Trouble Sleeping", icon: "🌙" },
  { id: "conflict", title: "Family or Friend Conflict", icon: "💬" },
  { id: "socialmedia", title: "Online or Social Media Pressure", icon: "📱" },
  { id: "anger", title: "Feeling Angry a Lot", icon: "🔥" },
  { id: "bodyimage", title: "Body Image Worries", icon: "💪" },
  { id: "bullying", title: "Bullying", icon: "🛡️" },
  { id: "grief", title: "Grief and Loss", icon: "🕊️" },
  { id: "other", title: "Other", icon: "✨" },
];

export default function KidHome() {
  const wordOfDay = useDailyValue(getWordOfTheDay, "kid:wordOfDay");

  return (
    <div className="min-h-screen flex flex-col">
      <Header audience="kid" />
      
      <main className="flex-1 py-12">
        <div className="container px-4 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">You Are Not Alone</h1>
            <p className="text-xl text-muted-foreground mb-6">
              Tap a topic below to see ideas, short videos, and tools you can try today.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 rounded-full"
                onClick={() => document.getElementById("topic-grid")?.scrollIntoView({ behavior: "smooth" })}
              >
                <ChevronDown className="h-5 w-5 mr-2" />
                Tap a Topic Below
              </Button>
              <Button size="lg" variant="outline" asChild className="text-lg px-8 py-6 rounded-full">
                <Link to="/kid/try-this">
                  <Sparkles className="h-5 w-5 mr-2" />
                  Activity Toolkit
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-lg px-8 py-6 rounded-full">
                <Link to="/kid/breathe">
                  <Wind className="h-5 w-5 mr-2" />
                  Take a Breath
                </Link>
              </Button>
            </div>
          </div>

          {/* Word of the Day */}
          <div className="mb-10">
            <Card className="border-primary/20 bg-primary/5">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium flex items-center gap-2 text-primary">
                  <BookOpen className="h-4 w-4" />
                  Word of the Day
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold mb-1">{wordOfDay.word}</p>
                <p className="text-sm text-muted-foreground mb-2">{wordOfDay.definition}</p>
                <p className="text-xs italic text-muted-foreground/80">💡 {wordOfDay.example}</p>
              </CardContent>
            </Card>
          </div>

          <div id="topic-grid" className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 scroll-mt-8">
            {topicCards.map((topic) => (
              <Link key={topic.id} to={`/kid/${topic.id}`} className="block group">
                <Card className="h-full transition-all hover:shadow-lg hover:border-primary cursor-pointer">
                  <CardHeader className="text-center pb-2">
                    <div className="text-5xl mb-2">{topic.icon}</div>
                    <CardTitle className="text-base">{topic.title}</CardTitle>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>

          <div className="mt-12">
            <SuggestIdeasBanner message="Don't see what you're looking for? Let us know and we'll try to add it!" />
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
