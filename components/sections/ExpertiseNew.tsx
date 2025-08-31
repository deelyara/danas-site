'use client';

import { useEffect, useRef, useState } from 'react';

const expertiseAreas = [
  {
    id: 'creative',
    title: 'Creative Production',
    subtitle: 'From concept to campaign',
    description: 'I bring ideas to life through strategic storytelling and multi-channel campaign execution. Every piece of content serves a purpose in the larger narrative.',
    skills: [
      'Campaign Strategy & Development',
      'Video & Photo Production',
      'Art Direction & Brand Voice',
      'Content Creation & Copywriting',
      'Influencer Partnership Management'
    ],
    icon: '✨',
    gradient: 'from-[#ECD06F] to-[#F4E4A3]'
  },
  {
    id: 'automation',
    title: 'Marketing Automation',
    subtitle: 'Systems that scale',
    description: 'I build intelligent marketing systems that nurture leads and drive conversions 24/7. Automation that feels personal, not robotic.',
    skills: [
      'Workflow Design & Implementation',
      'Lead Scoring & Nurturing',
      'Email Marketing Automation',
      'CRM Integration & Management',
      'Process Documentation & SOPs'
    ],
    icon: '⚡',
    gradient: 'from-[#B8C5D6] to-[#D4DDE8]'
  },
  {
    id: 'analytics',
    title: 'Data & Performance',
    subtitle: 'Insights that drive growth',
    description: 'I turn data into actionable insights that improve ROI. Every campaign is measured, tested, and optimized for maximum impact.',
    skills: [
      'PPC & Paid Social Management',
      'Analytics Setup & Tracking',
      'A/B Testing & Optimization',
      'Competitive Intelligence',
      'Conversion Rate Optimization'
    ],
    icon: '📊',
    gradient: 'from-[#E8DCC6] to-[#F2EAD9]'
  }
];

// Tool logos with inline SVGs for better control
const toolLogos = {
  // Analytics Tools
  'Google Analytics': {
    svg: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M22.84 2.998v17.999a2.983 2.983 0 01-2.967 2.998L4.133 24a2.983 2.983 0 01-2.98-2.998V2.998A2.983 2.983 0 014.133 0l15.74-.005a2.983 2.983 0 012.967 2.998zM4.153 2.007v19.986L19.873 22V2.002l-15.72.005z"/></svg>',
    color: '#F9AB00'
  },
  'Google Ads': {
    svg: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.174 15.015l-6.152-10.577a1.609 1.609 0 00-2.78 0L.826 15.015a1.609 1.609 0 001.39 2.418h12.304l1.539 2.652a1.609 1.609 0 002.78 0l3.945-6.785a1.609 1.609 0 000-1.61z"/></svg>',
    color: '#4285F4'
  },
  'Ahrefs': {
    svg: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M13.32 3.16c-.75.04-1.49.23-2.16.59-.67.35-1.24.84-1.67 1.44-.42.6-.68 1.29-.75 2.01-.07.72.04 1.45.34 2.11.3.67.76 1.24 1.35 1.67.59.42 1.28.69 2.01.75.72.07 1.45-.04 2.11-.34.67-.3 1.24-.76 1.67-1.35z"/></svg>',
    color: '#FF6B35'
  },
  'Semrush': {
    svg: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M10.12 13.88v4.24c0 1.15-.47 1.73-1.4 1.73s-1.4-.58-1.4-1.73V13.88h1.4z"/></svg>',
    color: '#FF642D'
  },
  // Design Tools
  'Figma': {
    svg: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M5 5.5A3.5 3.5 0 018.5 2H12v7H8.5A3.5 3.5 0 015 5.5zM12 2h3.5a3.5 3.5 0 110 7H12V2z"/><path d="M12 12.5a3.5 3.5 0 117 0 3.5 3.5 0 11-7 0z"/><path d="M5 19.5A3.5 3.5 0 018.5 16H12v3.5a3.5 3.5 0 11-7 0z"/><path d="M5 12.5A3.5 3.5 0 018.5 9H12v7H8.5A3.5 3.5 0 015 12.5z"/></svg>',
    color: '#F24E1E'
  },
  'Adobe': {
    svg: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M13.492 3H24v18L13.492 3zM10.508 3H0v18L10.508 3zM7.191 12.907l2.529 8.093h3.096L8.788 10.041l-1.597 2.866z"/></svg>',
    color: '#FF0000'
  },
  'Canva': {
    svg: '<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="3"/><circle cx="12" cy="3" r="3"/><circle cx="3" cy="12" r="3"/><circle cx="21" cy="12" r="3"/><circle cx="12" cy="21" r="3"/></svg>',
    color: '#00C4CC'
  },
  // Marketing Tools
  'Meta': {
    svg: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"/></svg>',
    color: '#1877F2'
  },
  'LinkedIn': {
    svg: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>',
    color: '#0A66C2'
  },
  'ActiveCampaign': {
    svg: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 12a2.5 2.5 0 110-5 2.5 2.5 0 010 5zm0-7a4.5 4.5 0 100 9 4.5 4.5 0 000-9z"/></svg>',
    color: '#356AE6'
  },
  'Klaviyo': {
    svg: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 12l10 10 10-10L12 2zm0 2.83L19.17 12 12 19.17 4.83 12 12 4.83z"/></svg>',
    color: '#222222'
  },
  // Development Tools
  'Zapier': {
    svg: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M15 12.004c0 .893-.395 1.689-1.016 2.238l4.238 4.238c.55-.621 1.016-1.345 1.016-2.238V7.758c0-.893-.466-1.617-1.016-2.238l-4.238 4.238c.621.549 1.016 1.345 1.016 2.238v.008z"/></svg>',
    color: '#FF4A00'
  },
  'Airtable': {
    svg: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M11.992 2c-5.518 0-10 4.478-10 10s4.482 10 10 10c5.522 0 10-4.478 10-10s-4.478-10-10-10zm0 1.821a8.179 8.179 0 110 16.358 8.179 8.179 0 010-16.358z"/></svg>',
    color: '#FCB400'
  },
  'WordPress': {
    svg: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M21.469 6.825c.84 1.537 1.318 3.3 1.318 5.175 0 3.979-2.156 7.456-5.363 9.325l3.295-9.527c.615-1.54.82-2.771.82-3.864 0-.405-.026-.78-.07-1.11z"/></svg>',
    color: '#21759B'
  },
  'OpenAI': {
    svg: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M22.282 9.821a5.985 5.985 0 00-.516-4.91 6.046 6.046 0 00-6.51-2.9A6.065 6.065 0 004.981 4.18a5.985 5.985 0 00-3.998 2.9 6.046 6.046 0 00.743 7.097 5.98 5.98 0 00.51 4.911 6.051 6.051 0 006.515 2.9z"/></svg>',
    color: '#412991'
  }
};

export default function ExpertiseNew() {
  const [activeArea, setActiveArea] = useState<string | null>(null);
  const [visibleSections, setVisibleSections] = useState<number[]>([]);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            setVisibleSections((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section className="min-h-screen bg-background relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-20 md:py-24 relative z-10">
        {/* Page Header - More Dynamic */}
        <div className="text-center mb-16 md:mb-20">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif lowercase mb-6 text-primary">
            expertise
          </h1>
          <p className="text-lg md:text-xl text-secondary max-w-3xl mx-auto leading-relaxed">
            A decade of experience across creative production, marketing automation, and data-driven growth. 
            I don't just execute tactics—I build systems that scale.
          </p>
        </div>
        
        {/* Expertise Areas - Card Based Design */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-20">
          {expertiseAreas.map((area, index) => (
            <div
              key={area.id}
              ref={(el) => {
                if (el) sectionRefs.current[index] = el;
              }}
              data-index={index}
              className={`group relative bg-white rounded-2xl p-8 border border-primary/10 
                transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] hover:border-primary/20
                cursor-pointer animate-on-scroll ${
                visibleSections.includes(index) ? 'animate-in' : ''
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
              onClick={() => setActiveArea(activeArea === area.id ? null : area.id)}
            >
              {/* Gradient accent on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${area.gradient} opacity-0 
                group-hover:opacity-5 rounded-2xl transition-opacity duration-500`} />
              
              {/* Icon */}
              <div className="text-4xl mb-4">{area.icon}</div>
              
              {/* Title & Subtitle */}
              <h3 className="text-2xl font-serif mb-2 text-primary group-hover:text-accent transition-colors">
                {area.title}
              </h3>
              <p className="text-sm text-secondary/70 uppercase tracking-wider mb-4">
                {area.subtitle}
              </p>
              
              {/* Description */}
              <p className="text-secondary leading-relaxed mb-6">
                {area.description}
              </p>
              
              {/* Skills - Collapsible */}
              <div className={`space-y-2 overflow-hidden transition-all duration-500 ${
                activeArea === area.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                {area.skills.map((skill) => (
                  <div key={skill} className="flex items-start">
                    <span className="text-accent mr-2 mt-1">→</span>
                    <span className="text-sm text-secondary">{skill}</span>
                  </div>
                ))}
              </div>
              
              {/* Expand indicator */}
              <div className="flex items-center justify-between mt-4 pt-4 border-t border-primary/5">
                <span className="text-xs text-secondary/60 uppercase tracking-wider">
                  {activeArea === area.id ? 'Click to collapse' : 'Click for details'}
                </span>
                <svg 
                  className={`w-4 h-4 text-secondary/40 transition-transform duration-300 ${
                    activeArea === area.id ? 'rotate-180' : ''
                  }`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Tools Section - Redesigned with Logos */}
        <div className="bg-surface rounded-3xl p-10 md:p-12 border border-primary/5">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-12 text-primary">
            Tools & Platforms
          </h2>
          
          {/* Tool Categories with Logos */}
          <div className="space-y-10">
            {Object.entries({
              'Analytics & Insights': ['Google Analytics', 'Google Ads', 'Ahrefs', 'Semrush'],
              'Design & Creative': ['Adobe', 'Figma', 'Canva'],
              'Marketing Platforms': ['Meta', 'LinkedIn', 'ActiveCampaign', 'Klaviyo'],
              'Automation & Development': ['Zapier', 'Airtable', 'WordPress', 'OpenAI']
            }).map(([category, tools]) => (
              <div key={category}>
                <h3 className="text-xs uppercase tracking-wider text-secondary/60 mb-4 font-medium">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-4">
                  {tools.map((tool) => {
                    const logoData = toolLogos[tool as keyof typeof toolLogos];
                    return (
                      <div 
                        key={tool}
                        className="group flex items-center gap-3 bg-white rounded-xl px-4 py-3 
                          border border-primary/5 hover:border-primary/20 hover:shadow-lg 
                          transition-all duration-300 cursor-pointer"
                      >
                        {/* Logo */}
                        <div 
                          className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity"
                          style={{ color: logoData?.color || '#6B6B68' }}
                          dangerouslySetInnerHTML={{ __html: logoData?.svg || '' }}
                        />
                        {/* Name */}
                        <span className="text-sm text-secondary group-hover:text-primary transition-colors">
                          {tool}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 md:mt-20">
          <p className="text-lg text-secondary mb-6">
            Ready to leverage these skills for your next project?
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-background 
              rounded-full hover:bg-accent hover:text-primary transition-all duration-300
              text-sm uppercase tracking-wider font-medium"
          >
            Let's Work Together
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}