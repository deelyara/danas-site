import ProjectLayout from '@/components/project/ProjectLayout';
import ProjectHero from '@/components/project/ProjectHero';
import ProjectSection from '@/components/project/ProjectSection';
import ProjectMedia, { MediaGrid } from '@/components/project/ProjectMedia';
import ProjectMetrics from '@/components/project/ProjectMetrics';
import { cheerfulBuddhaData } from '@/lib/projects/cheerfulBuddha';

export default function CheerfulBuddhaPage() {
  const { 
    title, 
    company, 
    year, 
    description, 
    tableOfContents, 
    media, 
    metrics,
    nextProject,
    prevProject 
  } = cheerfulBuddhaData;

  return (
    <ProjectLayout 
      tableOfContents={tableOfContents}
      currentSlug="cheerful-buddha"
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
        alt="Cheerful Buddha Product Photography"
        caption="Premium product photography showcasing Cheerful Buddha's wellness range"
        width={1600}
        height={1067}
        priority={true}
      />

      <ProjectSection id="overview" title="Project Overview" className="project-section-overview">
        <p className="project-text-large">
          This comprehensive role involves directing photoshoots, optimizing campaigns, 
          and ensuring the brand maintains an engaging, visually consistent, and 
          performance-driven presence across all channels. Working directly with the 
          founding team, I've built a marketing system that delivers both creative 
          impact and measurable commercial results.
        </p>
      </ProjectSection>

      <ProjectSection id="challenge" title="The Challenge">
        <p className="project-text">
          In the competitive wellness market, Cheerful Buddha needed to:
        </p>
        <ul className="project-list">
          <li>Stand out with fresh, authentic, on-brand content</li>
          <li>Run efficient ad campaigns that drive measurable results</li>
          <li>Maintain consistent customer communication at scale</li>
          <li>Balance creative excellence with data-driven decision making</li>
          <li>Ensure seamless integration across all marketing channels</li>
        </ul>
        <p className="project-text">
          The core challenge was creating a cohesive system that delivered both 
          creative impact and commercial performance.
        </p>
      </ProjectSection>

      <ProjectSection id="strategy" title="Comprehensive Marketing Strategy">
        <p className="project-text">
          I developed a multi-channel approach that integrates organic content, 
          paid advertising, and marketing automation into a cohesive ecosystem. 
          Each element is carefully orchestrated to support the others, creating 
          compound effects that drive sustainable growth.
        </p>
      </ProjectSection>

      <ProjectSection id="social-media" title="Social Media Management">
        <p className="project-text">
          I develop and execute comprehensive content strategies across multiple platforms:
        </p>
        <ul className="project-list">
          <li>Create monthly content calendars for Instagram, Facebook, and TikTok</li>
          <li>Write engaging captions that resonate with the wellness community</li>
          <li>Manage posting schedules for optimal engagement</li>
          <li>Actively interact with the audience to build a thriving community</li>
        </ul>
        
        <ProjectMedia 
          src={media.social}
          alt="Social Media Content Example"
          caption="Engaging social content that drives community interaction"
          width={1200}
          height={900}
        />
        
        <ProjectMedia 
          src={media.videos.content1}
          type="video"
          alt="Content Creation Video"
          caption="Behind-the-scenes content creation process"
        />
      </ProjectSection>

      <ProjectSection id="creative" title="Creative Direction & Content Production">
        <p className="project-text">
          As creative director and photographer, I ensure all visual content aligns with brand values:
        </p>
        <ul className="project-list">
          <li>Plan and art direct content shoots with seasonal messaging</li>
          <li>Personally shoot product and lifestyle photography</li>
          <li>Optimize visuals for both organic reach and paid campaigns</li>
          <li>Maintain consistent brand aesthetic across all touchpoints</li>
        </ul>
        
        <MediaGrid columns={2}>
          <ProjectMedia 
            src={media.products}
            alt="Product Styling"
            caption="Artistic product composition"
            width={1600}
            height={1067}
          />
          <ProjectMedia 
            src={media.videos.content2}
            type="video"
            alt="Behind the Scenes"
            caption="Creative process in action"
          />
        </MediaGrid>
      </ProjectSection>

      <ProjectSection id="advertising" title="Paid Advertising Excellence">
        <p className="project-text">
          I manage and optimize multi-channel paid campaigns with precision:
        </p>
        <div className="project-grid-2col">
          <div className="project-grid-item">
            <h4 className="project-subheading">Platform Management</h4>
            <p className="project-text-small">
              Meta Business Suite and Google Ads campaigns optimized for maximum ROI
            </p>
          </div>
          <div className="project-grid-item">
            <h4 className="project-subheading">Testing Strategy</h4>
            <p className="project-text-small">
              Continuous A/B testing of creatives, copy, and audiences
            </p>
          </div>
          <div className="project-grid-item">
            <h4 className="project-subheading">Performance Optimization</h4>
            <p className="project-text-small">
              Data-driven improvements to CTR and conversion rates
            </p>
          </div>
          <div className="project-grid-item">
            <h4 className="project-subheading">Budget Allocation</h4>
            <p className="project-text-small">
              Strategic spend distribution for maximum impact
            </p>
          </div>
        </div>

        <MediaGrid columns={2}>
          <ProjectMedia 
            src={media.screenshots.performance1}
            alt="Campaign Performance"
            caption="Meta Ads campaign performance"
            width={1440}
            height={900}
          />
          <ProjectMedia 
            src={media.screenshots.performance2}
            alt="Analytics Dashboard"
            caption="Performance analytics and insights"
            width={1440}
            height={900}
          />
        </MediaGrid>
      </ProjectSection>

      <ProjectSection id="automation" title="Marketing Automation">
        <p className="project-text">
          Leveraging automation tools to scale personalized customer experiences:
        </p>
        <ul className="project-list">
          <li>Email marketing campaigns with advanced segmentation</li>
          <li>Automated customer journey workflows</li>
          <li>Personalized product recommendations</li>
          <li>Abandoned cart recovery sequences</li>
          <li>Post-purchase engagement programs</li>
        </ul>
      </ProjectSection>

      <ProjectSection id="seasonal" title="Seasonal Campaign Excellence">
        <p className="project-text">
          Creating compelling seasonal campaigns that drive significant revenue spikes 
          during key trading periods. Each campaign is meticulously planned months in 
          advance with custom creative assets, targeted messaging, and multi-channel 
          activation strategies.
        </p>
        
        <MediaGrid columns={2}>
          <ProjectMedia 
            src={media.seasonal.christmas}
            alt="Christmas Campaign"
            caption="Holiday campaign creative"
            width={1600}
            height={1600}
          />
          <ProjectMedia 
            src={media.seasonal.lionsmane}
            alt="Product Launch Campaign"
            caption="New product launch assets"
            width={1200}
            height={1200}
          />
        </MediaGrid>

        <ProjectMedia 
          src={media.videos.friends}
          type="video"
          alt="Cheerful Friends Campaign"
          caption="Community-focused campaign video"
        />
      </ProjectSection>

      <ProjectSection id="results" title="Results & Impact">
        <ProjectMetrics metrics={metrics} />
        
        <div className="project-achievements">
          <h3 className="project-section-title">Key Achievements</h3>
          <div className="project-achievement-list">
            <div className="project-achievement-item">
              <h4 className="project-achievement-title">Community Growth</h4>
              <p className="project-achievement-text">
                Built an engaged community of 25,000+ wellness enthusiasts across social platforms
              </p>
            </div>
            <div className="project-achievement-item">
              <h4 className="project-achievement-title">Brand Recognition</h4>
              <p className="project-achievement-text">
                Established Cheerful Buddha as a leading voice in the functional wellness space
              </p>
            </div>
            <div className="project-achievement-item">
              <h4 className="project-achievement-title">Revenue Impact</h4>
              <p className="project-achievement-text">
                Marketing efforts directly contributed to 3x revenue growth year-over-year
              </p>
            </div>
          </div>
        </div>
      </ProjectSection>
    </ProjectLayout>
  );
}

// Metadata for SEO
export const metadata = {
  title: 'Social Media & Marketing Campaign - Cheerful Buddha | Dana Airapetova',
  description: 'Complete digital marketing ecosystem for wellness brand Cheerful Buddha, spanning social media strategy, content production, and marketing automation.',
};