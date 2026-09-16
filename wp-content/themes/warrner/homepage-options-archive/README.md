# Homepage options archive

The homepage used to run five parallel design options (A–E) behind a
floating review toggle. The client picked **Option A**, which is now the
live `front-page.php`. This folder preserves the other four so any
component (a section, a card style, a form layout) can be pulled back out
later — nothing here is loaded by the live site.

Each `option-*/` folder holds what was removed for that option:

| Folder | Was displayed as | Panel id | Contents |
|---|---|---|---|
| `option-b/` | Option B | `#variant-a` | `panel.php` (markup), `styles.css` (its CSS, pulled out of `main.css`) |
| `option-c/` | Option C | `#variant-b` | `panel.php`, `styles.css` (was `assets/css/variant-b.css`), `script.js` (horizontal scroll-row handler) |
| `option-d/` | Option D | `#variant-c` | `panel.php`, `styles.css` (was `assets/css/variant-c.css`), `script.js` (testimonial carousel handler) |
| `option-e/` | Option E | `#variant-d-orig` | `panel.php`, `styles.css` (pulled out of `assets/css/variant-d.css`, which the live Option A still uses under `#variant-d`) |

The letter shown in the toggle button was deliberately decoupled from the
panel's internal id/CSS-scope during the review — see the table above, and
`front-page.php`'s own docblock, for the mapping. Don't assume "Option C"
means `variant-c` anywhere in this codebase; it doesn't.

## Reviving a component

Each `panel.php` is the exact HTML block that used to sit inside
`front-page.php`, complete with the `<div id="variant-*">` wrapper its CSS
was scoped to. To reuse a piece:

1. Copy the specific section you want out of the relevant `panel.php` (e.g.
   just the "Attorney bio" `<section>`), not the whole file.
2. Bring along the matching CSS rules from that option's `styles.css`,
   scoped under the same `#variant-*` selector (or re-scope them to
   wherever you're pasting them).
3. Check `script.js` in that folder (option-c and option-d only) for any
   JS the section needs — `option-b/` and `option-e/` didn't have
   option-specific JS; they use the same intake-form/nav-toggle/accordion
   handlers still live in `assets/js/main.js`.

## Gotchas if reviving a whole option as a homepage again

- **Option B** (`option-b/styles.css`) is a special case: it used to live
  directly in `main.css` (the shared base stylesheet), unscoped — no
  `#variant-a` wrapper on its selectors (`.btn`, `.hero`, `.eyebrow`,
  `.lede`, `.section--dark`, `.section--paper`, etc.). The truly shared
  parts of `main.css` (tokens, reset, `.wrap`, `.section`,
  `.section--light`, `.h1`/`.h2`/`.h3`) are still live and still used by
  `single-attorney.php` and `page-practice-area.php` — don't remove those.
  If you bring Option B's markup back, its CSS will collide with anything
  else using bare `.btn`/`.hero`/etc. unless you scope it first.
- **Option C** (`option-c/`) needs its Google Fonts family back: the live
  font enqueue in `functions.php` (`warrner-fonts-b`) was trimmed to drop
  Open Sans once Option C was archived, since nothing else used it. Option
  C's fonts were `Libre Baskerville`, `Montserrat`, and `Open Sans` — see
  `styles.css`'s `--vb-font-*` custom properties.
- **Option D** (`option-d/`) needs `warrner-variant-c` re-enqueued
  (`wp_enqueue_style` for `variant-c.css` was removed from
  `warrner_enqueue_assets()` in `functions.php`).
- **Option E** (`option-e/`) shares Option A's Google Fonts
  (`warrner-fonts-b`, still live) and its component system (numbered
  steps, tag cloud, FAQ accordion, dated timeline) — same markup shape as
  Option A, different palette/hero. Its accordion JS is still live in
  `main.js` (Option A depends on the same handler), so you don't need to
  restore anything there.

## What wasn't archived

The floating `.variant-toggle` review UI (markup, CSS, and the
`main.js` panel-switching logic) was deleted outright rather than
archived — it was explicitly a throwaway review tool (see its own removed
code comments), not a design component worth reusing.
