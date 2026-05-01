# Jolly Time Popcorn Japan - Website

This component contains the official brand page and "How to Pop" guide for Jolly Time Popcorn in Japan.

## Functionality
- Multi-page routing with `react-router-dom`
- High-performance image optimization using `wsrv.nl`
- Fully responsive design (Mobile & Desktop)
- Tally.so popup form integration
- Scroll-synced animations with `framer-motion`

## Dependencies
- `react`: ^18.2.0
- `react-router-dom`: ^6.20.0
- `framer-motion`: ^10.16.4
- `lucide-react`: ^0.292.0
- `clsx`: ^2.0.0
- `tailwind-merge`: ^2.0.0

## Usage
Import the main component or use the routing structure.

```tsx
import { JollyTimeLineupVariant } from '@/sd-components/4de89e95-73a8-4955-a01e-63c883729cd8'

function App() {
  return <JollyTimeLineupVariant />
}
```

## Props
| Prop | Type | Description |
|------|------|-------------|
| -    | -    | Currently self-contained with internal routing |
