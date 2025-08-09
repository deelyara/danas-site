'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);

    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="hero" className="full-screen relative overflow-hidden bg-background">
      {/* Animated Grain Texture Overlay */}
      <div className="grain-texture absolute inset-0 pointer-events-none opacity-[0.08]" />
      
      {/* Subtle background elements */}
      <div
        className="absolute top-20 right-0 w-96 h-96 bg-accent/3 rounded-full blur-3xl"
        style={{
          transform: isMounted ? `translateY(${scrollY * 0.3}px)` : 'translateY(0px)',
        }}
      />

      <div className="container mx-auto container-padding relative z-10 flex items-center justify-center min-h-screen">
        <div className="grid lg:grid-cols-2 gap-16 items-center w-full max-w-7xl mx-auto">
          
          {/* Left Column - Hero Text */}
          <div className="lg:pr-8">
            <div className={`transition-all duration-1000 ${isMounted && isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <div className="parallax-text text-left"
                  style={{
                    transform: isMounted ? `translateY(${scrollY * 0.1}px)` : 'translateY(0px)',
                  }}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[0.9] mb-6 font-normal" style={{ color: '#1A1A1A' }}>
                  Hello, I'm{' '}
                  <span className="font-serif italic inline-block" 
                        style={{
                          color: '#ECD06F',
                          transform: isMounted ? `rotate(-2deg) translateY(${scrollY * 0.05}px)` : 'rotate(-2deg) translateY(0px)',
                        }}>
                    Dana
                  </span>.
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl font-light leading-relaxed mb-8 tagline-delayed" style={{ color: '#6B6B68' }}>
                  Marketing strategist with expertise in digital campaigns, automation, and creative production. I help brands tell their story across every channel.
                </p>
              </div>

              {/* CTA Button */}
              <div className={`transition-all duration-1000 delay-300 ${isMounted && isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <Link 
                  href="/work"
                  className="cta-button breathe-animation inline-flex items-center gap-4"
                >
                  <span>Explore Work</span>
                  <div className="w-6 h-px bg-current transition-all duration-300" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="lg:pl-8">
            <div className={`transition-all duration-1000 delay-200 ${isMounted && isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
              <div className="relative">
                <Image
                  src="/images/448871221_1641830563271607_1220116573228161952_n.jpg"
                  alt="Dana - Marketing Strategist"
                  width={510}
                  height={680}
                  className="rounded-2xl object-cover shadow-2xl"
                  style={{
                    transform: isMounted ? `translateY(${scrollY * 0.05}px)` : 'translateY(0px)',
                  }}
                  priority
                />
                {/* Subtle overlay for better integration */}
                <div className="absolute inset-0 bg-accent/5 rounded-2xl mix-blend-multiply"></div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator left-1/2 transform -translate-x-1/2">
        <div className="w-px h-12 bg-accent/40"></div>
        <div className="w-2 h-2 bg-accent rounded-full mx-auto mt-2"></div>
      </div>
    </section>
  );
}