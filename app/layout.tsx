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
        </ErrorBoundary>
      </body>
    </html>
  )
}
