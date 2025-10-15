import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Play, Pause, RotateCcw } from "lucide-react";

interface TimerProps {
  presetMinutes: number;
}

export const Timer = ({ presetMinutes }: TimerProps) => {
  const [seconds, setSeconds] = useState(presetMinutes * 60);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isActive && seconds > 0) {
      interval = setInterval(() => {
        setSeconds((s) => s - 1);
      }, 1000);
    } else if (seconds === 0) {
      setIsActive(false);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, seconds]);

  const toggle = () => setIsActive(!isActive);
  const reset = () => {
    setSeconds(presetMinutes * 60);
    setIsActive(false);
  };

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remainingSecs = secs % 60;
    return `${mins}:${remainingSecs.toString().padStart(2, "0")}`;
  };

  return (
    <Card className="p-4 flex items-center gap-4">
      <div className="text-2xl font-semibold min-w-[80px]">{formatTime(seconds)}</div>
      <div className="flex gap-2">
        <Button onClick={toggle} size="sm" variant="outline" aria-label={isActive ? "Pause timer" : "Start timer"}>
          {isActive ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
        </Button>
        <Button onClick={reset} size="sm" variant="outline" aria-label="Reset timer">
          <RotateCcw className="w-4 h-4" />
        </Button>
      </div>
    </Card>
  );
};
