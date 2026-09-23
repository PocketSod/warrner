# Roadmap

A sequenced plan, not a snapshot. [PROJECT-STATUS.md](PROJECT-STATUS.md) tells
you where things stand right now; this tells you what to do next and in what
order, plus improvements worth making that aren't blocking anything. Update
this file as items close or the order changes; keep the *why* in
[CHANGELOG.md](CHANGELOG.md) as always.

Each item names who it's actually waiting on: **Erin**, the **developer**
(you), or something **Claude** can do once unblocked.

---

## Phase 1 — Finish what's already in flight

Nothing here blocks anything else in this phase; they can happen in any order.

1. **Verify DKIM is actually signing.** *(Developer/Erin)* She enabled it
   2026-09-22 but it's unconfirmed — send a test via mail-tester.com, or
   check a sent message's headers for `DKIM-Signature: d=erinwlegal.com`.
   See CHANGELOG.md's 2026-09-22 DKIM entry.
2. **Resolve SMTP AUTH for the intake form.** *(Erin, then Claude)* Enable
   Authenticated SMTP on her mailbox, check whether an app password is
   available. Two outcomes:
   - App password works → hand it over, Claude adds it to production's
     `wp-config.php` as `WARRNER_SMTP_PASSWORD`, test the intake form.
   - Not available / blocked by Conditional Access → decide whether to
     pursue the Microsoft Graph API alternative (see Recommended
     Improvements below) instead of continuing to fight SMTP AUTH.
3. **Confirm `siteurl` matches `home`.** *(Claude, quick check)* `home` is
   confirmed `https://erinwlegal.com`. `siteurl` specifically wasn't
   independently re-verified this session (it isn't exposed by the default
   WP REST settings schema) — check Settings → General on production, or
   have Claude check via a small script, and fix if it's still `http://`.

---

## Phase 2 — Content & legal readiness

This is what's actually gating launch — the infrastructure has been ready
since 2026-09-22. Everything here needs Erin's input; Claude can build
whatever's needed once she provides it.

4. **Replace `[PLACEHOLDER]` copy on the homepage.** *(Erin)* Years
   practicing, clients served, law school, AILA membership — real numbers,
   not drafted content.
5. **Attorney CPT entry.** *(Erin)* At minimum her own bio and a headshot.
   The CPT exists and is empty.
6. **Decide on practice-area pages.** *(Erin + developer)* `functions.php`
   currently returns hardcoded placeholder URLs for six practice areas.
   Either build out the six real pages before launch, or strip the
   homepage links to them temporarily — decide which, since shipping the
   links as-is means visitors hit 404s.
7. **Attorney Advertising footer link.** *(Erin + developer)* Currently
   points to `#`. Needs either real page content or a firm decision that
   it's not needed for this jurisdiction (worth confirming, not assuming).
8. **Privacy Policy / Terms of Use — attorney review.** *(Erin)* Drafted
   2026-09-18, functional but not reviewed by an attorney (herself or
   otherwise) for accuracy.
9. **Spanish translation review.** *(Erin or a qualified reviewer)* First
   machine-assisted draft (142 strings) exists locally only, not yet
   deployed anywhere but Laragon. Needs a fluent, ideally
   immigration-law-literate, reviewer pass before it's trustworthy —
   generic MT gets legal terms like "removal defense" wrong. See the
   2026-09-16 CHANGELOG entry for the Polylang decision behind this.

---

## Phase 3 — Launch mechanics

Do this only after Phase 2 is genuinely done — turning the gate off before
content is ready means visitors see an unfinished site, not a controlled
reveal.

10. **Recreate Privacy Policy / Terms of Use pages on production.** *(Claude,
    once text is finalized)* They live in each site's database, not this
    repo — production doesn't have them yet even though Local/demo did.
11. **Turn off the coming-soon gate.** *(Claude, on explicit go-ahead)*
    Remove the `WARRNER_COMING_SOON` line from production's `wp-config.php`.
    This is the actual "go live" moment — treat it as a deploy requiring
    explicit approval, same as everything else production-impacting.
12. **Submit the sitemap to Google Search Console** (and Bing Webmaster
    Tools, optional). *(Developer)* WordPress's core `/wp-sitemap.xml` is
    already enabled by default; this domain has never been indexed under
    this host before, so it needs a fresh property/verification.
13. **Decide on analytics.** *(Erin + developer)* Google Analytics or
    similar wasn't scoped in the original plan — worth deciding now while
    `inc/seo.php`'s `<head>` output is already being touched for the
    sitemap/verification step, rather than as a separate later change.
14. **Post-launch verification pass.** *(Developer)* Real browser check of
    SSL, homepage parity with what was verified pre-launch, mobile layout,
    a real intake-form submission confirming delivery, confirm
    `erin@erinwlegal.com` still sends/receives normally. See
    DISASTER-RECOVERY.md §7's checklist, it applies here too even though
    this isn't a recovery.

---

## Phase 4 — Multilingual rollout

Not blocking initial launch — can happen right after, or in parallel once
Phase 2's translation review is done.

15. **Install Polylang on production** (and demo/dev if still wanted
    there). *(Claude)* Currently only set up on Local.
16. **Deploy the reviewed Spanish translation.**
17. **Add the language switcher** to the nav, styled to match brand tokens
    per the original plan doc, not Polylang's default styling.
18. **Test thoroughly in Spanish**: layout breakage (Spanish runs
    15-30% longer than English), diacritics rendering, `<html lang>`
    switching, intake form end-to-end in Spanish, mobile.

Full detail: `docs/Production-Launch-and-Multilingual-Plan.docx`
("Plan 2"), kept local-only.

---

## Recommended improvements

Not blocking launch. Worth doing, roughly in priority order.

### Security / durability
- **Decide on the Microsoft Graph API mail path** if SMTP AUTH turns out
  to be blocked (Phase 1, item 2). More setup, but doesn't put a real
  password in a server config file and won't be silently killed by
  Conditional Access. See the conversation from 2026-09-22 for what this
  involves (app registration, `Mail.Send` permission, an Application
  Access Policy scoping it to just her mailbox).
- **`HOSTINGER_API_TOKEN` expires ~2026-10-22.** *(Developer)* One-month
  token, will need regenerating in hPanel → API before then or any
  Hostinger-API-dependent work (theme/plugin management on Dev/Prod)
  stops working. Consider whether a longer expiration is worth the
  tradeoff now that its blast radius is understood (see
  INFRASTRUCTURE.md §5).
- **Document the two undocumented account logins.** *(Developer)* Who
  holds GoDaddy, and who holds the "ToolsandTable" Hostinger account —
  both flagged in DISASTER-RECOVERY.md §8 as gaps that block someone
  other than the current developer from executing that plan.
- **No secondary git remote.** GitHub is the sole copy of history beyond
  local working directories. Low effort to add a mirror if this ever
  matters more than it does for a project this size.
- **Re-export the GoDaddy DNS zone** now that the `A` record and
  `dev.erinwlegal.com` record have been added, so the "known good"
  reference file reflects current state, not just the pre-cutover one
  from 2026-09-19.
- **Check demo.toolsandtable.com's backup coverage.** Never checked this
  session (its role changed mid-session, from Warrner Dev to a general
  asset, before this got followed up on).
- **Revisit backup cadence before real content goes live.** Production is
  on weekly automatic backups (Premium plan default); decide if that's
  tight enough once Erin is entering real client-adjacent content
  directly, or whether the Business-tier on-demand upgrade is worth it.

### Code quality / review
- **Review `inc/ai-lead-intake.php`'s stubbed AI lead-scoring.** Not
  wired in on purpose — needs a reviewed pass on API key storage and
  consent language before it ever touches real client PII, since it
  would send name/email/phone/case description to a third-party API.
- **General code review pass** before launch — this codebase hasn't had
  a dedicated `/code-review` pass in this session; worth one before
  content goes live, covering the areas AGENTS.md's Code Review Standards
  call out (escaping, input sanitization, function length/complexity).
- **`hostinger` (Hostinger Tools) plugin** is still active on Prod/Dev,
  kept deliberately since removing it might break hPanel's one-click
  login or security scanning — this was never actually confirmed either
  way. Worth a definitive answer if it ever becomes worth the risk to
  find out.

### Housekeeping
- **`demo.toolsandtable.com` reuse.** When that account gets used for a
  different project, remove `WARRNER_DEMO_RETIRED` from its
  `wp-config.php` and redeploy whatever the new project needs over it.
- **Stock WordPress themes** (Twenty Twenty-Three/Four/Five) are still
  installed-but-inactive on Dev and Prod. Harmless, but could be removed
  for a cleaner install if anyone's auditing plugin/theme lists.
