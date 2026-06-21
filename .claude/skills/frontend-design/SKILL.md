---
name: frontend-design
description: Design system for the Melore Cookies marketing site. Use whenever building or editing UI in this repo so spacing, type, color, and motion stay consistent.
---

# Melore Cookies — Design System

A warm, premium bakery brand. The site should feel like a luxe pastry box: generous whitespace, considered typography, restrained color, soft motion. **Avoid the generic "AI Tailwind" look** — no gradients with violet/indigo, no purple→pink hero gradients, no candy-rainbow accents, no shadcn defaults left untouched.

## Brand voice (visual)
- Editorial bakery, not e-commerce dashboard.
- Hand-baked, small-batch — leave room for the product to breathe.
- Confident, never cute. No emoji garnish, no "🍪" sprinkled into headlines.

## Color tokens
Use the Tailwind names below; never inline arbitrary hex.

| Token              | Hex       | Use                                  |
| ------------------ | --------- | ------------------------------------ |
| `cream-50`         | `#FBF7F0` | Page background                      |
| `cream-100`        | `#F4ECDD` | Section background alt               |
| `cream-200`        | `#E8DCC4` | Card surfaces, dividers              |
| `cocoa-900`        | `#1F1410` | Primary text, hero headline          |
| `cocoa-700`        | `#3A2A22` | Body text                            |
| `cocoa-500`        | `#6B4F44` | Secondary text, captions             |
| `caramel-500`      | `#C8741A` | Primary CTA, key accent              |
| `caramel-600`      | `#A85E12` | CTA hover                            |
| `berry-400`        | `#D2596A` | Tertiary accent (badges, highlight)  |
| `matcha-400`       | `#8FA86E` | Tag accent only — sparingly          |

Always pair `cocoa-900` text on `cream-50`/`cream-100` — never pure black, never pure white.

## Typography
Two families only:
- **Display:** Fraunces (variable serif). Weights 400/500/700. Use for `h1`–`h3` and large pull quotes. Tracking tight (`-0.02em`), optical sizing on.
- **Body:** Inter. Weights 400/500/600. Use for everything else.

Type scale (mobile → desktop). Always set both `text-` and `md:text-` for headings.

| Role            | Mobile             | Desktop            |
| --------------- | ------------------ | ------------------ |
| Display (hero)  | `text-5xl`         | `md:text-7xl`      |
| H2 (section)    | `text-3xl`         | `md:text-5xl`      |
| H3 (card)       | `text-xl`          | `md:text-2xl`      |
| Lead paragraph  | `text-lg`          | `md:text-xl`       |
| Body            | `text-base`        | `md:text-base`     |
| Caption / eyebrow| `text-xs uppercase tracking-[0.18em]` | same |

Line-height: `leading-[1.05]` on display, `leading-tight` on h2/h3, `leading-relaxed` on body.

## Spacing (8px grid)
Use only: `2 (8px)`, `3 (12)`, `4 (16)`, `6 (24)`, `8 (32)`, `12 (48)`, `16 (64)`, `20 (80)`, `24 (96)`, `32 (128)`.
- Section vertical padding: `py-20 md:py-32`.
- Container: `max-w-6xl mx-auto px-6 md:px-8`.
- Card internal padding: `p-6 md:p-8`.
- Stack rhythm inside a section: `space-y-6` for prose, `space-y-12` between subsections.

## Radius & elevation
- Buttons: `rounded-full`.
- Cards: `rounded-2xl` (24px) — cookie-soft.
- Images: `rounded-3xl`.
- Shadows: avoid `shadow-lg`/`shadow-xl` defaults. Use a custom `shadow-soft` defined in tailwind config: `0 24px 60px -20px rgba(31, 20, 16, 0.18)`. One elevation level only.

## Motion (Framer Motion)
- **Easing:** always `[0.22, 1, 0.36, 1]` (smooth ease-out). Never bouncy springs unless the element is overtly playful (e.g. a single hero ornament).
- **Durations:** `0.5s` for entrance, `0.25s` for hover, `0.8s` for hero headline.
- **Entrance pattern (scroll reveal):** `initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.5, ease: [0.22,1,0.36,1] }}`.
- **Stagger:** parent `staggerChildren: 0.08`, children inherit the entrance pattern.
- **Hover:** scale `1.02` max for cards, `1.04` for the primary CTA. Never `1.1+` — it feels juvenile.
- Respect `prefers-reduced-motion` — wrap entrance variants in a hook that returns identity transforms when reduced motion is on.

## Components

### Button (primary)
`inline-flex items-center gap-2 rounded-full bg-caramel-500 px-7 py-3.5 text-base font-medium text-cream-50 transition hover:bg-caramel-600 hover:shadow-soft`

### Button (ghost)
`inline-flex items-center gap-2 rounded-full border border-cocoa-900/15 px-7 py-3.5 text-base font-medium text-cocoa-900 transition hover:bg-cocoa-900/5`

### Eyebrow label
`text-xs uppercase tracking-[0.18em] text-caramel-500 font-medium`

### Card
`rounded-2xl bg-cream-100 p-6 md:p-8 border border-cream-200`. Hover lift: `transition-transform hover:-translate-y-1`.

## Hard rules — do not do
1. No purple, indigo, violet, or any "tech startup" gradient.
2. No center-aligned walls of text. Hero centers, everything else is left-aligned on desktop.
3. No `text-gray-500` — use `cocoa-500`.
4. No box shadow stacks. One `shadow-soft` token, used sparingly on hover only.
5. No more than 2 font weights visible per section.
6. No emoji as decoration. Iconography is lucide-react, sized `w-5 h-5`, stroke `1.5`.
7. No `<section>` without an eyebrow label and a real H2 — give every section a name.
