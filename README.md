# HavenScape — Luxury Vacation Rental Marketplace

**HavenScape** is a desktop-first vacation rental listing application built with React, Vite, and Vanilla CSS. Inspired by high-end marketplace design standards and interaction patterns, HavenScape delivers a desktop listing experience featuring a hero photo grid, full-screen Photo Tour, keyboard-accessible Lightbox image viewer, interactive booking sidebar, and robust accessibility standards.

> **Note on Originality:** This project is an original implementation built from scratch. Reference applications were consulted strictly for visual layout patterns, spacing standards, photo-gallery behavior, and UX interactions. No code, HTML, CSS, components, or proprietary data were copied or scraped.

---

## 🛠 Tech Stack

- **Core Framework:** React 19 + Vite
- **Language:** JavaScript (ES6+)
- **Styling:** Modern Vanilla CSS (HSL design tokens, CSS Grid, Flexbox, glassmorphic header, sticky layouts, native animations)
- **Icons:** `lucide-react`
- **Data Source:** Local static data (`src/data/property.js`)

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18.0.0 or higher recommended)
- npm (v9.0.0 or higher)

### 1. Installation
Clone or download the repository, then install dependencies:
```bash
npm install
```

### 2. Running Locally (Development Mode)
Start the Vite local development server:
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173` (or the URL displayed in your terminal).

### 3. Production Build & Preview
To create an optimized production build:
```bash
npm run build
```
To test and preview the production build locally:
```bash
npm run preview
```

### 4. Deployment
The app can be deployed to Vercel, Netlify, Github Pages, or AWS S3 + CloudFront.
- **Vercel / Netlify:** Import the project repository and set build command to `npm run build` with publish directory `dist`.

---

## ✨ Main Features

1. **Polished Property Listing View:**
   - **Header & Search Bar:** Glassmorphic sticky navigation with brand identity, interactive destination search trigger, currency/language controls, and user dropdown menu.
   - **Property Summary Header:** Title, star rating (`4.98`), review count (`142`), Guest Favorite badge, interactive Share (with copy link toast), and Save/Wishlist toggling.
   - **Hero Image Gallery:** 5-photo grid (1 main hero photo + 4 stacked sub-photos) with hover zoom and floating *"Show all 12 photos"* action button.
   - **Property Details & Highlights:** Hosted by Elena Rostova (Superhost), guest capacity specs, key highlight cards, HavenCover protection guarantee, and expanded description toggle.
   - **Categorized Amenities:** Popular items preview + full modal dialog with categorized list of 32 amenities.
   - **Host Profile Section:** Detailed host stats, Superhost badge, response rate, co-host avatars, and interactive message modal.
   - **Sticky Booking Sidebar Card:**
     - Dynamic nightly price display ($1,250/night) with original price strike-through ($1,450).
     - Interactive date selection & stay duration modifier.
     - Guest count popover (Adults, Children, Infants) enforcing property capacity bounds.
     - Automated pricing breakdown (nights x rate, cleaning fee, service fee, estimated taxes, and total before taxes).
     - Instant reservation request confirmation modal with confirmation code (`HVN-2026-MAL-9824`).

2. **Full-Screen Photo Tour View:**
   - Displays all property images in a clean, high-resolution masonry grid.
   - Category filter pills (*All*, *Exterior*, *Living Room*, *Kitchen*, *Bedrooms*, *Bathrooms*, *Amenities*).
   - Scroll-locking on body while active.
   - Clicking any photo opens the single-image Lightbox at that image index.

3. **Full-Screen Lightbox Viewer:**
   - Full-screen dark theater mode.
   - Single-image focus with title and category overlay.
   - Image counter (e.g. `2 / 12`).
   - Left / Right navigation buttons + keyboard `ArrowLeft` & `ArrowRight` arrow keys.
   - `Escape` key overlay close handler.
   - Focus lock trap and focus restoration to trigger element on close.

---

## ♿ Accessibility Features

- **Semantic HTML5:** Built using `<header>`, `<main>`, `<aside>`, `<section>`, `<article>`, `<dialog>`, and `<button>` elements.
- **Keyboard Navigation:** Native button triggers for all interactive controls, lightbox image cycling via Arrow keys, and modal escape via `Escape`.
- **Focus Management:** Focus trapped inside overlays during display and restored to triggering element upon exit.
- **Screen Reader Support:** Meaningful `alt` text for all images, `aria-modal="true"`, `role="dialog"`, and `aria-label` descriptors on overlays.
- **Scroll Lock:** Automatically locks body scrolling (`document.body.classList.add('scroll-locked')`) whenever full-screen overlays are displayed.

---

## 🤖 AI-Assisted Development Workflow

This application was developed following an AI pair-programming workflow:
- **`AGENTS.md`:** Documents operational rules, architectural guidelines, accessibility invariants, and component standards.
- **`AI-PROMPTS.md`:** Tracks prompt history, design strategy, iteration steps, and verification benchmarks.
- **`architecture-diagram/README.md`:** Conceptual production-scale microservice architecture diagram detailing CDN, WAF, API Gateway, Kubernetes Services, PostgreSQL, Redis, Elasticsearch, and S3 Media pipelines.
