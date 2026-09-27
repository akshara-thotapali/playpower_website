# AGENTS.md - Development Rules & Guidelines

This document outlines the core rules and guidelines for AI agents and developers working on the HavenScape Vacation Rental application.

## Core Rules

1. **Originality & Code Independence**
   - Do NOT copy, scrape, or lift-and-shift source code, components, CSS, or HTML from reference sites.
   - Use reference websites solely for visual quality, layout inspiration, spacing standards, and interaction patterns.
   - Maintain an original component architecture, data model, and visual identity.

2. **Component Architecture & Reusability**
   - Keep components modular, focused, and reusable.
   - Separate UI presentation from mock data services.
   - Store property data centrally in `src/data/property.js` to allow easy maintenance and replacement.
   - Place reusable components in `src/components/` with clean prop interfaces.

3. **Dependency Discipline**
   - Avoid bloated dependencies. Use native React hooks (`useState`, `useEffect`, `useCallback`, `useRef`) for overlays, Lightbox, focus traps, and modal controls.
   - Use `lucide-react` for clean, consistent UI iconography.
   - Use standard modern CSS for layout and animations.

4. **Accessibility (a11y) Rules**
   - Use semantic HTML elements (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<dialog>`, `<button>`).
   - Interactive elements must be native `<button>` or `<a>` tags with proper keyboard event handlers.
   - Provide descriptive `alt` text for all property images.
   - Implement focus trap management and ensure focus returns to the triggering element when overlays close.
   - Handle `Escape` key events to close Photo Tour and Lightbox overlays.
   - Prevent background body scrolling (`document.body.style.overflow = 'hidden'`) whenever a full-screen overlay is active.

5. **Styling & Visual Design Standard**
   - Maintain a premium, production-quality aesthetic tailored for desktop viewports.
   - Use curated color variables (HSL values for surface, primary accent, subtle borders, and overlays).
   - Ensure clean typography hierarchy, crisp image corner radius (12px - 16px), floating card shadows, and smooth hover micro-transitions.
   - Avoid generic Bootstrap or standard unstyled boilerplate looks.

6. **Quality & Verification Workflow**
   - Test every interactive element (Photo Tour opening, Lightbox image cycling, date picking, guest counting, share feedback, keyboard navigation).
   - Verify that the production build (`npm run build`) completes with zero errors.
   - Audit browser console for any React warnings or missing keys.
