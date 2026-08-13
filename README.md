# Warrner Immigration Law — WordPress Site

Local development site for Warrner Immigration Law, running on [Laragon](https://laragon.org/).

## Local environment

- **URL:** http://warrner.test
- **Document root:** `D:\laragon\www\Warrner` (this repo)
- **Stack:** Laragon (Apache, PHP 8.3, MySQL 8.4)
- **Database:** `warrner` (see `wp-config.php`, not committed)

## Getting started

1. Start Laragon.
2. Visit http://warrner.test.

Admin dashboard: http://warrner.test/wp-admin

## Repo conventions

- WordPress core, default themes, and uploads are gitignored — see `.gitignore`.
- Custom theme code lives under `wp-content/themes/`.
- Brand imagery lives in `public/images/` (not part of the WP install itself, kept as source assets for theme work).
