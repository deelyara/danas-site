import { notFound } from 'next/navigation';
import Link from 'next/link';

// Project data - in a real app, this would come from a CMS or database
const projects = {
  "revenue-growth-campaign": {
    title: "Revenue Growth Campaign",
    company: "TechCorp",
    year: "2023",
    result: "+45% Revenue Growth",
    description: "Strategic marketing campaign that delivered exceptional growth through data-driven optimization and targeted customer acquisition.",
    challenge: "TechCorp was experiencing stagnant growth and needed to revitalize their customer acquisition strategy while maintaining cost efficiency.",
    solution: "Implemented a comprehensive multi-channel marketing approach combining PPC optimization, marketing automation, and advanced analytics to identify and target high-value prospects.",
    results: [
      "45% increase in revenue within 6 months",
      "32% improvement in customer acquisition cost",
      "78% increase in qualified leads",
      "Enhanced customer lifetime value by 28%"
    ],
    tags: ["Strategy", "Analytics", "Growth", "PPC", "Marketing Automation"],
    color: "#E8DCC6"
  },
  "roi-optimization-project": {
    title: "ROI Optimization Project",
    company: "StartupX",
    year: "2023",
    result: "3.2x ROI Increase",
    description: "Complete marketing automation overhaul focusing on lead nurturing and conversion optimization.",
    challenge: "StartupX had low conversion rates and poor lead nurturing processes, resulting in significant revenue leakage.",
    solution: "Redesigned the entire marketing funnel with advanced automation workflows, personalized content delivery, and data-driven optimization strategies.",
    results: [
      "3.2x return on investment improvement",
      "68% increase in lead-to-customer conversion",
      "42% reduction in customer acquisition cost",
      "90% improvement in lead nurturing efficiency"
    ],
    tags: ["Automation", "Analytics", "Growth", "Lead Nurturing", "Conversion"],
    color: "#D4E6F1"
  },
  "pipeline-generation-system": {
    title: "Pipeline Generation System",
    company: "ScaleUp Inc",
    year: "2022",
    result: "$2.5M Pipeline Generated",
    description: "Implemented comprehensive lead generation strategy with advanced CRM integration and analytics.",
    challenge: "ScaleUp Inc needed a scalable lead generation system to support their rapid growth goals and improve sales team efficiency.",
    solution: "Built an integrated pipeline generation system combining inbound marketing, account-based marketing, and CRM optimization with advanced reporting and analytics.",
    results: [
      "$2.5M in qualified pipeline generated",
      "156% increase in marketing qualified leads",
      "89% improvement in sales team efficiency",
      "Reduced lead qualification time by 65%"
    ],
    tags: ["Lead Gen", "CRM", "Analytics", "Pipeline Management"],
    color: "#F8E6E0"
  },
  "cost-optimization-initiative": {
    title: "Cost Optimization Initiative",
    company: "Enterprise Co",
    year: "2022",
    result: "60% Cost Reduction",
    description: "Streamlined marketing operations and technology stack to achieve significant cost reductions.",
    challenge: "Enterprise Co was facing budget constraints while needing to maintain marketing effectiveness and reach.",
    solution: "Conducted comprehensive audit of marketing operations, consolidated technology stack, and implemented process improvements.",
    results: [
      "60% reduction in marketing technology costs",
      "45% improvement in operational efficiency",
      "Maintained 95% of previous marketing reach",
      "Streamlined workflows across 8 departments"
    ],
    tags: ["Operations", "Tech Stack", "Process", "Cost Management"],
    color: "#E8F5E8"
  },
  "lead-quality-enhancement": {
    title: "Lead Quality Enhancement",
    company: "GrowthCorp",
    year: "2022",
    result: "8x Lead Quality",
    description: "Implemented content strategy and SEO optimization to dramatically improve lead quality metrics.",
    challenge: "GrowthCorp was generating high volumes of leads but with poor qualification rates and low conversion to customers.",
    solution: "Developed targeted content strategy, implemented advanced lead scoring, and optimized SEO to attract higher-intent prospects.",
    results: [
      "8x improvement in lead quality scores",
      "73% increase in lead-to-customer conversion",
      "92% improvement in sales team efficiency",
      "Reduced sales cycle time by 40%"
    ],
    tags: ["Content", "SEO", "Conversion", "Lead Scoring"],
    color: "#FFF2E6"
  },
  "conversion-rate-optimization": {
    title: "Conversion Rate Optimization",
    company: "ConversionPro",
    year: "2021",
    result: "250% Conversion Boost",
    description: "Comprehensive CRO program focusing on user experience and conversion funnel optimization.",
    challenge: "ConversionPro had a high-traffic website but extremely low conversion rates, resulting in missed revenue opportunities.",
    solution: "Implemented systematic A/B testing program, redesigned key landing pages, and optimized the entire conversion funnel based on user behavior analytics.",
    results: [
      "250% increase in overall conversion rate",
      "180% improvement in landing page performance",
      "65% reduction in bounce rate",
      "Enhanced user experience across all touchpoints"
    ],
    tags: ["CRO", "UX", "Analytics", "A/B Testing"],
    color: "#F0E6FF"
  }
};

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects[slug as keyof typeof projects];

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6">
        {/* Back Navigation */}
        <div className="mb-12">
          <Link 
            href="/work"
            className="inline-flex items-center gap-3 text-primary/60 hover:text-accent transition-colors duration-300 group"
          >
            <div className="w-8 h-px bg-current group-hover:w-12 transition-all duration-300" />
            <span>Back to Work</span>
          </Link>
        </div>

        {/* Project Header */}
        <div className="mb-16">
          <div className="mb-6">
            <span className="text-sm font-medium text-accent tracking-wider uppercase">
              {project.company} ({project.year})
            </span>
          </div>
          
          <h1 className="font-serif text-4xl md:text-6xl text-primary mb-8 leading-tight">
            {project.title}
          </h1>
          
          <div className="text-3xl md:text-4xl font-bold text-accent mb-8">
            {project.result}
          </div>
          
          <p className="text-xl text-primary/80 leading-relaxed max-w-4xl font-light">
            {project.description}
          </p>
        </div>

        {/* Project Image */}
        <div className="mb-16">
          <div className={`aspect-[16/9] rounded-2xl ${project.imagePlaceholder} p-12 flex items-center justify-center border border-secondary/10`}>
            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary/40">📊</span>
              </div>
              <p className="text-primary/40 font-medium text-lg">Project Visualization</p>
            </div>
          </div>
        </div>

        {/* Project Details */}
        <div className="grid md:grid-cols-2 gap-16 mb-16">
          <div>
            <h2 className="font-serif text-2xl text-primary mb-6">Challenge</h2>
            <p className="text-primary/80 leading-relaxed font-light">
              {project.challenge}
            </p>
          </div>
          
          <div>
            <h2 className="font-serif text-2xl text-primary mb-6">Solution</h2>
            <p className="text-primary/80 leading-relaxed font-light">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Results */}
        <div className="mb-16">
          <h2 className="font-serif text-2xl text-primary mb-8">Results</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {project.results.map((result, index) => (
              <div key={index} className="flex items-start gap-4 p-6 bg-secondary/5 rounded-lg">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                <span className="text-primary/80 font-light">{result}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tags */}
        <div className="mb-16">
          <h2 className="font-serif text-2xl text-primary mb-6">Skills & Technologies</h2>
          <div className="flex gap-3 flex-wrap">
            {project.tags.map((tag, index) => (
              <span 
                key={index}
                className="px-4 py-2 text-sm bg-secondary/10 text-primary/80 rounded-full font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Navigation to other projects */}
        <div className="text-center">
          <Link 
            href="/work"
            className="inline-flex items-center gap-4 px-8 py-4 border border-accent/30 rounded-full text-lg text-primary hover:text-accent hover:border-accent transition-all duration-300 group backdrop-blur-sm bg-background/50 font-medium"
          >
            <span>View More Projects</span>
            <div className="w-8 h-px bg-current group-hover:w-12 transition-all duration-300" />
          </Link>
        </div>
      </div>
    </main>
  );
}

// Generate static params for all projects
export function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({
    slug,
  }));
} 