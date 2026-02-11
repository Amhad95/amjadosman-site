

# Fix: Restore click interactions and add hover-pause to all animated vignettes

## Problem
The animation implementation broke user interactivity in two ways:
1. Auto-animations override manual clicks (checking a task gets unchecked 3s later, toggling a preset gets flipped back)
2. Several components lost their click handlers entirely (SettingsPanel toggles)
3. Only 1 of 8 animated components pauses on hover -- the rest fight the user

## Root cause
The `isHovered` state with `onMouseEnter`/`onMouseLeave` was only added to `ContactsTableRealistic`. All other components run intervals that override user state without any way to pause.

## Fix: Add hover-pause to every animated component

Every component that auto-animates needs:
1. `isHovered` state
2. `onMouseEnter`/`onMouseLeave` on the root div
3. The interval skips when `isHovered` is true
4. Manual click handlers preserved and working alongside animation

## Files to modify

### `src/components/ui/vignettes/PipelineBoard.tsx`
- Add `isHovered` state + mouse handlers on root div
- Skip interval when hovered

### `src/components/ui/vignettes/ContactTimeline.tsx`
- Add `isHovered` state + mouse handlers on root div
- Skip interval when hovered

### `src/components/ui/vignettes/CRMPreviews.tsx`
**TasksListRealistic:**
- Add `isHovered` state + mouse handlers
- Skip interval when hovered so manual checkbox clicks persist

**MiniReportsRealistic:**
- Add `isHovered` state + mouse handlers
- Skip bar height shifts when hovered

### `src/components/ui/vignettes/SettingsPanel.tsx`
- Add `isHovered` state + mouse handlers
- Skip interval when hovered
- Add `onClick` handler to the toggle div so users can manually flip switches (this was completely missing)

### `src/components/ui/vignettes/ImportMapper.tsx`
- Add `isHovered` state + mouse handlers
- Skip auto-match cycle when hovered

### `src/components/sections/RolesPermissionsMatrix.tsx`
- Add `isHovered` state + mouse handlers
- Skip preset toggle when hovered so manual button clicks persist

## Pattern (same for all)
```
const [isHovered, setIsHovered] = useState(false);

useEffect(() => {
  if (reducedMotion || isHovered) return;
  // ... existing interval logic
}, [reducedMotion, isHovered]);

return (
  <div
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
  >
    ...
  </div>
);
```

## SettingsPanel toggle click fix
Add an onClick handler to the toggle div:
```
<div
  onClick={() => {
    const key = `${activeSection}-${i}`;
    setToggleStates(prev => ({ ...prev, [key]: !prev[key] }));
  }}
  className="cursor-pointer ..."
>
```

## Acceptance criteria
1. All 8 animated vignettes pause animation on hover
2. SettingsPanel toggles are manually clickable
3. TasksListRealistic checkboxes persist when clicked (animation paused on hover)
4. RolesPermissionsMatrix preset buttons persist when clicked (animation paused on hover)
5. Animations resume when mouse leaves the component
6. No regression in existing animation behavior
