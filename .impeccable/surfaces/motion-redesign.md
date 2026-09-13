# Motion redesign

The user requested a complete layout redesign with advanced scroll animation and effects, preserving the same information. This revision keeps the established Iron Bears palette, photographs and type identity while replacing the page compositions. The code-first choice and equal student/sponsor/community priorities remain settled.

THESIS: Follow the energy of a robot from the field, through its build, and into the community. Scrolling changes the photographic composition and reveals the disciplines behind the machine.
OWN-WORLD: Charcoal, orange and cream; Barlow Condensed and Manrope; real rectangular photographs and sponsor marks, generous asymmetric layouts, thin dividers. Preserve all thirteen seasons, sixteen sponsors, contact details and team facts.
STORY: Compete; meet the students; build/code/lead; explore the robot archive; meet the supporters; connect.
FIRST VIEWPORT: Full-height competition photograph with the robot as focal point, a two-line anchored headline, actionable team/sponsor links, and scene buttons. On desktop scrolling reframes the image and separates the title lines. On mobile the composition is unpinned, with legible text and immediate actions.
FORM: An interactive photographic documentary within the established visual world (original seed 211aeff0). The main authored sequence pins the Build/Code/Lead chapter and reveals the matching images through vertical masks while the descriptions change. About uses a panoramic frame and sticky mission; History uses asymmetrical records, a sticky decade index and FLIP filter transitions; Sponsors uses anchored tiers and intact logo plates; Contact uses large email/social rows.

Motion budget: GSAP ScrollTrigger with native scrolling; no wheel interception, scroll smoothing loop or continuous decorative animation. One pinned home sequence and a short hero sequence on desktop >=900px and >=620px high. Image parallax is bounded to scale 1.12 / +/-5% translation. New history rows register and old triggers clean up after filters. Media queries and route changes revert all owned timelines. CSS clip reveals progressively enhance the secondary page imagery.
Continuity: filter changes use bounded Web Animations and immediately preserve pressed states/live counts. Navigation remains native Next links. Feedback stays quick.
Control: persistent Pause/Enable motion control and OS reduced-motion support. Pausing removes GSAP pins, reveals all chapter text, cancels active filter animations, and stops CSS spatial effects. Default content is visible without scripts.

FINISH: Verify desktop/mobile layouts, multiple scroll positions, interruption, reduced motion, theme switching, filtering and route cleanup. Preserve the original raster files and their already-embedded provenance. Record the revised system in DESIGN.md and .impeccable/design.json after the bounded finish review.

