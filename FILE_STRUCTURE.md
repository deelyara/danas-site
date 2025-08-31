# Project File Structure Documentation

## Overview
This is a Next.js 15 portfolio website built with TypeScript, TailwindCSS v4, and a modular component architecture. The project follows modern React patterns with client-side routing, editorial design principles, and a sophisticated styling system.

## Core Technologies
- **Framework**: Next.js 15.4.5 with App Router
- **UI**: React 19.1.0 with TypeScript 5
- **Styling**: TailwindCSS 4.1.11 (Alpha) with CSS layers
- **Fonts**: Inter (sans-serif) & Instrument Serif (serif)
- **Development**: Turbopack, ESLint, PostCSS

## Root Structure
```
danas-site/
├── app/                     # Next.js App Router pages
├── components/              # React components
├── content/                 # Markdown content files
├── docs/                    # Project documentation
├── hooks/                   # Custom React hooks
├── lib/                     # Utilities and data
├── public/                  # Static assets
├── styles/                  # CSS modules and styling
├── .next/                   # Build output (gitignored)
├── node_modules/            # Dependencies (gitignored)
└── config files             # Project configuration
```

## App Directory Structure
```
app/
├── layout.tsx              # Root layout with navigation, fonts, global components
├── page.tsx                # Homepage with Hero, WorkTeaser, ContactTeaser
├── globals.css             # Global CSS imports and Tailwind v4 setup
├── favicon.ico             # Site favicon
├── about/
│   └── page.tsx            # About page
├── contact/
│   └── page.tsx            # Contact page  
├── expertise/
│   └── page.tsx            # Expertise page
├── work/
│   ├── page.tsx            # Work listing page
│   ├── [slug]/
│   │   ├── page.tsx        # Dynamic project pages (server component)
│   │   └── client-page.tsx # Client-side project page logic
│   ├── cheerful-buddha/
│   │   └── page.tsx        # Static project page
│   ├── multi-funnel/
│   │   └── page.tsx        # Static project page
│   ├── newsletter/
│   │   └── page.tsx        # Static project page
│   └── wellness-automation/
│       └── page.tsx        # Static project page
└── test/                   # Development test pages
    ├── page.tsx            # Comprehensive Tailwind utility test
    ├── debug.tsx           # Real-time computed styles debug
    ├── minimal.tsx         # Minimal test case
    ├── simple.tsx          # Simple comparison test
    └── raw-test.css        # Raw CSS test file
```

## Components Directory Structure
```
components/
├── project/                # Project-specific components
│   ├── ProjectHero.tsx     # Project hero section
│   ├── ProjectLayout.tsx   # Project page layout wrapper
│   ├── ProjectMedia.tsx    # Media gallery component
│   ├── ProjectMetrics.tsx  # Project metrics display
│   └── ProjectSection.tsx  # Content sections
│
├── sections/               # Page section components
│   ├── About.tsx           # About section
│   ├── AboutTeaser.tsx     # Homepage about teaser
│   ├── Contact.tsx         # Contact section
│   ├── ContactTeaser.tsx   # Homepage contact CTA (updated sizes)
│   ├── Expertise.tsx       # Original expertise grid
│   ├── ExpertiseNew.tsx    # First redesign attempt
│   ├── ExpertiseRedesigned.tsx # Current expertise with SVG logos
│   ├── ExpertiseTeaser.tsx # Homepage expertise preview
│   ├── Hero.tsx            # Homepage hero (85vh height)
│   ├── ProjectPageClient.tsx # Client-side project wrapper
│   ├── ProjectPageWrapper.tsx # Project page container
│   ├── Projects.tsx        # Projects grid
│   ├── Testimonials.tsx    # Updated with real testimonials
│   ├── WorkPageLayout.tsx  # Work page layout
│   └── WorkTeaser.tsx      # Featured work showcase
│
└── ui/                     # Reusable UI components
    ├── ClientOnly.tsx      # Client-side rendering wrapper
    ├── CustomCursor.tsx    # Custom cursor effect
    ├── EditorialDivider.tsx # Section dividers
    ├── ErrorBoundary.tsx   # Error handling
    ├── GrainOverlay.tsx    # Texture overlay effect
    ├── Navigation.tsx      # Main navigation
    ├── PageLoader.tsx      # Loading states
    ├── ProjectCard.tsx     # Project card component
    └── ProjectEntry.tsx    # Work list entry
```

## Styles Directory Structure
```
styles/
├── base/                   # Foundation styles
│   ├── reset.css           # CSS reset (Tailwind v4 compatible)
│   ├── typography.css      # Typography system
│   └── variables.css       # CSS custom properties
│
├── components/             # Component styles
│   ├── buttons.css         # Button styles
│   ├── cards.css           # Card components
│   ├── navigation.css      # Navigation styles
│   ├── tables.css          # Table styles
│   └── work-cards.css      # [DEPRECATED - use cards.css]
│
├── layouts/                # Layout styles
│   ├── editorial.css       # Editorial layout styles
│   ├── grid.css            # Grid systems
│   ├── project.css         # Project page layouts
│   ├── project-page.css    # [DEPRECATED - use project.css]
│   └── sections.css        # Section layouts
│
├── utilities/              # Utility classes
│   ├── animations.css      # Animation utilities
│   ├── background-patterns.css # Subtle background patterns
│   ├── helpers.css         # [DEPRECATED - use animations.css]
│   ├── responsive-spacing.css # Responsive spacing (navbar fix)
│   └── tailwind-fixes.css  # Tailwind v4 utility fixes
│
└── spacing.module.css      # [DEPRECATED - use Tailwind utilities]
```

## Library Directory
```
lib/
├── projectData.ts          # Central project data exports
└── projects/               # Individual project data
    ├── cheerfulBuddha.ts   # Cheerful Buddha project
    ├── multiFunnel.ts      # Multi-funnel project
    ├── newsletter.ts       # Newsletter project
    └── wellnessAutomation.ts # Wellness automation project
```

## Hooks Directory
```
hooks/
├── useHydrated.ts          # Client-side hydration detection
├── useNavigation.ts        # Navigation state management
└── useScrollAnimation.ts   # Scroll-triggered animations
```

## Content Directory
```
content/
└── projects/               # Project markdown content
    ├── cheerfull-budda.md  # [Note: typo in filename]
    ├── multi-funnel.md
    ├── newsletter.md
    └── wellness-automation.md
```

## Public Directory
```
public/
├── cheerful-buddha-case-study/  # Project images
├── expertise/                   # Expertise section images
├── fonts/                       # Custom font files
├── images/                      # General images
├── work-teaser/                 # Work preview images
└── [various project assets]
```

## Configuration Files
```
Root/
├── package.json            # Dependencies and scripts
├── package-lock.json       # Locked dependency versions
├── tailwind.config.ts      # Tailwind v4 configuration
├── tsconfig.json           # TypeScript configuration
├── postcss.config.mjs      # PostCSS with Tailwind plugin
├── next.config.ts          # Next.js configuration
├── .eslintrc.json          # ESLint rules
├── .gitignore              # Git ignore patterns
└── .env.local              # Environment variables (gitignored)
```

## Documentation Files
```
docs/
├── CSS_ANALYSIS.md         # CSS architecture analysis
├── FILE_STRUCTURE.md       # This file
├── PROJECT_OVERVIEW.md     # Project overview
├── README.md               # Main readme
└── claude.md               # Claude AI guidelines (to be created)
```

## Important Notes

### CSS Architecture
- **Tailwind v4.1.11 Alpha** requires specific import order
- CSS is organized in layers: base, components, utilities
- Custom CSS uses CSS variables for consistency
- The `tailwind-fixes.css` file patches spacing utilities

### Deprecated Files
These files are maintained for reference but should not be used:
- `styles/components/work-cards.css` → merged into `cards.css`
- `styles/utilities/helpers.css` → merged into `animations.css`
- `styles/layouts/project-page.css` → merged into `project.css`
- `styles/spacing.module.css` → use Tailwind utilities instead

### Development Commands
```bash
npm run dev      # Start development server (port 3000/3002)
npm run build    # Create production build
npm run start    # Serve production build
npm run lint     # Run ESLint
npm run typecheck # Run TypeScript checks
```

### Testing
Test pages are available at `/test/*` for debugging:
- `/test/page` - Comprehensive utility tests
- `/test/debug` - Real-time computed styles
- `/test/minimal` - Minimal test cases
- `/test/simple` - Simple comparisons

## Recent Updates
- **Navigation**: Logo on left, centered menu, reduced height
- **Testimonials**: Real content from Daniel, Drishti, and Karina
- **Expertise Page**: Complete redesign with SVG tool logos in flowing badges
- **Homepage Sections**: Alternating subtle backgrounds for visual separation
- **Footer**: Fixed centering and reduced padding
- **Hero Section**: Optimized to 85vh for better viewport fit
- **Tailwind v4**: Fixed spacing utilities with custom CSS patches

## Last Updated
August 31, 2025