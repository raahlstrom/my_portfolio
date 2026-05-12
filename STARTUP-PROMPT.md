# Portfolio Refactor — Claude Code Startup Prompt

> **How to use:** Copy everything below the horizontal rule and paste it as your first message in a Claude Code session opened in this project root.

---

## THE PROMPT

You are working on Alex Ahlstrom's personal portfolio site. Your job in this session is to perform a **full code audit and refactor** of the existing codebase. This is a preparatory refactor — you are **not** changing any content (copy, bio text, project descriptions, expertise items, page text) and **not** changing any visual styles (colors, fonts, spacing, layout). Those changes come in the next session. Your job is to make the code clean, correct, modern, and maintainable so that the content refresh can happen on a solid foundation.

Read `CLAUDE.md` before doing anything else. It contains the full project context.

---

## WHAT THIS SITE IS

Hugo (v0.92.0, pinned) + R blogdown + custom "gofolium" theme. Deployed on Netlify via GitHub (`raahlstrom/my_portfolio`), auto-deploys on push to `main`. Content lives in:
- `data/en/homepage.yml` — homepage sections (bio, expertise, education, contact)
- `content/blogs/`, `content/projects/`, `content/talks/` — markdown content files
- `themes/gofolium/layouts/` — all Hugo templates
- `themes/gofolium/assets/scss/` — SCSS source files
- `config.toml` — site config, plugins, menus, social links

---

## KNOWN ISSUES TO FIX (confirmed through audit — address all of these)

### 1. Bootstrap Version Conflict — CRITICAL
The site is simultaneously loading Bootstrap 4 (local files in `static/plugins/bootstrap/`) and Bootstrap 5.2.3 (CDN in `themes/gofolium/layouts/_default/baseof.html`). This is actively breaking the mobile navigation.
- `themes/gofolium/layouts/partials/header.html` uses Bootstrap 4 data attributes: `data-toggle="collapse"` and `data-target="#navigation"` — these don't work with Bootstrap 5
- `config.toml` loads `plugins/bootstrap/bootstrap.min.css` and `bootstrap.min.js` (Bootstrap 4) via the plugins array
- `baseof.html` also loads Bootstrap 5 from CDN
- **Fix:** Decide on one version and standardize. Given Bootstrap 5 is already in `baseof.html`, migrate to Bootstrap 5 fully: remove local Bootstrap 4 from `config.toml`, update `header.html` to use `data-bs-toggle` and `data-bs-target`, audit all templates for any other Bootstrap 4-specific markup

### 2. Dead External Domain Link — HIGH
`themes/gofolium/layouts/index.html` contains a hardcoded link to `https://datawizkid.com/blogs/2022-10-05-why-data-matters/` — a different domain entirely. This is a leftover from a previous site. Remove this hardcoded link and make the "Learn more" CTA either configurable from `data/en/homepage.yml` or remove it entirely from the template.

### 3. `public/` Directory in Git — HIGH
The `public/` directory (Hugo build output) is committed to the repository. It should not be version-controlled — Netlify builds from source. Add `public/` to `.gitignore` and remove it from git tracking with `git rm -r --cached public/`.

### 4. Deprecated/Dead Config Keys — MEDIUM
- `config.toml` has `disableLanguages = [true]` — this is incorrect syntax. The value should be a list of language codes (strings), not a boolean. Since the site is English-only, this line should be removed or corrected.
- `themes/gofolium/layouts/partials/footer.html` references `{{ .Site.Params.google_analitycs_id }}` — note the typo "analitycs". This key does not exist in `config.toml` (which uses `gtm_id`), so this legacy GA snippet has never fired. Remove the dead GA snippet entirely — the site uses GTM.
- `config.toml` has `summaryLength = "4"` — the value should be an integer, not a string.

### 5. Deprecated Hugo Template Functions — MEDIUM
- `themes/gofolium/layouts/_default/list.html` uses `.Data.Pages` — this is deprecated in Hugo. Replace with `.Pages`.
- Check all templates for other deprecated Hugo functions. Common ones in Hugo 0.92 era: `.URL` on menu items (use `.PageRef` or `.Page.RelPermalink`), `.Hugo.Version` (use `hugo.Version`). Run `hugo --printUnusedTemplates` and check `hugo doctor` output after fixing.

### 6. Duplicate and Conflicting Script Loading — MEDIUM
Scripts are loaded in two places: `footer.html` (the plugin loop + main script) and `baseof.html` (Glide.js + Bootstrap 5 + a second `/js/script.js` tag). This means `script.js` is loaded twice. Consolidate all script loading into one place in `baseof.html`. Remove the `footer.html` script block. Remove `particles/stats.min.js` from `config.toml` — it's a debug FPS counter that has no place in production.

### 7. Invalid HTML Structure — MEDIUM
`themes/gofolium/layouts/partials/header.html` contains `<div class="nav-underline"></div>` as a direct child of `<ul class="navbar-nav mx-auto">`. A `<div>` cannot be a child of `<ul>` — it's invalid HTML. Move it outside the `<ul>`, or convert it to an `<li>` if it needs to be inside the list, or restructure the nav markup.

### 8. Missing SEO Meta Tags — MEDIUM
`themes/gofolium/layouts/partials/head.html` is missing standard SEO tags. Add:
- Open Graph: `og:title`, `og:description`, `og:image`, `og:url`, `og:type`
- Twitter Card: `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`
- Canonical URL: `<link rel="canonical" href="{{ .Permalink }}">`
- Structured data: JSON-LD `Person` schema on the homepage (name, url, jobTitle, sameAs for LinkedIn/GitHub)
- Page title format: currently just `{{ .Title }}` — should be `{{ .Title }} | {{ .Site.Title }}` (except homepage which should just be the site title + tagline)
- Remove `{{ hugo.Generator }}` — it exposes your Hugo version publicly with no benefit

### 9. Accessibility Gaps — MEDIUM
Fix the following without changing visual appearance:
- `header.html`: add `aria-label="Toggle navigation"` to the hamburger button; add `aria-expanded="false"` (toggled by JS)
- `header.html`: add `aria-controls="navigation"` to the toggle button
- `index.html` (about section): `<img src="{{ .image | absURL }}" ... alt="">` — the headshot has an empty alt. Make it use the site author name: `alt="{{ .Site.Params.author }}"` or a configurable field
- `single.html`: `<img src="{{ . | absURL }}" alt="">` — article hero images have empty alt. Use the page title as fallback: `alt="{{ .Title }}"`
- `footer.html` social links: `<a href="..."><i class="ti-linkedin"></i></a>` — add `aria-label="{{ .title }}"` to each anchor using the social item's title field
- Add a skip-navigation link as the first element in `baseof.html` body: `<a href="#main-content" class="skip-nav sr-only sr-only-focusable">Skip to content</a>` and add `id="main-content"` to the `<main>` element (or first content section)
- Contact form inputs: add `autocomplete` attributes (`autocomplete="name"`, `autocomplete="email"`, `autocomplete="off"` for message)

### 10. Inline Styles in Templates — LOW
`themes/gofolium/layouts/index.html` banner section has `style="padding-bottom: 140px !important; padding-top: 40px !important"` as an inline style. Extract these to the SCSS (create a `.banner-section` utility class or add to the relevant section rule in `_main.scss`). Keep the visual result identical.

### 11. Forestry CMS Remnants — LOW
`.forestry/` directory contains CMS configuration for Forestry, which shut down in April 2023. These files serve no purpose. Delete `.forestry/` entirely and remove from git tracking.

### 12. jQuery Loaded But Unused by Bootstrap 5 — LOW
`config.toml` loads `plugins/jQuery/jquery.min.js` via the plugins array. Bootstrap 5 does not require jQuery. Audit whether any custom JS in `themes/gofolium/assets/js/script.js` uses jQuery. If not, remove jQuery from `config.toml`. If yes, migrate those specific usages to vanilla JS and then remove jQuery.

### 13. CDN Resources Without Integrity Hashes — LOW
`baseof.html` and `head.html` load external CDN resources (Glide.js, Bootstrap 5) without Subresource Integrity (SRI) hashes. Add `integrity` and `crossorigin="anonymous"` attributes to each external CDN link/script. You can generate SRI hashes at https://www.srihash.org/ or use the hash values published by the CDN providers.

---

## WHAT YOU MUST NOT CHANGE

- Any text content in `data/en/homepage.yml` (bio, title, expertise items, education, contact info)
- Any text content in `content/**/*.md` files
- Any visual styles — colors, fonts, font sizes, spacing values, layout proportions
- The URL structure of existing pages (slugs must not change)
- The overall visual appearance of the site as rendered in a browser

If you are uncertain whether a change affects visual appearance, err on the side of not making it and flag it for the next session.

---

## PROCESS

Work through the issues in the order listed above (critical → high → medium → low). For each fix:
1. State what you're fixing and why
2. Make the change
3. Confirm what files were modified

After all fixes, run `hugo` (or check if it builds without errors) to verify the site still builds. If Hugo isn't available in the shell, note this and describe how to verify locally.

Update `CLAUDE.md` at the end of the session to reflect the new state of the codebase (what was fixed, current Hugo version target, any new decisions made).

---

## SETUP CHECK (do this first)

Before starting fixes, run the following and report what you find:
1. `hugo version` — confirm Hugo is available and report the version
2. `git status` — confirm clean working tree before starting
3. `git log --oneline -5` — orient yourself on recent commits
4. List all files currently tracked in `public/` with `git ls-files public/ | head -20` — confirm the scope of the public/ cleanup
5. Check whether `themes/gofolium/assets/js/script.js` exists and read it — needed to assess jQuery dependency

Then proceed with fixes.
