# PLAN.md - Star Trek Warp Speed Encyclopedia

## 1. Site Architecture

### File/Folder Structure
```
/star-trek-warp/
│
├── index.html              # Main HTML file (single page application)
├── css/
│   └── styles.css          # All styling with CSS custom properties
├── js/
│   └── app.js              # Vanilla ES6 JavaScript for dynamic content
├── assets/
│   ├── images/
│   │   └── hero-banner.jpg # Star Trek themed hero image (or CSS-generated)
│   └── fonts/              # Optional custom fonts folder
├── PLAN.md                 # This planning document
└── PROGRESS.md             # Progress tracking (updated after each phase)
```

### Page Routing Logic
**Approach: Single HTML with JS-driven content switching**

- **Why single page?** 
  - Provides smooth transitions without page reloads
  - Better user experience for exploring warp speeds sequentially
  - Simpler maintenance with all content in one data structure
  - URL hash routing maintains bookmarkability (#warp-1, #warp-5, etc.)

- **Implementation:**
  - All warp speed data stored in JavaScript array
  - `renderWarp()` function dynamically updates content area
  - Browser history managed via `window.location.hash`
  - Default view shows Warp 1 or welcome message

### Navigation Hierarchy
```
Header (Site Title + Logo)
├── Hero Banner (Welcome/Title Area)
├── Left Navigation (Primary)
│   ├── Warp 1
│   ├── Warp 2
│   ├── Warp 3
│   ├── Warp 4
│   ├── Warp 5
│   ├── Warp 6
│   ├── Warp 7
│   ├── Warp 8
│   ├── Warp 9
│   └── Warp 10
├── Main Content Area (Dynamic)
│   └── Warp Speed Card (renders based on selection)
└── Footer (Credits, Easter Egg)
```

---

## 2. Design System

### Color Palette (Star Trek Inspired)

```css
:root {
  --space-black: #0a0e1a;        /* Deep space background */
  --space-blue: #1a1f3a;         /* Secondary background */
  --star-blue: #4a9eff;          /* Accent blue for highlights */
  --gold: #c9a962;               /* Starfleet gold/brass accent */
  --gold-light: #e8d69a;         /* Lighter gold for hover states */
  --red-alert: #cc3333;          /* Alert/emergency highlight */
  --panel-bg: rgba(20, 25, 50, 0.85); /* Semi-transparent panels */
  --text-primary: #f0f4ff;       /* Primary text color */
  --text-secondary: #b8c4db;     /* Secondary text */
  --glass-border: rgba(201, 169, 98, 0.3); /* Gold-tinted glass border */
}
```

### Typography

**Font Stack:**
```css
font-family: 'Inter', 'Segoe UI', system-ui, -apple-system, sans-serif;
```

**Google Fonts Import:**
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Orbitron:wght@700;900&display=swap" rel="stylesheet">
```

**Type Scale:**
- **Hero Title:** `Orbitron`, 3rem (48px), bold, gold with text-shadow
- **Section Headings:** `Inter`, 2rem (32px), 700 weight
- **Warp Number Display:** `Orbitron`, 4rem (64px), 900 weight, gold
- **Body Text:** `Inter`, 1rem (16px), 400 weight, line-height 1.6
- **Nav Links:** `Inter`, 1.1rem (18px), 500 weight

### UI Component Styles

#### Buttons
```css
.btn {
  padding: 0.75rem 1.5rem;
  border: 2px solid var(--gold);
  border-radius: 4px;
  background: transparent;
  color: var(--gold);
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn:hover {
  background: var(--gold);
  color: var(--space-black);
  box-shadow: 0 0 15px rgba(201, 169, 98, 0.5);
}
```

#### Cards (Warp Speed Display)
```css
.warp-card {
  background: var(--panel-bg);
  backdrop-filter: blur(10px);
  border: 1px solid var(--glass-border);
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}
```

#### Navigation
```css
.nav-link {
  display: block;
  padding: 1rem 1.5rem;
  color: var(--text-secondary);
  border-left: 3px solid transparent;
  transition: all 0.3s ease;
}

.nav-link:hover {
  color: var(--gold-light);
  background: rgba(201, 169, 98, 0.1);
}

.nav-link.active {
  color: var(--gold);
  border-left-color: var(--gold);
  background: rgba(201, 169, 98, 0.15);
}
```

#### Hero Banner
```css
.hero {
  min-height: 40vh;
  background: linear-gradient(135deg, var(--space-black), var(--space-blue));
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Starfield animation using pseudo-elements */
.hero::before {
  content: '';
  position: absolute;
  width: 200%;
  height: 200%;
  background-image: radial-gradient(2px 2px at 20px 30px, white, transparent),
                    radial-gradient(2px 2px at 40px 70px, rgba(255,255,255,0.8), transparent),
                    radial-gradient(1px 1px at 90px 40px, white, transparent);
  background-size: 200px 200px;
  animation: starfield 100s linear infinite;
  opacity: 0.6;
}

@keyframes starfield {
  0% { transform: translate(0, 0); }
  100% { transform: translate(-100px, -100px); }
}
```

---

## 3. Content Outline

### Hero Section
- **Title:** "Warp Speed Encyclopedia"
- **Tagline:** "Exploring Faster-Than-Light Travel Across the Star Trek Universe"
- **Visual:** CSS-generated animated starfield with subtle parallax effect
- **Optional:** Clicking hero resets to welcome view showing all warp speeds grid

### Warp Speed Entries (1-10)

Each entry includes:
1. **Warp Number** (large display)
2. **Speed in multiples of c** (velocity)
3. **Description** (technical details and context)
4. **Canonical References** (TOS/TNG/VOY era indicators)
5. **Notable Episodes** (where this speed was featured)

| Warp | Speed (c) | Description | Notable Episodes | Era |
|------|-----------|-------------|------------------|-----|
| 1 | 1c | Threshold of warp drive, transition from sublight to FTL | "The Cage" | TOS |
| 2 | 8c | Early cruising speed, used for short-distance travel | "Where No Man Has Gone Before" | TOS |
| 3 | 27c | Standard operational speed for TOS-era vessels | "The Trouble with Tribbles" | TOS |
| 4 | 64c | Common freight and patrol speed | "The Menagerie" | TOS |
| 5 | 125c | Maximum cruising speed for TOS Enterprise | "Balance of Terror" | TOS |
| 6 | 216c | Standard cruising speed for TNG-era ships | "The Measure of a Man" | TNG |
| 7 | 343c | High-speed transit, used for urgent missions | "The Best of Both Worlds" | TNG |
| 8 | 512c | Emergency speed, sustained only briefly | "Q Who?" | TNG |
| 9 | 729c | Near-maximum, typically used in tactical situations | "The Wounded" | TNG |
| 10 | ∞c | Theoretical maximum, all points in space simultaneously | "Threshold" (VOY) | VOY |

*Note: Warp formula follows TNG scale: v = w³ × c for warp 1-9*

---

## 4. Technical Specifications

### Core Technologies
- **HTML5** - Semantic markup with ARIA roles
- **CSS3** - Custom properties, Flexbox, Grid, animations
- **JavaScript ES6** - Arrow functions, template literals, event delegation, modules pattern

### Constraints
- ❌ No frameworks (no React, Vue, Angular, etc.)
- ❌ No build tools (no Webpack, Vite, Gulp, etc.)
- ❌ No external libraries (no jQuery, Lodash, etc.)
- ✅ Google Fonts allowed (Inter + Orbitron)
- ✅ Pure CSS animations only (no JS animation libraries)

### Responsive Design (Mobile-First)

**Breakpoints:**
```css
/* Base: Mobile first (≤768px) */
- Nav collapses to horizontal scroll or hamburger menu
- Hero height: 30vh
- Single column layout

/* Tablet (769px - 1024px) */
- Nav visible but condensed (~180px width)
- Hero height: 35vh

/* Desktop (≥1025px) */
- Full left nav (220px fixed width)
- Hero height: 40vh
- Two-column layout (nav + content)
```

**Mobile Navigation Strategy:**
- Option A: Horizontal scrollable nav bar at top
- Option B: Hamburger menu that expands overlay
- **Decision:** Horizontal scroll for simplicity and pure CSS implementation

### Accessibility Requirements

**Semantic HTML:**
```html
<header role="banner">
<nav role="navigation" aria-label="Warp Speed Navigation">
<main role="main" id="content" aria-live="polite">
<footer role="contentinfo">
```

**ARIA Labels:**
- `aria-current="page"` on active nav link
- `aria-label` on interactive elements
- `role="button"` where divs act as buttons
- `tabindex="0"` for keyboard accessibility

**Keyboard Navigation:**
- Tab order: Header → Nav links → Content → Footer
- Enter/Space activates nav links
- Focus indicators visible (gold outline)

**Screen Reader Support:**
- Live region (`aria-live="polite"`) announces content changes
- Descriptive link text ("Warp Factor 1" not just "1")
- Alt text on any images

### SEO Basics

**Meta Tags:**
```html
<meta name="description" content="Explore warp speeds 1-10 from Star Trek. Learn about faster-than-light travel velocities, canonical references, and notable episodes.">
<meta name="keywords" content="Star Trek, warp speed, faster than light, TNG, TOS, Voyager, science fiction">
<meta name="author" content="Your Name">
<meta name="robots" content="index, follow">
```

**Open Graph:**
```html
<meta property="og:title" content="Star Trek Warp Speed Encyclopedia">
<meta property="og:description" content="Interactive guide to warp factors 1-10 from across the Star Trek universe">
<meta property="og:type" content="website">
<meta property="og:image" content="assets/images/hero-banner.jpg">
```

**Structured Data (JSON-LD):**
```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Star Trek Warp Speed Encyclopedia",
  "description": "Educational resource about warp drive technology in Star Trek"
}
```

---

## 5. User Experience Flow

### Initial Page Load
1. **Default State:** Warp 1 content displayed automatically
2. **Alternative:** Welcome screen with brief introduction (if no hash present)
3. **URL:** `index.html` or `index.html#warp-1`

### Navigation Interaction
1. User clicks warp speed link in left navigation
2. JavaScript intercepts click event (event delegation)
3. Active class removed from previous link, added to new link
4. `renderWarp()` function called with selected warp number
5. Content area updates with new warp card (smooth fade transition)
6. URL hash updates to `#warp-X` (using `history.pushState` or direct assignment)
7. Browser back/forward buttons work correctly

### Content Display Flow
```
User clicks "Warp 5" 
    ↓
Event listener captures click
    ↓
Prevent default link behavior
    ↓
Update active state in navigation
    ↓
Find warp data object (number: 5)
    ↓
Generate HTML via template literal
    ↓
Inject into #content with fade-out/fade-in
    ↓
Update URL to #warp-5
    ↓
Announce change to screen readers
```

### Hero Interaction (Bonus Feature)
- Clicking hero banner triggers "overview mode"
- Displays grid of all 10 warp speeds as summary cards
- Allows quick comparison of all speeds
- Clicking individual card in grid navigates to full detail view

### State Management
```javascript
// Simple state object
const AppState = {
  currentWarp: 1,
  warpData: [...], // Array of 10 warp objects
  isOverviewMode: false
};

// Functions modify state and re-render
function selectWarp(number) {
  AppState.currentWarp = number;
  AppState.isOverviewMode = false;
  renderWarp(number);
  updateNavigation(number);
  updateHash(number);
}
```

---

## 6. Implementation Roadmap

### Phase 0: Planning ✅
- [x] Create this PLAN.md document
- [x] Define architecture, design system, content, technical specs, UX flow
- [ ] Get approval before proceeding to Phase 1

### Phase 1: File Structure & HTML
- [ ] Create folder structure
- [ ] Build semantic HTML skeleton
- [ ] Add ARIA roles and meta tags
- [ ] Link CSS and JS files

### Phase 2: CSS Theming
- [ ] Define CSS custom properties
- [ ] Build responsive flexbox layout
- [ ] Style hero banner with starfield animation
- [ ] Create navigation component styles
- [ ] Design warp card component
- [ ] Implement responsive breakpoints

### Phase 3: JavaScript
- [ ] Create warp data array (objects for 1-10)
- [ ] Build renderWarp() function
- [ ] Implement navigation event handlers
- [ ] Add hash-based routing
- [ ] Handle default route on page load
- [ ] (Bonus) Implement hero click overview mode

### Phase 4: Content
- [ ] Write descriptions for all 10 warp speeds
- [ ] Research and verify episode references
- [ ] Populate data array with complete content
- [ ] Add canonical era indicators (TOS/TNG/VOY)

### Phase 5: Polish
- [ ] Audit accessibility (keyboard, screen reader)
- [ ] Test cross-browser (Chrome, Firefox, Safari)
- [ ] Optimize performance (minify if needed)
- [ ] Add easter egg (hidden Starfleet delta interaction)
- [ ] Final review and bug fixes

---

## 7. Success Criteria

### Functional Requirements
- ✅ All 10 warp speeds accessible via navigation
- ✅ Content updates without page reload
- ✅ URL hash reflects current selection
- ✅ Back/forward browser buttons work
- ✅ Responsive on mobile, tablet, desktop
- ✅ Keyboard navigable
- ✅ No JavaScript errors in console

### Design Requirements
- ✅ Star Trek aesthetic (colors, fonts, styling)
- ✅ Animated starfield in hero
- ✅ Glassmorphism/dark panel effects
- ✅ Smooth transitions and hover states
- ✅ Clear visual hierarchy

### Content Requirements
- ✅ Accurate warp speed calculations
- ✅ Canonical episode references
- ✅ Clear, engaging descriptions
- ✅ Consistent formatting across all entries

---

**Document Status:** Ready for Review  
**Created:** Phase 0 Planning  
**Next Step:** Await approval, then proceed to Phase 1: File Structure & HTML
