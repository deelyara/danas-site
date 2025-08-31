export const newsletterData = {
  // Basic info
  title: "AI-Powered Newsletter Automation",
  company: "AUTOMATION PROJECT",
  year: "2024",
  slug: "newsletter",
  
  // Hero description
  description: "I built an end-to-end automation for creating engaging, brand-aligned newsletters using Zapier, Anthropic's Claude, OpenAI, and MailerLite. This system transforms research material in a Google Sheet into a ready-to-send newsletter campaign in around 10 minutes - completely hands-free.",
  
  // Table of contents
  tableOfContents: [
    { id: 'overview', title: 'Project Overview' },
    { id: 'challenge', title: 'The Challenge' },
    { id: 'solution', title: 'Solution Architecture' },
    { id: 'workflow', title: 'Implementation Workflow' },
    { id: 'results', title: 'Results & Impact' },
    { id: 'technical', title: 'Technical Architecture' },
    { id: 'conclusion', title: 'Conclusion' }
  ],
  
  // Media assets
  media: {
    hero: "/ai-powered-automation/newsletter/newsletter.png"
  },
  
  // Metrics
  metrics: [
    { label: "Time Savings", value: "96%", description: "Reduction in time investment" },
    { label: "Before", value: "4-5 hours", description: "Per week for newsletter creation" },
    { label: "After", value: "10 minutes", description: "Per week (just review time)" },
    { label: "Quality", value: "100%", description: "Consistent brand voice" },
    { label: "Errors", value: "0", description: "Zero formatting errors" },
    { label: "Engagement", value: "Higher", description: "AI-optimized subject lines" }
  ],
  
  // Solution steps
  solutionSteps: [
    { step: 1, title: "Automated Trigger System", tool: "Google Sheets + Zapier", description: "Google Sheets as central hub for research materials with automated workflow trigger" },
    { step: 2, title: "AI-Powered Content Generation", tool: "Anthropic Claude", description: "Analyzes transcripts and generates newsletter with 3 key takeaways and CTAs" },
    { step: 3, title: "Subject Line Optimization", tool: "OpenAI GPT", description: "Creates engaging subject lines optimized for open rates" },
    { step: 4, title: "Content Processing", tool: "OpenAI GPT", description: "Cleans up AI output and removes formatting inconsistencies" },
    { step: 5, title: "Brand-Aligned HTML Design", tool: "OpenAI GPT", description: "Transforms content into responsive, brand-aligned HTML" },
    { step: 6, title: "Automated Campaign Creation", tool: "MailerLite", description: "Creates draft campaign ready for review and sending" }
  ],
  
  // Skills/tools used
  tools: [
    "Zapier Automation",
    "Anthropic Claude API",
    "OpenAI GPT API",
    "MailerLite API",
    "Google Sheets Integration",
    "Prompt Engineering",
    "AI Content Generation",
    "Email Marketing Automation",
    "Workflow Orchestration",
    "API Integration"
  ],
  
  // Navigation
  nextProject: { slug: "cheerful-buddha", title: "Social Media & Marketing Campaign" },
  prevProject: { slug: "wellness-automation", title: "Wellness Influencer Outreach" }
};