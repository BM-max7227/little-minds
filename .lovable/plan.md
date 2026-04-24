## Plan

Tighten the vertical spacing between the robot icon and the "Safe & private — chats aren't saved." line in the chat widget intro so they sit closer together.

### Change
- File: `src/components/AIChatWidget.tsx`
- Replace the empty-state container's uniform `space-y-3` with tighter, per-element margins so:
  - icon → greeting: small gap
  - greeting → subtitle: very small gap
  - subtitle → safety line: tight gap
  - safety line → suggested chips: keep some breathing room

### Result
The robot, greeting, and "Safe & private" line read as one tight unit instead of being separated by visible gaps.