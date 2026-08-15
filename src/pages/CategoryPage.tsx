import { useState, useRef, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ProductCard from '@/components/ProductCard';
import { categoryProducts, categories } from '@/data/products';
import { ChevronLeft, LayoutGrid, List } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function CategoryPage() {
  const [searchParams] = useSearchParams();
  const categorySlug = searchParams.get('category') || 'sports-wear';
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [perPage, setPerPage] = useState(12);
  const [sortBy, setSortBy] = useState('default');
  const gridRef = useRef<HTMLDivElement>(null);

  const currentCategory = categories.find(c => c.slug === categorySlug) || categories[0];

  useEffect(() => {
    if (!gridRef.current) return;
    const cards = gridRef.current.children;
    gsap.fromTo(cards, { y: 30, opacity: 0 }, {
      y: 0, opacity: 1, stagger: 0.05, duration: 0.6, ease: 'power3.out',
    });
  }, [categorySlug, perPage]);

  return (
    <>
      {/* Hero */}
      <div className="bg-[#1a1a1a] pt-16 pb-12">
        <div className="container-main">
          <div className="flex items-center gap-4 mb-8">
            <button className="text-white hover:text-[#ffaa00] transition-colors">
              <ChevronLeft className="w-8 h-8" />
            </button>
            <h1 className="text-5xl font-bold text-white">{currentCategory.name}</h1>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-8">
            {categories.map((cat) => (
              <a
                key={cat.slug}
                href={`/products?category=${cat.slug}`}
                onClick={(e) => { e.preventDefault(); window.location.href = `/products?category=${cat.slug}`; }}
                className="group flex flex-col"
              >
                <span className={`text-sm font-bold uppercase transition-colors ${
                  cat.slug === categorySlug ? 'text-[#ffaa00]' : 'text-white group-hover:text-[#ffaa00]'
                }`}>{cat.name}</span>
                <span className="text-xs text-gray-400 mt-1">{cat.productCount} Products</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Products */}
      <div className="bg-white py-8">
        <div className="container-main">
          {/* Controls */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8 text-sm">
            <div className="text-gray-500">
              Home / Dynaw Industry / <span className="text-gray-900">{currentCategory.name}</span>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <span className="text-gray-900 font-medium">Show:</span>
                {[9, 12, 18, 24].map((n, i) => (
                  <span key={n} className="flex items-center">
                    <button 
                      onClick={() => setPerPage(n)} 
                      className={`${perPage === n ? 'text-gray-900 font-bold' : 'text-gray-500 hover:text-gray-900'}`}
                    >
                      {n}
                    </button>
                    {i < 3 && <span className="mx-2 text-gray-300">/</span>}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-2 text-gray-400">
                <button onClick={() => setViewMode('grid')} className={`hover:text-gray-900 ${viewMode === 'grid' ? 'text-gray-900' : ''}`}>
                  <LayoutGrid className="w-5 h-5" />
                </button>
                <button onClick={() => setViewMode('list')} className={`hover:text-gray-900 ${viewMode === 'list' ? 'text-gray-900' : ''}`}>
                  <List className="w-5 h-5" />
                </button>
              </div>

              <select 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)} 
                className="bg-transparent border-none text-gray-900 font-medium focus:outline-none focus:ring-0 cursor-pointer"
              >
                <option value="default">Default sorting</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name</option>
              </select>
            </div>
          </div>

          {/* Product Grid */}
          <div ref={gridRef} className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4' : 'grid-cols-1'}`}>
            {categoryProducts.slice(0, perPage).map((product) => (
              <ProductCard key={product.id} product={product} variant="light" />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
