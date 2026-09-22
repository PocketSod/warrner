# Disaster Recovery & Backup Plan

What's actually backed up, what isn't, and the exact steps to recover from
each realistic failure. Written honestly — several gaps below are real and
unmitigated as of 2026-09-22, not hypothetical.

See [INFRASTRUCTURE.md](INFRASTRUCTURE.md) for what each term here refers
to, and [SCRIPTS.md](SCRIPTS.md) for the commands mentioned.

---

## 1. What's backed up, where

| Data | Backed up? | Where | Retention |
|---|---|---|---|
| Theme/plugin **code** | Yes | Git history, pushed to GitHub (`PocketSod/warrner`) | Full history, forever |
| Prod **database + files** | Yes | Hostinger automatic snapshots (Premium plan default) | **Weekly**. Latest as of 2026-09-20; retention count not confirmed — check hPanel → Files → Backups → Restore history |
| Dev (demo) database + files | **Not checked this session** | Unknown | Unknown — check the demo Hostinger account's Backups panel the same way |
| Local (Laragon) database | **No backup at all** | — | — |
| Credentials (`.env`, `.env.production`) | No (gitignored, local disk only) | This machine only | — |
| GoDaddy DNS zone | Partial — one manual export | `erinwlegal.com.txt`, developer's Downloads folder, dated 2026-09-19 | Single point-in-time snapshot, not automated |
| GitHub repo itself | Single remote only | `origin` = GitHub | No secondary mirror |

**Why the local DB gap is currently low-risk:** per the go-live plan, no
real client content exists anywhere yet — practice areas are hardcoded
placeholder data in `functions.php`, the Attorney CPT is empty. Production
gets a fresh install with content entered directly there, not a migration
from Local. This stops being low-risk the moment real content is entered
into *any* environment's database — revisit then.

---

## 2. Recovery: bad deploy / theme regression

The most likely failure, and the one the normal workflow is built to
recover from fast.

1. `git log --oneline -5` — find the last known-good commit.
2. Either:
   - `git revert HEAD` (preferred — keeps history honest), or
   - `git checkout <known-good-hash> -- path/to/file` (single file)
3. Sync to Laragon and verify locally first.
4. Redeploy the fixed state:
   - Dev: `npm run deploy:dev` (+ `deploy:mu-plugins:dev` if mu-plugins changed)
   - Prod: `npm run deploy:prod` (+ `deploy:mu-plugins:prod` if mu-plugins changed)
5. Purge cache: `npm run purge-cache:dev` or `purge-cache:prod`.
6. Verify the live result in a browser.

**Revert first, diagnose second.** Don't debug a live regression in place —
restore the known-good state, then figure out what went wrong.

---

## 3. Recovery: WordPress database/content problem on prod

(Corruption, bad plugin update, accidental content deletion, compromise.)

1. hPanel → `erinwlegal.com` → Files → Backups → **Restore and download** or
   **Restore history**.
2. Pick the most recent snapshot from before the problem. Backups run
   weekly, so up to ~6 days of DB-only changes (page edits, settings) can
   be lost — there is currently no faster option on this plan without
   upgrading (Business tier adds on-demand manual backups).
3. After restoring, re-verify: homepage renders, `wp-login.php` reachable,
   coming-soon gate state is what it should be (the restore could revert
   `wp-config.php`'s `WARRNER_COMING_SOON` line along with everything else
   — re-check it).
4. If the cause was a plugin, note which one in CHANGELOG.md before
   reinstalling it.

**Before real content goes live**, decide whether weekly backups are tight
enough, or whether the Business-tier upgrade (on-demand backups) is worth
it — this is a real open question, not answered yet.

---

## 4. Recovery: total loss of the production Hostinger account/server

The domain (GoDaddy) and mailbox (Microsoft 365) survive this
independently — that's *why* DNS nameservers were kept at GoDaddy instead
of moved to Hostinger (see INFRASTRUCTURE.md §2). Only the website itself
needs rebuilding.

1. Create a new Hostinger site (or account) — see the "Production go-live
   plan" section in CHANGELOG.md for the original setup sequence.
2. Get new FTP credentials (hPanel → Files → FTP Accounts) and a new WP
   Application Password (wp-admin → Users → Profile). **List the FTP login
   directory before assuming `FTP_REMOTE_ROOT`** — see SCRIPTS.md and the
   2026-09-19 CHANGELOG entry for why (it's rarely `public_html` directly).
3. Update `.env.production` with the new values.
4. Deploy theme + mu-plugins: `npm run deploy:prod`, `deploy:mu-plugins:prod`.
5. If the site isn't ready to show publicly yet, re-add
   `define( 'WARRNER_COMING_SOON', true );` to the new `wp-config.php`
   (see `wp-config-sample.php` for the exact placement/comment).
6. Re-attach the domain in hPanel, then repoint the GoDaddy `A` record (see
   §5 below) — do **not** switch nameservers to Hostinger.
7. Re-verify HTTPS, mail records, and the mail-sending test (§7).
8. Recreate the Privacy Policy / Terms of Use pages — their content lives
   in the database, not this repo (see CHANGELOG.md, 2026-09-18 entry).

---

## 5. Recovery: broken or wrong DNS

The highest-consequence, hardest-to-rush-safely recovery, because a wrong
record can silently break Erin's email.

1. Open `erinwlegal.com.txt` (the pre-cutover export) as the reference for
   what "correct" looks like.
2. In GoDaddy DNS management, compare every record against that file.
3. Only the root `A` record (and `www` CNAME, which points at the root) are
   expected to differ from the original export — that's the deliberate
   change made on 2026-09-19. Everything else (`MX`, `TXT`/SPF, `TXT`/MS
   verification, `autodiscover`, both `selector*._domainkey` records,
   `enterpriseenrollment`, `enterpriseregistration`) should match the
   export exactly.
4. If nameservers were ever accidentally switched to Hostinger's, switch
   them back to `ns33.domaincontrol.com` / `ns34.domaincontrol.com`
   immediately — that's the one change that takes Erin's mail down, not
   just the website.
5. Verify: `nslookup erinwlegal.com`, `nslookup -type=MX erinwlegal.com`,
   and an actual send/receive test on `erin@erinwlegal.com`.

**Gap:** this export is a single file on one machine, not a repeatable
backup. Consider re-exporting it after any future DNS change and storing it
somewhere more durable than Downloads.

---

## 6. Recovery: developer's machine is lost

The git repo is the durable source of truth and is already pushed to
GitHub, so code isn't at risk. What has to be rebuilt is everything that
only ever lived in gitignored local files:

| Lost | Regenerate from |
|---|---|
| `.env` (dev FTP + WP password) | Hostinger dev account hPanel → FTP Accounts; demo wp-admin → Users → Profile → Application Passwords |
| `.env.production` (prod FTP + WP password + API token) | Hostinger prod account hPanel → FTP Accounts; prod wp-admin → Application Passwords; hPanel → API → New token |
| Laragon local WordPress + DB | Fresh WP install per README.md "Getting started"; theme/mu-plugins come from git, nothing else needs restoring since no real content lives locally |
| `.claude/settings.local.json` | Not required — Claude Code will re-prompt for permissions as needed |

Any uncommitted local work-in-progress is genuinely lost — the existing
habit of committing/pushing at the end of each work session is the actual
mitigation here, not a backup tool.

---

## 7. Post-recovery verification checklist

Run this after *any* of the above, not just DNS changes:

- [ ] Homepage loads over HTTPS with a valid certificate.
- [ ] `wp-login.php` reachable, admin can log in.
- [ ] Coming-soon gate is in the correct state for where the project
      actually is (on if not launched, off if it is).
- [ ] Privacy Policy / Terms of Use pages exist and are linked from the
      footer (they live in the DB — a restore or fresh install can lose or
      never-create them).
- [ ] Submit the intake form and confirm the notification email actually
      arrives (not spam) — this is the one thing most likely to silently
      break and least likely to be noticed quickly.
- [ ] `erin@erinwlegal.com` still sends and receives normally.
- [ ] `npm run purge-cache:prod` (or `:dev`) succeeds, confirming the WP
      Application Password still works.

---

## 8. Known gaps (honest list, as of 2026-09-22)

- Dev site's backup coverage has never been checked.
- No secondary git remote/mirror beyond GitHub.
- No automated DNS zone export — one manual snapshot only.
- Local Laragon database has zero backup (acceptable only while no real
  content lives there — see §1).
- Weekly backup cadence on prod may not be tight enough once real content
  goes live; the Business-tier on-demand upgrade hasn't been evaluated
  against that risk.
- Who holds the GoDaddy login and the Dev-Hostinger login isn't documented
  in this repo (see INFRASTRUCTURE.md §3) — needed before this plan is
  fully executable by someone other than the current developer.
