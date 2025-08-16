'use client';

import Link from 'next/link';
import { useScrollAnimation, useMultipleScrollAnimation } from '../../hooks/useScrollAnimation';

export default function WorkTeaser() {
  const { elementRef: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { setElementRef, isVisible } = useMultipleScrollAnimation(3); // 3 featured projects

  // Featured projects with updated colors and third project
  const featuredProjects = [
    {
      id: "revenue-growth-campaign",
      slug: "revenue-growth-campaign",
      title: "Revenue Growth Campaign",
      company: "TECHCORP",
      year: "2023",
      color: "#E8DCC6" // warm beige
    },
    {
      id: "roi-optimization-project",
      slug: "roi-optimization-project", 
      title: "ROI Optimization Project",
      company: "STARTUPX",
      year: "2023",
      color: "#B8C5D6" // muted blue
    },
    {
      id: "brand-strategy-initiative",
      slug: "pipeline-generation-system", // Using existing slug for now
      title: "Brand Strategy Initiative",
      company: "SCALEUP INC",
      year: "2022",
      color: "#D4C5B0" // soft tan
    }
  ];

  return (
    <section id="work-teaser" className="section-centered bg-background">
      <div className="selected-work flex flex-col items-center px-5">
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-20 animate-on-scroll ${headerVisible ? 'animate-in' : ''}`}
        >
          <h2 className="font-serif selected-work-title text-primary mb-4 font-normal lowercase tracking-tight">
            selected work
          </h2>
        </div>

        {/* Projects Container */}
        <div className="projects-container w-full max-w-[1000px] mx-auto">
          {featuredProjects.map((project, index) => (
            <div
              key={project.id}
              ref={setElementRef(index)}
              className={`project-item group block w-full py-16 animate-on-scroll ${
                isVisible(index) ? 'animate-in' : ''
              }`}
              style={{ 
                transitionDelay: `${index * 100}ms`,
                marginBottom: index !== featuredProjects.length - 1 ? '64px' : '0'
              }}
            >
              {/* Last project with button */}
              {index === featuredProjects.length - 1 ? (
                <div className="flex flex-col items-start w-full">
                  <Link 
                    href={`/work/${project.slug}`}
                    className="group flex items-center gap-20"
                  >
                    {/* Project Card - Left Side */}
                    <div 
                      className="project-card w-[280px] h-[180px] flex-shrink-0 rounded-xl transition-all duration-300 group-hover:shadow-lg relative"
                      style={{ backgroundColor: project.color }}
                    >
                      {/* Year in corner */}
                      <div className="absolute top-5 right-5">
                        <span className="text-sm font-medium text-primary/60 tracking-wider">
                          {project.year}
                        </span>
                      </div>
                    </div>

                    {/* Project Info - Right Side */}
                    <div className="project-info">
                      <h3 className="text-[28px] font-serif text-primary mb-2 group-hover:text-accent transition-colors duration-300 leading-tight">
                        {project.title}
                      </h3>
                      <p className="text-sm uppercase tracking-[0.1em] font-medium text-[#6B6B68]">
                        {project.company}
                      </p>
                    </div>
                  </Link>

                  {/* View All Projects CTA - Standard Button Style */}
                  <div className="mt-64 w-full flex justify-center">
                    <Link 
                      href="/work"
                      className="cta-button"
                    >
                      View All Projects
                    </Link>
                  </div>
                </div>
              ) : (
                <Link 
                  href={`/work/${project.slug}`}
                  className="group flex items-center gap-20 w-auto mx-auto"
                >
                  {/* Project Card - Left Side */}
                  <div 
                    className="project-card w-[280px] h-[180px] flex-shrink-0 rounded-xl transition-all duration-300 group-hover:shadow-lg relative"
                    style={{ backgroundColor: project.color }}
                  >
                    {/* Year in corner */}
                    <div className="absolute top-5 right-5">
                      <span className="text-sm font-medium text-primary/60 tracking-wider">
                        {project.year}
                      </span>
                    </div>
                  </div>

                  {/* Project Info - Right Side */}
                  <div className="project-info flex-1">
                    <h3 className="text-[28px] font-serif text-primary mb-2 group-hover:text-accent transition-colors duration-300 leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-sm uppercase tracking-[0.1em] font-medium text-[#6B6B68]">
                      {project.company}
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