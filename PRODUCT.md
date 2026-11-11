# Iron Bears Robotics

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Sponsors, students, and the wider community are equally important audiences.

- Sponsors need to understand the team, see its work and existing supporters, and find how to offer support.
- Students need to understand the team and the opportunities to learn through robotics.
- Community visitors need to learn about the team, explore its history, and find contact information.

## Product Purpose

The public website for FRC Team 854, Iron Bears Robotics, explains the team, attracts support, and showcases its history. It represents a student-led robotics team at Martingrove Collegiate Institute in Toronto, Ontario.

Success means serving all three audiences: making the team's work understandable, helping visitors find ways to connect or support it, and making its robot history accessible. Quantitative success targets are not yet defined.

## Positioning

The site tells the story of this specific school robotics team through its own robots, students, activities, and supporters. Team photography and season records provide the evidence for that story.

## Operating Context

The team designs, builds, and programs robots for FIRST Robotics Competition. Existing content describes CAD and fabrication, electronics and wiring, programming and autonomy, outreach, sponsorship, and mentorship.

Visitors browse a public informational website. Sponsorship, mentoring, collaboration, and event inquiries are directed to the team's published contact information. Season details are available through links to Team 854 on The Blue Alliance.

## Capabilities and Constraints

- Existing routes are Home (`/`), About (`/about`), Sponsors (`/sponsors`), History (`/history`), and Contact (`/contact`).
- The existing application uses Next.js App Router, React, TypeScript, and Tailwind CSS, with shared navigation and footer components.
- The History page features the latest listed season and presents 13 selected robot seasons with photos and external links to The Blue Alliance. Visitors can filter the archive by the 2020s, 2010s, or 2000s and return to all seasons; the visible count updates with the selection. Archive photos appear in an equal-sized responsive grid, preserving each record's image framing. The archive is selective; its earliest entry does not establish the team's founding date.
- The Sponsors page recognizes supporters and offers a sponsorship package through contact. No downloadable package, online donation checkout, or student registration flow is currently implemented.
- Team and school email addresses are actionable mailto links. Instagram and GitHub link to the published team destinations. YouTube links directly to the user-supplied Team854 channel at https://www.youtube.com/@Team854.
- The home page offers Compete, Build, and Connect photo selections with matching captions in a full-width photographic hero. The default theme is light; visitors can choose a light or dark theme, retained locally when browser storage is available. Navigation includes a mobile menu and a keyboard skip link.
- Build, Code, and Lead appear together as workshop cards in normal page flow. Local photo transitions, hover effects, and archive-filter animations provide interaction feedback. Motion automatically follows the operating system's reduced-motion setting. The site does not use scroll-pinned scenes or photo parallax.
- Sponsor relationships, tier amounts, contact details, and season entries are maintained in source. Treat them as changeable content, not permanent product promises; confirm changes with the team.

## Brand Commitments

Preserve the Team 854 / Iron Bears identity, Martingrove Collegiate Institute affiliation, existing team photos, logo, and sponsor recognition. The user confirmed these commitments and specified no additional mandatory requirements during initialization.

## Evidence on Hand

- `public/images/logo.png`: existing Iron Bears logo.
- `public/images/about/hero.jpg`: the earlier 2025 robot hero photo, retained as an original asset but no longer displayed.
- `public/images/about/teamphoto.jpg`: earlier team group photo, retained in the workshop and Connect hero scene.
- `public/images/2026/`: five updated photos supplied by the user on November 10, 2026. `stemleycup-22.jpg` is the default Compete hero, captioned as the 2026 REBUILT season at STEMley Cup; `stemleycup-49.jpg` illustrates the 2026 History feature. Both STEMley Cup photos visibly credit the user-identified photographer, `@jfreemanphotos`. `robot-blue.jpg` illustrates the home season preview, `robot-field.jpg` illustrates the 2026 archive entry, and `team.jpg` illustrates About and Contact. Original image files are preserved unchanged.
- `public/images/about/demonstration.jpg`: robot demonstration.
- `public/images/about/assembly1.jpg`: hands-on robot assembly.
- `public/images/history/`: robot photos for selected seasons from 2003 through 2026; their year, game, image-framing, and external-link mappings live in `src/data/seasons.ts`. `src/components/HistoryArchive.tsx` implements decade filtering.
- `public/images/sponsors/`: existing sponsor logos; all 16 sponsor records, recognition tiers, amounts, links, and contrasting logo-ground choices live in `src/data/sponsors.ts`, shared by Home and Sponsors.
- `src/app/about/page.tsx`: team description, mission, values, and activities.
- `src/app/contact/page.tsx`: published team and school contact information and social references.

These files are existing project evidence, not independent verification of current sponsorships or contact information. Do not invent awards, testimonials, impact statistics, sponsorship benefits, or a founding date. Default Next.js/Vercel README text and scaffold graphics are not team brand guidance.

## Product Principles

1. Give sponsors, students, and the wider community equal consideration in product decisions.
2. Explain robotics and team activities clearly enough for visitors unfamiliar with FIRST.
3. Ground the team's story in authentic photos, season records, and confirmed facts.
4. Make ways to support or contact the team easy to find while preserving sponsor recognition.
5. Keep the team's identity and school affiliation consistent across the site.
