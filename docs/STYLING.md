# Styling Guide

How styles are structured, the colour system, Tailwind v4 configuration, animations, and responsive design patterns in the AKS website.

---

## Overview

The site uses **Tailwind CSS v4** with a custom colour palette defined via CSS custom properties. There are no additional CSS-in-JS libraries, component libraries, or design systems. All styling is done through Tailwind utility classes and a single `globals.css` file.

---

## File Structure

```
src/app/globals.css       # All global styles (single file)
```

This file contains:
1. Tailwind import (`@import "tailwindcss"`)
2. CSS custom properties (`:root`)
3. Tailwind theme registration (`@theme inline`)
4. Base element styles (`html`, `body`, `::selection`)
5. Utility classes (`.dot-grid-bg`, `.marquee-strip`)
6. All `@keyframes` animation definitions

---

## Colour System

### Custom Properties

Colours are defined as CSS custom properties in `:root` and then registered with Tailwind via `@theme inline` so they can be used as utility classes.

```css
:root {
  --background: #FFFBF9;    /* Warm near-white page background       */
  --foreground: #2D1F21;    /* Default body text colour               */
  --blush:      #F2D0D3;    /* Light pink for borders and dividers    */
  --rose:       #F2778D;    /* Primary accent (CTAs, icons, links)    */
  --pink:       #F291A3;    /* Secondary accent                       */
  --mauve:      #BF7A94;    /* Tertiary accent (muted pink-purple)    */
  --plum:       #2D1F21;    /* Dark charcoal for text and dark cards  */
  --petal:      #F2B6C1;    /* Soft pink for gradients/decorations    */
  --bloom:      #F9E8EB;    /* Very light pink for card backgrounds   */
  --midnight:   #1A1216;    /* Reserved for future dark mode          */
}
```

### Tailwind Registration

```css
@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-blush: var(--blush);
  --color-rose: var(--rose);
  --color-pink: var(--pink);
  --color-mauve: var(--mauve);
  --color-plum: var(--plum);
  --color-petal: var(--petal);
  --color-bloom: var(--bloom);
  --color-midnight: var(--midnight);
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);
}
```

This makes all colours available as Tailwind utilities:
- Backgrounds: `bg-rose`, `bg-plum`, `bg-bloom`
- Text: `text-plum`, `text-rose`, `text-white`
- Borders: `border-blush`, `border-rose`
- With opacity: `text-plum/60`, `bg-bloom/30`, `border-blush/50`

### Colour Usage Conventions

| Element Type             | Colour Token(s)                    |
| ------------------------ | ---------------------------------- |
| Page background          | `background` (#FFFBF9)             |
| Primary text             | `plum` at full or /70 opacity      |
| Secondary/muted text     | `plum` at /45-/55 opacity          |
| Primary accent           | `rose` (buttons, icons, highlights)|
| Dark cards               | `bg-plum` with `text-white`        |
| Light cards              | `bg-white` with `border-blush`     |
| Section dividers         | `border-blush/50`                  |
| Decorative gradients     | `petal`, `blush`, `bloom` combos   |
| Text selection           | `rose` background, white text      |

---

## Typography

### Fonts

Two fonts loaded via `next/font/google` in `layout.tsx`:

- **Geist Sans** (`--font-geist-sans`): Primary body font
- **Geist Mono** (`--font-geist-mono`): Available for code/monospace (unused currently)

### Font Size Scale

The site uses explicit pixel-based font sizes rather than Tailwind's default scale, for precise control:

| Context              | Mobile        | Desktop          |
| -------------------- | ------------- | ---------------- |
| Hero headline        | 32px          | 60px             |
| Section headings     | 22px          | 30px             |
| Card titles (dark)   | 16px          | 18px             |
| Card titles (light)  | 13px          | 14px             |
| Body text            | 13px          | 14-16px          |
| Small labels         | 10-11px       | 11-12px          |
| Section labels       | 11px          | 11px             |
| Legal/meta text      | 9-10px        | 10-11px          |

---

## Animations

### CSS Keyframes

All animations are pure CSS, defined in `globals.css`:

#### `float-up`
Used by `FloatingParticles`. Moves particles from bottom to top with horizontal drift and scale-down.

```css
@keyframes float-up {
  0%   { transform: translateY(0) translateX(0) scale(1); opacity: 0; }
  10%  { opacity: 1; }
  90%  { opacity: 1; }
  100% { transform: translateY(-100vh) translateX(30px) scale(0.5); opacity: 0; }
}
```

#### `float-a` / `float-b`
Used by Hero floating cards. Simple vertical bobbing with different amplitudes.

```css
@keyframes float-a {
  0%, 100% { transform: translateY(0); }
  50%      { transform: translateY(-8px); }
}

@keyframes float-b {
  0%, 100% { transform: translateY(0); }
  50%      { transform: translateY(-12px); }
}
```

#### `gentle-pulse`
Used by Hero background orbs. Subtle opacity and scale pulsing.

```css
@keyframes gentle-pulse {
  0%, 100% { opacity: 0.4; transform: scale(1); }
  50%      { opacity: 0.6; transform: scale(1.04); }
}
```

#### `marquee-scroll`
Used by the Marquee strip. Infinite horizontal translation.

```css
@keyframes marquee-scroll {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}
```

### JavaScript-Driven Animations

#### Hero Word Rotation
Cycles through words every 3 seconds using `setInterval` and CSS transitions on `opacity` and `transform`.

#### ScrollReveal
Applies `opacity` and `translateY` via inline styles with CSS `transition`. See `docs/COMPONENTS.md` for details.

---

## Responsive Design Patterns

### Breakpoint Usage

The site uses Tailwind's default breakpoints:

| Prefix | Min Width | Primary Purpose                           |
| ------ | --------- | ----------------------------------------- |
| (none) | 0px       | Mobile-first base styles                  |
| `sm`   | 640px     | Tablet portrait, 2-column layouts         |
| `md`   | 768px     | Desktop nav visible, wider footer         |
| `lg`   | 1024px    | Hero side-by-side, 3-column grids         |

### Common Patterns Used

**Stacked to side-by-side:**
```html
<div class="flex flex-col lg:flex-row">
```

**Responsive grid:**
```html
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
```

**Responsive font sizing:**
```html
<h1 class="text-[32px] sm:text-[50px] lg:text-[60px]">
```

**Responsive padding:**
```html
<section class="px-4 sm:px-6 lg:px-8 py-14 sm:py-24">
```

**Show/hide by breakpoint:**
```html
<div class="hidden sm:block">   <!-- Hidden on mobile, shown on sm+ -->
<div class="md:hidden">         <!-- Shown on mobile, hidden on md+ -->
```

**Full-width buttons on mobile:**
```html
<a class="w-full sm:w-auto">
```

---

## Dot Grid Pattern

A subtle repeating dot pattern used as a background texture in the Hero section:

```css
.dot-grid-bg {
  background-image: radial-gradient(circle, var(--plum) 0.6px, transparent 0.6px);
  background-size: 28px 28px;
}
```

Applied at 3% opacity (`opacity-[0.03]`) as an absolute-positioned overlay.

---

## Z-Index Layers

| Layer               | z-index | Element                  |
| ------------------- | ------- | ------------------------ |
| Floating particles  | 0       | `FloatingParticles`      |
| Main content        | 10      | `<main>` wrapper         |
| Floating cards      | 10      | Hero stat cards          |
| Navbar              | 50      | `Navbar` (fixed)         |
| Mobile menu overlay | 50      | Navbar mobile dropdown   |
