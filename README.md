# Warrner Legal — WordPress Site

Source repo for the Warrner Legal WordPress theme/plugins, developed locally against a [Laragon](https://laragon.org/) install.

## Split-repo layout

This repo (`D:\Projects\Warrner`) is **source only** — theme/plugin code, scripts, docs. It is not served directly.

- **This repo:** `D:\Projects\Warrner\` — git repo, source of truth.
- **Served install:** `D:\laragon\www\Warrner\` — Laragon-served WordPress site, **not** version controlled. WordPress core, uploads, cache, and anything WP/Laragon generates lives only there.

Edits made here don't appear on the site until synced — see **Editing Protocol** in [AGENTS.md](AGENTS.md).

## Local environment

- **URL:** http://warrner.test
- **Stack:** Laragon (Apache, PHP 8.3, MySQL 8.4)
- **Database:** `warrner` (see `wp-config.php` in the served install, not committed)

## Getting started

1. Start Laragon.
2. Edit theme/plugin code under `wp-content/` in this repo.
3. Sync into the Laragon install (see AGENTS.md Editing Protocol).
4. Visit http://warrner.test — admin dashboard at http://warrner.test/wp-admin.

## Screenshot tooling

```bash
npm install
node scripts/screenshot.mjs http://warrner.test <label>
```

## Repo conventions

- WordPress core, default themes, and uploads are gitignored — not tracked here at all.
- Custom theme code lives under `wp-content/themes/warrner/`.
- Brand imagery lives in `public/images/` (source assets for theme work, not synced automatically).

## Remote

`origin` → https://github.com/PocketSod/warrner.git — single `main` branch.
