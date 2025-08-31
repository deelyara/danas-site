'use client';

import Link from 'next/link';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export default function ContactTeaser() {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section id="contact-teaser" className="full-screen contact-background flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 w-full flex items-center justify-center min-h-screen">
        <div 
          ref={elementRef}
          className={`animate-on-scroll ${isVisible ? 'animate-in' : ''}`}
        >
          <div className="max-w-[600px] mx-auto text-center">
            
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-primary mb-8 md:mb-12 font-normal lowercase tracking-tight">
              ready to <span style={{color: '#ECD06F', fontStyle: 'italic'}}>start</span>?
            </h2>
            
            <p className="text-lg md:text-xl lg:text-2xl text-secondary font-light leading-relaxed mb-12 md:mb-16 max-w-2xl mx-auto">
              Let's discuss your next marketing initiative and how we can drive measurable growth together.
            </p>

            <div>
              {/* Primary CTA using new button style */}
              <div>
                <Link 
                  href="/contact"
                  className="cta-button text-lg"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
} 