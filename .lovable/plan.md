
# Fix Card Sizing and Tool Card Styling

## Issues Identified

### 1. Work/Proof/Project Cards Too Large
The ProofTiles component has oversized cards due to:
- Large thumbnail aspect ratio (`aspect-[16/9]`)
- Generous content padding (`p-6 md:p-8`)

### 2. Tool Cards Styling Issues
**Preview variant (Home page) problems:**
- Missing "Try this tool" link that exists in the full variant
- Illustration container uses grey (`bg-muted/30`) instead of plate color
- Illustrations are dark (`text-foreground/70`) instead of mint

**Full variant (Tools page):**
- Same styling issues - grey container, dark icons

---

## Changes Summary

| Component | Issue | Fix |
|-----------|-------|-----|
| ProofTiles | Cards too big | Reduce thumbnail aspect to `4/3`, reduce padding to `p-4 md:p-5` |
| ToolList (preview) | Missing "Try this tool" link | Add the link like in full variant |
| ToolList (both) | Grey illustration container | Use `plateColor` prop for container background |
| ToolList (both) | Dark icons | Change illustration wrapper to `text-mint` |

---

## Files to Modify

### 1. ProofTiles.tsx

**Reduce card size:**

```tsx
// Change thumbnail aspect ratio
<div className="aspect-[4/3] bg-gradient-to-br from-muted to-muted/50 ...">

// Reduce content padding  
<div className="p-4 md:p-5">
  <h3 className="font-serif text-lg text-foreground mb-1">
  <p className="text-sm text-muted-foreground mb-3">
```

### 2. ToolList.tsx

**Add plateColor support and mint icons:**

Update both variants to:
1. Use `plateColor` prop for container background (with `plateClasses` mapping)
2. Change illustration color from `text-foreground/70` to `text-mint`
3. Add "Try this tool" link to preview variant

**Preview variant changes (lines 62-86):**
```tsx
{/* Illustration thumbnail - add plate color background */}
<div className={cn(
  "aspect-[4/3] border-b border-ink/5 flex items-center justify-center p-6",
  plateClasses[plateColor]
)}>
  <div className="w-16 h-16 text-mint">
    <Illustration delay={index * 100} />
  </div>
</div>

{/* Content - add the "Try this tool" link */}
<div className="p-5">
  <h3 className="font-serif text-lg text-foreground mb-1">
    {tool.title}
  </h3>
  <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
    {tool.description}
  </p>
  <span className="inline-flex items-center gap-1 text-sm font-medium text-ink group-hover:text-lavender transition-colors">
    Try this tool
    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
  </span>
</div>
```

**Full variant changes (lines 104-108):**
```tsx
{/* Illustration thumbnail - add plate color background */}
<div className={cn(
  "aspect-square border-b border-ink/5 flex items-center justify-center p-6",
  plateClasses[plateColor]
)}>
  <div className="w-14 h-14 md:w-16 md:h-16 text-mint">
    <Illustration delay={index * 80} />
  </div>
</div>
```

**Add plateClasses mapping inside component:**
```tsx
const plateClasses = {
  violet: 'bg-plate-violet',
  navy: 'bg-plate-navy',
  emerald: 'bg-plate-emerald',
  blue: 'bg-plate-blue',
  astral: 'bg-plate-astral',
  burgundy: 'bg-plate-burgundy',
};
```

### 3. Index.tsx

**Pass plateColor to ToolList:**
```tsx
<ToolList 
  tools={home.aiTools.tools.map(t => ({ title: t.title, description: t.description }))} 
  variant="preview" 
  plateColor="violet"
/>
```

---

## Visual Result

### Before (ProofTiles)
```
┌─────────────────────────────────────────┐
│                                         │
│         16:9 THUMBNAIL                  │
│         (very wide)                     │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│  Title                                  │
│  Long description text...               │
│  View sample →                          │
│                                         │
└─────────────────────────────────────────┘
```

### After (ProofTiles)
```
┌──────────────────────────┐
│                          │
│    4:3 THUMBNAIL         │
│    (more compact)        │
│                          │
├──────────────────────────┤
│ Title                    │
│ Description...           │
│ View sample →            │
└──────────────────────────┘
```

### Before (ToolList)
```
┌──────────────┐
│ [grey bg]    │
│  dark icon   │
│              │
├──────────────┤
│ Title        │
│ Description  │
│ (no link)    │  ← preview
└──────────────┘
```

### After (ToolList)
```
┌──────────────┐
│ [violet bg]  │
│  mint icon   │
│              │
├──────────────┤
│ Title        │
│ Description  │
│ Try tool →   │  ← both variants
└──────────────┘
```

---

## Technical Notes

- The line illustrations use `currentColor` for their strokes, so wrapping them in `text-mint` will make them mint colored
- The `plateColor` prop already exists in ToolList but wasn't being used for the illustration container
- Both preview and full variants will now have consistent styling and the "Try this tool" link
