---
name: Iron Bears Robotics
description: The reference-led photographic website for FRC Team 854.
colors:
  accent: "#f26100"
  accent-ink: "#121311"
  accent-hover: "#ff8a3d"
  accent-text: "#a53d00"
  background: "#f5f5ef"
  surface: "#ebede5"
  surface-raised: "#ffffff"
  foreground: "#191c16"
  muted: "#585f50"
  line: "#c8cec0"
  dark-background: "#121311"
  dark-surface: "#1b1d19"
  dark-surface-raised: "#242720"
  dark-foreground: "#f4f3ed"
  dark-muted: "#b2b5aa"
  dark-line: "#393d34"
  dark-accent-text: "#ff8a3d"
typography:
  display:
    fontFamily: '"Barlow Condensed", "Arial Narrow", sans-serif'
    fontSize: "clamp(80px, 9vw, 128px)"
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: "-0.01em"
  headline:
    fontFamily: '"Barlow Condensed", "Arial Narrow", sans-serif'
    fontSize: "clamp(60px, 7vw, 88px)"
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "-0.01em"
  title:
    fontFamily: '"Manrope Variable", sans-serif'
    fontSize: "clamp(30px, 3.1vw, 42px)"
    fontWeight: 800
    lineHeight: 1.18
    letterSpacing: "-0.025em"
  body:
    fontFamily: '"Manrope Variable", sans-serif'
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.75
  reading:
    fontFamily: '"Manrope Variable", sans-serif'
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.85
  label:
    fontFamily: '"Manrope Variable", sans-serif'
    fontSize: "12px"
    fontWeight: 800
    lineHeight: 1.4
    letterSpacing: "0.045em"
rounded:
  filter: "3px"
  control: "4px"
  card: "5px"
  round: "50%"
spacing:
  small-gap: "14px"
  card-padding: "24px"
  card-gap: "28px"
  gutter: "40px"
  mobile-gutter: "24px"
  section: "96px"
  tablet-section: "64px"
  mobile-section: "56px"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.accent-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "14px 24px"
  button-primary-hover:
    backgroundColor: "{colors.accent-hover}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.foreground}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "14px 24px"
  button-hero-secondary:
    backgroundColor: "#12131140"
    textColor: "{colors.dark-foreground}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "14px 24px"
  button-dark:
    backgroundColor: "{colors.dark-background}"
    textColor: "{colors.dark-foreground}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "14px 24px"
  navigation-link:
    textColor: "{colors.dark-muted}"
    height: "78px"
  icon-button:
    backgroundColor: "transparent"
    textColor: "#d2d5cc"
    rounded: "{rounded.round}"
    size: "40px"
  scene-button:
    backgroundColor: "transparent"
    textColor: "#c3c6bc"
    padding: "18px 0"
  scene-button-selected:
    textColor: "#ffffff"
  era-filter:
    backgroundColor: "{colors.background}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.filter}"
    padding: "10px 16px"
  era-filter-selected:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.accent-ink}"
  season-card:
    backgroundColor: "{colors.background}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.control}"
---

# Design System: Iron Bears Robotics

## Overview

**Creative North Star: "Team 854, on the field and in the workshop."**

The user chose Simbotics as the visual reference while retaining Iron Bears photography, color identity, and existing content. The implemented system pairs a broad photographic introduction and emphatic italic display type with clear, uppercase section headings and regular image-card grids. Light neutral reading sections alternate with tinted bands; orange actions and rules connect them to the fixed charcoal header, hero, page introductions, and footer.

This is a code-led record of the reference-led redesign. Shared styles live in `src/app/globals.css`, with route-specific layouts in the adjacent CSS modules. It supersedes the former circular hero, engineering rings, and pinned scroll choreography. The surface composition and verification plan live in `.impeccable/surfaces/src-app-page-tsx.md`; this documentation does not certify visual QA.

**Key Characteristics:**

- Existing robot, student, workshop, and sponsor imagery remains the evidence for the team story.
- Barlow Condensed provides italic display titles; Manrope supplies uppercase section headings, reading text, and controls.
- A light default theme and locally retained dark option share the same orange identity.
- Full-width color bands and restrained rounded cards organize normal document flow.
- Scene selection, decade filtering, and theme selection retain visible and accessible state; motion follows the operating system preference.

## Colors

### Primary

Team orange carries primary actions, image-edge rules, selected filters, the home banner, and the invitation band. Dark accent ink keeps text readable on orange fills. The text accent is darker on the light canvas; the dark theme switches that text role to the lighter orange also used for hover fills.

### Neutral

The unprefixed frontmatter colors describe the default light theme. The dark-prefixed colors map to the overrides under `data-theme="dark"`. Background is the reading canvas, surface marks alternating bands, surface-raised grounds cards and images, foreground carries primary text, muted carries supporting copy, and line supplies borders.

Header and footer use fixed dark-surface colors, and the photographic hero and route introductions use fixed dark-background colors in both themes. White and dark logo plates preserve the contrast of original sponsor marks; the Home and Sponsors components retain their specific local dark grounds.

The sidecar's tonal ramps are synthesized preview metadata, not additional application tokens.

**The Theme Roles Rule.** Use semantic color properties for theme-changing content; preserve the fixed dark identity bands and the individual sponsor-logo grounds.

**The Original Marks Rule.** Keep sponsor marks in their original colors, proportions, and contrasting grounds.

## Typography

The locally imported Barlow Condensed faces are upright bold (700) and italic extra-bold (800). The italic face supplies the home title, route titles, and orange team banner; the upright face supplies the compact brand wordmark. Manrope Variable supplies the rest of the interface, including extra-bold uppercase section headings. Display and headline italics are recorded as metadata in the sidecar because the frontmatter typography schema has no font-style field.

The hero uses a tight two-line title with an orange second line. Shared page titles use the headline role, while About and Contact have local size adjustments. The section-title role is deliberately smaller and wider than the condensed hero. Reading copy has a maximum measure of 65ch. Eyebrows are uppercase labels with wide tracking and a short skewed orange bar; buttons and navigation also use uppercase text.

At 1100px and 800px, the home title takes explicit sizes of 108px and 96px. At 600px it uses `clamp(72px, 17vw, 98px)`; local page titles retain their own narrow-screen rules. Do not apply the display font to the archive years or sponsor tiers: those now use Manrope.

**The Type Roles Rule.** Use italic Barlow Condensed for the large identity titles and Manrope for section headings, cards, reading, and controls.

## Layout

The centered container has a maximum width of 1360px, including fixed 40px side gutters. Gutters reduce to 24px at 800px and 18px at 360px. Shared section spacing steps from 96px to 64px and then 56px at the 800px and 600px breakpoints. Full-width photographs and color bands sit outside the container.

The sticky header has a 78px content height, becoming 72px at 800px. At that breakpoint the desktop links yield to a mobile menu; the separate header contact action disappears at 1100px. The home hero spans the available width with a cover photograph behind left-aligned text, actions, and a bottom caption/scene-control strip. Desktop minimum height is `clamp(660px, calc(100svh - 80px), 820px)`, with explicit tablet and mobile heights. It has no circular mask or scroll pin.

Home uses a three-part orange banner, split team story, three workshop cards, two season previews, three featured sponsor marks, and an orange invitation. Workshop cards, season previews, and the home sponsor strip stack at 600px. About uses ordinary two-column image/text sections and a four-column values list, reducing the values to two columns at 1100px and one at 480px. Its major image/text sections stack at 800px.

History uses a latest-season feature followed by decade controls and a regular archive grid. The grid has three columns, two at 1023px, and one at 599px; all archive image wells remain 4:3. Sponsors has horizontal tier jump links and tier headings above three-column logo grids, reducing to two columns at 899px and one at 599px. Logo plates are consistently 16:9. Contact pairs two email cards, a team photograph and invitation, then ruled social rows; the email cards stack at 600px. There are no sticky mission columns or sticky sponsor tier labels.

## Elevation & Depth

Tonal bands, dark photo overlays, borders, and orange image-edge rules provide most separation. Workshop cards alone use a faint authored shadow (`0 5px 20px #12131108`). The hero uses directional dark gradients for text contrast. Navigation and footer are opaque dark surfaces, with no backdrop blur.

The global keyboard-focus treatment is a 3px outline with a 5px offset. It follows accent-text on theme-changing surfaces; fixed dark identity bands set a light-orange focus-ring override so focus stays visible in the default light theme. History and sponsor links use their local 2px outline with the same offset. Hover states change border, fill, or text color; selected photographs also have small scale feedback. These effects do not change page structure.

## Shapes

Cards and image frames are rectangular with restrained 4px or 5px corners; filters retain 3px corners. The theme control is round, while the mobile-menu control uses the ordinary control radius. Buttons are compact rounded rectangles. Orange lower borders on workshop, robot, and sponsor images repeat a 4px rule. Navigation and scene selection use short orange underlines.

Cover crops fill ordinary photographs. The updated 2026 team photo on About and Contact uses a square cover frame with `object-position: 50% 100%`, cropping the ceiling while retaining the full group. Other team images and sponsor marks use contain sizing where the source calls for it. Each archived season's `preserveFrame` and `position` fields remain authoritative; contained archive images also receive interior padding.

The user-supplied 2026 blue-bumper robot photo appears in the home season preview, and the field photo appears in the 2026 History feature and archive entry. These additions preserve the 2025 robot as the default homepage hero, all other hero scene choices, and the earlier workshop group photo. Display framing uses CSS; the three supplied files remain unchanged.

**The Image Frames Rule.** Keep repeated media wells consistent within each group, and preserve the authored crop or contain setting for every record.

## Components

- **Actions:** the shared primary button uses orange and dark ink, with a lighter orange hover. Secondary actions use a neutral outline; the hero secondary uses a fixed translucent dark fill and pale outline. The dark variant sits on the orange invitation band. Shared actions have a 49px minimum height, with 14px by 24px padding and uppercase Manrope labels. Inline arrow icons move 3px on hover.
- **Text links:** orange text, an inline arrow, and a 44px minimum height create a lighter action. Hover adds an underline.
- **Navigation:** desktop links are muted until hovered or current; the current route has an orange underline. Mobile links show current-route orange text. The menu exposes expanded state, closes on route selection, and returns focus to its trigger on Escape. An open mobile menu is hidden when the viewport grows beyond 800px. The theme control uses a 40px circular outline, shrinking with the narrow header.
- **Scene selector:** Compete, Build, and Connect update the full-width photograph and polite live caption. Buttons expose pressed state and an orange selected underline. Photo changes use a 650ms opacity transition and never advance automatically.
- **Workshop and home robot cards:** image wells sit above padded captions, separated by an orange lower image border. Hover scales the cover image to 1.035 over 400ms. The three workshop descriptions remain visible together in normal document flow.
- **Archive:** filters expose pressed state and a live visible count. Selection rearranges cards using bounded Web Animations: 420ms for nearby repositioning or 300ms for an incoming record. Season cards use 4:3 images, Manrope years, game captions, and external-link arrows. Cover images scale to 1.025 on hover; preserve-frame images retain contain framing.
- **Sponsors:** all sixteen records retain their marks, tiers, amounts, external links, and optical sizing. Logo plates use fixed contrasting grounds and contain sizing. Hover changes the card border and caption; the logo does not animate. Tier jumps remain native anchors.
- **Preferences and motion:** the theme choice is retained locally when storage is available. Motion automatically follows the operating system's `prefers-reduced-motion` setting, with no site-level control or stored motion override. `MotionSystem` reflects that setting onto the document. It creates no GSAP timelines, parallax, scroll pins, or scroll interception. Reduced motion disables smooth scrolling and shortens CSS transitions; active archive animations are cancelled. The OS media query also suppresses CSS animation and transition duration.
- **Contact:** two bordered email cards lead to actual mailto destinations. The social links point directly to the team's Instagram, GitHub, and YouTube destinations; YouTube displays the @Team854 handle. There is no contact form or input component.

## Do's and Don'ts

### Do:

- **Do** preserve the existing Iron Bears logo, team photography, school identity, and complete sponsor recognition.
- **Do** keep theme-aware content on semantic color properties and retain the fixed dark identity bands.
- **Do** retain accessible selected states, keyboard focus, the theme control, automatic reduced-motion support, and each image's authored framing.
- **Do** use normal document flow and the existing responsive image-card grids for this reference-led design.

### Don't:

- **Don't** reintroduce the superseded circular hero, engineering rings, pinned workshop sequence, or photo parallax.
- **Don't** recolor sponsor marks or remove their contrasting grounds.
- **Don't** substitute display typography for the Manrope section headings and card labels.
- **Don't** present the selective archive as a complete team history or infer a founding date from its earliest entry.
