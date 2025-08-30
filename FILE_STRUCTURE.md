IA# Project File Structure Documentation

## Overview
This is a Next.js 15 portfolio website built with TypeScript, TailwindCSS, and a modular component architecture. The project follows modern React patterns with client-side routing, editorial design principles, and a sophisticated styling system.

## Root Structure

```
danas-site/
├── app/                     # Next.js App Router
├── components/              # React components
├── content/                 # Markdown content
├── docs/                    # Project documentation
├── hooks/                   # Custom React hooks
├── lib/                     # Utilities and data
├── public/                  # Static assets
├── styles/                  # CSS modules and styling
└── config files             # Project configuration
```

## Core Technologies
- **Framework**: Next.js 15.4.5 with App Router
- **UI**: React 19.1.0 with TypeScript 5
- **Styling**: TailwindCSS 4.1.11 with CSS modules
- **Fonts**: Inter (sans-serif) & Instrument Serif (serif)
- **Development**: ESLint, Turbopack for dev server

## App Directory Structure

```
app/
├── layout.tsx              # Root layout with navigation, fonts, global components
├── page.tsx               # Homepage with Hero, WorkTeaser, ContactTeaser
├── globals.css            # Global CSS imports and Tailwind
├── favicon.ico           # Site favicon
├── about/
│   └── page.tsx          # About page
├── contact/
│   └── page.tsx          # Contact page  
├── expertise/
│   └── page.tsx          # Expertise page
└── work/
    ├── page.tsx          # Work listing page
    ├── [slug]/
    │   ├── page.tsx      # Dynamic project pages (server component)
    │   └── client-page.tsx # Client-side project page logic
    ├── cheerful-buddha/
    │   └── page.tsx      # Static project page
    ├── multi-funnel/
    │   └── page.tsx      # Static project page
    ├── newsletter/
    │   └── page.tsx      # Static project page
    └── wellness-automation/
        └── page.tsx      # Static project page
```

### Key App Files

#### `app/layout.tsx`
- Root layout component with global providers
- Font loading (Inter + Instrument Serif)
- Global components: Navigation, CustomCursor, GrainOverlay, PageLoader
- Error boundary and client-only wrappers
- Inline footer with contact information
- Hydration warning suppression for browser extensions

#### `app/page.tsx`
- Homepage composition
- Uses section-based architecture: Hero → WorkTeaser → ContactTeaser

#### `app/globals.css`
- Modular CSS import system
- Loads Tailwind base, custom CSS modules in order
- Foundation → Layouts → Components → Utilities

## Components Architecture

```
components/
├── project/              # Project-specific components
├── sections/              # Page sections (large layout components)
└── ui/                   # Reusable UI components
```

### Project Components (`components/project/`)
Project-specific components for individual project pages:

- **`ProjectHero.tsx`** - Hero section for project pages
- **`ProjectLayout.tsx`** - Layout wrapper for project content
- **`ProjectMedia.tsx`** - Media components (images, videos) for projects
- **`ProjectMetrics.tsx`** - Project metrics and statistics display
- **`ProjectSection.tsx`** - Content sections within project pages

### Section Components (`components/sections/`)
Large, page-level components that compose entire sections:

- **`Hero.tsx`** - Homepage hero with parallax effects, image, and CTA
- **`About.tsx`** - About section with personal info and expertise
- **`AboutTeaser.tsx`** - Homepage about preview section
- **`Contact.tsx`** - Full contact page with form and information  
- **`ContactTeaser.tsx`** - Homepage contact preview section
- **`Expertise.tsx`** - Skills and expertise showcase
- **`ExpertiseTeaser.tsx`** - Homepage expertise preview
- **`Projects.tsx`** - Project listing and filtering
- **`WorkTeaser.tsx`** - Homepage work preview with featured projects
- **`WorkPageLayout.tsx`** - Layout wrapper for individual project pages
- **`ProjectPageClient.tsx`** - Client-side logic for project pages
- **`ProjectPageWrapper.tsx`** - Wrapper component for project page routing

### UI Components (`components/ui/`)
Reusable, smaller UI components:

- **`Navigation.tsx`** - Main site navigation with mobile menu
- **`CustomCursor.tsx`** - Custom cursor implementation
- **`GrainOverlay.tsx`** - Texture overlay effect
- **`PageLoader.tsx`** - Loading screen animation
- **`ErrorBoundary.tsx`** - Error handling wrapper
- **`ClientOnly.tsx`** - Hydration-safe client component wrapper
- **`EditorialDivider.tsx`** - Decorative section dividers
- **`ProjectCard.tsx`** - Individual project card component
- **`ProjectEntry.tsx`** - Project listing entry component

## Content & Data Management

### Content Directory (`content/`)
```
content/projects/
├── cheerfull-budda.md     # Markdown project content
├── multi-funnel.md        # Markdown project content  
├── newsletter.md          # Markdown project content
└── wellness-automation.md # Markdown project content
```

**Content Structure**: Each project is a markdown file with:
- Frontmatter metadata (title, company, year, etc.)
- Rich content with images, videos, and formatted text
- Assets referenced from `/public/` directory

### Data Layer (`lib/`)
```
lib/
├── projectData.ts         # TypeScript data definitions and project metadata
└── projects/              # Individual project data files
    ├── cheerfulBuddha.ts  # Cheerful Buddha project data
    ├── multiFunnel.ts     # Multi-funnel campaign project data
    ├── newsletter.ts      # Newsletter project data
    └── wellnessAutomation.ts # Wellness automation project data
```

**`projectData.ts`** contains:
- `EditorialProject` interface definition
- `editorialProjects` array with project metadata
- `WorkPageConfig` for page configuration
- Centralized project data that syncs with markdown content

**`lib/projects/`** contains:
- Individual project data files with detailed configurations
- Project-specific metadata, images, and content structure
- TypeScript interfaces for each project's data schema
- Modular approach to project data management

## Documentation (`docs/`)

```
docs/
└── CSS_ANALYSIS.md        # CSS architecture analysis and patterns
```

**Documentation Structure**: The docs directory contains:
- Technical documentation and analysis files
- Architecture documentation and design decisions
- Development guides and best practices
- CSS pattern analysis and styling guidelines

## Custom Hooks (`hooks/`)

```
hooks/
├── useHydrated.ts         # Hydration-safe state management
├── useNavigation.ts       # Navigation visibility and scroll behavior
└── useScrollAnimation.ts  # Scroll-based animations and effects
```

### Hook Purposes
- **`useNavigation`**: Handles navigation show/hide based on scroll direction
- **`useScrollAnimation`**: Manages scroll-triggered animations and parallax effects  
- **`useHydrated`**: Prevents hydration mismatches for client-only features

## Public Assets (`public/`)

```
public/
├── images/               # General images
├── ai-powered-automation/# Project-specific assets
├── automating-wellness/  # Project-specific assets  
├── cheerful-buddha-case-study/ # Project-specific assets
├── work-teaser/         # Homepage teaser images
├── *.svg               # Icon assets
└── next.svg, vercel.svg # Framework assets
```

**Asset Organization**:
- Project folders match markdown slugs
- Images organized by project context
- SVG icons for UI elements
- Optimized for Next.js Image component

## Configuration Files

### Core Config
- **`next.config.ts`** - Next.js configuration with hydration optimizations
- **`tailwind.config.ts`** - TailwindCSS theme customization and color system
- **`tsconfig.json`** - TypeScript configuration with path aliases
- **`package.json`** - Dependencies and scripts

### Development Config  
- **`eslint.config.mjs`** - ESLint rules and configuration
- **`postcss.config.mjs`** - PostCSS and Tailwind processing

## Styling Architecture

The project uses a sophisticated multi-layer styling system:

1. **TailwindCSS** - Utility-first framework with custom theme
2. **CSS Modules** - Organized in `/styles/` directory
3. **CSS Custom Properties** - Design tokens and variables
4. **Component Styles** - Scoped styling for specific components

See `STYLES.md` for detailed styling documentation.

## Routing & Navigation

### App Router Structure
- **Static Routes**: `/`, `/about`, `/expertise`, `/contact`, `/work`
- **Dynamic Routes**: `/work/[slug]` for individual projects
- **Navigation**: Persistent header with active state management

### URL Strategy
- Clean, semantic URLs
- Project slugs match markdown filenames  
- SEO-optimized route structure

## Development Patterns

### State Management
- Local component state with React hooks
- Custom hooks for reusable logic
- No global state management (intentionally simple)

### Performance Optimizations
- Next.js Image optimization
- Code splitting via dynamic imports
- Optimized scroll handlers with RAF
- Lazy loading for below-fold content

### TypeScript Integration
- Strict type checking enabled
- Interface definitions for all data structures
- Type-safe component props and state

## Key Features

### Interactive Elements
- Custom cursor with hover states
- Smooth scroll animations and parallax effects
- Navigation that hides/shows based on scroll direction
- Mobile-friendly hamburger menu

### Editorial Design
- Typography-first approach with serif headings
- Generous white space and clean layouts  
- Subtle animations and micro-interactions
- Professional color palette with accent colors

### Content Management
- Markdown-based project content
- Image and video integration
- Metadata-driven project listings
- Easy content updates via markdown files

## Maintenance Notes

### Adding New Projects
1. Create markdown file in `content/projects/`
2. Add project metadata to `lib/projectData.ts`
3. Create individual project data file in `lib/projects/`
4. Add assets to appropriate `public/` subdirectory
5. Consider creating static route in `app/work/[project-name]/page.tsx` for SEO
6. Project automatically appears in listings

### Styling Updates
- Global styles: Edit files in `styles/` directory
- Component styles: Use Tailwind classes or CSS modules
- Design tokens: Update `styles/base/variables.css`

### Performance Monitoring
- Monitor bundle size via Next.js build output
- Check Core Web Vitals for performance metrics
- Use React DevTools for component optimization

This architecture provides a solid foundation for a performant, maintainable portfolio website with excellent developer experience and editorial design quality.
