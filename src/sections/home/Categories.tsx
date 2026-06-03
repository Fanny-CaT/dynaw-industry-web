import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useNavigate } from 'react-router-dom';
import SectionTitle from '@/components/SectionTitle';
import { categories } from '@/data/products';
import { ChevronRight } from 'lucide-react';

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

        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="group relative rounded-xl overflow-hidden cursor-pointer aspect-[4/3]"
              onClick={() => navigate(`/products?category=${cat.slug}`)}
            >
              {/* Image */}
              <img src={cat.image} alt={cat.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

              {/* Category Name */}
              <div className="absolute bottom-0 left-0 right-0 p-4 transition-transform duration-300 group-hover:-translate-y-2">
                <h3 className="text-white font-bold text-xl">{cat.name}</h3>
              </div>

              {/* Hover Subcategories */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/95 to-black/80 translate-y-full group-hover:translate-y-0 transition-transform duration-300 p-4 pt-8">
                <h3 className="text-white font-bold text-lg mb-3">{cat.name}</h3>
                <ul className="space-y-1.5">
                  {cat.subcategories.map((sub) => (
                    <li key={sub} className="flex items-center gap-2 text-gray-300 text-sm hover:text-gold transition-colors">
                      <ChevronRight className="w-3 h-3 text-gold" />
                      {sub}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
