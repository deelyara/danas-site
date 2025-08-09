import Hero from '@/components/sections/Hero';
import WorkTeaser from '@/components/sections/WorkTeaser';
import ContactTeaser from '@/components/sections/ContactTeaser';

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <WorkTeaser />
      <ContactTeaser />
    </main>
  );
}