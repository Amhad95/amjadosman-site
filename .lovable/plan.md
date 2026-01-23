

# Swap ASCII Shapes Between Pages

## Current State

| Page | Component | Shape |
|------|-----------|-------|
| Home (`/`) | `CyberGlobeHeader` | Monolith (cube) |
| Software (`/software`) | `NeuralLattice` | Torus lattice |

## After Swap

| Page | Component | Shape |
|------|-----------|-------|
| Home (`/`) | `NeuralLattice` | Torus lattice |
| Software (`/software`) | `CyberGlobeHeader` | Monolith (cube) |

---

## Files to Modify

### 1. `src/pages/Index.tsx`

**Change import:**
```tsx
// Remove
import { CyberGlobeHeader } from '@/components/shared/CyberGlobeHeader';

// Add
import { NeuralLattice } from '@/components/shared/NeuralLattice';
```

**Change Hero rightElement:**
```tsx
// From
rightElement={<CyberGlobeHeader color="mint" speed={0.8} />}

// To
rightElement={<NeuralLattice color="mint" speed={0.8} />}
```

### 2. `src/pages/Software.tsx`

**Change import:**
```tsx
// Remove
import { NeuralLattice } from '@/components/shared/NeuralLattice';

// Add
import { CyberGlobeHeader } from '@/components/shared/CyberGlobeHeader';
```

**Change Hero rightElement:**
```tsx
// From
rightElement={<NeuralLattice color="mint" speed={0.8} />}

// To
rightElement={<CyberGlobeHeader color="mint" speed={0.8} />}
```

---

## Result

- **Home page** will show the rotating torus wireframe with pulsing core
- **Software page** will show the rotating cube/monolith with pulsing core

Both keep the same mint color and 0.8 speed settings.

