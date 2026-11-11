---
version: 1
slug: "src-app-page-tsx"
primary_target: "src/app/page.tsx"
related_targets: ["src/app/about/page.tsx", "src/app/history/page.tsx", "src/app/sponsors/page.tsx", "src/app/contact/page.tsx"]
---

# Simbotics reference-led redesign

Mode: Persuade. The user requested a complete style replacement using https://www.simbotics.org/ as the reference while keeping the current site's images, color scheme, and actual content. The named reference fixes the direction; no random concept selection or former seed governs this revision. The five routes, thirteen season records, sixteen sponsors, published contact details, and equal student/sponsor/community priorities remain intact. This contract supersedes the previous circular hero and pinned-motion revision.

THESIS: Present Team 854 with the confidence and clarity of a competition team: an immediate photographic identity, emphatic typography, and a direct path from the robots to the people and supporters behind them.

OWN-WORLD: Preserve Iron Bears orange, charcoal, warm light neutrals, the original logo, authentic team photographs, and full-color sponsor marks. The default canvas is light; the visitor's dark option remains. Dark navigation, photo hero, inner-page introductions, and footer anchor both themes. Italic extra-bold Barlow Condensed carries large identity titles; uppercase Manrope organizes section headings and cards. Short orange rules, modest corners, and equal media wells repeat across routes.

STORY: Meet Team 854 in competition; establish the student-led school team; show Build, Code, and Lead together; preview the latest robots; recognize the supporters; invite contact. About expands mission, values, making, and community. History offers the latest listed robot and a filterable selected archive. Sponsors recognizes every existing supporter before inviting partnership. Contact exposes the published email and social routes.

FIRST VIEWPORT: A sticky charcoal header with the original mark, five navigation links, motion/theme controls, and a Get involved action above a full-width competition photograph. The left side carries the two-line TEAM 854 / IRON BEARS title, orange second line, team description, and Meet the team / Sponsor us actions. Dark directional gradients keep this copy readable. The bottom strip pairs a live caption with Compete, Build, and Connect buttons. The image fills a rectangular stage; it does not use a circular aperture, engineering orbit, decorative grid, or scroll pin. At mobile widths the menu replaces desktop links and the caption sits above the scene controls.

FORM: A reference-led team website built from full-width bands and regular cards in normal flow. The global container is capped at 1360px with 40px desktop gutters. Home shows three workshop cards, two robot previews, three featured sponsor marks, and an orange contact invitation; these groups stack on narrow screens. About uses paired photos and text plus a responsive values grid. History keeps 4:3 image wells in a three/two/one-column archive with decade filtering. Sponsors uses native tier anchors and headings above equal 16:9 logo plates in a three/two/one-column grid. Contact pairs email cards with a team-photo section and ruled social links. All source-specific image framing and logo grounds remain authoritative.

Motion budget: native scrolling, local CSS transitions, and the archive's bounded Web Animations. Hero photo selection crossfades over 650ms; card photographs have small hover scale changes; archive repositioning takes 420ms or 300ms. There is no GSAP scroll sequence, parallax, continuous decorative motion, or automatic scene rotation. `MotionSystem` only updates the effective reduced-motion state. The persistent preference control, OS media query, and archive animation cancellation remain in place.

FINISH: Source tokens and implemented components are recorded in DESIGN.md and .impeccable/design.json. The implementation owner's production-browser checks report successful loads on all five routes, no broken images or horizontal overflow at 1440px and 390px, and no overflow at 320px, 768px, or 1024px. Scene selection, mobile-menu Escape/focus return/route closing, decade counts (13/4/6/3), theme and motion persistence, all sixteen sponsor marks, sponsor anchors, and 404 recovery were checked. Build and TypeScript checks passed. The independent final review accepted the composition and confirmed fixes for focus contrast on dark bands and mobile navigation after desktop resizing. Screenshots are under `.impeccable/review/simbotics/`. These results were supplied by the implementation and review agents; this documentation pass inspected source. Preserve the original raster files and their provenance.
