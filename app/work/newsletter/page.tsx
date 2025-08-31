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
          I built an end-to-end automation for creating engaging, brand-aligned newsletters using Zapier, Anthropic's Claude, OpenAI, and MailerLite.
        </p>
        <p className="project-text">
          This system takes research material in a Google Sheet and without any manual formatting or copywriting turns it into a ready-to-send newsletter campaign in around 10 minutes.
        </p>
      </ProjectSection>

      <ProjectSection id="challenge" title="The Challenge">
        <p className="project-text">
          Writing a high-quality newsletter every week requires:
        </p>
        <ul className="project-list">
          <li>Reviewing research materials and transcripts</li>
          <li>Summarizing top insights</li>
          <li>Making the content fun and educational</li>
          <li>Writing a catchy subject line</li>
          <li>Designing HTML that matches brand style</li>
          <li>Uploading and scheduling campaigns in MailerLite</li>
        </ul>
        <p className="project-text">
          For a solo marketer or small team, this can take hours every week. The challenge was to fully automate the workflow while keeping the output engaging, on-brand, and ready to publish.
        </p>
      </ProjectSection>

      <ProjectSection id="breakdown" title="Breaking Down the Project">
        <div className="project-aspect">
          <h4 className="project-subheading">Aspect 1: Trigger from Research Entry</h4>
          <p className="project-text">
            I used Google Sheets as the starting point. When a new research item (video transcript + notes) is added, Zapier triggers the workflow automatically.
          </p>
        </div>

        <div className="project-aspect">
          <h4 className="project-subheading">Aspect 2: Content Generation with Claude</h4>
          <p className="project-text">
            <strong>Tool: Anthropic Claude</strong>
          </p>
          <p className="project-text">
            Claude takes the transcript and generates:
          </p>
          <ul className="project-list">
            <li>A fun, educational newsletter format</li>
            <li>3 key takeaways from the research</li>
            <li>A seamless call-to-action promoting an app that turns notes and PDFs into mind maps using MapThis at map-this.com</li>
          </ul>
          <p className="project-text">
            <strong>Prompt Highlights:</strong>
          </p>
          <ul className="project-list">
            <li>Start with a title + quick intro</li>
            <li>List only the top 3 takeaways</li>
            <li>Keep the tone engaging and educational</li>
            <li>Include a natural, non-salesy CTA</li>
          </ul>
        </div>

        <div className="project-aspect">
          <h4 className="project-subheading">Aspect 3: Subject Line Creation with ChatGPT</h4>
          <p className="project-text">
            <strong>Tool: OpenAI GPT</strong>
          </p>
          <p className="project-text">
            Claude's newsletter content is passed into ChatGPT, which generates a short, engaging subject line that fits the tone of the piece.
          </p>
        </div>

        <div className="project-aspect">
          <h4 className="project-subheading">Aspect 4: Content Cleanup</h4>
          <p className="project-text">
            <strong>Tool: OpenAI GPT (Extract Structured Data)</strong>
          </p>
          <p className="project-text">
            The raw output from Claude is cleaned to remove:
          </p>
          <ul className="project-list">
            <li>Any system messages</li>
            <li>Formatting artifacts</li>
            <li>Anything outside the final newsletter copy</li>
          </ul>
        </div>

        <div className="project-aspect">
          <h4 className="project-subheading">Aspect 5: HTML Styling for Branding</h4>
          <p className="project-text">
            <strong>Tool: OpenAI GPT</strong>
          </p>
          <p className="project-text">
            ChatGPT converts the cleaned newsletter content into HTML using a predefined brand template. The HTML includes: language attribute, brand colors, fonts, margins, padding, mobile-friendly width and responsive design etc.
          </p>
        </div>

        <div className="project-aspect">
          <h4 className="project-subheading">Aspect 6: Campaign Creation in MailerLite</h4>
          <p className="project-text">
            <strong>Tool: MailerLite via Zapier</strong>
          </p>
          <p className="project-text">
            Zapier creates a draft campaign in MailerLite using:
          </p>
          <ul className="project-list">
            <li>Subject line from Step 3</li>
            <li>HTML newsletter from Step 5</li>
          </ul>
          <p className="project-text">
            From there, all that's needed is a quick review.
          </p>
        </div>
      </ProjectSection>

      <ProjectSection id="strategy" title="Solution Strategy">
        <p className="project-text">
          I orchestrated the following Zapier chain:
        </p>
        <ol className="project-list">
          <li>Trigger: Google Sheets → New Row</li>
          <li>Claude: Generate newsletter content (top 3 takeaways + CTA)</li>
          <li>OpenAI GPT: Write subject line</li>
          <li>OpenAI GPT: Clean up newsletter content</li>
          <li>OpenAI GPT: Apply HTML brand template</li>
          <li>MailerLite: Create draft campaign</li>
        </ol>
      </ProjectSection>

      <ProjectSection id="results" title="Impact & Results">
        <div className="project-text">
          <h4 className="project-subheading">Newsletters created automatically</h4>
          <ul className="project-list">
            <li>Reduced creation time from 4–5 hours/week to 10 minutes/week</li>
            <li>Consistent design and tone without manual effort</li>
          </ul>
          
          <h4 className="project-subheading">Strategic Benefits:</h4>
          <ul className="project-list">
            <li>Newsletter quality is now consistent regardless of workload</li>
            <li>Freed up time to focus on research and audience growth</li>
            <li>Reduced dependency on manual copywriting and design work</li>
          </ul>
        </div>
      </ProjectSection>
      
      <ProjectSection id="conclusion" title="Conclusion">
        <p className="project-text">
          By combining Zapier, Claude, and OpenAI, this project turned a time-consuming manual process into a fully automated content machine.
        </p>
        <p className="project-text">
          Now, research can instantly be transformed into ready-to-send newsletters beautifully formatted, brand-aligned, and engaging—without lifting a finger beyond adding a new row in a spreadsheet.
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