import { Link } from "react-router-dom";
import { SiteFooter } from "@/components/SiteFooter";
import { Header } from "@/components/Header";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { learnTopics } from "@/data/learnTopics";
import { SuggestIdeasBanner } from "@/components/SuggestIdeasBanner";
import { useLearnProgress } from "@/hooks/useLearnProgress";
import { CheckCircle, BookOpen, Trophy } from "lucide-react";
import { useEffect, useRef } from "react";
import { triggerCelebration } from "@/lib/celebration";

const topicKeys = Object.keys(learnTopics);

export default function LearnHome() {
  const { completed, isRead } = useLearnProgress(topicKeys.length);
  const progressPercent = topicKeys.length > 0 ? Math.round((completed.length / topicKeys.length) * 100) : 0;
  const allComplete = completed.length === topicKeys.length && topicKeys.length > 0;
  const celebratedRef = useRef(false);

  useEffect(() => {
    if (allComplete && !celebratedRef.current) {
      celebratedRef.current = true;
      triggerCelebration();
    }
  }, [allComplete]);

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

        {/* Completion Celebration */}
        {allComplete && (
          <div className="mb-8 max-w-md p-4 rounded-lg border border-primary/30 bg-primary/5 animate-fade-in">
            <div className="flex items-center gap-3">
              <Trophy className="h-6 w-6 text-primary flex-shrink-0" />
              <div>
                <p className="font-semibold text-foreground">Congratulations! 🎉</p>
                <p className="text-sm text-muted-foreground">You've explored all {topicKeys.length} topics. You're building a great understanding of children's mental health!</p>
              </div>
            </div>
          </div>
        )}

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
