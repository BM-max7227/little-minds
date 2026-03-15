import { useState, useCallback } from "react";

const STORAGE_KEY = "learn-progress";

function getProgress(): string[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function useLearnProgress(totalTopics: number) {
  const [completed, setCompleted] = useState<string[]>(getProgress);

  const markRead = useCallback((topicId: string) => {
    setCompleted((prev) => {
      if (prev.includes(topicId)) return prev;
      const next = [...prev, topicId];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      return next;
    });
  }, []);

  const unmark = useCallback((topicId: string) => {
    setCompleted((prev) => {
      const next = prev.filter((id) => id !== topicId);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      return next;
    });
  }, []);

  const isRead = useCallback(
    (topicId: string) => completed.includes(topicId),
    [completed]
  );

  return { completed, markRead, unmark, isRead, total: totalTopics };
}
