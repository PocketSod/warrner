# Changelog

One place to see what changed, when, and why — so nobody (Erin, a future
developer, or a future Claude session) has to reconstruct context from git
blame or scattered chat history.

**How to use this file:** append a dated entry whenever something changes
that isn't obvious from reading the code — especially a decision that has a
*reason* behind it (a plugin swapped for another, a workaround for a bug, a
client preference that overrides the "obvious" choice). Routine
typo/formatting fixes don't need an entry. Newest entries go on top.

---

## Open items (as of 2026-09-18)

- **Production hosting not purchased yet.** `demo.toolsandtable.com` is a
  temporary review site on a *different* Hostinger account and will not
  become production — see "Production go-live plan" below.
- **GoDaddy DNS access for `erinwlegal.com` obtained.** Still waiting on the
  client's own Hostinger account purchase before pointing the domain
  anywhere. When that happens: only change the website's A/CNAME records —
  MX/SPF/autodiscover must stay untouched, they serve Erin's live M365
  inbox (`erin@erinwlegal.com`).
- **Coming-soon gate built but disabled everywhere.**
  `wp-content/mu-plugins/warrner-coming-soon.php` shows a branded
  "coming soon" notice (name/phone/email/address) to logged-out visitors,
  but only when `WARRNER_COMING_SOON` is defined `true` in that install's
  `wp-config.php` — off by default so it never appears on Laragon or the
  demo site. Turn it on on the fresh production install once purchased,
  turn it back off when real content is ready to go live.
- AI-assisted lead scoring (`inc/ai-lead-intake.php`) is stubbed, not wired
  in. Needs a reviewed pass on API key storage/consent before it touches
  real client PII.
- Spanish translation (`languages/es_ES.mo`) is a first draft — needs a
  fluent/legal reviewer's pass before relying on it.
- Privacy Policy / Terms of Use (added 2026-09-18) are a solid first draft,
  not yet attorney-reviewed.
- "Attorney Advertising" footer link still points to `#` — no page exists
  yet.
- Homepage bio/credentials still contain bracketed `[PLACEHOLDER]` copy
  (years practicing, clients served, law school, AILA membership) — needs
  real numbers/facts from Erin before launch.

---

## Log

### 2026-09-18 — Coming-soon gate added, email contact constant added
- New `wp-content/mu-plugins/warrner-coming-soon.php` +
  `wp-content/mu-plugins/warrner-coming-soon/coming-soon.css`: a
  `template_redirect` gate that shows a branded coming-soon notice (name,
  phone, email, address, pulled from the theme's existing contact-info
  constants) to logged-out front-end visitors, with a 503 + `Retry-After`
  header so search engines don't index it as the real site. Logged-in
  admins (`manage_options`) always pass through to the real site.
- Deliberately off everywhere by default — only activates when
  `WARRNER_COMING_SOON` is defined `true` in an install's own
  `wp-config.php` (documented in `wp-config-sample.php`), which is
  per-environment and not version-controlled. This is meant for the fresh
  production Hostinger install once purchased, not Laragon or the demo
  review site.
- Why now: client obtained GoDaddy DNS access for the production domain
  (`erinwlegal.com`) but hasn't purchased the production Hostinger account
  yet, so there's nothing to point DNS at. Building the gate now means it's
  ready to flip on the moment that install exists, before real content is
  entered.
- Added `WARRNER_EMAIL` (`erin@erinwlegal.com`) to the theme's centralized
  contact-info block in `functions.php` (alongside the existing
  phone/address constants) plus `warrner_email()` /
  `warrner_email_href()` helpers — no page used a public email before this.
- Deploy note: `npm run deploy:mu-plugins` already uploads the whole
  `mu-plugins` directory recursively, so the new CSS subfolder ships with
  no changes needed to `scripts/deploy.mjs`.

### 2026-09-18 — Privacy Policy & Terms of Use pages added
- New `page-legal.php` template plus typography rules in `main.css` for
  long-form legal content. Actual policy text was published as WordPress
  **pages** (`/privacy-policy/`, `/terms-of-use/`) on both local Laragon and
  demo.toolsandtable.com — that content lives in each site's own database,
  not in this repo, so it has to be (re)created on any new environment
  (e.g. the eventual production Hostinger install).
- Homepage footer links wired to the real pages, replacing `href="#"`
  placeholders.
- Why now: client wants the pages live from day one; Erin will review and
  amend rather than starting from nothing.
- **Bug found and fixed in passing:** local Laragon's `permalink_structure`
  option had been corrupted to `/C:/Program Files/Git/%postname%/` — a Git
  Bash path-mangling artifact from an earlier session passing
  `/%postname%/` as a shell argument (Git Bash rewrites leading-`/`
  arguments into Windows paths). This 404'd every non-homepage URL on
  Laragon. Reset to `/%postname%/` and flushed rewrite rules. If pretty
  permalinks ever break again locally, check this option first — and run
  any `wp option update` whose value starts with `/` from PowerShell, not
  Git Bash.
- Committed alongside this: the i18n string-wrapping and Polylang
  language-switcher work from 2026-09-16 below, which had been sitting
  uncommitted since that session.

### 2026-09-16 — i18n plugin decision: Polylang (superseded TranslatePress)
- All visible theme strings wrapped in `__()`/`_e()`/`esc_html_e()` under
  the `warrner` text domain (front-page.php, functions.php's practice-area
  data, inc/seo.php, inc/ai-lead-intake.php's form messages).
- The original plan (`docs/Production-Launch-and-Multilingual-Plan.docx` —
  kept local-only, not committed, client's explicit call) was
  **TranslatePress**. Superseded the same day: client wants per-language
  SEO URLs and more than one additional language eventually.
  Polylang/WPML give indexable per-language URLs and aren't capped at one
  extra language the way TranslatePress's free tier is.
- Polylang 3.8.9 set up on local Laragon only (English default + Spanish
  under `/es/`) — **not installed on demo or production yet**, that's a
  separate deploy step whenever multilingual goes live there too.
- First Spanish translation (`es_ES.mo`, 142 strings) drafted — flagged for
  a reviewer pass, see Open Items.

### 2026-09-16 — Consolidated on Option A homepage
- Five homepage design variants (A–E) were built and reviewed with the
  client; **Option A was selected**. The other four moved to
  `wp-content/themes/warrner/homepage-options-archive/` (kept for
  reference, not enqueued or rendered).
- SEO meta tags (`inc/seo.php`) and invoicing tooling
  (`scripts/generate-invoice.mjs`) added the same day.

### 2026-09-15 — Demo site + cache purge automation
- `demo.toolsandtable.com` (a separate Hostinger account) set up as the
  ongoing review/staging site, superseding an earlier ngrok tunnel — gives
  the client a stable link to check progress remotely without exposing the
  local machine.
- `scripts/deploy.mjs` (FTP) and `scripts/purge-cache.mjs` (REST API + the
  `warrner-cache-purge` mu-plugin) added, since LiteSpeed Cache on the demo
  site hides every deploy behind stale HTML/assets until purged.
- Client address/phone centralized as constants in `functions.php`
  (`WARRNER_ADDRESS_*`, `WARRNER_PHONE_*`) — every template reads from
  these instead of hardcoding, so they can't drift out of sync across
  pages.

### 2026-08-13 — Migrated from Next.js/Vercel to WordPress
- The original prototype (2026-08-12) was a Next.js app on Vercel. Rebuilt
  as a WordPress theme on local Laragon starting this date — the client's
  hosting/CMS preference.
- Split-repo workflow established: `D:\Projects\Warrner` (this git repo,
  source of truth) vs `D:\laragon\www\Warrner` (the Laragon-served
  install, not version-controlled) — see AGENTS.md "Editing Protocol" for
  the sync step this requires after every edit.

---

## Production go-live plan (not yet executed)

Full step-by-step Hostinger/DNS cutover and multilingual plan lives in
`docs/Production-Launch-and-Multilingual-Plan.docx` (kept local-only, not
committed to git — client's explicit call, so re-read it directly rather
than assuming this summary is complete). In short:

- Production domain is **erinwlegal.com**, DNS managed at GoDaddy. Erin's
  live email is M365 (`erin@erinwlegal.com`) — any DNS work must preserve
  MX/SPF/autodiscover records untouched; only the website's A/CNAME
  records should change.
- The client's own Hostinger account has **not been purchased yet** — it
  is separate from the ToolsandTable account `demo.toolsandtable.com`
  lives on, which stays as an ongoing review/staging site and does not
  become production.
- There is no real content in any WordPress database yet — practice areas
  are hardcoded placeholder data in `functions.php`, the Attorney CPT is
  empty. Launch is a **fresh WP install with content entered directly on
  production**, not a migration from Laragon or demo.
- Before the first deploy to a new Hostinger account, verify
  `FTP_REMOTE_ROOT` by listing the FTP login directory rather than
  assuming `public_html` (see AGENTS.md "Deploying to the demo site" for
  why this bit demo.toolsandtable.com).
