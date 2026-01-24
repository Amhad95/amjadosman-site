

# Force Rebuild: Whitespace Change

## Purpose

Trigger a fresh build to verify the headline fix (`variant = 'poster'`) is now correctly applied.

## Change

| File | Action |
|------|--------|
| `src/components/shared/SectionHeader.tsx` | Add a trailing space after a comment or at end of a line |

## Implementation

**Line 1**: Add a trailing space after the semicolon in the import statement:

```tsx
// Before
import React from 'react';

// After (with trailing space - invisible but triggers rebuild)
import React from 'react'; 
```

This is a zero-impact change that will force Vite to rebuild and serve fresh assets.

