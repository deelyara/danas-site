// Centralized project configuration with navigation and thumbnails

export interface ProjectConfig {
  slug: string;
  title: string;
  company: string;
  year: string;
  description: string;
  thumbnail: string;
}

export const allProjects: ProjectConfig[] = [
  {
    slug: "cheerful-buddha",
    title: "Social Media & Marketing Campaign",
    company: "CREATIVE",
    year: "2024",
    description: "Social media, paid ads & marketing automation",
    thumbnail: "/work-teaser/social-campaign.png"
  },
  {
    slug: "wellness-automation",
    title: "Wellness Influencer Outreach",
    company: "AUTOMATION",
    year: "2024",
    description: "Automated workflow using Zapier & AI",
    thumbnail: "/work-teaser/wellness-outreach.png"
  },
  {
    slug: "newsletter",
    title: "AI Newsletter Creation",
    company: "AUTOMATION",
    year: "2024",
    description: "End-to-end automation with ChatGPT & Claude",
    thumbnail: "/work-teaser/newsletter.png"
  },
  {
    slug: "multi-funnel",
    title: "Multi-Funnel Paid Campaign",
    company: "DATA-DRIVEN",
    year: "2024",
    description: "Multi-stage paid social campaign",
    thumbnail: "/work-teaser/social-campaign.png" // Using social-campaign as placeholder
  }
];

export function getProjectNavigation(currentSlug: string) {
  const currentIndex = allProjects.findIndex(p => p.slug === currentSlug);
  
  const prevProject = currentIndex > 0 
    ? allProjects[currentIndex - 1] 
    : null;
    
  const nextProject = currentIndex < allProjects.length - 1 
    ? allProjects[currentIndex + 1] 
    : null;
    
  return { prevProject, nextProject, allProjects };
}