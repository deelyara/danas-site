# Automating Wellness Influencer Outreach Using Zapier

## Project Overview

In an effort to scale influencer marketing and outreach for a new wellness product line, I built an automated workflow leveraging Zapier, Apify, OpenAI, Google Sheets, and Hunter.io. The goal was to identify relevant YouTube creators, assess their content fit, find contact details, and draft personalized collaboration emails entirely without manual effort.

## The Challenge

Traditional influencer outreach is time-consuming, manual, and inconsistent especially when dealing with:

- Scanning hundreds of YouTube channels to find relevant ones
- Evaluating each creator's audience engagement and content alignment
- Researching contact information manually
- Drafting personalized messages for outreach at scale

Our challenge was to automate this entire flow without compromising quality, personalization, or targeting precision.

## Breaking Down the Project

### Aspect 1: Channel Discovery with Apify
I set up an Apify actor to scrape YouTube for channels mentioning keywords like "stress relief," "wellness routine," "natural supplements" etc. The output included:
- Channel name
- Subscriber count
- Video performance metrics
- Channel URL

### Aspect 2: Smart Evaluation via GPT
Each scraped channel was analyzed using OpenAI GPT-4, scoring it on:
- Relevance to wellness products
- Views-to-subscribers ratio
- Brand fit (trustworthiness, tone, professionalism)
- Overall engagement

The result: a score from 0–10 plus a qualitative explanation of why the creator was a good (or poor) fit.

### Aspect 3: Contact Discovery with Hunter.io
For all channels scoring 7 or above, we used Hunter.io to automatically:
- Extract email addresses from their website, BIO description or domain
- Verify business emails

### Aspect 4: Personalized Outreach with GPT
Finally, GPT was prompted to write a personalized email pitch tailored to:
- Creator's niche and recent content
- Our wellness brand's mission
- A proposed collaboration idea (e.g., product review, challenge, sponsored video)

All of this data—scores, emails, messages—was stored neatly in Google Sheets.

## Solution Strategy

We orchestrated the entire flow using Zapier, triggered when the Apify actor finished scraping. Here's the automation chain:

![Zapier Workflow Beginning](/Automating%20wellness/beginning.png)

*Initial workflow setup showing the trigger and first automation steps*

1. **Trigger**: Apify → Finished Actor Run
2. **Google Sheets**: Store raw channel data
3. **OpenAI GPT**: Score each channel
4. **Google Sheets**: Save score and explanation
5. **Zapier Filter**: Only proceed if score ≥ 7
6. **Hunter.io**: Find verified contact email
7. **OpenAI GPT**: Generate personalized email
8. **Google Sheets**: Store email + outreach message

**Optional Add-ons**:
- Slack alert for high-scoring creators
- Gmail integration to auto-send or create drafts

![Zapier Workflow Continuation](/Automating%20wellness/continuation.png)

*Extended workflow showing the complete automation chain with filtering and personalization steps*

## Impact & Results

### Results After 2 Weeks of Running the Automation:
- 150+ YouTube channels scanned
- 57 qualified creators (score ≥ 7)
- 42 verified emails found
- 35 personalized outreach emails drafted
- 12 positive replies and 5 ongoing collaborations

![Results Dashboard](/Automating%20wellness/Screen%20Shot%202025-08-13%20at%2022.22.17.png)

*Dashboard view showing the automation results and performance metrics*

### Time Saved:
- Reduced outreach time from 8–10 hours/week to under 30 minutes/week
- Manual work minimized to reviewing high-quality leads

### Strategic Advantage:
- **Personalized at scale**: GPT enabled high-converting messages that didn't feel templated
- **Faster outreach** = faster collaborations = faster ROI

## Conclusion

This project showcases how combining automation, AI, and scraping tools can transform traditional influencer marketing. By building this modular, scalable Zapier system, I saved a company significant time while maintaining high-quality, personalized outreach at scale.