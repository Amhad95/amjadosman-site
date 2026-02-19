
# Outcomes — Typography Bump (Surgical)

Two class changes in `src/components/sections/OutcomesImpactSection.tsx`.

## Changes

**Number counter (line 54):**
- `font-mono text-xs text-foreground/30` → `font-mono text-base text-foreground/40`
- `mt-1.5` → `mt-1` (re-align with larger number sitting beside the serif heading)

**Body copy (line 61):**
- `text-body-md` → `text-body-lg`

The heading (`text-heading-md`) and layout stay untouched — only the two elements the user called out are resized.
