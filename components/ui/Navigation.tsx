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

  const navClasses = `sticky top-0 left-0 right-0 z-[1000] py-2 border-b transition-all duration-300 ${
    isScrolled
      ? 'bg-background/95 backdrop-blur-md border-primary/10 shadow-[0_1px_12px_rgba(0,0,0,0.04)]'
      : 'bg-background/80 backdrop-blur-sm border-primary/5'
  }`;

  return (
    <nav className={navClasses}>
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Desktop Navigation - Logo left, Menu center */}
        <div className="hidden md:grid grid-cols-3 items-center">
          {/* Logo - Left */}
          <div>
            <Link 
              href="/" 
              className="font-serif text-xl text-primary hover:text-accent transition-colors duration-300 inline-block"
            >
              Dana
            </Link>
          </div>
          
          {/* Menu Items - Center */}
          <ul className="flex items-center justify-center gap-10 m-0 p-0 list-none">
            <li className="mb-0">
              <Link 
                href="/" 
                onClick={handleNavClick}
                className={`text-[14px] transition-all duration-300 uppercase tracking-[0.12em] font-medium ${
                  isActive('/') ? 'text-accent' : 'text-secondary hover:text-accent'
                }`}
              >
                Home
              </Link>
            </li>
            <li className="mb-0">
              <Link 
                href="/about" 
                onClick={handleNavClick}
                className={`text-[14px] transition-all duration-300 uppercase tracking-[0.12em] font-medium ${
                  isActive('/about') ? 'text-accent' : 'text-secondary hover:text-accent'
                }`}
              >
                About
              </Link>
            </li>
            <li className="mb-0">
              <Link 
                href="/work" 
                onClick={handleNavClick}
                className={`text-[14px] transition-all duration-300 uppercase tracking-[0.12em] font-medium ${
                  isActive('/work') ? 'text-accent' : 'text-secondary hover:text-accent'
                }`}
              >
                Work
              </Link>
            </li>
            <li className="mb-0">
              <Link 
                href="/expertise" 
                onClick={handleNavClick}
                className={`text-[14px] transition-all duration-300 uppercase tracking-[0.12em] font-medium ${
                  isActive('/expertise') ? 'text-accent' : 'text-secondary hover:text-accent'
                }`}
              >
                Expertise
              </Link>
            </li>
            <li className="mb-0">
              <Link 
                href="/contact" 
                onClick={handleNavClick}
                className={`text-[14px] transition-all duration-300 uppercase tracking-[0.12em] font-medium ${
                  isActive('/contact') ? 'text-accent' : 'text-secondary hover:text-accent'
                }`}
              >
                Contact
              </Link>
            </li>
          </ul>
          
          {/* Empty third column for balance */}
          <div></div>
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
            <ul className="flex flex-col py-6 px-6 space-y-3">
              <li>
                <Link 
                  href="/" 
                  onClick={handleNavClick}
                  className={`block py-2 text-sm transition-all duration-300 uppercase tracking-[0.12em] ${
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
                  className={`block py-2 text-sm transition-all duration-300 uppercase tracking-[0.12em] ${
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
                  className={`block py-2 text-sm transition-all duration-300 uppercase tracking-[0.12em] ${
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
                  className={`block py-2 text-sm transition-all duration-300 uppercase tracking-[0.12em] ${
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
                  className={`block py-2 text-sm transition-all duration-300 uppercase tracking-[0.12em] ${
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