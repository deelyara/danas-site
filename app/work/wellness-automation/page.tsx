import ProjectLayout from '@/components/project/ProjectLayout';
import ProjectHero from '@/components/project/ProjectHero';
import ProjectSection from '@/components/project/ProjectSection';
import ProjectMedia, { MediaGrid } from '@/components/project/ProjectMedia';
import ProjectMetrics from '@/components/project/ProjectMetrics';
import { wellnessAutomationData } from '@/lib/projects/wellnessAutomation';

export default function WellnessAutomationPage() {
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
  } = wellnessAutomationData;

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


      <ProjectSection id="overview" title="Project Overview" className="project-section-overview">
        <p className="project-text-large">
          This automated system streamlines the entire influencer outreach process, from discovery to initial contact, eliminating hours of manual research and outreach work while maintaining personalization and quality.
        </p>
      </ProjectSection>

      <ProjectSection id="challenge" title="The Challenge">
        <p className="project-text">
          Traditional influencer outreach is time-consuming, manual, and inconsistent especially when dealing with:
        </p>
        <ul className="project-list">
          <li>Scanning hundreds of YouTube channels to find relevant ones</li>
          <li>Evaluating each creator's audience engagement and content alignment</li>
          <li>Researching contact information manually</li>
          <li>Drafting personalized messages for outreach at scale</li>
        </ul>
        <p className="project-text">
          Our challenge was to automate this entire flow without compromising quality, personalization, or targeting precision.
        </p>
      </ProjectSection>

      <ProjectSection id="project-breakdown" title="Breaking Down the Project">
        <div className="project-grid-2col">
          <div className="project-grid-item">
            <h4 className="project-subheading">Aspect 1: Channel Discovery with Apify</h4>
            <p className="project-text-small">
              I set up an Apify actor to scrape YouTube for channels mentioning keywords like "stress relief," "wellness routine," "natural supplements" etc. The output included:
            </p>
            <ul className="project-list">
              <li>Channel name</li>
              <li>Subscriber count</li>
              <li>Video performance metrics</li>
              <li>Channel URL</li>
            </ul>
          </div>
          <div className="project-grid-item">
            <h4 className="project-subheading">Aspect 2: Smart Evaluation via GPT</h4>
            <p className="project-text-small">
              Each scraped channel was analyzed using OpenAI GPT-4, scoring it on:
            </p>
            <ul className="project-list">
              <li>Relevance to wellness products</li>
              <li>Views-to-subscribers ratio</li>
              <li>Brand fit (trustworthiness, tone, professionalism)</li>
              <li>Overall engagement</li>
            </ul>
            <p className="project-text-small">
              The result: a score from 0–10 plus a qualitative explanation of why the creator was a good (or poor) fit.
            </p>
          </div>
          <div className="project-grid-item">
            <h4 className="project-subheading">Aspect 3: Contact Discovery with Hunter.io</h4>
            <p className="project-text-small">
              For all channels scoring 7 or above, we used Hunter.io to automatically:
            </p>
            <ul className="project-list">
              <li>Extract email addresses from their website, BIO description or domain</li>
              <li>Verify business emails</li>
            </ul>
          </div>
          <div className="project-grid-item">
            <h4 className="project-subheading">Aspect 4: Personalized Outreach with GPT</h4>
            <p className="project-text-small">
              Finally, GPT was prompted to write a personalized email pitch tailored to:
            </p>
            <ul className="project-list">
              <li>Creator's niche and recent content</li>
              <li>Our wellness brand's mission</li>
              <li>A proposed collaboration idea (e.g., product review, challenge, sponsored video)</li>
            </ul>
          </div>
        </div>
        <p className="project-text">
          All of this data—scores, emails, messages—was stored neatly in Google Sheets.
        </p>
      </ProjectSection>

      <ProjectSection id="solution-strategy" title="Solution Strategy">
        <p className="project-text">
          We orchestrated the entire flow using Zapier, triggered when the Apify actor finished scraping. Here's the automation chain:
        </p>
        
        <div className="project-media" style={{ marginBottom: '0' }}>
          <ProjectMedia 
            src={media.workflow.beginning}
            alt="Zapier Workflow Beginning"
            width={1920}
            height={1080}
          />
        </div>
        <div className="project-media" style={{ marginTop: '0' }}>
          <ProjectMedia 
            src={media.workflow.continuation}
            alt="Zapier Workflow Continuation"
            caption="Complete Zapier automation workflow from trigger to personalized outreach"
            width={1920}
            height={1080}
          />
        </div>
        
        <ol className="project-list">
          <li><strong>Trigger</strong>: Apify → Finished Actor Run</li>
          <li><strong>Google Sheets</strong>: Store raw channel data</li>
          <li><strong>OpenAI GPT</strong>: Score each channel</li>
          <li><strong>Google Sheets</strong>: Save score and explanation</li>
          <li><strong>Zapier Filter</strong>: Only proceed if score ≥ 7</li>
          <li><strong>Hunter.io</strong>: Find verified contact email</li>
          <li><strong>OpenAI GPT</strong>: Generate personalized email</li>
          <li><strong>Google Sheets</strong>: Store email + outreach message</li>
        </ol>
        
        <p className="project-text">
          <strong>Optional Add-ons</strong>:
        </p>
        <ul className="project-list">
          <li>Slack alert for high-scoring creators</li>
          <li>Gmail integration to auto-send or create drafts</li>
        </ul>
      </ProjectSection>


      <ProjectSection id="results" title="Impact & Results">
        <p className="project-text">
          <strong>Results After 2 Weeks of Running the Automation:</strong>
        </p>
        <ul className="project-list">
          <li>150+ YouTube channels scanned</li>
          <li>57 qualified creators (score ≥ 7)</li>
          <li>42 verified emails found</li>
          <li>35 personalized outreach emails drafted</li>
          <li>12 positive replies and 5 ongoing collaborations</li>
        </ul>
        
        <p className="project-text">
          <strong>Time Saved:</strong>
        </p>
        <ul className="project-list">
          <li>Reduced outreach time from 8–10 hours/week to under 30 minutes/week</li>
          <li>Manual work minimized to reviewing high-quality leads</li>
        </ul>
        
        <p className="project-text">
          <strong>Strategic Advantage:</strong>
        </p>
        <ul className="project-list">
          <li>Personalized at scale: GPT enabled high-converting messages that didn't feel templated</li>
          <li>Faster outreach = faster collaborations = faster ROI</li>
        </ul>
      </ProjectSection>
      
      <ProjectSection id="conclusion" title="Conclusion">
        <p className="project-text">
          This project showcases how combining automation, AI, and scraping tools can transform traditional influencer marketing. By building this modular, scalable Zapier system, I saved a company a lot of time.
        </p>
      </ProjectSection>
    </ProjectLayout>
  );
}

// Metadata for SEO
export const metadata = {
  title: 'Automating Wellness Influencer Outreach Using Zapier | Dana Airapetova',
  description: 'Automated workflow leveraging Zapier, Apify, OpenAI, Google Sheets, and Hunter.io to identify relevant YouTube creators, assess content fit, find contact details, and draft personalized collaboration emails.',
};