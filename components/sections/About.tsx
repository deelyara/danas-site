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
              className={`font-serif selected-work-title text-primary mb-6 font-normal tracking-tight lowercase animate-on-scroll ${isMounted && headerVisible ? 'animate-in' : ''
                }`}
            >
              about
            </h1>
          </div>

          {/* Main Content - Single Column */}
          <div className="max-w-2xl mx-auto text-left">
            <div
              ref={contentRef}
              className={`animate-on-scroll ${isMounted && contentVisible ? 'animate-in' : ''
                }`}
              style={{ transitionDelay: '200ms' }}
            >
              {/* Introduction */}
              <p className="body-text">
                Hi, I'm <strong className="text-primary">Dana Duisekenova</strong> — a marketing strategist with <em className="text-accent font-medium">8+ years</em> of leading high-impact campaigns and managing complex marketing operations. I specialize in building <strong className="text-primary">data-driven, creative strategies</strong> that deliver measurable growth.
              </p>

              {/* Experience */}
              <div className="mb-8">
                <h3 className="text-xl text-primary font-medium tracking-wide mb-4" style={{ fontVariant: 'small-caps' }}>Experience</h3>
                <p className="body-text">
                  Throughout my career, I've taken ownership of <strong className="text-primary">multi-channel campaigns from concept to launch</strong> — overseeing PPC, ABM, influencer partnerships, marketing automation, and large-scale content production for brands across industries.
                </p>
              </div>

              {/* Approach */}
              <div className="mb-16">
                <h3 className="text-xl text-primary font-medium tracking-wide mb-4" style={{ fontVariant: 'small-caps' }}>Approach</h3>
                <p className="body-text">
                  I thrive in roles where I can <strong className="text-primary">set the strategic direction, coordinate cross-functional teams,</strong> and ensure every initiative aligns with business goals. My approach combines <em className="text-accent font-medium">analytical precision with creative execution</em>, making sure every project I lead not only meets but <strong className="text-primary">exceeds performance targets</strong>.
                </p>
              </div>

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