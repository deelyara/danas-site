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
                className={`relative text-[13px] font-light transition-all duration-300 uppercase tracking-[0.08em] group ${
                  isActive('/') ? 'text-primary' : 'text-secondary hover:text-primary'
                }`}
              >
                Home
                <span className={`absolute bottom-[-6px] left-0 h-[3px] transition-all duration-300 ${
                  isActive('/') ? 'w-full' : 'w-0 group-hover:w-full'
                }`} style={{ backgroundColor: '#FFD700' }}></span>
              </Link>
            </li>
            <li>
              <Link 
                href="/about" 
                className={`relative text-[13px] font-light transition-all duration-300 uppercase tracking-[0.08em] group ${
                  isActive('/about') ? 'text-primary' : 'text-secondary hover:text-primary'
                }`}
              >
                About
                <span className={`absolute bottom-[-6px] left-0 h-[3px] transition-all duration-300 ${
                  isActive('/about') ? 'w-full' : 'w-0 group-hover:w-full'
                }`} style={{ backgroundColor: '#FFD700' }}></span>
              </Link>
            </li>
            <li>
              <Link 
                href="/work" 
                className={`relative text-[13px] font-light transition-all duration-300 uppercase tracking-[0.08em] group ${
                  isActive('/work') ? 'text-primary' : 'text-secondary hover:text-primary'
                }`}
              >
                Work
                <span className={`absolute bottom-[-6px] left-0 h-[3px] transition-all duration-300 ${
                  isActive('/work') ? 'w-full' : 'w-0 group-hover:w-full'
                }`} style={{ backgroundColor: '#FFD700' }}></span>
              </Link>
            </li>
            <li>
              <Link 
                href="/expertise" 
                className={`relative text-[13px] font-light transition-all duration-300 uppercase tracking-[0.08em] group ${
                  isActive('/expertise') ? 'text-primary' : 'text-secondary hover:text-primary'
                }`}
              >
                Expertise
                <span className={`absolute bottom-[-6px] left-0 h-[3px] transition-all duration-300 ${
                  isActive('/expertise') ? 'w-full' : 'w-0 group-hover:w-full'
                }`} style={{ backgroundColor: '#FFD700' }}></span>
              </Link>
            </li>
            <li>
              <Link 
                href="/contact" 
                className={`relative text-[13px] font-light transition-all duration-300 uppercase tracking-[0.08em] group ${
                  isActive('/contact') ? 'text-primary' : 'text-secondary hover:text-primary'
                }`}
              >
                Contact
                <span className={`absolute bottom-[-6px] left-0 h-[3px] transition-all duration-300 ${
                  isActive('/contact') ? 'w-full' : 'w-0 group-hover:w-full'
                }`} style={{ backgroundColor: '#FFD700' }}></span>
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
                  className={`relative transition-all duration-300 uppercase tracking-wider font-light group ${
                    isActive('/') ? 'text-primary' : 'text-secondary hover:text-primary'
                  }`}
                >
                  Home
                  <span className={`absolute bottom-[-2px] left-0 h-[1px] bg-accent transition-all duration-300 ${
                    isActive('/') ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className={`relative transition-all duration-300 uppercase tracking-wider font-light ${
                    isActive('/about') 
                      ? 'text-primary after:w-full after:bg-accent' 
                      : 'text-secondary hover:text-primary hover:after:w-full hover:after:bg-accent'
                  } after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:h-[1px] after:w-0 after:transition-all after:duration-300`}
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  href="/work" 
                  className={`relative transition-all duration-300 uppercase tracking-wider font-light ${
                    isActive('/work') 
                      ? 'text-primary after:w-full after:bg-accent' 
                      : 'text-secondary hover:text-primary hover:after:w-full hover:after:bg-accent'
                  } after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:h-[1px] after:w-0 after:transition-all after:duration-300`}
                >
                  Work
                </Link>
              </li>
              <li>
                <Link 
                  href="/expertise" 
                  className={`relative transition-all duration-300 uppercase tracking-wider font-light ${
                    isActive('/expertise') 
                      ? 'text-primary after:w-full after:bg-accent' 
                      : 'text-secondary hover:text-primary hover:after:w-full hover:after:bg-accent'
                  } after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:h-[1px] after:w-0 after:transition-all after:duration-300`}
                >
                  Expertise
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className={`relative transition-all duration-300 uppercase tracking-wider font-light ${
                    isActive('/contact') 
                      ? 'text-primary after:w-full after:bg-accent' 
                      : 'text-secondary hover:text-primary hover:after:w-full hover:after:bg-accent'
                  } after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:h-[1px] after:w-0 after:transition-all after:duration-300`}
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