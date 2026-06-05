# Refining flow, kid-friendliness, and legal coverage

Four areas, each evaluated below with a recommended decision.

## 1. Parent "Find Support" — section order

**The problem you raised:** the therapist-finder bar is the very first thing. Is that right, and what if a parent doesn't scroll?

**Evaluation.** Two kinds of parent land here:
- The *decided* parent ("just find me a therapist") — wants the finder fast.
- The *overwhelmed* parent ("I don't even know what kind of help exists") — needs orientation first.

Leading with the finder serves the first parent but can strand the second, who may not realise the helpful "what kind of help / how to choose / cost" content is further down. The page is titled "Find Professional **Support**" (broad), so it should serve the overwhelmed parent too.

**Decision — fix discoverability first, then a gentler order.** Discoverability shouldn't depend on guessing the right order, so:

1. Add a short intro line plus a row of **quick-jump chips** at the very top ("Find a therapist", "Types of help", "How to choose", "Costs & insurance"). Now everything is reachable in one tap, no scrolling-guess needed.
2. Re-order the sections into a natural decision path:
   1. **Types of Professional Help** (understand what exists)
   2. **Find a Therapist Near You** (the action — still high, immediately after a short read, and one tap away via its chip)
   3. **How to Choose a Therapist**
   4. **Insurance & Cost**
   5. Urgent-help note (Help Now) stays pinned at the bottom of the finder card.

This keeps the finder prominent for decided parents while giving overwhelmed parents context first, and the chips guarantee nobody misses a section.

## 2. Kid topic page — the big topic header

**The problem you raised:** the large coloured topic banner now sits on top, so kids must scroll to reach the actual help, and a big "Bullying" / "Anxiety" title is a privacy flag if someone glances at the screen.

**Evaluation.** Both concerns are valid. A tall hero block pushes the "Try This Today" tabs below the fold on a phone, and a giant sensitive word is exactly what a kid wouldn't want a classmate to see.

**Decision — slim, discreet header.**
- Replace the tall coloured hero block with a **compact header row**: small icon chip + title on one line, subtitle as a short single line (smaller text, less padding).
- This lifts the action tabs ("Try This Today") up so they're visible without scrolling on a phone.
- Keep the colour accent but make it subtle (smaller, less dominant) so the topic name is less of a billboard.

## 3. Kids section — more colourful, less reading, clearly for kids

**Evaluation.** Kid pages still read somewhat "medical": explanatory paragraphs above each tab, muted text. Kids skim; they want colour and short prompts.

**Decision — across the kid topic pages:**
- Trim the instructional paragraphs under each tab to a short, friendly one-liner (or remove where the tab label already says it).
- Make the tab bar more colourful using the topic colour accent instead of plain grey.
- Keep cards colourful (already using `kidTopicColors`) and shorten card body copy where it's wordy.
- Apply the same "less text, more colour" pass to the topic-detail extras (conversation starter / affirmation already colourful — keep).

Scope kept to the kid topic detail page and tab presentation; KidHome is already colourful and stays as-is apart from minor trims.

## 4. Legal docs — coverage of recent features

**Evaluation (already covered — good).** Privacy, Terms, and Disclaimer already document: the AI chat + safety filters, crisis-language response, prompt-injection protection, voice-to-text input, **chat thumbs-up/down feedback**, the private journal, local-storage data, the therapist directories on Find Support, and COPPA age gates. The "Suggest ideas" banner just links to the existing contact form (no new data flow), and the email typo-suggester is fully client-side (nothing sent) — neither needs new disclosure.

**Decision — small top-ups only:**
- Add **badges / streaks / shareable badge cards** to the "stored locally on your device" list (Privacy + Terms data sections), noting badge image cards are generated on-device and never uploaded.
- Add a one-line note that the optional **Read Aloud** accessibility feature uses the browser's built-in speech and sends no audio anywhere (mirrors the existing voice-input wording).
- Bump the "Last updated" dates.

## Technical notes

- `src/pages/parent/FindSupport.tsx`: add intro + anchor-chip row, reorder `<section>` blocks, add `id`/`scroll-mt` anchors. No data/logic changes.
- `src/pages/kid/KidTopicDetail.tsx`: replace lines 91–97 hero with a compact header; colour the `TabsList`/triggers via the topic `color`; trim the per-tab intro paragraphs.
- `src/pages/PrivacyPolicy.tsx`, `src/pages/Terms.tsx`, `src/pages/Disclaimer.tsx`: append the local-storage badge/streak items + Read Aloud line; update dates.
- No backend, schema, or AI-prompt changes required (the AI doesn't need new knowledge for these UI/legal tweaks).
