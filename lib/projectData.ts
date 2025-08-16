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
    slug: "wellness-automation",
    title: "Automating Wellness Influencer Outreach Using Zapier",
    company: "WELLNESS BRAND",
    year: "2024",
    description: "Built an automated workflow leveraging Zapier, Apify, OpenAI, Google Sheets, and Hunter.io to identify relevant YouTube creators, assess content fit, find contact details, and draft personalized collaboration emails entirely without manual effort.",
    metrics: "150+ channels scanned, 57 qualified creators, 12 positive replies, 5 ongoing collaborations",
    tags: ["Automation", "AI", "Marketing", "Zapier", "OpenAI"],
    featured: true,
    order: 1
  },
  {
    id: "2",
    slug: "revenue-growth-campaign",
    title: "Revenue Growth Campaign",
    company: "TECHCORP",
    year: "2023",
    description: "[Comprehensive revenue optimization initiative focused on identifying growth opportunities and implementing data-driven strategies to increase quarterly performance by targeting high-value customer segments]",
    metrics: "[45% revenue increase]",
    tags: ["Strategy", "Analytics", "Growth"],
    featured: true,
    order: 2
  },
  {
    id: "3",
    slug: "roi-optimization-project",
    title: "ROI Optimization Project",
    company: "STARTUPX",
    year: "2023",
    description: "[Strategic analysis and implementation of cost-effective marketing channels, resulting in improved return on investment through targeted campaign optimization and resource allocation refinement]",
    metrics: "[3.2x ROI improvement]",
    tags: ["Optimization", "Marketing", "Analytics"],
    featured: true,
    order: 3
  },
  {
    id: "4",
    slug: "pipeline-generation-system",
    title: "Pipeline Generation System",
    company: "SCALEUP INC",
    year: "2022",
    description: "[Development of automated lead qualification and nurturing system designed to streamline sales processes and improve conversion rates through intelligent prospect scoring and personalized engagement workflows]",
    metrics: "[200% pipeline increase]",
    tags: ["Automation", "Sales", "Systems"],
    featured: false,
    order: 4
  },
  {
    id: "5",
    slug: "cost-optimization-initiative",
    title: "Cost Optimization Initiative",
    company: "ENTERPRISE CO",
    year: "2022",
    description: "[Comprehensive operational efficiency review and implementation of cost-reduction strategies across multiple departments, focusing on process automation and resource optimization without compromising quality]",
    metrics: "[30% cost reduction]",
    tags: ["Operations", "Efficiency", "Process"],
    featured: false,
    order: 5
  },
  {
    id: "6",
    slug: "lead-quality-enhancement",
    title: "Lead Quality Enhancement",
    company: "GROWTHCORP",
    year: "2022",
    description: "[Implementation of advanced lead scoring methodology and qualification frameworks to improve sales team efficiency and increase conversion rates through better prospect identification and prioritization]",
    metrics: "[85% lead quality improvement]",
    tags: ["Lead Generation", "Qualification", "Sales"],
    featured: false,
    order: 6
  },
  {
    id: "7",
    slug: "conversion-rate-optimization",
    title: "Conversion Rate Optimization",
    company: "CONVERSIONPRO",
    year: "2021",
    description: "[Systematic testing and optimization of user experience touchpoints across digital platforms, implementing data-driven improvements to increase conversion rates and enhance customer journey effectiveness]",
    metrics: "[67% conversion increase]",
    tags: ["UX", "Testing", "Optimization"],
    featured: false,
    order: 7
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