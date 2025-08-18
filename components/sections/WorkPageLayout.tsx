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
  const { elementRef: headerRef, isVisible: headerVisible } = useScrollAnimation();

  // Sort projects by order
  const sortedProjects = [...projects].sort((a, b) => a.order - b.order);

  return (
    <section className="section-centered bg-background">
      <div className="container mx-auto container-padding w-full max-w-5xl">
        <div className="text-center">
          {/* Page Header with proper spacing */}
          <div className="mb-20" style={{ paddingTop: '40px' }}>
            <h1 
              ref={headerRef}
              className={`font-serif selected-work-title text-primary mb-6 font-normal tracking-tight lowercase animate-on-scroll ${
                headerVisible ? 'animate-in' : ''
              }`}
            >
              {pageTitle}
            </h1>
            
            {subtitle && (
              <p className="text-base text-secondary max-w-2xl mx-auto leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>

          {/* All Projects List */}
          <div className="max-w-6xl mx-auto space-y-24">
            {sortedProjects.map((project, index) => (
              <ProjectEntry
                key={project.id}
                project={{
                  ...project,
                  index
                }}
                animationDelay={index * 150}
              />
            ))}
          </div>

          {/* Optional footer divider */}
          <EditorialDivider variant="space" spacing="large" />
        </div>
      </div>
    </section>
  );
}