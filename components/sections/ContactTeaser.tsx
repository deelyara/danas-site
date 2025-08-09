'use client';

import Link from 'next/link';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export default function ContactTeaser() {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section id="contact-teaser" className="full-screen bg-[#FAFAF8] flex items-center justify-center">
      <div className="container mx-auto container-padding w-full flex items-center justify-center min-h-screen">
        <div 
          ref={elementRef}
          className={`animate-on-scroll ${isVisible ? 'animate-in' : ''}`}
        >
          <div className="max-w-[600px] mx-auto text-center">
            
            <h2 className="font-serif text-5xl md:text-6xl text-primary mb-12 font-normal lowercase tracking-tight">
              ready to start?
            </h2>
            
            <p className="text-xl text-secondary font-light leading-relaxed mb-16 max-w-lg mx-auto">
              Let's discuss your next marketing initiative and how we can drive measurable growth together.
            </p>

            <div className="mb-16">
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