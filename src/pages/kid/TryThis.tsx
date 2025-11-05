import { useState } from "react";
import { Header } from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { topics, QuickAction, Skill } from "@/data/kidTopics";
import { Clock } from "lucide-react";
type ActionItem = (QuickAction | Skill) & {
  topicId: string;
  topicTitle: string;
  type: "quick" | "skill";
};
export default function TryThis() {
  const [timeFilter, setTimeFilter] = useState<number | null>(null);
  const [feelingFilter, setFeelingFilter] = useState<string | null>(null);
  const allActions: ActionItem[] = [];
  Object.entries(topics).forEach(([topicId, topic]) => {
    topic.quickActions.forEach(action => {
      allActions.push({
        ...action,
        topicId,
        topicTitle: topic.title,
        type: "quick"
      });
    });
    topic.skills.forEach(skill => {
      allActions.push({
        ...skill,
        topicId,
        topicTitle: topic.title,
        type: "skill"
      });
    });
  });
  const filteredActions = allActions.filter(action => {
    if (timeFilter && action.time > timeFilter) return false;
    if (feelingFilter && action.topicId !== feelingFilter) return false;
    return true;
  });
  const timeOptions = [{
    label: "5 minutes",
    value: 5
  }, {
    label: "10 minutes",
    value: 10
  }, {
    label: "15 minutes",
    value: 15
  }];
  const feelingOptions = [{
    label: "Anxious",
    value: "anxiety"
  }, {
    label: "Sad",
    value: "sad"
  }, {
    label: "Stressed",
    value: "stress"
  }];
  return <div className="min-h-screen bg-background">
      <Header audience="kid" />
      <main className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Try This</h1>
          <p className="text-lg text-muted-foreground">Find quick actions and skills based on what you're feeling</p>
        </div>

        <div className="flex flex-wrap gap-4 mb-8">
          <div className="space-y-2">
            
            <div className="flex gap-2">
              
              {timeOptions.map(option => {})}
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-sm font-medium">I'm feeling:</p>
            <div className="flex gap-2">
              <Button variant={feelingFilter === null ? "default" : "outline"} size="sm" onClick={() => setFeelingFilter(null)}>
                All
              </Button>
              {feelingOptions.map(option => <Button key={option.value} variant={feelingFilter === option.value ? "default" : "outline"} size="sm" onClick={() => setFeelingFilter(option.value)}>
                  {option.label}
                </Button>)}
            </div>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredActions.map((action, index) => <Card key={index}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle className="text-lg">{action.title}</CardTitle>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span className="text-xs">{action.time}m</span>
                  </div>
                </div>
                <CardDescription className="text-xs">
                  {action.topicTitle} • {action.type === "quick" ? "Quick action" : "Skill"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">{action.description}</p>
                {"steps" in action && <ol className="list-decimal list-inside space-y-1 mt-3 text-sm">
                    {action.steps.map((step, stepIndex) => <li key={stepIndex} className="text-xs">{step}</li>)}
                  </ol>}
              </CardContent>
            </Card>)}
        </div>

        {filteredActions.length === 0 && <div className="text-center py-12">
            <p className="text-muted-foreground">No activities match your filters. Try different options.</p>
          </div>}
      </main>
    </div>;
}