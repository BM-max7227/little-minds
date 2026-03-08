import { Header } from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { getWordOfTheWeek, getDidYouKnow } from "@/data/kidEngagement";
import { BookOpen, Lightbulb, Sparkles, CheckCircle2, Heart, Trophy } from "lucide-react";

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
  { id: "other", title: "Other", icon: "🌈" },
];

export default function KidHome() {
  const wordOfWeek = getWordOfTheWeek();
  const funFact = getDidYouKnow();

  return (
    <div className="min-h-screen flex flex-col">
      <Header audience="kid" />
      
      <main className="flex-1 py-12">
        <div className="container px-4 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">You Are Not Alone</h1>
            <p className="text-xl text-muted-foreground mb-6">
              Pick what you're dealing with. We'll show ideas, short videos, and tools you can try today.
            </p>
            <Button size="lg" asChild className="text-lg px-8 py-6 rounded-full shadow-md">
              <Link to="/kid/try-this">
                <Sparkles className="h-5 w-5 mr-2" />
                Explore Activities
              </Link>
            </Button>
          </div>

          {/* Word of the Week + Did You Know row */}
          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            {/* Word of the Week */}
            <Card className="border-primary/20 bg-primary/5">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium flex items-center gap-2 text-primary">
                  <BookOpen className="h-4 w-4" />
                  Word of the Week
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold mb-1">{wordOfWeek.word}</p>
                <p className="text-sm text-muted-foreground mb-2">{wordOfWeek.definition}</p>
                <p className="text-xs italic text-muted-foreground/80">💡 {wordOfWeek.example}</p>
              </CardContent>
            </Card>

            {/* Did You Know */}
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

          {/* Try This Highlight Section */}
          <div className="mb-10 rounded-2xl border-2 border-primary/20 bg-gradient-to-br from-primary/5 via-background to-accent/5 p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="space-y-3">
                <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-2">
                  <Sparkles className="h-6 w-6 text-primary" />
                  Your Activity Toolkit
                </h2>
                <p className="text-muted-foreground max-w-lg">
                  Quick actions, skills, and exercises you can try right now. Track your progress, earn badges, and build healthy habits.
                </p>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-primary" /> Track progress</span>
                  <span className="flex items-center gap-1.5"><Trophy className="h-4 w-4 text-primary" /> Earn badges</span>
                  <span className="flex items-center gap-1.5"><Heart className="h-4 w-4 text-primary" /> Save favorites</span>
                </div>
              </div>
              <Button size="lg" asChild className="text-base px-6 py-5 rounded-xl shadow-sm shrink-0">
                <Link to="/kid/try-this">
                  <Sparkles className="h-5 w-5 mr-2" />
                  Open Toolkit
                </Link>
              </Button>
            </div>
          </div>


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
        </div>
      </main>

      <footer className="border-t py-4 text-center">
        <Button variant="link" asChild>
          <Link to="/">← Back to Home</Link>
        </Button>
      </footer>
    </div>
  );
}
