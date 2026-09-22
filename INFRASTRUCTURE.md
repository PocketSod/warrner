# Infrastructure & Accounts

What exists, where it lives, and who/what controls it. This is a snapshot —
if something here changes, update this file and note *why* in
[CHANGELOG.md](CHANGELOG.md).

For narrative history (how we got here) see CHANGELOG.md. For step-by-step
recovery see [DISASTER-RECOVERY.md](DISASTER-RECOVERY.md). For the tooling
that talks to all of this, see [SCRIPTS.md](SCRIPTS.md).

---

## 1. The three environments

```
Local (Laragon)  --deploy-->  Dev (dev.erinwlegal.com)  --deploy-->  Prod (erinwlegal.com)
```

**Status as of 2026-09-22: fully live.** `dev.erinwlegal.com` is created,
DNS resolves, HTTPS is issued, the Warrner theme is deployed and active,
and `.env.dev`'s Application Password is verified working end to end
(FTP deploy → REST auth confirmed via a real `purge-cache:dev` run).
`demo.toolsandtable.com` is being retired from this project — see §1a.

| | Local | Dev | Prod |
|---|---|---|---|
| URL | http://warrner.test | https://dev.erinwlegal.com | https://erinwlegal.com |
| Purpose | Day-to-day development | Client review/staging | The real site |
| Hosting | Laragon (this machine) | Hostinger — same account as Prod | Hostinger — production account |
| Version controlled? | No (WP core + DB local only) | No | No |
| Deploy command | — (edit source, sync to Laragon) | `npm run deploy:dev` | `npm run deploy:prod` |
| Credentials file | n/a | `.env.dev` | `.env.production` |
| Coming-soon gate | Off (never defined) | Off (never defined) | **On** — see §4 |
| Real client content? | No | No | No (fresh install, nothing migrated) |

**Important:** Dev and Prod are now on the **same Hostinger account**
(admin login `wildridge@pocketsod.com`, see §3), as two separate website
installs. That's a change from the original setup, where Dev
(`demo.toolsandtable.com`) was a different account entirely.

### 1a. `demo.toolsandtable.com` — retired from this project, not deleted

As of 2026-09-22, `demo.toolsandtable.com` is no longer part of Warrner's
Dev pipeline. The account and domain stay active as a general-purpose
PocketSod asset, reusable for demoing other projects. The Warrner
WordPress install currently running there is being retired: replaced with
a maintenance/retired notice rather than deleted outright, since
decommissioning the hosting site itself needs hPanel access to that
account (see §3), and a live URL some people may still have bookmarked
shouldn't just go blank or 404. Deploy scripts and credentials targeting
it are kept working under explicit `:demo` names (`deploy:demo`,
`deploy:mu-plugins:demo`, `purge-cache:demo`, plus the original unsuffixed
`deploy`/`deploy:mu-plugins`/`purge-cache`, unchanged for backward
compatibility) in case that account is needed for another project demo,
but no longer documented here as "Warrner Dev" — that name now means
`dev.erinwlegal.com`.

---

## 2. Domain & DNS

| Domain | Registrar | Nameservers | Points at |
|---|---|---|---|
| `erinwlegal.com` | GoDaddy | `ns33`/`ns34.domaincontrol.com` (GoDaddy's own — **not** switched to Hostinger) | Hostinger prod, via a plain `A` record (`194.164.64.201` as of 2026-09-19) |
| `dev.erinwlegal.com` | Same GoDaddy zone as `erinwlegal.com` | Same as above | Needs an `A` record, host `dev`, value `194.164.64.201` (same server, added to hPanel 2026-09-22 — not yet added to GoDaddy as of this writing) |
| `toolsandtable.com` | Unrelated to this project | — | Hosts the demo site as a subdomain-equivalent install |
| `warrner.test` | n/a — local hosts-file entry via Laragon | — | This machine only |

**DNS records on `erinwlegal.com` that must never change:** `MX`, both
`TXT` records (SPF + Microsoft domain verification), `autodiscover`, both
`selector*._domainkey` DKIM CNAMEs, `enterpriseenrollment`,
`enterpriseregistration`. These all serve Erin's live Microsoft 365 mailbox
(`erin@erinwlegal.com`). Only the root `A` record and `www` CNAME are
website records.

A pre-cutover zone export was saved to `erinwlegal.com.txt` (2026-09-19,
in the developer's Downloads folder) — this is the "known good" record set
to restore from if DNS is ever broken. It is **not** in this repo. See
DISASTER-RECOVERY.md §5.

---

## 3. Accounts

| Account | What it's for | Login / owner | Notes |
|---|---|---|---|
| **GitHub** — `PocketSod/warrner` | Source of truth for theme/plugin code | git user `w1ldr1` | Single `main` branch. Only remote configured (`origin`). |
| **GoDaddy** | Domain registration + DNS for `erinwlegal.com` | Not documented here — confirm who holds login | Nameservers stay GoDaddy's, see §2. DNS changes are made directly by the account holder, not via API — see CHANGELOG.md 2026-09-22. |
| **Microsoft 365** | Erin's live mailbox, `erin@erinwlegal.com` | Erin's own account | Unaffected by any WordPress/hosting work as long as DNS mail records are untouched |
| **Hostinger — "ToolsandTable" account** | Hosts `demo.toolsandtable.com` | Not documented here — confirm login | No longer Warrner's Dev site (see §1a) — kept as a general PocketSod demo asset for other projects. Not reachable via the `HOSTINGER_API_TOKEN` used for Prod (that token only sees the account below). |
| **Hostinger — Prod + Dev account** | Hosts `erinwlegal.com` (Prod) and `dev.erinwlegal.com` (Dev, created 2026-09-22) | Admin login `wildridge@pocketsod.com`; account username (also the shared FTP login for every site on the account) is `u483557243` | **Ownership resolved 2026-09-22**: this is the developer's admin account for the hosting, used on Erin's behalf. (Earlier "Production hosting account mix-up" open item in CHANGELOG.md is closed.) |

**Hostinger prod plan:** "Premium Web Hosting", $131.88/yr, auto-renew on,
subscription created 2026-09-19 (per the Hostinger billing API). The API
reported a `next_billing_at` of 2030-09-05, which is an unusually long gap
for an annual plan — worth confirming directly in hPanel → Billing rather
than trusting this note.

---

## 4. WordPress installs

Three separate WordPress installs, three separate databases, three separate
sets of users/plugins/settings. None of them share content — see
`CHANGELOG.md`'s "Production go-live plan" section for why (fresh install,
no migration).

| | Local | Dev (dev.erinwlegal.com) | Prod |
|---|---|---|---|
| WP-admin URL | http://warrner.test/wp-admin | https://dev.erinwlegal.com/wp-admin | https://erinwlegal.com/wp-admin |
| Active theme | `warrner` | `warrner` — confirmed via API **and** a live screenshot | `warrner` |
| Active plugins | (WP core only, no caching plugin) | `hostinger` (Hostinger Tools) only — **no LiteSpeed Cache on this install** | `hostinger` (Hostinger Tools), `litespeed-cache` |
| mu-plugins | `warrner-cache-purge.php`, `warrner-coming-soon.php` | same — deployed via FTP 2026-09-22 | same |
| Coming-soon gate | Off | Off (mu-plugin present but `WARRNER_COMING_SOON` isn't defined in this install's `wp-config.php`) | **On** — `WARRNER_COMING_SOON` defined `true` in prod's `wp-config.php` only |
| SSL | n/a (local) | Verified: Let's Encrypt, auto-issued once DNS resolved, expires ~2026-12-21. HTTP→HTTPS redirect confirmed working. | Verified: Let's Encrypt, auto-issued, expires ~2026-12-18 |
| Backups | None (not backed up anywhere — see DISASTER-RECOVERY.md) | Not yet checked | Hostinger automatic **weekly** backups (Premium plan default). Manual/daily backups are paid upgrades, not purchased. |
| Application Password | n/a | Stored in `.env.dev`, verified working | Stored in `.env.production` |

**Fresh-install gotcha found and fixed (2026-09-22):** the theme
activation call initially reported success, but this account's
`hostinger-easy-onboarding` plugin (present by default on every fresh
Hostinger WordPress install, already removed from Prod) silently
reactivated Hostinger's own AI theme afterward, without any further API
call. The homepage rendered as WordPress's unstyled default sample post
until this was caught by actually screenshotting the live site rather
than trusting the API's activation response. Fixed by removing
`hostinger-easy-onboarding` (and `hostinger-reach`, same as Prod) and
re-activating `warrner`, which then held. **Takeaway: after any WordPress
API action here, verify the actual rendered page, not just the API's own
response** — a 200 with "Request accepted" doesn't mean the end state
stuck.

The WordPress admin account on Dev was created via the Hostinger API
(login `wildridge`, generated password given to the developer directly,
not stored in this repo) — that generated password didn't work when
tested at `wp-login.php`; used a Hostinger auto-login link (`POST
.../wordpress/{software}/login/links`, or hPanel's own "WP Admin" button)
to get in instead, without resolving why. Once in, a new password was set
by hand and a fresh Application Password created for `.env.dev` — that
one is confirmed working (verified with a real `purge-cache:dev` call).
**Note the username split:** `WP_API_USER` for Dev is `wildridge` (the
actual account username WordPress kept after stripping the `@` from what
was requested at creation, see the gotcha above), not the email — unlike
Prod, where the real username happens to equal the email, so the two
aren't interchangeable here. `demo.toolsandtable.com`'s WordPress install
still exists but is no longer tracked in this table —
see §1a.

**Removed from prod (2026-09-22):** `hostinger-easy-onboarding`,
`hostinger-reach`, `wordpress-importer` — see CHANGELOG.md. Kept
`hostinger` (Hostinger Tools) deliberately, since it likely backs hPanel's
one-click login and security scanning and wasn't confirmed safe to remove.

---

## 5. Credentials map

Real credentials live only in gitignored files, never in this repo's
tracked content:

| File | Covers | Template |
|---|---|---|
| `.env` | `demo.toolsandtable.com` FTP + WP Application Password (legacy — no longer Warrner's Dev, see §1a) | `.env.example` |
| `.env.dev` | `dev.erinwlegal.com` FTP + WP Application Password, both verified working | `.env.example` |
| `.env.production` | Prod FTP + WP Application Password + `HOSTINGER_API_TOKEN` | `.env.example` |
| `.claude/settings.local.json` | Claude Code's own local Bash permission rules (not a site credential) | n/a, machine-specific |

`HOSTINGER_API_TOKEN` (added 2026-09-22) is a **full Hostinger-account**
bearer token, not scoped to just one site — it can see billing, domains,
and VPS on the account it was created under, and now covers
`dev.erinwlegal.com` too, since it's on the same account. It was also used
to *create* `dev.erinwlegal.com` (a website + WordPress install), not just
read — see CHANGELOG.md and SCRIPTS.md for what that call looked like.
Created with a 1-month expiration (~2026-10-22); regenerate in hPanel →
API when it lapses.

None of these files back up anywhere except this machine. If the machine
is lost, every credential must be regenerated from its provider's
dashboard — see DISASTER-RECOVERY.md §6 for exactly where each one comes
from.

---

## 6. How a deploy actually reaches each site

```
FTP  → wp-content/themes/warrner and wp-content/mu-plugins
       (scripts/deploy.mjs — overwrites/adds, never deletes remote files)

REST API + WP Application Password → anything stored in the database
       (site icon, cache-purge trigger — scripts/purge-cache.mjs,
       scripts/set-site-icon.mjs)

Hostinger account API + bearer token → hosting-account-level operations
       (listing sites/installs, WordPress plugin list/uninstall/theme
       activation, creating a new website + WordPress install — added
       2026-09-22, see SCRIPTS.md)

Manual, in wp-admin or hPanel → anything else: WordPress core updates,
       page/post content, plugin activation, DNS, SSL, backups
```

FTP can only write files. It cannot touch anything stored in the WordPress
database (options, the site icon, page content). That split is why there
are three different ways of reaching a site rather than one.
