'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import Image from 'next/image';

export default function About() {
  const [isMounted, setIsMounted] = useState(false);
  const { elementRef: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { elementRef: contentRef, isVisible: contentVisible } = useScrollAnimation({ rootMargin: '0px 0px -100px 0px' });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section id="about" className="section-centered bg-background">
      <div className="container mx-auto px-6 md:px-12 w-full max-w-4xl">
        <div className="text-center">
          {/* Page Title */}
          <div
            ref={headerRef}
            className={`mb-12 md:mb-16 animate-on-scroll ${
              isMounted && headerVisible ? 'animate-in' : ''
            }`}
          >
            <h1 className="page-heading lowercase">
              about
            </h1>
          </div>

          {/* Main Content - Two Column */}
          <div
            ref={contentRef}
            className={`animate-on-scroll ${
              isMounted && contentVisible ? 'animate-in' : ''
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start text-left">
              {/* Portrait */}
              <figure className="order-1 md:order-none md:sticky md:top-24">
                <div className="relative w-full max-w-sm mx-auto md:mx-0 rounded-xl overflow-hidden border border-border-medium shadow-md bg-surface">
                  <Image
                    src="/images/Dana.JPG"
                    alt="Portrait of Dana Duisekenova"
                    width={800}
                    height={1000}
                    priority
                    sizes="(min-width: 1024px) 512px, (min-width: 768px) 360px, 90vw"
                    className="w-full h-auto block"
                  />
                </div>
              </figure>

              {/* Copy */}
              <div>
                <p className="body-text text-xl md:text-2xl mb-6 md:mb-8 leading-relaxed">
                  Hi, I'm <span className="font-semibold">Dana Duisekenova</span> — a marketing strategist with <span className="font-semibold">8+ years</span> of leading high-impact campaigns and managing complex marketing operations.
                </p>

                <p className="body-text">
                  I specialize in building <span className="font-semibold">data-driven, creative strategies</span> that deliver measurable growth. Throughout my career, I've taken ownership of multi-channel campaigns from concept to launch — overseeing <span className="font-semibold">PPC, ABM, influencer partnerships, marketing automation</span>, and large-scale content production for brands across industries.
                </p>

                <p className="body-text mb-12 md:mb-16">
                  I thrive in roles where I can <span className="font-semibold">set the strategic direction</span>, coordinate cross-functional teams, and ensure every initiative aligns with business goals. My approach combines <span className="font-semibold">analytical precision with creative execution</span>, making sure every project I lead not only meets but exceeds performance targets.
                </p>

                {/* CTA */}
                <div className="text-center md:text-left">
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
      </div>
    </section>
  );
}