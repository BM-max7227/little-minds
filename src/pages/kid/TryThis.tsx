import { useState, useCallback } from "react";
import { Header } from "@/components/Header";
import { SiteFooter } from "@/components/SiteFooter";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { topics, QuickAction, Skill } from "@/data/kidTopics";
import { Clock, Search, CheckCircle2, Circle, Heart } from "lucide-react";
import { useActivityProgress } from "@/hooks/useActivityProgress";
import { useFavorites } from "@/hooks/useFavorites";
import { ActivityProgressBanner } from "@/components/ActivityProgressBanner";
import { triggerCelebration } from "@/lib/celebration";
import { useToast } from "@/hooks/use-toast";

type ActionItem = (QuickAction | Skill) & {
  topicId: string;
  topicTitle: string;
  type: "quick" | "skill";
};

export default function TryThis() {
  const [timeFilter, setTimeFilter] = useState<number | null>(null);
  const [feelingFilter, setFeelingFilter] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  const { isCompleted, toggleComplete, totalCompleted, streak, todayCompletions } = useActivityProgress();
  const { isFavorite, toggleFavorite, favoriteCount } = useFavorites();
  const { toast } = useToast();

  const allActions: ActionItem[] = [];
  Object.entries(topics).forEach(([topicId, topic]) => {
    topic.quickActions.forEach((action) => {
      allActions.push({ ...action, topicId, topicTitle: topic.title, type: "quick" });
    });
    topic.skills.forEach((skill) => {
      allActions.push({ ...skill, topicId, topicTitle: topic.title, type: "skill" });
    });
  });

  const getActivityId = (action: ActionItem) =>
    `${action.topicId}-${action.type}-${action.title}`.replace(/\s+/g, "-").toLowerCase();

  const filteredActions = allActions.filter((action) => {
    if (timeFilter !== null && action.time !== timeFilter) return false;
    if (feelingFilter && action.topicId !== feelingFilter) return false;
    if (showFavoritesOnly && !isFavorite(getActivityId(action))) return false;
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      if (
        !action.title.toLowerCase().includes(query) &&
        !action.description.toLowerCase().includes(query) &&
        !action.topicTitle.toLowerCase().includes(query)
      )
        return false;
    }
    return true;
  });

  const timeOptions = [
    { label: "5 minutes", value: 5 },
    { label: "10 minutes", value: 10 },
    { label: "15 minutes", value: 15 },
  ];
  const feelingOptions = [
    { label: "Anxious", value: "anxiety" },
    { label: "Sad", value: "sad" },
    { label: "Stressed", value: "stress" },
  ];

  const handleComplete = useCallback((activityId: string, wasCompleted: boolean) => {
    toggleComplete(activityId);
    if (!wasCompleted) {
      const message = triggerCelebration();
      toast({ title: message, duration: 3000 });
    }
  }, [toggleComplete, toast]);

  return (
    <div className="min-h-screen bg-background">
      <Header audience="kid" />
      <main className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Try This</h1>
          <p className="text-lg text-muted-foreground">
            Find quick actions and skills based on what you're feeling
          </p>
        </div>

        {/* Progress Banner */}
        <ActivityProgressBanner
          totalCompleted={totalCompleted}
          streak={streak}
          todayCompletions={todayCompletions}
          totalActivities={allActions.length}
        />

        {/* Search */}
        <div className="mb-6">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search activities..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-8">
          <div className="space-y-2">
            <p className="text-sm font-medium">Time available:</p>
            <div className="flex gap-2">
              <Button variant={timeFilter === null ? "default" : "outline"} size="sm" onClick={() => setTimeFilter(null)}>
                Any
              </Button>
              {timeOptions.map((option) => (
                <Button
                  key={option.value}
                  variant={timeFilter === option.value ? "default" : "outline"}
                  size="sm"
                  onClick={() => setTimeFilter(option.value)}
                >
                  {option.label}
                </Button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-sm font-medium">I'm feeling:</p>
            <div className="flex gap-2">
              <Button variant={feelingFilter === null ? "default" : "outline"} size="sm" onClick={() => setFeelingFilter(null)}>
                All
              </Button>
              {feelingOptions.map((option) => (
                <Button
                  key={option.value}
                  variant={feelingFilter === option.value ? "default" : "outline"}
                  size="sm"
                  onClick={() => setFeelingFilter(option.value)}
                >
                  {option.label}
                </Button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-sm font-medium">My Toolkit:</p>
            <div className="flex gap-2">
              <Button
                variant={showFavoritesOnly ? "default" : "outline"}
                size="sm"
                onClick={() => setShowFavoritesOnly(!showFavoritesOnly)}
              >
                <Heart className={`h-3.5 w-3.5 mr-1 ${showFavoritesOnly ? "fill-current" : ""}`} />
                Favorites{favoriteCount > 0 ? ` (${favoriteCount})` : ""}
              </Button>
            </div>
          </div>
        </div>

        {/* Activity Cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredActions.map((action) => {
            const activityId = getActivityId(action);
            const completed = isCompleted(activityId);
            const favorited = isFavorite(activityId);

            return (
              <Card key={activityId} className={`transition-all ${completed ? "border-primary/40 bg-primary/5" : ""}`}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-lg flex items-center gap-2">
                      {completed && <span className="text-lg">⭐</span>}
                      {action.title}
                    </CardTitle>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => toggleFavorite(activityId)}
                        className="p-1 rounded-full hover:bg-muted transition"
                        aria-label={favorited ? "Remove from favorites" : "Add to favorites"}
                      >
                        <Heart
                          className={`h-4 w-4 transition-colors ${
                            favorited ? "fill-destructive text-destructive" : "text-muted-foreground"
                          }`}
                        />
                      </button>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        <span className="text-xs">{action.time}m</span>
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-xs">
                    {action.topicTitle} • {action.type === "quick" ? "Quick action" : "Skill"}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm">{action.description}</p>
                  {"steps" in action && (
                    <ol className="list-decimal list-inside space-y-1 text-sm">
                      {action.steps.map((step, stepIndex) => (
                        <li key={stepIndex} className="text-xs">
                          {step}
                        </li>
                      ))}
                    </ol>
                  )}
                  <Button
                    variant={completed ? "outline" : "default"}
                    size="sm"
                    className="w-full mt-2"
                    onClick={() => handleComplete(activityId, completed)}
                  >
                    {completed ? (
                      <>
                        <CheckCircle2 className="h-4 w-4 mr-1" /> Done! ✓
                      </>
                    ) : (
                      <>
                        <Circle className="h-4 w-4 mr-1" /> I did it!
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {filteredActions.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              {showFavoritesOnly
                ? "No favorites yet! Tap the heart on activities you love."
                : "No activities match your filters. Try different options."}
            </p>
          </div>
        )}
      </main>
      <SiteFooter />
    </div>
  );
}
