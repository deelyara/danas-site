export default function MinimalTest() {
  return (
    <>
      <style jsx>{`
        .manual-gap-8 {
          gap: 2rem !important;
        }
      `}</style>
      
      <div className="p-8">
        <h1 className="text-2xl mb-4">Minimal Tailwind Test</h1>
        
        <h2 className="text-xl mb-2">Test 1: gap-8 (Tailwind)</h2>
        <div className="grid grid-cols-3 gap-8 bg-gray-200 p-4 mb-4">
          <div className="bg-blue-500 text-white p-2">1</div>
          <div className="bg-blue-500 text-white p-2">2</div>
          <div className="bg-blue-500 text-white p-2">3</div>
        </div>
        
        <h2 className="text-xl mb-2">Test 2: Manual CSS with !important</h2>
        <div className="grid grid-cols-3 manual-gap-8 bg-gray-200 p-4 mb-4">
          <div className="bg-green-500 text-white p-2">1</div>
          <div className="bg-green-500 text-white p-2">2</div>
          <div className="bg-green-500 text-white p-2">3</div>
        </div>
        
        <h2 className="text-xl mb-2">Test 3: Both classes</h2>
        <div className="grid grid-cols-3 gap-8 manual-gap-8 bg-gray-200 p-4">
          <div className="bg-purple-500 text-white p-2">1</div>
          <div className="bg-purple-500 text-white p-2">2</div>
          <div className="bg-purple-500 text-white p-2">3</div>
        </div>
      </div>
    </>
  );
}