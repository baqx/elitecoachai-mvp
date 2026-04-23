# Design System Specification: The Elite Industrialist

## 1. Overview & Creative North Star
This design system is built upon the **"Elite Industrialist"** North Star. It targets high-performing professionals in the Nigerian corporate ecosystem. The aesthetic is defined by **High-Density Intelligence**, **Enterprise Authority**, and **Modern SaaS Fluidity**. It combines the structured layout of an investment banking portal with the interactive delight of a modern AI workspace.

## 2. Aesthetics & Key Rules

### Hierarchy over Decoration
*   **Scale = Importance.** Use aggressive contrast between headers and labels.
*   **Color as Signal:** Use `slate-900` for authority, `blue-600` for action, and `emerald-600` for confirmation.
*   **Naira First:** All financial data must be formatted in Nigerian Naira (₦) with proper decimal precision.

### The "Crisp-Modern" Corner Rule
*   Standard containers use `rounded-xl` (12px) or `rounded-2xl` (16px).
*   Avoid "bubbly" circular corners (`rounded-3xl`+) unless for small pills. 
*   This provides a balanced "High Level" look: modern but structured.

### Shadows & Depth
*   Use `shadow-xl` with high blur and low opacity (e.g., `shadow-slate-200/50`) for floating layers.
*   Interactive cards should use a "Lift-on-Hover" pattern with subtle scaling (`hover:scale-[1.01]`).

### Textures & Patterns
*   **Dot-Matrix Pattern:** Use a 4px grid dot pattern at 3% opacity for large canvas backgrounds to add technical texture.
*   **Gradients:** Reserved for Hero Sections, Primary CTAs, and Progress Bars. Standard: `bg-gradient-to-br from-blue-600 to-indigo-700`.

---

## 3. Typography: The Google Standard
We utilize **Roboto** as the primary typeface for its balance of technical clarity and ergonomic reading.

*   **Black/Extrabold Headers:** Use `font-black` for primary page headers to project authority.
*   **Tracking:** Always use `tracking-tight` for titles and `tracking-[0.2em]` for labels to create that "Premium Editorial" look.
*   **Micro-copy:** Labels must be uppercase, `text-[10px]`, `font-black`, and `text-slate-400`.

---

## 4. Navigation Strategy

### The Persistent Anchor
*   **Sidebar:** Dark (`bg-slate-950`), grouped by operational domain (Academy, Enterprise, Operations).
*   **Topbar:** White (`bg-white`), persistent, containing a **Portal Switcher** for multi-role navigation and high-level notifications.

### Portal Switching
Users have "Perspective" access. The UI should dynamically reconfigure navigation and "Identity Badges" based on the active Perspective (Learner, Admin, or Tutor).

---

## 5. Component Logic

### AI Tutor Bubbles
*   **AI:** White background, `rounded-2xl`, `rounded-tl-sm`. Uses `Sparkles` icon.
*   **User:** `bg-blue-600`, `text-white`, `rounded-2xl`, `rounded-tr-sm`.

### Data Tables
*   Tables must prioritize "Identity" columns (Profile Pic + Name + Email).
*   Headers must be uppercase tracking-widest with `bg-slate-50/50`.

### Course Player
*   **The "Context Dock":** A persistent side navigation showing modules but allowing the main player to take 100% of the visual focus.
*   **AI Support Point:** Every transcript or reading block should have a contextual entry point for the AI Tutor.

---

## 6. CSS Tokens (`globals.css`)
*   `--font-roboto`: Primary typeface.
*   `.progress-gradient`: Standard action color.
*   `.bg-dot-pattern`: Technical background texture.
*   `.animate-fade-in-up`: Standard entry motion for components.