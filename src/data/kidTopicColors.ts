// Shared, cheerful color palette per kid topic so the whole Kids section
// feels warm and colorful (not clinical). Keys match the topic IDs used in
// kidTopics and KidHome.

export interface KidTopicColor {
  /** Background for the round icon tile */
  tile: string;
  /** Hover glow shadow */
  glow: string;
  /** Soft card background tint */
  softBg: string;
  /** Border tint */
  border: string;
  /** Accent text color */
  text: string;
}

export const kidTopicColors: Record<string, KidTopicColor> = {
  anxiety: { tile: "bg-sky-100", glow: "hover:shadow-sky-200/50", softBg: "bg-sky-50/70", border: "border-sky-200", text: "text-sky-700" },
  stress: { tile: "bg-amber-100", glow: "hover:shadow-amber-200/50", softBg: "bg-amber-50/70", border: "border-amber-200", text: "text-amber-700" },
  sad: { tile: "bg-blue-100", glow: "hover:shadow-blue-200/50", softBg: "bg-blue-50/70", border: "border-blue-200", text: "text-blue-700" },
  sleep: { tile: "bg-indigo-100", glow: "hover:shadow-indigo-200/50", softBg: "bg-indigo-50/70", border: "border-indigo-200", text: "text-indigo-700" },
  conflict: { tile: "bg-teal-100", glow: "hover:shadow-teal-200/50", softBg: "bg-teal-50/70", border: "border-teal-200", text: "text-teal-700" },
  socialmedia: { tile: "bg-violet-100", glow: "hover:shadow-violet-200/50", softBg: "bg-violet-50/70", border: "border-violet-200", text: "text-violet-700" },
  anger: { tile: "bg-orange-100", glow: "hover:shadow-orange-200/50", softBg: "bg-orange-50/70", border: "border-orange-200", text: "text-orange-700" },
  bodyimage: { tile: "bg-rose-100", glow: "hover:shadow-rose-200/50", softBg: "bg-rose-50/70", border: "border-rose-200", text: "text-rose-700" },
  bullying: { tile: "bg-emerald-100", glow: "hover:shadow-emerald-200/50", softBg: "bg-emerald-50/70", border: "border-emerald-200", text: "text-emerald-700" },
  grief: { tile: "bg-purple-100", glow: "hover:shadow-purple-200/50", softBg: "bg-purple-50/70", border: "border-purple-200", text: "text-purple-700" },
  other: { tile: "bg-green-100", glow: "hover:shadow-green-200/50", softBg: "bg-green-50/70", border: "border-green-200", text: "text-green-700" },
};

const fallback: KidTopicColor = {
  tile: "bg-primary/10",
  glow: "hover:shadow-primary/20",
  softBg: "bg-primary/5",
  border: "border-primary/20",
  text: "text-primary",
};

export function getKidTopicColor(topicId: string | undefined): KidTopicColor {
  if (!topicId) return fallback;
  return kidTopicColors[topicId] ?? fallback;
}

// Ordered palette used when cards mix many topics (e.g. the Try This toolkit),
// so adjacent cards still get distinct, cheerful colors.
export const kidColorRotation: KidTopicColor[] = [
  kidTopicColors.anxiety,
  kidTopicColors.stress,
  kidTopicColors.bullying,
  kidTopicColors.socialmedia,
  kidTopicColors.anger,
  kidTopicColors.conflict,
  kidTopicColors.bodyimage,
  kidTopicColors.sleep,
  kidTopicColors.grief,
  kidTopicColors.sad,
];
