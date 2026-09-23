# Accounts

Every account/service this project touches, in one place, for eventual
handover to Erin (or whoever owns the business going forward). **Keep this
updated as accounts change** — it's the first thing a new owner or a new
developer should read before touching anything.

For the technical (developer-facing) version of some of this same
information — credentials files, how each account is actually used by the
deploy tooling — see [INFRASTRUCTURE.md](INFRASTRUCTURE.md). This doc is
the ownership/access angle; that one is the how-it-works angle.

**Legend:** 🔴 needs to transfer to Erin before full handover · 🟡 already
hers · ⚪ not Erin's concern (developer's own tooling/asset)

---

## Domain & DNS

| Account | What it's for | Who holds it now | Where to manage it | Handover |
|---|---|---|---|---|
| **GoDaddy** | Registers `erinwlegal.com`, hosts its DNS records | **Not documented in this repo — confirm and fill in.** Developer has been making DNS changes; unclear if the account itself is Erin's or the developer's. | godaddy.com, sign in | 🔴 **If this is the developer's account, the domain needs to transfer to Erin's own GoDaddy account eventually** — a domain a business doesn't own the registration for is a real risk if the relationship ends. Confirm which case this is, soon, not just at handover time. |

## Website hosting

| Account | What it's for | Who holds it now | Where to manage it | Handover |
|---|---|---|---|---|
| **Hostinger — Prod + Dev** | Hosts `erinwlegal.com` and `dev.erinwlegal.com` (Premium Web Hosting plan, $131.88/yr) | Developer's admin login (`wildridge@pocketsod.com`), managed on Erin's behalf. Ownership question from the 2026-09-19 signup mix-up was resolved 2026-09-22 — see CHANGELOG.md — but that resolved *who administers it*, not necessarily *whose payment method is on file*. | hpanel.hostinger.com, sign in | 🔴 **Confirm who's actually being billed.** If it's the developer's card/PayPal, decide whether this should move to a payment method in Erin's name before/at handover, even if the login itself stays admin-managed by the developer day to day. |
| **Hostinger — "ToolsandTable"** | Hosts `demo.toolsandtable.com` (now a general PocketSod demo asset, retired from Warrner specifically as of 2026-09-22) | **Not documented — confirm and fill in.** A separate Hostinger account from the one above. | hpanel.hostinger.com, sign in (different login than Prod+Dev) | ⚪ Not Erin's concern — this account isn't specific to her project once retired, it's the developer's own reusable tooling. No action needed for her handover. |

## Email

| Account | What it's for | Who holds it now | Where to manage it | Handover |
|---|---|---|---|---|
| **Microsoft 365** | Erin's live mailbox, `erin@erinwlegal.com` — the business's actual email | **Erin's own account already.** | admin.microsoft.com / outlook.com | 🟡 Nothing to transfer — this is already hers. Only note: as of 2026-09-22 the developer does *not* have any access here; every DNS/SMTP-related ask has gone through Erin directly (see CHANGELOG.md's DKIM and SMTP AUTH entries). If the developer is ever granted scoped Exchange Administrator access for convenience, that's a separate grant Erin controls and can revoke any time — see the 2026-09-22 conversation for exactly what that would look like. |

## Code

| Account | What it's for | Who holds it now | Where to manage it | Handover |
|---|---|---|---|---|
| **GitHub** — `PocketSod/warrner` | Source-of-truth repo for the theme/plugin code | Developer's account (`w1ldr1`), private repo | github.com | 🔴 **The actual code needs to end up somewhere Erin has access to**, even if she never touches it herself — either transfer the repo to an account of hers, or at minimum give her (or a future developer she hires) read access, so the business doesn't lose its own website's source code if the developer relationship ends. Not urgent day to day, but don't let it be forgotten at actual handover time. |

---

## Developer-only credentials (not separate accounts, but access Erin should know exist)

These aren't accounts Erin needs to log into, they're credentials *within*
the accounts above that a future developer would need regenerated, not
handed over as-is (regenerating is safer than transferring a live secret).

| Credential | Lives in | Tied to which account above | Notes |
|---|---|---|---|
| Hostinger API token | `.env.production` (`HOSTINGER_API_TOKEN`) | Hostinger — Prod + Dev | Full-account scope, 1-month expiration (~2026-10-22). Regenerate, don't reuse, if handing to a new developer. |
| FTP logins | `.env`, `.env.dev`, `.env.production` | Hostinger — ToolsandTable (demo), Prod + Dev (dev + prod share one account-wide FTP login: `u483557243`) | See INFRASTRUCTURE.md §5 for the full map. |
| WordPress Application Passwords | Same three `.env*` files | The WordPress install on each respective site | Per-site, per-user. A new developer generates their own from each site's wp-admin rather than reusing these. |
| WordPress admin logins | Set per install, not centrally tracked | | **Local:** set during the original Laragon WP-CLI install, not handover-relevant, never leaves the developer's machine. **Demo:** `wildridge@gmail.com`. **Dev:** `wildridge` (WordPress stripped the `@pocketsod.com` — see CHANGELOG.md 2026-09-22). **Prod:** `wildridge@pocketsod.com`. All developer-personal logins — **Erin should have her own wp-admin login on production** with the Administrator role, not rely solely on the developer's. Worth creating one for her directly. |

---

## Accounts this project doesn't have yet, but will need

Not active today — listed so they're not forgotten when the relevant
Roadmap phase comes up (see [ROADMAP.md](ROADMAP.md)).

| Account | Needed for | When |
|---|---|---|
| Google Search Console (and optionally Bing Webmaster Tools) | Submitting the sitemap once the site is publicly launched | ROADMAP.md Phase 3 |
| Google Analytics (or equivalent) | If Erin wants visitor analytics — not yet decided | ROADMAP.md Phase 3 |
| Anthropic (Claude API) | Only if the stubbed AI lead-scoring feature (`inc/ai-lead-intake.php`) is ever reviewed and turned on | Not scheduled — flagged as needing a security/consent review first, see ROADMAP.md |

---

## What "fully handed over" would actually mean

A quick way to sanity-check progress against this list later: everything
marked 🔴 above has moved to an account in Erin's name, or she's been
given documented access to it, and every credential in the
developer-only table has been regenerated fresh rather than handed over
as-is. Until then, this project depends on the developer's own accounts
in more places than is ideal for the business long-term — normal for an
active build, worth tightening before any actual handover conversation.
