'use client';

import { useEffect, useState } from 'react';

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    // Simulate page load
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  // Always render the loader initially to prevent hydration mismatch
  // but ensure consistent server/client rendering
  return (
    <div
      className={`fixed inset-0 z-[200] bg-background transition-opacity duration-1000 ${
        isMounted && !isLoading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          {/* Loading text or logo */}
          <div
            className={`font-serif text-2xl text-primary transition-all duration-700 ${
              isMounted && !isLoading ? 'opacity-0 -translate-y-4' : 'opacity-100 translate-y-0'
            }`}
          >
            Dana Duisekenova
          </div>
          {/* Subtle loading line */}
          <div className="absolute -bottom-8 left-0 right-0 h-px bg-accent/20">
            <div
              className={`h-full bg-accent transition-all duration-1000 ${
                isMounted && !isLoading ? 'w-0' : 'w-full'
              }`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}