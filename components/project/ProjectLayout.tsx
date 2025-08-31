'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import ProjectNavigation from '@/components/ui/ProjectNavigation';
import { allProjects } from '@/lib/projectsConfig';

interface TOCItem {
  id: string;
  title: string;
}

interface ProjectLayoutProps {
  children: React.ReactNode;
  tableOfContents: TOCItem[];
  currentSlug?: string;
  nextProject?: {
    slug: string;
    title: string;
  };
  prevProject?: {
    slug: string;
    title: string;
  };
}

export default function ProjectLayout({ 
  children, 
  tableOfContents,
  currentSlug,
  nextProject,
  prevProject
}: ProjectLayoutProps) {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    if (tableOfContents.length === 0) return;

    const observerOptions = {
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0.1
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    // Observe all sections with IDs
    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => observer.observe(section));

    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, [tableOfContents]);

  const handleTOCClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 120;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      setActiveSection(id);
    }
  };

  return (
    <main className="project-layout">
      <div className="h-32 md:h-40"></div>
      
      <div className="project-container">
        <div className="project-grid">
          {/* Table of Contents */}
          {tableOfContents.length > 0 && (
            <aside className="project-toc">
              <p className="project-toc-title">Contents</p>
              <nav className="project-toc-nav">
                {tableOfContents.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => handleTOCClick(e, item.id)}
                    className={`project-toc-link ${activeSection === item.id ? 'active' : ''}`}
                  >
                    {item.title}
                  </a>
                ))}
              </nav>
            </aside>
          )}
          
          {/* Main Content */}
          <article>
            {children}
          </article>
        </div>

        {/* Project Navigation */}
        {currentSlug && (
          <ProjectNavigation 
            currentSlug={currentSlug} 
            projects={allProjects} 
          />
        )}
      </div>
    </main>
  );
}