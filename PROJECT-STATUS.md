# Project Status

A snapshot, not a log — **current** state, at a glance. For the dated
history of *why* things are the way they are, see
[CHANGELOG.md](CHANGELOG.md); that file stays the one place decisions get
recorded. This file gets its summary tables updated as things change, not a
new entry every time — day-to-day changes still go in CHANGELOG.md only.

---

## What this is

Warrner Legal — a WordPress site for Erin Warrner, an Indianapolis
immigration attorney (PocketSod-developed). Custom theme, no page builder,
no SEO plugin (SEO handled directly in `inc/seo.php`).

## Current phase

**Pre-launch.** Production infrastructure is live at `erinwlegal.com`
(DNS, HTTPS, hosting all working), but the public site is hidden behind a
coming-soon gate. Real content has not been entered anywhere yet — see
"What's blocking launch" below.

## Document map

| Document | What it's for |
|---|---|
| [AGENTS.md](AGENTS.md) | Working rules and conventions for anyone (human or AI) editing this repo |
| [README.md](README.md) | Local dev environment setup |
| [CHANGELOG.md](CHANGELOG.md) | Dated log of what changed and why — **the canonical history**, read this for context on any decision |
| [ROADMAP.md](ROADMAP.md) | Sequenced plan of remaining tasks and recommended improvements — what to do next, not just what's true now |
| [ACCOUNTS.md](ACCOUNTS.md) | Every account this project uses, who holds it, and what needs to transfer for a full handover to Erin — **keep this current** |
| [HANDOVER.md](HANDOVER.md) | What a handover actually contains (scope, what's excluded and why) and the step-by-step for when it happens — defined, not yet executed |
| [INFRASTRUCTURE.md](INFRASTRUCTURE.md) | Current layout: environments, accounts, domains, credentials map |
| [DISASTER-RECOVERY.md](DISASTER-RECOVERY.md) | Backup coverage and step-by-step recovery per failure scenario |
| [SCRIPTS.md](SCRIPTS.md) | Every script/tool: what it does, what it needs, what it touches |
| `docs/Production-Launch-and-Multilingual-Plan.docx` | Full go-live + multilingual plan. **Kept local-only, not committed** (client's explicit call) — read it directly, don't rely on the summary in CHANGELOG.md alone |

---

## Environments at a glance

**Status as of 2026-09-22:** `dev.erinwlegal.com` is fully live and
verified (DNS, HTTPS, theme, FTP + REST auth), replacing
`demo.toolsandtable.com` as Warrner's Dev site. `demo.toolsandtable.com`
now shows a neutral retirement notice instead of the Warrner site, and
stays active as a general PocketSod demo asset for other projects — see
INFRASTRUCTURE.md §1a. Permalinks confirmed correct on Dev and Prod, no
fix needed.

| | Local | Dev | Prod |
|---|---|---|---|
| URL | http://warrner.test | https://dev.erinwlegal.com | https://erinwlegal.com |
| Status | Working | Working | Working, gated behind coming-soon |
| Has real content? | No | No | No |

Full detail: [INFRASTRUCTURE.md](INFRASTRUCTURE.md).

---

## What's blocking launch

(Live list — this table should stay in sync with CHANGELOG.md's "Open
items" section, which is the authoritative source if they ever disagree.)

| Item | Status |
|---|---|
| Privacy Policy / Terms of Use pages on production | Not created yet (they live in the DB, not this repo — must be recreated per-environment) |
| SMTP for the intake form | Live on production via Brevo (2026-09-26), test send verified. Remaining: one real intake-form test to Erin's inbox, and handling the key's 90-day inactivity expiry, see CHANGELOG.md |
| Homepage placeholder copy (`[PLACEHOLDER]` tags) | Waiting on real numbers/facts from Erin |
| Practice-area pages | `functions.php` still returns hardcoded placeholder data; real pages not built |
| Attorney CPT | Empty — needs at least Erin's own bio/headshot |
| "Attorney Advertising" footer link | Points to `#`, no page exists |
| Privacy Policy / Terms attorney review | Drafted, not attorney-reviewed |
| Spanish translation | First draft (142 strings), needs a fluent/legal reviewer's pass |
| Coming-soon gate | Intentionally **on** until the above is resolved |

---

## Key decisions (pointers, not full rationale — see CHANGELOG.md for that)

| Decision | Date | Why (one line) |
|---|---|---|
| WordPress over Next.js/Vercel | 2026-08-13 | Client's hosting/CMS preference |
| Split-repo workflow (Laragon not version-controlled) | 2026-08-13 | Keeps WP core/uploads out of git |
| `demo.toolsandtable.com` as permanent staging, not a path to production | 2026-09-15 | Stable review link without exposing the local machine |
| Polylang over TranslatePress | 2026-09-16 | Client wants per-language SEO URLs and 3+ languages eventually |
| Option A selected from 5 homepage variants | 2026-09-16 | Client review |
| Coming-soon gate, off by default per-environment | 2026-09-18 | Lets prod infrastructure go live before content does |
| Deploy pipeline named Local → Dev → Prod | 2026-09-22 | Made the existing (unnamed) pipeline explicit in script names |
| Dev moved to `dev.erinwlegal.com`, same account as Prod | 2026-09-22 | `demo.toolsandtable.com` repurposed as a general PocketSod demo asset for other projects |
| Hostinger account ownership resolved | 2026-09-22 | `wildridge@pocketsod.com` is the developer's admin login for the account, managed on Erin's behalf |
| `demo.toolsandtable.com` retired with a notice, not deleted | 2026-09-22 | Keeps the URL from going blank/404 for anyone with it bookmarked; account is reused for other projects |

---

## Accounts & access (summary — full handover-oriented detail in ACCOUNTS.md)

| Account | Documented here? |
|---|---|
| GitHub (`PocketSod/warrner`) | Yes |
| GoDaddy (DNS/registrar) | Login not documented — needs filling in |
| Microsoft 365 (Erin's mailbox) | Erin's own account |
| Hostinger — "ToolsandTable" (demo, other projects) | Login not documented — needs filling in |
| Hostinger — Prod + Dev | `wildridge@pocketsod.com` — resolved 2026-09-22 |

---

## Maintenance note

Update the tables above when their underlying facts change (a new
environment, a resolved blocker, a new account). Keep new *decisions* and
their reasoning in CHANGELOG.md, not here — this file should stay a
snapshot you can read in two minutes, not a second changelog.
