'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export default function About() {
  const [isMounted, setIsMounted] = useState(false);
  const { elementRef: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { elementRef: contentRef, isVisible: contentVisible } = useScrollAnimation({ rootMargin: '0px 0px -100px 0px' });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section id="about" className="section-centered bg-background">
      <div className="container mx-auto container-padding w-full max-w-3xl">
        <div className="text-center">
          {/* Section Header */}
          <div className="mb-20" style={{ paddingTop: '40px' }}>
            <h1 
              ref={headerRef}
              className={`font-serif selected-work-title text-primary mb-6 font-normal tracking-tight lowercase animate-on-scroll ${
                isMounted && headerVisible ? 'animate-in' : ''
              }`}
            >
              about
            </h1>
          </div>

          {/* Main Content - Single Column */}
          <div className="max-w-2xl mx-auto text-left">
            <div 
              ref={contentRef}
              className={`animate-on-scroll ${
                isMounted && contentVisible ? 'animate-in' : ''
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              <p className="body-text">
                [Professional introduction paragraph describing background, approach, and what drives the work. This section establishes credibility and personal connection with potential clients.]
              </p>
              
              <p className="body-text">
                [Background and approach paragraph detailing methodology, experience, and unique perspective. Focus on what makes this marketing strategist different from others in the field.]
              </p>

              <p className="body-text mb-16">
                [Current focus paragraph outlining what types of projects and clients are the primary focus now, along with availability and working style preferences.]
              </p>

              {/* CTA */}
              <div className="text-center">
                <Link 
                  href="/contact"
                  className="cta-button"
                >
                  Let's Work Together
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}