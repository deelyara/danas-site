'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useScrollAnimation, useMultipleScrollAnimation } from '../../hooks/useScrollAnimation';
import { editorialProjects } from '../../lib/projectData';

// Project images and styling data
const projectVisuals = {
  "wellness-automation": {
    image: "/Automating%20wellness/beginning.png",
    gradient: "linear-gradient(135deg, #E8DCC6 0%, #D4C2B0 100%)",
    objectFit: "object-cover"
  },
  "multi-funnel": {
    image: "/AI%20powered%20automation/Multi-funnel%20/illustration-Case%20Study_%20Multi-Funnel%20Paid%20Social%20Campaign.png",
    gradient: "linear-gradient(135deg, #B8C5D6 0%, #A0B3C8 100%)",
    objectFit: "object-cover"
  },
  "newsletter": {
    image: "/AI%20powered%20automation/newsletter/newsletter.png",
    gradient: "linear-gradient(135deg, #F8E6E0 0%, #E8D4CC 100%)",
    objectFit: "object-cover"
  },
  "cheerfull-budda": {
    image: "/Cheerful%20Buddha%20case%20study/PKR06926.jpg",
    gradient: "linear-gradient(135deg, #E8F5E8 0%, #D4E8D4 100%)",
    objectFit: "object-cover"
  }
};

// Create projects array with visual data
const projects = editorialProjects.map(project => ({
  ...project,
  visual: projectVisuals[project.slug as keyof typeof projectVisuals] || {
    image: null,
    gradient: "linear-gradient(135deg, #F0E6FF 0%, #E0D4F0 100%)",
    objectFit: "object-cover"
  }
}));

export default function Projects() {
  const { elementRef: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { setElementRef, isVisible } = useMultipleScrollAnimation(projects.length);

  return (
    <section id="projects" className="section-centered bg-background">
      <div className="container mx-auto px-6 md:px-12 w-full max-w-6xl">
        <div className="text-center">
          {/* Section Header */}
          <div className="mb-20" style={{ paddingTop: '40px' }}>
            <h1 
              ref={headerRef}
              className={`font-serif selected-work-title text-primary mb-6 font-normal tracking-tight lowercase animate-on-scroll ${
                headerVisible ? 'animate-in' : ''
              }`}
            >
              projects
            </h1>
          </div>

          
          {/* Projects Grid - Enhanced Card Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 max-w-5xl mx-auto">
            {projects.map((project, index) => (
              <Link 
                key={project.id}
                href={`/work/${project.slug}`}
                className="group block w-full"
              >
                <article
                  ref={setElementRef(index)}
                  className={`bg-surface rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 animate-on-scroll ${
                    isVisible(index) ? 'animate-in' : ''
                  } group-hover:-translate-y-2`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  {/* Project Image */}
                  <div className="relative h-64 overflow-hidden">
                    {project.visual.image ? (
                      <Image
                        src={project.visual.image}
                        alt={project.title}
                        fill
                        className={`${project.visual.objectFit} transition-transform duration-500 group-hover:scale-105`}
                      />
                    ) : (
                      <div 
                        className="w-full h-full"
                        style={{ background: project.visual.gradient }}
                      />
                    )}
                    
                    {/* Overlay gradient for better text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                    
                    {/* Year badge */}
                    <div className="absolute top-4 right-4">
                      <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-primary tracking-wider">
                        {project.year}
                      </span>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    {/* Company */}
                    <p className="company-name mb-2 text-xs">
                      {project.company}
                    </p>
                    
                    {/* Title */}
                    <h3 className="font-serif text-xl md:text-2xl text-primary mb-3 leading-tight group-hover:text-accent transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-secondary text-sm leading-relaxed mb-4 line-clamp-3">
                      {project.description}
                    </p>
                    
                    {/* Tags */}
                    {project.tags && project.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.slice(0, 3).map((tag, tagIndex) => (
                          <span 
                            key={tagIndex}
                            className="bg-accent/10 text-accent px-2 py-1 rounded-md text-xs font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                    
                    {/* Metrics */}
                    {project.metrics && (
                      <p className="text-xs text-accent font-medium">
                        {project.metrics}
                      </p>
                    )}
                    
                    {/* Read More Indicator */}
                    <div className="mt-4 flex items-center text-primary group-hover:text-accent transition-colors duration-300">
                      <span className="text-sm font-medium">View Project</span>
                      <svg className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}