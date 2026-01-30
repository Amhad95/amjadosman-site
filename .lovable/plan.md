

# Step 2: UI Preview Component System + CRM Page Upgrades

## Overview
This step transforms the CRM page from "text + weak preview" to a believable software landing page by building a reusable UI preview component system with realistic, neutral-surface previews placed across multiple sections.

---

## Key Problems Being Fixed

| Problem | Fix |
|---------|-----|
| Previews use dark purple (`bg-ink/40`, `bg-ink/30`) website-themed backgrounds | Switch to neutral app surfaces (`bg-white`, `bg-gray-50`) |
| TabbedProductPreview uses `bg-ink/40` tab bar and `bg-ink/20` content | Redesign with neutral colors, mint only as accents |
| Previews lack realism (no top bar, search, filters, pagination) | Add realistic UI chrome and data patterns |
| Mint used as text on light backgrounds | Use mint only for buttons, badges, active states |
| WorkflowStepper uses `bg-plate-astral` for preview container | Use `ProductPreviewFrame` with neutral background |
| MiniDashboard uses `bg-ink/40` cards | Redesign with white/light gray surface |
| SupportRequestVignette uses dark theme (`bg-ink/30`) | Redesign as neutral-surface UI |

---

## Component Architecture

### A. Upgrade Existing Components

#### 1. TabbedProductPreview.tsx (Complete Rewrite)
Transform from dark-themed to neutral-surface app preview:

**Before:**
- `bg-ink/40` tab bar
- `bg-ink/20` content area
- Mint text on dark backgrounds

**After:**
- White/light gray tab bar with subtle border
- Clean white content area
- Mint only for active tab indicator/border
- Add top app bar with search, filters, user avatar
- Proper app UI structure

**New Structure:**
```text
┌─────────────────────────────────────────┐
│ App Top Bar (search, filters, actions)  │
├─────────────────────────────────────────┤
│ Tab Navigation (neutral, mint active)   │
├─────────────────────────────────────────┤
│                                         │
│        Content Area (white)             │
│                                         │
└─────────────────────────────────────────┘
```

#### 2. ProductPreviews.tsx - CRM Components (Complete Rewrite)
All four CRM previews need neutral surfaces:

**CRMPipelinePreview → PipelineBoardRealistic:**
- White background kanban columns
- Real company names, deal values, owner initials, last activity dates
- Drag-and-drop visual feedback (hover states)
- Column headers with counts
- Card shadows and proper spacing

**CRMContactPreview → ContactsTableRealistic:**
- Full table with column headers (Name, Company, Status, Last Contact, Owner)
- Search bar and filter chips
- Status chips (Active, Qualified, New, Inactive)
- Pagination (1-10 of 47)
- Row hover states
- Click to open drawer

**CRMTasksPreview → TasksListRealistic:**
- Toggle: "My tasks" / "Team"
- Priority badges (High/Medium/Low)
- Due dates with color coding (Overdue = red, Today = amber, Future = gray)
- Assignee avatars
- Checkbox completion animation

**CRMReportsPreview → MiniReportsRealistic:**
- 4 KPI cards: Open Deals, Won This Month, Pipeline Value, Avg. Close Time
- Time range toggle (7d / 30d / 90d)
- Simple bar chart or trend line
- Trend indicators (up/down arrows)

#### 3. MiniDashboard.tsx (Redesign)
Currently uses `bg-ink/40` - needs neutral surface:
- White cards with subtle shadows
- Gray-700 text for values
- Mint for positive trends, destructive for negative
- Proper spacing and borders

#### 4. SupportRequestVignette.tsx (Redesign)
Currently dark-themed - needs neutral surface:
- White background with gray-100 rows
- Status badges with appropriate colors
- Proper table/list structure
- Subtle animations on status change

#### 5. ConfigurationPreview.tsx (Redesign)
Currently uses `bg-ink/30` items - needs neutral surface:
- White/gray-50 step cards
- Green checkmarks for completed
- Gray numbered badges for pending
- Mint highlight for active step

#### 6. WorkflowStepper.tsx (Fix Preview Container)
Currently uses `bg-plate-astral` - wrap content in ProductPreviewFrame:
- Replace dark background with ProductPreviewFrame browser variant
- Keep stepper UI on left unchanged
- Preview content on right in neutral frame

---

### B. New Components to Create

#### 1. AppTopBar.tsx
Reusable app chrome for previews:
```text
Props:
- searchPlaceholder?: string
- filters?: string[]
- showUser?: boolean
- actions?: { label: string; icon: LucideIcon }[]
```

Layout:
```text
┌──────────────────────────────────────────────────────────────┐
│ [🔍 Search contacts...    ] [Filter ▼] [Status ▼]  [JD] [⚙️] │
└──────────────────────────────────────────────────────────────┘
```

#### 2. DataTable.tsx
Reusable realistic table component:
```text
Props:
- columns: { key: string; label: string; width?: string }[]
- data: Record<string, any>[]
- searchPlaceholder?: string
- filters?: { label: string; active?: boolean }[]
- pagination?: { current: number; total: number; perPage: number }
- onRowClick?: (row) => void
- selectedRow?: string
```

Features:
- Column headers with sort indicators
- Row hover states
- Row selection
- Status chip rendering
- Pagination controls
- Filter chips above table

#### 3. DetailDrawer.tsx
Slide-in panel for detail views:
```text
Props:
- isOpen: boolean
- onClose: () => void
- title: string
- children: React.ReactNode
```

Features:
- Slides in from right within preview frame
- Header with close button
- Scrollable content area
- Activity timeline support
- Tags/badges section

#### 4. StatusChip.tsx
Reusable status badge:
```text
Props:
- status: 'active' | 'qualified' | 'new' | 'inactive' | 'pending' | 'approved' | 'overdue'
- size?: 'sm' | 'md'
```

Color mapping:
- active/qualified: green-100/green-700
- new: blue-100/blue-700
- pending: amber-100/amber-700
- inactive: gray-100/gray-600
- approved: mint-based
- overdue: red-100/red-700

#### 5. SettingsPanel.tsx
For workflow configuration steps:
```text
Props:
- sections: { title: string; items: { label: string; value?: string; type: 'toggle' | 'select' | 'text' }[] }[]
- activeSection?: number
```

#### 6. ImportMapperPreview.tsx
For data import step in workflow:
```text
Props:
- sourceColumns: string[]
- targetColumns: string[]
- mappings: { source: string; target: string }[]
```

Visual: Two-column mapping with connection lines

---

## Preview Placement on CRM Page (Minimum 3 Sections)

### Section 1: Product Preview (Near Top)
**Current:** TabbedProductPreview with dark theme
**After:** Upgraded TabbedProductPreview in ProductPreviewFrame

Tabs:
- Pipeline → PipelineBoardRealistic
- Contacts → ContactsTableRealistic (with DetailDrawer on row click)
- Tasks → TasksListRealistic
- Reports → MiniReportsRealistic

### Section 2: Workflow Tour
**Current:** WorkflowStepper with `bg-plate-astral` preview
**After:** WorkflowStepper with ProductPreviewFrame, step-specific previews

Step previews:
- Configure → SettingsPanel (pipeline stages, custom fields)
- Roles → RolesPermissionsMatrix (simplified version)
- Import → ImportMapperPreview
- Operate → PipelineBoardRealistic or ContactsTableRealistic

### Section 3: Governance Section
**Current:** RolesPermissionsMatrix wrapped in ProductPreviewFrame (card variant)
**After:** Center the preview, ensure it uses max-width container

Keep current implementation but:
- Ensure centered with `mx-auto max-w-4xl`
- Verify mint usage is correct (buttons only)

### Section 4: Support/Admin Section (Enhancement)
**Current:** SupportRequestVignette with dark theme
**After:** Redesigned SupportRequestVignette with neutral surface

Show change request lifecycle:
- New → In Review → Approved → Shipped

---

## Color and Contrast Rules (Enforced)

### Mint Usage
| Allowed | Not Allowed |
|---------|-------------|
| Button backgrounds | Body text on light |
| Active tab indicator | Borders on light-gray backgrounds |
| Status badges (approved/success) | Icons on mint-tinted backgrounds |
| Toggle/switch active state | Full-width backgrounds |
| Hover accent on interactive elements | |

### Neutral Surfaces
| Element | Background | Text |
|---------|------------|------|
| Preview container | white, gray-50 | gray-900 |
| Table rows | white, gray-50 alternating | gray-700 |
| Cards | white | gray-900 (heading), gray-600 (body) |
| Badges | {color}-100 | {color}-700 |
| Borders | gray-200 | - |

### Animation Rules
- All animated previews must use `useReducedMotion` hook
- When reduced motion preferred: show static state, no intervals
- Subtle transitions only: opacity, transform, color
- No parallax, bounce, or heavy motion

---

## Files to Create

| File | Purpose |
|------|---------|
| `src/components/ui/vignettes/AppTopBar.tsx` | App chrome header |
| `src/components/ui/vignettes/DataTable.tsx` | Realistic data table |
| `src/components/ui/vignettes/DetailDrawer.tsx` | Slide-in detail panel |
| `src/components/ui/vignettes/StatusChip.tsx` | Reusable status badges |
| `src/components/ui/vignettes/SettingsPanel.tsx` | Configuration settings UI |
| `src/components/ui/vignettes/ImportMapper.tsx` | Data import mapping UI |
| `src/components/ui/vignettes/CRMPreviews.tsx` | All CRM-specific realistic previews |

---

## Files to Modify

| File | Changes |
|------|---------|
| `src/components/ui/vignettes/TabbedProductPreview.tsx` | Complete redesign to neutral surface |
| `src/components/ui/vignettes/MiniDashboard.tsx` | Switch to neutral surface |
| `src/components/ui/vignettes/SupportRequestVignette.tsx` | Switch to neutral surface |
| `src/components/ui/vignettes/ConfigurationPreview.tsx` | Switch to neutral surface |
| `src/components/sections/WorkflowStepper.tsx` | Wrap preview in ProductPreviewFrame |
| `src/pages/software/SoftwareCRM.tsx` | Update to use new realistic previews |

---

## Detailed Component Specifications

### CRMPipelineBoardRealistic
```text
Columns: Lead, Qualified, Proposal, Negotiation, Won
Each column:
  - Header with count badge
  - White background, gray-200 border
  - Drop shadow on hover
  
Each card:
  - Company name (font-medium, gray-900)
  - Deal value ($12,000 - $50,000)
  - Owner initials in circle avatar
  - Last activity (2d ago, 5h ago)
  - Status dot (green = active, amber = stale)
  - Subtle border, white background
  - Hover: elevate with shadow, show "drag" cursor
```

### CRMContactsTableRealistic
```text
Columns: Name, Company, Status, Last Contact, Owner
Data rows (5-7 visible):
  - Sarah Johnson, Acme Corp, Active, 2 days ago, JD
  - Michael Chen, TechStart, Qualified, 1 week ago, SK
  - etc.

Features:
  - Search bar: "Search contacts..."
  - Filter chips: All | Active | Qualified | New
  - Hover: row highlight, pointer cursor
  - Click: open DetailDrawer with contact info
  - Pagination: "Showing 1-10 of 47 contacts"
```

### CRMDetailDrawer
```text
Header:
  - Avatar + Name + Company
  - Close button

Sections:
  - Contact Info (email, phone, role)
  - Linked Deals (2-3 items)
  - Activity Timeline (3-4 items)
  - Tags/Labels
  
Animation:
  - Slide in from right
  - Backdrop opacity fade
  - Respect reduced motion
```

---

## Acceptance Criteria for Step 2

1. All CRM previews use neutral surfaces (white/gray-50), not dark purple
2. TabbedProductPreview redesigned with app top bar and neutral tabs
3. At least 3 distinct preview sections on CRM page
4. ContactsTable supports row click → DetailDrawer interaction
5. Workflow stepper previews wrapped in ProductPreviewFrame
6. MiniDashboard and SupportRequestVignette use neutral surfaces
7. Mint used only as accent (buttons, active states, success badges)
8. All animations respect prefers-reduced-motion
9. Previews are centered with proper max-width containers
10. Realistic data patterns (no lorem ipsum)

---

## What's NOT in This Step
- Changes to other product pages (Accounting, Inventory, Tasks)
- Changes to /software suite hub page
- Product naming for other products
- Global site changes

