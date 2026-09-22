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

**Transitioning as of 2026-09-22:** Dev is moving from
`demo.toolsandtable.com` to `dev.erinwlegal.com`, a new site under the same
Hostinger account as production. `demo.toolsandtable.com` is being retired
from this project — see §1a. Until `dev.erinwlegal.com` is created and
verified, treat this table as the target state, not yet fully live; check
CHANGELOG.md's most recent entries for exactly how far the cutover has
gotten.

| | Local | Dev | Prod |
|---|---|---|---|
| URL | http://warrner.test | https://dev.erinwlegal.com | https://erinwlegal.com |
| Purpose | Day-to-day development | Client review/staging | The real site |
| Hosting | Laragon (this machine) | Hostinger — same account as Prod | Hostinger — production account |
| Version controlled? | No (WP core + DB local only) | No | No |
| Deploy command | — (edit source, sync to Laragon) | `npm run deploy:dev` | `npm run deploy:prod` |
| Credentials file | n/a | `.env.dev` (new) | `.env.production` |
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
it (`.env`, the unsuffixed `deploy`/`purge-cache` npm scripts) are kept
working for now in case that account is needed for another project
demo, but no longer documented here as "Warrner Dev".

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
| **GoDaddy** | Domain registration + DNS for `erinwlegal.com` | Not documented here — confirm who holds login | Nameservers stay GoDaddy's, see §2. DNS changes are made directly by the account holder, not via API — see CHANGELOG.md 2026-09-22. |
| **Microsoft 365** | Erin's live mailbox, `erin@erinwlegal.com` | Erin's own account | Unaffected by any WordPress/hosting work as long as DNS mail records are untouched |
| **Hostinger — "ToolsandTable" account** | Hosts `demo.toolsandtable.com` | Not documented here — confirm login | No longer Warrner's Dev site (see §1a) — kept as a general PocketSod demo asset for other projects. Not reachable via the `HOSTINGER_API_TOKEN` used for Prod (that token only sees the account below). |
| **Hostinger — Prod + Dev account** | Hosts `erinwlegal.com` (Prod) and, once created, `dev.erinwlegal.com` (Dev) | Admin login `wildridge@pocketsod.com`; FTP username on the erinwlegal.com site is `u483557243` | **Ownership resolved 2026-09-22**: this is the developer's admin account for the hosting, used on Erin's behalf. (Earlier "Production hosting account mix-up" open item in CHANGELOG.md is closed.) |

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

| | Local | Dev (dev.erinwlegal.com, once created) | Prod |
|---|---|---|---|
| WP-admin URL | http://warrner.test/wp-admin | https://dev.erinwlegal.com/wp-admin | https://erinwlegal.com/wp-admin |
| Active theme | `warrner` | `warrner` | `warrner` |
| Active plugins | (WP core only, no caching plugin) | Not yet created — expect similar to Prod once set up | `hostinger` (Hostinger Tools), `litespeed-cache` |
| mu-plugins | `warrner-cache-purge.php`, `warrner-coming-soon.php` | same, once deployed | same |
| Coming-soon gate | Off | Off | **On** — `WARRNER_COMING_SOON` defined `true` in prod's `wp-config.php` only |
| SSL | n/a (local) | Not yet created | Verified: Let's Encrypt, auto-issued, expires ~2026-12-18 |
| Backups | None (not backed up anywhere — see DISASTER-RECOVERY.md) | Not yet created | Hostinger automatic **weekly** backups (Premium plan default). Manual/daily backups are paid upgrades, not purchased. |
| Application Password | n/a | Will be stored in `.env.dev` | Stored in `.env.production` |

`demo.toolsandtable.com`'s WordPress install still exists but is no longer
tracked in this table — see §1a.

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
| `.env.dev` | `dev.erinwlegal.com` FTP + WP Application Password, once created | `.env.example` |
| `.env.production` | Prod FTP + WP Application Password + `HOSTINGER_API_TOKEN` | `.env.example` |
| `.claude/settings.local.json` | Claude Code's own local Bash permission rules (not a site credential) | n/a, machine-specific |

`HOSTINGER_API_TOKEN` (added 2026-09-22) is a **full Hostinger-account**
bearer token, not scoped to just the one site — it can see billing,
domains, and VPS on whichever Hostinger login created it. It will also be
able to see `dev.erinwlegal.com` once that's created, since it's the same
account. Created with a 1-month expiration (~2026-10-22); regenerate in
hPanel → API when it lapses.

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
