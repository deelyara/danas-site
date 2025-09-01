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

  const navClasses = `sticky top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${
    isScrolled
      ? 'bg-background/95 backdrop-blur-md border-primary/10 shadow-[0_1px_12px_rgba(0,0,0,0.04)]'
      : 'bg-background/90 backdrop-blur-sm border-primary/5'
  }`;

  return (
    <>
      <nav className={navClasses}>
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-3 md:py-2">
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

        {/* Mobile Navigation - Right Drawer */}
        <div className="md:hidden">
          <div className="flex justify-between items-center">
            {/* Logo/Brand */}
            <Link href="/" className="text-lg font-serif text-primary">
              Dana
            </Link>
            
            {/* Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="relative p-2 -mr-1 text-primary hover:text-accent transition-all duration-300 hover:bg-accent/5 rounded-lg backdrop-blur-sm"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span className={`block h-0.5 w-full bg-current transition-all duration-300 ease-out origin-center ${
                  mobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}></span>
                <span className={`block h-0.5 w-full bg-current transition-all duration-300 ease-out ${
                  mobileMenuOpen ? 'opacity-0' : ''
                }`}></span>
                <span className={`block h-0.5 w-full bg-current transition-all duration-300 ease-out origin-center ${
                  mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </nav>
    
    {/* Mobile Menu Overlay and Drawer - Outside nav for full coverage */}
    {/* Backdrop Overlay */}
    <div 
      className={`mobile-drawer-overlay fixed inset-0 z-[55] transition-all duration-300 ${
        mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}
      style={{
        backgroundColor: 'rgba(26, 26, 26, 0.3)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100%',
        height: '100vh'
      }}
      onClick={() => setMobileMenuOpen(false)}
    />

    {/* Right Drawer */}
    <div 
      className={`mobile-drawer fixed top-0 right-0 h-screen w-[calc(100vw-2rem)] max-w-md shadow-2xl z-[60] transition-transform duration-300 ease-out ${
        mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
      style={{
        backgroundColor: '#FAF8F4',
        backdropFilter: 'blur(20px) saturate(180%)',
        WebkitBackdropFilter: 'blur(20px) saturate(180%)',
        height: '100vh'
      }}
    >
            {/* Drawer Header */}
            <div className="flex items-center justify-end p-5 border-b border-primary/10">
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 -mr-1 text-secondary hover:text-primary transition-all duration-300 rounded-lg hover:bg-primary/5"
                aria-label="Close menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Drawer Content */}
            <div className="flex flex-col h-full" style={{ backgroundColor: '#FAF8F4' }}>
              {/* Navigation Links */}
              <nav className="flex-1 px-6 py-8" style={{ backgroundColor: '#FAF8F4' }}>
                <ul className="space-y-2">
                  {[
                    { href: '/', label: 'Home' },
                    { href: '/about', label: 'About' },
                    { href: '/work', label: 'Work' },
                    { href: '/expertise', label: 'Expertise' },
                    { href: '/contact', label: 'Contact' }
                  ].map(({ href, label }, index) => (
                    <li 
                      key={href}
                      className={`transition-all duration-500 ease-out ${
                        mobileMenuOpen 
                          ? 'opacity-100 translate-x-0' 
                          : 'opacity-0 translate-x-8'
                      }`}
                      style={{ transitionDelay: mobileMenuOpen ? `${index * 50}ms` : '0ms' }}
                    >
                      <Link 
                        href={href}
                        onClick={handleNavClick}
                        className={`group flex items-center py-4 px-4 -mx-4 rounded-xl transition-all duration-300 ${
                          isActive(href) 
                            ? 'text-accent bg-accent/8 font-medium' 
                            : 'text-secondary hover:text-accent hover:bg-accent/4'
                        }`}
                      >
                        <span className="text-lg uppercase tracking-[0.05em] font-medium">
                          {label}
                        </span>
                        {isActive(href) && (
                          <div className="ml-auto w-2 h-2 bg-accent rounded-full" />
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Drawer Footer */}
              <div className="px-6 py-6 border-t border-primary/8 bg-surface">
                <div className="text-center">
                  <p className="text-xs text-muted uppercase tracking-wider font-medium mb-2">
                    Portfolio 2025
                  </p>
                  <a 
                    href="mailto:dana.odair1@gmail.com"
                    className="text-sm text-secondary hover:text-accent transition-colors duration-300"
                  >
                    dana.odair1@gmail.com
                  </a>
                </div>
              </div>
            </div>
    </div>
    </>
  );
}