import { useEffect, useState, useRef } from "react";

/**
 * Returns a value derived from the current date and refreshes it whenever
 * the local calendar day changes — without requiring a page reload.
 *
 * If a `cacheKey` is provided, the value is locked-in for the calendar day
 * via localStorage so it cannot drift mid-day even if the getter or clock
 * behaves unexpectedly.
 */
export function useDailyValue<T>(getter: () => T, cacheKey?: string): T {
  const getterRef = useRef(getter);
  getterRef.current = getter;

  const resolve = (): T => {
    if (!cacheKey || typeof window === "undefined") return getterRef.current();
    const key = `dailyValue:${cacheKey}`;
    const today = dayKey();
    try {
      const raw = window.localStorage.getItem(key);
      if (raw) {
        const parsed = JSON.parse(raw) as { day: string; value: T };
        if (parsed && parsed.day === today) return parsed.value;
      }
    } catch {
      // ignore parse / storage errors
    }
    const value = getterRef.current();
    try {
      window.localStorage.setItem(key, JSON.stringify({ day: today, value }));
    } catch {
      // ignore storage errors
    }
    return value;
  };

  const [value, setValue] = useState<T>(() => resolve());
  const lastDayKeyRef = useRef<string>(dayKey());

  useEffect(() => {
    let timeoutId: number | undefined;

    const refreshIfNewDay = () => {
      const key = dayKey();
      if (key !== lastDayKeyRef.current) {
        lastDayKeyRef.current = key;
        setValue(resolve());
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cacheKey]);

  return value;
}

function dayKey() {
  const d = new Date();
  return `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
}
