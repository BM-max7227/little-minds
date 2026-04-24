import { lazy, Suspense, useEffect, useState } from "react";

// Defer loading the heavy chat widget (react-markdown, speech APIs, ~631 LoC)
// until the browser is idle or the user interacts. This shaves a large chunk
// off the initial JS payload for every page.
const AIChatWidget = lazy(() =>
  import("./AIChatWidget").then((m) => ({ default: m.AIChatWidget }))
);

export function LazyAIChatWidget() {
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const trigger = () => setShouldLoad(true);

    // Load on first user interaction immediately
    const events: Array<keyof WindowEventMap> = ["pointerdown", "keydown", "touchstart"];
    events.forEach((e) => window.addEventListener(e, trigger, { once: true, passive: true }));

    // Otherwise load when the browser is idle, with a safety timeout
    const w = window as Window & {
      requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
    };
    let idleId: number | undefined;
    if (typeof w.requestIdleCallback === "function") {
      idleId = w.requestIdleCallback(trigger, { timeout: 3000 });
    } else {
      idleId = window.setTimeout(trigger, 2500) as unknown as number;
    }

    return () => {
      events.forEach((e) => window.removeEventListener(e, trigger));
      if (idleId !== undefined) {
        const wAny = window as Window & { cancelIdleCallback?: (id: number) => void };
        if (typeof wAny.cancelIdleCallback === "function") wAny.cancelIdleCallback(idleId);
        else clearTimeout(idleId);
      }
    };
  }, []);

  if (!shouldLoad) return null;

  return (
    <Suspense fallback={null}>
      <AIChatWidget />
    </Suspense>
  );
}
