import { useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';
import SectionTitle from '@/components/SectionTitle';
import { Check, Globe, Palette, Layers } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const features = [
  { icon: Check, title: 'Performance-Focused Craftsmanship', description: 'Every product is engineered for peak athletic performance with premium materials and expert construction.' },
  { icon: Globe, title: 'Trusted Worldwide Partners', description: 'We collaborate with global brands and teams to deliver consistent quality across all markets.' },
  { icon: Palette, title: 'Unlimited Design Freedom', description: 'From concept to creation, we offer limitless customization options to bring your vision to life.' },
  { icon: Layers, title: 'One Platform, Endless Solutions', description: 'A comprehensive manufacturing solution for all your sportswear and apparel needs under one roof.' },
];

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    if (!sectionRef.current || !cardsRef.current) return;

    const cards = cardsRef.current.querySelectorAll('.feature-card');
    gsap.fromTo(
      cards[0],
      { x: -80, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 70%', once: true } }
    );
    gsap.fromTo(
      cards[1],
      { x: 80, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.1, scrollTrigger: { trigger: sectionRef.current, start: 'top 70%', once: true } }
    );
    gsap.fromTo(
      cards[2],
      { x: -80, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.2, scrollTrigger: { trigger: sectionRef.current, start: 'top 70%', once: true } }
    );
    gsap.fromTo(
      cards[3],
      { x: 80, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.3, scrollTrigger: { trigger: sectionRef.current, start: 'top 70%', once: true } }
    );

    return () => { ScrollTrigger.getAll().forEach(t => t.kill()); };
  }, []);

  useEffect(() => {
    if (!imageRef.current) return;
    if (hoveredCard !== null) {
      gsap.to(imageRef.current, { scale: 0.95, duration: 0.3, ease: 'power2.out' });
    } else {
      gsap.to(imageRef.current, { scale: 1, duration: 0.3, ease: 'power2.out' });
    }
  }, [hoveredCard]);

  return (
    <section ref={sectionRef} className="section-padding bg-black">
      <div className="container-main">
        <SectionTitle title="WHY CHOOSE DYNAW INDUSTRY" />
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16 -mt-8">
          Elevate your game with our premium sports gear. We combine cutting-edge technology with superior craftsmanship to deliver products that enhance your performance.
        </p>

        <div ref={cardsRef} className="relative grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Center Image */}
          <div ref={imageRef} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hidden md:block">
            <img src="/assets/hero/asset_2.png" alt="Baseball Player" className="w-40 h-auto drop-shadow-2xl" />
          </div>

          {features.map((f, i) => (
            <div
              key={i}
              className="feature-card bg-[#111] border border-white/10 rounded-xl p-6 transition-all duration-300 hover:shadow-[0_0_30px_rgba(245,166,35,0.3)] hover:border-gold/50 cursor-default"
              onMouseEnter={() => setHoveredCard(i)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <f.icon className="w-8 h-8 text-gold mb-4" />
              <h3 className="text-white font-semibold text-lg mb-2">{f.title}</h3>
              <p className="text-gray-400 text-sm">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
