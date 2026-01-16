# Blackstone Design System v2.0

> **"Dissected from the Void. Refined for the Web."**

## ⚠️ CRITICAL SAFETY WARNING

**DO NOT MODIFY CORE FILES IN `/system` OR `/components/ui` DIRECTLY.**
These are the foundational primitives. If a change is needed:

1. Create a copy.
2. Rename and move to project-specific folders (e.g., `apps/langu/`).
3. Modify the copy.

## 🏛 System Architecture

- **/system**: The DNA. Immutable physics, palettes (Bone/Midnight), and typography.
- **/components/ui**: Monorepo Primitives. Unstyled mechanics like **Sparkles.tsx** or **Marquee.tsx**.
- **/components/liquid**: Styled instances for **LanguBridge** (Warm/Frosted style).
- **/components/obsidian**: Styled instances for **Blackstone HR** (Matte/Crimson style).

## 🚀 Quick Start

1. `wsl --set-default Refinery_OS`.
2. `pnpm install`.
3. `npm run analyze` to scan for technical debt.
