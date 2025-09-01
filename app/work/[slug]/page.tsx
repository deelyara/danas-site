import { notFound } from 'next/navigation';
import Link from 'next/link';
import { editorialProjects } from '@/lib/projectData';
import ProjectPageWrapper from '@/components/sections/ProjectPageWrapper';
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
      const createMediaElement = (alt: string, src: string) => {
        // Map local video paths to Cloudinary URLs
        const videoMapping: Record<string, string> = {
          '/Cheerful%20Buddha%20case%20study/C0553%20(1).mp4': 'https://res.cloudinary.com/deh7ugjqb/video/upload/v1756052880/C0553-1_mhkb4x.mp4',
          '/Cheerful%20Buddha%20case%20study/C0908%20(1).mp4': 'https://res.cloudinary.com/deh7ugjqb/video/upload/v1756052880/C0908-1_iz1buh.mp4',
          '/Cheerful%20Buddha%20case%20study/cheerful-friends%20(1).mp4': 'https://res.cloudinary.com/deh7ugjqb/video/upload/v1756052871/cheerful-friends-1_veqdce.mp4',
          '/Cheerful%20Buddha%20case%20study/C0755%20(1).mp4': 'https://res.cloudinary.com/deh7ugjqb/video/upload/v1756052861/C0755-1_xfemgd.mp4'
        };
        
        // Check if this is a video that should be mapped to Cloudinary
        const cloudinaryUrl = videoMapping[src];
        const finalSrc = cloudinaryUrl || src;
        
        if (src.match(/\.(mp4|webm|ogg|mov)$/i) || cloudinaryUrl) {
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
          return `<video controls controlslist="nodownload" preload="metadata" poster="${posterDataUrl}" class="w-full rounded-lg shadow-sm"><source src="${finalSrc}" type="video/mp4"><p>Your browser doesn't support video. <a href="${finalSrc}">Download the video</a>.</p></video>`;
        } else {
          // Fix image paths - replace %20 with actual spaces and ensure proper path
          const fixedSrc = finalSrc.replace(/%20/g, ' ').replace(/\s\(1\)/g, ' (1)');
          return `<a href="${fixedSrc}" target="_blank" rel="noopener noreferrer" class="block cursor-zoom-in hover:opacity-90 transition-opacity duration-200"><img src="${fixedSrc}" alt="${alt}" class="w-full rounded-lg shadow-sm" /></a>`;
        }
      };
      
      return `<div class="content-block my-16"><div class="grid grid-cols-1 md:grid-cols-2 gap-6">${createMediaElement(alt1, src1)}${createMediaElement(alt2, src2)}</div></div>`;
    })
    .replace(/!\[([^\]]*)\]\(([^)]*)\)/g, (match, alt, src) => {
      // Map local video paths to Cloudinary URLs
      const videoMapping: Record<string, string> = {
        '/Cheerful%20Buddha%20case%20study/C0553%20(1).mp4': 'https://res.cloudinary.com/deh7ugjqb/video/upload/v1756052880/C0553-1_mhkb4x.mp4',
        '/Cheerful%20Buddha%20case%20study/C0908%20(1).mp4': 'https://res.cloudinary.com/deh7ugjqb/video/upload/v1756052880/C0908-1_iz1buh.mp4',
        '/Cheerful%20Buddha%20case%20study/cheerful-friends%20(1).mp4': 'https://res.cloudinary.com/deh7ugjqb/video/upload/v1756052871/cheerful-friends-1_veqdce.mp4',
        '/Cheerful%20Buddha%20case%20study/C0755%20(1).mp4': 'https://res.cloudinary.com/deh7ugjqb/video/upload/v1756052861/C0755-1_xfemgd.mp4'
      };
      
      // Check if this is a video that should be mapped to Cloudinary
      const cloudinaryUrl = videoMapping[src];
      const finalSrc = cloudinaryUrl || src;
      
      // Check if it's a video file
      if (src.match(/\.(mp4|webm|ogg|mov)$/i) || cloudinaryUrl) {
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
        return `<div class="content-block my-16"><video controls controlslist="nodownload" preload="metadata" class="w-full mx-auto rounded-lg shadow-sm"><source src="${finalSrc}" type="video/mp4"><p>Your browser doesn't support video. <a href="${finalSrc}">Download the video</a>.</p></video></div>`;
      } else {
        // Regular image - fix paths with spaces
        const fixedSrc = finalSrc.replace(/%20/g, ' ').replace(/\s\(1\)/g, ' (1)');
        return `<div class="content-block my-16"><a href="${fixedSrc}" target="_blank" rel="noopener noreferrer" class="block cursor-zoom-in hover:opacity-90 transition-opacity duration-200"><img src="${fixedSrc}" alt="${alt}" class="w-full mx-auto rounded-lg shadow-sm" /></a></div>`;
      }
    })
    .replace(/^\*([^*]+)\*$/gm, '<p class="font-sans text-sm text-secondary text-center italic mb-6">$1</p>')
    // Process tables
    .replace(/^\|(.+)\|$/gm, (match, content) => {
      // Split content by | and clean up
      const cells = content.split('|').map((cell: string) => cell.trim()).filter((cell: string) => cell);
      
      // Check if this is a header separator row (contains only -, |, and spaces)
      if (content.match(/^[\s\-\|]+$/)) {
        return ''; // Skip separator rows
      }
      
      // Determine if this is likely a header row (first row or after separator)
      const isHeader = match.includes('Funnel Stage') || match.includes('Spend') || match.includes('Reach');
      
      if (isHeader) {
        return `<div class="content-block my-16"><table><thead><tr>${cells.map((cell: string) => `<th>${cell}</th>`).join('')}</tr></thead><tbody>`;
      } else {
        return `<tr>${cells.map((cell: string) => `<td>${cell}</td>`).join('')}</tr>`;
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
  
  // Find the project
  const project = editorialProjects.find(p => p.slug === slug);
  
  if (!project) {
    notFound();
  }

  // Get markdown content
  const markdownContent = await getProjectContent(slug);
  
  if (!markdownContent) {
    notFound();
  }

  // Extract table of contents and convert to HTML
  const tableOfContents = extractTableOfContents(markdownContent);
  const htmlContent = markdownToHtml(markdownContent, project.title);

  return (
    <ProjectPageWrapper
      tableOfContents={tableOfContents}
      htmlContent={htmlContent}
    />
  );
}

// Generate static params for all projects
export function generateStaticParams() {
  return editorialProjects.map((project) => ({
    slug: project.slug,
  }));
}

// Generate metadata for each project
export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = editorialProjects.find(p => p.slug === slug);
  
  if (!project) {
    return {
      title: '404 - Project Not Found',
      robots: { index: false, follow: false },
    };
  }

  return {
    title: `${project.title} - ${project.company} | Dana Duisekenova`,
    description: project.description,
    robots: {
      index: false,
      follow: false,
      nocache: true,
      googleBot: {
        index: false,
        follow: false,
        noimageindex: true,
      },
    },
  };
}