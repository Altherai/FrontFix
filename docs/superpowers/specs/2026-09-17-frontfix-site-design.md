# FrontFix Website Design

## Purpose
FrontFix is a focused homepage-improvement service for small and local businesses. The website itself must act as the first proof of quality because the business does not yet have a public client portfolio.

## Positioning
Primary promise: **A clearer first impression.**

FrontFix improves the page customers see first so the business is easier to understand, easier to use on mobile, and easier to contact. The site must avoid guarantees about revenue, leads, rankings, or conversion increases.

## Audience
Small service businesses such as roofing, plumbing, detailing, cleaning, trades, salons, and similar local businesses with an existing website that needs a focused homepage improvement.

## Information architecture
1. Header with brand, What we fix, How it works, Pricing, FAQ, and primary review CTA.
2. Hero with a direct benefit-led headline and a code-native before/after browser-style preview.
3. What we fix section: message clarity, contact paths, mobile usability, visual hierarchy, trust presentation, and practical performance cleanup.
4. Three-step process: send site, receive free review, approve implementation.
5. Generic before/after example clearly labeled as fictional.
6. Focused offer section describing one homepage, mobile cleanup, CTA/contact path, copy hierarchy, one revision, and 24–48h target delivery after access/approval.
7. FAQ covering platforms, access, calls, guarantees, revisions, and scope.
8. Final CTA and footer.

## Visual direction
Dark near-black/navy base, crisp white typography, restrained electric-blue accent, subtle borders, generous spacing, minimal cards, and no fake dashboards. High-contrast, modern, conversion-focused studio feel. Responsive design must feel intentional on iPhone-size screens.

## Demo previews
Client concepts live under `/preview/<slug>/`. They are not linked from the public homepage, are excluded from the sitemap/navigation, and include `robots` metadata `noindex,nofollow`.

## Commercial constraints
- No fake testimonials, client logos, case studies, or performance claims.
- No guarantee of revenue, ranking, leads, or conversion uplift.
- Free review / mini concept precedes paid work.
- Production implementation begins only after client approval and agreed deposit.
- One revision is included in the initial focused offer.
- Calls are optional; the process can be handled by email.

## Technical approach
Static HTML, CSS, and minimal vanilla JavaScript. No paid APIs, analytics, frameworks, or runtime dependencies are required for launch. Deploy through GitHub Pages from the repository.
