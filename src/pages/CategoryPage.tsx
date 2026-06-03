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
      <div className="bg-black pt-12 pb-6">
        <div className="container-main">
          <button className="flex items-center gap-2 text-gray-400 hover:text-gold text-sm mb-4">
            <ChevronLeft className="w-4 h-4" /> Back to Products
          </button>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{currentCategory.name}</h1>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 overflow-x-auto pb-2">
            {categories.map((cat) => (
              <a
                key={cat.slug}
                href={`/products?category=${cat.slug}`}
                onClick={(e) => { e.preventDefault(); window.location.href = `/products?category=${cat.slug}`; }}
                className={`px-4 py-2 text-sm font-medium rounded-lg whitespace-nowrap transition-colors ${
                  cat.slug === categorySlug
                    ? 'bg-gold text-black'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {cat.name.toUpperCase()} ({cat.productCount})
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Products */}
      <div className="bg-white py-12">
        <div className="container-main">
          {/* Breadcrumb */}
          <p className="text-gray-500 text-sm mb-4">Dynaw Industry &gt; {currentCategory.name} &gt; {currentCategory.subcategories[0]}</p>

          {/* Controls */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-4">
              <select value={perPage} onChange={(e) => setPerPage(Number(e.target.value))} className="border rounded-lg px-3 py-2 text-sm text-gray-700">
                {[9, 12, 18, 24].map(n => <option key={n} value={n}>{n}</option>)}
              </select>
              <span className="text-gray-500 text-sm">Per page</span>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex border rounded-lg overflow-hidden">
                <button onClick={() => setViewMode('grid')} className={`p-2 ${viewMode === 'grid' ? 'bg-gold text-black' : 'text-gray-400'}`}>
                  <LayoutGrid className="w-4 h-4" />
                </button>
                <button onClick={() => setViewMode('list')} className={`p-2 ${viewMode === 'list' ? 'bg-gold text-black' : 'text-gray-400'}`}>
                  <List className="w-4 h-4" />
                </button>
              </div>
              <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="border rounded-lg px-3 py-2 text-sm text-gray-700">
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
