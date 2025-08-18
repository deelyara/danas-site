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
          {/* Page Title */}
          <div 
            ref={headerRef}
            className={`mb-16 animate-on-scroll ${
              isMounted && headerVisible ? 'animate-in' : ''
            }`}
          >
            <h1 className="font-serif selected-work-title text-primary mb-8 font-normal tracking-tight lowercase">
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
              <p className="body-text text-xl md:text-2xl mb-8 leading-relaxed">
                Hi, I'm <span className="font-semibold">Dana Duisekenova</span> — a marketing strategist with <span className="font-semibold">8+ years</span> of leading high-impact campaigns and managing complex marketing operations.
              </p>
              
              <p className="body-text">
                I specialize in building <span className="font-semibold">data-driven, creative strategies</span> that deliver measurable growth. Throughout my career, I've taken ownership of multi-channel campaigns from concept to launch — overseeing <span className="font-semibold">PPC, ABM, influencer partnerships, marketing automation</span>, and large-scale content production for brands across industries.
              </p>

              <p className="body-text mb-16">
                I thrive in roles where I can <span className="font-semibold">set the strategic direction</span>, coordinate cross-functional teams, and ensure every initiative aligns with business goals. My approach combines <span className="font-semibold">analytical precision with creative execution</span>, making sure every project I lead not only meets but exceeds performance targets.
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