# Component Reference

Detailed documentation for every component in the AKS website. Each entry covers the component's purpose, props, behaviour, and file dependencies.

---

## Table of Contents

1. [Navbar](#navbar)
2. [Hero](#hero)
3. [Marquee](#marquee)
4. [Services](#services)
5. [About](#about)
6. [Leadership](#leadership)
7. [CtaBanner](#ctabanner)
8. [Footer](#footer)
9. [ScrollReveal](#scrollreveal)
10. [FloatingParticles](#floatingparticles)

---

## Navbar

**File:** `src/components/Navbar.tsx`
**Type:** Client Component (`"use client"`)

### Purpose

Fixed top navigation bar with company logo, section links, and a call-to-action button. Includes a mobile hamburger menu that expands to a full-screen overlay.

### Behaviour

- **Scroll detection:** Listens to `window.scroll` events. When `scrollY > 20`, the navbar gains a white/blurred background with a bottom border and shadow. At the top of the page, it is fully transparent.
- **Mobile menu:** On screens below `md` (768px), navigation links are hidden and a hamburger icon is shown. Tapping it opens a full-height overlay with navigation links and CTA. Tapping any link closes the menu.

### Navigation Links

| Label      | Target        |
| ---------- | ------------- |
| Services   | `#services`   |
| About      | `#about`      |
| Leadership | `#leadership` |
| Contact    | `#contact`    |

### Styling

- **Logo:** 32x32 rounded square with rose background, white "A" initial
- **Desktop links:** 13px, medium weight, plum/60 with hover to full plum
- **CTA:** Plum background, white text, rounded-xl, arrow icon
- **Mobile menu:** Full-screen overlay, 15px links with border separators, full-width CTA button

---

## Hero

**File:** `src/components/Hero.tsx`
**Type:** Client Component (`"use client"`)

### Purpose

The main introductory section. Features an animated rotating headline, company description, dual CTAs, trust indicators, and a decorative AI dashboard mockup.

### Layout

Two-column layout on desktop (`lg`+), stacked on mobile:

- **Left column:** Badge, headline, description paragraph, CTA buttons, trust indicators
- **Right column:** Fake dashboard UI with bar chart, status rows, and two floating stat cards

### Animated Headline

Rotates through the words `["Efficiency", "Automation", "Intelligence", "Scale"]` every 3 seconds with a fade + slide-up transition. Uses `useState` for the current word index and a CSS transition for opacity/transform.

### Dashboard Mockup

A decorative card designed to look like an analytics dashboard. Contains:

- Browser-style title bar with coloured dots
- "Process Efficiency" stat display (94.2%)
- Bar chart (12 bars with gradient fill)
- Three status rows (Document Processing, Workflow Engine, Data Pipeline)

Two floating cards orbit around the dashboard on screens >= `sm`:

- **Bottom-left:** "Automation / 3.2x faster" (animates with `float-a`)
- **Top-right:** "AI Models / Custom" (animates with `float-b`)

Both floating cards are hidden on mobile (`hidden sm:block`) to prevent overflow.

### Background Decorations

- Dot grid pattern (`.dot-grid-bg`) at 3% opacity
- Two gradient orbs (petal/blush/bloom) with `gentle-pulse` animation, scaled down on mobile

### Trust Indicators

Three text items below the CTAs: "Deployment-focused", "Measurable outcomes", "Enterprise-grade". Each prefixed with a rose checkmark icon.

---

## Marquee

**File:** `src/components/Marquee.tsx`
**Type:** Server Component

### Purpose

An infinite horizontal scrolling strip that displays the company's service areas. Sits between the Hero and Services sections as a visual separator.

### How It Works

- The `items` array is doubled (`[...items, ...items]`) to create seamless looping
- CSS animation `marquee-scroll` translates the strip by -50% (half its width)
- `will-change: transform` promotes to compositor layer for smooth 60fps scrolling
- Pauses on hover (desktop only, via `animation-play-state: paused`)

### Items Displayed

Custom AI Solutions, Workflow Automation, Enterprise AI Systems, Process Optimization, Operational Dashboards, Document Automation, Data Automation, AI Consulting & Implementation

### Styling

- Bloom/30 background with blush/60 top and bottom borders
- Rose dot separators between items
- 12px text on mobile, 15px on `sm`+

---

## Services

**File:** `src/components/Services.tsx`
**Type:** Server Component (uses `ScrollReveal` for animation)

### Purpose

Displays the company's seven service offerings in a structured card grid.

### Layout

Three-tier card grid:

1. **Row 1 (2 cards):** Large dark cards (`bg-plum`) for the two primary services
2. **Row 2 (3 cards):** White bordered cards for secondary services
3. **Row 3 (2 cards):** White bordered cards for remaining services

### Services Data

| #  | Title                          | Card Style  |
| -- | ------------------------------ | ----------- |
| 1  | Custom AI Solutions            | Dark (plum) |
| 2  | Workflow Automation            | Dark (plum) |
| 3  | Enterprise AI Systems          | White       |
| 4  | Process Optimization           | White       |
| 5  | Operational Dashboards         | White       |
| 6  | Document & Data Automation     | White       |
| 7  | AI Consulting & Implementation | White       |

### Card Behaviour

White cards have a hover effect: border shifts from blush/60 to rose/30, and a subtle shadow appears (`hover:shadow-md`).

### Responsiveness

- Row 1: 1 column on mobile, 2 on `sm`+
- Row 2: 1 column on mobile, 2 on `sm`, 3 on `lg`
- Row 3: 1 column on mobile, 2 on `sm`+
- Padding, font sizes, and gaps scale down on mobile

---

## About

**File:** `src/components/About.tsx`
**Type:** Server Component (uses `ScrollReveal` for animation)

### Purpose

Company description and three "Why Choose Us" differentiators displayed as numbered cards.

### Sections

1. **About Us paragraph:** Company overview text
2. **Why Choose Us:** Three cards laid out horizontally on desktop, stacked on mobile

### Why Choose Us Cards

| #  | Title              | Description                                                                        |
| -- | ------------------ | ---------------------------------------------------------------------------------- |
| 1  | Deployment-Focused | We don't just consult, we build and deploy. Every solution ships to production with clear timelines. |
| 2  | Business-Specific  | No generic AI. We solve your specific operational problems with systems tailored to your workflows. |
| 3  | Measurable Impact  | Every engagement is tied to operational metrics: efficiency gains, cost reduction, speed improvements. |

### Layout

- Cards are separated by vertical borders on desktop (`md:border-r`), horizontal borders on mobile (`border-b`)
- Large rose/30 step numbers (32px mobile, 42px desktop)
- 3-column grid on `md`+, single column on mobile

---

## Leadership

**File:** `src/components/Leadership.tsx`
**Type:** Server Component (uses `ScrollReveal` for animation)

### Purpose

Displays the three members of the leadership team in card format.

### Team Data

| Name          | Role                | Initials | Card Accent |
| ------------- | ------------------- | -------- | ----------- |
| Avnish Kumar  | Designated Partner  | AK       | `bg-plum`   |
| Sudesh        | Designated Partner  | SD       | `bg-mauve`  |
| Avish Dahiya  | CEO / Chief Executive Officer | AD       | `bg-rose`   |

### Card Design

Each card contains:
- Coloured circular avatar with initials
- Name in 14-15px semibold plum
- Role in 11-12px rose
- Short description in 11-12px plum/45

### Responsiveness

- 1 column on mobile
- 2 columns on `sm` (640px+)
- 3 columns on `lg` (1024px+)

---

## CtaBanner

**File:** `src/components/CtaBanner.tsx`
**Type:** Server Component (uses `ScrollReveal` for animation)

### Purpose

Dark call-to-action section encouraging visitors to get in touch. Contains contact emails and a prominent CTA button.

### Content

- **Heading:** "Let's solve your operational challenges."
- **Subtext:** "Reach out to discuss how AI and automation can transform your workflows."
- **Emails:** info@aksisys.com and avish@aksisys.com (both mailto links with envelope icons)
- **CTA:** "Get in Touch" button linking to `mailto:info@aksisys.com`

### Section ID

`id="contact"` with `scroll-mt-20` for smooth anchor scrolling offset.

### Styling

- Plum background with white text
- CTA button: white background, plum text, full-width on mobile
- Horizontal layout on `sm`+, stacked on mobile

---

## Footer

**File:** `src/components/Footer.tsx`
**Type:** Server Component

### Purpose

Page footer with company address, contact emails, navigation links, and legal registration details.

### Layout

Three-column grid on desktop (`md`+):

1. **Column 1 (1.5fr):** Logo, company name, full address
2. **Column 2 (1fr):** Contact emails (mailto links)
3. **Column 3 (1fr):** Navigation links (Services, About, Leadership, Contact)

Below the grid, a divider line separates the copyright notice and legal identifiers (LLPIN, PAN, GSTIN).

### Responsiveness

- 1 column on mobile, 2 on `sm`, 3 on `md`+
- Navigation links use 2-column sub-grid on mobile
- Legal info wraps with `flex-wrap` on small screens
- Font sizes scale down on mobile

---

## ScrollReveal

**File:** `src/components/ScrollReveal.tsx`
**Type:** Client Component (`"use client"`)

### Purpose

Wrapper component that adds a fade-in-up animation when content scrolls into the viewport. Used throughout the site to animate section headings, cards, and content blocks.

### Props

| Prop        | Type        | Default | Description                            |
| ----------- | ----------- | ------- | -------------------------------------- |
| `children`  | `ReactNode` | -       | Content to wrap                        |
| `className` | `string`    | `""`    | Additional CSS classes for the wrapper |
| `delay`     | `number`    | `0`     | Animation delay in milliseconds        |

### How It Works (Progressive Enhancement)

This component uses a **progressive enhancement** pattern to ensure content is always visible, even if JavaScript fails:

1. **Initial render (SSR + first paint):** `ready` is `false`, so no inline styles are applied. Content renders fully visible in the HTML.
2. **After hydration (`useEffect`):** The component checks if the element is already in the viewport.
   - **In viewport:** Both `ready` and `isVisible` are set to `true`. No animation occurs, content stays visible.
   - **Below viewport:** `ready` is set to `true` (applies `opacity: 0` + `translateY(20px)`), and scroll listeners are attached.
3. **On scroll:** When the element's top enters the viewport (plus 60px buffer), `isVisible` is set to `true`, triggering the CSS transition.

### Scroll Detection (Triple Redundancy)

Three mechanisms ensure the reveal fires on all devices:

1. `window.scroll` event listener (passive)
2. `window.touchmove` event listener (passive, mobile-specific)
3. `setInterval` polling every 400ms (catches edge cases where events don't fire)

All three are cleaned up once the element is revealed.

### Animation

- **Hidden state:** `opacity: 0`, `translateY(20px)`
- **Visible state:** `opacity: 1`, `translateY(0)`
- **Transition:** 0.6s ease-out with configurable delay

---

## FloatingParticles

**File:** `src/components/FloatingParticles.tsx`
**Type:** Client Component (`"use client"`)

### Purpose

Decorative ambient layer that renders small coloured dots floating upward across the viewport. Purely aesthetic; does not affect layout or interactivity.

### Props

| Prop    | Type     | Default | Description                    |
| ------- | -------- | ------- | ------------------------------ |
| `count` | `number` | `12`    | Number of particles to render  |

### Behaviour

- On mount, generates particles with random positions, sizes, durations, delays, and colours
- On mobile (< 640px), particle count is capped at 6 for performance
- Uses the `float-up` CSS animation (14-30s per cycle)
- Container is `fixed inset-0` with `pointer-events-none` and `z-0`, so it sits behind all content

### Particle Colours

Randomly selected from: `var(--rose)`, `var(--petal)`, `var(--mauve)`, `var(--blush)`

### Particle Properties

| Property   | Range             |
| ---------- | ----------------- |
| Size       | 3-8px             |
| Duration   | 14-30s            |
| Delay      | 0-12s             |
| Opacity    | 0.15-0.35         |
| Position   | 0-100% horizontal |
