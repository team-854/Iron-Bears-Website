# Grid and hero verification

Verified against the local production build at http://localhost:3002 after this revision. The latest production server remains running for preview. Existing source information and raster assets were preserved.

- Production build and TypeScript compilation pass. Scoped ESLint on changed TSX files passes; git diff whitespace check passes.
- History: all 13 records have equal 4:3 outer image frames and equal caption rows. Desktop 1440px frames are approximately 413 by 310px; tablet 768px frames 330 by 247px; mobile 390px frames 327 by 245px. Column counts are 3 / 2 / 1. Differences below 0.02px are grid rounding. Portrait and low-resolution originals use contain inside the same frame.
- Sponsors: all 16 logo plates have equal 16:9 frames at 1440, 768 and 390px; original logo proportions are retained. No spanning last-item exceptions remain.
- Home season previews have identical 4:3 frames and aligned captions. They share equal desktop/tablet columns and stack evenly on mobile.
- Hero: enabled desktop captures at scroll positions 0, 300, 1100 and 1650px show the circular opening, expansion, full photograph and handoff into the story. Reverse scrolling returns to the exact initial circle. Manual Build/Compete scene selection updates the active image and accessible description.
- Pause removes both home pins. A discovered stale-style issue after Pause/resize was fixed by restoring original layer styles and SVG attributes and invalidating cached transforms. Verified desktop-to-mobile breakpoint exit and return: 0 mobile pins, 2 restored desktop pins, responsive clip paths restored.
- No horizontal overflow at 1440, 1024, 768, 390 or 320px. Visual captures include 1024x768, 768x1024, 390x900 and 320x740. Narrow buttons and the two-line hero title remain intact. Short mobile screens use the documented minimum height and flow normally.
- History filter results: 2020s = 4, 2010s = 6, 2000s = 3, All seasons = 13; pressed states update correctly.
- All five desktop navigation destinations reset to scrollY 0. The hero's same-page anchor lands at #our-team, 102px below the viewport top, clearing the sticky header.
- Emulated OS reduced motion with no saved override produces the Enable motion control, reduced state and zero pins. Light-theme reduced-motion opening captured successfully. Browser left at dark home with motion enabled.
- Zero production console errors or page errors in exercised flows. Next.js emits non-blocking unused CSS preload warnings. The production build retains the pre-existing Tailwind config module-format warning.

Full-page captures use paused motion so pin spacer distance is not mistaken for layout gaps. Dedicated enabled-motion frames document the hero. No external deployment, Lighthouse rerun or cross-browser/device performance claim is made in this revision.
