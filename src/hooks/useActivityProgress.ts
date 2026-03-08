import { useState, useCallback, useEffect } from "react";

export interface ActivityCompletion {
  activityId: string;
  completedAt: string;
}

export interface ProgressData {
  completions: ActivityCompletion[];
  streakDays: number;
  lastActiveDate: string | null;
}

const STORAGE_KEY = "little-minds-activity-progress";

function loadProgress(): ProgressData {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch {}
  return { completions: [], streakDays: 0, lastActiveDate: null };
}

function saveProgress(data: ProgressData) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function getDateString(date: Date = new Date()) {
  return date.toISOString().slice(0, 10);
}

function calculateStreak(data: ProgressData, today: string): number {
  if (!data.lastActiveDate) return 0;
  
  const lastDate = new Date(data.lastActiveDate);
  const todayDate = new Date(today);
  const diffDays = Math.floor((todayDate.getTime() - lastDate.getTime()) / (1000 * 60 * 60 * 24));
  
  if (diffDays === 0) return data.streakDays;
  if (diffDays === 1) return data.streakDays; // will be incremented on new completion
  return 0; // streak broken
}

export function useActivityProgress() {
  const [progress, setProgress] = useState<ProgressData>(loadProgress);

  useEffect(() => {
    saveProgress(progress);
  }, [progress]);

  const isCompleted = useCallback(
    (activityId: string) => progress.completions.some((c) => c.activityId === activityId),
    [progress.completions]
  );

  const toggleComplete = useCallback((activityId: string) => {
    setProgress((prev) => {
      const already = prev.completions.some((c) => c.activityId === activityId);
      if (already) {
        return {
          ...prev,
          completions: prev.completions.filter((c) => c.activityId !== activityId),
        };
      }

      const today = getDateString();
      const currentStreak = calculateStreak(prev, today);
      const isNewDay = prev.lastActiveDate !== today;

      return {
        completions: [...prev.completions, { activityId, completedAt: new Date().toISOString() }],
        streakDays: isNewDay ? currentStreak + 1 : prev.streakDays || 1,
        lastActiveDate: today,
      };
    });
  }, []);

  const totalCompleted = progress.completions.length;
  const streak = calculateStreak(progress, getDateString());
  const todayCompletions = progress.completions.filter(
    (c) => c.completedAt.slice(0, 10) === getDateString()
  ).length;

  return { isCompleted, toggleComplete, totalCompleted, streak: streak || progress.streakDays, todayCompletions };
}
