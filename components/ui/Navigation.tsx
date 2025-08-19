'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useNavigation } from '../../hooks/useNavigation';
import { useState, useEffect } from 'react';

export default function Navigation() {
  const { isVisible, isScrolled } = useNavigation();
  const pathname = usePathname();
  const [hasInteracted, setHasInteracted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    setMobileMenuOpen(false); // Close mobile menu on link click
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
      <div className="container mx-auto px-8" style={{ paddingTop: '16px', paddingBottom: '16px' }}>
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

        {/* Mobile Navigation - Hamburger Menu */}
        <div className="md:hidden">
          <div className="flex justify-between items-center">
            {/* Logo/Brand */}
            <Link href="/" className="text-lg font-serif text-primary">
              Dana
            </Link>
            
            {/* Hamburger Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-primary hover:text-accent transition-colors duration-300"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span className={`block h-0.5 w-full bg-current transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`block h-0.5 w-full bg-current transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block h-0.5 w-full bg-current transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </div>
            </button>
          </div>
          
          {/* Mobile Menu Dropdown */}
          <div className={`absolute top-full left-0 right-0 bg-background border-b border-primary/5 transition-all duration-300 ${mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
            <ul className="flex flex-col py-6 px-6 space-y-4">
              <li>
                <Link 
                  href="/" 
                  onClick={handleNavClick}
                  className={`block py-2 text-sm transition-all duration-300 uppercase tracking-wider ${
                    isActive('/') ? 'text-accent font-medium' : 'text-secondary hover:text-accent'
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  onClick={handleNavClick}
                  className={`block py-2 text-sm transition-all duration-300 uppercase tracking-wider ${
                    isActive('/about') ? 'text-accent font-medium' : 'text-secondary hover:text-accent'
                  }`}
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  href="/work" 
                  onClick={handleNavClick}
                  className={`block py-2 text-sm transition-all duration-300 uppercase tracking-wider ${
                    isActive('/work') ? 'text-accent font-medium' : 'text-secondary hover:text-accent'
                  }`}
                >
                  Work
                </Link>
              </li>
              <li>
                <Link 
                  href="/expertise" 
                  onClick={handleNavClick}
                  className={`block py-2 text-sm transition-all duration-300 uppercase tracking-wider ${
                    isActive('/expertise') ? 'text-accent font-medium' : 'text-secondary hover:text-accent'
                  }`}
                >
                  Expertise
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  onClick={handleNavClick}
                  className={`block py-2 text-sm transition-all duration-300 uppercase tracking-wider ${
                    isActive('/contact') ? 'text-accent font-medium' : 'text-secondary hover:text-accent'
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