import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionTitle from '@/components/SectionTitle';
import { Check, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

export default function WhatWeProvide() {
  const block1Ref = useRef<HTMLDivElement>(null);
  const block2Ref = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (block1Ref.current) {
      gsap.fromTo(block1Ref.current, { x: 60, opacity: 0 }, {
        x: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: block1Ref.current, start: 'top 80%', once: true },
      });
    }
    if (block2Ref.current) {
      gsap.fromTo(block2Ref.current, { x: -60, opacity: 0 }, {
        x: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: block2Ref.current, start: 'top 80%', once: true },
      });
    }
    return () => { ScrollTrigger.getAll().forEach(t => t.kill()); };
  }, []);

  return (
    <section className="section-padding bg-black">
      <div className="container-main">
        <SectionTitle title="WHAT WE PROVIDE" />

        {/* Block 1: Image Left, Text Right */}
        <div ref={block1Ref} className="grid md:grid-cols-2 gap-8 items-center mb-16">
          <div className="rounded-xl overflow-hidden">
            <img src="/assets/provide/asset_1.jpg" alt="Factory" className="w-full h-auto object-cover" />
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gold mb-4">YOUR STYLE, YOUR DESIGN</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              We specialize in custom sports apparel that reflects your unique style and team identity. Our design team works closely with you to create garments that stand out on and off the field.
            </p>
            <div className="flex gap-6 mb-6">
              {['QUALITY', 'FINE STITCHING', 'DELIVERY'].map((item) => (
                <div key={item} className="flex items-center gap-2 text-white hover:text-gold transition-colors">
                  <Check className="w-5 h-5 text-gold" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
            <button onClick={() => navigate('/about')} className="btn-outline-gold flex items-center gap-2">
              VIEW MORE <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Block 2: Text Left, Image Right */}
        <div ref={block2Ref} className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-3xl font-bold text-gold mb-4">DEDICATED TO EXCELLENCE</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              With years of experience in sportswear manufacturing, we are committed to delivering products that exceed expectations. Every stitch, every fabric choice, every design element is carefully considered.
            </p>
            <div className="flex gap-6 mb-6">
              {['QUALITY', 'WEARS', 'UNIFORM'].map((item) => (
                <div key={item} className="flex items-center gap-2 text-white hover:text-gold transition-colors">
                  <Check className="w-5 h-5 text-gold" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
            <button onClick={() => navigate('/about')} className="btn-outline-gold flex items-center gap-2">
              VIEW MORE <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <div className="order-1 md:order-2 rounded-xl overflow-hidden">
            <img src="/assets/provide/asset_2.jpg" alt="Athlete" className="w-full h-auto object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
