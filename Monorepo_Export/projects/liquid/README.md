# Liquid Monorepo

## Design System: "Bone & Midnight"
- **Background**: Midnight Navy `hsl(240 10% 10%)`
- **Primary Material**: Bonewhite `#E9DAC0`
- **Glass Blur**: 24px (Deep Luxury)

## Architecture
- **apps/site**: Next.js 15 (App Router)
- **packages/tokens**: Raw design data (Flat structure)
- **packages/effects**: High-performance Framer Motion wrappers
- **packages/ui**: Structural primitives (Box, Button, Stack, Surface, Text)

## Entry Points
Each package uses `./src/index.ts` as its single source of truth for exports.