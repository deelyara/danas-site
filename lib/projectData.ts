export interface EditorialProject {
  id: string;
  slug: string;
  title: string;
  company: string;
  year: string;
  description: string;
  metrics?: string;
  tags?: string[];
  featured?: boolean;
  order: number;
}

export const editorialProjects: EditorialProject[] = [
  {
    id: "1",
    slug: "cheerfull-budda",
    title: "Social Media & Marketing Campaign",
    company: "CREATIVE",
    year: "2024",
    description: "Social media, paid ads & marketing automation",
    metrics: "Increased engagement, improved ad performance",
    tags: ["Social Media", "Content Creation", "Brand Strategy"],
    featured: true,
    order: 1
  },
  {
    id: "2",
    slug: "wellness-automation",
    title: "Wellness Influencer Outreach",
    company: "AUTOMATION",
    year: "2024",
    description: "Automated workflow using Zapier & AI",
    metrics: "150+ channels scanned, 5 collaborations",
    tags: ["Automation", "AI", "Zapier"],
    featured: true,
    order: 2
  },
  {
    id: "3",
    slug: "newsletter",
    title: "AI Newsletter Creation",
    company: "AUTOMATION",
    year: "2024",
    description: "End-to-end automation with ChatGPT & Claude",
    metrics: "5 hours reduced to 10 minutes",
    tags: ["Automation", "AI", "Content"],
    featured: false,
    order: 3
  },
  {
    id: "4",
    slug: "multi-funnel",
    title: "Multi-Funnel Paid Campaign",
    company: "DATA-DRIVEN OUTREACH",
    year: "2024",
    description: "Multi-stage paid social campaign",
    metrics: "400K+ reach, 675 new followers",
    tags: ["Paid Social", "Analytics", "Funnel Strategy"],
    featured: true,
    order: 4
  }
];

export interface WorkPageConfig {
  title: string;
  subtitle?: string;
  showProjectNumbers: boolean;
  animationEnabled: boolean;
  itemsPerPage?: number;
}

export const workPageConfig: WorkPageConfig = {
  title: "projects",
  subtitle: undefined,
  showProjectNumbers: true,
  animationEnabled: true,
  itemsPerPage: undefined
};