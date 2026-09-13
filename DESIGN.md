---
name: Iron Bears Robotics
description: The reviewed photographic website for FRC Team 854.
colors:
  "accent": "#f26100"
  "accent-ink": "#121311"
  "accent-text": "#ff8a3d"
  "background": "#121311"
  "surface": "#1b1d19"
  "surface-raised": "#242720"
  "foreground": "#f4f3ed"
  "muted": "#b2b5aa"
  "line": "#393d34"
  "light-background": "#f5f5ef"
  "light-surface": "#ebede5"
  "light-surface-raised": "#e0e3d8"
  "light-foreground": "#191c16"
  "light-muted": "#585f50"
  "light-line": "#c8cec0"
  "light-accent-text": "#a53d00"
typography:
  display:
    fontFamily: "\"Barlow Condensed\", \"Arial Narrow\", sans-serif"
    fontSize: "clamp(72px, 7.5vw, 96px)"
    fontWeight: 700
    lineHeight: 0.94
    letterSpacing: "-0.018em"
  headline:
    fontFamily: "\"Barlow Condensed\", \"Arial Narrow\", sans-serif"
    fontSize: "clamp(64px, 8vw, 96px)"
    fontWeight: 600
    lineHeight: 0.98
    letterSpacing: "-0.018em"
  title:
    fontFamily: "\"Barlow Condensed\", \"Arial Narrow\", sans-serif"
    fontSize: "clamp(48px, 6.2vw, 88px)"
    fontWeight: 600
    lineHeight: 0.98
    letterSpacing: "-0.018em"
  body:
    fontFamily: "\"Manrope Variable\", sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.65
  reading:
    fontFamily: "\"Manrope Variable\", sans-serif"
    fontSize: "clamp(15px, 1.2vw, 17px)"
    fontWeight: 400
    lineHeight: 1.8
  label:
    fontFamily: "\"Manrope Variable\", sans-serif"
    fontSize: "13px"
    fontWeight: 750
    lineHeight: 1.4
rounded:
  "media": "0px"
  "control": "3px"
spacing:
  "8": "8px"
  "12": "12px"
  "16": "16px"
  "20": "20px"
  "24": "24px"
  "28": "28px"
  "32": "32px"
  "48": "48px"
  "64": "64px"
  "gutter": "clamp(24px, 4.5vw, 68px)"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.accent-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "14px 22px"
  button-primary-hover:
    backgroundColor: "{colors.accent-text}"
  button-hero-secondary:
    backgroundColor: "#121311a8"
    textColor: "{colors.foreground}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "14px 22px"
  text-link:
    textColor: "{colors.foreground}"
    typography: "{typography.label}"
    padding: "9px 0"
  navigation-link:
    textColor: "{colors.foreground}"
    height: "78px"
  icon-button:
    backgroundColor: "transparent"
    textColor: "{colors.foreground}"
    rounded: "{rounded.control}"
    size: "42px"
  scene-button:
    backgroundColor: "transparent"
    textColor: "{colors.muted}"
    padding: "20px 0"
  scene-button-selected:
    textColor: "{colors.foreground}"
  era-filter:
    backgroundColor: "transparent"
    textColor: "{colors.foreground}"
    rounded: "{rounded.control}"
    padding: "12px 18px"
  era-filter-selected:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.accent-ink}"
  motion-control:
    backgroundColor: "transparent"
    textColor: "{colors.foreground}"
    rounded: "{rounded.control}"
    size: "42px"
  season-card:
    textColor: "{colors.foreground}"
    rounded: "{rounded.media}"
---

# Design System: Iron Bears Robotics

## Overview

**Creative North Star: "A photographic programme for student-built machines and the people behind them."**

The reviewed redesign uses genuine robot, workshop, and team photography with condensed display lettering and varied editorial sections. Charcoal, orange, and pale neutral text form the default theme; a complete light theme reverses the neutral roles while retaining the team accent. The original logo and full-color sponsor marks remain identity assets.

This record describes the current motion and grid revision: a circular photographic hero that expands across its stage, one Build/Code/Lead workshop sequence, uniform archive and sponsor grids, anchored sponsor tiers, and an orange home invitation. Shared tokens live in src/app/globals.css; route modules define local layouts and MotionSystem.tsx coordinates GSAP ScrollTrigger. The current surface contract is .impeccable/surfaces/src-app-page-tsx.md.

**Key Characteristics:**

- Locally loaded Barlow Condensed headings and Manrope body text.
- Equal rectangular frames within repeated image groups, with a circular home hero and bespoke SVG engineering rings.
- Theme-aware text, outlines, and controls with persistent light/dark selection.
- Real scene selection, decade filtering, and direct contact links.
- Native scrolling with bounded photographic motion and a persistent Pause/Enable motion control.

## Colors

### Primary

Accent orange supplies primary actions, selection fills, and navigation marks. Accent-ink remains dark on orange controls in both themes. Accent-text is the lighter orange used for text and focus in the dark theme; light-accent-text supplies the darker text and focus color in the light theme.

### Neutral

Background is the canvas; surface and surface-raised separate sections and media wells. Foreground carries primary text, muted carries supporting copy, and line supplies dividers and neutral control outlines. The light-prefixed entries are the source's overrides under data-theme="light", not an additional independent palette.

The competition hero keeps its dark photographic treatment in both themes. Sponsor grounds are also fixed: Sponsors uses white and dark plates, while Home uses slightly warmer light and dark plates. Their exact local values remain in the component styles.

**The Theme Roles Rule.** Use the semantic text and surface properties when an element changes theme; retain fixed photographic overlays and sponsor grounds where the source explicitly does so.

**The Original Marks Rule.** Keep sponsor marks in their original colors and use each record's light or dark ground; do not recolor the marks to fit the page.

## Typography

Display and headline roles use locally loaded Barlow Condensed; the imported faces are weights 600 and 700. Manrope Variable supplies body, supporting copy, and controls, including the intermediate weights used in navigation and actions. The frontmatter records the shared type rules, with the display role describing the home hero and the headline/title roles describing general headings.

General headings are uppercase with balanced wrapping. Shared section titles now scale to 88px; the hero and general page title roles remain capped at 96px. Route titles and the narrow layouts retain their local adjustments; the home hero title becomes 48px at 380px and below. Body copy has a maximum measure of 65ch, with shorter measures in split layouts. Supporting labels and captions commonly use 12–14px; condensed years and sponsor tier headings provide a distinct local hierarchy.

**The Two Type Roles Rule.** Use Barlow Condensed for display headings and Manrope for reading and controls; preserve local type size adjustments at narrow widths.

## Layout

The centered container explicitly limits both width and max-width to 1456px, including fluid gutters from the spacing tokens. Full-width photographic and orange sections sit outside this container. Major sections use generous fluid spacing, with the exact responsive value defined by the section.

Home pairs its circular competition image with an asymmetric team story, masked workshop chapters, two equal 4:3 season previews, a sticky supporter introduction, and an orange invitation. The paired previews have no vertical offset or image parallax and stack at 600px. About combines a panoramic frame with a sticky mission column. History places horizontal decade filters above an even three-column grid, changing to two columns below 1024px and one below 640px. All archive images use 4:3 frames and the same caption structure, with reserved two-line game-label space. Sponsors places sticky tier labels beside two-column logo rows; every plate is 16:9 without a spanning final item. Sponsor headings become static by 899px and marks become one column by 599px. Contact uses large email and social rows.

The sticky header is 78px high, becoming 72px at 800px, where desktop navigation gives way to the mobile menu. The home hero stage uses viewport height minus the header, with a 640px minimum on desktop and larger source-defined minimums for stacked tablet/mobile content. Its initial circular photo sits beside the title within an SVG orbit of segmented rings and tick marks over a fine grid. On small screens this composition remains static and unpinned, with photograph, scene buttons, and actions accessible. Reserved image frames combine cover crops and contain sizing for marks and selected archive photographs.

## Elevation & Depth

The interface has no authored card shadow or decorative blur system. Tonal sections, photographic contrast, and thin borders establish separation. The hero layers dark directional gradients over its photograph for legibility. The sticky header uses a 95% background-color mix without backdrop blur.

Keyboard focus uses an accent-text outline (2px) with an offset (5px), increased to 6px on sponsor links. Selection uses orange with dark text; scrollbar colors follow the line and canvas properties. These browser-surface treatments follow the active theme where appropriate.

## Shapes

Repeated media frames and logo plates are square-cornered and equal-sized within each group. The home hero is the circular exception: its clip expands to fill the stage during the desktop scroll sequence. Main controls and decade filters use the control radius. Filters wrap horizontally and form a two-column control grid below 640px. Dividers and outlined controls use thin borders (1px); selected navigation and scene controls use short orange rules. Full-width sections and unboxed captioned images carry most page structure.

**The Real Frames Rule.** Keep repeated image groups in equal rectangular frames, retain the authored circular home hero, and honor each season's preserveFrame and position settings so the robot stays readable.

## Components

- **Primary and secondary actions:** shared primary links use orange with dark text and a lighter hover fill. The home hero's secondary link uses a fixed dark translucent fill and pale text. Shared actions have a minimum height of 52px; the mobile hero reduces its actions to 48px.
- **Text links:** an inline label and Phosphor arrow sit above a thin rule, with theme-aware orange on hover and a 44px minimum height.
- **Navigation and theme control:** desktop links reveal an orange underline on hover and for the current route. The mobile menu exposes expanded state, closes on navigation, and returns focus to its trigger on Escape. The 42px theme control names the theme it will activate and persists the choice locally.
- **Scene selector:** Compete, Build, and Connect are buttons with pressed state. The selected label becomes foreground text with an orange lower rule; selection updates the real image and live caption.
- **History filters and media links:** horizontal outlined filter buttons use orange fills and dark text when pressed. Pressed state and counts update immediately; bounded Web Animations preserve continuity when records move. Archive photographs have no parallax. Equal 4:3 season cards retain explicit framing, condensed years, consistent game captions, and arrows.
- **Sponsor marks:** equal 16:9 plates, fixed contrasting grounds, and individual optical sizes preserve all original logos. Logos retain contain proportions; logo pixels and frames stay static. Hover feedback belongs to the caption and arrow. Tier jump links, sticky labels, and a parallax assembly photograph connect recognition to the invitation.
- **Motion control:** the header's Pause motion / Enable motion button persists the visitor's choice locally. Pausing or an effective reduced-motion preference removes GSAP pins, returns all workshop text to normal flow, cancels active filter animations, and stops spatial CSS effects. Explicit visitor choice can override the OS default.
- **Contact:** team and school email addresses are mailto links, with wrapping for narrow layouts. Social rows use actual destinations or the explicitly labeled YouTube search. There is no contact form or input component.

GSAP ScrollTrigger follows native scrolling without wheel interception or a scroll-smoothing loop. At widths of at least 900px and heights of at least 620px, Home has exactly two pins: a hero sequence over 140% scroll distance and one Build/Code/Lead workshop sequence over 170%. The hero aperture expands to fill its stage while the photograph centers and scales to 1.12; its engineering rings rotate 110 degrees, scale to 1.7, and fade with the grid. The introductory text and controls exit before decorative BUILT BY / CURIOSITY lettering enters, and a gradient seam connects the image to the next section. The sequence-progress line fades at the end to leave that seam unbroken. The workshop uses vertical image masks and changing chapter descriptions. Ordinary photo parallax is bounded to scale 1.12 with vertical translation from -5% to +5%; workshop image transitions settle from 1.15 to 1. Repeated archive images and sponsor logos remain static.

Content is opaque by default; only the decorative hero finale is initially hidden. Once-only title clips settle over 900ms and translated content over 750ms, using power3.out; reveals keep opacity at 1. Decorative text drifts only within the desktop motion query. Filter FLIP transitions use 300–420ms with exponential ease-out. Route changes, preference changes, and media-query exits revert owned GSAP contexts; dynamic parallax synchronization releases disconnected or unmarked frames. Route changes without a hash reset scroll to the top after previous pins are removed. Fonts, initial window load, and explicit motion-refresh events trigger measurement; individual lazy image loads do not refresh pins because image frames reserve their space. Paused/reduced layouts are static, readable, and unpinned, with semantic states and links preserved.

**The Visible State Rule.** Retain visible keyboard focus, aria-current navigation, and aria-pressed selection alongside the implemented color or underline change.

## Do's and Don'ts

### Do:

- Do preserve the original logo, team photography, school identity, and complete sponsor recognition.
- Do use semantic theme properties and the existing responsive control treatments.
- Do retain explicit image framing, readable captions, and reduced-motion support.

### Don't:

- Don't recolor sponsor marks or remove their contrasting grounds.
- Don't crop away a robot when its source record requests preserveFrame.
- Don't present the selective archive as a complete team history or infer a founding date from its first record.
