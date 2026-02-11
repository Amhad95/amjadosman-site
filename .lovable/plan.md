

# Rebuild Non-CRM "In Action" Previews to Match CRM Quality

## Problem

The "in action" section on each software page uses `TabbedProductPreview` with 4 tab panels. The CRM page uses rich, high-fidelity components from `CRMPreviews.tsx` (200+ lines each, with real data, animations, hover-pause, shared sub-components like `DataTable`/`DetailDrawer`/`StatusChip`). The Accounting, Inventory, and Tasks pages use the simple components from `ProductPreviews.tsx` -- these are 20-30 line sketches with 3 tiny rows, empty placeholder divs, and no meaningful interactivity.

### Quality comparison

```text
CRM PipelineBoardRealistic        vs   TasksBoardPreview
-----------------------------          ---------------------
5 columns with labels + counts         3 columns, no counts
Deal cards: company, value,            Empty 24px-tall gray divs
  owner avatar, last activity            (no text at all)
Column highlight animation             Column header highlight only
Hover: shadow + lift effect            No hover
~200 lines of code                     ~40 lines of code

CRM ContactsTableRealistic        vs   InventoryItemsPreview
-----------------------------          ---------------------
Full DataTable with 5 columns          3 static rows
Row click opens DetailDrawer           No interactivity
Auto-cycles rows, pauses on hover     No animation
Pagination indicator                   No pagination
~60 lines + shared components          ~28 lines
```

The fix: create realistic, CRM-quality preview components for Accounting, Inventory, and Tasks -- each with proper data density, animations, hover-pause, and interactivity.

## New Components to Create

### `src/components/ui/vignettes/AccountingPreviews.tsx`

Four rich components replacing the simple `ProductPreviews.tsx` versions:

**InvoiceDashboardRealistic** (replaces AccountingInvoicePreview)
- Full invoice table with columns: Invoice #, Client, Amount, Status, Due Date
- 5+ invoice rows with realistic data
- StatusChip badges (Paid/emerald, Pending/amber, Overdue/red, Draft/gray)
- Row click to highlight/select, auto-cycle through rows
- Hover-pause pattern
- Summary bar at bottom (Total outstanding, Overdue count)

**ExpenseTrackerRealistic** (replaces AccountingExpensesPreview)
- Category-grouped expense rows: Travel, Software, Office, Professional Services
- Each row: description, date, amount, category tag, approval status
- Auto-highlights rows one by one
- Filter toggle (All / Pending / Approved)
- Hover-pause pattern

**ApprovalsQueueRealistic** (replaces AccountingApprovalsPreview)
- Queue list with approval items: type icon, description, requester avatar, amount, submitted date
- Approve/Reject buttons that animate on auto-cycle
- Items auto-approve one by one, then reset
- Hover-pause for manual clicking

**FinanceDashboardRealistic** (replaces AccountingDashboardPreview)
- 4 KPI cards (Revenue, Expenses, Net Income, Outstanding) with trend arrows
- Animated bar chart similar to CRM's MiniReportsRealistic
- Time range toggle (7d / 30d / 90d)
- Bar heights shift periodically
- Hover-pause pattern

### `src/components/ui/vignettes/InventoryPreviews.tsx`

**ItemsTableRealistic** (replaces InventoryItemsPreview)
- Full table with columns: SKU, Item Name, Category, Location, Qty, Status
- 5+ item rows with realistic data
- StatusChip for stock levels (In Stock/emerald, Low/amber, Critical/red, Out/gray)
- Row selection with auto-cycle
- Search/filter bar at top
- Hover-pause pattern

**LocationsGridRealistic** (replaces InventoryLocationsPreview)
- Location cards with: name, address/zone, item count, utilization bar
- Auto-highlights locations one by one
- Each card shows top items list
- Hover-pause pattern

**ReorderQueueRealistic** (replaces InventoryReorderPreview)
- Alert-style rows: item name, current qty vs threshold, supplier, action button
- Items pulse with urgency indicator
- Auto-triggers "Order Placed" state on items one by one
- StatusChip: Critical/red, Low/amber, Ordered/emerald
- Hover-pause pattern

**AssetTrackerRealistic** (replaces InventoryAssetPreview)
- Table-style rows: Asset tag, description, assignee avatar, location, status
- Checkout/Return action buttons
- Auto-cycles through checkout animations
- Hover-pause pattern

### `src/components/ui/vignettes/TasksPreviews.tsx`

**TaskBoardRealistic** (replaces TasksBoardPreview)
- Kanban board modeled on CRM's PipelineBoardRealistic
- 4 columns: Backlog, In Progress, Review, Done
- Task cards with: title, assignee avatar, priority chip, due date
- Column counts, auto-highlight cycling
- Hover effects: shadow + lift
- Hover-pause pattern

**TaskListRealistic** (replaces TasksListPreview)
- Full task list modeled on CRM's TasksListRealistic
- Checkbox, title, assignee, due date (with overdue/today/upcoming coloring), priority badge
- My Tasks / Team toggle
- Auto-checks tasks one by one, then resets
- Hover-pause for manual interaction

**ApprovalsFlowRealistic** (replaces TasksApprovalsPreview)
- Sequential approval steps with status
- Each step: reviewer avatar, title, status chip, timestamp
- Auto-progresses through approval chain
- Hover-pause pattern

**TimelineRealistic** (replaces TasksTimelinePreview)
- Gantt-style view with project rows
- Each bar: project name, progress %, date range, assignee
- Bars animate width on load
- Time scale header (weeks)
- Hover-pause pattern

## Page Changes

### `src/pages/software/SoftwareAccounting.tsx`
- Import from `AccountingPreviews.tsx` instead of `ProductPreviews.tsx`
- Update `heroTabs` to use new realistic components

### `src/pages/software/SoftwareInventory.tsx`
- Import from `InventoryPreviews.tsx` instead of `ProductPreviews.tsx`
- Update `heroTabs` to use new realistic components

### `src/pages/software/SoftwareTasks.tsx`
- Import from `TasksPreviews.tsx` instead of `ProductPreviews.tsx`
- Update `heroTabs` to use new realistic components

## Shared Patterns (same as CRM)

Every new component follows the CRM pattern:
- `isHovered` state with `onMouseEnter`/`onMouseLeave`
- `useReducedMotion` check
- `useEffect` intervals skip when hovered or reduced motion
- Manual click handlers work alongside animation
- Neutral surfaces: `bg-white`, `bg-gray-50`, `border-gray-200`
- Gray text hierarchy: `text-gray-900/700/500/400`
- Semantic status colors: emerald/amber/red
- `shadow-sm` on cards, `hover:shadow-md hover:-translate-y-0.5` on interactive items

## Files Summary

| File | Action |
|------|--------|
| `src/components/ui/vignettes/AccountingPreviews.tsx` | Create (4 components) |
| `src/components/ui/vignettes/InventoryPreviews.tsx` | Create (4 components) |
| `src/components/ui/vignettes/TasksPreviews.tsx` | Create (4 components) |
| `src/pages/software/SoftwareAccounting.tsx` | Update imports + heroTabs |
| `src/pages/software/SoftwareInventory.tsx` | Update imports + heroTabs |
| `src/pages/software/SoftwareTasks.tsx` | Update imports + heroTabs |

## Acceptance Criteria
1. All 12 new preview components match CRM's level of data density and visual sophistication
2. Every component has hover-pause animation pattern
3. Every component uses neutral surface design (no ink/mint/dark theme)
4. Tab panels fill the 360-440px height of the TabbedProductPreview container
5. All four software pages look visually consistent side by side
