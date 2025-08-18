'use client';

import { useEffect, useRef, useState } from 'react';

const expertiseAreas = [
  {
    title: "Creative",
    description: "Creative campaigns are the most enjoyable part of my work. I like the energy of team brainstorming sessions and the excitement when an idea starts to take shape. I'm involved in each stage: concept, strategy, execution, paid campaigns. Most importantly, the campaigns should not only look good on paper but deliver real results.",
    skills: [
      "Campaign Strategy & Execution",
      "Video & Photo Production",
      "Art Direction & Brand Design",
      "Content Ecosystem Development",
      "Influencer & UGC Marketing"
    ]
  },
  {
    title: "Automation",
    description: "I enjoy finding ways to make marketing processes faster, smarter, and more consistent. The best moment is when all 10+ steps fire and the whole system works on its own.",
    skills: [
      "Marketing Automation (Zapier, ActiveCampaign)",
      "Lead Generation & Nurturing",
      "Email Sequences & Workflows",
      "CRM Integration & Optimization",
      "Process Scaling & Documentation"
    ]
  },
  {
    title: "Data-Driven Outreach",
    description: "My approach blends in-depth analysis with actionable execution. Here I combine data and creativity to connect with the right people in the right way.",
    skills: [
      "PPC & Paid Social (Google, Meta)",
      "ABM & LinkedIn Outreach",
      "Analytics & Performance Tracking",
      "Audience & Competitor Research",
      "Conversion Optimization"
    ]
  }
];

const toolsCategories = [
  {
    title: "Analytics",
    tools: ["Google Ads", "Ahrefs", "Semrush"]
  },
  {
    title: "Design Tools",
    tools: ["Adobe Creative Suite", "Figma", "Canva"]
  },
  {
    title: "Marketing Platforms",
    tools: ["Meta Business Suite", "LinkedIn Sales Navigator", "ActiveCampaign", "Klaviyo", "Hunter.io"]
  },
  {
    title: "Development",
    tools: ["Zapier", "Airtable", "ClickUp", "WordPress", "OpenAI", "Apify"]
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
    <section id="expertise" className="min-h-screen py-16 md:py-24 bg-surface">
      <div className="container mx-auto px-6 md:px-12">
        {/* Section Header - Centered */}
        <div className="text-center mb-16 md:mb-24">
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-primary mb-8 md:mb-12 font-normal tracking-tight">
            expertise
          </h1>
          <p className="text-secondary leading-relaxed text-base md:text-lg max-w-3xl mx-auto px-4">
            I've always been a big nerd and I try to learn something new every day. I just need an internet connection and some snacks - afterwards you can expect me to come out of the room with a new skill.
          </p>
        </div>
        
        {/* Expertise Grid - Three Equal Height Columns */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {expertiseAreas.map((area, index) => (
              <div
                key={index}
                ref={(el) => {
                  if (el) itemRefs.current[index] = el;
                }}
                data-index={index}
                className={`flex flex-col h-full transition-all duration-1000 ${
                  isMounted && visibleItems.includes(index)
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Area Title - Bold and Larger */}
                <h3 className="font-serif text-2xl md:text-3xl text-primary mb-6 md:mb-8 font-bold">
                  {area.title}
                </h3>
                
                {/* Description */}
                <p className="text-secondary text-sm md:text-base leading-relaxed mb-8 md:mb-10">
                  {area.description}
                </p>
                
                {/* Skills List - Consistent Dashes */}
                <ul className="space-y-2 md:space-y-3">
                  {area.skills.map((skill, skillIndex) => (
                    <li 
                      key={skillIndex} 
                      className="text-secondary text-sm md:text-base flex items-start"
                    >
                      <span className="mr-3 mt-0.5 flex-shrink-0">–</span>
                      <span className="leading-relaxed">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        
        {/* Tools & Platforms Section - Organized Grid */}
        <div className="mt-24 md:mt-32 pt-16 md:pt-20 border-t border-border">
          <div className="max-w-6xl mx-auto px-4 md:px-0">
            <h2 className="text-xs md:text-sm uppercase tracking-[0.2em] text-secondary mb-8 md:mb-12 text-center font-medium">
              Tools & Platforms
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-8">
              {toolsCategories.map((category, index) => (
                <div key={index} className="text-center">
                  <h3 className="font-medium text-primary mb-3 md:mb-4 text-sm md:text-base">{category.title}</h3>
                  <ul className="space-y-1 md:space-y-2">
                    {category.tools.map((tool, toolIndex) => (
                      <li key={toolIndex} className="text-secondary text-xs md:text-sm">
                        {tool}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}