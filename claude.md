# Claude AI Assistant Guidelines

## Project Overview
This is Dana's portfolio website - a sophisticated, editorial-style Next.js application showcasing web development and design work. The site emphasizes clean, minimalist design with warm, paper-like aesthetics inspired by print editorial layouts.

## Technology Stack
- **Framework**: Next.js 15.4.5 with App Router
- **UI Library**: React 19.1.0
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS v4.1.11 (Alpha)
- **Fonts**: Inter (sans), Instrument Serif (serif)
- **Dev Server**: Turbopack
- **Build Tool**: PostCSS with @tailwindcss/postcss

## Critical Styling Guidelines

### ⚠️ IMPORTANT: Tailwind v4 Requirements

#### 1. CSS Import Order (CRITICAL)
The `app/globals.css` file MUST follow this exact structure:
```css
/* Tailwind MUST be imported FIRST */
@import "tailwindcss";

/* Then layer your custom CSS */
@layer base {
  /* base styles */
}

@layer components {
  /* component styles */
}

@layer utilities {
  /* utility styles */
}
```

#### 2. Avoid Common Pitfalls
- **NEVER** use `* { margin: 0; padding: 0; }` in reset files - it breaks Tailwind utilities
- **ALWAYS** use `extend` in tailwind.config.ts, not direct property replacement
- **DO NOT** set `gap`, `padding`, or `margin` directly on classes that will use Tailwind utilities
- **AVOID** using `!important` unless absolutely necessary

#### 3. CSS Reset Rules
Instead of global resets, target specific elements:
```css
/* GOOD - Specific element reset */
html, body, div, h1, h2, h3, p, /* etc */ {
  margin: 0;
  padding: 0;
}

/* BAD - Global reset that breaks Tailwind */
* {
  margin: 0;
  padding: 0;
}
```

### Tailwind Configuration
The `tailwind.config.ts` should EXTEND, not replace:
```typescript
theme: {
  extend: {  // Always use extend!
    spacing: {
      'xs': '0.5rem',
      // custom values
    }
  }
}
```

### CSS Layer Organization
1. **Base Layer** (`@layer base`)
   - CSS variables
   - Typography foundations
   - Careful resets

2. **Components Layer** (`@layer components`)
   - Reusable component styles
   - Layout patterns
   - Cards, buttons, navigation

3. **Utilities Layer** (`@layer utilities`)
   - Helper classes
   - Animations
   - Responsive adjustments
   - Tailwind fixes (if needed)

## Design System

### Color Palette
```css
--color-background: #FAF8F4;  /* Warm paper white */
--color-surface: #F7F5F1;     /* Light beige */
--color-primary: #1A1A1A;     /* Near black */
--color-secondary: #6B6B68;   /* Gray */
--color-accent: #ECD06F;      /* Golden yellow */
--color-muted: #9A9A9A;       /* Light gray */
```

### Spacing Scale (8px base)
```css
--space-xs: 0.5rem;   /* 8px */
--space-sm: 1rem;     /* 16px */
--space-md: 1.5rem;   /* 24px */
--space-lg: 2rem;     /* 32px */
--space-xl: 3rem;     /* 48px */
--space-2xl: 4rem;    /* 64px */
--space-3xl: 6rem;    /* 96px */
--space-4xl: 8rem;    /* 128px */
```

### Typography Scale
- Headlines: Instrument Serif (serif)
- Body text: Inter (sans-serif)
- Scale: 12px to 96px following editorial proportions

## Development Workflow

### Running the Project
```bash
# Start development server
npm run dev

# Build for production
npm run build

# Run production server
npm run start

# Type checking
npm run typecheck

# Linting
npm run lint
```

### Testing CSS Issues
If spacing utilities aren't working:
1. Check `/test/page` - Comprehensive utility test
2. Check `/test/debug` - Shows computed styles
3. Verify import order in `globals.css`
4. Check for CSS conflicts in custom styles

### File Naming Conventions
- Components: PascalCase (e.g., `WorkTeaser.tsx`)
- Utilities/Hooks: camelCase (e.g., `useScrollAnimation.ts`)
- CSS files: kebab-case (e.g., `responsive-spacing.css`)
- Routes: kebab-case (e.g., `/work/cheerful-buddha`)

## Component Architecture

### Page Structure
```
app/[route]/page.tsx          # Page component
components/sections/[Name].tsx # Section components
components/ui/[Name].tsx      # Reusable UI components
hooks/use[Name].ts            # Custom hooks
```

### Client Components
Mark with `'use client'` when using:
- `useState`, `useEffect`
- Browser APIs
- Event handlers
- Animation libraries

### Server Components (Default)
Use for:
- Data fetching
- Static content
- SEO-critical content

## Project-Specific Components

### Key Sections
- **Hero**: Editorial-style homepage hero
- **WorkTeaser**: Featured projects showcase
- **Testimonials**: Client testimonials grid
- **ContactTeaser**: Call-to-action section
- **ProjectLayout**: Individual project pages

### Custom Hooks
- `useScrollAnimation`: Scroll-triggered animations
- `useHydrated`: Detect client-side hydration
- `useNavigation`: Navigation state management

## Common Tasks

### Adding a New Project
1. Create data file in `lib/projects/[projectName].ts`
2. Export from `lib/projectData.ts`
3. Create page in `app/work/[project-slug]/page.tsx`
4. Add images to `public/[project-name]/`
5. Update featured projects if needed

### Modifying Styles
1. **Utility changes**: Use Tailwind classes
2. **Component styles**: Edit relevant CSS in `styles/components/`
3. **Global changes**: Update CSS variables in `styles/base/variables.css`
4. **New utilities**: Add to `styles/utilities/` and import in `globals.css`

### Debugging CSS Issues
1. Check browser DevTools computed styles
2. Verify CSS import order
3. Look for conflicting custom CSS
4. Test with inline styles to isolate issue
5. Check `/test/` pages for utility functionality

## Best Practices

### Performance
- Use Next.js Image component for optimization
- Implement lazy loading for below-fold content
- Keep bundle size minimal
- Use dynamic imports for heavy components

### Accessibility
- Maintain semantic HTML structure
- Ensure proper heading hierarchy
- Include alt text for images
- Test keyboard navigation
- Maintain color contrast ratios

### SEO
- Use semantic HTML tags
- Include meta descriptions
- Implement Open Graph tags
- Ensure mobile responsiveness
- Optimize Core Web Vitals

## Troubleshooting

### Tailwind Utilities Not Working
1. **Check import order** in `globals.css`
2. **Verify no global resets** (`* { margin: 0 }`)
3. **Check for CSS conflicts** in custom styles
4. **Ensure proper layering** of custom CSS
5. **Run dev server restart** after config changes

### Build Errors
1. Run `npm run typecheck` to check TypeScript
2. Run `npm run lint` to check code style
3. Clear `.next` folder and rebuild
4. Check for missing dependencies

### Styling Inconsistencies
1. Use browser DevTools to inspect computed styles
2. Check CSS specificity conflicts
3. Verify responsive breakpoints
4. Test in different browsers

## Important Files

### Must Read Before Major Changes
- `app/globals.css` - Global styles and Tailwind setup
- `tailwind.config.ts` - Tailwind configuration
- `styles/base/variables.css` - Design system variables
- `FILE_STRUCTURE.md` - Complete project structure
- `PROJECT_OVERVIEW.md` - Business context

### Deprecated Files (Do Not Use)
- `styles/components/work-cards.css`
- `styles/utilities/helpers.css`
- `styles/layouts/project-page.css`
- `styles/spacing.module.css`

## Contact & Resources
- **Design System**: Editorial, warm, paper-like aesthetic
- **Typography**: Inter + Instrument Serif
- **Color Inspiration**: Print editorial design
- **Layout**: 8px grid system

## Version Information
- Created: August 31, 2025
- Tailwind CSS: v4.1.11 (Alpha)
- Next.js: 15.4.5
- React: 19.1.0

## Final Notes
This project prioritizes clean, maintainable code with a sophisticated editorial design. When in doubt, favor simplicity and readability. Always test changes across different viewport sizes and ensure the warm, inviting aesthetic is maintained throughout any modifications.