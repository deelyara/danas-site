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
    <section className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 w-full max-w-5xl">
        {/* Page Header with proper spacing */}
        <header className="text-center mb-20" style={{ paddingTop: '80px' }}>
          <h1 
            ref={headerRef}
            className={`font-serif text-4xl md:text-5xl text-primary mb-8 font-normal tracking-tight lowercase animate-on-scroll ${
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
        </header>

        {/* Projects List */}
        <div className="max-w-4xl mx-auto">
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
    </section>
  );
}