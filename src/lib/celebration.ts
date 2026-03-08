import confetti from "canvas-confetti";

const encouragements = [
  "Amazing! You just took a step for your wellbeing! 🎉",
  "You're building great habits! 💪",
  "Your brain thanks you! 🧠",
  "Way to go! Keep it up! ⭐",
  "That's awesome! You should be proud! 🌟",
  "You're stronger than you think! 💫",
  "Incredible work! Every little bit counts! 🏆",
  "Look at you go! 🚀",
];

export function triggerCelebration(): string {
  // Check for reduce-motion preference
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const hasReduceMotionClass = document.documentElement.classList.contains("reduce-motion");

  if (!prefersReducedMotion && !hasReduceMotionClass) {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.7 },
      colors: ["#4a90d9", "#66bb9a", "#f0c040", "#e06070", "#9b72cf"],
    });
  }

  return encouragements[Math.floor(Math.random() * encouragements.length)];
}
