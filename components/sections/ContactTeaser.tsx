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
            
            <h2 className="font-serif text-8xl md:text-9xl text-primary mb-12 font-normal lowercase tracking-tight">
              ready to <span style={{color: '#ECD06F', fontStyle: 'italic'}}>start</span>?
            </h2>
            
            <p className="text-2xl md:text-3xl text-secondary font-light leading-relaxed mb-16 max-w-3xl mx-auto">
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