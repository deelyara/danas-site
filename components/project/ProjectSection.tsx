interface ProjectSectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

export default function ProjectSection({ 
  id, 
  title, 
  children, 
  className = '' 
}: ProjectSectionProps) {
  return (
    <section id={id} className={`project-section ${className}`}>
      <h2>{title}</h2>
      <div>
        {children}
      </div>
    </section>
  );
}