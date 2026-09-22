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
Local (Laragon)  --deploy-->  Dev (demo.toolsandtable.com)  --deploy-->  Prod (erinwlegal.com)
```

| | Local | Dev | Prod |
|---|---|---|---|
| URL | http://warrner.test | https://demo.toolsandtable.com | https://erinwlegal.com |
| Purpose | Day-to-day development | Client review/staging | The real site |
| Hosting | Laragon (this machine) | Hostinger — "ToolsandTable" account | Hostinger — production account |
| Version controlled? | No (WP core + DB local only) | No | No |
| Deploy command | — (edit source, sync to Laragon) | `npm run deploy:dev` / `deploy` | `npm run deploy:prod` |
| Credentials file | n/a | `.env` | `.env.production` |
| Coming-soon gate | Off (never defined) | Off (never defined) | **On** — see §4 |
| Real client content? | No | No | No (fresh install, nothing migrated) |

**Important:** Dev (`demo.toolsandtable.com`) and Prod (`erinwlegal.com`) are
on **two different Hostinger accounts/logins**, not two sites on one
account. `demo.toolsandtable.com` will never become production — it's a
permanent staging site. See §3.

---

## 2. Domain & DNS

| Domain | Registrar | Nameservers | Points at |
|---|---|---|---|
| `erinwlegal.com` | GoDaddy | `ns33`/`ns34.domaincontrol.com` (GoDaddy's own — **not** switched to Hostinger) | Hostinger prod, via a plain `A` record (`194.164.64.201` as of 2026-09-19) |
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
| **GoDaddy** | Domain registration + DNS for `erinwlegal.com` | Not documented here — confirm who holds login | Nameservers stay GoDaddy's, see §2 |
| **Microsoft 365** | Erin's live mailbox, `erin@erinwlegal.com` | Erin's own account | Unaffected by any WordPress/hosting work as long as DNS mail records are untouched |
| **Hostinger — Dev account** ("ToolsandTable") | Hosts `demo.toolsandtable.com` | Not documented here — confirm login | Separate account from prod; not reachable via the `HOSTINGER_API_TOKEN` used for prod (that token only sees the prod site) |
| **Hostinger — Prod account** | Hosts `erinwlegal.com` | wp-admin/API user `wildridge@pocketsod.com`; FTP username `u483557243` | **Ownership unresolved** — see the "Production hosting account mix-up" open item in CHANGELOG.md. A checkout-flow bug merged the purchaser's own Hostinger profile with Erin's details; being corrected with Hostinger support. Decide whether this account moves to Erin's own login before launch. |

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

| | Local | Dev | Prod |
|---|---|---|---|
| WP-admin URL | http://warrner.test/wp-admin | https://demo.toolsandtable.com/wp-admin | https://erinwlegal.com/wp-admin |
| Active theme | `warrner` | `warrner` | `warrner` |
| Active plugins | (WP core only, no caching plugin) | LiteSpeed Cache (implied by purge tooling — not re-audited this session) | `hostinger` (Hostinger Tools), `litespeed-cache` |
| mu-plugins | `warrner-cache-purge.php`, `warrner-coming-soon.php` | same | same |
| Coming-soon gate | Off | Off | **On** — `WARRNER_COMING_SOON` defined `true` in prod's `wp-config.php` only |
| SSL | n/a (local) | Assumed active, not re-verified this session | Verified: Let's Encrypt, auto-issued, expires ~2026-12-18 |
| Backups | None (not backed up anywhere — see DISASTER-RECOVERY.md) | Not checked this session | Hostinger automatic **weekly** backups (Premium plan default). Manual/daily backups are paid upgrades, not purchased. |
| Application Password | n/a | Stored in `.env` | Stored in `.env.production` |

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
| `.env` | Dev (demo) FTP + WP Application Password | `.env.example` |
| `.env.production` | Prod FTP + WP Application Password + `HOSTINGER_API_TOKEN` | `.env.example` |
| `.claude/settings.local.json` | Claude Code's own local Bash permission rules (not a site credential) | n/a, machine-specific |

`HOSTINGER_API_TOKEN` (added 2026-09-22) is a **full Hostinger-account**
bearer token, not scoped to just the one site — it can see billing,
domains, and VPS on whichever Hostinger login created it, not only
`erinwlegal.com`. Created with a 1-month expiration
(~2026-10-22); regenerate in hPanel → API when it lapses, or sooner if the
account-ownership question above resolves and it should move to a
different login.

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
       (listing sites/installs, WordPress plugin list/uninstall — prod
       only, added 2026-09-22, see SCRIPTS.md)

Manual, in wp-admin or hPanel → anything else: WordPress core updates,
       page/post content, plugin activation, DNS, SSL, backups
```

FTP can only write files. It cannot touch anything stored in the WordPress
database (options, the site icon, page content). That split is why there
are three different ways of reaching a site rather than one.
