# Editorial Design Style Guide

## Design Philosophy
Inspired by editorial magazines like Cereal and Kinfolk, this portfolio embraces minimalism, generous white space, and typography-first design. Every element should feel intentional, sophisticated, and refined.

## Color Palette

### Primary Colors
```css
--color-background: #FDFBF7;  /* Warm off-white */
--color-surface: #FAF8F3;     /* Slightly darker cream */
--color-primary: #1A1918;     /* Rich black for text */
--color-secondary: #6B6B68;   /* Warm gray */
--color-accent: #C9A961;      /* Muted gold */
--color-muted: #8B8A87;       /* Soft gray */
```

### Usage Guidelines
- **Background**: Use warm off-white (#FDFBF7) as the primary background
- **Surface**: Use cream (#FAF8F3) for cards and elevated surfaces
- **Text**: Primary black (#1A1918) for headlines, secondary gray (#6B6B68) for body
- **Accents**: Gold (#C9A961) used sparingly for emphasis and interactions
- **Borders**: When needed, use primary color at 10% opacity

## Typography

### Font Families
```css
/* Serif for headlines */
font-family: 'Instrument Serif', 'Playfair Display', Georgia, serif;

/* Sans for body */
font-family: 'Inter', -apple-system, sans-serif;
```

### Type Scale
```css
/* Headlines */
text-7xl: 4.5rem    /* Hero titles */
text-6xl: 3.75rem   /* Section headers */
text-4xl: 2.25rem   /* Sub-headers */
text-2xl: 1.5rem    /* Card titles */

/* Body */
text-xl: 1.25rem    /* Large body */
text-lg: 1.125rem   /* Regular body */
text-base: 1rem     /* Standard text */
text-sm: 0.875rem   /* Small text */
text-xs: 0.75rem    /* Tiny text */
```

### Typography Settings
```css
/* Headlines */
letter-spacing: -0.02em
line-height: 1.1 to 1.2
font-weight: 400 (normal)

/* Body Text */
letter-spacing: 0.01em
line-height: 1.8
font-weight: 300-400

/* Small Caps */
font-variant: small-caps
letter-spacing: 0.1em to 0.2em
text-transform: uppercase
```

## Layout Principles

### Grid System
- 12-column grid for flexibility
- Asymmetric layouts (7-5, 8-4, 6-6 splits)
- Content max-width: 75ch for readability
- Container padding: px-6 md:px-12

### Spacing
```css
/* Section Padding */
py-24 md:py-32  /* Generous vertical spacing */

/* Component Spacing */
gap-8 to gap-16  /* Between elements */
mb-16 to mb-20   /* After headers */
space-y-6 to space-y-8  /* Vertical lists */
```

### White Space Guidelines
- Minimum 6rem between major sections
- 3-4rem after headlines
- 2rem between paragraphs
- Let content breathe - when in doubt, add more space

## Component Patterns

### Cards
- No borders - use spacing and background colors
- Background: surface color (#FAF8F3)
- Padding: p-8 md:p-12
- Hover: subtle scale(1.02) and shadow
- Transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1)

### Buttons/Links
- Text-based, no backgrounds
- Hover: color transition only
- Underline animations from left to right
- Uppercase text with wide tracking for navigation

### Typography Hierarchy
1. Section label: text-sm, uppercase, muted color, wide tracking
2. Headline: text-6xl, serif, tight tracking
3. Body: text-lg, sans-serif, relaxed leading
4. Accent text: gold color, used sparingly
5. Metadata: text-xs, muted color

## Animations & Interactions

### Timing
- Standard duration: 500-800ms
- Easing: cubic-bezier(0.4, 0, 0.2, 1)
- Delays: 100-300ms increments for staggered effects

### Hover States
- Color transitions only (no aggressive movements)
- Scale transforms max 1.02
- Shadow transitions for depth
- Always maintain elegance

### Scroll Animations
- Fade in with subtle upward movement (4px max)
- Intersection Observer at 10% threshold
- Parallax effects extremely subtle (0.03-0.08x multiplier)

### Page Load
- White fade-in over 1200ms
- Letter-by-letter reveal with 200ms delays
- All animations complete within 2 seconds

## Special Elements

### Custom Cursor
- Simple circle design
- 24px normal, 48px on hover
- Border only, no fill
- Smooth transitions

### Grain Texture
- SVG-based noise at 1.5% opacity
- Fixed position overlay
- Adds subtle print texture

### Accent Elements
- Gold dots and lines used sparingly
- Diamond bullets (◆) for lists
- Gradient lines for dividers
- Always subtle, never dominant

## Writing Style

### Tone
- Professional but approachable
- Confident without arrogance
- Focus on results and impact
- Use metrics to demonstrate value

### Content Structure
- Lead with impact
- Support with methodology
- Close with results
- Always use placeholder brackets [like this]

## Responsive Design

### Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

### Mobile Considerations
- Stack layouts vertically
- Maintain generous spacing
- Reduce font sizes proportionally
- No hamburger menus - use elegant text navigation

## Do's and Don'ts

### Do's
- ✓ Use plenty of white space
- ✓ Let typography lead the design
- ✓ Keep animations subtle
- ✓ Use gold accents sparingly
- ✓ Maintain consistent spacing
- ✓ Focus on readability

### Don'ts
- ✗ No aggressive animations
- ✗ No harsh borders or lines
- ✗ No cluttered layouts
- ✗ No bright colors
- ✗ No decorative fonts
- ✗ No unnecessary elements

## Implementation Notes

### CSS Classes
```css
/* Editorial prose */
.prose-editorial
.pull-quote
.small-caps

/* Animations */
.fade-in-up
.word-reveal
.animate-slide-down

/* Cards */
.project-card
.card-shadow

/* Navigation */
.nav-link
```

### Performance
- Use Intersection Observer for scroll animations
- Implement CSS containment for large sections
- Lazy load images
- Minimize JavaScript for interactions

This style guide should be treated as a living document and updated as the design evolves while maintaining the core editorial aesthetic.