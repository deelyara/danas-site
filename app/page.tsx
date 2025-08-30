import Hero from '@/components/sections/Hero';
import WorkTeaser from '@/components/sections/WorkTeaser';
import Testimonials from '@/components/sections/Testimonials';
import ContactTeaser from '@/components/sections/ContactTeaser';

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <WorkTeaser />
      <Testimonials />
      <ContactTeaser />
    </main>
  );
}
