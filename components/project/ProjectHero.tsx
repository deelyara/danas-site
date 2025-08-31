interface ProjectHeroProps {
  title: string;
  company: string;
  year: string;
  description: string;
}

export default function ProjectHero({ title, company, year, description }: ProjectHeroProps) {
  return (
    <header className="project-hero">
      <h1>{title}</h1>
      <div className="project-hero-meta">
        <span>{company}</span>
        <span className="divider"></span>
        <span>{year}</span>
      </div>
      <p className="project-hero-description">
        {description}
      </p>
    </header>
  );
}