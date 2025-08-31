'use client';

import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import ProjectEntry from '../ui/ProjectEntry';
import EditorialDivider from '../ui/EditorialDivider';

interface EditorialProject {
  id: string;
  slug: string;
  title: string;
  company: string;
  year: string;
  description: string;
  order: number;
}

interface WorkPageLayoutProps {
  projects: EditorialProject[];
  pageTitle?: string;
  subtitle?: string;
}

export default function WorkPageLayout({ 
  projects, 
  pageTitle = "projects",
  subtitle 
}: WorkPageLayoutProps) {
  const { elementRef: headerRef, isVisible: headerVisible } = useScrollAnimation<HTMLHeadingElement>();

  // Sort projects by order
  const sortedProjects = [...projects].sort((a, b) => a.order - b.order);

  return (
    <section className="section-centered bg-background">
      <div className="container mx-auto container-padding w-full max-w-5xl">
        <div className="text-center">
          {/* Page Header with proper spacing */}
          <div className="work-page-header">
            <h1 
              ref={headerRef}
              className={`page-heading font-serif lowercase animate-on-scroll ${
                headerVisible ? 'animate-in' : ''
              }`}
            >
              {pageTitle}
            </h1>
            
            {subtitle && (
              <p className="work-page-subtitle">
                {subtitle}
              </p>
            )}
          </div>

          {/* All Projects List with proper spacing */}
          <div className="max-w-6xl mx-auto space-y-8 md:space-y-12">
            {sortedProjects.map((project, index) => (
              <div key={project.id}>
                <ProjectEntry
                  project={{
                    ...project,
                    index
                  }}
                  animationDelay={index * 150}
                />
              </div>
            ))}
          </div>

          {/* Optional footer divider */}
          <EditorialDivider variant="space" spacing="large" />
        </div>
      </div>
    </section>
  );
}