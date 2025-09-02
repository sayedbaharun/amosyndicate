# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Arab Money Official (AMO) is a luxury digital marketing agency website built with Next.js 13.5 using the App Router. The project is a marketing website featuring AI-powered chat, exclusive waiting lists, and ROI calculators targeted at luxury brands in the MENA region.

## Tech Stack

- **Framework**: Next.js 13.5.1 with App Router
- **Language**: TypeScript 5.2 with strict mode enabled
- **Styling**: Tailwind CSS 3.3 with custom luxury gold theme (#D4AF37)
- **Animations**: Framer Motion for premium transitions
- **UI Components**: Radix UI primitives with custom styling
- **Forms**: React Hook Form with Zod validation
- **Fonts**: Playfair Display (headings) and Montserrat (body)

## Development Commands

```bash
# Development server (http://localhost:3000)
npm run dev

# Production build
npm run build

# Start production server
npm start

# Linting
npm run lint

# Static export for deployment
npm run export
```

## Architecture

### App Router Structure

The application uses Next.js 13 App Router with the following key patterns:

1. **Root Layout** (`app/layout.tsx`): Configures global fonts, metadata, and wraps the app in ClientWrapper for global features
2. **Client Wrapper** (`components/layout/ClientWrapper.tsx`): Manages global client-side components (LiveChat and WaitingList) using dynamic imports to avoid SSR issues
3. **Page Organization**: Each route has its own directory under `app/` with a `page.tsx` file

### Component Architecture

```
components/
├── ui/              # Reusable UI components with business logic
│   ├── LiveChat.tsx         # AI-powered chat with keyword routing
│   ├── WaitingList.tsx      # Exclusive waiting list modal
│   └── ROICalculator.tsx    # Interactive ROI projections
├── layout/          # Layout components
│   ├── Header.tsx           # Navigation with luxury styling
│   └── Footer.tsx           # Site footer
└── home/            # Homepage-specific sections
```

### Key Implementation Patterns

1. **Dynamic Imports**: Use `dynamic` from `next/dynamic` for client-only components to prevent SSR issues
2. **Glass Morphism**: Implemented via Tailwind utilities (`backdrop-blur-md bg-white/10`)
3. **Gold Accent Theme**: Primary color `#D4AF37` used throughout for luxury branding
4. **TypeScript Paths**: Use `@/` alias for imports (configured in tsconfig.json)

## Important Components

### LiveChat (`components/ui/LiveChat.tsx`)
- Keyword-based intelligent routing for services, pricing, and ROI inquiries
- Simulated AI responses with typing indicators
- Minimizable floating chat widget

### WaitingList (`components/ui/WaitingList.tsx`)
- "By Invitation Only" exclusive positioning
- Real-time counter showing 147+ applications
- Position tracking system for applicants

### ROICalculator (`components/ui/ROICalculator.tsx`)
- Interactive sliders for budget and duration
- 340% average lead increase calculations
- Visual projection charts

## Styling Guidelines

- Primary gold color: `#D4AF37`
- Background: Black (`#000000`)
- Text: White with opacity variations
- Glass effect: `backdrop-blur-md bg-white/10 border border-white/20`
- Animations: Use Framer Motion for smooth transitions
- Responsive: Mobile-first approach with Tailwind breakpoints

## Deployment

The project is configured for multiple deployment options:
- **Vercel** (recommended): Zero config, automatic deployments
- **GitHub Pages**: Static export with `npm run export`
- **Netlify**: Build command `npm run build && npm run export`
- See `DEPLOYMENT.md` for detailed deployment instructions

## State Management

- No global state management library used
- Component-level state with React hooks
- Form state managed by React Hook Form
- Modal states managed locally in components

## Performance Considerations

- Dynamic imports for heavy client-side components
- Font optimization with Next.js font loading
- Image optimization using Next.js Image component
- Tailwind CSS purging for minimal CSS bundle