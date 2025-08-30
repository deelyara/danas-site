'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface TOCItem {
  level: number;
  title: string;
  id: string;
}

interface ProjectPageClientProps {
  project: {
    title: string;
    company: string;
    year: string;
    description: string;
    metrics?: string;
    tags?: string[];
    slug: string;
  };
  tableOfContents: TOCItem[];
  htmlContent: string;
}

export default function ProjectPageClient({ 
  project, 
  tableOfContents, 
  htmlContent 
}: ProjectPageClientProps) {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    // Set up intersection observer for TOC
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

    // Observe all headings with IDs
    const headings = document.querySelectorAll('h1[id], h2[id], h3[id], h4[id]');
    headings.forEach(heading => observer.observe(heading));

    return () => {
      headings.forEach(heading => observer.unobserve(heading));
    };
  }, []);

  const handleTOCClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 120; // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      // Immediately update active section
      setActiveSection(id);
    }
  };

  return (
    <main className="project-page">
      <div className="project-header">
        <h1 className="project-title">{project.title}</h1>
        <div className="project-meta">
          <span>{project.company}</span>
          <span className="project-meta-divider"></span>
          <span>{project.year}</span>
        </div>
      </div>

      <div className="project-content-grid">
        {/* Table of Contents */}
        {tableOfContents.length > 0 && (
          <aside className="project-toc">
            <p className="project-toc-title">Contents</p>
            <nav className="project-toc-nav">
              {tableOfContents.map((item, index) => (
                <a
                  key={index}
                  href={`#${item.id}`}
                  onClick={(e) => handleTOCClick(e, item.id)}
                  className={`project-toc-link ${
                    activeSection === item.id ? 'active' : ''
                  }`}
                >
                  {item.title}
                </a>
              ))}
            </nav>
          </aside>
        )}

        {/* Main content */}
        {htmlContent ? (
          <article 
            className="project-content"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
        ) : (
          <article className="project-content">
            <p>{project.description}</p>
            {project.metrics && (
              <div className="bg-primary/5 rounded-lg p-8 mt-12">
                <h3>Results</h3>
                <p>{project.metrics}</p>
              </div>
            )}
            {project.tags && project.tags.length > 0 && (
              <div className="mt-16">
                <h3>Skills & Technologies</h3>
                <div className="flex gap-3 flex-wrap">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="px-4 py-2 bg-primary/10 text-primary/70 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </article>
        )}
      </div>

      {/* Navigation */}
      <nav className="project-nav">
        <Link href="/work" className="project-nav-link">
          <span>View More Projects</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </nav>
    </main>
  );
}