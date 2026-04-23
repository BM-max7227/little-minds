import { useEffect, useState, useRef } from "react";

/**
 * Returns a value derived from the current date and refreshes it whenever
 * the local calendar day changes — without requiring a page reload.
 *
 * Triggers re-evaluation on:
 *  - mount
 *  - browser tab regaining focus / becoming visible
 *  - a scheduled timer that fires at the next local midnight (and reschedules)
 */
export function useDailyValue<T>(getter: () => T): T {
  const getterRef = useRef(getter);
  getterRef.current = getter;

  const [value, setValue] = useState<T>(() => getter());
  const lastDayKeyRef = useRef<string>(dayKey());

  useEffect(() => {
    let timeoutId: number | undefined;

    const refreshIfNewDay = () => {
      const key = dayKey();
      if (key !== lastDayKeyRef.current) {
        lastDayKeyRef.current = key;
        setValue(getterRef.current());
      }
    };

    const scheduleMidnight = () => {
      const now = new Date();
      const nextMidnight = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate() + 1,
        0,
        0,
        5 // small buffer past midnight
      );
      const delay = Math.max(1000, nextMidnight.getTime() - now.getTime());
      timeoutId = window.setTimeout(() => {
        refreshIfNewDay();
        scheduleMidnight();
      }, delay);
    };

    const onVisibility = () => {
      if (document.visibilityState === "visible") refreshIfNewDay();
    };

    window.addEventListener("focus", refreshIfNewDay);
    document.addEventListener("visibilitychange", onVisibility);
    scheduleMidnight();

    // Run once in case time has passed since initial state was set
    refreshIfNewDay();

    return () => {
      window.removeEventListener("focus", refreshIfNewDay);
      document.removeEventListener("visibilitychange", onVisibility);
      if (timeoutId !== undefined) window.clearTimeout(timeoutId);
    };
  }, []);

  return value;
}

function dayKey() {
  const d = new Date();
  return `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
}
