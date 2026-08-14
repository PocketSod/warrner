# AGENTS.md — Warrner Legal WordPress Site

## START OF SESSION CHECKLIST

1. **Confirm Laragon is running** — this repo is source only; nothing renders until Laragon serves it.
2. **Check your branch:** `git branch` — this project uses a single `main` branch, no `dev`/`feature` split.
3. **Invoke the `frontend-design` skill** before writing any theme/template code.

---

## Editing Protocol

This is a **split repo**: `D:\Projects\Warrner\` is the git repo and source of truth. `D:\laragon\www\Warrner\` is the Laragon-served WordPress install — it is **not** version controlled and must never be edited directly.

**After every edit to a tracked file**, sync it into the Laragon install before checking it in a browser:

```powershell
Copy-Item "D:\Projects\Warrner\wp-content\themes\warrner\*" `
  "D:\laragon\www\Warrner\wp-content\themes\warrner\" -Recurse -Force
```

Adjust the path for whichever theme/plugin directory you touched (e.g. `wp-content\plugins\<plugin>`).

**Full workflow:**
```
1. Edit source under D:\Projects\Warrner\wp-content\...
2. Sync to Laragon (Copy-Item above)
3. node scripts/screenshot.mjs http://warrner.test
4. Compare → fix → repeat until correct
5. git add <files> && git commit -m "describe change"
6. git push origin main
7. npm run deploy   (pushes wp-content/themes/warrner to the demo.toolsandtable.com FTP site)
```

The two failure modes to avoid: editing the Laragon copy directly and forgetting to backport into git, or editing git and forgetting to sync into Laragon before checking it in browser.

### Deploying to the demo site

`demo.toolsandtable.com` is a separate, live WordPress install on Hostinger used to share progress remotely (superseded the old ngrok tunnel — see repo memory for history). `npm run deploy` uploads `wp-content/themes/warrner` over FTP via `scripts/deploy.mjs`; it overwrites changed files and adds new ones but never deletes files removed locally, so prune stale files on the remote manually if a file is ever renamed/removed.

Credentials live in `.env` (gitignored, real secrets — never commit) based on `.env.example`. This is a distinct WordPress database/content from local Laragon — deploying the theme does not sync posts, pages, or plugin config, only the theme code itself.

When the client gets their own Hostinger account, this same script works against it — just point `.env` at the new account's FTP credentials (or add a second target/env file) and re-run. **Before the first deploy to a new account, verify `FTP_REMOTE_ROOT` by listing the FTP login directory** (e.g. `client.list()` in a throwaway script) rather than assuming `public_html` — on `demo.toolsandtable.com` the FTP account's home directory already *is* the document root, so setting `FTP_REMOTE_ROOT=public_html` created a spurious nested `public_html/public_html/...` that never actually reached the live theme folder. Leave `FTP_REMOTE_ROOT` empty unless the listing shows `wp-admin`/`wp-content` sitting inside a `public_html` subfolder.

---

## Project Structure

```
D:\Projects\Warrner\                      ← git repo, source of truth
├── wp-content\
│   ├── themes\warrner\                   ← custom theme (only theme in active use)
│   └── plugins\                          ← custom plugins, if/when needed
├── scripts\screenshot.mjs                ← screenshot tooling (Puppeteer)
├── scripts\deploy.mjs                    ← FTP deploy to demo.toolsandtable.com (npm run deploy)
├── .env                                  ← FTP credentials, gitignored — copy from .env.example
├── public\images\                        ← brand asset source (logos, photos) — not synced automatically, pull into the theme as needed
├── wp-config-sample.php                  ← reference only, not the real config
└── AGENTS.md / CLAUDE.md / README.md

D:\laragon\www\Warrner\                   ← Laragon-served WP install, NOT the git repo
├── wp-admin\, wp-includes\, wp-*.php     ← WordPress core (not versioned)
├── wp-config.php                         ← real local config (DB `warrner`, not versioned)
└── wp-content\                           ← synced from the repo, plus core-managed uploads/cache
```

---

## 1. Mandatory First Step

Invoke the `frontend-design` skill before writing any theme/template code. This applies at the start of every session.

## Core Operating Principles

- Don't assume. Don't hide confusion. Surface tradeoffs.
- Minimum code that solves the problem. Nothing speculative.
- Touch only what you must. Clean up only your own mess.
- Define success criteria. Loop until verified.
- Remove all AI artifacts before calling work done: scratch/debug/test files generated while building (test composites, throwaway scripts, one-off diagnostic output), and design/content tells that read as AI-generated (generic AI-default palettes/layouts, placeholder-sounding copy not clearly flagged as such). Deliberately flagged placeholders (e.g. `<!-- PLACEHOLDER -->`) are the exception — they exist specifically so fake content doesn't get mistaken for real.

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
- Document root: `D:\laragon\www\Warrner` — a separate, non-versioned install. This repo (`D:\Projects\Warrner`) is source only; see Editing Protocol above for the sync step required before anything you edit here shows up there.

## 5. Screenshot Workflow

Chrome cache: `C:/Users/wildr/.cache/puppeteer/`

```bash
node scripts/screenshot.mjs http://warrner.test <label>   # label optional
```

Output: `./temporary screenshots/screenshot-N.png`

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

Signature concept: Indiana limestone (the state's literal export — Empire State Building, the Pentagon) as the material metaphor for "solid ground to build a life on." One warm brass accent, used deliberately, not scattered.

```css
--color-ink:        #1B2531;  /* primary text, dark section bg */
--color-ink-70:      rgba(27, 37, 49, 0.7);
--color-limestone:  #E7E2D3;  /* light section bg */
--color-stone:      #C9C2AC;  /* borders, dividers, card edges on light bg */
--color-brass:      #B08D4F;  /* sole accent — CTAs, signature ring motif, highlights */
--color-brass-dark: #8C6E3A;  /* brass hover/active state */
--color-sage:       #6B7A5E;  /* sparing use only — success states, growth/roots motifs */
--color-paper:      #FAF8F3;  /* card surfaces on limestone bg, near-white */
```

### 11.5 Typography Tokens

Display face reads as carved/inscriptional (slab, not thin high-contrast serif) — echoes limestone civic lettering. Body face is Public Sans, the USWDS government-services typeface — a deliberate nod to navigating a federal process. Caption face is a mono, echoing immigration form numbers (I-130, N-400).

```css
--font-display:    'Bitter', Georgia, serif;
--font-sans:       'Public Sans', -apple-system, sans-serif;
--font-mono:       'IBM Plex Mono', ui-monospace, monospace;
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
