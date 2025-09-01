import ProjectLayout from '@/components/project/ProjectLayout';
import ProjectHero from '@/components/project/ProjectHero';
import ProjectSection from '@/components/project/ProjectSection';
import ProjectMedia from '@/components/project/ProjectMedia';
import ProjectMetrics from '@/components/project/ProjectMetrics';
import { multiFunnelData } from '@/lib/projects/multiFunnel';

export default function MultiFunnelPage() {
  const { 
    title, 
    company, 
    year, 
    description, 
    tableOfContents, 
    media, 
    metrics,
    nextProject,
    prevProject,
    funnelPerformance,
    tools,
    strategies
  } = multiFunnelData;

  return (
    <ProjectLayout 
      tableOfContents={tableOfContents}
      currentSlug="multi-funnel"
      nextProject={nextProject}
      prevProject={prevProject}
    >
      <ProjectHero 
        title={title}
        company={company}
        year={year}
        description={description}
      />

      <ProjectMedia 
        src={media.hero}
        alt="Campaign Performance Overview"
        caption="Multi-funnel paid social campaign performance overview"
        width={1600}
        height={1067}
        priority={true}
      />

      <ProjectSection id="objectives" title="Objectives">
        <ul className="project-list">
          <li>Increase brand awareness across cold & warm audiences</li>
          <li>Drive traffic to Instagram and blog</li>
          <li>Convert interest into purchases using seasonal creatives</li>
        </ul>
      </ProjectSection>

      <ProjectSection id="campaign-performance" title="Campaign Performance">
        <div className="project-table">
          <table>
            <thead>
              <tr>
                <th>Funnel Stage</th>
                <th>Spend</th>
                <th>Reach</th>
                <th>Clicks / Views</th>
                <th>CPC</th>
              </tr>
            </thead>
            <tbody>
              {funnelPerformance.map((funnel, index) => (
                <tr key={index}>
                  <td>{funnel.funnel}</td>
                  <td>{funnel.spend}</td>
                  <td>{funnel.reach}</td>
                  <td>{funnel.metric}</td>
                  <td>{funnel.cpc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </ProjectSection>

      <ProjectSection id="key-insights" title="Key Insights">
        <ul className="project-list">
          <li>Cold prospects delivered the highest reach (172K)</li>
          <li>Cacao Bliss static ad with pumpkins outperformed all creatives</li>
          <li>CTR reached 4.42% — well above industry average</li>
          <li>IG followers increased by +675 in 2 weeks</li>
          <li>Seasonal content (tea, cacao, warm drinks) = higher engagement</li>
        </ul>
      </ProjectSection>

      <ProjectSection id="optimization-actions" title="Optimization Actions">
        <ul className="project-list">
          <li>Consolidated audiences to improve CPC</li>
          <li>Prioritized image ads for better IG performance</li>
          <li>Shifted budget to high-performing content</li>
          <li>Aligned content themes with seasonality</li>
          <li>Focused conversions on high-intent blog posts</li>
        </ul>
      </ProjectSection>

      <ProjectSection id="outcomes" title="Outcomes">
        <ul className="project-list">
          <li>Boosted visibility ahead of Black Friday</li>
          <li>Reached over 400K users in 2 weeks</li>
          <li>Surpassed 10K IG followers</li>
          <li>Significantly improved lower-funnel conversion efficiency</li>
        </ul>
      </ProjectSection>
    </ProjectLayout>
  );
}

// Metadata for SEO
export const metadata = {
  title: 'Multi-Funnel Paid Social Campaign | Dana Airapetova',
  description: 'Comprehensive multi-stage paid social campaign for a wellness brand achieving 400K+ reach, 4.42% CTR, and +675 Instagram followers in just 2 weeks.',
};