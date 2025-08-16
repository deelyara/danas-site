'use client';

import Link from 'next/link';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

interface ProjectEntryProps {
  project: {
    id: string;
    slug: string;
    title: string;
    company: string;
    year: string;
    description: string;
    index: number;
  };
  animationDelay?: number;
}

export default function ProjectEntry({ project, animationDelay = 0 }: ProjectEntryProps) {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <Link href={`/work/${project.slug}`} className="group block">
      <article
        ref={elementRef}
        className={`px-8 py-16 border-b border-primary/5 last:border-b-0 animate-on-scroll hover:bg-primary/[0.01] transition-all duration-300 ${
          isVisible ? 'animate-in' : ''
        }`}
        style={{ 
          transitionDelay: `${animationDelay}ms`,
          animationDelay: `${animationDelay}ms`
        }}
      >
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          {/* Left column - Main content with proper spacing */}
          <div className="flex-1 max-w-3xl">
            {/* Project number with proper spacing */}
            <div className="text-sm text-accent font-medium mb-4 tracking-wider uppercase">
              {String(project.index + 1).padStart(2, '0')}
            </div>
            
            {/* Project title with corrected sizing */}
            <h2 className="font-serif text-2xl md:text-3xl text-primary mb-4 group-hover:text-accent transition-colors duration-300 leading-tight">
              {project.title}
            </h2>
            
            {/* Company name with proper spacing */}
            <p className="company-name text-secondary mb-8 text-sm uppercase tracking-wide">
              {project.company}
            </p>
            
            {/* Description with proper line height and spacing */}
            <p className="text-base text-secondary leading-relaxed">
              {project.description}
            </p>
          </div>
          
          {/* Right column - Year with proper alignment */}
          <div className="md:text-right flex-shrink-0">
            <span className="text-sm text-muted font-medium tracking-wider">
              {project.year}
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}