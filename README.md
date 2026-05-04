# AKS Intelligent Systems LLP - Website

Corporate landing page for **AKS Intelligent Systems LLP**, an AI consultancy that builds custom AI, automation, and efficiency solutions for enterprises.

Live site showcases the company's service areas, leadership team, and contact information with a modern, responsive design built on a pink/rose colour palette.

---

## Tech Stack

| Layer       | Technology                        | Version |
| ----------- | --------------------------------- | ------- |
| Framework   | Next.js (App Router, Turbopack)   | 16.2    |
| UI Library  | React                             | 19.2    |
| Language    | TypeScript                        | 5.x     |
| Styling     | Tailwind CSS (v4, CSS variables)  | 4.x     |
| Fonts       | Geist Sans & Geist Mono (Google)  | -       |
| Compiler    | React Compiler (babel plugin)     | 1.0     |
| Linting     | ESLint + eslint-config-next       | 9.x     |

No external UI libraries, icon packs, or animation frameworks. All icons are inline SVGs. All animations are pure CSS keyframes or lightweight client-side JavaScript.

---

## Getting Started

### Prerequisites

- Node.js 18+ (LTS recommended)
- npm 9+

### Install & Run

```bash
# Install dependencies
npm install

# Start development server (Turbopack)
npm run dev

# Production build
npm run build

# Serve production build
npm start
```

The dev server starts at `http://localhost:3000`.

### Available Scripts

| Command         | Description                              |
| --------------- | ---------------------------------------- |
| `npm run dev`   | Start dev server with Turbopack HMR      |
| `npm run build` | Create optimised production build        |
| `npm start`     | Serve the production build               |
| `npm run lint`  | Run ESLint across the codebase           |

---

## Project Structure

```
AKS/
├── public/                     # Static assets (images, favicons)
├── src/
│   ├── app/
│   │   ├── globals.css         # Global styles, colour palette, CSS animations
│   │   ├── layout.tsx          # Root layout (metadata, fonts, HTML shell)
│   │   └── page.tsx            # Home page (composes all sections)
│   └── components/
│       ├── Navbar.tsx           # Fixed top navigation with mobile hamburger menu
│       ├── Hero.tsx             # Hero section with animated headline + dashboard mockup
│       ├── Marquee.tsx          # Infinite horizontal scrolling service strip
│       ├── Services.tsx         # Service cards grid (7 services)
│       ├── About.tsx            # Company description + "Why Choose Us" cards
│       ├── Leadership.tsx       # Leadership team member cards
│       ├── CtaBanner.tsx        # Contact call-to-action banner with emails
│       ├── Footer.tsx           # Footer with address, legal info, navigation
│       ├── ScrollReveal.tsx     # Progressive scroll animation wrapper
│       └── FloatingParticles.tsx# Ambient floating particle background
├── next.config.ts              # Next.js configuration (React Compiler enabled)
├── tsconfig.json               # TypeScript configuration
├── package.json                # Dependencies and scripts
└── README.md                   # This file
```

---

## Architecture

### Rendering Strategy

The site is **statically generated** (SSG) at build time. There are no API routes, no server-side data fetching, and no database. The output is a set of static HTML/CSS/JS files that can be deployed to any static hosting provider (Vercel, Netlify, Cloudflare Pages, S3, etc.).

### App Router

Uses Next.js App Router (`src/app/`). The single route is `/` which renders `page.tsx`. The root `layout.tsx` sets up:

- HTML lang attribute
- Geist font loading via `next/font/google`
- SEO metadata (title, description)
- Global CSS import
- Flex column body layout

### Client vs Server Components

Most components are **server components** by default (no `"use client"` directive). Only three components require client-side JavaScript:

| Component             | Why Client-Side                                      |
| --------------------- | ---------------------------------------------------- |
| `Navbar.tsx`          | Scroll listener for background, mobile menu toggle   |
| `Hero.tsx`            | Animated word rotation with `setInterval`             |
| `ScrollReveal.tsx`    | Scroll-based reveal animations                        |
| `FloatingParticles.tsx`| Random particle generation on mount                  |

All other components (`Services`, `About`, `Leadership`, `CtaBanner`, `Footer`, `Marquee`) are server components rendered to static HTML.

---

## Component Reference

Detailed documentation for each component. See `docs/COMPONENTS.md` for the full breakdown.

### Page Composition Order

The home page (`page.tsx`) composes sections in this order:

```
FloatingParticles  (fixed background layer, z-0)
Navbar             (fixed top bar, z-50)
main               (content wrapper, z-10)
  ├── Hero
  ├── Marquee
  ├── Services
  ├── About
  ├── Leadership
  └── CtaBanner
Footer
```

---

## Colour Palette

Defined as CSS custom properties in `globals.css` and exposed to Tailwind via `@theme inline`.

| Token        | Hex       | Usage                                         |
| ------------ | --------- | --------------------------------------------- |
| `background` | `#FFFBF9` | Page background (warm near-white)             |
| `foreground` | `#2D1F21` | Default text colour                           |
| `plum`       | `#2D1F21` | Primary text, dark cards, navbar CTA          |
| `rose`       | `#F2778D` | Primary accent (buttons, icons, highlights)   |
| `pink`       | `#F291A3` | Secondary accent                              |
| `mauve`      | `#BF7A94` | Tertiary accent (leadership cards)            |
| `petal`      | `#F2B6C1` | Soft pink (decorative elements, gradients)    |
| `blush`      | `#F2D0D3` | Borders, dividers, subtle backgrounds         |
| `bloom`      | `#F9E8EB` | Card backgrounds, marquee strip               |
| `midnight`   | `#1A1216` | Unused (reserved for dark mode)               |

### Usage in Tailwind

All colours are available as Tailwind utilities: `bg-rose`, `text-plum`, `border-blush`, etc. Opacity modifiers work too: `text-plum/60`, `bg-bloom/30`.

---

## Animations

All animations are defined as CSS `@keyframes` in `globals.css`. No JavaScript animation libraries are used.

| Animation        | Purpose                                    | Duration |
| ---------------- | ------------------------------------------ | -------- |
| `float-up`       | Particles rising from bottom to top        | 14-30s   |
| `float-a`        | Floating card vertical bob (small)         | 4s       |
| `float-b`        | Floating card vertical bob (large)         | 5s       |
| `gentle-pulse`   | Background orb pulsing opacity/scale       | 8-12s    |
| `marquee-scroll`  | Infinite horizontal marquee translation   | 25s      |

### ScrollReveal (Progressive Enhancement)

`ScrollReveal` wraps section content with a fade-in-up animation triggered by scrolling. It uses a **progressive enhancement** pattern:

1. **Server render / initial HTML:** No inline styles applied. Content is fully visible.
2. **After hydration (`useEffect`):** JavaScript checks each element's viewport position.
3. **Elements already in view:** Marked visible immediately (no flash).
4. **Elements below viewport:** Hidden via `opacity: 0` + `translateY(20px)`, revealed on scroll.
5. **Fallback:** `scroll`, `touchmove` event listeners, and a 400ms polling interval ensure elements are revealed even if one mechanism fails.

This approach guarantees content is always visible even if JavaScript fails to load or execute.

---

## Responsive Design

The site is fully responsive across all screen sizes. Key breakpoints follow Tailwind defaults:

| Breakpoint | Width    | Key Changes                                              |
| ---------- | -------- | -------------------------------------------------------- |
| Base       | < 640px  | Single column, stacked layout, smaller fonts             |
| `sm`       | >= 640px | Two-column grids, larger typography, floating cards show |
| `md`       | >= 768px | Navbar links visible, footer grid expands                |
| `lg`       | >= 1024px| Hero side-by-side layout, 3-column service grid          |

### Mobile-Specific Handling

- **Navbar:** Hamburger menu expands to full-screen overlay with large tap targets
- **Hero:** Dashboard mockup centres below text; floating stat cards hidden below `sm`
- **Leadership:** 1 column on mobile, 2 on `sm`, 3 on `lg`
- **CTA button:** Full-width on mobile for easy tapping
- **Footer:** Grid layout with 2-column navigation links on mobile
- **FloatingParticles:** Particle count halved on screens < 640px for performance
- **Background orbs:** Scaled down on mobile (300px vs 550px)

---

## Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect the GitHub repository at [vercel.com](https://vercel.com) for automatic deployments on push.

### Static Export

Since the site is fully static, it can be exported and hosted anywhere:

```bash
npm run build
```

The output in `.next/` can be served by any static file server. For a pure static export, add `output: 'export'` to `next.config.ts`.

---

## Company Information

| Field     | Value                                                  |
| --------- | ------------------------------------------------------ |
| Name      | AKS Intelligent Systems LLP                            |
| Type      | Limited Liability Partnership (LLP)                    |
| LLPIN     | ACW-4965                                               |
| PAN       | ACNFA7427J                                             |
| TAN       | RTKA34008C                                             |
| Address   | 602, Sector 84, Antriksh Heights, Tower-AI, Narsinghpur, Gurgaon, 122004, Haryana, India |
| Email     | info@aksisys.com, avish@aksisys.com                    |

### Leadership

| Name          | Role                |
| ------------- | ------------------- |
| Avnish Kumar  | Designated Partner  |
| Sudesh        | Designated Partner  |
| Avish Dahiya  | CEO / Chief Executive Officer |

### Service Areas

1. Custom AI Solutions
2. Workflow Automation
3. Enterprise AI Systems
4. Process Optimization
5. Operational Dashboards
6. Document & Data Automation
7. AI Consulting & Implementation

---

## License

Private repository. All rights reserved by AKS Intelligent Systems LLP.
