'use client';

import { useEffect, useRef, useState } from 'react';

const expertiseAreas = [
  {
    title: "[Strategic Leadership]",
    description: "[Description of your approach to strategic marketing leadership and building high-performance teams]",
    skills: [
      "[Executive Leadership]",
      "[Team Building]",
      "[Change Management]",
      "[Strategic Planning]",
      "[Board Reporting]"
    ]
  },
  {
    title: "[Revenue Growth]",
    description: "[Description of your expertise in driving revenue through innovative marketing strategies]",
    skills: [
      "[Demand Generation]",
      "[Sales Enablement]",
      "[Pipeline Development]",
      "[Revenue Operations]",
      "[Growth Marketing]"
    ]
  },
  {
    title: "[Digital Excellence]",
    description: "[Description of your mastery of digital marketing channels and technologies]",
    skills: [
      "[Marketing Automation]",
      "[Data Analytics]",
      "[MarTech Stack]",
      "[AI & Personalization]",
      "[Digital Transformation]"
    ]
  }
];

export default function Expertise() {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const [isMounted, setIsMounted] = useState(false);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    setIsMounted(true);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            setVisibleItems((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentRefs = itemRefs.current;
    currentRefs.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      currentRefs.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section id="expertise" className="section-centered bg-surface">
      <div className="container mx-auto px-6 md:px-12 w-full max-w-6xl">
        <div className="text-center">
          {/* Section Header */}
          <div className="mb-20">
            <h2 className="font-serif selected-work-title text-primary mb-6 font-normal tracking-tight lowercase">
              expertise
            </h2>
          </div>
          
          {/* Expertise Grid - Centered and Balanced */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16 justify-items-center">
            {expertiseAreas.map((area, index) => (
              <div
                key={index}
                ref={(el) => {
                  if (el) itemRefs.current[index] = el;
                }}
                data-index={index}
                className={`w-full max-w-sm text-center transition-all duration-1000 ${
                  isMounted && visibleItems.includes(index)
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Area Title */}
                <h3 className="font-serif text-2xl md:text-3xl text-primary mb-6">
                  {area.title}
                </h3>
                
                {/* Description */}
                <p className="text-secondary leading-relaxed mb-8 text-left">
                  {area.description}
                </p>
                
                {/* Skills List - Clean and Simple */}
                <div className="text-left">
                  <h4 className="text-sm font-medium text-primary mb-4 uppercase tracking-wider">
                    Key Skills
                  </h4>
                  <ul className="space-y-2 text-sm text-secondary">
                    {area.skills.map((skill, skillIndex) => (
                      <li key={skillIndex} className="flex items-start">
                        <span className="text-accent text-xs mr-3 mt-1">•</span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}