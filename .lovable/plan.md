## Plan

Restore the chat widget closer to the version you preferred, while keeping the disclaimer visible but much lighter.

### What I’ll change
1. Revert the empty-state intro to a simpler, friendlier layout:
   - bot icon
   - “Hi there” / “Ask me anything about wellbeing”
   - suggested questions
2. Remove the large boxed safety/trust block that made the top feel heavy.
3. Replace it with one compact disclaimer treatment that feels integrated instead of dominant:
   - either a single muted line directly under the intro text, or
   - a very small inline row between the intro and suggested prompts
4. Tighten spacing so there is no awkward gap between the icon, title, supporting text, and prompt chips.
5. Keep the persistent footer disclaimer, but make sure the top disclaimer does not repeat the same wording too heavily.

### Intended result
The widget should feel like it did before: warm, simple, and inviting — with a disclaimer that is clearly present but no longer oversized or visually overwhelming.

## Technical details
- Update `src/components/AIChatWidget.tsx` only.
- Simplify the `messages.length === 0` empty-state block.
- Remove the current `bg-accent/30` safety card structure.
- Replace it with a smaller text treatment using muted typography and tighter vertical rhythm.
- Keep existing chat behavior, prompts, footer disclaimer, streaming, voice, and feedback unchanged.

## Design direction
Target hierarchy:
```text
[bot icon + greeting]
Ask me anything about wellbeing.
small muted disclaimer
[Try asking chips]
```

The disclaimer should read as supportive legal context, not as the main content.