import { useState, useEffect, useCallback } from "react";
import { Header } from "@/components/Header";
import { SiteFooter } from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wind, Eye, ArrowLeft, RotateCcw, Play, Pause } from "lucide-react";
import { Link } from "react-router-dom";

type BreathPhase = "inhale" | "hold-in" | "exhale" | "hold-out";
type Tool = "breathing" | "grounding";

const PHASE_DURATION: Record<BreathPhase, number> = {
  "inhale": 4000,
  "hold-in": 4000,
  "exhale": 4000,
  "hold-out": 4000,
};

const PHASE_LABEL: Record<BreathPhase, string> = {
  "inhale": "Breathe In",
  "hold-in": "Hold",
  "exhale": "Breathe Out",
  "hold-out": "Hold",
};

const PHASE_ORDER: BreathPhase[] = ["inhale", "hold-in", "exhale", "hold-out"];

const GROUNDING_STEPS = [
  { count: 5, sense: "SEE", prompt: "Name 5 things you can see right now", emoji: "👀", color: "text-primary" },
  { count: 4, sense: "TOUCH", prompt: "Name 4 things you can touch right now", emoji: "✋", color: "text-secondary-foreground" },
  { count: 3, sense: "HEAR", prompt: "Name 3 things you can hear right now", emoji: "👂", color: "text-primary" },
  { count: 2, sense: "SMELL", prompt: "Name 2 things you can smell right now", emoji: "👃", color: "text-secondary-foreground" },
  { count: 1, sense: "TASTE", prompt: "Name 1 thing you can taste right now", emoji: "👅", color: "text-primary" },
];

function BreathingExercise() {
  const [isRunning, setIsRunning] = useState(false);
  const [phase, setPhase] = useState<BreathPhase>("inhale");
  const [cycleCount, setCycleCount] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isRunning) return;

    const duration = PHASE_DURATION[phase];
    const startTime = Date.now();

    const progressInterval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      setProgress(Math.min(elapsed / duration, 1));
    }, 30);

    const phaseTimeout = setTimeout(() => {
      const currentIndex = PHASE_ORDER.indexOf(phase);
      const nextIndex = (currentIndex + 1) % PHASE_ORDER.length;
      if (nextIndex === 0) setCycleCount((c) => c + 1);
      setPhase(PHASE_ORDER[nextIndex]);
      setProgress(0);
    }, duration);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(phaseTimeout);
    };
  }, [isRunning, phase]);

  const handleStartStop = () => {
    if (isRunning) {
      setIsRunning(false);
    } else {
      setPhase("inhale");
      setProgress(0);
      setIsRunning(true);
    }
  };

  const handleReset = () => {
    setIsRunning(false);
    setPhase("inhale");
    setCycleCount(0);
    setProgress(0);
  };

  const circleScale = phase === "inhale"
    ? 0.6 + 0.4 * progress
    : phase === "exhale"
    ? 1.0 - 0.4 * progress
    : phase === "hold-in" ? 1.0 : 0.6;

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Breathing Circle */}
      <div className="relative w-48 h-48 sm:w-64 sm:h-64 flex items-center justify-center">
        {/* Outer glow */}
        <div
          className="absolute rounded-full bg-primary/10 transition-transform duration-100 ease-linear"
          style={{
            width: "100%",
            height: "100%",
            transform: `scale(${circleScale * 1.15})`,
          }}
        />
        {/* Main circle */}
        <div
          className="absolute rounded-full bg-primary/20 border-4 border-primary/40 transition-transform duration-100 ease-linear flex items-center justify-center cursor-pointer"
          style={{
            width: "80%",
            height: "80%",
            transform: `scale(${circleScale})`,
          }}
          onClick={!isRunning ? handleStartStop : undefined}
          role={!isRunning ? "button" : undefined}
          tabIndex={!isRunning ? 0 : undefined}
        >
          <div className="text-center">
            <p className="text-2xl sm:text-3xl font-bold text-primary">
              {isRunning ? PHASE_LABEL[phase] : "Tap to Start"}
            </p>
            {isRunning && (
              <p className="text-sm text-muted-foreground mt-1">
                {Math.ceil(PHASE_DURATION[phase] / 1000 * (1 - progress))}s
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Controls - only show pause/reset when running */}
      {isRunning && (
        <div className="flex items-center gap-3">
          <Button onClick={handleStartStop} size="sm" variant="outline" className="rounded-full px-6">
            <Pause className="h-4 w-4 mr-2" />
            Pause
          </Button>
          <Button onClick={handleReset} variant="ghost" size="sm" className="rounded-full">
            <RotateCcw className="h-4 w-4 mr-2" />
            Reset
          </Button>
        </div>
      )}

      {/* Cycle counter */}
      {cycleCount > 0 && (
        <p className="text-sm text-muted-foreground">
          {cycleCount} {cycleCount === 1 ? "cycle" : "cycles"} completed ✨
        </p>
      )}

      <Card className="max-w-md w-full">
        <CardContent className="pt-4 pb-4">
          <p className="text-sm text-muted-foreground leading-relaxed">
            <strong>How it works:</strong> Follow the circle as it grows and shrinks. 
            Breathe in as it expands, hold, then breathe out as it gets smaller. 
            Try to do at least 4 cycles.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

function GroundingExercise() {
  const [currentStep, setCurrentStep] = useState(0);
  const [completed, setCompleted] = useState<boolean[]>(new Array(5).fill(false));

  const allDone = completed.every(Boolean);

  const handleDone = () => {
    const updated = [...completed];
    updated[currentStep] = true;
    setCompleted(updated);
    if (currentStep < 4) {
      setTimeout(() => setCurrentStep(currentStep + 1), 500);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setCompleted(new Array(5).fill(false));
  };

  const step = GROUNDING_STEPS[currentStep];

  return (
    <div className="flex flex-col items-center gap-8 max-w-lg mx-auto">
      {/* Progress dots */}
      <div className="flex gap-3">
        {GROUNDING_STEPS.map((s, i) => (
          <button
            key={i}
            onClick={() => setCurrentStep(i)}
            className={`w-10 h-10 rounded-full flex items-center justify-center text-lg transition-all ${
              completed[i]
                ? "bg-primary/20 border-2 border-primary scale-90"
                : i === currentStep
                ? "bg-primary/10 border-2 border-primary scale-110"
                : "bg-muted border-2 border-border"
            }`}
          >
            {completed[i] ? "✓" : s.count}
          </button>
        ))}
      </div>

      {allDone ? (
        <div className="text-center space-y-4 animate-fade-in">
          <p className="text-5xl">🌟</p>
          <h3 className="text-2xl font-bold">You did it!</h3>
          <p className="text-muted-foreground">
            Take a moment to notice how you feel now. You brought yourself back to the present moment.
          </p>
          <Button onClick={handleReset} variant="outline" className="rounded-full">
            <RotateCcw className="h-4 w-4 mr-2" /> Try Again
          </Button>
        </div>
      ) : (
        <Card className="w-full animate-fade-in" key={currentStep}>
          <CardHeader className="text-center pb-4">
            <p className="text-5xl mb-3">{step.emoji}</p>
            <CardTitle className={`text-xl ${step.color}`}>
              {step.count} things you can {step.sense}
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-6">
            <p className="text-lg text-muted-foreground">{step.prompt}</p>
            <p className="text-sm text-muted-foreground">
              Take your time. Look around, notice things you might usually miss.
            </p>
            <Button onClick={handleDone} size="lg" className="rounded-full px-8">
              {completed[currentStep] ? "Done ✓" : "I found them"}
            </Button>
          </CardContent>
        </Card>
      )}

      <Card className="w-full">
        <CardContent className="pt-6">
          <p className="text-sm text-muted-foreground leading-relaxed">
            <strong>Why this works:</strong> When you feel anxious or overwhelmed, your mind races into 
            "what if" thoughts. The 5-4-3-2-1 technique gently brings your attention back to what is 
            actually happening right now, using your senses. It is a grounding exercise that therapists 
            recommend because it works fast and you can do it anywhere.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

export default function Breathe() {
  const [activeTool, setActiveTool] = useState<Tool>("breathing");

  return (
    <div className="min-h-screen flex flex-col">
      <Header audience="kid" />

      <main className="flex-1 py-6">
        <div className="container px-4 max-w-4xl mx-auto">
          <div className="mb-2">
            <Button variant="ghost" size="sm" asChild className="mb-2">
              <Link to="/kid">
                <ArrowLeft className="h-4 w-4 mr-2" /> Back to Kids Home
              </Link>
            </Button>
          </div>

          <div className="text-center mb-6">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Take a Breath</h1>
            <p className="text-lg text-muted-foreground">
              When everything feels like too much, these simple exercises can help you feel calmer right now.
            </p>
          </div>

          {/* Tool selector */}
          <div className="flex justify-center gap-3 mb-6">
            <Button
              variant={activeTool === "breathing" ? "default" : "outline"}
              size="lg"
              className="rounded-full px-6"
              onClick={() => setActiveTool("breathing")}
            >
              <Wind className="h-5 w-5 mr-2" />
              Breathing
            </Button>
            <Button
              variant={activeTool === "grounding" ? "default" : "outline"}
              size="lg"
              className="rounded-full px-6"
              onClick={() => setActiveTool("grounding")}
            >
              <Eye className="h-5 w-5 mr-2" />
              5-4-3-2-1 Grounding
            </Button>
          </div>

          {activeTool === "breathing" ? <BreathingExercise /> : <GroundingExercise />}

          <div className="text-center mt-12 text-sm text-muted-foreground">
            <p>These tools are not a replacement for professional support. If you are struggling, please talk to a trusted adult or tap the <strong>Help Now</strong> button.</p>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
