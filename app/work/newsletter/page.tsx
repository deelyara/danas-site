import ProjectLayout from '@/components/project/ProjectLayout';
import ProjectHero from '@/components/project/ProjectHero';
import ProjectSection from '@/components/project/ProjectSection';
import ProjectMedia from '@/components/project/ProjectMedia';
import ProjectMetrics from '@/components/project/ProjectMetrics';
import { newsletterData } from '@/lib/projects/newsletter';

export default function NewsletterPage() {
  const { 
    title, 
    company, 
    year, 
    description, 
    tableOfContents, 
    media, 
    metrics,
    solutionSteps,
    tools,
    nextProject,
    prevProject 
  } = newsletterData;

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
        alt="AI-Powered Newsletter Automation System"
        caption="End-to-end automation system for creating newsletters using AI and workflow automation"
        width={1600}
        height={1067}
        priority={true}
      />

      <ProjectSection id="overview" title="Project Overview" className="project-section-overview">
        <p className="project-text-large">
          I built an end-to-end automation for creating engaging, brand-aligned newsletters using Zapier, 
          Anthropic's Claude, OpenAI, and MailerLite. This system transforms research material in a Google 
          Sheet into a ready-to-send newsletter campaign in around 10 minutes - completely hands-free.
        </p>
      </ProjectSection>

      <ProjectSection id="challenge" title="The Challenge">
        <p className="project-text">
          Writing a high-quality newsletter every week is a significant time investment requiring:
        </p>
        <ul className="project-list">
          <li>Reviewing research materials and transcripts</li>
          <li>Summarizing top insights into digestible content</li>
          <li>Crafting engaging, educational copy</li>
          <li>Writing compelling subject lines</li>
          <li>Designing HTML that matches brand guidelines</li>
          <li>Uploading and scheduling campaigns in email platforms</li>
        </ul>
        <p className="project-text">
          For a solo marketer or small team, this process can consume 4-5 hours every week. The challenge 
          was to fully automate this workflow while maintaining quality, brand consistency, and engagement.
        </p>
      </ProjectSection>

      <ProjectSection id="solution" title="Solution Architecture">
        <p className="project-text">
          The solution consists of six interconnected steps that fully automate the newsletter creation process:
        </p>
        
        <div className="project-grid-2col">
          {solutionSteps.map((step) => (
            <div key={step.step} className="project-grid-item">
              <h4 className="project-subheading">Step {step.step}: {step.title}</h4>
              <p className="project-text-small">
                <strong>Tool:</strong> {step.tool}
              </p>
              <p className="project-text-small">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="project-text">
          <h4 className="project-subheading">Step 2: AI-Powered Content Generation - Detailed Process</h4>
          <p className="project-text">
            <strong>Tool: Anthropic Claude</strong>
          </p>
          <p className="project-text">
            Claude analyzes the transcript and generates:
          </p>
          <ul className="project-list">
            <li>A fun, educational newsletter format</li>
            <li>3 key takeaways from the research</li>
            <li>A seamless call-to-action for the brand's product</li>
          </ul>
          <p className="project-text">
            Key prompt engineering elements:
          </p>
          <ul className="project-list">
            <li>Start with an engaging title and quick introduction</li>
            <li>Extract only the top 3 most valuable takeaways</li>
            <li>Maintain an educational yet entertaining tone</li>
            <li>Include natural, value-driven CTAs</li>
          </ul>
        </div>
      </ProjectSection>

      <ProjectSection id="workflow" title="Implementation Workflow">
        <p className="project-text">
          The complete automation chain operates through the following sequence:
        </p>
        <ul className="project-list">
          <li><strong>Trigger:</strong> Google Sheets → New Row Added</li>
          <li><strong>Content Generation:</strong> Claude → Newsletter with 3 takeaways + CTA</li>
          <li><strong>Subject Creation:</strong> OpenAI GPT → Engaging subject line</li>
          <li><strong>Content Cleanup:</strong> OpenAI GPT → Remove artifacts and formatting issues</li>
          <li><strong>HTML Styling:</strong> OpenAI GPT → Apply brand template</li>
          <li><strong>Campaign Creation:</strong> MailerLite → Draft campaign ready for review</li>
        </ul>
      </ProjectSection>

      <ProjectSection id="results" title="Results & Impact">
        <ProjectMetrics metrics={metrics} />
        
        <div className="project-text">
          <h3 className="project-section-title">Time Savings</h3>
          <ul className="project-list">
            <li><strong>Before:</strong> 4-5 hours per week for newsletter creation</li>
            <li><strong>After:</strong> 10 minutes per week (just review time)</li>
            <li><strong>Efficiency Gain:</strong> 96% reduction in time investment</li>
          </ul>
          
          <h3 className="project-section-title">Quality Improvements</h3>
          <ul className="project-list">
            <li><strong>Consistent brand voice</strong> across all newsletters</li>
            <li><strong>Zero formatting errors</strong> due to automated HTML generation</li>
            <li><strong>Higher engagement rates</strong> from AI-optimized subject lines</li>
          </ul>
          
          <h3 className="project-section-title">Strategic Benefits</h3>
          <ul className="project-list">
            <li>Team can focus on high-value research and strategy</li>
            <li>Newsletter publication never delayed due to resource constraints</li>
            <li>Scalable system that can handle multiple newsletters without additional effort</li>
            <li>Complete audit trail of all content generation steps</li>
          </ul>
        </div>
      </ProjectSection>
      
      <ProjectSection id="technical" title="Technical Architecture">
        <p className="project-text">
          The system leverages:
        </p>
        <ul className="project-list">
          <li><strong>Zapier</strong> as the orchestration layer</li>
          <li><strong>Google Sheets</strong> for content management</li>
          <li><strong>Claude API</strong> for intelligent content generation</li>
          <li><strong>OpenAI API</strong> for subject lines and HTML formatting</li>
          <li><strong>MailerLite API</strong> for campaign management</li>
        </ul>
        
        <div className="project-grid-2col">
          {tools.map((tool, index) => (
            <div key={index} className="project-grid-item">
              <p className="project-text-small">
                {tool}
              </p>
            </div>
          ))}
        </div>
      </ProjectSection>
      
      <ProjectSection id="conclusion" title="Conclusion">
        <p className="project-text-large">
          This project demonstrates how AI and automation can transform time-consuming content creation 
          tasks into efficient, scalable systems. By combining multiple AI models with smart automation, 
          we achieved a 96% reduction in newsletter creation time while maintaining - and even improving - 
          content quality and brand consistency.
        </p>
        <p className="project-text">
          The system now runs entirely hands-free, turning research into ready-to-send newsletters in 
          minutes rather than hours.
        </p>
      </ProjectSection>

    </ProjectLayout>
  );
}

// Metadata for SEO
export const metadata = {
  title: 'AI-Powered Newsletter Automation | Dana Airapetova',
  description: 'End-to-end automation system for creating newsletters using AI, reducing creation time from 4-5 hours to 10 minutes while maintaining quality and brand consistency.',
};