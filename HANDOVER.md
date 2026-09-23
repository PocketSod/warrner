# Handover Plan

What "handing this project over to Erin" actually means, concretely: what
gets transferred, what doesn't and why, and the step-by-step for when it
happens. Defined 2026-09-23, not yet executed. Keep this updated as scope
or status changes.

For the underlying account list this draws from, see
[ACCOUNTS.md](ACCOUNTS.md). For the code/infra this covers, see
[INFRASTRUCTURE.md](INFRASTRUCTURE.md).

---

## Scope: what's included

| Item | Form it takes |
|---|---|
| **Project directory** | The full contents of `D:\Projects\Warrner`, minus secrets (`.env`, `.env.dev`, `.env.production`, `.claude/`) — theme code, mu-plugins, scripts, and every doc in this repo (`AGENTS.md`, `CHANGELOG.md`, `ROADMAP.md`, `ACCOUNTS.md`, `INFRASTRUCTURE.md`, `DISASTER-RECOVERY.md`, `SCRIPTS.md`, this file, `README.md`). |
| **Full git history** | A `git bundle` (single file, complete commit history) included alongside the project directory. Doesn't require access to the developer's GitHub account — see "What's deliberately excluded" below for why this is split out from GitHub access itself. |
| **Hostinger account (Prod + Dev)** | The account itself — already in Erin's name (confirmed 2026-09-23) — plus working access to it. Covers both `erinwlegal.com` and `dev.erinwlegal.com`, everything stored there: WordPress database/content, media uploads, the deployed theme/plugin files, backups. |
| **GoDaddy account** | **Status unconfirmed — see Open Questions below.** If it's the developer's account, the domain registration itself needs to move to Erin's own account, not just get a login shared. |
| **Microsoft 365** | Already entirely hers — nothing to do here. |

## What's deliberately excluded, and why

| Item | Why it's excluded | What replaces it |
|---|---|---|
| **Laragon / local WordPress install** | Local dev tooling only. Its database has no real content — per the original go-live plan, no real client content has ever lived in any environment's database except what's entered directly on production. Nothing here is a unique asset. | A new developer sets up their own local environment (any stack, not necessarily Laragon) from `README.md`'s "Getting started" section, against the project directory being handed over. |
| **GitHub account access** | It's the developer's own account/tool, not project-specific. No need to grant Erin or a future developer a seat on it. | The git bundle (above) carries everything of value, full history included, without touching the account itself. If a future developer wants their own remote, they push the bundle to a repo of their own. |
| **`demo.toolsandtable.com` / "ToolsandTable" Hostinger account** | Not Warrner-specific — retired from this project 2026-09-22, kept as the developer's own reusable demo asset for other clients. | Not applicable. |
| **Old FTP/API/Application Password credentials** (`.env*` files) | Credentials tied to accounts that are transferring anyway; a new developer with real Hostinger access generates their own fresh ones rather than inheriting old secrets. | Regenerate fresh from Hostinger's hPanel, WordPress's own Application Passwords screen, once the account access below is in place. |

---

## Open questions (must be resolved before this plan is "complete")

- **Who holds the GoDaddy account?** Same question already answered for
  Hostinger, not yet answered for GoDaddy. This is arguably higher-stakes
  than Hostinger, since it controls both the website's domain and Erin's
  live email simultaneously.
- **Hostinger billing.** Account is confirmed in Erin's name; the
  developer's payment method is currently on file. Decide if/when this
  moves to a payment method in her own name.
- **Does Erin want her own separate Hostinger login**, or is receiving
  the existing admin credentials sufficient? A separate login is cleaner
  (her own password, her own 2FA, revocable independently) but is an
  extra step versus just handing over what already exists.

---

## Step-by-step, when it's time

Not urgent today — this is the reference for when a handover (full or
partial) actually happens.

1. **Resolve the open questions above first.** Don't start executing
   transfers around an unconfirmed domain-ownership question.
2. **Hostinger:** either reset the password on the existing admin login
   and hand the new password to Erin directly (not over email/chat), or
   add her as a separate user if Hostinger's plan supports it. Move
   billing to her payment method if that's been decided.
3. **GoDaddy:** whatever the resolution to the open question above
   turns out to require — could be nothing (if already hers), could be
   a registrar-level account transfer (if not).
4. **Generate the git bundle**: `git bundle create warrner-full-history.bundle --all`
   from the project directory, on a day everything's committed and
   pushed.
5. **Copy the project directory**, excluding `.env`, `.env.dev`,
   `.env.production`, `.claude/`, and anything else `.gitignore` already
   excludes (`node_modules/`, `temporary screenshots/`, etc. — none of
   it is source, all regenerable).
6. **Hand over both** (the directory copy + the bundle) via whatever
   channel makes sense at the time (external drive, a private file
   share — not email, given the bundle contains full history including
   anything ever committed).
7. **Regenerate every credential** a new developer will need, fresh,
   from the now-transferred Hostinger account: FTP password (or confirm
   the existing one still works and rotate it if there's any doubt who's
   seen it), a new WordPress Application Password per site, a new
   Hostinger API token if the account-level API is still needed.
8. **Verify independently**: have the new developer (Erin's own, or
   confirm Erin herself) actually log into Hostinger and GoDaddy without
   the original developer's help, before considering this done. A
   handover that still depends on the original developer for "one more
   thing" isn't finished.

---

## Maintenance note

This is a plan, not a completed transfer — nothing above has been
executed as of 2026-09-23. Update the Open Questions section as they get
answered, and add a dated note here (or in CHANGELOG.md, if the actual
transfer happens) once any step is actually carried out.
