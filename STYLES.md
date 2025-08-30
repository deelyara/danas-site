# Styling System Documentation

## Overview
This project uses a sophisticated multi-layer styling architecture combining TailwindCSS, CSS modules, custom properties, and component-scoped styles. The design follows editorial magazine principles with an emphasis on typography, white space, and subtle interactions.

## Architecture Layers

### 1. TailwindCSS Foundation
- **Version**: TailwindCSS 4.1.11
- **Purpose**: Utility-first framework with custom theme
- **Configuration**: `tailwind.config.ts`

### 2. CSS Modules System
- **Location**: `styles/` directory
- **Organization**: Modular, component-based CSS files
- **Import Order**: Foundation → Layouts → Components → Utilities

### 3. CSS Custom Properties  
- **Location**: `styles/base/variables.css`
- **Purpose**: Design tokens and theme variables
- **Scope**: Global CSS custom properties

### 4. Component Styles
- **Method**: Tailwind utilities + CSS modules
- **Scoping**: Component-level styling with CSS classes

## CSS Module Organization

```
styles/
├── base/                  # Foundation styles
│   ├── reset.css         # CSS reset and base element styles
│   ├── variables.css     # CSS custom properties and design tokens
│   └── typography.css    # Typography system and hierarchy
├── layouts/              # Layout systems
│   ├── editorial.css     # Editorial content layouts
│   ├── grid.css         # Grid systems and containers  
│   └── sections.css     # Section-level layouts
├── components/           # Component-specific styles
│   ├── buttons.css      # Button component styles
│   ├── cards.css        # Card component styles
│   ├── navigation.css   # Navigation component styles
│   └── tables.css       # Table component styles
├── utilities/            # Helper classes and animations
│   ├── animations.css   # Animation keyframes and classes
│   └── helpers.css      # Utility classes and helpers
└── spacing.module.css    # CSS module for consistent spacing
```

## Design System Foundation

### Color Palette

#### Primary Colors (from `tailwind.config.ts`)
```css
--color-background: #FEFDFB    /* Warm off-white background */
--color-surface: #FDFCF9       /* Slightly darker surface color */
--color-primary: #1A1A1A       /* Rich black for text */
--color-secondary: #6B6B6B     /* Warm gray for secondary text */
--color-accent: #ECD06F        /* Muted gold accent */
--color-muted: #9A9A9A         /* Soft gray for muted elements */
```

#### Extended Colors (from `variables.css`)
```css
--color-background: #FAF8F4     /* Paper-like background */
--color-surface: #F7F5F1        /* Elevated surface color */
--color-border: rgba(26, 26, 26, 0.05)  /* Subtle borders */
--color-border-light: rgba(26, 26, 26, 0.03)
--color-border-medium: rgba(26, 26, 26, 0.06)
--color-border-heavy: rgba(26, 26, 26, 0.08)
```

### Typography System

#### Font Stack
```css
/* Primary fonts loaded in layout.tsx */
--font-sans: var(--font-inter)           /* Inter for body text */
--font-serif: var(--font-instrument-serif) /* Instrument Serif for headlines */
```

#### Typography Scale (Perfect Fourth + Major Third)
```css
--text-xs: 0.75rem     /* 12px - Small labels */
--text-sm: 0.875rem    /* 14px - Secondary text */
--text-base: 1rem      /* 16px - Base body text */
--text-lg: 1.125rem    /* 18px - Large body text */
--text-xl: 1.25rem     /* 20px - Subheadings */
--text-2xl: 1.5rem     /* 24px - Card titles */
--text-3xl: 2rem       /* 32px - Section headers */
--text-4xl: 2.5rem     /* 40px - Page titles */
--text-5xl: 3rem       /* 48px - Large titles */
--text-6xl: 3.75rem    /* 60px - Hero titles */
--text-7xl: 4.5rem     /* 72px - Display titles */
--text-8xl: 6rem       /* 96px - Massive displays */
```

#### Line Heights & Letter Spacing
```css
--leading-tight: 1.1    /* Headlines */
--leading-snug: 1.2     /* Subheadings */
--leading-normal: 1.5   /* UI text */
--leading-relaxed: 1.7  /* Body text */
--leading-loose: 2      /* Spacious text */

/* Typography settings */
/* Headlines: letter-spacing: -0.02em, line-height: 1.1-1.2 */
/* Body: letter-spacing: 0.01em, line-height: 1.7-1.8 */
/* Small caps: letter-spacing: 0.1em-0.2em, uppercase */
```

### Spacing System

#### Spacing Scale (8px base system)
```css
--space-xs: 0.5rem    /* 8px */
--space-sm: 1rem      /* 16px */
--space-md: 1.5rem    /* 24px */
--space-lg: 2rem      /* 32px */
--space-xl: 3rem      /* 48px */
--space-2xl: 4rem     /* 64px */
--space-3xl: 6rem     /* 96px */
--space-4xl: 8rem     /* 128px */
```

#### Component Spacing (from `spacing.module.css`)
```css
/* Navigation */
.navContainer { padding: 24px 32px; }

/* Work cards */
.workCard { margin-bottom: 48px; }
.projectEntry { margin-bottom: 64px; }

/* Typography spacing */
.h1Gap { margin-bottom: 32px; }
.h2Gap { margin-bottom: 24px; }
.h3Gap { margin-bottom: 16px; }
.paragraph { margin-bottom: 20px; }

/* Section spacing */
.sectionSpacing { 
  padding-top: 96px; 
  padding-bottom: 96px; 
}
```

## Typography Implementation

### Base Typography (`styles/base/typography.css`)

#### Editorial Hierarchy
```css
/* All headings use serif font with consistent styling */
h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-serif);
  font-weight: 400;
  letter-spacing: -0.02em;
  color: var(--color-primary);
}

/* Body text uses sans-serif with relaxed leading */
p, .body-text {
  font-family: var(--font-sans);
  font-size: 17px;
  line-height: var(--leading-relaxed);
  color: var(--color-secondary);
  margin-bottom: var(--space-md);
}
```

#### Special Typography Classes
```css
.page-heading {
  font-size: 3.5rem;
  font-family: var(--font-serif);
  padding-top: var(--space-4xl);
  margin-bottom: var(--space-xl);
}

.hero-name {
  font-family: var(--font-serif);
  font-size: clamp(var(--text-6xl), 12vw, 160px);
  line-height: 0.9;
  letter-spacing: -0.03em;
}

.company-name {
  font-size: var(--text-sm);
  text-transform: uppercase;
  letter-spacing: 0.15em;
  font-weight: 500;
  color: var(--color-secondary);
}
```

### Editorial Content (`styles/layouts/editorial.css`)

#### Content Styling
```css
.editorial-content {
  max-width: 100%;
  font-size: 17px;
  line-height: 1.7;
  -webkit-font-smoothing: antialiased;
}

.editorial-content p {
  margin-bottom: 24px;
  max-width: 70ch;  /* Optimal reading width */
  color: var(--color-secondary);
}

.editorial-content img {
  margin: 56px auto;
  border-radius: var(--radius-sm);
  box-shadow: var(--shadow-md);
  transition: transform var(--transition-fast);
}
```

## Component Styling Patterns

### Navigation (`styles/components/navigation.css`)

#### Backdrop Effects
```css
.nav-backdrop {
  backdrop-filter: blur(6px);
  background-color: rgba(250, 248, 244, 0.4);
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.02);
}

.nav-transition {
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1),
              opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
```

### Cards & Components
```css
/* Card styling pattern */
.project-card {
  background: var(--color-surface);
  padding: var(--space-xl);
  border-radius: var(--radius-lg);
  transition: transform var(--transition-base), 
              box-shadow var(--transition-base);
}

.project-card:hover {
  transform: scale(1.02);
  box-shadow: var(--shadow-lg);
}
```

## Animation System

### Transitions & Timing
```css
--transition-fast: 0.2s ease;
--transition-base: 0.3s ease;
--transition-slow: 0.8s cubic-bezier(0.4, 0, 0.2, 1);
```

### Animation Patterns
- **Hover Effects**: Subtle scale transforms (max 1.02x), color transitions
- **Scroll Animations**: Fade in with slight upward movement (4px max)
- **Page Loading**: White fade-in over 1200ms with staggered reveals
- **Navigation**: Smooth show/hide based on scroll direction

## Design Tokens

### Shadows
```css
--shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.05);
--shadow-md: 0 4px 20px rgba(0, 0, 0, 0.08);
--shadow-lg: 0 12px 32px rgba(0, 0, 0, 0.1);
--shadow-xl: 0 20px 40px rgba(0, 0, 0, 0.08);
```

### Border Radius
```css
--radius-xs: 4px;     --radius-sm: 8px;
--radius-md: 12px;    --radius-lg: 16px;
--radius-xl: 24px;    --radius-2xl: 32px;
--radius-full: 9999px;
```

### Z-Index Scale
```css
--z-base: 0;         --z-dropdown: 100;
--z-sticky: 200;     --z-overlay: 300;
--z-modal: 400;      --z-tooltip: 500;
```

## TailwindCSS Integration

### Custom Theme Extensions
Located in `tailwind.config.ts`:

#### Colors
- Extends default Tailwind colors with editorial palette
- CSS custom properties mapped to Tailwind classes
- Consistent color usage across utilities and components

#### Typography
- Custom font size scale with line heights
- Letter spacing values for editorial typography
- Font family variables for serif and sans-serif

### Utility Usage Patterns
- **Layout**: `max-w-7xl mx-auto container-padding`
- **Typography**: `text-lg leading-relaxed font-light`
- **Spacing**: `mb-8 py-16 px-6 md:px-12`
- **Colors**: `bg-background text-primary text-secondary`

## Responsive Design

### Breakpoints
```css
--screen-sm: 640px;   --screen-md: 768px;
--screen-lg: 1024px;  --screen-xl: 1280px;
--screen-2xl: 1536px;
```

### Mobile Patterns
- **Navigation**: Mobile hamburger menu with smooth animations
- **Typography**: Responsive scaling with clamp() functions
- **Spacing**: Reduced padding and margins for mobile
- **Layout**: Stack layouts vertically, maintain generous spacing

### Container Strategy
```css
--container-sm: 640px;   --container-md: 768px;
--container-lg: 1024px;  --container-xl: 1280px;
--container-2xl: 1536px;
```

## Performance Considerations

### CSS Loading Strategy
1. **Tailwind Base** - Core framework styles
2. **CSS Reset** - Normalize browser differences  
3. **Variables** - Design token definitions
4. **Typography** - Text styling foundation
5. **Layouts** - Section and grid systems
6. **Components** - Component-specific styles
7. **Utilities** - Helper classes and animations

### Optimization Techniques
- **CSS Containment**: Large sections use CSS containment
- **Custom Properties**: Centralized theme management
- **Modular Loading**: Only load necessary CSS modules
- **PostCSS**: Optimized processing with autoprefixer

## Development Guidelines

### Adding New Styles
1. **Global styles**: Add to appropriate module in `styles/`
2. **Component styles**: Use Tailwind utilities or CSS modules
3. **Design tokens**: Update `styles/base/variables.css`
4. **Typography**: Follow established hierarchy and spacing

### CSS Module Usage
```typescript
import spacing from '../styles/spacing.module.css';

<div className={spacing.sectionSpacing}>
  <h2 className={spacing.h2Gap}>Heading</h2>
  <p className={spacing.paragraph}>Content</p>
</div>
```

### Naming Conventions
- **CSS Classes**: BEM methodology for module classes
- **Custom Properties**: Semantic naming with category prefixes
- **Tailwind**: Standard utility classes with responsive prefixes

## Browser Support

### Modern Features Used
- **CSS Custom Properties**: Full browser support
- **Backdrop Filter**: Modern browsers with graceful fallback
- **Grid/Flexbox**: Universal support
- **CSS Containment**: Progressive enhancement

### Fallback Strategy
- Graceful degradation for advanced features
- Core functionality works without JavaScript
- Progressive enhancement for animations and interactions

This styling system provides a robust, maintainable foundation for editorial design with excellent performance characteristics and developer experience.
