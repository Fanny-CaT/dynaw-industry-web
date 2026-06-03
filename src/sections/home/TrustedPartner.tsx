import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { trustedPartnerFAQs } from '@/data/products';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function TrustedPartner() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    gsap.fromTo(sectionRef.current.children, { y: 40, opacity: 0 }, {
      y: 0, opacity: 1, stagger: 0.2, duration: 0.8, ease: 'power3.out',
      scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', once: true },
    });
    return () => { ScrollTrigger.getAll().forEach(t => t.kill()); };
  }, []);

  return (
    <section className="section-padding bg-black">
      <div className="container-main">
        <div ref={sectionRef} className="grid md:grid-cols-2 gap-12">
          {/* Left: Text */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gold mb-6">Trusted Manufacturer Partner</h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              At Dynaw Industry, our mission is to deliver premium-quality sportswear that empowers athletes and teams worldwide. With a commitment to innovation, precision, and customer satisfaction, we have established ourselves as a trusted partner in the sports apparel industry.
            </p>
            <p className="text-gray-400 leading-relaxed mb-6">
              Our state-of-the-art manufacturing facilities, combined with our experienced team, ensure that every product meets the highest standards of quality and performance. We continuously invest in research and development to stay ahead of industry trends.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              From design to delivery, we maintain strict quality control measures at every stage. Our partnerships with leading sports brands and teams around the world are a testament to our reliability and commitment to excellence.
            </p>
            <button className="btn-outline-gold">Learn More</button>
          </div>

          {/* Right: FAQ Accordion */}
          <div className="space-y-3">
            {trustedPartnerFAQs.map((faq, i) => (
              <div
                key={i}
                className="bg-gold rounded-lg overflow-hidden cursor-pointer hover:bg-gold-hover transition-colors"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <div className="flex items-center justify-between px-5 py-4">
                  <span className="text-black font-medium text-sm pr-4">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-black shrink-0 transition-transform ${openIndex === i ? 'rotate-180' : ''}`} />
                </div>
                <div className={`overflow-hidden transition-all duration-300 ${openIndex === i ? 'max-h-48' : 'max-h-0'}`}>
                  <div className="px-5 pb-4 text-black/80 text-sm">{faq.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
