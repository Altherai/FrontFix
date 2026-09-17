# FrontFix Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build and publish a polished, mobile-first FrontFix marketing site with unlisted client-preview routes.

**Architecture:** A zero-dependency static website using semantic HTML, one shared CSS system, and minimal vanilla JavaScript. Public marketing content lives at the repository root; prospect previews live under `/preview/<slug>/` and are intentionally absent from public navigation.

**Tech Stack:** HTML5, CSS3, vanilla JavaScript, GitHub Pages

**Spec:** `docs/superpowers/specs/2026-09-17-frontfix-site-design.md`

## Global Constraints
- No fake testimonials, client logos, case studies, or performance claims.
- No revenue, lead, ranking, or conversion guarantees.
- Preview pages must use `noindex,nofollow` and remain unlinked from the public site.
- Mobile layout must be first-class, not a collapsed desktop afterthought.
- No paid runtime dependencies or services.

---

### Task 1: Build public homepage

**Files:**
- Create: `index.html`
- Create: `styles.css`
- Create: `script.js`
- Create: `favicon.svg`

**Interfaces:**
- Consumes: design spec copy and structure.
- Produces: production-ready public marketing surface.

- [ ] Create semantic homepage sections and accessible navigation.
- [ ] Implement responsive design tokens, layout, typography, CTA, browser-preview visuals, pricing/offer, FAQ, and footer.
- [ ] Add minimal JS for mobile navigation and FAQ interactions.
- [ ] Validate all internal anchors and mailto CTAs.

### Task 2: Add private-by-link prospect previews

**Files:**
- Create: `preview/paul-sharland-roofing/index.html`
- Create: `preview/gt-clacton/index.html`
- Create: `preview/tg-details/index.html`
- Create: `preview/finger-shine-cleaning/index.html`
- Create: `preview/royal-reflection/index.html`

**Interfaces:**
- Consumes: prospect-specific verified business details from the outreach workflow.
- Produces: direct-link concept pages for prospect follow-ups.

- [ ] Add `noindex,nofollow` metadata to every preview.
- [ ] Keep all preview routes absent from homepage navigation and public site structure.
- [ ] Preserve a clear disclaimer that each page is a FrontFix concept, not the business's official website.

### Task 3: Add launch metadata and deployment

**Files:**
- Create: `robots.txt`
- Create: `.github/workflows/pages.yml`
- Modify: `README.md`

**Interfaces:**
- Consumes: root static site.
- Produces: deployable GitHub Pages site.

- [ ] Add crawler guidance and explicit preview exclusion.
- [ ] Add Pages deployment workflow using the root repository as the artifact.
- [ ] Rewrite README around FrontFix purpose and preview policy.
- [ ] Verify repository contents and deployment workflow syntax.
