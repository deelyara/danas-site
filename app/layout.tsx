import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Instrument_Serif } from 'next/font/google'
import './globals.css'

import PageLoader from '@/components/ui/PageLoader'
import CustomCursor from '@/components/ui/CustomCursor'
import GrainOverlay from '@/components/ui/GrainOverlay'
import Navigation from '@/components/ui/Navigation'
import ClientOnly from '@/components/ui/ClientOnly'
import ErrorBoundary from '@/components/ui/ErrorBoundary'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-instrument-serif',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Dana Duisekenova - Marketing Leader',
  description: 'Strategic marketing leader with 8+ years of experience building scalable growth engines and transforming businesses through data-driven marketing excellence.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Prevent browser extension interference with hydration
              (function() {
                if (typeof window !== 'undefined') {
                  // Store original console.error
                  const originalError = console.error;
                  console.error = function(...args) {
                    // Suppress hydration warnings caused by browser extensions
                    const message = args[0];
                    if (typeof message === 'string' && (
                      message.includes('data-scholarcy-content-script-executed') ||
                      message.includes('Hydration failed because the initial UI does not match') ||
                      message.includes('There was an error while hydrating') ||
                      message.includes('Warning: Extra attributes from the server')
                    )) {
                      return;
                    }
                    originalError.apply(console, args);
                  };
                }
              })();
            `,
          }}
        />
      </head>
      <body 
        className={`${inter.variable} ${instrumentSerif.variable} font-sans antialiased bg-background text-primary`}
        suppressHydrationWarning={true}
      >
        <ErrorBoundary>
          <PageLoader />
          <ClientOnly>
            <CustomCursor />
          </ClientOnly>
          <GrainOverlay />
          <Navigation />
          <main className="relative z-10">
            {children}
          </main>
          <footer className="relative z-10 bg-background" style={{ marginTop: '160px' }}>
            {/* Creative divider - dots pattern */}
            <div style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              marginBottom: '80px',
              gap: '16px'
            }}>
              <div style={{ width: '4px', height: '4px', backgroundColor: '#ECD06F', borderRadius: '50%' }}></div>
              <div style={{ width: '4px', height: '4px', backgroundColor: '#1A1A1A', borderRadius: '50%', opacity: '0.3' }}></div>
              <div style={{ width: '4px', height: '4px', backgroundColor: '#ECD06F', borderRadius: '50%' }}></div>
            </div>
            
            <div style={{ 
              padding: '0 32px 80px 32px',
              maxWidth: '1200px',
              margin: '0 auto',
              textAlign: 'center'
            }}>
              {/* Minimalist layout */}
              <div style={{ marginBottom: '48px' }}>
                <p style={{ 
                  fontSize: '13px', 
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: '#6B6B68',
                  marginBottom: '24px'
                }}>
                  Dana Duisekenova
                </p>
                <a 
                  href="mailto:dana.odair1@gmail.com" 
                  className="footer-email"
                  style={{ 
                    fontSize: '24px',
                    color: '#1A1A1A',
                    textDecoration: 'none',
                    fontWeight: '300',
                    letterSpacing: '-0.02em',
                    transition: 'color 0.3s'
                  }}
                >
                  dana.odair1@gmail.com
                </a>
              </div>
              
              {/* Simple nav */}
              <nav style={{ 
                display: 'flex', 
                justifyContent: 'center', 
                gap: '40px',
                marginBottom: '48px',
                flexWrap: 'wrap'
              }}>
                <a href="/work" style={{ fontSize: '13px', color: '#6B6B68', textDecoration: 'none' }}>Work</a>
                <a href="/about" style={{ fontSize: '13px', color: '#6B6B68', textDecoration: 'none' }}>About</a>
                <a href="/expertise" style={{ fontSize: '13px', color: '#6B6B68', textDecoration: 'none' }}>Expertise</a>
                <a href="/contact" style={{ fontSize: '13px', color: '#6B6B68', textDecoration: 'none' }}>Contact</a>
              </nav>
              
              {/* Copyright */}
              <p style={{ 
                fontSize: '11px',
                color: '#6B6B68',
                opacity: '0.5',
                letterSpacing: '0.1em'
              }}>
                © 2025
              </p>
            </div>
          </footer>
        </ErrorBoundary>
      </body>
    </html>
  )
}
