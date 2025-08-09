'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useScrollAnimation, useMultipleScrollAnimation } from '../../hooks/useScrollAnimation';

const projects = [
  {
    id: 1,
    slug: "revenue-growth-campaign",
    title: "Revenue Growth Campaign",
    company: "TECHCORP",
    year: "2023",
    gradient: "linear-gradient(135deg, #E8DCC6 0%, #D4C2B0 100%)"
  },
  {
    id: 2,
    slug: "roi-optimization-project",
    title: "ROI Optimization Project",
    company: "STARTUPX", 
    year: "2023",
    gradient: "linear-gradient(135deg, #B8C5D6 0%, #A0B3C8 100%)"
  },
  {
    id: 3,
    slug: "pipeline-generation-system",
    title: "Pipeline Generation System",
    company: "SCALEUP INC",
    year: "2022",
    gradient: "linear-gradient(135deg, #F8E6E0 0%, #E8D4CC 100%)"
  },
  {
    id: 4,
    slug: "cost-optimization-initiative",
    title: "Cost Optimization Initiative",
    company: "ENTERPRISE CO",
    year: "2022",
    gradient: "linear-gradient(135deg, #E8F5E8 0%, #D4E8D4 100%)"
  },
  {
    id: 5,
    slug: "lead-quality-enhancement",
    title: "Lead Quality Enhancement",
    company: "GROWTHCORP",
    year: "2022",
    gradient: "linear-gradient(135deg, #FFF2E6 0%, #F0E6D4 100%)"
  },
  {
    id: 6,
    slug: "conversion-rate-optimization",
    title: "Conversion Rate Optimization",
    company: "CONVERSIONPRO",
    year: "2021",
    gradient: "linear-gradient(135deg, #F0E6FF 0%, #E0D4F0 100%)"
  }
];

export default function Projects() {
  const { elementRef: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { setElementRef, isVisible } = useMultipleScrollAnimation(projects.length);

  return (
    <section id="projects" className="section-centered bg-background">
      <div className="container mx-auto container-padding w-full max-w-7xl">
        {/* Section Header with animation */}
        <div 
          ref={headerRef}
          className={`max-w-3xl mb-16 text-center mx-auto animate-on-scroll ${
            headerVisible ? 'animate-in' : ''
          }`}
        >
          <h1 className="font-serif selected-work-title text-primary mb-6 font-normal tracking-tight">
            selected work
          </h1>
          <p className="text-xl text-secondary font-light leading-relaxed max-w-3xl mx-auto">
            A comprehensive collection of strategic marketing projects that have driven measurable growth and transformation across various industries.
          </p>
        </div>

        {/* Projects Grid - centered, constrained tiles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 max-w-6xl mx-auto justify-items-center">
          {projects.map((project, index) => (
            <Link 
              key={project.id}
              href={`/work/${project.slug}`}
              className="group block w-full"
            >
              <div className="w-[320px] md:w-[340px] lg:w-[360px] mx-auto">
                <div
                  ref={setElementRef(index)}
                  className={`project-card relative animate-on-scroll ${
                    isVisible(index) ? 'animate-in' : ''
                  }`}
                  style={{ 
                    background: project.gradient,
                    transitionDelay: `${index * 100}ms`,
                    aspectRatio: '3/4'
                  }}
                >
                  {/* Year in corner */}
                  <div className="absolute top-6 right-6">
                    <span className="text-sm font-medium text-primary/60 tracking-wider">
                      {project.year}
                    </span>
                  </div>

                  {/* Project Info at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="project-title text-primary mb-2 group-hover:text-accent transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    <p className="company-name">
                      {project.company}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}