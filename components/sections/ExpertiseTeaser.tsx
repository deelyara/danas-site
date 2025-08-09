'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function ExpertiseTeaser() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('expertise-teaser');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const expertiseAreas = [
    {
      title: "Strategic Leadership",
      description: "Executive leadership and team building with focus on strategic planning and board reporting.",
      skills: ["Executive Leadership", "Team Building", "Strategic Planning", "Board Reporting"]
    },
    {
      title: "Revenue Growth", 
      description: "Driving revenue through innovative marketing strategies and growth optimization.",
      skills: ["Demand Generation", "Sales Enablement", "Pipeline Development", "Growth Marketing"]
    },
    {
      title: "Digital Excellence",
      description: "Mastery of digital marketing channels and marketing technology stack.",
      skills: ["Marketing Automation", "Data Analytics", "MarTech Stack", "Digital Transformation"]
    }
  ];

  return (
    <section id="expertise-teaser" className="py-32 md:py-40 bg-background">
      <div className="container mx-auto px-6">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="max-w-6xl">
            <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl text-primary mb-12 leading-tight tracking-tight">
              Expertise
            </h2>
            
            <p className="text-xl md:text-2xl text-primary/70 leading-relaxed mb-20 max-w-4xl font-light">
              Comprehensive marketing expertise spanning strategy, technology, and proven methodologies 
              that drive measurable business growth.
            </p>
            
            <div className="grid md:grid-cols-3 gap-12 mb-20">
              {expertiseAreas.map((area, index) => (
                <div 
                  key={index}
                  className={`transition-all duration-1000 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="mb-6">
                    <h3 className="font-serif text-2xl md:text-3xl text-primary mb-4 leading-tight">
                      {area.title}
                    </h3>
                    <p className="text-primary/80 leading-relaxed font-light mb-6">
                      {area.description}
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    {area.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-center gap-3">
                        <div className="w-1 h-1 bg-accent rounded-full" />
                        <span className="text-sm text-primary/70 font-medium">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link 
                href="/expertise" 
                className="inline-flex items-center gap-4 px-8 py-4 border border-accent/30 rounded-full text-lg text-primary hover:text-accent hover:border-accent transition-all duration-300 group backdrop-blur-sm bg-background/50 font-medium"
              >
                <span>View Full Expertise</span>
                <div className="w-8 h-px bg-current group-hover:w-12 transition-all duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 