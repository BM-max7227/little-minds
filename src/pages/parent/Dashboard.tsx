import { Header } from "@/components/Header";
import { SiteFooter } from "@/components/SiteFooter";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { TrendingUp, MessageCircle, Lightbulb, Calendar, ArrowRight, BookOpen } from "lucide-react";
import { learnTopics } from "@/data/learnTopics";
import { conversationStarters } from "@/data/parentContent";
import { useDailyValue } from "@/hooks/useDailyValue";

// Rotate content weekly, anchored to Monday.
// Returns the number of whole weeks since a fixed Monday epoch,
// so the value only changes at 00:00 each Monday (local time).
function getWeekIndex() {
  // Fixed Monday reference: 2024-01-01 was a Monday.
  const epoch = new Date(2024, 0, 1).getTime();
  const now = new Date();
  // Snap "now" to start of today (local) to avoid mid-day rollovers.
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
  const daysSinceEpoch = Math.floor((today - epoch) / (24 * 60 * 60 * 1000));
  return Math.floor(daysSinceEpoch / 7);
}

const weeklyTips = [
  { title: "Start with listening", tip: "This week, try spending 5 minutes of uninterrupted listening when your child talks. No advice, just presence.", icon: "👂" },
  { title: "Routine check-in", tip: "Pick one consistent time each day (e.g., bedtime) to ask: 'What was the best and hardest part of today?'", icon: "🕐" },
  { title: "Model your feelings", tip: "Share your own emotions this week: 'I felt frustrated today when...' This teaches kids it's safe to express feelings.", icon: "💬" },
  { title: "Screen-free connection", tip: "Plan 20 minutes of phone-free time together this week. Play a game, take a walk, or just sit and chat.", icon: "📵" },
  { title: "Celebrate small wins", tip: "Notice and name one positive thing your child does each day, no matter how small. 'I saw you were patient with your sister — that was great.'", icon: "🎉" },
  { title: "Name the emotion", tip: "When your child is upset, try naming what you think they feel: 'It looks like you're feeling disappointed.' This builds emotional literacy.", icon: "🧠" },
  { title: "Practice together", tip: "Try a breathing exercise together this week. Even 2 minutes of deep breathing before bed can build a calming habit.", icon: "🌬️" },
  { title: "Reassure safety", tip: "Remind your child: 'You can always tell me anything. I'm on your team, no matter what.'", icon: "🛡️" },
];

// Topic icons for display
const topicIcons: Record<string, string> = {
  anxiety: "😰",
  sleep: "🌙",
  stress: "📚",
  sad: "🌧️",
  conflict: "💬",
  socialmedia: "📱",
  anger: "🔥",
  bodyimage: "💪",
  bullying: "🛡️",
  grief: "💔",
  other: "❓",
};

export default function Dashboard() {
  // Re-evaluates whenever the local day changes (covers the Monday rollover too)
  const week = useDailyValue(getWeekIndex, "parent:weekIndex");

  // Rotate weekly content
  const tipOfWeek = weeklyTips[week % weeklyTips.length];
  const ageGroups = Object.keys(conversationStarters) as Array<keyof typeof conversationStarters>;
  const starterGroup = ageGroups[week % ageGroups.length];
  const starters = conversationStarters[starterGroup];
  const starterOfWeek = starters[week % starters.length];

  // Trending topics from learnTopics (valid IDs)
  const topicKeys = Object.keys(learnTopics);
  const trendingTopics = [
    learnTopics[topicKeys[week % topicKeys.length]],
    learnTopics[topicKeys[(week + 3) % topicKeys.length]],
    learnTopics[topicKeys[(week + 6) % topicKeys.length]],
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header audience="parent" />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-muted/30 py-12">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">This Week's Overview</h1>
              <p className="text-lg text-muted-foreground">
                Fresh insights and resources to support your child's wellbeing
              </p>
              <p className="text-sm text-muted-foreground mt-1 flex items-center gap-1.5">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
                New content every Monday
              </p>
            </div>
          </div>
        </section>

        <div className="container px-4 py-10">
          <div className="max-w-5xl mx-auto space-y-10">

            {/* Tip of the Week */}
            <section>
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Lightbulb className="h-5 w-5 text-primary" />
                Tip of the Week
              </h2>
              <Card className="border-primary/20 bg-primary/5">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <span className="text-2xl">{tipOfWeek.icon}</span>
                    {tipOfWeek.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">{tipOfWeek.tip}</p>
                </CardContent>
              </Card>
            </section>

            {/* Conversation Starter */}
            <section>
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <MessageCircle className="h-5 w-5 text-primary" />
                Conversation Starter of the Week
              </h2>
              <Card>
                <CardHeader className="pb-2">
                  <CardDescription>For ages {starterGroup}</CardDescription>
                </CardHeader>
                <CardContent>
                  <blockquote className="text-lg italic border-l-4 border-primary pl-4 py-2">
                    "{starterOfWeek}"
                  </blockquote>
                  <div className="mt-4">
                    <Button variant="outline" size="sm" asChild>
                      <Link to="/parent/conversation-starters">
                        See all conversation starters <ArrowRight className="ml-1 h-3.5 w-3.5" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Trending Topics */}
            <section>
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                Topics to Explore This Week
              </h2>
              <div className="grid sm:grid-cols-3 gap-4">
                {trendingTopics.map((topic) => (
                  <Card key={topic.id} className="hover:shadow-md transition-shadow">
                    <CardHeader className="pb-2">
                      <span className="text-3xl mb-2">{topicIcons[topic.id] || "📖"}</span>
                      <CardTitle className="text-base">{topic.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-xs text-muted-foreground line-clamp-2 mb-3">
                        {topic.description}
                      </p>
                      <Button variant="ghost" size="sm" asChild className="p-0 h-auto text-primary">
                        <Link to={`/learn/${topic.id}`}>
                          Learn more <ArrowRight className="ml-1 h-3 w-3" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Quick Links */}
            <section>
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary" />
                Quick Access
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  { to: "/parent/quick-guide", icon: "📋", title: "Quick Guide", desc: "4 key steps to support your child" },
                  { to: "/parent/find-support", icon: "🤝", title: "Find Support", desc: "Professional help & how to choose" },
                  { to: "/parent/tools", icon: "🛠️", title: "Tools & Templates", desc: "Checklists & planning downloads" },
                  { to: "/parent/conversation-starters", icon: "💬", title: "All Conversation Starters", desc: "Age-appropriate phrases" },
                ].map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="group flex items-center gap-3 rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground px-4 py-3 text-left transition-colors"
                  >
                    <span className="text-2xl shrink-0" aria-hidden="true">{item.icon}</span>
                    <span className="flex-1 min-w-0">
                      <span className="block font-semibold text-sm leading-tight">{item.title}</span>
                      <span className="block text-xs text-muted-foreground mt-0.5 leading-snug">{item.desc}</span>
                    </span>
                    <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground group-hover:text-foreground transition-colors" />
                  </Link>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
