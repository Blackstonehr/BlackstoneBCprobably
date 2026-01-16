import LoadingOverlay from '../components/LoadingOverlay';
import { useState } from 'react';

const TestPage = () => {
  const [showLoading, setShowLoading] = useState(false);

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-8">Critical Path Testing</h1>

      {/* Typography Test */}
      <section className="mb-12 p-6 bg-white rounded-lg shadow">
        <h2 className="text-3xl font-bold mb-4">Typography Test</h2>
        <h3 className="text-2xl font-bold mb-2">Heading 3 - Letter Spacing Test</h3>
        <h4 className="text-xl font-bold mb-4">Heading 4 - Letter Spacing Test</h4>
        <p className="mb-4">
          This paragraph tests the new line-height of 1.7. Lorem ipsum dolor sit amet, 
          consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et 
          dolore magna aliqua. The spacing should feel more comfortable and readable.
        </p>
      </section>

      {/* Color Tokens Test */}
      <section className="mb-12 p-6 bg-white rounded-lg shadow">
        <h2 className="text-3xl font-bold mb-4">New Color Tokens Test</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="h-24 bg-graphite rounded mb-2"></div>
            <p className="text-sm font-semibold">graphite</p>
            <p className="text-xs text-gray-600">#2e2e2e</p>
          </div>
          <div className="text-center">
            <div className="h-24 bg-concrete rounded mb-2 border border-gray-300"></div>
            <p className="text-sm font-semibold">concrete</p>
            <p className="text-xs text-gray-600">#f5f4f2</p>
          </div>
          <div className="text-center">
            <div className="h-24 bg-blueprint rounded mb-2"></div>
            <p className="text-sm font-semibold">blueprint</p>
            <p className="text-xs text-gray-600">#1e75bb</p>
          </div>
          <div className="text-center">
            <div className="h-24 bg-steel rounded mb-2"></div>
            <p className="text-sm font-semibold">steel</p>
            <p className="text-xs text-gray-600">#797979</p>
          </div>
        </div>
      </section>

      {/* Blueprint Grid Test */}
      <section className="mb-12 p-6 bg-white rounded-lg shadow">
        <h2 className="text-3xl font-bold mb-4">Blueprint Grid Utility Test</h2>
        <div className="h-48 blueprint-grid border border-gray-300 rounded flex items-center justify-center">
          <p className="bg-white px-4 py-2 rounded shadow">
            Blueprint grid pattern applied
          </p>
        </div>
      </section>

      {/* Icon Placeholder Test */}
      <section className="mb-12 p-6 bg-white rounded-lg shadow">
        <h2 className="text-3xl font-bold mb-4">Icon Placeholder Test</h2>
        <div className="flex gap-4">
          <span className="h-12 w-12 bg-brand-accent block rounded-sm" />
          <span className="h-12 w-12 bg-brand-accent block rounded-sm" />
          <span className="h-12 w-12 bg-brand-accent block rounded-sm" />
          <span className="h-12 w-12 bg-brand-accent block rounded-sm" />
        </div>
        <p className="mt-4 text-sm text-gray-600">
          These placeholders match the ones used in Home.tsx features
        </p>
      </section>

      {/* LoadingOverlay Test */}
      <section className="mb-12 p-6 bg-white rounded-lg shadow">
        <h2 className="text-3xl font-bold mb-4">LoadingOverlay Test</h2>
        <button
          onClick={() => {
            setShowLoading(true);
            setTimeout(() => setShowLoading(false), 3000);
          }}
          className="px-6 py-3 bg-brand text-white rounded-lg hover:bg-brand-accent hover:text-brand transition-colors"
        >
          Show Loading Overlay (3 seconds)
        </button>
        {showLoading && <LoadingOverlay />}
      </section>

      {/* SpecTable Color Test */}
      <section className="mb-12 p-6 bg-white rounded-lg shadow">
        <h2 className="text-3xl font-bold mb-4">SpecTable Colors Test</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-steel rounded-lg shadow-md">
            <thead className="bg-brand text-white">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold">Column 1</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Column 2</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-concrete hover:bg-brand-light transition-colors">
                <td className="px-6 py-4 text-sm text-gray-900 font-medium">Row 1 (concrete)</td>
                <td className="px-6 py-4 text-sm text-gray-700">Data</td>
              </tr>
              <tr className="bg-white hover:bg-brand-light transition-colors">
                <td className="px-6 py-4 text-sm text-gray-900 font-medium">Row 2 (white)</td>
                <td className="px-6 py-4 text-sm text-gray-700">Data</td>
              </tr>
              <tr className="bg-concrete hover:bg-brand-light transition-colors">
                <td className="px-6 py-4 text-sm text-gray-900 font-medium">Row 3 (concrete)</td>
                <td className="px-6 py-4 text-sm text-gray-700">Data</td>
              </tr>
            </tbody>
          </table>
          <p className="mt-4 text-sm text-gray-600">
            Border uses 'steel' token, alternating rows use 'concrete' token
          </p>
        </div>
      </section>

      {/* Responsive Test Instructions */}
      <section className="mb-12 p-6 bg-white rounded-lg shadow">
        <h2 className="text-3xl font-bold mb-4">Responsive Testing</h2>
        <div className="space-y-2">
          <p className="text-sm">
            <strong>375px (Mobile):</strong> Open DevTools, set viewport to 375px width
          </p>
          <p className="text-sm">
            <strong>768px (Tablet):</strong> Open DevTools, set viewport to 768px width
          </p>
          <p className="text-sm">
            <strong>1440px (Desktop):</strong> Open DevTools, set viewport to 1440px width
          </p>
        </div>
      </section>
    </div>
  );
};

export default TestPage;
