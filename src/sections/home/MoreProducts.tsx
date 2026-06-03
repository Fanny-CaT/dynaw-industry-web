import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ProductCard from '@/components/ProductCard';
import { moreProducts } from '@/data/products';

gsap.registerPlugin(ScrollTrigger);

export default function MoreProducts() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!gridRef.current) return;
    const cards = gridRef.current.children;
    gsap.fromTo(cards, { y: 40, opacity: 0 }, {
      y: 0, opacity: 1, stagger: 0.1, duration: 0.8, ease: 'power3.out',
      scrollTrigger: { trigger: gridRef.current, start: 'top 80%', once: true },
    });
    return () => { ScrollTrigger.getAll().forEach(t => t.kill()); };
  }, []);

  return (
    <section className="section-padding bg-black">
      <div className="container-main">
        <div className="grid lg:grid-cols-4 gap-6">
          {/* Large Featured Product */}
          <div className="lg:row-span-2">
            <ProductCard product={moreProducts[0]} variant="dark" />
          </div>

          {/* Grid */}
          <div ref={gridRef} className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {moreProducts.slice(1).map((product) => (
              <ProductCard key={product.id} product={product} variant="dark" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
