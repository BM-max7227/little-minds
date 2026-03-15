import { Link } from "react-router-dom";
import { SiteFooter } from "@/components/SiteFooter";
import { Header } from "@/components/Header";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { learnTopics } from "@/data/learnTopics";
import { SuggestIdeasBanner } from "@/components/SuggestIdeasBanner";
import { useLearnProgress } from "@/hooks/useLearnProgress";
import { CheckCircle, BookOpen } from "lucide-react";

const topicKeys = Object.keys(learnTopics);

export default function LearnHome() {
  const { completed, isRead } = useLearnProgress(topicKeys.length);
  const progressPercent = topicKeys.length > 0 ? Math.round((completed.length / topicKeys.length) * 100) : 0;

  return (
    <div className="min-h-screen bg-background">
      <Header audience="learn" />
      <main className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="mb-12 max-w-3xl">
          <h1 className="text-4xl font-bold mb-4">Understand the Issues</h1>
          <p className="text-lg text-muted-foreground">
            Learn how mental health challenges look in kids and teens, with clear differences between adult and youth.
          </p>
        </div>

        {/* Progress Tracker */}
        <div className="mb-8 max-w-md">
          <div className="flex items-center gap-2 mb-2">
            <BookOpen className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">
              You've explored {completed.length} of {topicKeys.length} topics
            </span>
          </div>
          <Progress value={progressPercent} className="h-2" />
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Object.values(learnTopics).map((topic) => {
            const read = isRead(topic.id);
            return (
              <Link key={topic.id} to={`/learn/${topic.id}`}>
                <Card className={`h-full transition-all hover:shadow-md hover:scale-[1.02] ${read ? "border-primary/30 bg-primary/5" : ""}`}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-xl">{topic.title}</CardTitle>
                      {read && (
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      )}
                    </div>
                    <CardDescription className="line-clamp-3">
                      {topic.description.substring(0, 120)}...
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            );
          })}
        </div>

        <div className="mt-12">
          <SuggestIdeasBanner message="Want us to cover a topic we haven't included? Reach out and let us know!" />
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
