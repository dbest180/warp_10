INSTRUCTIONS FOR YOU

PROJECT OVERVIEW

Build a static informational website explaining Warp Speeds 1–10 from the Star Trek universe. This is a vanilla HTML/CSS/JS project with a separate file structure, a Star Trek–themed design, a left-side navigation menu, and a hero image banner at the top.

---

PHASE 0: PLANNING (MANDATORY FIRST STEP)

Before writing any code, produce a planning document called PLAN.md that includes:

1. Site Architecture
   · File/folder structure (see below)
   · Page routing logic (single HTML with JS-driven content vs. separate pages)
   · Navigation hierarchy (Warp 1–10 as primary nav items)
2. Design System
   · Color palette (Star Trek inspired: deep space blacks/blues, gold/copper accents, red alert highlights)
   · Typography (sans-serif for UI, display font for headings if available via Google Fonts)
   · UI component styles (buttons, cards, navigation, hero)
3. Content Outline
   · Hero section: Title, tagline, subtle animated starfield or static image
   · For each Warp speed (1–10): Speed in multiples of c, description, canonical references (TOS, TNG, VOY), notable episodes where used
4. Technical Specifications
   · Vanilla HTML5, CSS3, ES6 JavaScript
   · No frameworks, no build tools
   · Responsive (mobile-first)
   · Accessible (ARIA labels, semantic HTML)
   · SEO basics (meta tags, Open Graph)
5. User Experience Flow
   · Default view: Warp 1 selected or hero-only landing
   · Clicking nav item updates main content area without page reload
   · Active state highlights current warp speed in nav

---

PHASE 1: FILE STRUCTURE & BASE HTML

Create the following folder structure:

```
/star-trek-warp/
│
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── app.js
├── assets/
│   ├── images/
│   │   └── hero-banner.jpg (or placeholder)
│   └── fonts/ (optional)
├── PLAN.md
└── PROGRESS.md (update after each phase)
```

In this phase:

· Build index.html with:
  · Semantic <header>, <nav>, <main>, <footer>
  · Left nav with links for Warp 1–10
  · Hero banner placeholder (use gradient or placeholder image)
  · Content area with <section id="content">
· Link CSS and JS files
· Add viewport meta tag and basic ARIA roles

---

PHASE 2: CSS THEMING (STAR TREK STYLE)

Build css/styles.css with:

1. Global Reset & Variables
   · CSS custom properties for colors: --space-black, --gold, --red-alert, --star-blue, --panel-bg
   · Font stack: 'Inter', 'Segoe UI', system-ui, sans-serif
2. Layout
   · Flexbox layout: left nav (fixed width ~220px), right content fills remaining
   · Hero banner spans full width at top, below header but above nav/content
3. Hero Banner
   · Full-width, 40vh minimum height
   · Dark gradient overlay + starfield animation (CSS only, using pseudo-elements or small dot animations)
   · Title centered with gold text shadow
4. Navigation
   · Vertical list with hover effects (gold underline or glow)
   · Active state: gold background or left border accent
   · Smooth transitions
5. Content Cards
   · Each warp speed displays as a card with:
     · Warp number (large, prominent)
     · Speed in c (e.g., "1c" for Warp 1, "1024c" for Warp 9)
     · Description paragraph
     · "Notable Episodes" list
   · Glassmorphism or dark panel effect
6. Responsive
   · At ≤768px: nav collapses to top hamburger or horizontal scroll
   · Hero scales down

---

PHASE 3: JAVASCRIPT - DATA & DYNAMIC RENDERING

Build js/app.js with:

1. Data Array
   · Objects for Warp 1–10 with properties:
     ```js
     {
       number: 1,
       speedInC: '1c',
       description: '...',
       episodes: ['Episode Name', ...],
       tosReference: true/false,
       tngReference: true/false
     }
     ```
2. Render Function
   · renderWarp(warpNumber) – updates #content with the correct card
   · Uses template literals for HTML generation
3. Navigation Handler
   · Event delegation on nav links
   · Updates active class on clicked link
   · Calls renderWarp()
   · Updates browser URL hash (e.g., #warp-5) without reload
4. Default Route
   · On page load, read window.location.hash and render that warp
   · Default to Warp 1 if no hash
5. Hero Interaction (optional bonus)
   · Clicking hero banner resets to a "welcome" view showing all warp speeds as a grid

---

PHASE 4: CONTENT WRITING (WARP 1–10)

For each warp speed, provide:

Warp Speed (c) Description Notable Episodes
1 1x c Threshold of warp, sublight to FTL transition "The Cage"
2 8x c Early cruising speed "Where No Man Has Gone Before"
3 27x c Standard for TOS era "The Trouble with Tribbles"
4 64x c Common freight speed "The Menagerie"
5 125x c TOS max cruising "Balance of Terror"
6 216x c TNG standard cruising "The Measure of a Man"
7 343x c High-speed transit "The Best of Both Worlds"
8 512x c Emergency speed "Q Who?"
9 729x c Near-max, used in battle "The Wounded"
9.5 ~1000x c Voyager's max sustainable "Scorpion"
10 Infinite Theoretical, all points in space simultaneously "Threshold" (VOY)

(Note: Include Warp 9.5 as bonus if desired, but stick to 1–10 per spec)

---

PHASE 5: POLISH & PERFORMANCE

1. Accessibility
   · Keyboard navigation for nav links
   · Focus indicators
   · Alt text on images
2. Performance
   · Minify CSS/JS (optional, but note in PROGRESS.md)
   · Lazy load hero image
3. Cross-browser testing notes
   · Test in Chrome, Firefox, Safari
4. Add Easter Egg
   · Hidden click on Starfleet delta in corner plays TNG comm badge sound or shows "Make it so"

---

PROGRESS.MD GENERATION

After completing each phase, update PROGRESS.md with:

```markdown
# PROGRESS.md - Star Trek Warp Speed Encyclopedia

## Phase 0: Planning ✅
- [x] Site architecture defined
- [x] Design system documented
- [x] Content outline complete

## Phase 1: File Structure & HTML ✅
- [x] Folder structure created
- [x] index.html skeleton built
- [x] Navigation and content areas marked up

## Phase 2: CSS Theming ✅
- [x] Color variables set
- [x] Hero banner with starfield
- [x] Responsive nav & cards

## Phase 3: JavaScript ✅
- [x] Warp data array complete
- [x] Render function working
- [x] Hash-based routing implemented

## Phase 4: Content ✅
- [x] All 10 warp entries written
- [x] Episode references verified

## Phase 5: Polish ✅
- [x] Accessibility audit passed
- [x] Performance optimized
- [x] Easter egg added

---

**Current Status:** Complete
**Last Updated:** [Date]
**Known Issues:** None
**Next Steps:** Deploy to hosting
```

---

FINAL DELIVERY CHECKLIST

☐ All files in correct folders
☐ PLAN.md and PROGRESS.md included
☐ No external dependencies except Google Fonts (optional)
☐ Hero image either included or uses CSS-generated art
☐ Navigation works without JavaScript (graceful degradation)
☐ Readme.md with setup instructions

---

Start with Phase 0: Planning. Do not write code until PLAN.md is approved.