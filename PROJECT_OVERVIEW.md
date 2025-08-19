# Dana's Portfolio - Project Overview & Architecture Documentation

## Project Type & Tech Stack
- **Framework**: Next.js 15.4.5 (React 19.1.0) with TypeScript
- **Styling**: Tailwind CSS v4.1.11 with extensive custom CSS system
- **Fonts**: Inter (sans-serif) & Instrument Serif (serif) via Google Fonts
- **Architecture**: Modern React with client-side interactivity and SSG/SSR capabilities
- **Performance**: Turbopack for development, optimized build pipeline

## Architecture Overview

### File Structure Analysis
```
danas-site/
├── app/                    # Next.js App Router (Route Handlers)
│   ├── [pages]/           # Page routes (about, contact, expertise, work)
│   ├── work/[slug]/       # Dynamic project detail pages
│   ├── layout.tsx         # Root layout with global providers
│   └── globals.css        # Main styling foundation
├── components/
│   ├── sections/          # Page-level components (Hero, About, etc.)
│   └── ui/               # Reusable UI components
├── content/projects/      # Markdown project content
├── hooks/                 # Custom React hooks
├── lib/                  # Utilities and data management
├── public/               # Static assets (images, videos)
└── styles/               # Modular CSS system (mostly empty - using globals.css)
```

## Styling System Deep Dive

### Primary Approach: Hybrid Tailwind + Custom CSS
1. **Tailwind CSS v4.1.11**: Base utility framework
2. **Extensive Custom CSS**: 1200+ lines in `globals.css` for editorial-specific styling
3. **CSS Variables**: Comprehensive design token system
4. **Responsive Design**: Mobile-first approach with thoughtful breakpoints

### Color System (Editorial/Magazine Inspired)
```css
Primary Colors:
- Background: #FAF8F4 (warm off-white, paper-like)
- Surface: #F7F5F1 (elevated surfaces)
- Primary: #1A1A1A (rich black text)
- Secondary: #6B6B68 (warm gray)
- Accent: #ECD06F (muted gold)
- Muted: #9A9A9A (soft gray)
```

### Typography Hierarchy
- **Serif Font**: Instrument Serif (headlines, emphasis)
- **Sans Font**: Inter (body text, UI elements)
- **Editorial Scale**: Custom type scale from 0.75rem to 8rem
- **Line Heights**: Optimized for readability (1.1-1.8 depending on size)
- **Letter Spacing**: Tight for headlines (-0.02em), wide for small caps (0.1-0.2em)

### Spacing System
- **8px Base Unit**: Professional spacing scale (8px, 16px, 24px, 32px, 48px, 64px, 96px, 128px)
- **Section Padding**: Generous vertical spacing (96px-128px on desktop)
- **Content Gaps**: Consistent heading-to-content relationships
- **Editorial Breathing Room**: Extensive use of white space

### Layout Philosophy
- **Editorial Magazine Style**: Inspired by Cereal and Kinfolk magazines
- **Asymmetric Grids**: 7-5, 8-4, 6-6 column splits for visual interest
- **Content Width**: 75ch max for optimal readability
- **Full-Screen Sections**: 100vh sections on homepage with scroll-snap

## Component Architecture

### Global Layout System (`layout.tsx`)
- **Universal Components**: PageLoader, CustomCursor, GrainOverlay, Navigation
- **Error Boundaries**: Comprehensive error handling
- **Font Loading**: Optimized Google Fonts with variable font loading
- **Hydration Management**: Sophisticated handling of browser extension conflicts

### Key UI Components

#### Navigation (`components/ui/Navigation.tsx`)
- **Sticky positioning** with scroll-based hide/show
- **Active state management** with localStorage persistence
- **Mobile-responsive** hamburger menu
- **Accessibility features** (ARIA labels, keyboard navigation)

#### Custom Cursor (`components/ui/CustomCursor.tsx`)
- **Interactive cursor** with hover states
- **Smooth animations** following mouse movement
- **Desktop-only** rendering (mobile detection)

#### Hero Section (`components/sections/Hero.tsx`)
- **Parallax effects** for text and background elements
- **Scroll animations** with staggered reveals
- **Performance optimized** with requestAnimationFrame
- **Loading states** with sophisticated animation timing

### Content Management

#### Project Data (`lib/projectData.ts`)
- **TypeScript interfaces** for type safety
- **Structured project metadata** (title, company, year, metrics, tags)
- **Flexible configuration** for work page display options

#### Markdown Content System
- **Individual project pages** as markdown files in `content/projects/`
- **Rich media support** (images, videos, tables)
- **Editorial content styling** with responsive image handling

## Styling Strategy Details

### CSS Organization
1. **globals.css** (1200+ lines): Primary styling file containing:
   - CSS Reset and base styles
   - Design system variables
   - Typography hierarchy
   - Component-specific styles
   - Responsive design rules
   - Animation keyframes

2. **Tailwind Configuration**: Custom extended theme in `tailwind.config.ts`
   - Color palette extension
   - Typography scale customization
   - Font family variables

3. **Modular CSS** (partially implemented): `styles/` directory structure exists but currently unused

### Animation System
- **Scroll-triggered animations** using Intersection Observer
- **Parallax effects** with transform3d for performance
- **Breathing animations** for CTAs and interactive elements
- **Grain texture overlay** with subtle movement
- **Transition timing**: 300-800ms with cubic-bezier easing

### Responsive Strategy
- **Mobile-first** approach with progressive enhancement
- **Breakpoints**: 768px (tablet), 1024px (desktop)
- **Fluid typography** using clamp() for scalable text
- **Container queries** and modern CSS features where appropriate

## Performance Optimizations

### Next.js Configuration
- **React Strict Mode** enabled
- **Package import optimization** for Headless UI and Heroicons
- **Console removal** in production builds
- **Hydration warning suppression** for browser extensions

### Image & Media Handling
- **Next.js Image component** with optimization
- **Priority loading** for above-the-fold content
- **Responsive images** with proper aspect ratios
- **Video optimization** with proper controls and backgrounds

### Loading & Hydration
- **Progressive loading** with staggered animations
- **Client-only components** for browser-specific features
- **Optimized scroll handlers** with requestAnimationFrame
- **Intersection Observer** for scroll-triggered animations

## Special Features

### Editorial Design Elements
- **Grain texture overlay** for paper-like aesthetic
- **Custom cursor** for desktop interaction
- **Scroll indicators** with animated bouncing
- **Editorial dividers** with subtle opacity changes
- **Typography-first** design approach

### User Experience Enhancements
- **Smooth scrolling** between sections
- **Loading states** with sophisticated timing
- **Accessibility considerations** (prefers-reduced-motion)
- **Error boundaries** for graceful failure handling

## Content Strategy

### Project Structure
Each project follows a standardized format:
- **Overview section** with challenge description
- **Multi-section breakdown** of approach/methodology
- **Results and metrics** with specific achievements
- **Rich media integration** (images, videos, tables)

### Writing Style
- **Professional yet approachable** tone
- **Metrics-driven** content with specific achievements
- **Visual storytelling** through carefully curated media
- **Editorial layout** with generous white space

## Key Files for Future Reference

### Core Architecture
- `app/layout.tsx` - Root layout and global providers
- `app/globals.css` - Primary styling system (1200+ lines)
- `tailwind.config.ts` - Tailwind customizations
- `components/ui/Navigation.tsx` - Main navigation component

### Content Management
- `lib/projectData.ts` - Project data structure and configuration
- `content/projects/` - Individual project markdown files
- `components/sections/` - Page-level components

### Styling Resources
- `STYLE_GUIDE.md` - Comprehensive design system documentation
- `styles/spacing.module.css` - Modular spacing utilities (partially used)

## Development Notes

### Browser Compatibility
- **Modern browser features** (CSS Grid, Flexbox, CSS Variables)
- **Fallbacks provided** for older browsers where necessary
- **Progressive enhancement** approach

### Maintenance Considerations
- **Type safety** throughout with TypeScript
- **Modular component structure** for easy updates
- **Comprehensive CSS documentation** in style guide
- **Performance monitoring** through Next.js analytics

This architecture represents a sophisticated, performance-optimized portfolio site with editorial design principles, modern React patterns, and a comprehensive styling system that prioritizes both developer experience and end-user performance.
