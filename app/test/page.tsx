export default function TestPage() {
  return (
    <div className="p-8 min-h-screen bg-white">
      <h1 className="text-3xl font-bold mb-8">Tailwind Utility Test Page</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Gap Test</h2>
        <div className="mb-6">
          <h3 className="text-lg mb-2">gap-2 (should be 0.5rem / 8px)</h3>
          <div className="grid grid-cols-3 gap-2 bg-gray-100 p-4">
            <div className="bg-purple-500 p-2 text-white text-center">Item 1</div>
            <div className="bg-purple-500 p-2 text-white text-center">Item 2</div>
            <div className="bg-purple-500 p-2 text-white text-center">Item 3</div>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg mb-2">gap-4 (should be 1rem / 16px)</h3>
          <div className="grid grid-cols-3 gap-4 bg-gray-100 p-4">
            <div className="bg-blue-500 p-2 text-white text-center">Item 1</div>
            <div className="bg-blue-500 p-2 text-white text-center">Item 2</div>
            <div className="bg-blue-500 p-2 text-white text-center">Item 3</div>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg mb-2">gap-8 (should be 2rem / 32px)</h3>
          <div className="grid grid-cols-3 gap-8 bg-gray-100 p-4">
            <div className="bg-green-500 p-2 text-white text-center">Item 1</div>
            <div className="bg-green-500 p-2 text-white text-center">Item 2</div>
            <div className="bg-green-500 p-2 text-white text-center">Item 3</div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Space Utilities Test</h2>
        <div className="mb-6">
          <h3 className="text-lg mb-2">space-y-4 (vertical spacing)</h3>
          <div className="space-y-4 bg-gray-100 p-4">
            <div className="bg-orange-500 p-3 text-white">Item 1</div>
            <div className="bg-orange-500 p-3 text-white">Item 2</div>
            <div className="bg-orange-500 p-3 text-white">Item 3</div>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg mb-2">space-x-8 (horizontal spacing)</h3>
          <div className="flex space-x-8 bg-gray-100 p-4">
            <div className="bg-red-500 p-3 text-white">Item 1</div>
            <div className="bg-red-500 p-3 text-white">Item 2</div>
            <div className="bg-red-500 p-3 text-white">Item 3</div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Padding Test</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-gray-200">
            <div className="p-2 bg-indigo-500 text-white">p-2 (0.5rem)</div>
          </div>
          <div className="bg-gray-200">
            <div className="p-4 bg-indigo-500 text-white">p-4 (1rem)</div>
          </div>
          <div className="bg-gray-200">
            <div className="p-8 bg-indigo-500 text-white">p-8 (2rem)</div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Margin Test</h2>
        <div className="bg-gray-100 p-4">
          <div className="bg-pink-500 text-white p-2">No margin</div>
          <div className="bg-pink-500 text-white p-2 mt-4">mt-4 (1rem top margin)</div>
          <div className="bg-pink-500 text-white p-2 mt-8">mt-8 (2rem top margin)</div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Custom Spacing Values Test</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-200">
            <div className="p-xs bg-teal-500 text-white">p-xs (custom 0.5rem)</div>
          </div>
          <div className="bg-gray-200">
            <div className="p-lg bg-teal-500 text-white">p-lg (custom 2rem)</div>
          </div>
        </div>
      </section>
    </div>
  );
}