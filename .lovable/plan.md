
# Fix Non-CRM Software Vignettes to Match CRM's Neutral UI Standard

## Problem
The CRM page's interactive previews use professional neutral surfaces (white backgrounds, gray borders, gray text hierarchy) that look like real SaaS app screenshots. All other software pages (Accounting, Inventory, Tasks) use dark backgrounds with mint/lavender colored text -- making them look like stylized concept art rather than realistic product previews.

## Root Cause
Two separate visual systems exist:
- **CRM**: `CRMPreviews.tsx` components built with `bg-white`, `border-gray-200`, `text-gray-900/700/500`, using shared sub-components (`DataTable`, `DetailDrawer`, `StatusChip`)
- **Everything else**: `ProductPreviews.tsx` + standalone vignettes built with `bg-ink/30`, `border-mint/10`, `text-offwhite`, `text-mint` -- the old dark-theme style

## What Needs to Change

All non-CRM vignettes must be rewritten to use the CRM's neutral design language:
- White/gray-50 backgrounds instead of ink/dark
- Gray text hierarchy (gray-900 for headings, gray-700 for body, gray-500 for secondary)
- Emerald for success, red for errors, amber for warnings (not mint/magenta/lavender)
- Professional borders (border-gray-200) not colored borders (border-mint/10)
- High information density matching CRM's level of detail

## Files to Rewrite

### 1. `src/components/ui/vignettes/ProductPreviews.tsx`
All 12 preview components need neutral surface treatment:

**Accounting (4 components):**
- `AccountingInvoicePreview` -- white cards, gray text, emerald status badges (not ink/mint)
- `AccountingExpensesPreview` -- white row cards, gray text, proper status chips (not ink/lavender)
- `AccountingApprovalsPreview` -- white row cards, gray-900 buttons (not ink/mint)
- `AccountingDashboardPreview` -- white stat cards, gray text, emerald trends (not ink/mint)

**Inventory (4 components):**
- `InventoryItemsPreview` -- white table with gray header, proper StatusChip for stock levels (not ink/mint/magenta)
- `InventoryLocationsPreview` -- white cards, gray text, dark value numbers (not ink/mint)
- `InventoryReorderPreview` -- white cards, red/amber warning styling (not ink/magenta pulse)
- `InventoryAssetPreview` -- white row cards, gray text, emerald/blue dots (not ink/mint/lavender)

**Tasks (4 components):**
- `TasksBoardPreview` -- white column cards like PipelineBoardRealistic (not ink/mint)
- `TasksListPreview` -- white rows with checkboxes, gray text, proper priority chips (not ink/mint/magenta)
- `TasksApprovalsPreview` -- white rows, gray-900 buttons, emerald done state (not ink/mint/lavender)
- `TasksTimelinePreview` -- white background, gray timeline bars with proper colors (not mint/lavender/plate-blue)

### 2. `src/components/ui/vignettes/InvoiceFlow.tsx`
Currently: dark `bg-ink/40` card with mint status badges and mint step indicators
Fix: white card background, gray text, emerald completion indicators, gray-900 active steps

### 3. `src/components/ui/vignettes/PaymentDashboard.tsx`
Currently: dark `bg-ink/40` summary cards, mint text, mint/lavender/red status badges
Fix: white summary cards, gray borders, emerald/amber/red StatusChip-style badges, gray text

### 4. `src/components/ui/vignettes/InventoryList.tsx`
Currently: dark `bg-ink/40` search bar, mint borders, mint/lavender/red stock text
Fix: white search bar with gray border, gray table rows, emerald/amber/red stock indicators

### 5. `src/components/ui/vignettes/ReorderAlert.tsx`
Currently: dark theme with mint icons, red/lavender/mint status cards, mint borders
Fix: white cards, gray borders, red warning styling for alerts, emerald for ordered status

### 6. `src/components/ui/vignettes/TaskKanban.tsx`
Currently: dark `bg-ink/30` columns, mint icons, `bg-ink/60` task cards, mint assignee avatars
Fix: white/gray-50 columns like PipelineBoardRealistic, white task cards with gray borders

### 7. `src/components/ui/vignettes/ChecklistApproval.tsx`
Currently: dark theme with mint progress bar, mint/offwhite text, ink backgrounds
Fix: white cards, gray borders, emerald checkmarks, gray text hierarchy

## Design Rules (matching CRM standard)

| Element | Old (dark) | New (neutral) |
|---------|-----------|---------------|
| Background | `bg-ink/30`, `bg-ink/40` | `bg-white`, `bg-gray-50` |
| Borders | `border-mint/10`, `border-mint/5` | `border-gray-200`, `border-gray-100` |
| Primary text | `text-offwhite`, `text-mint` | `text-gray-900`, `text-gray-800` |
| Secondary text | `text-offwhite/50`, `text-offwhite/70` | `text-gray-500`, `text-gray-600` |
| Muted text | `text-offwhite/40` | `text-gray-400` |
| Success | `bg-mint/20 text-mint` | `bg-emerald-100 text-emerald-700` |
| Warning | `bg-lavender/20 text-lavender` | `bg-amber-100 text-amber-700` |
| Error | `bg-magenta/20 text-magenta` | `bg-red-100 text-red-700` |
| Active button | `bg-mint text-ink` | `bg-gray-900 text-white` |
| Avatar circles | `bg-mint/20 text-mint` | `bg-gray-100 text-gray-600` |
| Card shadow | none | `shadow-sm` |
| Hover | `hover:bg-ink/40` | `hover:bg-gray-50`, `hover:shadow-md` |

## Preserved Behavior
- All existing animations (auto-cycling, interval-based state changes) remain unchanged
- Hover-pause logic (`isHovered` state) remains unchanged
- `useReducedMotion` checks remain unchanged
- Click interactivity remains unchanged
- Component APIs and props remain unchanged (no page-level changes needed)

## Acceptance Criteria
1. All non-CRM vignettes use white/gray neutral surfaces matching CRM standard
2. No `bg-ink`, `text-offwhite`, `text-mint`, `border-mint` styling in any vignette
3. Status indicators use emerald/amber/red semantic colors
4. Information density and data richness match CRM previews
5. All existing animations and interactions continue working
6. All four software pages visually consistent when viewed side by side
