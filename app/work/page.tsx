import WorkPageLayout from '@/components/sections/WorkPageLayout';
import { editorialProjects, workPageConfig } from '@/lib/projectData';

export default function WorkPage() {
  return (
    <main>
      <WorkPageLayout 
        projects={editorialProjects}
        pageTitle={workPageConfig.title}
        subtitle={workPageConfig.subtitle}
      />
    </main>
  );
} 