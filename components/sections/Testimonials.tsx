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
      'Dana brought clarity to our go-to-market and turned a scattered plan into a cohesive, high-performing program.',
    name: 'Alex Thompson',
    role: 'Head of Growth, SaaS Startup',
  },
  {
    quote:
      'Exceptionally strategic and fast. Our campaign performance improved within weeks with cleaner journeys and better messaging.',
    name: 'Priya Desai',
    role: 'Marketing Director, DTC Brand',
  },
  {
    quote:
      'Dana translates business goals into practical marketing systems. Smart, thoughtful, and great to collaborate with.',
    name: 'Michael Rivera',
    role: 'Founder, Creative Studio',
  },
];

export default function Testimonials() {
  const { elementRef: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { setElementRef, isVisible } = useMultipleScrollAnimation(testimonials.length);

  return (
    <section id="testimonials" className="section-centered bg-background">
      <div className="container mx-auto container-padding w-full">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`text-center mb-16 animate-on-scroll ${headerVisible ? 'animate-in' : ''}`}
        >
          <h2 className="font-serif text-4xl md:text-5xl text-primary mb-4 font-normal lowercase tracking-tight">
            what clients say
          </h2>
          <p className="text-base md:text-lg text-secondary/80 font-light max-w-2xl mx-auto">
            A few words from collaborators and teams I have partnered with.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto px-4 md:px-0">
          {testimonials.map((t, i) => (
            <div
              key={i}
              ref={setElementRef(i)}
              className={`animate-on-scroll ${isVisible(i) ? 'animate-in' : ''}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <article className="h-full bg-white border border-[color:var(--color-border-heavy)] rounded-2xl p-6 md:p-8 transition-shadow duration-300 hover:shadow-[var(--shadow-lg)]">
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

