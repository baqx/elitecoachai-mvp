# Design System Specification: The Architectural Scholar

## 1. Overview & Creative North Star
This design system is built upon the "Architectural Scholar" North Star. It rejects the frantic, cluttered nature of traditional enterprise software in favor of a serene, authoritative environment. By blending the technical precision of a Stripe-inspired interface with the editorial breathability of Notion, we create a B2B2C experience that feels like a premium workspace rather than a database.

The system breaks the "template" look through **intentional asymmetry** and **tonal depth**. We do not use lines to separate ideas; we use space and light. Our layouts prioritize high-contrast typography scales and overlapping "glass" layers to guide the user’s eye, ensuring the platform feels like a high-end tool for high-performing professionals.

---

## 2. Colors & Surface Philosophy
The palette is rooted in Deep Slate and Professional Blue, providing a bedrock of trust, while the Indigo accent drives action.

### The "No-Line" Rule
**Borders are a design failure.** To maintain a premium editorial feel, 1px solid borders are strictly prohibited for sectioning. Boundaries must be defined solely through background color shifts or subtle tonal transitions.
*   *Implementation:* Place a `surface-container-low` component on a `surface` background to define its territory. Let the negative space do the work.

### Surface Hierarchy & Nesting
Treat the UI as a series of stacked, physical layers—like sheets of fine vellum paper.
*   **Base:** `surface` (#faf8ff)
*   **Low Importance/Grouping:** `surface-container-low` (#f2f3ff)
*   **Standard Cards:** `surface-container-highest` (#dae2fd)
*   **Floating Elements:** `surface-container-lowest` (#ffffff)

### The "Glass & Gradient" Rule
To escape the "flat" enterprise trap, use **Glassmorphism** for floating panels (e.g., sidebars or modals). Apply a semi-transparent `surface` color with a `backdrop-blur: 20px`.
*   **Signature Textures:** For primary CTAs and Hero sections, do not use flat hex codes. Apply a subtle linear gradient from `primary` (#000000) to `primary_container` (#001453) at a 135-degree angle to add "soul" and depth.

---

## 3. Typography
We utilize **Inter** not just for legibility, but as a structural element. 

*   **Display (lg/md/sm):** Used for "Momentum Moments"—large headers that anchor a page. These should have a slight negative letter-spacing (-0.02em) to feel tighter and more authoritative.
*   **Headlines & Titles:** These define the "Editorial" flow. Use `headline-lg` (2rem) to introduce new modules.
*   **Body (lg/md/sm):** The workhorse. `body-md` (0.875rem) is the standard for platform density.
*   **Labels (md/sm):** Always uppercase with +0.05em letter-spacing when used for category tags or micro-copy.

The hierarchy communicates the brand identity: **Scale = Importance.** A large `display-md` header next to a quiet `body-md` paragraph creates the "Stripe-like" sophisticated contrast we seek.

---

## 4. Elevation & Depth
Depth is achieved through **Tonal Layering**, not structural lines.

### The Layering Principle
Stacking tiers creates natural lift. For example, a `surface-container-lowest` (#ffffff) card sitting on a `surface-container-low` (#f2f3ff) background creates a "soft lift" that feels architectural rather than digital.

### Clean Elevation (No "Vibe-Coding")
When an element must float (modals, dropdowns), use standard, subtle shadows. Do NOT use colored glows or heavy, dramatic drop shadows (e.g., avoid `shadow-xl`, `shadow-[color]`). 
*   **Standard Rule:** Use crisp borders (`border border-slate-200`) and minimal elevation (`shadow-sm` or `shadow-md`) to ensure a mature, enterprise B2B feel.

### The "Ghost Border" Fallback
If accessibility requires a container boundary, use a **Ghost Border**: The `outline-variant` (#c6c6cd) at **15% opacity**. Never use 100% opaque borders.

---

## 5. Components

### Buttons
*   **Primary:** High-contrast. Background: `primary` (#000000). Text: `on_primary`. Shape: `md` (0.375rem).
*   **Secondary:** Background: `secondary_container` (#dae2fd). Text: `on_secondary_container`.
*   **Tertiary:** No background. Text: `on_tertiary_container` (#7671ff). Use for low-priority actions.

### Input Fields
Forgo the standard four-sided box. Use a `surface-container-high` (#e2e7ff) background with a "Ghost Border" bottom-stroke. This mirrors the "Notion" clean-entry feel while maintaining enterprise affordance.

### Cards & Lists
**Keep borders crisp and corners constrained.** 
*   **Lists:** Use vertical white space from the Spacing Scale or standard 1px borders (`border-slate-100`).
*   **Cards:** Use `border border-slate-200` with a strict `md` or `lg` corner radius (`rounded-md`, `rounded-lg`). **Explicitly forbidden:** `rounded-xl`, `rounded-2xl`, and `rounded-3xl`. The interface should feel structured and professional, not overly rounded or bubbly.

### The "Coach AI" Specific Components
*   **Insight Toast:** A glassmorphic float using `surface_bright` with a `surface_tint` (#3755c3) accent bar on the left.
*   **Learning Progress Track:** A 4px thick line using `primary_fixed` (#dde1ff) as the track and a `on_tertiary_container` (#7671ff) gradient for the progress fill.

---

## 6. Do’s and Don’ts

### Do
*   **Do** use generous white space. If a layout feels "full," increase the padding by 50%.
*   **Do** use `inverse_surface` (#283044) for dark-mode-style callouts within a light interface to highlight critical AI insights.
*   **Do** align text-heavy content to a narrow, readable central column (max-width: 680px) to maintain the "Scholar" feel.

### Don't
*   **Don't** use 100% black text on pure white. Use `on_surface` (#131b2e) on `surface` (#faf8ff) for a softer, premium contrast.
*   **Don't** use standard "Drop Shadows" from a UI kit. Always manually tune shadows to be wide, soft, and tinted.
*   **Don't** use icons as the primary means of navigation. Always pair icons with `label-md` text to maintain professional clarity.