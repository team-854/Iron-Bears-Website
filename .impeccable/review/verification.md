# Redesign verification

Production preview: `http://localhost:3002`.

- `npm run lint`: passed.
- `npm run build`: passed, including TypeScript and static generation for all five routes and the custom 404.
- All five routes captured at 1440px and 390px: no horizontal overflow, missing images, or browser runtime exceptions.
- Additional light-theme captures: Home and Sponsors at 1440px, History at 390px; inspected with the same image and overflow checks.
- Mobile navigation: opens, Escape closes and returns focus to the menu button, selecting History navigates and closes the menu.
- Archive filters: All seasons 13, 2020s 4, 2010s 6, 2000s 3; pressed states and live counts update correctly.
- Hero: Compete, Build, and Connect each select exactly one photograph, update caption and alternative text, and expose the selected state.
- Theme: light/dark switching persists across navigation and reload.
- Missing route: custom 404 and a working Back to home action.
- Content: all 13 supplied seasons and 16 sponsor records preserved; source images exist.

One Lighthouse mobile lab run of the production homepage recorded Performance 91, Accessibility 100, Best Practices 96, and SEO 100. FCP 0.76s, LCP 3.51s, TBT 34ms, CLS 0.030. These are simulated lab results, not field measurements. The saved report predates three targeted corrections: high fetch priority on the hero, brand accessible names matching visible text, and Vercel Speed Insights loading only in a Vercel deployment. Their resulting HTML was checked without rerunning Lighthouse. Local analytics script requests are absent.

Independent finish review disposition: **ship** for the ten supplied dark-theme desktop/mobile captures. No material design fixes requested. No quality-bar image or decision comp existed for this code-first build; the reviewer assessed the documented direction contract.
