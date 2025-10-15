import { useParams, useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { learnTopics } from "@/data/learnTopics";
import { ArrowLeft, AlertCircle, CheckCircle } from "lucide-react";

export default function LearnTopic() {
  const { topicId } = useParams<{ topicId: string }>();
  const navigate = useNavigate();
  const topic = topicId ? learnTopics[topicId] : null;

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
          <h1 className="text-4xl font-bold mb-2">{topic.title}</h1>

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
    </div>
  );
}
