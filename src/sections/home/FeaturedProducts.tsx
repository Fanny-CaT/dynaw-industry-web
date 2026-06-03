import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionTitle from '@/components/SectionTitle';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';

gsap.registerPlugin(ScrollTrigger);

export default function FeaturedProducts() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !gridRef.current) return;

    gsap.fromTo(sectionRef.current, { scale: 0.95, opacity: 0 }, {
      scale: 1, opacity: 1, duration: 1, ease: 'power3.out',
      scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', once: true },
    });

    const cards = gridRef.current.children;
    gsap.fromTo(cards, { y: 40, opacity: 0 }, {
      y: 0, opacity: 1, stagger: 0.1, duration: 0.8, ease: 'power3.out', delay: 0.3,
      scrollTrigger: { trigger: gridRef.current, start: 'top 80%', once: true },
    });

    return () => { ScrollTrigger.getAll().forEach(t => t.kill()); };
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-black">
      <div className="container-main">
        <SectionTitle title="OUR PRODUCTS" subtitle="FEATURED PRODUCTS" />

        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} variant="dark" />
          ))}
        </div>
      </div>
    </section>
  );
}
