

# Update Icon Container and Icon Colors

## Overview

Change the small square icon containers from grey (`bg-muted/50`) to solid plate colors, and update the icons inside from black (`color="ink"`) to mint (`color="mint"`).

---

## Changes Summary

| Component | Container Color | Icon Color |
|-----------|-----------------|------------|
| Services.tsx | `bg-plate-navy` | `mint` |
| PricingTable.tsx | `bg-plate-violet` | `mint` |
| ToolList.tsx (preview) | `bg-plate-emerald` | `mint` |
| ToolList.tsx (full) | `bg-plate-blue` | `mint` |
| Software.tsx | `bg-plate-astral` | `mint` |

---

## Files to Modify

### 1. Services.tsx (line 61, 65)
**Before:**
```tsx
<div className="w-12 h-12 rounded-xl bg-muted/50 flex items-center justify-center">
  <AnimatedIcon icon={ItemIcon} animation="float" color="ink" size={24} />
</div>
```

**After:**
```tsx
<div className="w-12 h-12 rounded-xl bg-plate-navy flex items-center justify-center">
  <AnimatedIcon icon={ItemIcon} animation="float" color="mint" size={24} />
</div>
```

### 2. PricingTable.tsx (line 77, 81)
**Before:**
```tsx
<div className="flex-shrink-0 w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center">
  <AnimatedIcon icon={ItemIcon} animation="pulse" color="ink" size={20} />
</div>
```

**After:**
```tsx
<div className="flex-shrink-0 w-10 h-10 rounded-lg bg-plate-violet flex items-center justify-center">
  <AnimatedIcon icon={ItemIcon} animation="pulse" color="mint" size={20} />
</div>
```

### 3. ToolList.tsx (lines 42, 46 and 71, 75)
**Preview variant - Before:**
```tsx
<div className="flex-shrink-0 w-12 h-12 rounded-xl bg-muted/50 flex items-center justify-center">
  <AnimatedIcon icon={ToolIcon} animation="breathe" color="ink" size={24} />
</div>
```

**Preview variant - After:**
```tsx
<div className="flex-shrink-0 w-12 h-12 rounded-xl bg-plate-emerald flex items-center justify-center">
  <AnimatedIcon icon={ToolIcon} animation="breathe" color="mint" size={24} />
</div>
```

**Full variant - Before:**
```tsx
<div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
  <AnimatedIcon icon={ToolIcon} animation="breathe" color="ink" size={28} />
</div>
```

**Full variant - After:**
```tsx
<div className="flex-shrink-0 w-14 h-14 rounded-xl bg-plate-blue flex items-center justify-center">
  <AnimatedIcon icon={ToolIcon} animation="breathe" color="mint" size={28} />
</div>
```

### 4. Software.tsx (line 49, 53)
**Before:**
```tsx
<div className="flex-shrink-0 w-12 h-12 rounded-xl bg-muted/50 flex items-center justify-center">
  <AnimatedIcon icon={ModuleIcon} animation="breathe" color="ink" size={24} />
</div>
```

**After:**
```tsx
<div className="flex-shrink-0 w-12 h-12 rounded-xl bg-plate-astral flex items-center justify-center">
  <AnimatedIcon icon={ModuleIcon} animation="breathe" color="mint" size={24} />
</div>
```

---

## Visual Result

The icon containers will now use the brand's plate color palette:
- **Services page**: Navy blue containers with mint icons
- **Pricing page**: Violet containers with mint icons  
- **Tools section**: Emerald/Blue containers with mint icons
- **Software page**: Astral purple containers with mint icons

This creates visual consistency with the dark plate/mint accent system used elsewhere on the site.

