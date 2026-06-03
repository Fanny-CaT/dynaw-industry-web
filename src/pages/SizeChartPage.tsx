import ServicePageLayout from '@/components/ServicePageLayout';

const menSizes = [
  { size: 'S', chest: '34-36"', waist: '28-30"', length: '27"' },
  { size: 'M', chest: '38-40"', waist: '32-34"', length: '28"' },
  { size: 'L', chest: '42-44"', waist: '36-38"', length: '29"' },
  { size: 'XL', chest: '46-48"', waist: '40-42"', length: '30"' },
  { size: 'XXL', chest: '50-52"', waist: '44-46"', length: '31"' },
];

const womenSizes = [
  { size: 'XS', bust: '32-34"', waist: '24-26"', hips: '34-36"' },
  { size: 'S', bust: '34-36"', waist: '26-28"', hips: '36-38"' },
  { size: 'M', bust: '36-38"', waist: '28-30"', hips: '38-40"' },
  { size: 'L', bust: '38-40"', waist: '30-32"', hips: '40-42"' },
  { size: 'XL', bust: '40-42"', waist: '32-34"', hips: '42-44"' },
  { size: 'XXL', bust: '42-44"', waist: '34-36"', hips: '44-46"' },
];

export default function SizeChartPage() {
  return (
    <ServicePageLayout title="Size Chart" breadcrumb="HOME / SIZE CHART">
      <h3 className="text-2xl font-bold text-gold mb-2">Size Chart</h3>
      <div className="w-16 h-0.5 bg-gold mb-6" />
      <p className="text-gray-400 mb-8">Our comprehensive size charts help you find the perfect fit. All measurements are in inches.</p>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div>
          <h4 className="text-xl font-bold text-white mb-4">Men&apos;s Size Chart</h4>
          <div className="bg-[#111] rounded-lg overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gold text-black">
                  <th className="px-4 py-3 text-left">Size</th>
                  <th className="px-4 py-3 text-left">Chest</th>
                  <th className="px-4 py-3 text-left">Waist</th>
                  <th className="px-4 py-3 text-left">Length</th>
                </tr>
              </thead>
              <tbody>
                {menSizes.map((row) => (
                  <tr key={row.size} className="border-t border-white/10 text-gray-300">
                    <td className="px-4 py-3 font-medium text-white">{row.size}</td>
                    <td className="px-4 py-3">{row.chest}</td>
                    <td className="px-4 py-3">{row.waist}</td>
                    <td className="px-4 py-3">{row.length}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h4 className="text-xl font-bold text-white mb-4">Women&apos;s Size Chart</h4>
          <div className="bg-[#111] rounded-lg overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gold text-black">
                  <th className="px-4 py-3 text-left">Size</th>
                  <th className="px-4 py-3 text-left">Bust</th>
                  <th className="px-4 py-3 text-left">Waist</th>
                  <th className="px-4 py-3 text-left">Hips</th>
                </tr>
              </thead>
              <tbody>
                {womenSizes.map((row) => (
                  <tr key={row.size} className="border-t border-white/10 text-gray-300">
                    <td className="px-4 py-3 font-medium text-white">{row.size}</td>
                    <td className="px-4 py-3">{row.bust}</td>
                    <td className="px-4 py-3">{row.waist}</td>
                    <td className="px-4 py-3">{row.hips}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* How To Measure */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div>
          <h4 className="text-xl font-bold text-white mb-4">How To Measure Yourself</h4>
          <div className="rounded-xl overflow-hidden">
            <img src="/assets/size-chart/asset_1.png" alt="How to measure" className="w-full h-auto bg-[#111]" />
          </div>
        </div>
        <div>
          <h4 className="text-xl font-bold text-white mb-4">Fit Type</h4>
          <div className="space-y-4">
            <div className="bg-[#111] rounded-lg p-4">
              <h5 className="text-gold font-semibold mb-2">Slim Fit</h5>
              <p className="text-gray-400 text-sm">Closer to the body for a modern, athletic silhouette. Best for performance activities.</p>
            </div>
            <div className="bg-[#111] rounded-lg p-4">
              <h5 className="text-gold font-semibold mb-2">Regular Fit</h5>
              <p className="text-gray-400 text-sm">Standard fit with comfortable room for movement. Suitable for everyday wear and training.</p>
            </div>
            <div className="bg-[#111] rounded-lg p-4">
              <h5 className="text-gold font-semibold mb-2">Loose Fit</h5>
              <p className="text-gray-400 text-sm">Relaxed fit with maximum comfort and breathability. Ideal for casual wear and recovery.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-xl overflow-hidden">
        <img src="/assets/size-chart/asset_2.jpg" alt="Size chart reference" className="w-full h-auto" />
      </div>
    </ServicePageLayout>
  );
}
