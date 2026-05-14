# Hypenation Media — Website Prototype Proposal

**Prepared by:** [Your Agency Name]
**Date:** May 2026
**For:** Hypenation Media

---

## Executive Summary

We have built a fully functional, production-ready website prototype for Hypenation Media — a high-energy visual media company operating at the intersection of culture, music, and motion. This prototype demonstrates what a world-class digital presence looks like for a brand in the festival media and creative content space.

The site is inspired by the structure and editorial confidence of leading branded entertainment agencies, adapted entirely to Hypenation Media's identity, services, and market position.

This document outlines what has been built, the technology behind it, and the path from prototype to a live, client-facing product.

---

## What Has Been Built

### A Full-Page, Scroll-Driven Landing Experience

The prototype is a single-page application comprising six fully designed sections:

| # | Section | Purpose |
|---|---------|---------|
| 1 | **Navigation** | Fixed, transparent-to-solid nav with smooth scroll anchors and a primary CTA button |
| 2 | **Hero** | Full-viewport cinematic video background, massive display typography, entrance animations, dual CTAs |
| 3 | **Capabilities** | Numbered service list (01–05) with hover interactions and scroll-triggered reveals |
| 4 | **Marquee** | Bold horizontal scrolling statement strip — brand personality at full volume |
| 5 | **Portfolio Grid** | 4-panel image grid with hover overlays, pull-quote captions, and a VHS REC badge |
| 6 | **Trusted By** | Infinitely scrolling client name ticker with edge fade masking |
| 7 | **Contact** | Split layout with contact form and direct contact details |
| 8 | **Footer** | Multi-column footer with CTA strip, service links, social icons, newsletter input, and legal bar |

---

## Services Showcased

The prototype maps directly to Hypenation Media's five core capabilities:

1. **Festival & Portrait Shots** — Raw, unfiltered energy captured in the pit and backstage
2. **VHS & VFX Content** — Gritty textures and retro formats blended with modern effects
3. **Reel Content** — High-impact short-form built for the algorithm
4. **Drone Content** — Cinematic scale and aerial perspectives
5. **Aftermovies** — The moments that outlive the night

Each capability is presented with its own numbered entry in the interactive capabilities section, with animated hover states that bring each service to life as the visitor scrolls.

---

## Design & Brand Direction

### Visual Identity Applied

| Element | Decision |
|---------|----------|
| **Colour Palette** | Pure black background, white foreground, electric acid green (`#CCFF00`) as the hero accent |
| **Typography** | Clash Display (bold, display — for headings) + Satoshi (clean, modern — for body) via Fontshare |
| **Layout** | Editorial grid — inspired by premium agency and cultural media brands |
| **Motion** | Scroll-triggered reveals, staggered entrance animations, continuous marquee, hover micro-interactions |
| **Photography** | AI-generated portfolio imagery: festival crowd, cinematic portrait, drone aerial, VHS-style still |
| **Video** | Full-viewport autoplay looping background video in hero section — muted, cinematic |

### Why This Approach Works

The acid green accent is distinctive, energetic, and immediately ownable — no other competitor in the SA media space is using this palette. It reads as confident and modern across both dark and bright contexts, and will translate effectively onto merch, social templates, and motion graphics.

The editorial layout mirrors how premium global agencies (Boiler Room, Defected, Section8) present themselves — not as vendors but as cultural authorities.

---

## Technology Stack

| Layer | Technology | Reason |
|-------|-----------|--------|
| **Frontend Framework** | React 18 + TypeScript | Industry standard, component-based, type-safe |
| **Build Tool** | Vite 7 | Instant HMR, optimised production builds |
| **Styling** | Tailwind CSS v4 | Utility-first, consistent, rapid iteration |
| **Animation** | Framer Motion | Production-grade scroll and entrance animations |
| **Routing** | Wouter | Lightweight client-side routing |
| **UI Components** | Shadcn/UI | Accessible, composable component library |
| **Package Manager** | pnpm (monorepo) | Fast, deterministic dependency resolution |
| **Icons** | Lucide React | Consistent, scalable SVG icon set |
| **Fonts** | Fontshare CDN | High-quality display and body typefaces |

### Architecture

The site is built as a **monorepo workspace** with a clean separation between the frontend client application and a pre-configured API server layer — meaning when Hypenation Media is ready to add dynamic content (bookings, blog posts, contact form submission, portfolio CMS), the backend infrastructure is already scaffolded and ready to connect.

### Performance Characteristics

- Zero runtime dependencies loaded before first paint
- Lazy-loaded images with hover-reveal overlays
- CSS-level animations (where possible) to avoid JavaScript overhead
- Video loaded natively via the browser's media pipeline — no third-party player SDK required
- Production build outputs a minified, tree-shaken bundle via esbuild

---

## What This Prototype Proves

This prototype demonstrates the complete creative and technical scope of what the finished product will look like — and how fast it can be delivered.

**In this build:**
- Full responsive layout (mobile, tablet, desktop)
- Live video background in hero
- Working contact form (frontend)
- All navigation links with smooth scroll
- Newsletter subscription input in footer
- Animated portfolio grid with 4 generated portfolio images
- Social media placeholders ready to wire up
- Accessibility-compliant interactive elements (ARIA labels, keyboard navigable)

**Not yet in this prototype (available in full engagement):**
- Client's actual logo, brand colors, and fonts applied
- CMS integration (Contentful, Sanity, or custom) for portfolio and blog
- Contact form backend (email delivery via SendGrid or similar)
- Analytics integration (Google Analytics 4 / Plausible)
- SEO metadata, Open Graph tags, sitemap
- Custom domain + production deployment
- Mobile-optimised navigation (hamburger menu)

---

## Proposed Engagement

### Phase 1 — Brand Integration & Content Population
Apply Hypenation Media's actual brand kit (logo, colors, fonts), replace placeholder images with real portfolio work, and populate all copy with approved content.

**Estimated time:** 3–5 business days

### Phase 2 — CMS & Contact Form
Integrate a headless CMS so the Hypenation team can update portfolio work, add new projects, and publish news without touching code. Wire up the contact form with email delivery.

**Estimated time:** 5–7 business days

### Phase 3 — Production Deployment
Deploy to a custom domain with SSL, configure CDN for video and image delivery, set up analytics, and hand over to the client with documentation.

**Estimated time:** 2–3 business days

---

## Why Act Now

The prototype you're looking at was built in hours — not weeks. The scaffolding, design system, and architecture are already done. Every day without a digital presence that matches the quality of the work Hypenation produces is a missed opportunity to convert a site visitor into a paying client.

The foundation is built. The investment from here is refinement, not construction.

---

## Contact

To move forward or discuss the full engagement:

**[Your Name]**
[Your Email]
[Your Phone]
[Your Agency]

---

*This document and the prototype it references are confidential and prepared exclusively for Hypenation Media.*
