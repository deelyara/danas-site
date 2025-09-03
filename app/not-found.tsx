import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404 - Page Not Found | Dana Duisekenova',
  description: 'The page you are looking for could not be found.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-6">
      <div className="text-center max-w-md">
        {/* Creative divider - dots pattern */}
        <div className="flex justify-center gap-4 mb-8">
          <div className="w-1 h-1 bg-accent rounded-full"></div>
          <div className="w-1 h-1 bg-primary rounded-full opacity-30"></div>
          <div className="w-1 h-1 bg-accent rounded-full"></div>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-serif text-primary mb-6 font-light">404</h1>
        <h2 className="text-xl md:text-2xl font-serif text-primary mb-4">Page Not Found</h2>
        <p className="text-secondary mb-8 leading-relaxed">
          The page you&rsquo;re looking for doesn&rsquo;t exist or has been moved.
        </p>
        
        <div className="space-y-4">
          <Link 
            href="/"
            className="inline-block px-6 py-3 bg-accent text-background rounded-lg hover:bg-accent/90 transition-colors duration-300 font-medium"
          >
            Return Home
          </Link>
          <div className="text-center">
            <Link 
              href="/work"
              className="text-sm text-secondary hover:text-accent transition-colors duration-300"
            >
              View Projects
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

