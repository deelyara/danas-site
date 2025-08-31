'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useScrollAnimation, useMultipleScrollAnimation } from '../../hooks/useScrollAnimation';
import { editorialProjects } from '../../lib/projectData';

export default function WorkTeaser() {
  const { elementRef: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { setElementRef, isVisible } = useMultipleScrollAnimation(3); // 3 featured projects

  // Get the real featured projects and add colors and images
  const featuredProjects = editorialProjects
    .filter(project => project.featured)
    .slice(0, 3)
    .map((project, index) => {
      const colors = ["#E8DCC6", "#B8C5D6", "#D4C5B0"]; // warm beige, muted blue, soft tan
      const images = [
        "/cheerful-buddha-case-study/PKR06926.jpg", // cheerful buddha - first featured project
        "/work-teaser/wellness-outreach.png", // wellness automation - second featured project
        "/work-teaser/social-campaign.png" // multi-funnel - third featured project
      ];
      const objectPositions = [
        "object-cover", // cheerful buddha - standard cover
        "object-cover object-bottom", // wellness automation - cover with bottom positioning  
        "object-cover" // multi-funnel - standard cover
      ];
      return {
        ...project,
        color: colors[index] || "#E8DCC6",
        image: images[index],
        objectPosition: objectPositions[index] || "object-cover"
      };
    });

  return (
    <section id="work-teaser" className="py-24 md:py-32 work-background relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-6xl">
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-12 md:mb-16 animate-on-scroll ${headerVisible ? 'animate-in' : ''}`}
        >
          <h2 className="font-serif selected-work-title text-primary font-normal lowercase tracking-tight">
            selected work
          </h2>
        </div>

        {/* Projects Container */}
        <div className="projects-container w-full max-w-[1000px] mx-auto">
          {featuredProjects.map((project, index) => (
            <div
              key={project.id}
              ref={setElementRef(index)}
              className={`group block w-full animate-on-scroll ${
                isVisible(index) ? 'animate-in' : ''
              } ${index === featuredProjects.length - 1 ? '' : 'mb-12 md:mb-16'}`}
              style={{ 
                transitionDelay: `${index * 100}ms`
              }}
            >
              {/* Last project with button */}
              {index === featuredProjects.length - 1 ? (
                <div className="w-full">
                  <Link 
                    href={`/work/${project.slug}`}
                    className="group flex flex-col md:flex-row md:items-center gap-8 md:gap-12"
                  >
                  {/* Project Card - Top on mobile, Left on desktop */}
                  <div 
                    className="project-card w-full md:w-[280px] h-[200px] md:h-[180px] flex-shrink-0 rounded-xl transition-all duration-300 group-hover:shadow-lg relative overflow-hidden mx-auto md:mx-0"
                    style={{ backgroundColor: project.color, maxWidth: '320px' }}
                  >
                    {/* Project Image */}
                    {project.image && (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className={project.objectPosition}
                      />
                    )}

                  </div>

                  {/* Project Info - Bottom on mobile, Right on desktop */}
                  <div className="project-info text-center md:text-left">
                    <h3 className="text-[24px] md:text-[28px] font-serif text-primary mb-3 group-hover:text-accent transition-colors duration-300 leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-sm uppercase tracking-[0.1em] font-medium text-[#6B6B68] mb-3">
                      {project.company}
                    </p>
                    <p className="project-description text-base text-secondary/80 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </Link>

                  {/* View All Projects CTA - Standard Button Style */}
                  <div className="mt-12 md:mt-16 w-full flex justify-center">
                    <Link 
                      href="/work"
                      className="cta-button inline-flex items-center justify-center"
                    >
                      <span>View All Projects</span>
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              ) : (
                <Link 
                  href={`/work/${project.slug}`}
                  className="group flex flex-col md:flex-row md:items-center gap-8 md:gap-12 w-auto mx-auto"
                >
                  {/* Project Card - Top on mobile, Left on desktop */}
                  <div 
                    className="project-card w-full md:w-[280px] h-[200px] md:h-[180px] flex-shrink-0 rounded-xl transition-all duration-300 group-hover:shadow-lg relative overflow-hidden mx-auto md:mx-0"
                    style={{ backgroundColor: project.color, maxWidth: '320px' }}
                  >
                    {/* Project Image */}
                    {project.image && (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className={project.objectPosition}
                      />
                    )}

                  </div>

                  {/* Project Info - Bottom on mobile, Right on desktop */}
                  <div className="project-info flex-1 text-center md:text-left">
                    <h3 className="text-[24px] md:text-[28px] font-serif text-primary mb-3 group-hover:text-accent transition-colors duration-300 leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-sm uppercase tracking-[0.1em] font-medium text-[#6B6B68] mb-3">
                      {project.company}
                    </p>
                    <p className="project-description text-base text-secondary/80 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 