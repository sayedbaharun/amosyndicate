# Minimal Design Implementation Plan

## Current Issues
1. **Inconsistent Design Language** - Homepage is minimal, other pages are ornate
2. **Broken Components** - Old Header/Footer on inner pages with decorative styles
3. **Typography Chaos** - Mix of old fonts (Playfair, Montserrat) and system fonts
4. **Color Confusion** - Old pages using 7 colors, new using 3
5. **Layout Mismatch** - Different grids and spacing systems

## The Solution: Complete Minimal System

### Design Principles
- **3 Colors Total:** Black (#000), White (#FFF), Gold (#B8A06A)
- **1 Font:** System font stack only
- **8-Point Grid:** All spacing in multiples of 8px
- **No Decoration:** Zero gradients, shadows, or effects
- **Single Column:** Maximum 800px width for content

## Page-by-Page Implementation

### 1. Contact Page
**Current:** Complex form with animations, multiple sections, decorative elements
**New Design:**
```
[Header - minimal]

Contact
-------
hello@amomarketing.com
+971 4 XXX XXXX
Dubai, UAE

Send us a message:
[Name field]
[Email field]
[Message field]
[Send button]

[Footer - minimal]
```
- Single column, 600px max width
- Plain form fields with 1px black border
- No icons, no animations

### 2. Services Page
**Current:** Three tiers with features, gradients, pricing
**New Design:**
```
[Header - minimal]

Services
--------
Strategy
Brand positioning for Gulf luxury market.

Content
Bilingual content with cultural authenticity.

Growth
Performance marketing with measurable outcomes.

[Contact button]

[Footer - minimal]
```
- Three text blocks, no cards
- No icons or decorative elements
- Single CTA at bottom

### 3. About Page
**Current:** Multiple sections, team, timeline, values
**New Design:**
```
[Header - minimal]

About
-----
AMO Marketing serves the Gulf's most 
prestigious brands with cultural understanding 
and digital excellence.

Founded in Dubai, we work with royal families,
sovereign funds, and luxury enterprises.

[Contact button]

[Footer - minimal]
```
- Two paragraphs maximum
- No images or decorations
- Single CTA

### 4. Portfolio Page
**Current:** Animated carousel with categories
**New Design:**
```
[Header - minimal]

Portfolio
---------
Emaar Properties
Emirates
Jumeirah Group
Majid Al Futtaim
[... grid of names only]

[Footer - minimal]
```
- Static 4-column grid
- Names only, no logos
- No filtering or animation

### 5. Case Studies Page
**Current:** Cards with images, metrics, descriptions
**New Design:**
```
[Header - minimal]

Case Studies
------------
Luxury Real Estate Campaign
340% increase in qualified leads

Executive Brand Strategy
Positioned as industry leader

Hospitality Launch
Sold out opening season

[View details →]

[Footer - minimal]
```
- Title + single metric per case
- Plain text, no images
- Simple link for details

### 6. Insights Page
**Current:** Blog cards with images and categories
**New Design:**
```
[Header - minimal]

Insights
--------
Digital Transformation in the Gulf
March 2025

Luxury Marketing During Ramadan
February 2025

Royal Protocol in Digital Marketing
January 2025

[Footer - minimal]
```
- Title + date only
- No images or excerpts
- Chronological list

## Global Components

### Header (all pages)
```
AMO                     About Services Portfolio Cases Contact
---                     --------------------------------------
```
- Fixed position, white background
- No logo, just text
- Contact link in gold

### Footer (all pages)
```
------------------------------------------------------------------
AMO Marketing           Contact              © 2025
Part of AMO LLC         hello@amo.com        All rights reserved
                       Dubai, UAE            
```
- Four columns on desktop
- Stack on mobile
- No social icons

## Typography System
```css
/* Entire system */
h1: 48px, weight 500
h2: 34px, weight 500
h3: 24px, weight 500
body: 17px, weight 400
small: 14px, weight 400

/* Line heights */
headings: 1.2
body: 1.6

/* Letter spacing */
All: -0.02em
```

## Implementation Steps

1. **Create Minimal Layout Component**
   - Wraps all pages with consistent header/footer
   - Sets max-width container
   - Applies base styles

2. **Convert Each Page**
   - Remove all imports of ornate components
   - Strip Framer Motion animations
   - Remove all decorative elements
   - Implement single-column layouts

3. **Delete Old Components**
   - Remove all ornate versions
   - Clean up unused CSS
   - Remove animation libraries

4. **Testing Checklist**
   - [ ] All pages load without errors
   - [ ] Consistent header/footer on all pages
   - [ ] No mixed fonts or colors
   - [ ] All text is readable
   - [ ] Forms are functional
   - [ ] Navigation works correctly
   - [ ] Mobile responsive (single column)

## File Structure
```
/components/
  /minimal/
    Layout.tsx (wrapper for all pages)
    Header.tsx
    Footer.tsx
    ContactForm.tsx
    ServiceList.tsx
    CaseList.tsx
    
/app/
  globals.css (minimal styles only)
  layout.tsx (uses minimal Layout)
  /[page]/
    page.tsx (simple, no decorations)
```

## Success Metrics
- Page weight < 50KB
- Time to Interactive < 1s
- Zero JavaScript animations
- 100% keyboard navigable
- Works without JavaScript enabled