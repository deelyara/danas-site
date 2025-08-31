'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

interface Project {
  slug: string;
  title: string;
  company: string;
  year: string;
  description: string;
  thumbnail?: string;
}

interface ProjectNavigationProps {
  currentSlug: string;
  projects: Project[];
}

export default function ProjectNavigation({ currentSlug, projects }: ProjectNavigationProps) {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  
  // Filter out current project
  const otherProjects = projects.filter(p => p.slug !== currentSlug);
  
  // Ensure we only show 3 projects maximum
  const projectsToShow = otherProjects.slice(0, 3);
  
  return (
    <section className="project-navigation-section">
      <div className="project-navigation-container">
        <div className="project-navigation-header">
          <h3 className="project-navigation-title">More Projects</h3>
          <Link href="/work" className="project-navigation-view-all">
            View All
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
        
        <div className="project-navigation-grid">
          {projectsToShow.map((project, index) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              className={`project-navigation-card ${hoveredProject === project.slug ? 'hovered' : ''}`}
              onMouseEnter={() => setHoveredProject(project.slug)}
              onMouseLeave={() => setHoveredProject(null)}
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div className="project-navigation-card-image">
                {project.thumbnail && (
                  <Image
                    src={project.thumbnail}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                    className="object-cover"
                  />
                )}
                <div className="project-navigation-card-overlay">
                  <span className="project-navigation-card-number">0{index + 1}</span>
                </div>
              </div>
              
              <div className="project-navigation-card-content">
                <div className="project-navigation-card-meta">
                  <span className="project-navigation-card-company">{project.company}</span>
                  <span className="project-navigation-card-year">{project.year}</span>
                </div>
                <h4 className="project-navigation-card-title">{project.title}</h4>
                <p className="project-navigation-card-description">{project.description}</p>
                
                <div className="project-navigation-card-arrow">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}