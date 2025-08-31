'use client';

import { useScrollAnimation, useMultipleScrollAnimation } from '../../hooks/useScrollAnimation';

type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "Dana is a creative energy powerhouse, bringing great vibes and exceptional work ethic to the table. I can't think of a time she has missed a deadline over 2+ years of working together. She is proactive with new ideas, is not afraid to experiment and has a super positive attitude to learning.",
    name: 'Daniel Zsolt R.',
    role: 'Founder of Klear',
  },
  {
    quote:
      "Dana is an exceptional talent to work with. For as long as I worked with her, she was a breath of fresh air, always had a unique perspective and was very hands-on. We've managed multiple campaigns together, working on webinars, podcasts, graphics, social media carousels, copy, everything under the sun that keeps an agency running.",
    name: 'Drishti S.',
    role: 'B2B SaaS Marketer',
  },
  {
    quote:
      "From day one, Danagul impressed me with her creativity, strategic mindset, and ability to execute campaigns that delivered results. She managed cold outreach, email marketing, and digital campaigns across multiple channels, understanding how to attract the right audience and build consistent processes.",
    name: 'Karina M.',
    role: 'Business and Operations Manager',
  },
];

export default function Testimonials() {
  const { elementRef: headerRef, isVisible: headerVisible } = useScrollAnimation<HTMLDivElement>();
  const { setElementRef, isVisible } = useMultipleScrollAnimation(testimonials.length);

  return (
    <section id="testimonials" className="section-centered testimonials-background relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 w-full">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`text-center mb-12 md:mb-16 animate-on-scroll ${headerVisible ? 'animate-in' : ''}`}
        >
          <h2 className="font-serif text-4xl md:text-5xl text-primary mb-6 font-normal lowercase tracking-tight">
            testimonials
          </h2>
          <p className="text-base md:text-lg text-secondary/80 font-light max-w-2xl mx-auto">
            A few words from collaborators and teams I have partnered with.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <div
              key={i}
              ref={setElementRef(i)}
              className={`animate-on-scroll ${isVisible(i) ? 'animate-in' : ''}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <article className="h-full bg-white border border-primary/10 rounded-xl p-8 transition-all duration-300 hover:shadow-lg hover:border-primary/20">
                <blockquote className="text-primary text-lg md:text-xl leading-relaxed font-light">
                  {t.quote}
                </blockquote>
                <footer className="mt-6 pt-6 border-t border-[color:var(--color-border-medium)]">
                  <div className="font-serif text-primary text-lg">{t.name}</div>
                  <div className="text-secondary/80 text-sm tracking-wide">{t.role}</div>
                </footer>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

