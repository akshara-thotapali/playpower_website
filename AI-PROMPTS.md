# AI Prompts & Development Workflow Log

This document records the prompt sequence and instructions used during the AI-assisted development of the HavenScape Desktop Vacation Rental Marketplace.

---

## Prompt 1: Initial Requirements & Architectural Strategy
**User Goal:** Build a polished, desktop-only vacation rental listing web application inspired by high-end marketplace visual quality and interaction patterns.
**Instructions Provided:**
- Tech stack: React + Vite, JavaScript, Vanilla CSS, `lucide-react`.
- Build 3 core views:
  1. **Listing Page**: Header, SearchBar, PropertyHeader, HeroGallery (1 main + 4 sub-grid layout), PropertyDetails, Amenities, HostSection, Sticky BookingCard with date picker & breakdown, Footer.
  2. **Photo Tour**: Full-screen photo gallery view showing all images in categorized layout, with category filter tabs and close button. Body scroll lock.
  3. **Lightbox**: Full-screen single image viewer with counter ("2 / 12"), image titles, next/previous buttons, keyboard navigation (Left/Right arrows), Escape to close, focus management, and body scroll lock.
- Original code constraint: Do NOT copy reference source code, React components, CSS, or data structure.
- Create `AGENTS.md`, `AI-PROMPTS.md`, `architecture-diagram/`, and `README.md`.

---

## Prompt 2: Design System & Visual Specification
**Execution Steps:**
- Establish CSS design tokens (variables for glassmorphism, surface background, primary accent `#FF385C` / `#E00B41`, neutral shades, shadow elevations, border-radius system).
- Import Google Fonts ('Plus Jakarta Sans', sans-serif).
- Implement responsive desktop-first container constraints (`max-width: 1280px`).
- Ensure sticky positioning math for the booking sidebar (`top: 100px`) so it scrolls smoothly alongside property details.

---

## Prompt 3: Component Architecture & State Management
**Execution Steps:**
- Abstract data into `src/data/property.js` containing rich, high-resolution villa photos, breakdown fees, host info, amenities by category, and house policies.
- Build pure React presentation components:
  - `Header.jsx` & `SearchBar.jsx` with active filter overlays.
  - `HeroGallery.jsx` with photo grid layout and hover overlays.
  - `BookingCard.jsx` with interactive night count calculation, date selection popover, guest selector popover, and instant booking modal feedback.
  - `PhotoTour.jsx` with category tabs and photo grid.
  - `Lightbox.jsx` with keyboard event listeners, touch swipe support, focus trap, and ARIA attributes.

---

## Prompt 4: Accessibility & Keyboard Navigation Polish
**Execution Steps:**
- Add `useEffect` event listeners for `KeyDown` (`ArrowLeft`, `ArrowRight`, `Escape`).
- Maintain trigger element ref to restore focus on overlay close.
- Add `aria-modal="true"`, `role="dialog"`, and `aria-label` attributes to full-screen overlays.
- Lock body overflow on overlay mount and restore on unmount.

---

## Prompt 5: Production Verification & Testing
**Execution Steps:**
- Run Vite dev server and check console outputs.
- Test production build with `npm run build`.
- Verify code quality and visual polish against high-end design benchmarks.
