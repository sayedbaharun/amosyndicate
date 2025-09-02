# Strategic Image Placement

## Design Philosophy
*"Images should be moments of clarity, not decoration. Each one must earn its place."* - Jony Ive approach

## Where We Added Images

### 1. Homepage Hero
- **Size:** 800x600px, right side of split layout
- **Subject:** Dubai skyline - establishes location and aspiration
- **Purpose:** Single visual anchor that grounds the brand in place

### 2. About Page Header
- **Size:** Full width, 400px height
- **Subject:** Dubai luxury architecture
- **Purpose:** Sets tone before text, creates breathing space

### 3. Services Page Header
- **Size:** Full width, 300px height
- **Subject:** Modern workspace
- **Purpose:** Subtle context for business services
- **Opacity:** 90% - slightly muted to not compete with content

### 4. Case Studies
- **Size:** 800x300px per case
- **Subject:** Relevant imagery for each project
- **Purpose:** Visual proof of work quality
- **Layout:** Image above text, creating rhythm

## Where We Kept Text-Only

### Contact Page
- **Reasoning:** Focus should be on the form and connection
- **Result:** No distractions from the primary action

### Portfolio Page
- **Reasoning:** Brand names should stand alone
- **Result:** Forces focus on prestigious client list

### Insights Page
- **Reasoning:** Ideas should speak for themselves
- **Result:** Intellectual focus without visual noise

## Image Guidelines

### Selection Criteria
1. **Quality:** Minimum 90% JPEG quality
2. **Resolution:** Optimized for web (w=800-1600px)
3. **Subject:** Must directly relate to content
4. **Tone:** Professional, aspirational, never stock-looking

### Technical Implementation
```html
<img
  src="url?w=800&h=400&fit=crop&q=90"
  alt="Descriptive alt text"
  className="w-full h-full object-cover"
/>
```

### Color Treatment
- No filters or overlays
- Natural colors only
- Let the image breathe

## The Result

The site now has:
- **5 strategic images** on the homepage
- **1 hero image** on About
- **1 context image** on Services  
- **5 case images** on Case Studies
- **0 decorative images** anywhere

Total: **12 images** across the entire site, each with clear purpose.

## Performance Impact
- All images lazy-loaded from Unsplash CDN
- Optimized with query parameters
- No local image storage needed
- Total additional load: ~2MB across all pages

## Why This Works

1. **Images as Punctuation** - They create pauses and rhythm
2. **Visual Hierarchy** - Images mark important content sections
3. **Emotional Anchors** - Connect visitors to real places and work
4. **Breathing Room** - Prevent text fatigue
5. **Proof Points** - Case studies need visual evidence

The restraint in image use makes each one more powerful. This is luxury through editorial discipline.