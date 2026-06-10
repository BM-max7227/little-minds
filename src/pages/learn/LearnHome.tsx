import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { SiteFooter } from "@/components/SiteFooter";
import { Header } from "@/components/Header";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { learnTopics } from "@/data/learnTopics";
import { SuggestIdeasBanner } from "@/components/SuggestIdeasBanner";
import { AskHelperPrompt } from "@/components/AskHelperPrompt";
import { useLearnProgress } from "@/hooks/useLearnProgress";
import {
  CheckCircle,
  BookOpen,
  Trophy,
  ArrowRight,
  Cloud,
  Moon,
  Backpack,
  CloudRain,
  Users,
  Smartphone,
  Flame,
  Smile,
  Shield,
  HeartCrack,
  HelpCircle,
  type LucideIcon,
} from "lucide-react";
import { useEffect, useRef } from "react";
import { triggerCelebration } from "@/lib/celebration";

const topicKeys = Object.keys(learnTopics);

// Per-topic icon + soft accent tint. Tints are gentle, calm, and AA-friendly.
const topicStyles: Record<string, { icon: LucideIcon; tile: string; iconColor: string; glow: string }> = {
  anxiety: { icon: Cloud, tile: "bg-sky-100", iconColor: "text-sky-600", glow: "hover:shadow-sky-200/50" },
  sleep: { icon: Moon, tile: "bg-indigo-100", iconColor: "text-indigo-600", glow: "hover:shadow-indigo-200/50" },
  stress: { icon: Backpack, tile: "bg-amber-100", iconColor: "text-amber-600", glow: "hover:shadow-amber-200/50" },
  sad: { icon: CloudRain, tile: "bg-blue-100", iconColor: "text-blue-600", glow: "hover:shadow-blue-200/50" },
  conflict: { icon: Users, tile: "bg-teal-100", iconColor: "text-teal-600", glow: "hover:shadow-teal-200/50" },
  socialmedia: { icon: Smartphone, tile: "bg-violet-100", iconColor: "text-violet-600", glow: "hover:shadow-violet-200/50" },
  anger: { icon: Flame, tile: "bg-orange-100", iconColor: "text-orange-600", glow: "hover:shadow-orange-200/50" },
  bodyimage: { icon: Smile, tile: "bg-rose-100", iconColor: "text-rose-600", glow: "hover:shadow-rose-200/50" },
  bullying: { icon: Shield, tile: "bg-emerald-100", iconColor: "text-emerald-600", glow: "hover:shadow-emerald-200/50" },
  grief: { icon: HeartCrack, tile: "bg-purple-100", iconColor: "text-purple-600", glow: "hover:shadow-purple-200/50" },
  other: { icon: HelpCircle, tile: "bg-green-100", iconColor: "text-green-600", glow: "hover:shadow-green-200/50" },
};

const fallbackStyle = { icon: BookOpen, tile: "bg-muted", iconColor: "text-primary", glow: "hover:shadow-primary/20" };

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
      <SEO title={"Learn About It — Little Minds"} description={"Plain-language guides to anxiety, sleep, stress, sadness, anger, bullying, grief, body image, and more."} path="/learn" />
      <Header audience="learn" />
      <main className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="mb-12 max-w-3xl">
          <h1 className="text-4xl font-bold mb-4">Understand the Issues</h1>
          <p className="text-lg text-muted-foreground">
            Learn how mental health challenges look in kids and teens. Tap any topic below to read more.
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
            const style = topicStyles[topic.id] ?? fallbackStyle;
            const Icon = style.icon;
            return (
              <Link key={topic.id} to={`/learn/${topic.id}`} className="group">
                <Card
                  className={`relative h-full flex flex-col p-7 rounded-3xl border-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${style.glow} ${
                    read ? "border-primary/40 bg-primary/5" : "border-transparent shadow-sm"
                  }`}
                >
                  {read && (
                    <span className="absolute top-5 right-5 flex items-center gap-1 text-xs font-semibold text-primary">
                      <CheckCircle className="h-4 w-4" /> Read
                    </span>
                  )}

                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 ${style.tile}`}>
                    <Icon className={`h-6 w-6 ${style.iconColor}`} aria-hidden="true" />
                  </div>

                  <h2 className="text-xl font-bold mb-2 text-foreground">{topic.title}</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 flex-grow">
                    {topic.description}
                  </p>

                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                    {read ? "Revisit topic" : "Read topic"}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Card>
              </Link>
            );
          })}
        </div>

        <div className="mt-12">
          <AskHelperPrompt
            title="Want to ask about something specific?"
            description="Our AI helper can explain wellbeing topics in plain language and point you to the right page."
          />
        </div>

        <div className="mt-6">
          <SuggestIdeasBanner message="Want us to cover a topic we haven't included? Reach out and let us know!" />
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
