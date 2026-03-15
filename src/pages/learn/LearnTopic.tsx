import { useParams, useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { SiteFooter } from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { learnTopics } from "@/data/learnTopics";
import { topics as kidTopics } from "@/data/kidTopics";
import { useLearnProgress } from "@/hooks/useLearnProgress";
import { ArrowLeft, AlertCircle, CheckCircle, BookOpen, Eye } from "lucide-react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const topicKeys = Object.keys(learnTopics);

export default function LearnTopic() {
  const { topicId } = useParams<{ topicId: string }>();
  const navigate = useNavigate();
  const topic = topicId ? learnTopics[topicId] : null;
  const { markRead, isRead } = useLearnProgress(topicKeys.length);
  const hasKidVersion = topicId ? !!kidTopics[topicId] : false;

  // Mark as read when the user visits the page
  useEffect(() => {
    if (topicId && topic) {
      markRead(topicId);
    }
  }, [topicId, topic, markRead]);

  if (!topic) {
    return (
      <div className="min-h-screen bg-background">
        <Header audience="learn" />
        <main className="container mx-auto px-4 py-8">
          <p>Topic not found</p>
          <Button onClick={() => navigate("/learn")} className="mt-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Topics
          </Button>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header audience="learn" />
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <Button
          variant="ghost"
          onClick={() => navigate("/learn")}
          className="mb-4"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Topics
        </Button>

        <article className="prose prose-slate max-w-none">
          <div className="flex items-center justify-between mb-2">
            <h1 className="text-4xl font-bold mb-0">{topic.title}</h1>
            {topicId && isRead(topicId) && (
              <span className="flex items-center gap-1 text-sm text-primary font-medium">
                <CheckCircle className="h-4 w-4" /> Read
              </span>
            )}
          </div>

          {/* What Your Kid Is Reading cross-link */}
          {hasKidVersion && topicId && (
            <Card className="mb-8 border-primary/20 bg-primary/5">
              <CardContent className="py-4">
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Eye className="h-4 w-4 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">What your child sees on this topic</p>
                    <p className="text-xs text-muted-foreground">
                      The Kids section has an age-appropriate version with quick actions, skills, and videos.
                    </p>
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <Link to={`/kid/${topicId}`}>View kid version</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">What It Is</h2>
            <p className="text-base leading-relaxed">{topic.description}</p>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">How It Can Look in Kids and Teens</h2>
            
            <div className="grid gap-6 md:grid-cols-3 mb-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Feelings</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {topic.howItFeels.feelings.map((feeling, index) => (
                      <li key={index} className="text-sm flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{feeling}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Behaviors</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {topic.howItFeels.behaviors.map((behavior, index) => (
                      <li key={index} className="text-sm flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{behavior}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Body Signs</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {topic.howItFeels.bodySigns.map((sign, index) => (
                      <li key={index} className="text-sm flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{sign}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">What Helps</h2>
            
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">At Home</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {topic.whatHelps.atHome.map((item, index) => (
                      <li key={index} className="text-sm flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">At School</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {topic.whatHelps.atSchool.map((item, index) => (
                      <li key={index} className="text-sm flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-amber-200 bg-amber-50/50">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-amber-600" />
                    When to Seek Professional Help
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {topic.whatHelps.whenToSeekHelp.map((item, index) => (
                      <li key={index} className="text-sm flex items-start gap-2">
                        <span className="text-amber-600 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Myths and Facts</h2>
            <div className="space-y-4">
              {topic.mythsAndFacts.map((item, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3 mb-3">
                      <span className="text-destructive font-semibold text-sm">MYTH:</span>
                      <p className="text-sm text-muted-foreground">{item.myth}</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-semibold text-sm">FACT:</span>
                      <p className="text-sm">{item.fact}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}
