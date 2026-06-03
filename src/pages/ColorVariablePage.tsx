import { useState } from 'react';
import ServicePageLayout from '@/components/ServicePageLayout';

const pantoneColors = [
  ['#F0E68C','#FFD700','#FFA500','#FF8C00','#FF7F50','#FF6347','#FF4500'],
  ['#FF69B4','#FF1493','#DC143C','#B22222','#8B0000','#A52A2A','#CD853F'],
  ['#D2691E','#8B4513','#A0522D','#BC8F8F','#F4A460','#DAA520','#B8860B'],
  ['#9ACD32','#6B8E23','#556B2F','#808000','#3CB371','#2E8B57','#228B22'],
  ['#008B8B','#008080','#20B2AA','#5F9EA0','#4682B4','#4169E1','#0000CD'],
  ['#483D8B','#6A5ACD','#7B68EE','#9370DB','#8A2BE2','#9400D3','#9932CC'],
  ['#8B008B','#4B0082','#191970','#000080','#00008B','#0000FF','#1E90FF'],
];

export default function ColorVariablePage() {
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  return (
    <ServicePageLayout title="Color Variable" breadcrumb="HOME / COLOR VARIABLE">
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-gold mb-2">Color Variable</h3>
        <div className="w-16 h-0.5 bg-gold mb-4" />
        <p className="text-gray-400 mb-8">Explore our comprehensive range of Pantone colors available for customization. Each color can be precisely matched to your brand or team requirements.</p>

        <div className="space-y-8">
          {pantoneColors.map((row, ri) => (
            <div key={ri}>
              <div className="text-sm text-gray-500 mb-2">PANTONE Solid Coated {ri + 1}</div>
              <div className="grid grid-cols-7 gap-2">
                {row.map((color, ci) => (
                  <button
                    key={ci}
                    onClick={() => setSelectedColor(color)}
                    className={`aspect-square rounded-lg transition-transform hover:scale-110 ${selectedColor === color ? 'ring-2 ring-white scale-110' : ''}`}
                    style={{ backgroundColor: color }}
                    title={color}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {selectedColor && (
          <div className="mt-8 p-4 bg-[#111] rounded-lg flex items-center gap-4">
            <div className="w-16 h-16 rounded-lg" style={{ backgroundColor: selectedColor }} />
            <div>
              <p className="text-white font-medium">Selected Color</p>
              <p className="text-gold">{selectedColor}</p>
            </div>
          </div>
        )}
      </div>
    </ServicePageLayout>
  );
}
