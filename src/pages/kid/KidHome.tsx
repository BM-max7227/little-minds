import { Header } from "@/components/Header";
import { SEO } from "@/components/SEO";
import { SiteFooter } from "@/components/SiteFooter";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { getWordOfTheDay, getDidYouKnow } from "@/data/kidEngagement";
import { useDailyValue } from "@/hooks/useDailyValue";
import { BookOpen, Lightbulb, ChevronDown, Sparkles, Wind } from "lucide-react";
import { SuggestIdeasBanner } from "@/components/SuggestIdeasBanner";

const topicCards = [
  { id: "anxiety", title: "Anxiety", icon: "🌊", tile: "bg-sky-100", glow: "hover:shadow-sky-200/50" },
  { id: "stress", title: "Stress About School", icon: "📚", tile: "bg-amber-100", glow: "hover:shadow-amber-200/50" },
  { id: "sad", title: "Sad or Low", icon: "🌧️", tile: "bg-blue-100", glow: "hover:shadow-blue-200/50" },
  { id: "sleep", title: "Trouble Sleeping", icon: "🌙", tile: "bg-indigo-100", glow: "hover:shadow-indigo-200/50" },
  { id: "conflict", title: "Family or Friend Conflict", icon: "💬", tile: "bg-teal-100", glow: "hover:shadow-teal-200/50" },
  { id: "socialmedia", title: "Online or Social Media Pressure", icon: "📱", tile: "bg-violet-100", glow: "hover:shadow-violet-200/50" },
  { id: "anger", title: "Feeling Angry a Lot", icon: "🔥", tile: "bg-orange-100", glow: "hover:shadow-orange-200/50" },
  { id: "bodyimage", title: "Body Image Worries", icon: "💪", tile: "bg-rose-100", glow: "hover:shadow-rose-200/50" },
  { id: "bullying", title: "Bullying", icon: "🛡️", tile: "bg-emerald-100", glow: "hover:shadow-emerald-200/50" },
  { id: "grief", title: "Grief and Loss", icon: "🕊️", tile: "bg-purple-100", glow: "hover:shadow-purple-200/50" },
  { id: "other", title: "Other", icon: "✨", tile: "bg-green-100", glow: "hover:shadow-green-200/50" },
];

export default function KidHome() {
  const wordOfDay = useDailyValue(getWordOfTheDay, "kid:wordOfDay");
  const funFact = useDailyValue(getDidYouKnow, "kid:didYouKnow");

  return (
    <div className="min-h-screen flex flex-col">
      <SEO title={"For Kids and Teens — Little Minds"} description={"Tap a topic to explore feelings, get ideas you can try today, and watch short videos. You are not alone."} path="/kid" />
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

          {/* Word of the Day + Did You Know row */}
          <div className="grid sm:grid-cols-2 gap-4 mb-10">
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
            <Card className="border-secondary/20 bg-secondary/5">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium flex items-center gap-2 text-secondary-foreground">
                  <Lightbulb className="h-4 w-4" />
                  Did You Know?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed">{funFact}</p>
              </CardContent>
            </Card>
          </div>

          <div id="topic-grid" className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 scroll-mt-8">
            {topicCards.map((topic) => {
              const color = getKidTopicColor(topic.id);
              return (
              <Link key={topic.id} to={`/kid/${topic.id}`} className="block group">
                <Card
                  className={`h-full rounded-3xl border-2 ${color.border} ${color.softBg} shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${topic.glow} cursor-pointer`}
                >
                  <CardHeader className="text-center pb-4 pt-6">
                    <div
                      className={`mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-2xl text-4xl transition-transform duration-300 group-hover:scale-105 ${topic.tile}`}
                    >
                      {topic.icon}
                    </div>
                    <CardTitle className="text-base">{topic.title}</CardTitle>
                  </CardHeader>
                </Card>
              </Link>
              );
            })}
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
