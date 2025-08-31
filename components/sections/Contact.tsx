export default function Contact() {
  return (
    <section className="contact section-centered bg-surface">
      <div className="container mx-auto px-6 md:px-12 w-full max-w-[800px]">
        <div className="text-center">
          
          {/* Main Heading */}
          <h2 className="font-serif selected-work-title text-primary mb-8 md:mb-12 font-normal tracking-tight lowercase">
            let's connect
          </h2>
          
          {/* Intro Text */}
          <p className="text-xl text-secondary font-light leading-relaxed mb-12 md:mb-16 max-w-xl mx-auto">
            I'm always interested in discussing new opportunities and strategic marketing challenges.
          </p>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <a href="mailto:dana.odair1@gmail.com" className="cta-button">Contact via Email</a>
            <a href="https://www.linkedin.com/in/dana-duisekenova-22b327194/" target="_blank" rel="noopener noreferrer" className="cta-button">Contact via LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
  );
}