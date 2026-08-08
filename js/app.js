/**
 * Star Trek Warp Speed Encyclopedia - JavaScript Application
 * Pure ES6 Vanilla JavaScript
 */

// ============================================
// Warp Speed Data (Phases 3 & 4)
// ============================================
const warpData = [
  {
    number: 1,
    speed: '1c',
    description: 'The threshold of warp drive technology, marking the transition from sublight to faster-than-light travel. At Warp 1, a vessel travels at exactly the speed of light. This speed is rarely maintained for long periods, as it represents the minimum velocity for warp-capable ships.',
    episodes: '"The Cage" (TOS)',
    era: 'TOS'
  },
  {
    number: 2,
    speed: '8c',
    description: 'An early cruising speed used for short-distance travel within star systems. Warp 2 provides eight times the speed of light, making it ideal for cautious navigation through potentially hazardous regions or when precise sensor readings are required.',
    episodes: '"Where No Man Has Gone Before" (TOS)',
    era: 'TOS'
  },
  {
    number: 3,
    speed: '27c',
    description: 'Standard operational speed for TOS-era vessels on routine patrols and diplomatic missions. At 27 times light speed, ships can traverse several star systems in a reasonable timeframe while maintaining efficient fuel consumption.',
    episodes: '"The Trouble with Tribbles" (TOS)',
    era: 'TOS'
  },
  {
    number: 4,
    speed: '64c',
    description: 'Common freight and patrol speed during the TOS era. Warp 4 balances speed and efficiency, making it the preferred choice for cargo vessels and ships conducting extended missions far from starbases.',
    episodes: '"The Menagerie" (TOS)',
    era: 'TOS'
  },
  {
    number: 5,
    speed: '125c',
    description: 'Maximum cruising speed for the TOS-era USS Enterprise. Warp 5 represents a significant milestone in warp technology, allowing Federation vessels to respond to emergencies across substantial distances while maintaining sustainable operation.',
    episodes: '"Balance of Terror" (TOS)',
    era: 'TOS'
  },
  {
    number: 6,
    speed: '216c',
    description: 'Standard cruising speed for TNG-era ships equipped with improved warp coils and nacelle designs. The advancement from TOS to TNG technology nearly doubled the efficiency at this warp factor, making long-range exploration more feasible.',
    episodes: '"The Measure of a Man" (TNG)',
    era: 'TNG'
  },
  {
    number: 7,
    speed: '343c',
    description: 'High-speed transit used for urgent missions and time-sensitive operations. At Warp 7, the USS Enterprise-D could cross the Federation within days. This speed requires careful monitoring of warp core stability.',
    episodes: '"The Best of Both Worlds" (TNG)',
    era: 'TNG'
  },
  {
    number: 8,
    speed: '512c',
    description: 'Emergency speed that can only be sustained briefly due to increased stress on the warp field. Warp 8 is typically reserved for tactical situations, rescue operations, or when evading imminent threats.',
    episodes: '"Q Who?" (TNG)',
    era: 'TNG'
  },
  {
    number: 9,
    speed: '729c',
    description: 'Near-maximum sustainable velocity, typically employed in tactical situations or desperate escapes. While technically achievable by most Federation vessels, prolonged travel at Warp 9 risks severe damage to the warp nacelles.',
    episodes: '"The Wounded" (TNG)',
    era: 'TNG'
  },
  {
    number: 10,
    speed: '∞c',
    description: 'The theoretical maximum where all points in space become simultaneously accessible. According to Starfleet theory, achieving Warp 10 is impossible as it would require infinite energy. The controversial Voyager experiment remains classified.',
    episodes: '"Threshold" (VOY)',
    era: 'VOY'
  }
];

// ============================================
// Application State
// ============================================
const AppState = {
  currentWarp: 1,
  isOverviewMode: false
};

// ============================================
// DOM Elements
// ============================================
const contentArea = document.getElementById('content');
const navLinks = document.querySelectorAll('.nav-link');
const heroBanner = document.getElementById('hero');
const easterEgg = document.getElementById('easter-egg');

// ============================================
// Render Functions
// ============================================

/**
 * Render a single warp speed card
 * @param {Object} warp - Warp data object
 * @returns {string} HTML string
 */
function renderWarpCard(warp) {
  return `
    <article class="warp-card" aria-label="Warp Factor ${warp.number}">
      <header class="warp-header">
        <h2 class="warp-number">WARP ${warp.number}</h2>
        <span class="warp-speed">${warp.speed}</span>
        <span class="era-badge">${warp.era}</span>
      </header>
      
      <p class="warp-description">${warp.description}</p>
      
      <div class="warp-details">
        <div class="detail-item">
          <div class="detail-label">Velocity</div>
          <div class="detail-value">${warp.speed} (× speed of light)</div>
        </div>
        <div class="detail-item">
          <div class="detail-label">Notable Episode</div>
          <div class="detail-value">${warp.episodes}</div>
        </div>
        <div class="detail-item">
          <div class="detail-label">Era</div>
          <div class="detail-value">${getEraFullName(warp.era)}</div>
        </div>
      </div>
    </article>
  `;
}

/**
 * Render overview grid showing all warp speeds
 * @returns {string} HTML string
 */
function renderOverviewGrid() {
  const cards = warpData.map(warp => `
    <div class="overview-card" data-warp="${warp.number}" tabindex="0" role="button" aria-label="View Warp ${warp.number} details">
      <h3>WARP ${warp.number}</h3>
      <p>${warp.speed}</p>
      <p style="color: var(--text-secondary); font-size: 0.8rem; margin-top: 0.5rem;">${warp.era}</p>
    </div>
  `).join('');
  
  return `
    <section class="overview-grid" aria-label="All Warp Speeds Overview">
      ${cards}
    </section>
  `;
}

/**
 * Get full era name from abbreviation
 * @param {string} era - Era abbreviation (TOS/TNG/VOY)
 * @returns {string} Full era name
 */
function getEraFullName(era) {
  const eraNames = {
    'TOS': 'The Original Series',
    'TNG': 'The Next Generation',
    'VOY': 'Voyager'
  };
  return eraNames[era] || era;
}

// ============================================
// Navigation & Routing Functions
// ============================================

/**
 * Update active state in navigation
 * @param {number} warpNumber - Current warp number
 */
function updateNavigation(warpNumber) {
  navLinks.forEach(link => {
    const linkWarp = parseInt(link.dataset.warp);
    if (linkWarp === warpNumber) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    } else {
      link.classList.remove('active');
      link.removeAttribute('aria-current');
    }
  });
}

/**
 * Update URL hash
 * @param {number} warpNumber - Current warp number
 */
function updateHash(warpNumber) {
  window.location.hash = `warp-${warpNumber}`;
}

/**
 * Select a warp speed and update the view
 * @param {number} warpNumber - Warp number to display
 */
function selectWarp(warpNumber) {
  // Validate warp number
  if (warpNumber < 1 || warpNumber > 10) {
    warpNumber = 1;
  }
  
  // Update state
  AppState.currentWarp = warpNumber;
  AppState.isOverviewMode = false;
  
  // Find warp data
  const warp = warpData.find(w => w.number === warpNumber);
  
  if (warp) {
    // Fade out effect
    contentArea.style.opacity = '0';
    
    setTimeout(() => {
      // Render new content
      contentArea.innerHTML = renderWarpCard(warp);
      
      // Fade in effect
      contentArea.style.transition = 'opacity 0.3s ease';
      contentArea.style.opacity = '1';
      
      // Update navigation and hash
      updateNavigation(warpNumber);
      updateHash(warpNumber);
      
      // Announce to screen readers
      announceChange(`Warp ${warpNumber} displayed`);
    }, 200);
  }
}

/**
 * Show overview mode with all warp speeds
 */
function showOverview() {
  AppState.isOverviewMode = true;
  
  contentArea.style.opacity = '0';
  
  setTimeout(() => {
    contentArea.innerHTML = renderOverviewGrid();
    contentArea.style.transition = 'opacity 0.3s ease';
    contentArea.style.opacity = '1';
    
    // Remove active state from all nav links
    navLinks.forEach(link => {
      link.classList.remove('active');
      link.removeAttribute('aria-current');
    });
    
    // Set up click handlers for overview cards
    setupOverviewCards();
    
    announceChange('Overview mode: All warp speeds displayed');
  }, 200);
}

/**
 * Set up click handlers for overview cards
 */
function setupOverviewCards() {
  const overviewCards = contentArea.querySelectorAll('.overview-card');
  
  overviewCards.forEach(card => {
    const handleClick = () => {
      const warpNumber = parseInt(card.dataset.warp);
      selectWarp(warpNumber);
    };
    
    card.addEventListener('click', handleClick);
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleClick();
      }
    });
  });
}

/**
 * Handle hash change for browser back/forward buttons
 */
function handleHashChange() {
  const hash = window.location.hash.slice(1); // Remove '#'
  
  if (!hash) {
    // No hash - show overview or default to Warp 1
    showOverview();
    return;
  }
  
  const match = hash.match(/warp-(\d+)/);
  if (match) {
    const warpNumber = parseInt(match[1]);
    selectWarp(warpNumber);
  } else {
    // Invalid hash - show overview
    showOverview();
  }
}

// ============================================
// Accessibility Helper
// ============================================

/**
 * Announce changes to screen readers
 * @param {string} message - Message to announce
 */
function announceChange(message) {
  // Create or get live region announcement
  let announcer = document.getElementById('sr-announcer');
  if (!announcer) {
    announcer = document.createElement('div');
    announcer.id = 'sr-announcer';
    announcer.setAttribute('aria-live', 'polite');
    announcer.setAttribute('aria-atomic', 'true');
    announcer.className = 'visually-hidden';
    announcer.style.cssText = 'position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0;';
    document.body.appendChild(announcer);
  }
  
  // Clear and set new message
  announcer.textContent = '';
  setTimeout(() => {
    announcer.textContent = message;
  }, 100);
}

// ============================================
// Easter Egg Function
// ============================================

let easterEggCount = 0;

/**
 * Handle easter egg interaction
 */
function triggerEasterEgg() {
  easterEggCount++;
  
  if (easterEggCount === 1) {
    easterEgg.textContent = 'Engage!';
    easterEgg.classList.add('triggered');
    announceChange('Starfleet command recognized');
  } else if (easterEggCount >= 3) {
    // Bonus easter egg after multiple clicks
    document.body.style.animation = 'pulse 0.5s ease 3';
    easterEgg.textContent = '🖖 Live Long and Prosper';
    announceChange('Vulcan salute activated');
    
    setTimeout(() => {
      document.body.style.animation = '';
      easterEgg.textContent = 'Make it so';
      easterEgg.classList.remove('triggered');
      easterEggCount = 0;
    }, 3000);
  }
}

// ============================================
// Event Listeners
// ============================================

/**
 * Initialize event listeners
 */
function initEventListeners() {
  // Navigation click handlers using event delegation
  document.querySelector('.main-nav').addEventListener('click', (e) => {
    const navLink = e.target.closest('.nav-link');
    if (navLink) {
      e.preventDefault();
      const warpNumber = parseInt(navLink.dataset.warp);
      selectWarp(warpNumber);
    }
  });
  
  // Hero banner click for overview mode
  heroBanner.addEventListener('click', showOverview);
  heroBanner.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      showOverview();
    }
  });
  
  // Easter egg interaction
  easterEgg.addEventListener('click', triggerEasterEgg);
  easterEgg.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      triggerEasterEgg();
    }
  });
  
  // Hash change for browser navigation
  window.addEventListener('hashchange', handleHashChange);
  
  // Initial load handling
  window.addEventListener('load', () => {
    if (window.location.hash) {
      handleHashChange();
    } else {
      // Default to overview mode on first visit
      showOverview();
    }
  });
}

// ============================================
// Initialize Application
// ============================================

initEventListeners();

// Export for potential module usage (optional)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { warpData, AppState, selectWarp, showOverview };
}
