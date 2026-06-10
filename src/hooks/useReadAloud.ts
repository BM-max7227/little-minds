import { useEffect, useRef, useState } from "react";

// Split into sentence-sized pieces. Browser speechSynthesis becomes unreliable with
// long utterances (Chrome stops early / skips words), so short chunks keep it smooth.
const chunkText = (text: string, maxLen = 180): string[] => {
  const sentences = text.match(/[^.!?\n]+[.!?]?(?:\s|$)|\n+/g) || [text];
  const chunks: string[] = [];
  let current = "";
  for (const raw of sentences) {
    const s = raw.replace(/\s+/g, " ").trim();
    if (!s) continue;
    if ((current + " " + s).trim().length > maxLen && current) {
      chunks.push(current.trim());
      current = s;
    } else {
      current = (current + " " + s).trim();
    }
  }
  if (current.trim()) chunks.push(current.trim());
  return chunks;
};

// Pick the most natural-sounding English voice the device offers.
const pickBestVoice = (voices: SpeechSynthesisVoice[]): SpeechSynthesisVoice | null => {
  if (!voices.length) return null;
  const en = voices.filter((v) => v.lang?.toLowerCase().startsWith("en"));
  const pool = en.length ? en : voices;
  const preferred = [
    "Google US English",
    "Microsoft Aria",
    "Microsoft Jenny",
    "Microsoft Zira",
    "Samantha",
    "Karen",
    "Daniel",
    "Google UK English Female",
  ];
  for (const name of preferred) {
    const match = pool.find((v) => v.name === name) || pool.find((v) => v.name.includes(name));
    if (match) return match;
  }
  const nice = pool.find((v) => !/compact|eloquence/i.test(v.name));
  return nice || pool.find((v) => v.default) || pool[0];
};

const getInitialRate = (): number => {
  try {
    const saved = localStorage.getItem("accessibility-prefs");
    if (saved) {
      const prefs = JSON.parse(saved);
      if (typeof prefs.readRate === "number") {
        return Math.min(1.5, Math.max(0.5, Math.round(prefs.readRate * 4) / 4));
      }
    }
  } catch {
    /* ignore */
  }
  return 1;
};

export interface UseReadAloud {
  supported: boolean;
  isSpeaking: boolean;
  isPaused: boolean;
  rate: number;
  setRate: (rate: number) => void;
  speak: (text: string) => void;
  pause: () => void;
  resume: () => void;
  stop: () => void;
}

// Shared, reusable Read Aloud engine. Works for whole-page reading and for
// overlay content like the Help Now drawer.
export const useReadAloud = (): UseReadAloud => {
  const supported = typeof window !== "undefined" && "speechSynthesis" in window;

  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [rate, setRateState] = useState(getInitialRate);

  const rateRef = useRef(rate);
  const chunksRef = useRef<string[]>([]);
  const indexRef = useRef(0);
  const sessionRef = useRef(0);
  const voiceRef = useRef<SpeechSynthesisVoice | null>(null);
  const keepAliveRef = useRef<number | null>(null);

  // Chrome silently stops/skips after ~15s; a periodic pause+resume keeps it alive.
  const startKeepAlive = () => {
    stopKeepAlive();
    keepAliveRef.current = window.setInterval(() => {
      if (window.speechSynthesis.speaking && !window.speechSynthesis.paused) {
        window.speechSynthesis.pause();
        window.speechSynthesis.resume();
      }
    }, 5000);
  };
  const stopKeepAlive = () => {
    if (keepAliveRef.current !== null) {
      window.clearInterval(keepAliveRef.current);
      keepAliveRef.current = null;
    }
  };

  // Load voices (they populate asynchronously on most browsers).
  useEffect(() => {
    if (!supported) return;
    const load = () => {
      voiceRef.current = pickBestVoice(window.speechSynthesis.getVoices());
    };
    load();
    window.speechSynthesis.onvoiceschanged = load;
    return () => {
      window.speechSynthesis.onvoiceschanged = null;
    };
  }, [supported]);

  // Persist + apply a new speed instantly by re-speaking the current chunk.
  useEffect(() => {
    rateRef.current = rate;
    try {
      const saved = localStorage.getItem("accessibility-prefs");
      const prefs = saved ? JSON.parse(saved) : {};
      localStorage.setItem("accessibility-prefs", JSON.stringify({ ...prefs, readRate: rate }));
    } catch {
      /* ignore */
    }
    if (isSpeaking && !isPaused && supported) {
      const session = sessionRef.current;
      window.speechSynthesis.cancel();
      window.setTimeout(() => speakFrom(indexRef.current, session), 130);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rate]);

  useEffect(() => {
    return () => {
      stopKeepAlive();
      if (supported) window.speechSynthesis.cancel();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const speakFrom = (i: number, session: number) => {
    if (!supported) return;
    if (session !== sessionRef.current) return;
    if (i >= chunksRef.current.length) {
      stopKeepAlive();
      setIsSpeaking(false);
      setIsPaused(false);
      return;
    }
    indexRef.current = i;

    const utter = new SpeechSynthesisUtterance(chunksRef.current[i]);
    if (voiceRef.current) {
      utter.voice = voiceRef.current;
      utter.lang = voiceRef.current.lang;
    }
    utter.rate = rateRef.current;
    utter.pitch = 1;
    utter.volume = 1;

    let advanced = false;
    const next = () => {
      if (advanced) return;
      advanced = true;
      if (session !== sessionRef.current) return;
      speakFrom(i + 1, session);
    };
    utter.onend = next;
    utter.onerror = next;

    window.speechSynthesis.speak(utter);
    startKeepAlive();
  };

  const speak = (text: string) => {
    if (!supported || !text.trim()) return;
    window.speechSynthesis.cancel();
    const session = sessionRef.current + 1;
    sessionRef.current = session;
    chunksRef.current = chunkText(text);
    indexRef.current = 0;
    if (!voiceRef.current) voiceRef.current = pickBestVoice(window.speechSynthesis.getVoices());
    setIsSpeaking(true);
    setIsPaused(false);
    // Small delay after cancel() so Chrome doesn't drop the opening words.
    window.setTimeout(() => speakFrom(0, session), 130);
  };

  const pause = () => {
    if (supported) window.speechSynthesis.pause();
    setIsPaused(true);
  };

  const resume = () => {
    if (supported) window.speechSynthesis.resume();
    setIsPaused(false);
  };

  const stop = () => {
    sessionRef.current += 1;
    stopKeepAlive();
    if (supported) window.speechSynthesis.cancel();
    setIsSpeaking(false);
    setIsPaused(false);
  };

  const setRate = (r: number) => {
    setRateState(Math.min(1.5, Math.max(0.5, Math.round(r * 4) / 4)));
  };

  return { supported, isSpeaking, isPaused, rate, setRate, speak, pause, resume, stop };
};
