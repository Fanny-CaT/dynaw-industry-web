import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionTitle from '@/components/SectionTitle';

gsap.registerPlugin(ScrollTrigger);

const features = [
  { num: '01', title: 'Highly Trained Staff', desc: 'Expertly Trained Professionals Dedicated to Crafting Excellence' },
  { num: '02', title: 'Guaranteed Satisfaction', desc: 'Guaranteed Satisfaction, Because You Deserve the Best' },
  { num: '03', title: 'Premium Design Excellence', desc: 'Where creative design meets highest quality standards' },
];

export default function CompanyFeatures() {
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!listRef.current) return;
    const items = listRef.current.children;
    gsap.fromTo(items, { opacity: 0, x: -30 }, {
      opacity: 1, x: 0, stagger: 0.3, duration: 0.8, ease: 'power3.out',
      scrollTrigger: { trigger: listRef.current, start: 'top 80%', once: true },
    });
    return () => { ScrollTrigger.getAll().forEach(t => t.kill()); };
  }, []);

  return (
    <section className="section-padding bg-black">
      <div className="container-main">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Title + Features */}
          <div>
            <SectionTitle title="OUR COMPANY FEATURES" centered={false} className="!text-left" />
            <div ref={listRef} className="space-y-8">
              {features.map((f) => (
                <div key={f.num} className="flex gap-5 group cursor-default">
                  <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center shrink-0 text-black font-bold text-lg group-hover:scale-110 transition-transform">
                    {f.num}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg mb-1 group-hover:text-gold transition-colors">{f.title}</h4>
                    <p className="text-gray-400 text-sm">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Factory Image */}
          <div className="rounded-xl overflow-hidden">
            <img src="/assets/company/asset_1.jpg" alt="Factory" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
}
