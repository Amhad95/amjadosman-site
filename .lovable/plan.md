

# CRM Page Contrast & Credibility Fix Plan

## Issues Identified

### A. Mint Usage Violations (Must Fix)

| Component | Location | Issue |
|-----------|----------|-------|
| **OutcomeTiles** | Line 37 | `bg-mint/10 text-mint` - mint icon on light mint background |
| **OutcomeTiles** | Line 29 | `hover:border-mint/30 hover:shadow-mint/5` - mint border on light card |
| **PersonaCards** | Line 45-46 | `bg-mint/10 border-mint shadow-mint/10` - mint borders and shadows on light surface |
| **PersonaCards** | Line 51 | `bg-mint` indicator bar - acceptable as small indicator |
| **PersonaCards** | Line 77 | `text-mint` for "Payoff:" label - mint text on light background |
| **CapabilityGrid** | Line 49 | `text-mint` icon on `bg-plate-astral` - acceptable (dark bg) |
| **ProblemContrast** | Line 40 | `text-mint` icon on `bg-plate-astral` - acceptable (dark bg) |

### B. Icon Contrast Issues

| Component | Location | Issue |
|-----------|----------|-------|
| **OutcomeTiles** | Icons | Mint icons on light mint-tinted backgrounds - invisible |
| **PersonaCards** | Inactive state | Good (muted-foreground), but active uses mint on mint |

### C. Section Titles Too Generic

| Current Title | Issue | Better Alternative |
|---------------|-------|---------------------|
| "See the product" | Literal, not marketing | "Meridian in action" |
| "Built for teams who sell" | Acceptable | Keep |
| "Replace the chaos" | Good | Keep |
| "Outcomes" | Too generic | "What changes on day one" |
| "What you can do" | Too generic | "Core capabilities" |
| "From configuration to operations" | OK but wordy | "Your setup journey" |
| "Control who does what" | Good | Keep |
| "Configured for your team..." | Good | Keep |
| "Live Metrics Preview" | Literal | "Activity snapshot" |

---

## Files to Modify

### 1. OutcomeTiles.tsx (src/components/sections/OutcomeTiles.tsx)
**Changes:**
- Replace `bg-mint/10 text-mint` with `bg-gray-100 text-gray-600` for icon container
- Replace `hover:border-mint/30` with `hover:border-gray-300`
- Replace `hover:shadow-mint/5` with standard shadow
- On hover, change icon container to `bg-gray-900 text-white` (not mint)

### 2. PersonaCards.tsx (src/components/sections/PersonaCards.tsx)
**Changes:**
- Replace active card `bg-mint/10 border-mint shadow-mint/10` with `bg-gray-100 border-gray-900 shadow-lg`
- Replace `bg-mint` active indicator bar with `bg-gray-900`
- Replace active icon container from `bg-mint text-ink` to `bg-gray-900 text-white`
- Replace `text-mint` for "Payoff:" label with `text-emerald-600` (semantic color for positive)
- Replace `text-magenta/80` for "Pain:" label with `text-red-600` (semantic color for negative)

### 3. SoftwareCRM.tsx (src/pages/software/SoftwareCRM.tsx)
**Changes - Section Headlines:**
- Line 176: Change "See the product" → "Meridian in action"
- Line 177: Keep subheadline but make it more specific
- Line 235: Change "Outcomes" → "What changes on day one"
- Line 243: Change "Live Metrics Preview" → "Activity snapshot"
- Line 256: Change "What you can do" → "Core capabilities"
- Line 269: Change "From configuration to operations" → "Your setup journey"

---

## Detailed Component Fixes

### OutcomeTiles.tsx - Full Fix

```tsx
// Current (problematic):
<div className={cn(
  'flex-shrink-0 w-10 h-10 rounded-lg',
  'bg-mint/10 text-mint',  // ❌ Mint on light mint
  'flex items-center justify-center',
  'group-hover:bg-mint group-hover:text-ink',  // ❌ Changes to full mint bg
)}>

// Fixed:
<div className={cn(
  'flex-shrink-0 w-10 h-10 rounded-lg',
  'bg-gray-100 text-gray-600',  // ✅ Neutral, readable
  'flex items-center justify-center',
  'group-hover:bg-gray-900 group-hover:text-white',  // ✅ High contrast on hover
)}>
```

Also fix the card hover state:
```tsx
// Current:
'hover:border-mint/30 hover:shadow-lg hover:shadow-mint/5'

// Fixed:
'hover:border-gray-300 hover:shadow-lg'
```

### PersonaCards.tsx - Full Fix

```tsx
// Active card state - Current:
isActive
  ? 'bg-mint/10 border-mint shadow-lg shadow-mint/10'  // ❌ Mint everywhere
  
// Fixed:
isActive
  ? 'bg-gray-50 border-gray-900 shadow-lg'  // ✅ Neutral with ink accent

// Active indicator bar - Current:
<div className="... bg-mint rounded-r-full" />  // ❌ Mint indicator

// Fixed:
<div className="... bg-gray-900 rounded-r-full" />  // ✅ Ink indicator

// Active icon container - Current:
isActive ? 'bg-mint text-ink' : 'bg-muted text-muted-foreground'  // ❌

// Fixed:
isActive ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-600'  // ✅

// Pain/Payoff labels - Current:
<span className="text-magenta/80">Pain:</span>  // ❌ Low contrast
<span className="text-mint">Payoff:</span>  // ❌ Mint on light

// Fixed:
<span className="text-red-600 font-medium">Pain:</span>  // ✅ Semantic negative
<span className="text-emerald-600 font-medium">Payoff:</span>  // ✅ Semantic positive
```

---

## Section Title Updates

### SoftwareCRM.tsx - Updated Headlines

| Section | Current | New |
|---------|---------|-----|
| Product Preview | "See the product" | "Meridian in action" |
| Product Preview subheadline | Keep but tighten | "Unified pipeline, contacts, tasks, and reporting." |
| Outcomes | "Outcomes" | "What changes on day one" |
| Outcomes subheadline | "Measurable improvements from day one." | "Clear, immediate value—not promises." |
| Mini Dashboard label | "Live Metrics Preview" | "Activity snapshot" |
| Capabilities | "What you can do" | "Core capabilities" |
| Capabilities subheadline | "Core features configured for your team." | "Everything you need, configured and ready." |
| Workflow | "From configuration to operations" | "Your setup journey" |
| Workflow subheadline | "A clear path from setup to daily use." | "From first login to daily operations in four steps." |

---

## Color Rules Summary (For Reference)

### Mint Allowed Uses
- ✅ Primary button background with ink text
- ✅ Small active tab underline (2px max)
- ✅ Small badge dot paired with ink/dark text
- ✅ Success indicator on dark backgrounds

### Mint NOT Allowed
- ❌ Text on light backgrounds
- ❌ Borders on light cards/tables
- ❌ Line icons on light surfaces
- ❌ Tinted backgrounds (bg-mint/10, bg-mint/20)
- ❌ Shadows (shadow-mint/x)

### Icon Rules
- Line icons: Use `text-gray-600` or `text-gray-500` on light surfaces
- On hover: Use `text-gray-900` or `text-white` on dark container
- On colored chips: Icon must be ink/white, not mint

---

## Acceptance Criteria

1. ✅ No mint text on light backgrounds
2. ✅ No mint borders on light cards
3. ✅ No mint icons on light/mint-tinted backgrounds
4. ✅ Icons use gray-600/gray-900 colors (readable)
5. ✅ Section titles use professional marketing language
6. ✅ Subheadlines are specific and value-focused
7. ✅ Hover states use gray-900/white (not mint)
8. ✅ Pain/Payoff labels use semantic colors (red/emerald)

