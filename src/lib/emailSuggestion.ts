// Lightweight, fully client-side email typo suggester.
// Stores nothing, sends nothing — purely a friendly "did you mean...?" nudge.

const COMMON_DOMAINS = [
  "gmail.com",
  "googlemail.com",
  "yahoo.com",
  "yahoo.co.uk",
  "hotmail.com",
  "hotmail.co.uk",
  "outlook.com",
  "live.com",
  "icloud.com",
  "me.com",
  "aol.com",
  "msn.com",
  "protonmail.com",
  "proton.me",
];

const COMMON_TLDS = ["com", "co.uk", "net", "org", "edu", "ca", "co", "io", "me"];

// Levenshtein distance for short strings.
function distance(a: string, b: string): number {
  const m = a.length;
  const n = b.length;
  const dp: number[] = Array.from({ length: n + 1 }, (_, i) => i);
  for (let i = 1; i <= m; i++) {
    let prev = dp[0];
    dp[0] = i;
    for (let j = 1; j <= n; j++) {
      const tmp = dp[j];
      dp[j] = Math.min(
        dp[j] + 1,
        dp[j - 1] + 1,
        prev + (a[i - 1] === b[j - 1] ? 0 : 1),
      );
      prev = tmp;
    }
  }
  return dp[n];
}

function closest(value: string, options: string[], maxDistance: number): string | null {
  let best: string | null = null;
  let bestDist = maxDistance + 1;
  for (const option of options) {
    if (option === value) return null; // already correct
    const d = distance(value, option);
    if (d < bestDist) {
      bestDist = d;
      best = option;
    }
  }
  return bestDist <= maxDistance ? best : null;
}

/**
 * Returns a suggested corrected email if a likely typo is detected, otherwise null.
 */
export function suggestEmail(email: string): string | null {
  const trimmed = email.trim().toLowerCase();
  const atIndex = trimmed.lastIndexOf("@");
  if (atIndex < 1) return null;

  const local = trimmed.slice(0, atIndex);
  const domain = trimmed.slice(atIndex + 1);
  if (!domain) return null;

  // Try to fix the whole domain against common providers.
  const domainFix = closest(domain, COMMON_DOMAINS, 2);
  if (domainFix) return `${local}@${domainFix}`;

  // Otherwise, try to fix just the TLD (e.g. "school.cm" -> "school.com").
  const dotIndex = domain.lastIndexOf(".");
  if (dotIndex > 0) {
    const namePart = domain.slice(0, dotIndex);
    const tld = domain.slice(dotIndex + 1);
    const tldFix = closest(tld, COMMON_TLDS, 1);
    if (tldFix) return `${local}@${namePart}.${tldFix}`;
  }

  return null;
}
