'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function AboutTeaser() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('about-teaser');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about-teaser" className="section-padding bg-secondary/3">
      <div className="container mx-auto px-6">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="max-w-4xl">
            <h2 className="section-heading lowercase">
              about
            </h2>
            
            <div className="grid md:grid-cols-2 gap-16 items-start">
              <div>
                <h3 className="font-serif text-xl md:text-2xl text-primary mb-6 leading-tight">
                  Marketing strategist & growth specialist
                </h3>
                <p className="text-base md:text-lg text-primary/80 leading-relaxed font-light">
                  With 8+ years of experience driving measurable growth through strategic marketing leadership, 
                  data-driven campaigns, and innovative solutions.
                </p>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-accent tracking-wider uppercase mb-2">
                    Focus Areas
                  </h4>
                  <p className="text-primary/70 font-light text-sm">
                    Strategic Leadership • Revenue Growth • Digital Marketing
                  </p>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-accent tracking-wider uppercase mb-2">
                    Experience
                  </h4>
                  <p className="text-primary/70 font-light text-sm">
                    8+ years in marketing strategy and growth initiatives
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-16">
              <Link 
                href="/about" 
                className="inline-flex items-center gap-3 text-accent hover:text-primary transition-colors duration-300 group font-medium"
              >
                <span>learn more about me</span>
                <div className="w-8 h-px bg-current group-hover:w-12 transition-all duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 