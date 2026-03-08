import logoSrc from "@/assets/logo.png";

const BADGES = [
  { threshold: 1, label: "First Step", icon: "⭐", color: "#f59e0b" },
  { threshold: 5, label: "Getting Going", icon: "🌟", color: "#8b5cf6" },
  { threshold: 10, label: "Wellbeing Explorer", icon: "🧭", color: "#06b6d4" },
  { threshold: 20, label: "Mind Champion", icon: "🏆", color: "#f97316" },
  { threshold: 35, label: "Super Star", icon: "💫", color: "#ec4899" },
  { threshold: 50, label: "Legendary", icon: "👑", color: "#eab308" },
];

export function getEarnedBadges(totalCompleted: number) {
  return BADGES.filter((b) => totalCompleted >= b.threshold);
}

function loadImage(src: string): Promise<HTMLImageElement | null> {
  return new Promise((resolve) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => resolve(img);
    img.onerror = () => resolve(null);
    img.src = src;
  });
}

export async function generateBadgeCard(badgeLabel: string, totalCompleted: number): Promise<Blob | null> {
  const badge = BADGES.find((b) => b.label === badgeLabel);
  if (!badge) return null;

  const W = 600;
  const H = 400;
  const scale = 3; // 3x resolution for crisp output
  const canvas = document.createElement("canvas");
  canvas.width = W * scale;
  canvas.height = H * scale;
  const ctx = canvas.getContext("2d");
  if (!ctx) return null;
  ctx.scale(scale, scale);

  const logo = await loadImage(logoSrc);

  // Background gradient
  const grad = ctx.createLinearGradient(0, 0, W, H);
  grad.addColorStop(0, "#f0f9ff");
  grad.addColorStop(0.5, "#faf5ff");
  grad.addColorStop(1, "#fff7ed");
  ctx.fillStyle = grad;
  ctx.beginPath();
  ctx.roundRect(0, 0, W, H, 24);
  ctx.fill();

  // Border
  ctx.strokeStyle = "#e2e8f0";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.roundRect(0, 0, W, H, 24);
  ctx.stroke();

  // Decorative circles
  ctx.fillStyle = `${badge.color}15`;
  ctx.beginPath();
  ctx.arc(80, 80, 60, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(520, 320, 50, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(500, 80, 30, 0, Math.PI * 2);
  ctx.fill();

  // Badge icon (large) — draw multiple times for full opacity/boldness
  ctx.font = "72px serif";
  ctx.textAlign = "center";
  ctx.fillText(badge.icon, W / 2, 130);
  ctx.fillText(badge.icon, W / 2, 130);
  ctx.fillText(badge.icon, W / 2, 130);
  ctx.fillText(badge.icon, W / 2, 130);

  // Badge name
  ctx.fillStyle = "#1e293b";
  ctx.font = "bold 32px system-ui, -apple-system, sans-serif";
  ctx.fillText(badge.label, W / 2, 190);

  // Achievement text
  ctx.fillStyle = "#64748b";
  ctx.font = "18px system-ui, -apple-system, sans-serif";
  ctx.fillText("Achievement Unlocked!", W / 2, 230);

  // Stats
  ctx.fillStyle = badge.color;
  ctx.font = "bold 48px system-ui, -apple-system, sans-serif";
  ctx.fillText(`${totalCompleted}`, W / 2, 295);
  ctx.fillStyle = "#64748b";
  ctx.font = "16px system-ui, -apple-system, sans-serif";
  ctx.fillText("activities completed", W / 2, 320);

  // Logo at the bottom — nice and large
  if (logo) {
    const logoH = 120;
    const logoW = (logo.naturalWidth / logo.naturalHeight) * logoH;
    ctx.drawImage(logo, (W - logoW) / 2, H - logoH + 15, logoW, logoH);
  } else {
    ctx.fillStyle = "#94a3b8";
    ctx.font = "bold 14px system-ui, -apple-system, sans-serif";
    ctx.fillText("Little Minds", W / 2, H - 30);
  }

  return new Promise((resolve) => {
    canvas.toBlob((blob) => resolve(blob), "image/png");
  });
}

export async function downloadBadgeCard(badgeLabel: string, totalCompleted: number) {
  const blob = await generateBadgeCard(badgeLabel, totalCompleted);
  if (!blob) return;

  const url = URL.createObjectURL(blob);
  // Use window.open as fallback for sandboxed iframes where <a download> is blocked
  const a = document.createElement("a");
  a.href = url;
  a.download = `little-minds-${badgeLabel.toLowerCase().replace(/\s+/g, "-")}-badge.png`;
  a.target = "_blank";
  a.rel = "noopener";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  // Small delay before revoking to ensure download starts
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
