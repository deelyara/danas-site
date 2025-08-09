interface Project {
  id: number;
  title: string;
  company: string;
  description: string;
  metrics: string;
  technologies: string[];
  size?: string;
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group cursor-pointer h-full">
      <div className="bg-surface p-8 md:p-12 h-full project-card card-shadow relative overflow-hidden" 
           style={{ aspectRatio: '3/4' }}>
        {/* Subtle gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        
        <div className="relative z-10 h-full flex flex-col">
          {/* Company name with enhanced letter-spacing */}
          <p className="company-name text-[11px] text-muted small-caps mb-3">
            {project.company}
          </p>
          
          {/* Project title in serif */}
          <h3 className="font-serif text-2xl md:text-3xl text-primary mb-4 leading-tight">
            {project.title}
          </h3>
          
          {/* Description */}
          <p className="text-secondary leading-relaxed mb-6 flex-grow">
            {project.description}
          </p>
          
          {/* Metrics - the key differentiator */}
          <div className="mb-6">
            <p className="text-2xl md:text-3xl font-serif text-accent">
              {project.metrics}
            </p>
          </div>
          
          {/* Technologies/Skills */}
          <div className="pt-6 border-t border-primary/10">
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="text-xs text-muted tracking-wider"
                >
                  {tech}
                  {index < project.technologies.length - 1 && (
                    <span className="mx-2 text-accent/40">·</span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}