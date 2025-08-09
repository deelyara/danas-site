import { notFound } from 'next/navigation';
import Link from 'next/link';

// Project data - in a real app, this would come from a CMS or database
const projects = {
  "revenue-growth-campaign": {
    title: "Revenue Growth Campaign",
    result: "+45% Revenue Growth",
    description: "",
    challenge: "",
    solution: "",
    results: [],
    tags: [],
    color: "#E8DCC6",
    imagePlaceholder: "bg-[#E8DCC6]"
  },
  "roi-optimization-project": {
    title: "ROI Optimization Project",
    result: "3.2x ROI Increase",
    description: "",
    challenge: "",
    solution: "",
    results: [],
    tags: [],
    color: "#D4E6F1",
    imagePlaceholder: "bg-[#D4E6F1]"
  },
  "pipeline-generation-system": {
    title: "Pipeline Generation System",
    result: "$2.5M Pipeline Generated",
    description: "",
    challenge: "",
    solution: "",
    results: [],
    tags: [],
    color: "#F8E6E0",
    imagePlaceholder: "bg-[#F8E6E0]"
  },
  "cost-optimization-initiative": {
    title: "Cost Optimization Initiative",
    result: "60% Cost Reduction",
    description: "",
    challenge: "",
    solution: "",
    results: [],
    tags: [],
    color: "#E8F5E8",
    imagePlaceholder: "bg-[#E8F5E8]"
  },
  "lead-quality-enhancement": {
    title: "Lead Quality Enhancement",
    result: "8x Lead Quality",
    description: "",
    challenge: "",
    solution: "",
    results: [],
    tags: [],
    color: "#FFF2E6",
    imagePlaceholder: "bg-[#FFF2E6]"
  },
  "conversion-rate-optimization": {
    title: "Conversion Rate Optimization",
    result: "250% Conversion Boost",
    description: "",
    challenge: "",
    solution: "",
    results: [],
    tags: [],
    color: "#F0E6FF",
    imagePlaceholder: "bg-[#F0E6FF]"
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
    <main className="min-h-screen">
      {/* Spacer to push content below fixed navigation */}
      <div className="h-32 md:h-40"></div>
      
      <div className="pb-20">
        {/* Project Header - Centered */}
        <div className="mb-16 text-center px-6">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary">
            {project.title}
          </h1>
        </div>

        {/* Rest of content with left padding */}
        <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-6xl">
          {/* Project Details */}
          {(project.challenge || project.solution) && (
            <div className="grid md:grid-cols-2 gap-12 mb-20">
              {project.challenge && (
                <div>
                  <h2 className="font-serif text-2xl md:text-3xl text-primary mb-6">Challenge</h2>
                  <p className="text-base text-primary/70 leading-relaxed">
                    {project.challenge}
                  </p>
                </div>
              )}
              
              {project.solution && (
                <div>
                  <h2 className="font-serif text-2xl md:text-3xl text-primary mb-6">Solution</h2>
                  <p className="text-base text-primary/70 leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Results - Simple list */}
          {project.results.length > 0 && (
            <div className="mb-20">
              <h2 className="font-serif text-2xl md:text-3xl text-primary mb-8">Results</h2>
              <div className="space-y-4">
                {project.results.map((result, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="text-primary/40 mt-0.5">•</span>
                    <span className="text-base text-primary/70">{result}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Skills - Simple inline list */}
          {project.tags.length > 0 && (
            <div className="mb-20">
              <h2 className="font-serif text-2xl md:text-3xl text-primary mb-8">Skills & Technologies</h2>
              <div className="flex gap-3 flex-wrap">
                {project.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="text-base text-primary/60"
                  >
                    {tag}{index < project.tags.length - 1 && <span className="ml-3 text-primary/30">•</span>}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Navigation to other projects */}
          <div className="flex justify-center">
            <Link 
              href="/work"
              className="inline-flex items-center gap-2 text-base text-primary hover:text-accent transition-colors duration-300"
            >
              <span>View More Projects</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
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