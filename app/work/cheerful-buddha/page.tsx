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

      <MediaGrid columns={2}>
        <ProjectMedia 
          src="/cheerful-buddha-case-study/shot-three.jpg"
          alt="Cheerful Buddha Product Photography"
          width={800}
          height={1000}
          priority={true}
        />
        <ProjectMedia 
          src="/cheerful-buddha-case-study/shot-four.JPG"
          alt="Cheerful Buddha Wellness Products"
          width={800}
          height={1000}
          priority={true}
        />
      </MediaGrid>

      <ProjectSection id="overview" title="Project Overview" className="project-section-overview">
        <p className="project-text-large">
          Cheerful Buddha is a wellness brand offering functional food and beverage products. My role spans social media strategy, content production, paid ad management, and marketing automation. I direct photoshoots, optimize campaigns, ensure the brand's presence is engaging, visually consistent, and performance-driven.
        </p>
      </ProjectSection>

      <ProjectSection id="challenge" title="The Challenge">
        <p className="project-text">
          Cheerful Buddha wanted to stand out in the crowded wellness market with fresh, on-brand content while also running efficient ad campaigns and maintaining consistent customer communication. The challenge was balancing creative output with data-driven marketing and ensuring that all channels worked seamlessly together.
        </p>
      </ProjectSection>

      <ProjectSection id="breakdown" title="Breaking Down the Project">
        <MediaGrid columns={2}>
          <ProjectMedia 
            src="/cheerful-buddha-case-study/shot-one.png"
            alt="Cheerful Buddha Product Shot 1"
            width={800}
            height={1000}
          />
          <ProjectMedia 
            src="/cheerful-buddha-case-study/shot-two.png"
            alt="Cheerful Buddha Product Shot 2"
            width={800}
            height={1000}
          />
        </MediaGrid>
        
        <div className="project-numbered-list">
          <div className="project-numbered-item">
            <h4 className="project-subheading">1. Social Media Management</h4>
            <ul className="project-list">
              <li>Develop and execute monthly content calendars for Instagram, Facebook, and TikTok.</li>
              <li>Write engaging captions, manage posting schedules, and interact with the audience to maintain an active community.</li>
            </ul>
          </div>
          
          <div className="project-numbered-item">
            <h4 className="project-subheading">2. Creative Direction & Content Production</h4>
            <ul className="project-list">
              <li>Plan and art direct all content shoots to align with the brand's aesthetic and seasonal messaging.</li>
              <li>Personally shoot product and lifestyle photography, ensuring visuals are optimized for both organic and paid campaigns.</li>
            </ul>
          </div>
          
          <div className="project-numbered-item">
            <h4 className="project-subheading">3. Paid Advertising</h4>
            <ul className="project-list">
              <li>Manage and optimize ad campaigns in Meta Business Suite and Google Ads.</li>
              <li>Run A/B testing for creatives, copy, and targeting to improve click-through and conversion rates.</li>
              <li>Allocate budgets strategically to maximize ROI across channels.</li>
            </ul>
          </div>
          
          <div className="project-numbered-item">
            <h4 className="project-subheading">4. Marketing Automation</h4>
            <ul className="project-list">
              <li>Build multi-step automations in Zapier to connect e-commerce, CRM, and email platforms.</li>
              <li>Automate customer follow-ups, lead nurturing, and promotional sequences to reduce manual workload.</li>
            </ul>
          </div>
          
          <div className="project-numbered-item">
            <h4 className="project-subheading">5. Data & Performance Tracking</h4>
            <ul className="project-list">
              <li>Monitor analytics for both organic and paid campaigns to identify top-performing content.</li>
              <li>Use insights to refine creative direction and ad targeting.</li>
            </ul>
          </div>
        </div>
      </ProjectSection>

      <ProjectSection id="strategy" title="Solution Strategy">
        <p className="project-text">
          I combined hands-on creative production with automation-driven marketing. By keeping the brand's content pipeline full while optimizing campaigns and streamlining backend processes, I ensured consistent visibility and measurable results.
        </p>
      </ProjectSection>

      <ProjectSection id="content" title="Video Content Production">
        <p className="project-text">
          Created engaging video content for social media campaigns, showcasing product benefits and brand lifestyle through vertical format optimized for Instagram Stories and Reels.
        </p>
        <div className="video-grid-portrait">
          <ProjectMedia 
            src="/cheerful-buddha-case-study/C0553-1.mp4"
            alt="Cheerful Buddha Video Content 1"
            type="video"
            width={1080}
            height={1920}
          />
          <ProjectMedia 
            src="/cheerful-buddha-case-study/C0755-1.mp4"
            alt="Cheerful Buddha Video Content 2"
            type="video"
            width={1080}
            height={1920}
          />
          <ProjectMedia 
            src="/cheerful-buddha-case-study/C0908-1.mp4"
            alt="Cheerful Buddha Video Content 3"
            type="video"
            width={1080}
            height={1920}
          />
          <ProjectMedia 
            src="/cheerful-buddha-case-study/cheerful-friends-1.mp4"
            alt="Cheerful Buddha Friends Campaign"
            type="video"
            width={1080}
            height={1920}
          />
        </div>
      </ProjectSection>

      <ProjectSection id="results" title="Impact & Results">
        <ul className="project-list">
          <li>Increased social media engagement through consistent, high-quality content and interactive posts.</li>
          <li>Improved ad performance with targeted creatives and ongoing optimization.</li>
          <li>Reduced manual campaign setup time through automated workflows.</li>
          <li>Established a cohesive brand aesthetic across organic and paid channels.</li>
        </ul>
      </ProjectSection>
    </ProjectLayout>
  );
}

// Metadata for SEO
export const metadata = {
  title: 'Social Media & Marketing Campaign - Cheerful Buddha | Dana Airapetova',
  description: 'Complete digital marketing ecosystem for wellness brand Cheerful Buddha, spanning social media strategy, content production, and marketing automation.',
};