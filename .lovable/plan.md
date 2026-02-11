

# Animate CRM UI Vignettes

## Problem
All interactive UI previews on the CRM page are static -- they only respond to clicks. Since these are marketing previews (not actual apps), they should auto-animate to show off the product without requiring user interaction.

## Vignettes to animate

### Already animated (no changes needed)
- **PipelineBoardRealistic** -- column highlight cycles every 2.5s
- **MiniDashboard** -- metric values update randomly every 2.5s
- **SupportRequestVignette** -- status badges progress every 3s
- **TabbedProductPreview** -- tabs auto-rotate every 4s

### Need animation added

| Vignette | Animation | Interval |
|----------|-----------|----------|
| **PipelineBoard** (persona preview) | Highlight deal cards one by one with a subtle pulse/scale | 2s |
| **ContactTimeline** (persona preview) | Highlight activity rows sequentially (top to bottom, loop) | 2s |
| **ContactsTableRealistic** | Auto-select rows one by one (highlight row, briefly open detail drawer, close, next row) | 3.5s |
| **TasksListRealistic** | Auto-check tasks one by one with a brief completed state, then reset | 3s |
| **MiniReportsRealistic** | Animate chart bars growing in from zero on mount, then periodically shift bar heights | 3s |
| **SettingsPanel** | Auto-toggle switches one by one on a cycle | 2.5s |
| **ImportMapper** | Auto-match the unmatched "notes" field after a delay, showing the arrow turn green | 4s (one-shot then reset) |
| **RolesPermissionsMatrix** | Auto-toggle between Simple and Strict presets | 5s |

## Technical approach

All animations follow the existing pattern:
- Use `useReducedMotion()` hook -- skip all intervals if true
- Use `useEffect` with `setInterval` or `setTimeout` for cycling
- Use CSS `transition-all duration-300` for smooth state changes
- Pause on hover (`isHovered` state via `onMouseEnter`/`onMouseLeave`) where the vignette supports interaction

## Files to modify

| File | Change |
|------|--------|
| `src/components/ui/vignettes/PipelineBoard.tsx` | Add auto-highlight cycling through deal cards |
| `src/components/ui/vignettes/ContactTimeline.tsx` | Add sequential activity row highlighting |
| `src/components/ui/vignettes/CRMPreviews.tsx` | Add auto-row-select to ContactsTableRealistic, auto-check to TasksListRealistic, animate chart bars in MiniReportsRealistic |
| `src/components/ui/vignettes/SettingsPanel.tsx` | Add auto-toggle cycling for switches |
| `src/components/ui/vignettes/ImportMapper.tsx` | Add auto-match animation for unmatched field |
| `src/components/sections/RolesPermissionsMatrix.tsx` | Add auto-toggle between Simple/Strict presets |

## Acceptance criteria
1. All vignettes auto-animate without user interaction
2. Animations pause when `prefers-reduced-motion` is active
3. Animations are subtle (scale, opacity, highlight) not jarring
4. Existing click interactions still work alongside auto-animation
5. No performance issues from multiple concurrent intervals

