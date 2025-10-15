import { Header } from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

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
  return (
    <div className="min-h-screen flex flex-col">
      <Header audience="kid" />
      
      <main className="flex-1 py-12">
        <div className="container px-4 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">You Are Not Alone</h1>
            <p className="text-xl text-muted-foreground">
              Pick what you're dealing with. We'll show ideas, short videos, and tools you can try today.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
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
