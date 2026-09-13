# Motion redesign verification

Production preview: http://localhost:3002. This report covers the second redesign, with scroll-controlled layouts and effects.

## Build and content

- Final `npm run lint`, `npm run build` (including TypeScript and all static routes), and `git diff --check` passed.
- Independent source review confirmed all 13 season records and 16 sponsor records, their original images and links, tier amounts, both email addresses, Instagram, GitHub, and the explicitly labelled YouTube search.
- All 34 existing rasters retain embedded origin metadata. The provenance scan reports zero missing origins. No image pixels changed during this redesign.

## Browser verification

- All five routes captured and inspected at 1440×900 and 390×900. No horizontal overflow or missing images. Full-page overview captures use the actual Pause motion control so that pinned scroll distances do not produce misleading blank screenshot regions.
- Separate active-motion production captures show the initial hero, its scroll-driven reframe, and Build / Code / Lead at three scroll positions. Each chapter reaches opacity 1 while its siblings reach 0, with the stage anchored below the header.
- Pause removes both desktop pins, shows all three chapter descriptions at opacity 1, cancels archive Web Animations, and stops CSS animation. OS reduced-motion produces the same unpinned reading layout. Mobile uses no GSAP pins.
- All archive filters return their expected counts: 13 / 4 / 6 / 3. Full-motion filtering starts a bounded layout transition; pausing cancels it. New image targets register and removed targets clean up.
- Escape dismisses mobile navigation and restores focus. Selecting Home closes the menu. Client navigation from Home to About removes both home pin spacers after the route commits.
- Light-theme About was inspected at desktop width. Theme and motion preferences persist across navigation.
- Final resting opacity of every homepage `data-reveal` element is 1, including below-fold content.
- Production browser console and page-error checks returned zero errors. An earlier development-only hydration warning was caused by QA changing lazy-image attributes before hydration; final production captures waited for the page to settle before loading screenshot imagery.

## Lab performance

One mobile Lighthouse run scored Performance 92, Accessibility 96, Best Practices 100, and SEO 100. FCP 1.36s, LCP 2.93s, TBT 10ms, CLS 0.028; total transferred payload approximately 552 KiB. These are simulated local lab results, not field measurements.

The saved Lighthouse report predates the final fixes: unrevealed text now remains fully opaque to preserve contrast, and explicit whitespace separates visible brand and robot-caption text for accessible-name matching. The resulting opacity and text were verified in the browser without rerunning Lighthouse.

Implementation uses the lifecycle and responsive cleanup patterns in the official [GSAP ScrollTrigger documentation](https://gsap.com/docs/v3/Plugins/ScrollTrigger/) and [GSAP matchMedia documentation](https://gsap.com/docs/v3/GSAP/gsap.matchMedia/).

## Finish handoff

The initial independent review requested removal of a small visible About label and an update to the design-system documents. About's grouping heading remains available to assistive technology and is visually hidden; the desktop, mobile, and light captures were replaced for the verdict pass. The reviewer’s final verdict is saved separately.
