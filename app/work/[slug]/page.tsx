import { notFound } from 'next/navigation';
import Link from 'next/link';
import { editorialProjects } from '@/lib/projectData';
import fs from 'fs';
import path from 'path';

// Function to read markdown content
async function getProjectContent(slug: string) {
  try {
    const filePath = path.join(process.cwd(), 'content', 'projects', `${slug}.md`);
    const content = fs.readFileSync(filePath, 'utf8');
    return content;
  } catch (error) {
    return null;
  }
}

// Function to extract table of contents from markdown - only main headings, no subheadings
function extractTableOfContents(markdown: string) {
  const lines = markdown.split('\n');
  const toc: { level: number; title: string; id: string }[] = [];
  
  lines.forEach(line => {
    const match = line.match(/^(#{2})\s+(.+)$/); // Only H2 headings
    if (match) {
      const level = match[1].length;
      let title = match[2].trim();
      
      // Remove trailing colons and clean up title
      title = title.replace(/:$/, '');
      
      const id = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
      toc.push({ level, title, id });
    }
  });
  
  return toc;
}

// Function to convert markdown to basic HTML with proper editorial spacing and no duplicate titles
function markdownToHtml(markdown: string, projectTitle: string) {
  // Remove the first H1 if it matches the project title to avoid duplication
  const lines = markdown.split('\n');
  const firstLine = lines[0];
  
  // Check if first line is an H1 that matches or is similar to the project title
  if (firstLine.startsWith('# ') && 
      (firstLine.slice(2).trim() === projectTitle || 
       firstLine.slice(2).trim().toLowerCase().includes(projectTitle.toLowerCase().slice(0, 20)))) {
    // Remove the first line to avoid duplicate title
    markdown = lines.slice(1).join('\n');
  }
  
  return markdown
    .replace(/^# (.*$)/gim, (match, title) => {
      const cleanTitle = title.replace(/:$/, ''); // Remove trailing colon
      const id = cleanTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
      return `<h2 id="${id}" class="font-serif text-2xl md:text-3xl text-primary mb-8 mt-16 first:mt-0 font-semibold">${cleanTitle}</h2>`;
    })
    .replace(/^## (.*$)/gim, (match, title) => {
      const cleanTitle = title.replace(/:$/, ''); // Remove trailing colon
      const id = cleanTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
      return `<h3 id="${id}" class="font-serif text-xl md:text-2xl text-primary mb-6 mt-12 font-semibold">${cleanTitle}</h3>`;
    })
    .replace(/^### (.*$)/gim, (match, title) => {
      const id = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
      return `<h4 id="${id}" class="font-serif text-lg md:text-xl text-primary mb-4 mt-8">${title}</h4>`;
    })
    .replace(/\*\*([^*]+)\*\*/g, '<strong class="font-sans font-semibold text-primary">$1</strong>')
    .replace(/^\* (.*$)/gim, '<li class="font-sans text-base text-secondary mb-3 ml-6">$1</li>')
    .replace(/^- (.*$)/gim, '<li class="font-sans text-base text-secondary mb-3 ml-6">$1</li>')
    // Process grid images/videos (special syntax: ![alt](src) ![alt](src) on same line)
    .replace(/!\[([^\]]*)\]\(([^)]*)\)\s+!\[([^\]]*)\]\(([^)]*)\)/g, (match, alt1, src1, alt2, src2) => {
      const createMediaElement = (alt, src) => {
        if (src.match(/\.(mp4|webm|ogg|mov)$/i)) {
          // Create a simple gradient poster as fallback
          const posterDataUrl = 'data:image/svg+xml;base64,' + btoa(`
            <svg width="800" height="450" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style="stop-color:#ECD06F;stop-opacity:0.8" />
                  <stop offset="100%" style="stop-color:#1A1A1A;stop-opacity:0.9" />
                </linearGradient>
              </defs>
              <rect width="100%" height="100%" fill="url(#grad)"/>
              <circle cx="400" cy="225" r="40" fill="white" opacity="0.9"/>
              <polygon points="385,210 385,240 415,225" fill="#1A1A1A"/>
            </svg>
          `);
          return `<video controls controlslist="nodownload" preload="metadata" poster="${posterDataUrl}" class="w-full rounded-lg shadow-sm"><source src="${src}" type="video/mp4"><p>Your browser doesn't support video. <a href="${src}">Download the video</a>.</p></video>`;
        } else {
          return `<a href="${src}" target="_blank" rel="noopener noreferrer" class="block cursor-zoom-in hover:opacity-90 transition-opacity duration-200"><img src="${src}" alt="${alt}" class="w-full rounded-lg shadow-sm" /></a>`;
        }
      };
      
      return `<div class="content-block my-16"><div class="grid grid-cols-1 md:grid-cols-2 gap-6">${createMediaElement(alt1, src1)}${createMediaElement(alt2, src2)}</div></div>`;
    })
    .replace(/!\[([^\]]*)\]\(([^)]*)\)/g, (match, alt, src) => {
      // Check if it's a video file
      if (src.match(/\.(mp4|webm|ogg|mov)$/i)) {
        // Create a simple gradient poster as fallback
        const posterDataUrl = 'data:image/svg+xml;base64,' + btoa(`
          <svg width="800" height="450" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:#ECD06F;stop-opacity:0.8" />
                <stop offset="100%" style="stop-color:#1A1A1A;stop-opacity:0.9" />
              </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#grad)"/>
            <circle cx="400" cy="225" r="40" fill="white" opacity="0.9"/>
            <polygon points="385,210 385,240 415,225" fill="#1A1A1A"/>
          </svg>
        `);
        return `<div class="content-block my-16"><video controls controlslist="nodownload" preload="metadata" class="w-full mx-auto rounded-lg shadow-sm"><source src="${src}" type="video/mp4"><p>Your browser doesn't support video. <a href="${src}">Download the video</a>.</p></video></div>`;
      } else {
        // Regular image
        return `<div class="content-block my-16"><a href="${src}" target="_blank" rel="noopener noreferrer" class="block cursor-zoom-in hover:opacity-90 transition-opacity duration-200"><img src="${src}" alt="${alt}" class="w-full mx-auto rounded-lg shadow-sm" /></a></div>`;
      }
    })
    .replace(/^\*([^*]+)\*$/gm, '<p class="font-sans text-sm text-secondary text-center italic mb-6">$1</p>')
    // Process tables
    .replace(/^\|(.+)\|$/gm, (match, content) => {
      // Split content by | and clean up
      const cells = content.split('|').map(cell => cell.trim()).filter(cell => cell);
      
      // Check if this is a header separator row (contains only -, |, and spaces)
      if (content.match(/^[\s\-\|]+$/)) {
        return ''; // Skip separator rows
      }
      
      // Determine if this is likely a header row (first row or after separator)
      const isHeader = match.includes('Funnel Stage') || match.includes('Spend') || match.includes('Reach');
      
      if (isHeader) {
        return `<div class="content-block my-16"><table><thead><tr>${cells.map(cell => `<th>${cell}</th>`).join('')}</tr></thead><tbody>`;
      } else {
        return `<tr>${cells.map(cell => `<td>${cell}</td>`).join('')}</tr>`;
      }
    })
    // Close table after processing all rows
    .replace(/(<tr><td>.*<\/td><\/tr>)(?!\s*<tr>)/g, '$1</tbody></table></div>')
    .replace(/\n\n/g, '</p><p class="font-sans text-base text-secondary leading-relaxed mb-6">')
    .replace(/^(?!<[h|l|i])/gm, '<p class="font-sans text-base text-secondary leading-relaxed mb-6">')
    .replace(/<p class="font-sans text-base text-secondary leading-relaxed mb-6">(<[h|l|i])/g, '$1')
    .replace(/(<\/[h|l][^>]*>)<\/p>/g, '$1');
}

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = editorialProjects.find(p => p.slug === slug);

  if (!project) {
    notFound();
  }

  // Try to get markdown content
  const markdownContent = await getProjectContent(slug);
  const tableOfContents = markdownContent ? extractTableOfContents(markdownContent) : [];

  return (
    <main className="min-h-screen bg-background">
      {/* Spacer to push content below fixed navigation */}
      <div className="h-32 md:h-40"></div>
      
      {/* Main container with wider, more readable width */}
      <div className="mx-auto max-w-6xl px-6 md:px-12 lg:px-20 pb-32">
        {/* Project Header - Generous spacing and typography */}
        <header className="mb-24 text-center">
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-primary leading-tight mb-8">
            {project.title}
          </h1>
          <div className="flex justify-center items-center gap-6 text-sm text-primary/60 uppercase tracking-wide">
            <span>{project.company}</span>
            <span className="w-1 h-1 bg-primary/30 rounded-full"></span>
            <span>{project.year}</span>
          </div>
        </header>

        {/* Content with wider, more readable layout */}
        <div className="max-w-6xl mx-auto">
          {markdownContent ? (
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-16">
              {/* Table of Contents - Simple sidebar */}
              {tableOfContents.length > 0 && (
                <aside className="lg:col-span-1">
                  <div className="sticky top-48">
                    <p className="font-sans text-sm text-primary/70 mb-4 uppercase tracking-wide">Contents</p>
                    <nav className="space-y-4">
                      {tableOfContents.map((item, index) => (
                        <a
                          key={index}
                          href={`#${item.id}`}
                          className="toc-link block font-sans text-sm text-primary/50 hover:text-accent hover:font-semibold transition-all duration-200"
                        >
                          {item.title}
                        </a>
                      ))}
                    </nav>
                  </div>
                </aside>
              )}
              
              {/* Main content */}
              <article 
                className={`prose prose-lg max-w-none editorial-content ${
                  tableOfContents.length > 0 ? 'lg:col-span-3' : 'lg:col-span-4'
                }`}
                dangerouslySetInnerHTML={{ __html: markdownToHtml(markdownContent, project.title) }}
              />
              
              {/* Add scroll tracking for active states */}
              {tableOfContents.length > 0 && (
                <script
                  dangerouslySetInnerHTML={{
                    __html: `
                      (function() {
                        // Quick initialization with fallback
                        if (document.readyState === 'complete') {
                          initScrollTracking();
                        } else {
                          window.addEventListener('load', initScrollTracking);
                        }
                        
                        function initScrollTracking() {
                          let manualClick = false;
                          let manualClickTimeout;
                          
                          const observerOptions = {
                            rootMargin: '-20% 0px -60% 0px',
                            threshold: 0.1
                          };
                          
                          const observer = new IntersectionObserver((entries) => {
                            // Don't update if user just clicked manually
                            if (manualClick) return;
                            
                            entries.forEach(entry => {
                              if (entry.isIntersecting) {
                                const id = entry.target.getAttribute('id');
                                
                                // Remove active class from all TOC links
                                document.querySelectorAll('.toc-link').forEach(link => {
                                  link.classList.remove('active');
                                });
                                
                                // Add active class to current link
                                const tocLink = document.querySelector('.toc-link[href="#' + id + '"]');
                                if (tocLink) {
                                  tocLink.classList.add('active');
                                }
                              }
                            });
                          }, observerOptions);
                          
                          // Find and observe all headings with IDs
                          const headings = document.querySelectorAll('h1[id], h2[id], h3[id], h4[id], h5[id], h6[id]');
                          headings.forEach(heading => {
                            observer.observe(heading);
                          });
                          
                          // Handle manual clicks with immediate feedback
                          document.querySelectorAll('.toc-link').forEach(link => {
                            link.addEventListener('click', function(e) {
                              // Prevent observer from interfering
                              manualClick = true;
                              clearTimeout(manualClickTimeout);
                              
                              // Remove active from all immediately
                              document.querySelectorAll('.toc-link').forEach(l => l.classList.remove('active'));
                              // Add active to clicked immediately
                              this.classList.add('active');
                              
                              // Re-enable observer after scroll completes
                              manualClickTimeout = setTimeout(() => {
                                manualClick = false;
                              }, 1000);
                            });
                          });
                        }
                      })();
                    `
                  }}
                />
              )}
            </div>
          ) : (
            // Fallback to basic project info with proper spacing
            <article className="lg:col-span-4">
              <div className="mb-16">
                <p className="text-base text-primary/70 leading-relaxed mb-8">
                  {project.description}
                </p>
                {project.metrics && (
                  <div className="bg-primary/5 rounded-lg p-8 mt-12">
                    <h3 className="font-serif text-xl text-primary mb-6">Results</h3>
                    <p className="text-base text-primary/70 leading-relaxed">{project.metrics}</p>
                  </div>
                )}
              </div>

              {/* Skills with proper spacing */}
              {project.tags && project.tags.length > 0 && (
                <div className="mt-16">
                  <h3 className="font-serif text-xl text-primary mb-8">Skills & Technologies</h3>
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

          {/* Navigation with proper spacing */}
          <nav className="flex justify-center mt-20 pt-12 border-t border-primary/10">
            <Link 
              href="/work"
              className="inline-flex items-center gap-2 text-base text-primary hover:text-accent transition-colors duration-300"
            >
              <span>View More Projects</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </nav>
        </div>
      </div>
    </main>
  );
}

// Generate static params for all projects
export function generateStaticParams() {
  return editorialProjects.map((project) => ({
    slug: project.slug,
  }));
}