'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useNavigation } from '../../hooks/useNavigation';
import { useState, useEffect } from 'react';

export default function Navigation() {
  const { isVisible, isScrolled } = useNavigation();
  const pathname = usePathname();
  const [hasInteracted, setHasInteracted] = useState(false);

  // Check if user has previously interacted with navigation
  useEffect(() => {
    const interacted = localStorage.getItem('nav-interacted');
    if (interacted) {
      setHasInteracted(true);
    }
  }, []);

  const handleNavClick = () => {
    if (!hasInteracted) {
      setHasInteracted(true);
      localStorage.setItem('nav-interacted', 'true');
    }
  };

  const isActive = (path: string) => {
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <nav 
      className="sticky top-0 left-0 right-0 z-[1000] bg-background/100 border-b border-primary/5"
      style={{ backgroundColor: '#FAF8F4' }}
    >
      <div className="container mx-auto px-6 py-6 md:py-8">
        {/* Desktop Navigation - Right Aligned */}
        <div className="hidden md:flex justify-end items-center">
          <ul className="flex items-center gap-12 lg:gap-14">
            <li>
              <Link 
                href="/" 
                onClick={handleNavClick}
                className={`text-[13px] transition-all duration-300 uppercase tracking-[0.08em] ${
                  isActive('/') ? 'font-semibold' : 'font-light text-secondary hover:text-accent'
                }`}
                style={{ 
                  color: isActive('/') ? '#D4AF37' : undefined 
                }}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                href="/about" 
                onClick={handleNavClick}
                className={`text-[13px] transition-all duration-300 uppercase tracking-[0.08em] ${
                  isActive('/about') ? 'font-semibold' : 'font-light text-secondary hover:text-accent'
                }`}
                style={{ 
                  color: isActive('/about') ? '#D4AF37' : undefined 
                }}
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                href="/work" 
                onClick={handleNavClick}
                className={`text-[13px] transition-all duration-300 uppercase tracking-[0.08em] ${
                  isActive('/work') ? 'font-semibold' : 'font-light text-secondary hover:text-accent'
                }`}
                style={{ 
                  color: isActive('/work') ? '#D4AF37' : undefined 
                }}
              >
                Work
              </Link>
            </li>
            <li>
              <Link 
                href="/expertise" 
                onClick={handleNavClick}
                className={`text-[13px] transition-all duration-300 uppercase tracking-[0.08em] ${
                  isActive('/expertise') ? 'font-semibold' : 'font-light text-secondary hover:text-accent'
                }`}
                style={{ 
                  color: isActive('/expertise') ? '#D4AF37' : undefined 
                }}
              >
                Expertise
              </Link>
            </li>
            <li>
              <Link 
                href="/contact" 
                onClick={handleNavClick}
                className={`text-[13px] transition-all duration-300 uppercase tracking-[0.08em] ${
                  isActive('/contact') ? 'font-semibold' : 'font-light text-secondary hover:text-accent'
                }`}
                style={{ 
                  color: isActive('/contact') ? '#D4AF37' : undefined 
                }}
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
                  onClick={handleNavClick}
                  className={`transition-all duration-300 uppercase tracking-wider font-light ${
                    isActive('/') ? 'text-accent' : 'text-secondary hover:text-accent'
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  onClick={handleNavClick}
                  className={`transition-all duration-300 uppercase tracking-wider font-light ${
                    isActive('/about') ? 'text-accent' : 'text-secondary hover:text-accent'
                  }`}
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  href="/work" 
                  onClick={handleNavClick}
                  className={`transition-all duration-300 uppercase tracking-wider font-light ${
                    isActive('/work') ? 'text-accent' : 'text-secondary hover:text-accent'
                  }`}
                >
                  Work
                </Link>
              </li>
              <li>
                <Link 
                  href="/expertise" 
                  onClick={handleNavClick}
                  className={`transition-all duration-300 uppercase tracking-wider font-light ${
                    isActive('/expertise') ? 'text-accent' : 'text-secondary hover:text-accent'
                  }`}
                >
                  Expertise
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  onClick={handleNavClick}
                  className={`transition-all duration-300 uppercase tracking-wider font-light ${
                    isActive('/contact') ? 'text-accent' : 'text-secondary hover:text-accent'
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