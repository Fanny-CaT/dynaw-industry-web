import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const features = [
  'Competitive Pricing',
  'Passion Driven Performance',
  'Innovative Sports Solutions',
  'Trusted Athletic Community',
];

const cards = [
  { title: 'Premium Quality', desc: 'We use only the finest materials and advanced manufacturing techniques to ensure every product meets the highest standards of quality and durability.' },
  { title: 'Maximum Comfort', desc: 'Our designs prioritize comfort without compromising on performance, ensuring athletes can focus on their game without distractions.' },
  { title: 'Active Lifestyle', desc: 'We create products that support and enhance an active lifestyle, inspiring people to push their limits and achieve their fitness goals.' },
];

const stats = [
  { num: '2026', label: 'FOUNDING YEAR' },
  { num: '2000', label: 'HAPPY CUSTOMERS' },
  { num: '190', label: 'COMPANY WORK WITH US' },
  { num: '2', label: 'OFFICES' },
  { num: '21', label: 'TEAM MEMBERS' },
  { num: '750', label: 'ORDER DELIVERED' },
];

export default function AboutPage() {
  const statsRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!statsRef.current) return;
    const items = statsRef.current.children;
    gsap.fromTo(items, { y: 30, opacity: 0 }, {
      y: 0, opacity: 1, stagger: 0.1, duration: 0.6, ease: 'power3.out',
      scrollTrigger: { trigger: statsRef.current, start: 'top 80%', once: true },
    });
  }, []);

  return (
    <>
      {/* Hero */}
      <div className="bg-black pt-24 pb-16">
        <div className="container-main text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">ABOUT US</h1>
          <p className="text-gray-400">Dynaw Industry &gt; About us</p>
        </div>
      </div>

      {/* About Sports Wear */}
      <div className="bg-black section-padding">
        <div className="container-main">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-xl overflow-hidden">
              <img src="/assets/about/asset_2.jpg" alt="Sports Wear" className="w-full h-auto" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">About Sports Wear</h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                Welcome to Dynaw Industry, where passion meets performance! We are your premier destination for high-quality sports wear that is designed to elevate your game and inspire your journey to greatness. At Dynaw Industry, we understand that sports are not just activities they are lifestyles. Whether you are a seasoned athlete pushing your limits or a weekend warrior embracing the thrill of competition, our mission is to outfit you with apparel that empowers your every move.
              </p>
              <p className="text-gray-400 leading-relaxed mb-6">
                Our commitment to excellence drives us to source the finest materials and employ cutting-edge manufacturing techniques, ensuring that every piece of clothing bearing the Dynaw Industry name is crafted with precision and care. From moisture-wicking fabrics that keep you cool under pressure to ergonomic designs that optimize your range of motion, our sports wear is engineered to enhance your performance and comfort.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {features.map((f) => (
                  <div key={f} className="flex items-center gap-2 text-gray-300 hover:text-gold transition-colors">
                    <Check className="w-5 h-5 text-gold" />
                    <span className="text-sm">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What We Provide - reuse section */}
      <div className="bg-black section-padding border-t border-white/10">
        <div className="container-main text-center">
          <h2 className="text-4xl font-bold text-gold mb-6">WHAT WE PROVIDE</h2>
          <div className="w-16 h-0.5 bg-gold mx-auto mb-12" />

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="rounded-xl overflow-hidden">
              <img src="/assets/provide/asset_1.jpg" alt="Factory" className="w-full h-auto" />
            </div>
            <div className="text-left">
              <h3 className="text-2xl font-bold text-gold mb-4">YOUR STYLE, YOUR DESIGN</h3>
              <p className="text-gray-400 mb-4">We specialize in creating custom sports apparel that reflects your unique identity and team spirit.</p>
              <div className="flex gap-4 mb-4">
                {['QUALITY', 'FINE STITCHING', 'DELIVERY'].map((item) => (
                  <div key={item} className="flex items-center gap-1 text-gray-300 text-sm">
                    <Check className="w-4 h-4 text-gold" /> {item}
                  </div>
                ))}
              </div>
              <button onClick={() => navigate('/services/customization')} className="btn-outline-gold">VIEW MORE</button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-left order-2 md:order-1">
              <h3 className="text-2xl font-bold text-gold mb-4">DEDICATED TO EXCELLENCE</h3>
              <p className="text-gray-400 mb-4">With decades of experience, we deliver products that exceed expectations in quality and performance.</p>
              <div className="flex gap-4 mb-4">
                {['QUALITY', 'WEARS', 'UNIFORM'].map((item) => (
                  <div key={item} className="flex items-center gap-1 text-gray-300 text-sm">
                    <Check className="w-4 h-4 text-gold" /> {item}
                  </div>
                ))}
              </div>
              <button onClick={() => navigate('/about')} className="btn-outline-gold">VIEW MORE</button>
            </div>
            <div className="rounded-xl overflow-hidden order-1 md:order-2">
              <img src="/assets/provide/asset_2.jpg" alt="Athlete" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </div>

      {/* Who We Are */}
      <div className="bg-black section-padding border-t border-white/10">
        <div className="container-main text-center">
          <h2 className="text-4xl font-bold text-gold mb-6">WHO WE ARE</h2>
          <div className="w-16 h-0.5 bg-gold mx-auto mb-8" />
          <p className="text-gray-400 max-w-3xl mx-auto mb-12">
            Dynaw Industry is a leading manufacturer and exporter of premium sports apparel. With state-of-the-art facilities and a dedicated team of professionals, we deliver products that meet the highest standards of quality and performance. Our commitment to innovation and customer satisfaction has made us a trusted partner for teams and brands worldwide.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {cards.map((card) => (
              <div key={card.title} className="bg-[#111] border border-white/10 rounded-xl p-8 hover:border-gold/50 transition-all duration-300 card-glow">
                <h4 className="text-xl font-bold text-white mb-3">{card.title}</h4>
                <p className="text-gray-400 text-sm">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="relative py-20">
        <img src="/assets/about/asset_1.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/80" />
        <div className="container-main relative z-10">
          <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-4xl md:text-5xl font-black text-white mb-2">{s.num}</div>
                <div className="text-gold text-sm font-medium tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
