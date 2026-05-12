# Portfolio Site — CLAUDE.md
**Owner:** Alex Ahlstrom | **Last updated:** 2026-05-11 (code audit + refactor)
**Live site:** https://raahlstrom.netlify.app (verify current URL)
**Repo:** https://github.com/raahlstrom/my_portfolio

<!-- HQ-INTEGRATION: managed by HQ, do not edit manually -->
## HQ Integration

This project is registered with HQ at `C:\Users\ahlst\Files\HQ\`.

**Session close:** When wrapping up a session, run `/session-close`. This writes a completion note to `Files/HQ/_incoming/` so HQ stays current on this project's status. No manual copy-paste required.

**Dispatch briefs:** HQ may provide a handoff brief at session start. Read it before beginning work.

**Common formats:** See `Files/HQ/ARCHITECTURE.md` for completion note and dispatch brief formats.
<!-- END HQ-INTEGRATION -->

---

## Stack

- **Framework:** Hugo (v0.92.0 pinned in `netlify.toml`) via R blogdown
- **Theme:** gofolium (custom — layouts in `themes/gofolium/layouts/`)
- **Bootstrap:** Bootstrap 5.2.3 (CDN in `baseof.html`) — Bootstrap 4 local files removed in 2026-05-11 refactor
- **Deployment:** Netlify, auto-deploys on push to `main`
- **Build command:** `hugo` (or `Rscript -e "blogdown::build_site()"` locally)
- **Content:** Markdown in `content/` + homepage data in `data/en/homepage.yml`

## Codebase State (post 2026-05-11 refactor)

The following issues were fixed in the code audit session. The codebase is now clean for the content refresh.

### Fixed
| Issue | What changed |
|-------|-------------|
| Bootstrap conflict | Removed Bootstrap 4 from `config.toml` plugins; all layouts now use Bootstrap 5 (`data-bs-*` attributes) |
| Dead external link | Removed hardcoded `datawizkid.com` link from `index.html` about section |
| `public/` in git | Added `public/` and `resources/_gen/` to `.gitignore`; removed 73 tracked files with `git rm --cached` |
| Invalid config | Removed `disableLanguages = [true]`; fixed `summaryLength` and `paginate` to integers |
| Dead GA snippet | Removed legacy Google Analytics code (`.Site.Params.google_analitycs_id` typo) from `footer.html` |
| Deprecated template | `list.html` updated from `.Data.Pages` → `.Pages` |
| Duplicate scripts | All JS loading consolidated into `baseof.html`; `footer.html` script block removed; `stats.min.js` removed |
| Invalid HTML | `<div class="nav-underline">` moved outside `<ul>` in `header.html` |
| SEO meta | Added Open Graph, Twitter Card, canonical URL, JSON-LD Person schema; fixed title format; removed `hugo.Generator` |
| Accessibility | Skip-nav link, `aria-label`/`aria-expanded`/`aria-controls` on hamburger, meaningful `alt` on images, `aria-label` on social links, `autocomplete` on contact form |
| Inline styles | Banner section padding extracted to `.banner-section` class in `_main.scss` |
| Forestry remnants | `.forestry/` directory deleted |
| SRI hashes | Added `integrity` + `crossorigin` to Glide.js and Bootstrap 5 CDN resources |

### Decisions made
- Bootstrap 5 is the canonical version; do not add Bootstrap 4 back
- Script loading: `baseof.html` is the single source of truth for all `<script>` tags
- `public/` is never committed; Netlify builds from source
- jQuery is not used and not loaded (script.js is pure vanilla JS)

## File Map — Where Things Live

| What | Where |
|------|-------|
| **Homepage copy** (bio, expertise, education) | `data/en/homepage.yml` |
| **Blog posts** | `content/blogs/<slug>/index.md` |
| **Projects** | `content/projects/<slug>/index.md` |
| **Talks / presentations** | `content/talks/<slug>/index.md` |
| **Images** | `static/images/` (global) or alongside content files |
| **Theme layouts** | `themes/gofolium/layouts/` — edit here for structural changes |

The homepage is almost entirely driven by `data/en/homepage.yml`. That's the primary file to edit for bio, expertise, education, and contact info.

---

## Current State (as of 2026-05-11) — What's Stale

The site was last meaningfully updated in 2023. **The entire homepage needs a refresh before Bain starts.**

### Homepage (`data/en/homepage.yml`)
- **Title:** Still says "MBA Candidate @ University of Virginia's Darden School of Business" — graduated May 2026
- **Bio:** References SimpsonScarborough Assoc. Director of Data Products as current job — 3+ years old
- **Expertise:** Six items all focused on higher ed marketing analytics — needs post-MBA/Bain identity
- **Location:** "Charlottesville, Virginia" — moving to Washington, D.C., June 2026
- **Education:** Dates correct (2024–2026) but should show as graduated

### Projects (3 total, all 2022 — SimpsonScarborough era)
- CMO Study Dashboard
- COVID-19 College Reopening Dashboard
- Website Heatmap Dashboard

### Blogs (8 posts, all 2022–2023)
- All higher ed analytics / GA4 / data empowerment content
- Prometheus University series (historical project — 3 posts)
- Nothing about education equity, policy, MBA, or entrepreneurship

### Talks (4, all 2022–2023)
- All HigherEdWeb conference talks on data/analytics for higher ed marketing

---

## Refresh Priorities

### 1. Homepage Rewrite — HIGH PRIORITY (`data/en/homepage.yml`)
- **Title:** Lead with Bain + education equity identity, not MBA candidate
- **Bio:** Rewrite around: Bain consultant (starts June 22 DC), education equity focus, builder (Wayfinder Education, EasyGrades), MBA+MEd graduate May 2026, transition from data analytics to strategy + impact
- **Expertise:** Replace higher-ed-marketing items with: Education Policy & Equity, Strategy Consulting, Product Development (ed-tech), Nonprofit/Social Impact, Data & Research, Entrepreneurship
- **Education:** Mark both degrees complete (May 2026)
- **Location:** Washington, D.C.

### 2. New Projects to Add
| Project | Description |
|---------|-------------|
| Wayfinder Education | Ed nonprofit built on SGO/ECCA research; co-founded with Prof. Evie Elson; live site at practicum-website.netlify.app |
| EasyGrades | React + Node.js gradebook app for teachers with AI assistant; deployed on Railway |
| Practicum Website | Public site for Wayfinder Education research |
| Noir Bar (optional) | Organic small-batch protein bar company; minority co-founder role |

### 3. New Blog Content (future, when time allows)
- Education equity + SGO policy piece (based on Wayfinder research)
- Reflections on dual MBA/MEd — bridging business and education
- Product-building / ed-tech posts

### 4. Structural Considerations
- gofolium theme is functional but dated — redesign is in scope for this refresh
- Headshot at `static/images/headshot.jpg` may need updating (newer photo available)
- Verify LinkedIn + GitHub social links are configured in `config.toml`

---

## How to Run Locally

```r
# In R:
library(blogdown)
blogdown::serve_site()
```

Or with Hugo CLI:
```
hugo server -D
```

## How to Deploy

```bash
git add .
git commit -m "update"
git push origin main
# Netlify auto-deploys on push to main
```

---

## Key Context for This Refresh

Alex is:
- **Graduated:** MBA + MEd, UVA Darden, May 2026
- **Starting:** Bain & Company, Washington D.C., June 22, 2026
- **Building:** Wayfinder Education (ed nonprofit with Evie Elson), EasyGrades (ed-tech gradebook app)
- **Background:** data analytics at SimpsonScarborough (2020–2024) → MBA/MEd → consulting + education equity
- **Identity:** at the intersection of education, technology, and business; builder; advocate for education equity
- **Moving:** Charlottesville → Washington, D.C., June 2026

The site should reflect the transition from "higher ed data analyst + MBA student" to "Bain consultant who builds things in education." The SimpsonScarborough work is legitimate history — keep it, but it's no longer the lead story.

## What NOT to Change
- Blog post URLs / slugs (preserve existing links)
- Existing SimpsonScarborough project entries (valid history — just deprioritize)
- Theme core files unless doing a full redesign
