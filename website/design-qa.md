# Design QA

## Visual truth

- Selected direction: `source-capture/design-options/option-1.png`
- Target language: editorial white canvas, condensed navy display type, red rule accents, square geometry, 53/47 split hero, documentary industrial photography, five-card service band, testimonial strip, and a dark dual-pathway footer.
- Full-page comparison: [selected direction vs final build](design-qa-evidence/comparison-selected-vs-final.webp)
- Focused comparisons: [masthead, hero, and photo rail](design-qa-evidence/comparison-focus-top.webp) and [trust, services, and testimonial](design-qa-evidence/comparison-focus-lower.webp)

The reference and implementation screenshots were placed in the same comparison images before the final judgment.

## Viewports and states reviewed

- Desktop: 1440 × 900, full page assembled from deterministic viewport captures.
- Laptop/tablet: 1024 × 900.
- Mobile: 390 × 844, including navigation open, navigation accordion open, footer, and Escape-to-close.
- Additional overflow checks: 320, 390, 768, 1024, and 1440 CSS pixels.
- Interactive states: desktop dropdown, desktop search, mobile drawer, mobile accordion, keyboard Escape, focus restoration, and breakpoint transitions.
- Production artifact: Vite preview at `/teamtrident/`, including lazy-loaded images and the final base path.

## Comparison history

1. First implementation pass matched the composition but the Oswald hero treatment wrapped too broadly at desktop sizes. This was a P2 typography mismatch.
2. The display face was changed to League Gothic, returning the headline to the reference's tight two-line lockup. See [before](design-qa-evidence/desktop-pass-1-top.png) and [after](design-qa-evidence/desktop-pass-2-top.png).
3. Final accessibility polish darkened the search field boundary, promoted service titles to real headings, restored mobile focus on Escape, and synchronized open navigation/search state across the 960 px breakpoint.
4. Source photography was converted to WebP and the production build was re-captured to verify that crops and visual quality did not change.

## Intentional, content-preserving deviations

- The concept's generated industrial composites were replaced with authentic Team Trident source photography.
- The invented concept testimonial was replaced with the verified testimonial from the source site.
- The concept's fictional coordinates were removed; verified Katy, Texas contact details and worldwide-reach language were retained.
- Search, privacy, contact details, employer/jobseeker resources, social links, and the real jobs destination were retained even where the concept omitted them.
- The footer uses the current year rather than the concept's stale copyright date.
- No fake static jobs list or non-functional contact form was introduced; those journeys hand off to the existing live services.

## Final checks

- No horizontal overflow at 320, 390, 768, 1024, or 1440 px.
- No browser console errors or warnings in desktop and mobile checks.
- No missing or broken images after lazy-loaded sections were brought into view.
- Desktop dropdown and search close with Escape and restore focus.
- Mobile drawer traps focus, locks body scrolling, closes with Escape, restores focus, and releases state correctly when the viewport crosses the desktop breakpoint.
- Production build completed successfully and the built site returned HTTP 200 at `/teamtrident/`.
- The final dependency audit reported zero known vulnerabilities.
- Final independent review found no remaining P0, P1, or P2 issues.

final result: passed
