import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Add custom spacing values WITHOUT overriding defaults
      spacing: {
        'xs': '0.5rem',    // 8px
        'sm': '1rem',      // 16px
        'md': '1.5rem',    // 24px
        'lg': '2rem',      // 32px
        'xl': '3rem',      // 48px
        '2xl': '4rem',     // 64px
        '3xl': '6rem',     // 96px
        '4xl': '8rem',     // 128px
      },
      colors: {
        // Warm & editorial color scheme - aligned with CSS variables
        background: '#FAF8F4',
        surface: '#F7F5F1',
        primary: '#1A1A1A',
        secondary: '#6B6B68',
        accent: '#ECD06F',
        muted: '#9A9A9A',
        border: {
          DEFAULT: 'rgba(26, 26, 26, 0.05)',
          light: 'rgba(26, 26, 26, 0.03)',
          medium: 'rgba(26, 26, 26, 0.06)',
          heavy: 'rgba(26, 26, 26, 0.08)',
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        serif: ['var(--font-instrument-serif)'],
      },
      fontSize: {
        // Editorial typography scale
        'xs': ['0.75rem', { lineHeight: '1.5' }],
        'sm': ['0.875rem', { lineHeight: '1.5' }],
        'base': ['1rem', { lineHeight: '1.75' }],
        'lg': ['1.125rem', { lineHeight: '1.75' }],
        'xl': ['1.25rem', { lineHeight: '1.75' }],
        '2xl': ['1.5rem', { lineHeight: '1.4' }],
        '3xl': ['1.875rem', { lineHeight: '1.3' }],
        '4xl': ['2.25rem', { lineHeight: '1.2' }],
        '5xl': ['3rem', { lineHeight: '1.1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '0.95' }],
        '8xl': ['6rem', { lineHeight: '0.9' }],
        '9xl': ['8rem', { lineHeight: '0.85' }],
      },
      letterSpacing: {
        tighter: '-0.05em',
        tight: '-0.025em',
        normal: '0',
        wide: '0.025em',
        wider: '0.05em',
        widest: '0.1em',
      },
    },
  },
  plugins: [],
}

export default config