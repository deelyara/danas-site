'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Navigation() {
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Track if we're scrolled for styling purposes
      setIsScrolled(currentScrollY > 50);
      
      // Always show when near top
      if (currentScrollY < 50) {
        setIsVisible(true);
      } 
      // Hide when scrolling down (reduced threshold for faster response)
      else if (currentScrollY > prevScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } 
      // Show when scrolling up (with small buffer to prevent flickering)
      else if (currentScrollY < prevScrollY - 5) {
        setIsVisible(true);
      }
      
      setPrevScrollY(currentScrollY);
    };

    // Use requestAnimationFrame for smoother performance
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
  }, [prevScrollY]);

  const isActive = (path: string) => {
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <nav 
      className={`fixed top-12 left-0 right-0 z-[1000] transition-all duration-500 ease-out ${
        isVisible ? 'transform translate-y-0' : 'transform -translate-y-[calc(100%+3rem)]'
      } ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-xl' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-6 md:py-8">
        {/* Desktop Navigation - Centered */}
        <div className="hidden md:flex justify-center items-center">
          <ul className="flex items-center gap-12 lg:gap-14">
            <li>
              <Link 
                href="/" 
                className={`text-[13px] font-light transition-colors duration-300 uppercase tracking-[0.08em] ${
                  isActive('/') ? 'text-primary' : 'text-secondary hover:text-primary'
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                href="/about" 
                className={`text-[13px] font-light transition-colors duration-300 uppercase tracking-[0.08em] ${
                  isActive('/about') ? 'text-primary' : 'text-secondary hover:text-primary'
                }`}
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                href="/work" 
                className={`text-[13px] font-light transition-colors duration-300 uppercase tracking-[0.08em] ${
                  isActive('/work') ? 'text-primary' : 'text-secondary hover:text-primary'
                }`}
              >
                Work
              </Link>
            </li>
            <li>
              <Link 
                href="/expertise" 
                className={`text-[13px] font-light transition-colors duration-300 uppercase tracking-[0.08em] ${
                  isActive('/expertise') ? 'text-primary' : 'text-secondary hover:text-primary'
                }`}
              >
                Expertise
              </Link>
            </li>
            <li>
              <Link 
                href="/contact" 
                className={`text-[13px] font-light transition-colors duration-300 uppercase tracking-[0.08em] ${
                  isActive('/contact') ? 'text-primary' : 'text-secondary hover:text-primary'
                }`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile Navigation - Centered */}
        <div className="md:hidden">
          <div className="flex flex-col items-center space-y-4">
            <ul className="flex items-center gap-6 text-[11px]">
              <li>
                <Link 
                  href="/" 
                  className={`transition-colors duration-300 uppercase tracking-wider font-light ${
                    isActive('/') ? 'text-primary' : 'text-secondary hover:text-primary'
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className={`transition-colors duration-300 uppercase tracking-wider font-light ${
                    isActive('/about') ? 'text-primary' : 'text-secondary hover:text-primary'
                  }`}
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  href="/work" 
                  className={`transition-colors duration-300 uppercase tracking-wider font-light ${
                    isActive('/work') ? 'text-primary' : 'text-secondary hover:text-primary'
                  }`}
                >
                  Work
                </Link>
              </li>
              <li>
                <Link 
                  href="/expertise" 
                  className={`transition-colors duration-300 uppercase tracking-wider font-light ${
                    isActive('/expertise') ? 'text-primary' : 'text-secondary hover:text-primary'
                  }`}
                >
                  Expertise
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className={`transition-colors duration-300 uppercase tracking-wider font-light ${
                    isActive('/contact') ? 'text-primary' : 'text-secondary hover:text-primary'
                  }`}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}