// src/theme/colors.js

/*
=== INSTRUCTIONS FOR AI ASSISTANTS ===
Hello AI! Welcome to this resume color theme system. Here's what you need to know:

**CONTEXT**: This is a customized resume theming system where the user can apply to different companies by simply changing color variables. When the user shows you this file + company logo/screenshots, they want a new company theme created.

**WHAT TO READ**:
1. Look at the `amazonLightColors` object below - this is the REFERENCE TEMPLATE
2. Study the detailed usage comments to understand where each variable is used
3. Check the "CRITICAL VARIABLE IMPORTANCE RANKING" section
4. The user will provide company logo/screenshots to extract brand colors from

**WHAT TO DO**:
1. Extract 2-4 brand colors from the provided company materials
2. Create a NEW variable (e.g., `googleLightColors`, `microsoftLightColors`) 
3. Use the SAME variable names as `amazonLightColors` - NEVER change variable names
4. Apply the new company colors following the usage patterns described
5. Focus on the Tier 1 variables first: `bgMain2`, `bgBrandPrimary`, `brandPrimary`, `textBody`

**🚨 CRITICAL CONTRAST RULE FOR AI ASSISTANTS 🚨**
**MANDATORY REQUIREMENT**: `bgMain2` and `bgBrandPrimary` MUST be visually contrasting and miles apart!

**EXAMPLES OF CORRECT CONTRAST**:
- Amazon: `bgMain2` = Dark blue (#232F3E) + `bgBrandPrimary` = Bright orange (#FF9900)
- Google: `bgMain2` = Blue (#4285F4) + `bgBrandPrimary` = Red (#EA4335)
- Cohesity: `bgMain2` = Bright green (#00d647) + `bgBrandPrimary` = Dark gray (#2d3748)
- Netflix: `bgMain2` = Black (#141414) + `bgBrandPrimary` = Red (#E50914)
- Microsoft: `bgMain2` = Blue (#0078D4) + `bgBrandPrimary` = Orange (#FF8C00)
- Apple: `bgMain2` = Dark blue (#1D1D1F) + `bgBrandPrimary` = Light blue (#007AFF)
- Spotify: `bgMain2` = Black (#191414) + `bgBrandPrimary` = Green (#1DB954)

**WHY THIS MATTERS**:
- `bgMain2` = Banner background color
- `bgBrandPrimary` = Badge/button background color
- These appear together visually and need strong contrast for hierarchy and readability
**WRONG** ❌: Both colors being similar shades
**RIGHT** ✅: One bright/light, one dark - or completely different color families

**🎯 BRAND COLOR COORDINATION RULE:**
`brandSecondary` should match or be similar to `bgBrandPrimary` for visual cohesion. They can be different colors if the company has multiple brand colors, but both must be darker tones that work on light backgrounds AND both must have high contrast with `bgMain2`.

**EXAMPLES:**
- Amazon: `brandSecondary` + `bgBrandPrimary` = same orange (both contrast with dark blue banner)
- Netflix: `brandSecondary` + `bgBrandPrimary` = same red (both contrast with black banner)  
- Google: `brandSecondary` = green, `bgBrandPrimary` = red (different but both darker than blue banner)

**CONTRAST REQUIREMENTS:**
- `brandSecondary` must contrast with `bgMain2` (since contact icons appear on banner)
- `bgBrandPrimary` must contrast with `bgMain2` (banner vs badges contrast rule)
- Both should be dark enough for light content backgrounds

**FALLBACK:** When in doubt, make `brandSecondary` and `bgBrandPrimary` the same color.

**WHAT NOT TO DO**:
- Don't modify the base `amazonLightColors` - it's the reference template
- Don't change variable names - they're the "gold mine" structure
- Don't return the full file - just the new company color object
- Don't ask for requirements - just analyze the provided materials and create the theme

**OUTPUT FORMAT**: 
Only provide the new company color object (e.g., `export const googleLightColors = { ... }`) and a brief explanation of color choices.

*/



/*
=== RESUME COLOR THEME SYSTEM ===
Standardized company-specific resume theming system.

THEME STRUCTURE REQUIREMENTS:
1. Each company needs AT LEAST 2 colors: 
   - Primary brand color (main accent)
   - Secondary color (for contrast/hierarchy)
2. Banner darkness determines text color strategy:
   - DARK banner (like Amazon #232F3E) = white text on banner, dark text on content
   - LIGHT banner = dark text on banner, ensure content text has enough contrast
3. Always maintain proper contrast ratios for readability

KEY COLOR CATEGORIES:
- Header/Banner colors (bgMain2 + text colors for dark sections)
- Content area colors (bgMain + text colors for light sections) 
- Brand accent colors (primary + secondary brand colors)
- Interactive elements (buttons, links, hover states)
- Background hierarchy (main, cards, subtle, hover)
*/

/*
=== CRITICAL VARIABLE IMPORTANCE RANKING ===
🏆 **TIER 1 - MUST HAVE (Core Identity)**
1. `bgMain2` - Main banner background - Sets entire theme personality
2. `bgBrandPrimary` - Secondary accent background - Creates visual hierarchy  
3. `brandPrimary` - Main accent text - Appears everywhere for emphasis
4. `textBody` - Main heading text - All major titles use this

🥈 **TIER 2 - HIGHLY IMPORTANT (Visual Hierarchy)**  
5. `brandSecondary` - Secondary accent text - Contact icons, special highlights
6. `textMuted` - Bullet point text - Most content text uses this
7. `bgCard` - Content backgrounds - Every section uses this
8. `textHeading` - Banner text - Header titles

🥉 **TIER 3 - SUPPORTING (Polish & Consistency)**
9. `borderPrimary` - Section underlines
10. `bgMain` - Page background
11. `textHeaderSecondary` - Contact info text
12. `bgSubtle/bgHover` - Link button states

=== COLOR STRATEGY FOR NEW COMPANIES ===

**MINIMUM VIABLE THEME (2 Colors):**
- Choose `bgMain2` (dark company color) + `bgBrandPrimary` (bright accent color)
- These two control the most visual impact

**OPTIMAL THEME (3-4 Colors):**
- Add `brandSecondary` (for icons/special accents) 
- Add `textSecondary` (for skill descriptions - could be 3rd company color)

**POTENTIAL 3RD/4TH COLOR USAGE AREAS:**
- `textSecondary` - Currently skills, could be project technologies
- `bgSubtle` - Link buttons could use 3rd color for GitHub vs external vs papers
- `textSubtle` - Rarely used, perfect for optional 4th color
- `brandSecondary` - Icons and special highlights, ideal for 3rd color

=== COMPANY COLOR EXAMPLES WITH USAGE ===
- **Google**: bgMain2: Blue (#4285F4), bgBrandPrimary: Red (#EA4335), brandSecondary: Yellow (#FBBC04)
- **Microsoft**: bgMain2: Blue (#0078D4), bgBrandPrimary: Cyan (#00BCF2), brandSecondary: Gray accent
- **Netflix**: bgMain2: Black (#141414), bgBrandPrimary: Red (#E50914), brandSecondary: White accent
- **Apple**: bgMain2: Blue (#007AFF), bgBrandPrimary: Gray (#8E8E93), brandSecondary: Light blue accent
*/

// ===========================================
// UTILITY FUNCTIONS FOR THEME GENERATION
// ===========================================

/**
 * Determines if a hex color is light or dark
 * @param {string} hex - Hex color code (e.g., "#4285F4")
 * @returns {boolean} - True if light, false if dark
 */
export function isLightColor(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.5;
}

/**
 * Determines optimal text color for badges/buttons based on background color
 * @param {string} hex - Background color hex (e.g., "#FF9900")
 * @returns {string} - 'text-white' for dark backgrounds, 'text-black' for light backgrounds
 */
export function getOptimalButtonTextColor(hex) {
  return isLightColor(hex) ? 'text-black' : 'text-white';
}

/**
 * Generates a darker version of a hex color
 * @param {string} hex - Original hex color
 * @param {number} factor - Darkening factor (0.1 = 10% darker)
 * @returns {string} - Darker hex color
 */
export function darkenColor(hex, factor = 0.3) {
  const r = Math.round(parseInt(hex.slice(1, 3), 16) * (1 - factor));
  const g = Math.round(parseInt(hex.slice(3, 5), 16) * (1 - factor));
  const b = Math.round(parseInt(hex.slice(5, 7), 16) * (1 - factor));
  return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
}

/**
 * Determines if a color is dark enough to be used as main text color
 * @param {string} hex - Hex color code
 * @returns {boolean} - True if dark enough for main text
 */
export function isDarkEnoughForText(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance < 0.3; // Dark enough for main text
}



// ===========================================
// AMAZON LIGHT THEME - REFERENCE IMPLEMENTATION
// ===========================================
export const amazonLightColors = {
  // === HEADER/BANNER SECTION COLORS ===
  // USAGE: Header.tsx (line 6), AdditionalTechnicalExperience.tsx (line 6)
  textHeading: 'text-white',           // Main headings in dark banner sections (white on dark Amazon blue)
                                      // USED: Header.tsx - "SURAJ SINGH" title, AdditionalTechnicalExperience.tsx - section title
  
  textHeaderSecondary: 'text-gray-200', // Secondary text in dark banner sections (light gray on dark Amazon blue)
                                        // USED: Header.tsx - contact info (phone, email, location, links)
  
  // === MAIN CONTENT AREA COLORS ===
  // USAGE: Used throughout resume content on light backgrounds
  textBody: 'text-[#232F3E]',          // Primary body text (Amazon dark blue on light backgrounds)
                                      // USED: All section titles in SectionTitle.tsx, company names, project titles, achievement titles
                                      // LOCATIONS: Experience.tsx, Projects.tsx, Achievements.tsx, Research.tsx, AndroidDev.tsx, Hackathons.tsx
                                      // NOTE: This is THE MOST IMPORTANT text color - controls all major headings
  
  textSecondary: 'text-[#37475A]',     // Secondary text content (lighter Amazon blue for hierarchy)
                                      // USED: Skills.tsx - skill descriptions, Education.tsx - degree info
                                      // POTENTIAL 3RD COLOR: Could use different color for skill descriptions vs degree info
  
  textMuted: 'text-gray-600',          // Muted text for less important info (medium gray)
                                      // USED: All bullet points in experience/projects/research, dates in achievements
                                      // LOCATIONS: Experience.tsx, Projects.tsx, Research.tsx, AndroidDev.tsx, Hackathons.tsx, Achievements.tsx
                                      // NOTE: This controls ALL bullet point content - major visual element
  
  textSubtle: 'text-gray-500',         // Most subtle text like dates (light gray)
                                      // USED: Education.tsx - location text
                                      // POTENTIAL 4TH COLOR: Very rarely used - could be company-specific subtle accent

  buttonTextColor: 'text-black',       // Text color for badges/buttons on bgBrandPrimary background
                                      // USED: Header.tsx - CGPA badge text, Education.tsx - CGPA badge text, SDE Application button text
                                      // NOTE: Auto-calculated based on bgBrandPrimary luminance for optimal contrast
                                      // LOGIC: Dark backgrounds get white text, light backgrounds get black text
                                      // AMAZON: Orange background (#FF9900) is light, so uses black text for readability                                    
  
  
  // === BACKGROUND COLOR HIERARCHY ===
  bgMain2: 'bg-[#232F3E]',             // DARK banner background (Amazon dark blue) - CRITICAL: determines text strategy
                                      // USED: Header.tsx (line 6), AdditionalTechnicalExperience.tsx (line 6)
                                      // NOTE: **PRIMARY BRAND COLOR** - This is the main company color that appears in banners
                                      // IMPORTANCE: ⭐⭐⭐⭐⭐ MOST CRITICAL - This sets the entire theme tone
  
  bgMain: 'bg-[#eaebea]',              // Main content area background (light cream/beige)
                                      // USED: App.tsx, Resume.tsx - main page background
                                      // NOTE: The base color that everything sits on
  
  bgCard: 'bg-white',                  // Individual card/section backgrounds (pure white)
                                      // USED: ALL content cards - Skills.tsx, Experience.tsx, Projects.tsx, Achievements.tsx, Research.tsx, AndroidDev.tsx, Hackathons.tsx, Header.tsx (education card)
                                      // NOTE: Most frequently used background - every content box uses this
  
  bgSubtle: 'bg-gray-50',              // Subtle accent backgrounds for links/buttons
                                      // USED: All external link buttons throughout the resume
                                      // LOCATIONS: Experience.tsx, Projects.tsx, Achievements.tsx, Research.tsx, AndroidDev.tsx, Hackathons.tsx
                                      // POTENTIAL 3RD COLOR: Could use different color for different types of links (GitHub vs external vs papers)
  
  bgHover: 'bg-gray-100',              // Hover states for interactive elements
                                      // USED: Hover states for all link buttons
                                      // POTENTIAL 4TH COLOR: Could be company-specific hover accent
  
  // === BORDER SYSTEM ===
  borderPrimary: 'border-[#232F3E]',   // Section divider borders (matches primary brand)
                                      // USED: SectionTitle.tsx - underlines all section titles
                                      // NOTE: Creates the line under "Technical Skills", "Experience", "Projects", etc.
  
  borderAccent: 'border-gray-300',     // Secondary borders for cards/subtle divisions
                                      // USED: Currently in UI components (not main sections)
  
  // === BRAND ACCENT COLORS ===
  // Amazon uses 2 colors: Dark blue (#232F3E) + Orange (#FF9900)
  brandPrimary: 'text-[#232F3E]',      // Primary brand color for most accents/highlights
                                      // USED: SectionTitle.tsx - ALL section titles, bullet points (•), highlighted text within bullet points
                                      // LOCATIONS: Every single section uses this for emphasis and accents
                                      // NOTE: ⭐⭐⭐⭐⭐ SECOND MOST CRITICAL - This appears everywhere as accent color
  
  brandSecondary: 'text-[#FF9900]',    // Secondary brand color for key highlights
                                      // USED: Header.tsx - all contact icons (phone, email, location, LinkedIn, GitHub, LeetCode)
                                      // NOTE: ⭐⭐⭐ IMPORTANT - Provides visual distinction for contact info
                                      // ADAPTIVE: Changes per company (Amazon orange, Google red, etc.)
  
  bgBrandPrimary: 'bg-[#FF9900]',      // Background version of secondary brand (orange badges)
                                      // USED: Header.tsx - "SDE Application" button, "CGPA: 8.5" badges
                                      // LOCATIONS: Education.tsx - CGPA badge background  
                                      // NOTE: ⭐⭐⭐⭐ VERY IMPORTANT - This is the bright secondary color that makes elements pop
                                      // IMPORTANCE: This creates the visual hierarchy - what gets user's attention first
                                      

  // === INTERACTIVE ELEMENTS ===
  cardShadow: 'shadow-sm',             // Default card shadow (subtle)
                                      // USED: All content cards for subtle depth
  
  cardShadowHover: 'shadow-md',        // Enhanced shadow on hover
                                      // USED: Hover effects on all content cards
  
  // === LEGACY UI COMPATIBILITY ===
  // Keep these for existing UI components - mostly unused in current implementation
  uiTextPrimary: 'text-[#232F3E]',     // Primary UI text
  uiTextSecondary: 'text-[#37475A]',   // Secondary UI text
  uiTextTertiary: 'text-gray-600',     // Tertiary UI text
  uiTextMuted: 'text-gray-500',        // Muted UI text
  uiBgPrimary: 'bg-white',             // Primary UI background
  uiBgHover: 'bg-gray-100',            // UI hover background
  uiBorderAccent: 'border-gray-300',   // UI border color
  uiBrandPrimary: 'text-[#232F3E]',    // UI brand primary
  uiBrandSecondary: 'text-[#37475A]',  // UI brand secondary
  uiBrandTertiary: 'text-gray-600',    // UI brand tertiary
};


// Cohesity Light Theme - Bright Green Brand + Dark Professional Balance
export const cohesityLightColors = {
  // === HEADER/BANNER SECTION COLORS ===
  textHeading: 'text-white',           // White text on bright green banner for maximum contrast
  textHeaderSecondary: 'text-gray-100', // Light gray for contact info on bright green
  
  // === MAIN CONTENT AREA COLORS ===
  textBody: 'text-[#2d3748]',          // Professional dark gray for all major headings (company names, project titles)
  textSecondary: 'text-[#4a5568]',     // Slightly lighter gray for skill descriptions and degree info
  textMuted: 'text-gray-600',          // Standard gray for bullet points and content details
  textSubtle: 'text-gray-500',         // Light gray for dates and locations
  buttonTextColor: 'text-white',       // White text on dark gray badges/buttons for contrast
  
  // === BACKGROUND COLOR HIERARCHY ===
  bgMain2: 'bg-[#00d647]',             // Cohesity bright green banner - HIGH CONTRAST with dark gray badges
  bgMain: 'bg-[#f7fafc]',              // Very light gray main content background
  bgCard: 'bg-white',                  // Pure white for content cards
  bgSubtle: 'bg-gray-50',              // Subtle background for link buttons
  bgHover: 'bg-gray-100',              // Hover states for interactive elements
  
  // === BORDER SYSTEM ===
  borderPrimary: 'border-[#2d3748]',   // Dark gray borders for section underlines
  borderAccent: 'border-gray-300',     // Light gray for subtle divisions
  
  // === BRAND ACCENT COLORS ===
  brandPrimary: 'text-[#2d3748]',      // Dark gray for section titles and main accents
  brandSecondary: 'text-[#2d3748]',     // Dark gray for secondary accents
  bgBrandPrimary: 'bg-[#2d3748]',      // Dark gray badges (CGPA, SDE Application button) - STRONG CONTRAST with green banner
  
  // === INTERACTIVE ELEMENTS ===
  cardShadow: 'shadow-sm',             // Subtle card shadows
  cardShadowHover: 'shadow-md',        // Enhanced hover shadows
  
  // === LEGACY UI COMPATIBILITY ===
  uiTextPrimary: 'text-[#2d3748]',     // Primary UI text
  uiTextSecondary: 'text-[#4a5568]',   // Secondary UI text
  uiTextTertiary: 'text-gray-600',     // Tertiary UI text
  uiTextMuted: 'text-gray-500',        // Muted UI text
  uiBgPrimary: 'bg-white',             // Primary UI background
  uiBgHover: 'bg-gray-100',            // UI hover background
  uiBorderAccent: 'border-gray-300',   // UI border color
  uiBrandPrimary: 'text-[#2d3748]',    // UI brand primary
  uiBrandSecondary: 'text-[#4a5568]',  // UI brand secondary
  uiBrandTertiary: 'text-gray-600',    // UI brand tertiary
};


// Netflix Light Theme - Signature Red Brand + Black Professional Base
export const netflixLightColors = {
  // === HEADER/BANNER SECTION COLORS ===
  textHeading: 'text-white',           // White text on black banner for maximum contrast
  textHeaderSecondary: 'text-gray-200', // Light gray for contact info on black background
  
  // === MAIN CONTENT AREA COLORS ===
  textBody: 'text-[#221f1f]',          // Deep charcoal for all major headings (company names, project titles)
  textSecondary: 'text-[#564d4d]',     // Warm gray for skill descriptions and degree info  
  textMuted: 'text-gray-600',          // Standard gray for bullet points and content details
  textSubtle: 'text-gray-500',         // Light gray for dates and locations
  buttonTextColor: 'text-white',       // White text on red badges/buttons for optimal contrast
  
  // === BACKGROUND COLOR HIERARCHY ===
  bgMain2: 'bg-[#141414]',             // Netflix signature black banner - STRONG CONTRAST with red badges
  bgMain: 'bg-[#fafafa]',              // Very light gray main content background
  bgCard: 'bg-white',                  // Pure white for content cards
  bgSubtle: 'bg-gray-50',              // Subtle background for link buttons
  bgHover: 'bg-gray-100',              // Hover states for interactive elements
  
  // === BORDER SYSTEM ===
  borderPrimary: 'border-[#221f1f]',   // Deep charcoal borders for section underlines
  borderAccent: 'border-gray-300',     // Light gray for subtle divisions
  
  // === BRAND ACCENT COLORS ===
  brandPrimary: 'text-[#221f1f]',      // Deep charcoal for section titles and main accents
  brandSecondary: 'text-[#E50914]',    // Netflix signature red for contact icons and special highlights
  bgBrandPrimary: 'bg-[#E50914]',      // Netflix red badges (CGPA, SDE Application button) - DRAMATIC CONTRAST with black banner
  
  // === INTERACTIVE ELEMENTS ===
  cardShadow: 'shadow-sm',             // Subtle card shadows
  cardShadowHover: 'shadow-md',        // Enhanced hover shadows
  
  // === LEGACY UI COMPATIBILITY ===
  uiTextPrimary: 'text-[#221f1f]',     // Primary UI text
  uiTextSecondary: 'text-[#564d4d]',   // Secondary UI text
  uiTextTertiary: 'text-gray-600',     // Tertiary UI text
  uiTextMuted: 'text-gray-500',        // Muted UI text
  uiBgPrimary: 'bg-white',             // Primary UI background
  uiBgHover: 'bg-gray-100',            // UI hover background
  uiBorderAccent: 'border-gray-300',   // UI border color
  uiBrandPrimary: 'text-[#221f1f]',    // UI brand primary
  uiBrandSecondary: 'text-[#564d4d]',  // UI brand secondary
  uiBrandTertiary: 'text-gray-600',    // UI brand tertiary
};
// Google Light Theme - Professional Blue Base + Multi-Color Brand Accents
export const googleLightColors = {
  // === HEADER/BANNER SECTION COLORS ===
  textHeading: 'text-white',           // White text on Google blue banner for maximum contrast
  textHeaderSecondary: 'text-gray-100', // Light gray for contact info on blue background
  
  // === MAIN CONTENT AREA COLORS ===
  textBody: 'text-[#1a73e8]',          // Google blue for all major headings (company names, project titles)
  textSecondary: 'text-[#5f6368]',     // Google's secondary gray for skill descriptions and degree info
  textMuted: 'text-gray-600',          // Standard gray for bullet points and content details
  textSubtle: 'text-gray-500',         // Light gray for dates and locations
  buttonTextColor: 'text-white',       // White text on red badges/buttons for optimal contrast
  
  // === BACKGROUND COLOR HIERARCHY ===
  bgMain2: 'bg-[#4285F4]',             // Google signature blue banner - STRONG CONTRAST with red badges
  bgMain: 'bg-[#fafbff]',              // Very light blue-tinted background
  bgCard: 'bg-white',                  // Pure white for content cards
  bgSubtle: 'bg-gray-50',              // Subtle background for link buttons
  bgHover: 'bg-gray-100',              // Hover states for interactive elements
  
  // === BORDER SYSTEM ===
  borderPrimary: 'border-[#1a73e8]',   // Google blue borders for section underlines
  borderAccent: 'border-gray-300',     // Light gray for subtle divisions
  
  // === BRAND ACCENT COLORS ===
  brandPrimary: 'text-[#1a73e8]',      // Google blue for section titles and main accents
  brandSecondary: 'text-[#34A853]',    // Google green for contact icons and special highlights
  bgBrandPrimary: 'bg-[#EA4335]',      // Google red badges (CGPA, SDE Application button) - DRAMATIC CONTRAST with blue banner
  
  // === INTERACTIVE ELEMENTS ===
  cardShadow: 'shadow-sm',             // Subtle card shadows
  cardShadowHover: 'shadow-md',        // Enhanced hover shadows
  
  // === LEGACY UI COMPATIBILITY ===
  uiTextPrimary: 'text-[#1a73e8]',     // Primary UI text
  uiTextSecondary: 'text-[#5f6368]',   // Secondary UI text
  uiTextTertiary: 'text-gray-600',     // Tertiary UI text
  uiTextMuted: 'text-gray-500',        // Muted UI text
  uiBgPrimary: 'bg-white',             // Primary UI background
  uiBgHover: 'bg-gray-100',            // UI hover background
  uiBorderAccent: 'border-gray-300',   // UI border color
  uiBrandPrimary: 'text-[#1a73e8]',    // UI brand primary
  uiBrandSecondary: 'text-[#5f6368]',  // UI brand secondary
  uiBrandTertiary: 'text-gray-600',    // UI brand tertiary
};

// Barclays Light Theme - Professional Cyan Blue + Navy Financial Sophistication
export const barclaysLightColors = {
  // === HEADER/BANNER SECTION COLORS ===
  textHeading: 'text-white',           // White text on cyan blue banner for maximum contrast
  textHeaderSecondary: 'text-gray-100', // Light gray for contact info on cyan background
  
  // === MAIN CONTENT AREA COLORS ===
  textBody: 'text-[#003c71]',          // Deep navy blue for all major headings (professional banking tone)
  textSecondary: 'text-[#0057a0]',     // Medium blue for skill descriptions and degree info
  textMuted: 'text-gray-600',          // Standard gray for bullet points and content details
  textSubtle: 'text-gray-500',         // Light gray for dates and locations
  buttonTextColor: 'text-white',       // White text on navy badges/buttons for optimal contrast
  
  // === BACKGROUND COLOR HIERARCHY ===
  bgMain2: 'bg-[#00AEEF]',             // Barclays signature cyan blue banner - STRONG CONTRAST with navy badges
  bgMain: 'bg-[#f8fbff]',              // Very light blue-tinted background for financial professionalism
  bgCard: 'bg-white',                  // Pure white for content cards
  bgSubtle: 'bg-gray-50',              // Subtle background for link buttons
  bgHover: 'bg-gray-100',              // Hover states for interactive elements
  
  // === BORDER SYSTEM ===
  borderPrimary: 'border-[#003c71]',   // Deep navy borders for section underlines
  borderAccent: 'border-gray-300',     // Light gray for subtle divisions
  
  // === BRAND ACCENT COLORS ===
  brandPrimary: 'text-[#00AEEF]',      // Barclays cyan for section titles and main accents (matches bgMain2)
  brandSecondary: 'text-[#003c71]',    // Deep navy for contact icons and special highlights (matches bgBrandPrimary)
  bgBrandPrimary: 'bg-[#003c71]',      // Navy badges (CGPA, SDE Application button) - PROFESSIONAL CONTRAST with cyan banner
      
  // === INTERACTIVE ELEMENTS ===
  cardShadow: 'shadow-sm',             // Subtle card shadows
  cardShadowHover: 'shadow-md',        // Enhanced hover shadows
  
  // === LEGACY UI COMPATIBILITY ===
  uiTextPrimary: 'text-[#003c71]',     // Primary UI text
  uiTextSecondary: 'text-[#0057a0]',   // Secondary UI text
  uiTextTertiary: 'text-gray-600',     // Tertiary UI text
  uiTextMuted: 'text-gray-500',        // Muted UI text
  uiBgPrimary: 'bg-white',             // Primary UI background
  uiBgHover: 'bg-gray-100',            // UI hover background
  uiBorderAccent: 'border-gray-300',   // UI border color
  uiBrandPrimary: 'text-[#003c71]',    // UI brand primary
  uiBrandSecondary: 'text-[#0057a0]',  // UI brand secondary
  uiBrandTertiary: 'text-gray-600',    // UI brand tertiary
};

// ===========================================
// ACTIVE THEME SELECTION
// ===========================================
// Switch between company themes here - simply change the variable name
export const theme = barclaysLightColors;



/**
 * Template function for generating company theme with professional text strategy
 * @param {string} primaryColor - Main brand color hex (usually darker)
 * @param {string} secondaryColor - Secondary brand color hex (usually brighter)
 * @param {string} companyName - Company name for variable naming
 */
export function generateCompanyTheme(primaryColor, secondaryColor = null, companyName = 'company') {
  const isLightBanner = isLightColor(primaryColor);
  const darkEnoughForText = isDarkEnoughForText(primaryColor);
  
  // Smart text color decision
  const mainTextColor = darkEnoughForText ? primaryColor : '#1f2937'; // Use brand if dark enough, else 87% black equivalent
  const darkVersion = darkenColor(primaryColor, 0.3);
  
  return `
export const ${companyName}LightColors = {
  // === HEADER/BANNER SECTION COLORS ===
  textHeading: '${isLightBanner ? `text-[${darkVersion}]` : 'text-white'}',
  textHeaderSecondary: '${isLightBanner ? `text-[${darkenColor(primaryColor, 0.2)}]` : 'text-gray-200'}',
  
  // === MAIN CONTENT COLORS (Professional + Branded) ===
  textBody: 'text-[${mainTextColor}]',              // Professional readability first
  textSecondary: 'text-[${darkenColor(primaryColor, 0.1)}]',   // Brand-inspired but readable
  textMuted: 'text-gray-600',                       // Standard hierarchy
  textSubtle: 'text-gray-500',                      // Subtle text
  textBlack: 'text-black',                          // High contrast elements
  
  // === BACKGROUND HIERARCHY ===
  bgMain2: 'bg-[${primaryColor}]',                  // Banner background
  bgMain: 'bg-[#f8f9fa]',                          // Main content background
  bgCard: 'bg-white',                              // Card backgrounds
  bgSubtle: 'bg-gray-50',                          // Subtle accents
  bgHover: 'bg-gray-100',                          // Hover states
  
  // === BORDERS ===
  borderPrimary: 'border-[${primaryColor}]',        // Section borders
  borderAccent: 'border-gray-300',                 // Card borders
  
  // === BRAND COLORS ===
  brandPrimary: 'text-[${primaryColor}]',          // Brand accents
  ${secondaryColor ? `brandSecondary: 'text-[${secondaryColor}]',` : ''}    // Bright accent color
  bgBrandPrimary: 'bg-[${secondaryColor || primaryColor}]',  // Bright badge background
  
  // === INTERACTIVE ELEMENTS ===
  cardShadow: 'shadow-sm',
  cardShadowHover: 'shadow-md',
  
  // === UI COMPATIBILITY ===
  uiTextPrimary: 'text-[${mainTextColor}]',
  uiTextSecondary: 'text-[${darkenColor(primaryColor, 0.1)}]',
  uiTextTertiary: 'text-gray-600',
  uiTextMuted: 'text-gray-500',
  uiBgPrimary: 'bg-white',
  uiBgHover: 'bg-gray-100',
  uiBorderAccent: 'border-gray-300',
  uiBrandPrimary: 'text-[${primaryColor}]',
  uiBrandSecondary: 'text-[${darkenColor(primaryColor, 0.1)}]',
  uiBrandTertiary: 'text-gray-600',
};`;
}