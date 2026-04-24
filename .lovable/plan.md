## Problem

On the Parent "This Week's Overview" dashboard, the **Quick Access** section has 4 outline buttons with long labels like:

- "📋 Quick Guide — 4 key steps to support your child"
- "🤝 Find Support — Professional help & how to choose"
- "🛠️ Tools & Templates — Checklists & planning downloads"
- "💬 All Conversation Starters — Age-appropriate phrases"

The shadcn `Button` component applies `whitespace-nowrap` and `overflow-hidden` by default, so on phone widths the text gets cut off mid-sentence with an ellipsis (or just clipped), which looks broken.

## Fix

Restructure the Quick Access cards in `src/pages/parent/Dashboard.tsx` so they display nicely on mobile:

1. Replace the single-line `Button` with a two-line layout using a bold title + smaller descriptive subtitle, both allowed to wrap.
2. Add `whitespace-normal text-left` to override the button defaults so text wraps instead of clipping.
3. Use a clearer icon + title + description structure inside each link so it remains readable on small screens and still looks tidy on desktop.

### Proposed layout per card

```text
[icon]  Quick Guide
        4 key steps to support your child                 →
```

- Icon stays as the emoji
- Title (e.g., "Quick Guide") in `font-semibold`
- Description (e.g., "4 key steps to support your child") in `text-xs text-muted-foreground`
- Right-side `ArrowRight` chevron for affordance
- Grid stays `sm:grid-cols-2` so desktop is unchanged

## Files to edit

- `src/pages/parent/Dashboard.tsx` — only the Quick Access `<section>` (the four `Button` items)

No other pages, components, or styles need changes. No new dependencies.
