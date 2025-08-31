'use client';

import { useEffect, useState } from 'react';

export default function DebugPage() {
  const [computedStyles, setComputedStyles] = useState<any>({});

  useEffect(() => {
    // Get computed styles for test elements
    const gapTest = document.getElementById('gap-test');
    const paddingTest = document.getElementById('padding-test');
    
    if (gapTest && paddingTest) {
      setComputedStyles({
        gap: window.getComputedStyle(gapTest).gap,
        padding: window.getComputedStyle(paddingTest).padding,
        gapDisplay: window.getComputedStyle(gapTest).display,
      });
    }
  }, []);

  return (
    <div className="p-8 min-h-screen bg-white">
      <h1 className="text-3xl font-bold mb-8">Tailwind Debug Page</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Computed Styles</h2>
        <div className="bg-gray-100 p-4 rounded">
          <p>Gap Test Element: {computedStyles.gap || 'Loading...'}</p>
          <p>Padding Test Element: {computedStyles.padding || 'Loading...'}</p>
          <p>Display: {computedStyles.gapDisplay || 'Loading...'}</p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Direct Grid Test</h2>
        
        <div className="mb-4">
          <h3 className="text-lg mb-2">Using Tailwind Classes</h3>
          <div id="gap-test" className="grid grid-cols-3 gap-8 bg-gray-200 p-4">
            <div className="bg-purple-500 p-2 text-white">1</div>
            <div className="bg-purple-500 p-2 text-white">2</div>
            <div className="bg-purple-500 p-2 text-white">3</div>
          </div>
        </div>

        <div className="mb-4">
          <h3 className="text-lg mb-2">Using Inline Styles (for comparison)</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', backgroundColor: '#e5e7eb', padding: '1rem' }}>
            <div style={{ backgroundColor: '#10b981', padding: '0.5rem', color: 'white' }}>1</div>
            <div style={{ backgroundColor: '#10b981', padding: '0.5rem', color: 'white' }}>2</div>
            <div style={{ backgroundColor: '#10b981', padding: '0.5rem', color: 'white' }}>3</div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Padding Test</h2>
        <div id="padding-test" className="p-8 bg-gray-200">
          This should have 2rem padding (p-8)
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Different Gap Values</h2>
        <div className="space-y-4">
          <div>
            <p className="mb-2">gap-1 (0.25rem)</p>
            <div className="grid grid-cols-4 gap-1 bg-gray-100 p-2">
              {[1,2,3,4].map(i => (
                <div key={i} className="bg-blue-500 text-white p-1 text-center">{i}</div>
              ))}
            </div>
          </div>
          
          <div>
            <p className="mb-2">gap-2 (0.5rem)</p>
            <div className="grid grid-cols-4 gap-2 bg-gray-100 p-2">
              {[1,2,3,4].map(i => (
                <div key={i} className="bg-blue-500 text-white p-1 text-center">{i}</div>
              ))}
            </div>
          </div>
          
          <div>
            <p className="mb-2">gap-4 (1rem)</p>
            <div className="grid grid-cols-4 gap-4 bg-gray-100 p-2">
              {[1,2,3,4].map(i => (
                <div key={i} className="bg-blue-500 text-white p-1 text-center">{i}</div>
              ))}
            </div>
          </div>
          
          <div>
            <p className="mb-2">gap-8 (2rem)</p>
            <div className="grid grid-cols-4 gap-8 bg-gray-100 p-2">
              {[1,2,3,4].map(i => (
                <div key={i} className="bg-blue-500 text-white p-1 text-center">{i}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">CSS Classes Applied</h2>
        <div className="bg-gray-100 p-4 rounded text-sm">
          <p>If colors work but spacing doesn't, check:</p>
          <ul className="list-disc list-inside mt-2">
            <li>CSS import order in globals.css</li>
            <li>Custom CSS overriding Tailwind utilities</li>
            <li>PostCSS/Tailwind v4 configuration</li>
            <li>Browser dev tools for computed styles</li>
          </ul>
        </div>
      </section>
    </div>
  );
}