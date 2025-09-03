import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Instrument_Serif } from 'next/font/google'
import Link from 'next/link'
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
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'none',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Dana Duisekenova - Marketing Leader',
    description: 'Strategic marketing leader with 8+ years of experience building scalable growth engines and transforming businesses through data-driven marketing excellence.',
    type: 'website',
  },
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
          <footer className="relative z-10 bg-surface mt-24 md:mt-32 border-t border-border-medium">
            <div className="px-6 md:px-8 pt-16 pb-8">
              {/* Creative divider - dots pattern */}
              <div className="flex justify-center gap-4 mb-12">
                <div className="w-1 h-1 bg-accent rounded-full"></div>
                <div className="w-1 h-1 bg-primary rounded-full opacity-30"></div>
                <div className="w-1 h-1 bg-accent rounded-full"></div>
              </div>
              
              {/* Content - all centered */}
              <div className="text-center w-full">
                {/* Contact info */}
                <div className="mb-8">
                  <a 
                    href="mailto:dana.odair1@gmail.com" 
                    className="text-xl md:text-2xl text-primary no-underline font-light tracking-tight transition-colors duration-300 hover:text-accent"
                  >
                    dana.odair1@gmail.com
                  </a>
                </div>
                
                {/* Navigation links */}
                <div className="flex justify-center gap-6 mb-6 flex-wrap">
                  <Link href="/work" className="text-[13px] text-secondary no-underline hover:text-accent transition-colors">Work</Link>
                  <Link href="/about" className="text-[13px] text-secondary no-underline hover:text-accent transition-colors">About</Link>
                  <Link href="/expertise" className="text-[13px] text-secondary no-underline hover:text-accent transition-colors">Expertise</Link>
                  <Link href="/contact" className="text-[13px] text-secondary no-underline hover:text-accent transition-colors">Contact</Link>
                </div>
                
                {/* Copyright - centered */}
                <div className="text-center w-full">
                  <p className="text-[11px] text-secondary opacity-50 tracking-wider uppercase m-0 mx-auto max-w-none">
                    Dana Duisekenova © 2025
                  </p>
                </div>
              </div>
            </div>
          </footer>
        </ErrorBoundary>
      </body>
    </html>
  )
}
