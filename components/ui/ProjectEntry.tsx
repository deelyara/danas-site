'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

interface ProjectEntryProps {
  project: {
    id: string;
    slug: string;
    title: string;
    company: string;
    year: string;
    description: string;
    metrics?: string;
    tags?: string[];
    index: number;
  };
  animationDelay?: number;
}

// Project images and styling data
const projectVisuals = {
  "wellness-automation": {
    image: "/work-teaser/wellness-outreach.png",
    gradient: "linear-gradient(135deg, #E8DCC6 0%, #D4C2B0 100%)",
    objectFit: "object-cover"
  },
  "multi-funnel": {
    image: "/work-teaser/social-campaign.png",
    gradient: "linear-gradient(135deg, #B8C5D6 0%, #A0B3C8 100%)",
    objectFit: "object-cover"
  },
  "newsletter": {
    image: "/work-teaser/newsletter.png",
    gradient: "linear-gradient(135deg, #F8E6E0 0%, #E8D4CC 100%)",
    objectFit: "object-cover"
  },
  "cheerfull-budda": {
    image: "/cheerful-buddha-case-study/PKR06926.jpg",
    gradient: "linear-gradient(135deg, #E8F5E8 0%, #D4E8D4 100%)",
    objectFit: "object-cover"
  }
} as const;

export default function ProjectEntry({ project, animationDelay = 0 }: ProjectEntryProps) {
  const { elementRef, isVisible } = useScrollAnimation();
  
  // Get visual data for this project
  const visual = projectVisuals[project.slug as keyof typeof projectVisuals] || {
    image: null,
    gradient: "linear-gradient(135deg, #F0E6FF 0%, #E0D4F0 100%)",
    objectFit: "object-cover"
  };

  return (
    <Link href={`/work/${project.slug}`} className="group block">
      <article
        ref={elementRef}
        className={`bg-surface rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500 animate-on-scroll ${
          isVisible ? 'animate-in' : ''
        } group-hover:-translate-y-1`}
        style={{ 
          transitionDelay: `${animationDelay}ms`,
          animationDelay: `${animationDelay}ms`
        }}
      >
        <div className="flex flex-col md:flex-row">
          {/* Project Image - Left Side */}
          <div className="relative w-full md:w-80 h-64 md:h-80 flex-shrink-0 overflow-hidden">
            {visual.image ? (
              <Image
                src={visual.image}
                alt={project.title}
                fill
                className={`${visual.objectFit} transition-transform duration-500 group-hover:scale-105`}
              />
            ) : (
              <div 
                className="w-full h-full"
                style={{ background: visual.gradient }}
              />
            )}
            

          </div>

          {/* Project Content - Right Side */}
          <div className="flex-1 p-8 md:p-12 flex flex-col justify-center">
            {/* Category */}
            <div className="mb-4">
              <span className="text-xs font-medium text-accent tracking-wider uppercase">
                {project.company.replace('DATA-DRIVEN OUTREACH', 'DATA-DRIVEN OUTREACH')}
              </span>
            </div>
            
            {/* Title */}
            <h2 className="font-serif text-3xl md:text-4xl text-primary mb-6 leading-tight group-hover:text-accent transition-colors duration-300">
              {project.title}
            </h2>
            
            {/* Description */}
            <p className="text-secondary text-base md:text-lg leading-relaxed mb-8 max-w-2xl">
              {project.description}
            </p>
            

            
            {/* CTA */}
            <div className="flex justify-center mt-8">
              <span className="cta-button">
                View Project
              </span>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}