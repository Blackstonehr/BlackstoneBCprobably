Core Color Palette (High-Fidelity)
These are the primary variables that define the "Pivot" environment. All components must resolve to these:

Midnight (Base): #00050a — The deep "void" background.

Bonewhite (Accent): #E9DAC0 — The primary text and high-contrast element color.

Muted Surface: #0a0f14 — Used for subtle card separation.

2. Motion & Physics
Standardize all animations to the "Liquid" profile for a premium, deliberate feel:

The "Liquid" Spring: stiffness: 50, damping: 10.

The "Main" Transition: cubic-bezier(0.16, 1, 0.3, 1) (Apple-style fluid easing).

Stagger Pattern: Standard delay is 0.1s per item.

3. Glass & Blur Architecture
All glass elements should use these specific transparency and blur values to ensure consistency across the monorepo:

Card Glass: rgba(233, 218, 192, 0.16) (Medium) with 24px blur.

Navigation Glass: 12px blur optimized for sticky headers.

Standard Border: 1px solid rgba(233, 218, 192, 0.12).

4. Typography Rules
Headers: All h1, h2, and h3 should have letter-spacing: -0.04em and line-height: 0.85.

Logo Carousel: Use a wider tracking, tracking-[0.4em], for a more architectural, expensive look.