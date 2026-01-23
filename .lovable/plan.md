
# Dynamic Header Button Color Based on Page

## The Problem

The "Book Call" button in the navbar is hardcoded to use `textColor="violet"`, so it always shows violet text regardless of which page you're on. Unlike the Hero buttons which receive the `plate` prop from each page, the Header doesn't know which plate color the current page uses.

## The Solution

Create a route-to-plate color mapping in the Header component and dynamically set the button's `textColor` based on the current route.

---

## Route to Plate Color Mapping

| Route | Plate Color |
|-------|-------------|
| `/` | `violet` |
| `/software` | `astral` |
| `/services` | `navy` |
| `/tools` | `emerald` |
| `/pricing` | `navy` |
| `/work` | `navy` |
| `/about` | `emerald` |
| `/process` | `violet` (fallback) |
| `/resources` | `violet` (fallback) |
| `/contact` | `violet` (fallback) |
| `/book` | `violet` (fallback) |

---

## Changes Required

### File: `src/components/layout/Header.tsx`

1. Add a mapping object that maps routes to plate colors
2. Get the current plate color based on `location.pathname`
3. Pass this dynamic color to the PrimaryButton's `textColor` prop

**Implementation:**

```tsx
// Add type and mapping at top of component
type PlateColor = 'violet' | 'navy' | 'emerald' | 'blue' | 'astral' | 'burgundy';

const routePlateMap: Record<string, PlateColor> = {
  '/': 'violet',
  '/software': 'astral',
  '/services': 'navy',
  '/tools': 'emerald',
  '/pricing': 'navy',
  '/work': 'navy',
  '/about': 'emerald',
};

// Inside the component, derive the current plate color
const currentPlate = routePlateMap[location.pathname] || 'violet';

// Then use it in both PrimaryButton instances:
<PrimaryButton href={navigation.cta.href} textColor={currentPlate}>
```

---

## Visual Result

- **Home page** (`/`): Button text is violet
- **Software page** (`/software`): Button text is astral (dark purple)
- **Services page** (`/services`): Button text is navy
- **Tools page** (`/tools`): Button text is emerald
- **Pricing/Work pages**: Button text is navy
- **About page**: Button text is emerald
- **Other pages**: Default to violet

The button will now dynamically match each page's header/plate color.
