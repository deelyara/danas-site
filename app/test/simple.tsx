export default function SimplePage() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Tailwind CSS Test</h1>
      
      <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Colors (Should Work)</h2>
      <div className="bg-blue-500 text-white p-4 mb-4">
        Blue background with white text - if you see this styled, Tailwind is partially working
      </div>
      
      <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Gap Test (Problem Area)</h2>
      <div style={{ backgroundColor: '#f0f0f0', padding: '1rem', marginBottom: '1rem' }}>
        <p style={{ marginBottom: '0.5rem' }}>Using gap-4 (should be 1rem gap):</p>
        <div className="grid grid-cols-3 gap-4">
          <div style={{ backgroundColor: 'purple', color: 'white', padding: '0.5rem' }}>1</div>
          <div style={{ backgroundColor: 'purple', color: 'white', padding: '0.5rem' }}>2</div>
          <div style={{ backgroundColor: 'purple', color: 'white', padding: '0.5rem' }}>3</div>
        </div>
      </div>
      
      <div style={{ backgroundColor: '#f0f0f0', padding: '1rem', marginBottom: '1rem' }}>
        <p style={{ marginBottom: '0.5rem' }}>Using inline style gap: 1rem (for comparison):</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
          <div style={{ backgroundColor: 'green', color: 'white', padding: '0.5rem' }}>1</div>
          <div style={{ backgroundColor: 'green', color: 'white', padding: '0.5rem' }}>2</div>
          <div style={{ backgroundColor: 'green', color: 'white', padding: '0.5rem' }}>3</div>
        </div>
      </div>
      
      <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Padding Test</h2>
      <div className="p-8 bg-gray-200 mb-4">
        This div should have 2rem (32px) padding if p-8 works
      </div>
    </div>
  );
}