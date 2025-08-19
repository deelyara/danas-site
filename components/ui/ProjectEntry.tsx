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

const projectVisuals = {
  "wellness-automation": {
    image: "/work-teaser/wellness-outreach.png",
    accentColor: "#E8DCC6"
  },
  "multi-funnel": {
    image: "/work-teaser/social-campaign.png",
    accentColor: "#B8C5D6"
  },
  "newsletter": {
    image: "/work-teaser/newsletter.png",
    accentColor: "#F8E6E0"
  },
  "cheerfull-budda": {
    image: "/cheerful-buddha-case-study/PKR06926.jpg",
    accentColor: "#E8F5E8"
  }
} as const;

export default function ProjectEntry({ project, animationDelay = 0 }: ProjectEntryProps) {
  const { elementRef, isVisible } = useScrollAnimation();
  
  const visual = projectVisuals[project.slug as keyof typeof projectVisuals] || {
    image: null,
    accentColor: "#F0E6FF"
  };

  return (
    <Link href={`/work/${project.slug}`} className="group block">
      <article
        ref={elementRef}
        className={`project-entry-card animate-on-scroll ${
          isVisible ? 'animate-in' : ''
        }`}
        style={{ 
          transitionDelay: `${animationDelay}ms`,
          animationDelay: `${animationDelay}ms`
        }}
      >
        <div className="project-entry-layout">
          {/* Image Container - No gaps */}
          <div className="project-entry-image" style={{ backgroundColor: visual.accentColor + '10' }}>
            {visual.image && (
              <Image
                src={visual.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            )}
          </div>

          {/* Content Container */}
          <div className="project-entry-content">
            {/* Meta Information */}
            <div className="project-entry-meta">
              {project.company} · {project.year}
            </div>
            
            {/* Title */}
            <h2 className="project-entry-title group-hover:text-accent transition-colors">
              {project.title}
            </h2>
            
            {/* Description */}
            <p className="project-entry-description">
              {project.description}
            </p>
            
            {/* CTA Button */}
            <div>
              <span className="project-entry-cta">
                View Project →
              </span>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}