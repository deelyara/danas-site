'use client';

import Link from 'next/link';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export default function ContactTeaser() {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section id="contact-teaser" className="full-screen bg-[#FAFAF8] flex items-center justify-center">
      <div className="container mx-auto px-6 md:px-12 w-full flex items-center justify-center min-h-screen">
        <div 
          ref={elementRef}
          className={`animate-on-scroll ${isVisible ? 'animate-in' : ''}`}
        >
          <div className="max-w-[600px] mx-auto text-center">
            
            <h2 className="font-serif text-7xl md:text-8xl lg:text-9xl text-primary mb-8 md:mb-12 font-normal lowercase tracking-tight">
              ready to <span style={{color: '#ECD06F', fontStyle: 'italic'}}>start</span>?
            </h2>
            
            <p className="text-xl md:text-2xl lg:text-3xl text-secondary font-light leading-relaxed mb-12 md:mb-16 max-w-3xl mx-auto">
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