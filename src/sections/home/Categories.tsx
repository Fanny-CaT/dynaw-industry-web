import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useNavigate } from 'react-router-dom';
import SectionTitle from '@/components/SectionTitle';
import { categories } from '@/data/products';

gsap.registerPlugin(ScrollTrigger);

export default function Categories() {
  const gridRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!gridRef.current) return;
    const cards = gridRef.current.children;
    gsap.fromTo(cards, { y: 50, opacity: 0 }, {
      y: 0, opacity: 1, stagger: 0.1, duration: 0.8, ease: 'power3.out',
      scrollTrigger: { trigger: gridRef.current, start: 'top 80%', once: true },
    });
    return () => { ScrollTrigger.getAll().forEach(t => t.kill()); };
  }, []);

  return (
    <section className="section-padding bg-black">
      <div className="container-main">
        <SectionTitle title="OUR CATEGORIES" />

        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="group flex flex-col cursor-pointer border border-[#333] hover:border-[#ffaa00] transition-colors"
              onClick={() => navigate(`/products?category=${cat.slug}`)}
            >
              {/* Image */}
              <div className="w-full aspect-[4/5] overflow-hidden bg-[#1a1a1a]">
                <img src={cat.image} alt={cat.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              
              {/* Category Name Bar */}
              <div className="bg-[#333] py-4 text-center">
                <h3 className="text-white font-bold text-sm tracking-wider">{cat.name.toUpperCase()}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
