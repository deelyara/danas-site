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
    <html lang="en" className={`${inter.variable} ${instrumentSerif.variable} scroll-smooth`}>
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
        className={`font-sans antialiased bg-background text-primary`}
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
          <footer className="relative z-10 bg-background mt-24 md:mt-32">
            {/* Container with proper padding */}
            <div className="container mx-auto px-6 md:px-8 pt-16 md:pt-20 pb-16 md:pb-20">
              {/* Creative divider - dots pattern */}
              <div className="flex justify-center gap-4 mb-12 md:mb-20">
                <div className="w-1 h-1 bg-accent rounded-full"></div>
                <div className="w-1 h-1 bg-primary rounded-full opacity-30"></div>
                <div className="w-1 h-1 bg-accent rounded-full"></div>
              </div>
              
              {/* Content wrapper */}
              <div className="max-w-3xl mx-auto text-center">
                {/* Contact info */}
                <div className="mb-8 md:mb-12">
                  <p className="text-[13px] tracking-[0.2em] uppercase text-secondary mb-4 md:mb-6">
                    Dana Duisekenova
                  </p>
                  <a 
                    href="mailto:dana.odair1@gmail.com" 
                    className="text-xl md:text-2xl text-primary no-underline font-light tracking-tight transition-colors duration-300 hover:text-accent inline-block"
                  >
                    dana.odair1@gmail.com
                  </a>
                </div>
                
                {/* Navigation links */}
                <nav className="flex justify-center gap-6 md:gap-10 mb-8 md:mb-12 flex-wrap">
                  <a href="/work" className="text-[13px] text-secondary no-underline hover:text-accent transition-colors">Work</a>
                  <a href="/about" className="text-[13px] text-secondary no-underline hover:text-accent transition-colors">About</a>
                  <a href="/expertise" className="text-[13px] text-secondary no-underline hover:text-accent transition-colors">Expertise</a>
                  <a href="/contact" className="text-[13px] text-secondary no-underline hover:text-accent transition-colors">Contact</a>
                </nav>
                
                {/* Copyright */}
                <p className="text-[11px] text-secondary opacity-50 tracking-wider">
                  © 2025
                </p>
              </div>
            </div>
          </footer>
        </ErrorBoundary>
      </body>
    </html>
  )
}
