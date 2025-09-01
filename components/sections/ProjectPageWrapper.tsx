'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface TOCItem {
  level: number;
  title: string;
  id: string;
}

interface ProjectPageWrapperProps {
  htmlContent: string;
  tableOfContents: TOCItem[];
}

export default function ProjectPageWrapper({ htmlContent, tableOfContents }: ProjectPageWrapperProps) {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    // if (tableOfContents.length === 0) return;

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
    // const headings = document.querySelectorAll('h2[id], h3[id], h4[id]');
    // headings.forEach(heading => observer.observe(heading));

    // Handle smooth scrolling for TOC links
    const handleTOCClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('.toc-link');
      if (link) {
        e.preventDefault();
        const id = link.getAttribute('href')?.substring(1);
        if (id) {
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
        }
      }
    };

    document.addEventListener('click', handleTOCClick);

    return () => {
      // headings.forEach(heading => observer.unobserve(heading));
      document.removeEventListener('click', handleTOCClick);
    };
  }, []);

  return null;
}