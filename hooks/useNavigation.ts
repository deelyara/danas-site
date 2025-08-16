'use client';

import { useEffect, useState } from 'react';

interface UseNavigationReturn {
  isVisible: boolean;
  isScrolled: boolean;
  scrollDirection: 'up' | 'down' | null;
}

export function useNavigation(): UseNavigationReturn {
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | null>(null);
  const [prevScrollY, setPrevScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDifference = currentScrollY - prevScrollY;
      
      // Track if we're scrolled for styling purposes
      setIsScrolled(currentScrollY > 30);
      
      // Determine scroll direction with threshold to prevent jitter
      if (Math.abs(scrollDifference) > 3) {
        setScrollDirection(scrollDifference > 0 ? 'down' : 'up');
      }
      
      // Navigation visibility logic
      if (currentScrollY < 30) {
        // Always show when near top
        setIsVisible(true);
      } else if (scrollDirection === 'down' && currentScrollY > 80) {
        // Hide when scrolling down past threshold
        setIsVisible(false);
      } else if (scrollDirection === 'up') {
        // Show when scrolling up
        setIsVisible(true);
      }
      
      setPrevScrollY(currentScrollY);
    };

    // Optimized scroll handler with requestAnimationFrame
    let ticking = false;
    const optimizedScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', optimizedScroll, { passive: true });
    return () => window.removeEventListener('scroll', optimizedScroll);
  }, [prevScrollY, scrollDirection]);

  return {
    isVisible,
    isScrolled,
    scrollDirection
  };
}