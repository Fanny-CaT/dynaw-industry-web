import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type { ServiceSection } from '@/types';

gsap.registerPlugin(ScrollTrigger);

interface NumberedSectionProps {
  section: ServiceSection;
  imagePosition?: 'left' | 'right';
}

export default function NumberedSection({ section, imagePosition = 'left' }: NumberedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    gsap.fromTo(ref.current, { y: 40, opacity: 0 }, {
      y: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
      scrollTrigger: { trigger: ref.current, start: 'top 85%', once: true },
    });
  }, []);

  const imgLeft = imagePosition === 'left';

  return (
    <div ref={ref} className="grid md:grid-cols-2 gap-8 items-center mb-12">
      <div className={`rounded-xl overflow-hidden ${imgLeft ? '' : 'md:order-2'}`}>
        <img src={section.image} alt={section.imageAlt} className="w-full h-64 object-cover" />
      </div>
      <div className={`${imgLeft ? '' : 'md:order-1'}`}>
        <div className="text-5xl font-black text-gold/30 mb-2">{section.number}</div>
        <h3 className="text-xl font-bold text-gold mb-4">{section.title}</h3>
        <p className="text-gray-400 leading-relaxed">{section.description}</p>
      </div>
    </div>
  );
}
