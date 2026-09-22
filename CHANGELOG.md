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

## Open items (as of 2026-09-22)

- **DNS cutover done 2026-09-19: erinwlegal.com now points at Hostinger.**
  Only the root `A` record was changed (from "Parked" to `194.164.64.201`).
  `www` is a CNAME to the root and follows it. MX, SPF, DKIM, autodiscover
  and the other Microsoft 365 records were left untouched and verified
  afterwards against GoDaddy's nameserver. Nameservers stay at GoDaddy
  (`ns33`/`ns34.domaincontrol.com`). Do NOT switch to Hostinger nameservers,
  it would drop the mail records. HTTPS is live (Let's Encrypt, issued by
  Hostinger within minutes of the DNS change); http and www both 301 to
  https://erinwlegal.com. Still to confirm: a real send/receive test on
  erin@erinwlegal.com. WordPress's `siteurl` option still reads `http://`
  while `home` is `https://` (no mixed-content links found); set both to
  https in Settings > General when convenient.
- **Coming-soon gate is ON on production (erinwlegal.com)** (since
  2026-09-19). `WARRNER_COMING_SOON` is defined true in that install's
  `wp-config.php` (the one line, marked with a comment). Remove that line
  when real content is ready to go live. It was added over FTP; a pre-edit
  copy of the file is not kept in the repo.
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

### 2026-09-22: DKIM signing enabled on Microsoft 365
- Erin was getting screened as spam on outbound mail. Investigated: the
  DKIM CNAME records (`selector1`/`selector2._domainkey`) were already
  correctly present in GoDaddy's DNS, added during the original 2026-09-19
  cutover and verified still resolving correctly — this was never a
  DNS/hosting gap. The missing piece was purely on the Microsoft 365 side:
  DKIM signing has to be manually toggled on per-domain in the Microsoft
  365 admin portal (Security → Email & collaboration → Policies & rules →
  Threat policies → DKIM) even once the DNS records exist. Not something
  we can do ourselves — needs Erin's (or her M365 admin's) own login.
  Relayed instructions to her; she's since enabled it.
- **Not independently verified yet** — no access to her inbox or M365
  admin to confirm signing is actually active, only that she was able to
  turn the toggle on (which itself confirms the DNS records were detected
  correctly). Real confirmation needs either a mail-tester.com test send,
  or checking a sent message's headers for a `DKIM-Signature: d=
  erinwlegal.com` line. Follow up once available.
- Also surfaced: no DMARC record (`_dmarc` TXT) currently exists on
  `erinwlegal.com`. Not added — DKIM alone often resolves spam-screening;
  only add DMARC if the problem persists after this.
- Separate, still-open ask to the same tenant: SMTP AUTH needs enabling
  for `erin@erinwlegal.com` specifically, for the intake form's SMTP
  connector (see the entry below) — different toggle, different feature,
  don't conflate the two when following up with her.

### 2026-09-22: SMTP connector built; production admin_email bug fixed
- **Found and fixed a real bug:** production's `admin_email` (what
  `warrner_send_intake_notification()` in `inc/ai-lead-intake.php` sends
  to) was `wildridge@pocketsod.com`, not `erin@erinwlegal.com` — leftover
  from the account used to set up the install. Any real intake submission
  would have emailed the developer, not Erin. Fixed via
  `PATCH /wp-json/wp/v2/settings`. Dev's `admin_email` was left as
  `wildridge@pocketsod.com` on purpose, so test submissions there don't
  land in Erin's inbox.
- **New `wp-content/mu-plugins/warrner-smtp.php`**: routes `wp_mail()`
  through SMTP via the `phpmailer_init` hook, per the go-live plan's
  recommendation (no third-party plugin, matching every other mu-plugin
  in this repo). Off by default everywhere — only activates when
  `WARRNER_SMTP_HOST` is defined in that install's own `wp-config.php`
  (documented in `wp-config-sample.php`, alongside the other per-install
  constants: port, secure mode, username, password, From address/name).
  Also forces the PHPMailer From address to match the authenticated
  mailbox, since Microsoft 365 (and most providers) reject or flag mail
  where they don't match, and logs `wp_mail` failures via `error_log`,
  but only when SMTP is actually configured.
- Deployed to all three sites (demo, dev, prod) — inert everywhere until
  the constants are set. Confirmed all three still respond with their
  existing status codes (410 demo, 200 dev, 503 prod), unaffected.
- **Not done: the actual credential.** This needs something from Erin's
  M365 side that isn't in our control: SMTP AUTH has to be explicitly
  enabled for the sending mailbox (`erin@erinwlegal.com`, recommended,
  since mail already lives there) in the Exchange admin center — it's
  off by default on most modern tenants, the same category of manual
  step as the DKIM toggle from earlier today. Then a password (an app
  password, or the mailbox password depending on that tenant's MFA/auth
  policy) goes into production's `wp-config.php` as
  `WARRNER_SMTP_PASSWORD`, never into this repo. Given this tenant
  already needed a manual DKIM enable, it may also have Conditional
  Access policies that block classic SMTP AUTH entirely regardless of an
  app password — if so, the fallback is an OAuth2/Graph API send instead
  of SMTP, which is a bigger follow-up, not attempted here.
- Test plan once the credential exists: submit the intake form on
  production, confirm the email lands in Erin's actual inbox (not spam),
  check `wp-content/debug.log` or the server error log if it doesn't.

### 2026-09-22: Permalinks verified; demo.toolsandtable.com retired
- **Permalinks confirmed already correct on Dev and Prod, no fix needed.**
  `/wp-json/` returns 200 on both (only possible with pretty-permalink
  rewrite rules in place), and `dev.erinwlegal.com/hello-world/` (the
  default sample post) resolves directly with a 200. Couldn't test a real
  content URL on Prod the same way, since the coming-soon gate intercepts
  everything except REST requests — the `/wp-json/` result is the
  available evidence there.
- **`demo.toolsandtable.com` retired.** New
  `wp-content/mu-plugins/warrner-demo-retired.php` +
  `warrner-demo-retired/retired.css`: same `template_redirect`-gate
  mechanism as the coming-soon plugin (admin/REST/cron/CLI bypass,
  `WARRNER_DEMO_RETIRED` define required in that install's own
  `wp-config.php`, off everywhere else by default), but deliberately
  **not** Warrner-branded — neutral copy and palette, links to
  pocketsod.com, since this domain/account is being kept as a
  general-purpose demo asset for other projects, not something
  Warrner-specific. Returns `410 Gone` (genuinely retired) rather than the
  coming-soon page's `503`/`Retry-After` (temporarily unavailable).
- Deployed the mu-plugin to all three sites (inert on Dev/Prod without the
  wp-config define) for consistency, then added the define to demo's
  `wp-config.php` over FTP (backup kept locally first, same pattern as the
  coming-soon rollout). Verified: `https://demo.toolsandtable.com/`
  returns 410 with the correct copy, `wp-login.php` still reachable,
  Dev/Prod unaffected.
- `demo.toolsandtable.com`'s own FTP/WP credentials (`.env`, the
  unsuffixed and `:demo`-suffixed npm scripts) are unchanged and still
  point at it — needed to deploy and purge this retirement notice, and
  will be needed again whenever that account is reused for a different
  project (remove the wp-config define at that point).

### 2026-09-22: dev.erinwlegal.com fully verified end to end
- DNS resolved after the account holder added the `A` record on GoDaddy;
  HTTPS auto-issued the same way Prod's did (Let's Encrypt, expires
  ~2026-12-21), HTTP→HTTPS redirect confirmed working.
- **Found and fixed a fresh-install gotcha:** the theme activation call
  from the earlier entry below reported success, but
  `hostinger-easy-onboarding` (present by default on this fresh install,
  already removed from Prod) silently reactivated Hostinger's own AI
  theme afterward. The homepage was serving WordPress's unstyled default
  sample post until this was caught by actually screenshotting the live
  site rather than trusting the API's "Request accepted" response.
  Removed `hostinger-easy-onboarding` and `hostinger-reach` (matching
  Prod's cleanup), re-activated `warrner`, confirmed via a second
  screenshot that it now renders correctly and holds. Lesson for next
  time: verify the rendered page after any Hostinger API action, not just
  the API's own response.
- Dev has **no LiteSpeed Cache plugin** (unlike Prod/demo) — confirmed
  intentional-by-absence, not a bug; `purge-cache:dev` correctly no-ops
  ("LiteSpeed Cache is not active on this site") rather than erroring.
- The WP admin password generated at install time (via the API) didn't
  work at `wp-login.php` — cause not resolved. Worked around with a
  Hostinger auto-login link (`POST .../wordpress/{software}/login/links`)
  instead of debugging it, since that got the developer in immediately.
  Once in: set a real password by hand, created a fresh Application
  Password, added it to `.env.dev`, and confirmed it works with a real
  `purge-cache:dev` call.
- **`WP_API_USER` for Dev is `wildridge`, not the email** —
  `wildridge@pocketsod.com` was requested as the login at install time,
  but WordPress strips non-alphanumeric characters from usernames, so it
  became `wildridge`. Unlike Prod (where the real username happens to
  equal the email), these aren't interchangeable on this install. First
  attempt to fill in `.env.dev` used the email and had to be corrected.
- `dev.erinwlegal.com` is now considered fully set up: theme deployed and
  active, mu-plugins deployed, FTP and REST API both verified. Not yet
  done: permalinks haven't been checked on Dev or Prod (flagged as an
  open item), and Dev's plugin/theme state hasn't been synced into
  `functions.php`-level checks the way Prod's was.

### 2026-09-22: dev.erinwlegal.com created — site, WordPress, theme all live
- Created via the Hostinger API (`HOSTINGER_API_TOKEN`, same one used for
  the plugin cleanup): `POST /api/hosting/v1/websites` (new website on
  production's existing order), then
  `POST .../wordpress/installations` to install WordPress on it. Both
  calls are async; polled the corresponding list endpoints until each
  completed. See SCRIPTS.md for the exact request shapes.
- **WordPress strips non-alphanumeric characters from the admin login** —
  requested `wildridge@pocketsod.com`, got back `wildridge`. Worth knowing
  before assuming a login value stuck.
- **Discovered the account's FTP login is account-wide, not per-site.**
  The same FTP credentials already in `.env.production`
  (`u483557243`) could immediately list `dev.erinwlegal.com`'s folder with
  no new FTP account needed — confirmed by listing both sites' directories
  with the same login before deploying anything. This means dev's FTP
  works *before* DNS exists, since FTP routes by folder, not hostname.
- Deployed the theme and mu-plugins via `npm run deploy:dev` /
  `deploy:mu-plugins:dev`, then activated the Warrner theme via the
  Hostinger API (`POST .../themes/activate`) since it deploys inactive by
  default (production's stock themes are still there too, inactive,
  matching Prod's pre-cleanup state — not removed yet).
- **`:dev` npm scripts and `loadTargetEnv` redefined** to point at the new
  `.env.dev`/`dev.erinwlegal.com`, not `demo.toolsandtable.com`. The old
  demo-targeting scripts are still there under explicit `:demo` names
  (`deploy:demo`, `deploy:mu-plugins:demo`, `purge-cache:demo`) plus the
  original unsuffixed names, unchanged, so nothing broke for whoever reuses
  that account for a different project.
- **Not yet done:** the GoDaddy DNS `A` record (host `dev` →
  `194.164.64.201`, same server as Prod) — the account holder is adding
  this directly, not via API. Until that resolves: the site isn't publicly
  reachable, HTTPS hasn't been issued, and the WP Application Password for
  `.env.dev` can't be created (needs wp-admin access). A generated WP admin
  login/password was given directly to the developer, not stored in this
  repo or its history.
- Corrected an earlier mistake in SCRIPTS.md: SSL/HTTPS management *is*
  available via this API (found while researching this work), an earlier
  note said it wasn't, based on an incomplete remote-doc summary rather
  than the actual OpenAPI spec. See SCRIPTS.md's correction note for what
  went wrong and how it was caught.

### 2026-09-22: Hostinger account ownership resolved; Dev environment moving to dev.erinwlegal.com
- **Account mix-up (opened 2026-09-19) resolved.** `wildridge@pocketsod.com`
  is confirmed as the developer's admin login for the Hostinger account
  hosting `erinwlegal.com`, managed on Erin's behalf. (Original incident:
  purchasing the production subscription on 2026-09-19 had overwritten the
  purchaser's own Hostinger profile with Erin's details instead of keeping
  them separate; corrected with Hostinger support before this resolution.)
- **Dev environment is moving from `demo.toolsandtable.com` to
  `dev.erinwlegal.com`**, a new site under the same Hostinger account as
  production, replacing the old cross-account Dev setup. Reason: keeps
  Dev and Prod under one account/login instead of two, and frees
  `demo.toolsandtable.com` for its original purpose — the client wants to
  keep that domain/account as a general-purpose demo site for *other*
  PocketSod projects, not tied to Warrner specifically.
- `demo.toolsandtable.com`'s current Warrner WordPress install is being
  retired: a maintenance/retired notice rather than deletion, since fully
  decommissioning it needs hPanel access to that account, and a live URL
  people may have bookmarked shouldn't just go blank. The domain/account
  itself is NOT being torn down.
- `INFRASTRUCTURE.md` and `PROJECT-STATUS.md` updated to match (new §1a in
  INFRASTRUCTURE.md explains the demo retirement specifically). Not yet
  done as of this entry: creating `dev.erinwlegal.com` in hPanel, wiring up
  `.env.dev`, deploying the theme/mu-plugins there, adding its DNS record
  (GoDaddy — the account holder is making this change directly, not via
  API), and actually deploying the retirement notice to demo.

### 2026-09-22: Added infrastructure, disaster-recovery, scripts, and status docs
- Four new root-level reference docs, distinct from this file on purpose:
  `INFRASTRUCTURE.md` (current layout of environments/accounts/domains/
  credentials), `DISASTER-RECOVERY.md` (backup coverage + step-by-step
  recovery per failure scenario, including honest gaps like the unchecked
  demo backup coverage and the single-file DNS zone export), `SCRIPTS.md`
  (every script: purpose, usage, what it touches, including the ad hoc
  FTP-listing/wp-config/TLS-check scripts used during the production setup
  that were never committed to the repo), and `PROJECT-STATUS.md` (a
  snapshot, not a log — current phase, launch blockers, key decisions as
  pointers back to this file).
- These are **snapshots that reference this file**, not a second
  changelog — CHANGELOG.md stays the one place decisions and their
  reasoning get recorded. Keep the new docs' tables in sync as things
  change, but put new *why* in CHANGELOG.md as always.
- No secrets in any of them — credentials are referenced by which
  gitignored `.env*` file holds them, never included directly.
- Two open questions surfaced while writing these that weren't written
  down anywhere before: who holds the GoDaddy login, and who holds the
  Dev-Hostinger ("ToolsandTable" account) login. Neither is documented in
  this repo yet.

### 2026-09-22: Backups confirmed, deploy scripts labeled Local > Dev > Prod, settings file fixed
- **Backups confirmed working, no setup needed.** hPanel > erinwlegal.com >
  Files > Backups shows automated **weekly** backups already running on the
  Premium plan (latest 2026-09-20, next scheduled 2026-09-27). Manual
  on-demand backup creation is locked (Business tier+); Daily backups is a
  paid add-on ($2.09/mo) not purchased. No action taken, this is the plan's
  default behavior working as intended.
- **Deploy pipeline is Local (Laragon) > Dev (demo.toolsandtable.com) > Prod
  (erinwlegal.com).** Added `:dev`-suffixed aliases in `package.json`
  (`deploy:dev`, `deploy:mu-plugins:dev`, `purge-cache:dev`) that point at
  the same demo commands as the existing unsuffixed `deploy` /
  `deploy:mu-plugins` / `purge-cache`, so both names work — the unsuffixed
  ones stay since AGENTS.md and habit already reference them. Nothing about
  the actual deploy targets changed, this only makes the three-stage
  pipeline explicit in the script names. The workflow itself (edit source >
  sync to Laragon > verify locally > demo > prod) was already what
  AGENTS.md's Editing Protocol describes.
- **Fixed `.claude/settings.local.json`** (gitignored, machine-local):
  it had a missing comma and was failing to parse, meaning none of its
  permission rules were in effect. While fixing it, also narrowed it —
  removed a blanket `Bash(node -e ' *)` rule that auto-allowed *any* inline
  node script without a permission prompt (added at some point outside this
  session, origin unclear), and an unused `Bash(vercel ls *)` entry (no
  Vercel involvement in this project). Kept the narrow
  `Bash(node wpconfig.mjs apply)` rule and the `git add`/`commit`/`push`
  rules. A Bash permission rule only controls whether a command is allowed
  to run without a system prompt — it doesn't substitute for checking with
  the user before anything production-impacting, per AGENTS.md's Approval
  Gates.

### 2026-09-22: Hostinger API token wired up; unused plugins removed from production
- Created a Hostinger account-level API token (hPanel > API), one-month
  expiration, stored as `HOSTINGER_API_TOKEN` in `.env.production` only, not
  committed. It's a full-account bearer token (billing/domains/VPS visible,
  not scoped to just this site) since the token-creation screen has no
  per-scope picker; the checkbox scope picker seen earlier is for the MCP
  connector config, not this token. Used read-only first to confirm scope
  before any write call.
- Re-verified HTTPS directly against the live site (not via API, Hostinger's
  SSL management isn't exposed on this plan's public API, only under an
  `agency-hosting` product tier): valid Let's Encrypt cert for erinwlegal.com,
  http and www both redirect to https.
- Confirmed via the API that backups have no public API endpoint on any
  plan, hPanel-only (Dashboard > Backups). Not yet checked by a human.
- Removed 3 of 5 pre-installed WordPress plugins via the API
  (`POST .../wordpress/{id}/plugins/uninstall`): `hostinger-easy-onboarding`,
  `hostinger-reach` (email marketing upsell), `wordpress-importer` (unused,
  was inactive). Kept `hostinger` (Hostinger Tools, likely backs hPanel's
  one-click WP Admin login/security scanning, not confirmed) and
  `litespeed-cache` (required by `warrner-cache-purge.php`). Confirmed via a
  follow-up list call and a homepage/wp-login check that the site still
  works.
- The plugin-uninstall API call was blocked once by Claude Code's auto-mode
  classifier (same as the `wp-config.php` edit on 2026-09-19); needed a
  Bash permission rule before it would run.

### 2026-09-19: Production Hostinger site created, first deploy to temp domain
- Later the same day: erinwlegal.com was attached to the Hostinger site and
  the DNS `A` record was pointed at it (see Open items). Attaching the domain
  renamed the FTP folder to `domains/erinwlegal.com/public_html` and the temp
  `*.hostingersite.com` address stopped serving the site (403/404), so
  `FTP_REMOTE_ROOT` and `WP_API_BASE_URL` in `.env.production` now use the
  real domain. The site is only reachable through erinwlegal.com from here.
- New Hostinger site (Premium plan, WordPress) set up on the temporary domain
  `lavenderblush-koala-486471.hostingersite.com`. erinwlegal.com is NOT
  attached yet; DNS at GoDaddy is untouched.
- Deploy scripts now take `--prod` to read `.env.production` instead of
  `.env` (demo). New npm scripts: `deploy:prod`, `deploy:mu-plugins:prod`,
  `purge-cache:prod`. Plain `npm run deploy` still targets demo. `.gitignore`
  now covers `.env.*` (previously only the exact name `.env`), with
  `.env.example` excepted.
- **FTP root is not `public_html`.** The FTP login lands in the account home.
  The document root is
  `domains/<site-domain>/public_html`, so `FTP_REMOTE_ROOT` in
  `.env.production` is that full path. The folder name contains the site's
  domain, so re-list the FTP login and update `FTP_REMOTE_ROOT` after
  erinwlegal.com is attached, before the final deploy.
- Theme and `warrner-cache-purge.php` deployed; `purge-cache:prod` confirmed
  the Application Password and LiteSpeed purge endpoint work. Homepage
  renders with the Warrner theme.
- Coming-soon gate enabled on this install by adding the define to the
  production `wp-config.php`. Verified logged out: 503, Retry-After,
  noindex, wp-login.php still reachable.
- Hostinger's installer pre-installed plugins (`hostinger`,
  `hostinger-reach`, `hostinger-easy-onboarding`, `wordpress-importer`) and
  two Hostinger mu-plugins. Not reviewed or removed yet.
- Not yet done on production: Privacy Policy and Terms of Use pages (they
  live in each site's database, see 2026-09-18), Polylang, SMTP for the
  intake form, placeholder copy replacement.
- Git Bash rewrites a leading `/` in arguments into a Windows path, which
  broke an FTP directory listing here the same way it broke the permalink
  option on 2026-09-18. Pass remote paths without a leading slash.

### 2026-09-18: Coming-soon gate added, email contact constant added
- New `wp-content/mu-plugins/warrner-coming-soon.php` and
  `wp-content/mu-plugins/warrner-coming-soon/coming-soon.css`: a
  `template_redirect` gate that shows a branded coming-soon notice (name,
  phone, email, address, from the theme's contact-info constants) to
  logged-out front-end visitors, with a 503 and `Retry-After` header plus
  `noindex` so search engines don't treat it as the real site. Logged-in
  admins (`manage_options`) always pass through.
- Off everywhere by default. It only activates when `WARRNER_COMING_SOON` is
  defined `true` in an install's own `wp-config.php` (documented in
  `wp-config-sample.php`), so it never shows on Laragon or demo.
- Added `WARRNER_EMAIL` (`erin@erinwlegal.com`) to the theme's contact-info
  block in `functions.php`, with `warrner_email()` and `warrner_email_href()`
  helpers. No page used a public email before this.
- 2026-09-19 follow-up: added the "Website by PocketSod" credit (standing
  site-wide rule) to the coming-soon page, and removed em dashes from its
  copy.
- `npm run deploy:mu-plugins` uploads the mu-plugins directory recursively,
  so the CSS subfolder ships with no change to `scripts/deploy.mjs`.

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
- The production Hostinger subscription was purchased 2026-09-19 (see the
  entry in the Log and the open item above about which account owns it).
  It is separate from the ToolsandTable account `demo.toolsandtable.com`
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
