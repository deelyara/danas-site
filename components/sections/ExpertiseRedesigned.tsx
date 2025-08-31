'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const expertiseAreas = [
  {
    id: 'creative',
    title: 'Creative Production',
    subtitle: 'From concept to campaign',
    description: 'Creative campaigns are the most enjoyable part of my work. I love team brainstorming and seeing ideas take shape through concept, strategy, and execution.',
    skills: [
      'Creative Concepting',
      'Campaign Execution',
      'Video Production',
      'Photo Production',
      'Art Direction'
    ],
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a1.5 1.5 0 00-1.006-1.006L15.75 7.5l1.035-.259a1.5 1.5 0 001.006-1.006L18 5.25l.259 1.035a1.5 1.5 0 001.006 1.006L20.25 7.5l-1.035.259a1.5 1.5 0 00-1.006 1.006zM16.894 17.801L16.5 19.5l-.394-1.699a1.5 1.5 0 00-1.207-1.207L13.5 16.5l1.699-.394a1.5 1.5 0 001.207-1.207L16.5 13.5l.394 1.699a1.5 1.5 0 001.207 1.207l1.399.094-1.699.394a1.5 1.5 0 00-1.207 1.207z" />
      </svg>
    ),
    color: '#ECD06F'
  },
  {
    id: 'automation',
    title: 'Marketing Automation',
    subtitle: 'Systems that scale',
    description: 'I enjoy making marketing processes faster, smarter, and more consistent. The best moment is when all 10+ steps fire and the whole system works on its own.',
    skills: [
      'Automation Design',
      'Workflow Optimization',
      'CRM Integration',
      'Email Sequences',
      'Process Scaling'
    ],
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    color: '#B8C5D6'
  },
  {
    id: 'analytics',
    title: 'Data & Performance',
    subtitle: 'Insights that drive growth',
    description: 'My approach blends in-depth analysis with actionable execution. I combine data and creativity to connect with the right people in the right way.',
    skills: [
      'Marketing Strategy',
      'PPC',
      'Lead Generation',
      'KPI Analysis',
      'Metrics Tracking'
    ],
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    color: '#E8DCC6'
  }
];

// Tool mappings with proper filenames
const toolLogos = {
  'Google Analytics': { file: 'ga.svg', name: 'Google Analytics' },
  'Google Ads': { file: 'gads.svg', name: 'Google Ads' },
  'Ahrefs': { file: 'ahrefs.svg', name: 'Ahrefs' },
  'Adobe': { file: 'adobe.svg', name: 'Adobe Creative Suite' },
  'Figma': { file: 'figma.svg', name: 'Figma' },
  'Canva': { file: 'canva.svg', name: 'Canva' },
  'Meta': { file: 'meta.svg', name: 'Meta Business' },
  'LinkedIn': { file: 'linkedin.svg', name: 'LinkedIn' },
  'ActiveCampaign': { file: 'activecampaign.svg', name: 'ActiveCampaign' },
  'Klaviyo': { file: 'klaviyo.svg', name: 'Klaviyo' },
  'Zapier': { file: 'zapier.svg', name: 'Zapier' },
  'Airtable': { file: 'airtable.svg', name: 'Airtable' },
  'WordPress': { file: 'wp.svg', name: 'WordPress' },
  'OpenAI': { file: 'openai.svg', name: 'OpenAI' }
};

const toolCategories = {
  'Analytics & Insights': ['Google Analytics', 'Google Ads', 'Ahrefs'],
  'Design & Creative': ['Adobe', 'Figma', 'Canva'],
  'Marketing Platforms': ['Meta', 'LinkedIn', 'ActiveCampaign', 'Klaviyo'],
  'Automation & Development': ['Zapier', 'Airtable', 'WordPress', 'OpenAI']
};

export default function ExpertiseRedesigned() {
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
    <section className="min-h-screen relative overflow-hidden">
      {/* Alternating background sections */}
      
      {/* Header Section - Clean background */}
      <div className="bg-gradient-to-b from-background to-[#FAF9F7]">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-20 md:py-24">
          {/* Page Header */}
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif lowercase mb-6 text-primary">
              expertise
            </h1>
            <p className="text-lg md:text-xl text-secondary max-w-3xl mx-auto leading-relaxed">
              I've always been a big nerd and I try to learn something new every day. I just need an internet connection and some snacks - afterwards you can expect me to come out of the room with a new skill.
            </p>
          </div>
        </div>
      </div>
      
      {/* Expertise Areas Section - Subtle background */}
      <div className="bg-gradient-to-b from-[#FAF9F7] via-[#F9F7F3] to-[#F7F5F1]">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-20">
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {expertiseAreas.map((area, index) => (
            <div
              key={area.id}
              ref={(el) => {
                if (el) sectionRefs.current[index] = el;
              }}
              data-index={index}
              className={`group relative bg-white rounded-2xl p-8 border border-primary/10 
                transition-all duration-500 hover:shadow-xl hover:border-primary/20
                animate-on-scroll ${
                visibleSections.includes(index) ? 'animate-in' : ''
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Icon with color accent */}
              <div 
                className="mb-6 text-primary opacity-80 group-hover:opacity-100 transition-opacity"
                style={{ color: area.color }}
              >
                {area.icon}
              </div>
              
              {/* Title & Subtitle */}
              <h3 className="text-2xl font-serif mb-2 text-primary">
                {area.title}
              </h3>
              <p className="text-sm text-secondary/70 uppercase tracking-wider mb-4">
                {area.subtitle}
              </p>
              
              {/* Description */}
              <p className="text-secondary leading-relaxed mb-6">
                {area.description}
              </p>
              
              {/* Skills - Visible by default as short labels */}
              <div className="flex flex-wrap gap-2">
                {area.skills.map((skill) => (
                  <span 
                    key={skill} 
                    className="inline-block text-xs px-3 py-1.5 rounded-full text-secondary/80 
                      border border-primary/10 transition-all duration-300
                      group-hover:border-primary/20 group-hover:bg-primary/5"
                    style={{ backgroundColor: '#FAF8F4' }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>

      {/* Tools Section - Different background */}
      <div className="bg-gradient-to-b from-[#F7F5F1] via-[#F8F6F2] to-background">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-20">
          <div className="relative overflow-hidden">
          
            <h2 className="text-3xl md:text-4xl font-serif text-center mb-12 text-primary">
              Tools & Platforms
            </h2>
          
            {/* Creative tool display - flowing badges */}
            <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              {Object.entries(toolCategories).map(([category, tools]) => (
                tools.map((tool) => {
                  const logoData = toolLogos[tool as keyof typeof toolLogos];
                  return (
                    <div 
                      key={tool}
                      className="group flex items-center gap-2 px-4 py-2.5 
                        bg-white/80 backdrop-blur-sm rounded-full border border-primary/5 
                        hover:border-primary/20 hover:bg-white hover:shadow-md 
                        transition-all duration-300 cursor-pointer"
                    >
                      {/* Logo - small and elegant with proper aspect ratio */}
                      <div className="relative h-5 opacity-70 group-hover:opacity-100 transition-opacity" 
                           style={{ 
                             width: ['Ahrefs', 'Meta', 'ActiveCampaign', 'Klaviyo'].includes(tool) ? '32px' : '20px' 
                           }}>
                        <Image
                          src={`/icons/${logoData.file}`}
                          alt={logoData.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                      {/* Name */}
                      <span className="text-xs text-secondary group-hover:text-primary transition-colors font-medium">
                        {logoData.name}
                      </span>
                    </div>
                  );
                })
              )).flat()}
            </div>
            
            {/* Category indicators below */}
            <div className="flex flex-wrap justify-center gap-6 mt-12">
              {Object.keys(toolCategories).map((category, index) => (
                <div key={category} className="flex items-center gap-2">
                  <div 
                    className="w-2 h-2 rounded-full"
                    style={{ 
                      backgroundColor: index === 0 ? '#ECD06F' : 
                                     index === 1 ? '#B8C5D6' : 
                                     index === 2 ? '#E8DCC6' : '#D4C5B0' 
                    }}
                  />
                  <span className="text-xs text-secondary/60 uppercase tracking-wider">
                    {category}
                  </span>
                </div>
              ))}
            </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action - Like Homepage Style */}
      <div className="bg-gradient-to-b from-background via-[#FAF9F7] to-[#F9F8F4]">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-20">
          <div className="text-center">
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-primary mb-8 md:mb-12 font-normal lowercase tracking-tight">
              ready to <span style={{color: '#ECD06F', fontStyle: 'italic'}}>collaborate</span>?
            </h2>
            
            <p className="text-lg md:text-xl lg:text-2xl text-secondary font-light leading-relaxed mb-12 md:mb-16 max-w-2xl mx-auto">
              Let's leverage these skills to drive measurable growth for your next project.
            </p>

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
    </section>
  );
}