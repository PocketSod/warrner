# Scripts Reference

Every script in this repo: what it does, what it needs, what it touches.
Run everything from the repo root. All Node scripts are ES modules (`.mjs`).

See [INFRASTRUCTURE.md](INFRASTRUCTURE.md) for what Dev/Prod/the
credentials files refer to.

---

## Quick reference

| Command | Target | Needs | Writes to |
|---|---|---|---|
| `node scripts/screenshot.mjs <url> [label]` | Any URL | Nothing | Local PNG only |
| `npm run deploy` / `deploy:dev` | Dev theme | `.env` | Dev FTP |
| `npm run deploy:mu-plugins` / `deploy:mu-plugins:dev` | Dev mu-plugins | `.env` | Dev FTP |
| `npm run deploy:prod` | Prod theme | `.env.production` | **Prod FTP** |
| `npm run deploy:mu-plugins:prod` | Prod mu-plugins | `.env.production` | **Prod FTP** |
| `npm run purge-cache` / `purge-cache:dev` | Dev cache | `.env` | Dev REST API |
| `npm run purge-cache:prod` | Prod cache | `.env.production` | **Prod REST API** |
| `npm run set-site-icon <image>` | Dev site icon | `.env` | Dev REST API |
| `npm run generate-invoice <data.json>` | n/a | Nothing site-related | Local PDF only |

Bold = writes to the live production site. Everything else either writes
locally or to the Dev/staging site.

---

## `scripts/screenshot.mjs`

Puppeteer screenshot for local visual QA. Not connected to any deploy
target.

```bash
node scripts/screenshot.mjs http://warrner.test <label>
```

- `label` optional.
- Output: `./temporary screenshots/screenshot-N.png` (gitignored).
- Uses the Chrome cache at `C:/Users/wildr/.cache/puppeteer/`.
- Never point this at `file:///` — always a served URL (Laragon must be
  running for local screenshots).

---

## `scripts/deploy.mjs`

FTP upload of a theme or mu-plugins directory. Overwrites changed files and
adds new ones. **Never deletes remote files that were removed locally** —
if a file is renamed or deleted here, prune the stale remote copy by hand
after confirming the replacement works.

```bash
node scripts/deploy.mjs [target] [--prod]
```

- `target`: `theme` (default) or `mu-plugins`.
- `--prod`: reads `.env.production` instead of `.env`. Prints which target
  it's using ("Target: PRODUCTION" or the default) before connecting.
- npm aliases: `deploy` / `deploy:dev` (dev theme), `deploy:mu-plugins` /
  `deploy:mu-plugins:dev` (dev mu-plugins), `deploy:prod`,
  `deploy:mu-plugins:prod`.

**Before the first deploy to any new Hostinger account**, verify
`FTP_REMOTE_ROOT` by listing the FTP login directory rather than assuming
`public_html` — the FTP login directory is often the account home, not the
document root (it wasn't on `demo.toolsandtable.com`; it also wasn't on
the prod account, where the real path turned out to be
`domains/<site-domain>/public_html`). There's no committed script for
this listing step — see "Ad hoc verification scripts" below.

---

## `scripts/purge-cache.mjs`

Calls the authenticated REST endpoint
(`/wp-json/warrner/v1/purge-cache`, registered by
`wp-content/mu-plugins/warrner-cache-purge.php`) to trigger a LiteSpeed
Cache purge-all. Exists because a deploy can silently sit behind stale
cached HTML/assets otherwise.

```bash
node scripts/purge-cache.mjs [--prod]
```

- **The mu-plugin must be deployed first** (`deploy:mu-plugins` /
  `deploy:mu-plugins:prod`) — the endpoint doesn't exist until it is.
- No-ops safely (returns "not active" rather than erroring) if LiteSpeed
  Cache isn't installed/active on the target site.
- npm aliases: `purge-cache` / `purge-cache:dev`, `purge-cache:prod`.

---

## `scripts/set-site-icon.mjs`

Uploads a local image to the WordPress media library and sets it as the
Site Icon, via the REST API. Exists because the site icon is a
database-stored setting (an attachment ID) — FTP can write files but has
no way to touch it.

```bash
node scripts/set-site-icon.mjs <local-image-path>
```

- Reads `.env` only. **Does not currently support `--prod`** — if this is
  ever needed against production, it needs the same `loadTargetEnv` switch
  `deploy.mjs`/`purge-cache.mjs` already use.
- Accepts `.png`, `.jpg`, `.jpeg`.

---

## `scripts/generate-invoice.mjs`

Not connected to the WordPress site at all — a standalone billing tool for
generating PocketSod invoice PDFs.

```bash
node scripts/generate-invoice.mjs invoices/data/<name>.json [output.pdf]
```

- Recurring fields (company info, standing bill-to, payment/closing copy)
  live in `invoices/data/defaults.json`; a per-invoice JSON only needs
  `invoiceNo`, `date`, `due`, `lineItems`, `total`, and optionally
  `addons`. See `invoices/data/README.md`.
- Renders via `scripts/lib/invoice-template.mjs` + Puppeteer.
- Output goes in `/invoices/` (gitignored — contains EIN and client PII,
  never commit).

---

## `scripts/lib/env.mjs`

Not run directly — shared by the scripts above.

- `loadEnv(file)`: minimal `.env` parser, no external dependency. Doesn't
  override variables already set in `process.env`.
- `loadTargetEnv(root, argv)`: the `--prod` switch. Picks `.env.production`
  when `--prod` is passed (erroring clearly if that file doesn't exist),
  otherwise `.env`. Prints which target it picked. Returns `argv` with the
  `--prod` flag stripped, so callers can still read their own positional
  args normally.

---

## Ad hoc verification scripts (not committed to this repo)

Used during the 2026-09-19–22 production setup, living only in the Claude
Code scratchpad directory for that session, not tracked here:

- **`ftp-list.mjs`** — read-only FTP directory listing, used repeatedly to
  verify `FTP_REMOTE_ROOT` before ever writing anything. Same connection
  logic as `deploy.mjs`, just lists instead of uploads.
- **`wpconfig.mjs`** — downloaded prod's `wp-config.php` as a local backup,
  then inserted/could remove the `WARRNER_COMING_SOON` define and
  re-uploaded it. Used once, for the coming-soon gate.
- **`tls.mjs`** — checked a live TLS certificate directly (issuer, subject,
  expiry) when `curl` on this machine gave an ambiguous local TLS error.

These are worth knowing about even though the files themselves aren't in
the repo: the pattern (list before you write, back up before you edit a
live config file, verify a cert independently of the OS's TLS stack if
`curl` errors are ambiguous) is the reusable part. If FTP-root verification
or wp-config edits become routine, `ftp-list.mjs` in particular is a good
candidate to formalize into `scripts/` — it's read-only and has already
been reused several times.

---

## Hostinger account API (not a script, used ad hoc)

Added 2026-09-22, `HOSTINGER_API_TOKEN` in `.env.production`. Not wrapped
in a committed script yet — calls were made inline as needed. Base URL
`https://developers.hostinger.com`, bearer auth. Endpoints used so far:

- `GET /api/hosting/v1/websites` — list websites on the account.
- `GET /api/hosting/v1/wordpress/installations` — get the WordPress
  install ID (`software` param) needed by the plugin endpoints.
- `GET /api/hosting/v1/accounts/{username}/wordpress/{software}/plugins` —
  list installed plugins.
- `POST .../plugins/uninstall` (body: `{ "plugins": ["slug", ...] }`) —
  uninstall plugins, async.
- `GET /api/billing/v1/subscriptions`, `GET /api/domains/v1/portfolio`,
  `GET /api/vps/v1/virtual-machines` — used once to confirm the token's
  actual scope (it's full-account, not limited to one site).

**Not available on this plan/via this API:** SSL/HTTPS management (only
exists under a separate `agency-hosting` product tier) and backups (no
public API endpoint at all, on any tier — hPanel only). Both were verified
directly instead: HTTPS via a raw TLS check against the live site, backups
by looking at the hPanel Backups panel by hand.
