'use client';

import { useEffect, useRef, useState } from 'react';

const expertiseAreas = [
  {
    id: 'creative',
    title: 'Creative',
    description: 'Campaign strategy and execution across all channels. From concept to production to performance.',
    skills: [
      'Campaign Strategy',
      'Video & Photo Production',
      'Art Direction',
      'Content Development',
      'Influencer Marketing'
    ],
    color: '#ECD06F'
  },
  {
    id: 'automation',
    title: 'Automation',
    description: 'Building systems that scale. Marketing automation that works while you sleep.',
    skills: [
      'Marketing Automation',
      'Lead Nurturing',
      'Email Workflows',
      'CRM Integration',
      'Process Documentation'
    ],
    color: '#B8C5D6'
  },
  {
    id: 'data',
    title: 'Data & Analytics',
    description: 'Performance marketing driven by insights. Every decision backed by data.',
    skills: [
      'PPC & Paid Social',
      'Analytics & Tracking',
      'A/B Testing',
      'Competitor Research',
      'Conversion Optimization'
    ],
    color: '#E8DCC6'
  }
];

const tools = {
  'Analytics': ['Google Analytics', 'Google Ads', 'Ahrefs', 'Semrush'],
  'Design': ['Adobe Creative Suite', 'Figma', 'Canva'],
  'Marketing': ['Meta Business', 'LinkedIn Sales Navigator', 'ActiveCampaign', 'Klaviyo'],
  'Development': ['Zapier', 'Airtable', 'WordPress', 'OpenAI']
};

export default function Expertise() {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
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
    <section className="min-h-screen bg-background">
      <div className="expertise-container">
        {/* Page Header */}
        <h1 className="page-heading lowercase">
          expertise
        </h1>
        <p className="expertise-intro">
          Three core areas where I deliver measurable impact through strategic thinking and hands-on execution.
        </p>
        
        {/* Professional Card Grid */}
        <div className="expertise-grid">
          {expertiseAreas.map((area, index) => (
            <div
              key={area.id}
              ref={(el) => {
                if (el) itemRefs.current[index] = el;
              }}
              data-index={index}
              className={`expertise-card animate-on-scroll ${
                visibleItems.includes(index) ? 'animate-in' : ''
              }`}
              style={{
                transitionDelay: `${index * 150}ms`,
                borderTop: hoveredCard === area.id ? `3px solid ${area.color}` : '3px solid transparent'
              }}
              onMouseEnter={() => setHoveredCard(area.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Card Number */}
              <div 
                className="expertise-card-number"
                style={{ color: area.color }}
              >
                0{index + 1}
              </div>

              {/* Title */}
              <h3 className="expertise-card-title">
                {area.title}
              </h3>
              
              {/* Description */}
              <p className="expertise-card-description">
                {area.description}
              </p>
              
              {/* Skills List */}
              <div className="expertise-skills-list">
                {area.skills.map((skill) => (
                  <div key={skill} className="expertise-skill-item">
                    <span 
                      className="expertise-skill-bullet"
                      style={{ color: area.color }}
                    >
                      •
                    </span>
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tools Section */}
        <div className="expertise-tools-section">
          <h2 className="expertise-tools-title">
            Tools & Platforms
          </h2>
          
          <div className="expertise-tools-grid">
            {Object.entries(tools).map(([category, toolList]) => (
              <div key={category}>
                <h3 className="expertise-tools-category">
                  {category}
                </h3>
                <div className="expertise-tools-list">
                  {toolList.map((tool) => (
                    <div key={tool} className="expertise-tool-item">
                      {tool}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}