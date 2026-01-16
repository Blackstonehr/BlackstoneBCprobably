🧱 BLACKSTONE UI LIBRARY v1

Design patterns for shadcn + Tailwind + Framer Motion

1. SURFACES & BACKGROUNDS
1.1 Base Surfaces

Light app background

class: bg-slate-50 text-slate-900


Dark app background

class: bg-slate-950 text-slate-100


Section background (light)

class: bg-gradient-to-b from-white via-slate-50 to-slate-100


Section background (dark)

class: bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950

2. GRADIENT KITS
2.1 “Professional & Inviting” (Aether Light)

Primary hero gradient

bg-gradient-to-br from-indigo-500 via-sky-500 to-teal-400


Soft card wash

bg-gradient-to-b from-white/90 via-white/70 to-slate-100/80


Accent pill

bg-gradient-to-r from-emerald-400 to-teal-500 text-white

2.2 “Dark & Powerful” (Obsidian Neon)

Hero / shell background

bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800


Neon edge card

bg-gradient-to-b from-slate-900/90 via-slate-900/70 to-slate-900/40
border border-cyan-400/30
shadow-[0_0_24px_rgba(34,211,238,0.35)]


Status pill (critical)

bg-gradient-to-r from-rose-500 to-orange-500 text-white

2.3 Neutral / Corporate Steel
bg-gradient-to-b from-slate-100 via-slate-50 to-slate-100
border border-slate-200
text-slate-900

3. SHADOW & DEPTH SYSTEM

You refer to these by name in your answers; the GPT uses the Tailwind combos.

shadow-soft

shadow-[0_1px_3px_rgba(15,23,42,0.12)]


shadow-card

shadow-[0_8px_24px_rgba(15,23,42,0.18)]


shadow-glossy

shadow-[0_18px_45px_rgba(15,23,42,0.32)]


shadow-neon-accent

shadow-[0_0_28px_rgba(56,189,248,0.55)]


inner-soft

shadow-[inset_0_1px_0_rgba(255,255,255,0.18)]


Use rules:

Default: shadow-soft on most cards

Important surfaces: shadow-card

Hero / spotlight card: shadow-glossy (light) or shadow-neon-accent (dark)

4. BORDER & OUTLINE PATTERNS

Hairline subtle (light)

border border-slate-200/70


Hairline subtle (dark)

border border-slate-800/80


Soft glowing border (dark)

border border-cyan-400/25
shadow-[0_0_18px_rgba(34,211,238,0.35)]


Card divider

border-t border-slate-200/60 dark:border-slate-800/70


Input focus ring

focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2

5. CARD & PANEL RECIPES

These are the actual building blocks the GPT should keep reusing.

5.1 GlassCard (light & dark)

Base Tailwind stack

rounded-lg border backdrop-blur-xl
bg-white/70 dark:bg-slate-900/70
border-slate-200/70 dark:border-slate-700/80
shadow-[0_12px_40px_rgba(15,23,42,0.22)]


Wrap with Framer Motion:

<motion.div
  initial={{ opacity: 0, y: 8 }}
  animate={{ opacity: 1, y: 0 }}
  whileHover={{ scale: 1.02 }}
  whileTap={{ scale: 0.98 }}
>
  <Card className="...">
    {children}
  </Card>
</motion.div>

5.2 GlossyMetricCard

Visual recipe

3D depth

Icon or sparkline row at top

Big metric, label, delta

Subtle gradient background

Tailwind base

rounded-xl border backdrop-blur
bg-gradient-to-b from-white/90 via-slate-50/90 to-slate-100/80
dark:from-slate-900/90 dark:via-slate-900/80 dark:to-slate-950/90
border-slate-200/80 dark:border-slate-700/80
shadow-[0_16px_50px_rgba(15,23,42,0.28)]

5.3 Side Panel / Inspector
bg-slate-900/95 border-l border-slate-800/80 backdrop-blur-xl
shadow-[-16px_0_40px_rgba(15,23,42,0.9)]

6. LAYOUT BLOCKS

You want repeatable layout patterns, not chaos.

DashboardShell

Full-height grid: sidebar + main

Main has top bar + content + right panel (optional)

min-h-screen
grid grid-cols-[260px_minmax(0,1fr)]
bg-slate-950 text-slate-100


Mobile fallback:

md:grid md:grid-cols-[260px_minmax(0,1fr)]


SectionShell

w-full max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-10
space-y-6


GridSection (3-up metrics)

grid gap-4 md:gap-6
grid-cols-1 sm:grid-cols-2 lg:grid-cols-3

7. TYPOGRAPHY & LABELING

Page title

text-2xl md:text-3xl font-semibold tracking-tight


Section label

text-sm font-medium text-slate-500 uppercase tracking-[0.16em]
dark:text-slate-400


Muted body

text-sm text-slate-600 dark:text-slate-400

8. EFFECTS / MICRO-DETAILS
8.1 Accent underline (for heading / link)
relative inline-block

after:absolute after:left-0 after:bottom-0
after:h-px after:w-full
after:bg-gradient-to-r after:from-indigo-500 after:via-sky-400 after:to-teal-400
after:opacity-70

8.2 Noise overlay (dark)
pointer-events-none
absolute inset-0
bg-[url("/noise.png")] bg-repeat opacity-[0.08]
mix-blend-soft-light


GPT should mention this as an optional layer; you decide if you actually wire a noise texture.

8.3 Glow ring button (dark emphasis CTA)
relative inline-flex items-center justify-center
rounded-full px-4 py-2 text-sm font-medium
bg-gradient-to-r from-indigo-500 to-sky-500 text-white
shadow-[0_0_24px_rgba(56,189,248,0.65)]

after:absolute after:inset-[-2px]
after:rounded-full
after:bg-gradient-to-r after:from-indigo-500/40 after:to-sky-400/40
after:blur-xl after:-z-10

9. SHADCN INTEGRATION PATTERNS

When using shadcn components, the GPT should:

Wrap them with motion when animating

Apply these Tailwind patterns to className

Example: Metric card

<motion.div
  initial={{ opacity: 0, y: 8 }}
  animate={{ opacity: 1, y: 0 }}
  whileHover={{ scale: 1.02 }}
>
  <Card className="rounded-xl border-slate-800/70 bg-gradient-to-b from-slate-900/90 to-slate-950/90 shadow-[0_18px_50px_rgba(0,0,0,0.65)]">
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium text-slate-400">
        Active crews
      </CardTitle>
      {/* icon slot */}
    </CardHeader>
    <CardContent className="space-y-1">
      <div className="text-2xl font-semibold text-slate-50">27</div>
      <p className="text-xs text-emerald-400/80">+4 vs last week</p>
    </CardContent>
  </Card>
</motion.div>


The GPT should not copy this verbatim every time, but reuse the pattern: gradient background, strong shadow, muted label, bold number, Framer Motion fade+rise.

10. HOW “BLACKSTONE UI ARCHITECT” SHOULD USE THIS

When your custom GPT sees this library in its Knowledge, it should:

Treat these as canonical recipes

Prefer these gradients, shadows, borders, and layouts

Only deviate if you explicitly tell it to

Name them in responses (“use the Obsidian Neon card pattern from the library”, etc.)

You:

“Use Dark & Powerful for a subcontractor risk overview dashboard. 4 metric cards, incident feed, right-side inspector.”

The GPT should:

Use DashboardShell

Use GlossyMetricCard with Obsidian Neon gradient + neon shadow

Use GlassCard or Panel for the inspector

Animate everything with Framer Motion defaults

Output your 3-section structure and IDE prompt using these patterns