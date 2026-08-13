# AGENTS.md — WordPress Website Rules

## 1. Mandatory First Step

Invoke the `frontend-design` skill before writing any theme/template code. This applies at the start of every session.

## Core Operating Principles

- Don't assume. Don't hide confusion. Surface tradeoffs.
- Minimum code that solves the problem. Nothing speculative.
- Touch only what you must. Clean up only your own mess.
- Define success criteria. Loop until verified.

## 2. UI/UX Guidelines

- Follow design system components.
- Implement responsive, mobile-first layout.
- Use semantic HTML elements with proper ARIA labels.
- Optimize for Core Web Vitals.
- Test across major browsers.

## 3. Reference Image Protocol

### When a reference image is provided
- Match layout, spacing, typography, and color exactly.
- Use placeholder content (`https://placehold.co/`) and generic text.
- Do not reinterpret, improve, or add new design elements.

### When no reference image is provided
- Create a high-craft design following the Anti-Generic Guardrails in §8.

### Comparison workflow
- Minimum two full comparison rounds: screenshot → compare → fix → screenshot again.
- Stop only when no visible differences remain or the user ends the process.
- Be specific when reporting differences: element name, actual value, expected value.

## 4. Local Server

- The site is served by Laragon (Apache + MySQL + PHP 8.3) at `http://warrner.test`.
- Laragon runs as a persistent local service — do not start a separate dev server, and never screenshot from `file:///`.
- Document root: `D:\laragon\www\Warrner` (this repo).

## 5. Screenshot Workflow

Chrome cache: `C:/Users/wildr/.cache/puppeteer/`

Screenshot `http://warrner.test` (and specific template URLs as needed) with whatever Puppeteer-based tooling is available in the session.

After each screenshot, load the PNG via the Read tool and check:
- Spacing and padding
- Font size, weight, line-height
- Exact hex colors
- Alignment
- Border-radius and shadows
- Image sizing

## 6. Output Defaults

- Standard WordPress theme structure: `style.css` header block, `functions.php`, template files following the [template hierarchy](https://developer.wordpress.org/themes/basics/template-hierarchy/).
- Enqueue styles/scripts via `wp_enqueue_scripts` — no inline `<style>`/`<script>` dumped into templates.
- Mobile-first responsive layout.
- Escape all dynamic output (`esc_html`, `esc_attr`, `esc_url`) and sanitize all input.

## 7. Brand Assets

Always inspect `public/images/` before designing.

If assets exist:
- Use logos, palettes, style guides, and imagery as-is.
- Do not use placeholders where real assets exist.
- Use exact brand colors; do not invent new ones.

## 8. Anti-Generic Guardrails

### Colors
- Never use default Tailwind colors (e.g., `indigo-500`, `blue-600`).
- Choose a custom brand hue and derive a full scale from it.

### Shadows
- Never use flat `shadow-md`.
- Use layered, tinted, low-opacity shadows (see §11.2).

### Typography
- Use different font families for headings and body.
- Headings: display or serif, tight tracking (`-0.03em`).
- Body: clean sans-serif, generous line-height (`1.7`).

### Gradients
- Use multiple radial gradients.
- Add texture via SVG noise filters.

### Animations
- Only animate `transform` and `opacity`.
- Never use `transition-all`.
- Prefer spring-style easing.

### Interactive States
Every interactive element must have all three states:
- Hover: subtle lift, slight tint.
- Focus-visible: 2px outline in brand color.
- Active: pressed state with reduced elevation.

### Images
- Add gradient overlay: `bg-gradient-to-t from-black/60`.
- Apply color treatment using `mix-blend-multiply`.

### Spacing
- Use spacing tokens from §11.1.
- Avoid arbitrary Tailwind increments.

### Depth
Maintain a three-tier layering system: `base` → `elevated` → `floating`.

## 9. Hard Rules

- Do not add sections or features not present in the reference.
- Do not improve a reference design — match it exactly.
- Do not stop after one screenshot pass.
- Do not use `transition-all`.
- Do not use Tailwind default blues or indigos as primary colors.

## 10. Code Review Standards

- Refactor any function exceeding 30 lines.
- Extract logic duplicated three or more times into a shared utility (e.g. `inc/` helpers).
- Escape every dynamic output and sanitize every input — no raw `$_GET`/`$_POST`/`$wpdb` interpolation.
- Group functions with more than three parameters into a single args array.
- Every network/file operation must include error handling.
- Follow [WordPress PHP Coding Standards](https://developer.wordpress.org/coding-standards/wordpress-coding-standards/php/).

## 11. Design Token Reference

### 11.1 Spacing Tokens

```css
--space-1: 4px;
--space-2: 8px;
--space-3: 12px;
--space-4: 16px;
--space-6: 24px;
--space-8: 32px;
```

### 11.2 Shadow Scale

```css
/* Base     — single-layer, subtle, low opacity */
/* Elevated — two-layer, tinted */
/* Floating — three-layer, wide spread, very low opacity */
```

### 11.3 Border-Radius Tokens

```css
--radius-sm: 4px;
--radius-md: 8px;
--radius-lg: 16px;
```

### 11.4 Color Tokens

Derived from a single brand hue. Define the full scale before use.

### 11.5 Typography Tokens

```css
--font-display:    /* display or serif family */;
--font-sans:       /* clean sans-serif family */;
--heading-tight:   -0.03em;
--body-leading:    1.7;
```

### 11.6 Typography Scale

```css
--text-xs:   12px;
--text-sm:   14px;
--text-base: 16px;
--text-lg:   18px;
--text-xl:   20px;
--text-2xl:  24px;
--text-3xl:  30px;
--text-4xl:  36px;
--text-5xl:  48px;
```
