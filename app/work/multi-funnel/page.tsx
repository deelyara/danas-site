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

      <ProjectSection id="overview" title="Project Overview" className="project-section-overview">
        <p className="project-text-large">
          Executed a comprehensive multi-stage paid social campaign for a wellness brand over a two-week period (October 12-25, 2024). The campaign strategically targeted audiences across three distinct funnels - awareness, traffic, and conversion - leveraging seasonal content to maximize engagement and drive measurable results ahead of Black Friday.
        </p>
      </ProjectSection>

      <ProjectSection id="challenge" title="The Challenge">
        <p className="project-text">
          The wellness brand needed to:
        </p>
        <ul className="project-list">
          <li>Build brand awareness among both cold and warm audiences</li>
          <li>Drive meaningful traffic to their Instagram profile and blog</li>
          <li>Convert seasonal interest into actual purchases</li>
          <li>Maximize impact with a limited budget across multiple objectives</li>
        </ul>
      </ProjectSection>

      <ProjectSection id="campaign-structure" title="Campaign Structure & Performance">
        <p className="project-text">
          The campaign was structured across three strategic funnels, each optimized for specific objectives:
        </p>

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
        <p className="project-text">
          Through careful analysis of campaign performance, several critical insights emerged:
        </p>

        <ul className="project-list">
          <li><strong>Cold prospects delivered the highest reach</strong> (172K impressions), demonstrating strong potential for brand awareness</li>
          <li><strong>Cacao Bliss static ad with seasonal pumpkins</strong> outperformed all other creatives, validating the importance of seasonal relevance</li>
          <li><strong>CTR reached 4.42%</strong> — significantly above industry average of 1-2%</li>
          <li><strong>Instagram followers increased by +675</strong> in just 2 weeks</li>
          <li><strong>Seasonal content alignment</strong> (tea, cacao, warm drinks) drove higher engagement rates</li>
        </ul>
      </ProjectSection>

      <ProjectSection id="optimization-strategy" title="Optimization Strategy">
        <p className="project-text">
          Throughout the campaign, we implemented real-time optimizations:
        </p>

        <ol className="project-list">
          <li><strong>Audience Consolidation</strong>: Combined similar audience segments to improve CPC efficiency</li>
          <li><strong>Creative Format Prioritization</strong>: Shifted focus to static image ads based on Instagram performance data</li>
          <li><strong>Budget Reallocation</strong>: Moved spend to high-performing content and audiences</li>
          <li><strong>Seasonal Alignment</strong>: Adjusted messaging to match autumn/winter themes</li>
          <li><strong>Conversion Focus</strong>: Directed traffic to high-intent blog posts with strong conversion potential</li>
        </ol>
      </ProjectSection>


      <ProjectSection id="results" title="Results & Impact">
        <ProjectMetrics metrics={metrics} />

        <div className="project-achievements">
          <h3 className="project-section-title">Key Achievements</h3>
          <div className="project-achievement-list">
            <div className="project-achievement-item">
              <h4 className="project-achievement-title">Reached over 400K users</h4>
              <p className="project-achievement-text">
                Successfully reached over 400,000 users in just 2 weeks, building significant brand awareness ahead of Black Friday.
              </p>
            </div>
            <div className="project-achievement-item">
              <h4 className="project-achievement-title">Boosted brand visibility</h4>
              <p className="project-achievement-text">
                Strategically positioned the brand for success during the critical Black Friday period with targeted awareness campaigns.
              </p>
            </div>
            <div className="project-achievement-item">
              <h4 className="project-achievement-title">Surpassed 10K Instagram followers</h4>
              <p className="project-achievement-text">
                Achieved the milestone of over 10,000 Instagram followers, with +675 new followers gained during the campaign period.
              </p>
            </div>
            <div className="project-achievement-item">
              <h4 className="project-achievement-title">Exceptional CTR performance</h4>
              <p className="project-achievement-text">
                Achieved 4.42% CTR, significantly outperforming the industry average of 1-2%, demonstrating highly effective creative and targeting.
              </p>
            </div>
            <div className="project-achievement-item">
              <h4 className="project-achievement-title">Improved conversion efficiency</h4>
              <p className="project-achievement-text">
                Optimized lower-funnel targeting resulted in improved conversion efficiency with 1,077 high-quality site visits from the conversion funnel.
              </p>
            </div>
          </div>
        </div>
      </ProjectSection>

      <ProjectSection id="conclusion" title="Conclusion">
        <p className="project-text">
          This multi-funnel approach demonstrates the power of strategic paid social campaigns when properly structured and optimized. By aligning creative content with seasonal trends, continuously optimizing based on performance data, and maintaining clear funnel-specific objectives, we achieved exceptional results that positioned the brand for success during the critical Black Friday period.
        </p>
      </ProjectSection>
    </ProjectLayout>
  );
}

// Metadata for SEO
export const metadata = {
  title: 'Multi-Funnel Paid Social Campaign | Dana Airapetova',
  description: 'Comprehensive multi-stage paid social campaign for a wellness brand achieving 400K+ reach, 4.42% CTR, and +675 Instagram followers in just 2 weeks.',
};