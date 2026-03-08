import { Star, Flame, Trophy, Download } from "lucide-react";
import { downloadBadgeCard } from "@/lib/shareBadgeCard";
import { useToast } from "@/hooks/use-toast";

interface ActivityProgressBannerProps {
  totalCompleted: number;
  streak: number;
  todayCompletions: number;
  totalActivities: number;
}

const BADGES = [
  { threshold: 1, label: "First Step", icon: "⭐" },
  { threshold: 5, label: "Getting Going", icon: "🌟" },
  { threshold: 10, label: "Wellbeing Explorer", icon: "🧭" },
  { threshold: 20, label: "Mind Champion", icon: "🏆" },
  { threshold: 35, label: "Super Star", icon: "💫" },
  { threshold: 50, label: "Legendary", icon: "👑" },
];

export function ActivityProgressBanner({
  totalCompleted,
  streak,
  todayCompletions,
  totalActivities,
}: ActivityProgressBannerProps) {
  const progressPercent = Math.min(100, Math.round((totalCompleted / totalActivities) * 100));
  const earnedBadges = BADGES.filter((b) => totalCompleted >= b.threshold);
  const nextBadge = BADGES.find((b) => totalCompleted < b.threshold);
  const { toast } = useToast();

  const handleDownloadBadge = async (badgeLabel: string) => {
    await downloadBadgeCard(badgeLabel, totalCompleted);
    toast({
      title: "Badge card downloaded! 🎉",
      description: "Share it with your friends and family!",
    });
  };

  return (
    <div className="rounded-2xl border bg-card p-5 mb-8 space-y-4">
      {/* Stats row */}
      <div className="flex flex-wrap gap-6">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center">
            <Star className="h-4 w-4 text-primary" />
          </div>
          <div>
            <p className="text-2xl font-bold leading-none">{totalCompleted}</p>
            <p className="text-xs text-muted-foreground">Completed</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-full bg-destructive/10 flex items-center justify-center">
            <Flame className="h-4 w-4 text-destructive" />
          </div>
          <div>
            <p className="text-2xl font-bold leading-none">{streak}</p>
            <p className="text-xs text-muted-foreground">Day streak</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-full bg-secondary/20 flex items-center justify-center">
            <Trophy className="h-4 w-4 text-secondary-foreground" />
          </div>
          <div>
            <p className="text-2xl font-bold leading-none">{todayCompletions}</p>
            <p className="text-xs text-muted-foreground">Today</p>
          </div>
        </div>
      </div>

      {/* Progress bar */}
      <div>
        <div className="flex justify-between text-xs text-muted-foreground mb-1">
          <span>{progressPercent}% complete</span>
          <span>{totalCompleted}/{totalActivities} activities</span>
        </div>
        <div className="h-2.5 rounded-full bg-muted overflow-hidden">
          <div
            className="h-full rounded-full bg-primary transition-all duration-500"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Badges */}
      {earnedBadges.length > 0 && (
        <div>
          <p className="text-xs font-medium text-muted-foreground mb-2">Badges earned (tap to download card)</p>
          <div className="flex flex-wrap gap-2">
            {earnedBadges.map((badge) => (
              <button
                key={badge.label}
                onClick={() => handleDownloadBadge(badge.label)}
                className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium hover:bg-primary/20 transition group"
              >
                {badge.icon} {badge.label}
                <Download className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Next badge hint */}
      {nextBadge && (
        <p className="text-xs text-muted-foreground">
          🎯 {nextBadge.threshold - totalCompleted} more to earn <strong>{nextBadge.icon} {nextBadge.label}</strong>
        </p>
      )}
    </div>
  );
}
