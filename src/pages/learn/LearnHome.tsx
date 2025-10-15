import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { learnTopics } from "@/data/learnTopics";

export default function LearnHome() {
  return (
    <div className="min-h-screen bg-background">
      <Header audience="learn" />
      <main className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="mb-12 max-w-3xl">
          <h1 className="text-4xl font-bold mb-4">Understand the Issues</h1>
          <p className="text-lg text-muted-foreground">
            Learn how mental health challenges look in kids and teens, with clear differences between adult and youth experiences
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Object.values(learnTopics).map((topic) => (
            <Link key={topic.id} to={`/learn/${topic.id}`}>
              <Card className="h-full transition-all hover:shadow-md hover:scale-[1.02]">
                <CardHeader>
                  <CardTitle className="text-xl">{topic.title}</CardTitle>
                  <CardDescription className="line-clamp-3">
                    {topic.whatItIs[0].substring(0, 120)}...
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
