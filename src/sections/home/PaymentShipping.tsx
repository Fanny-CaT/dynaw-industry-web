import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CreditCard, Truck } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const paymentMethods = ['PayPal', 'Ria', 'Western Union', 'Bank Transfer'];
const shippingMethods = ['UPS', 'FedEx', 'DHL', 'DPD'];

export default function PaymentShipping() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    gsap.fromTo(sectionRef.current.children, { y: 30, opacity: 0 }, {
      y: 0, opacity: 1, stagger: 0.2, duration: 0.8, ease: 'power3.out',
      scrollTrigger: { trigger: sectionRef.current, start: 'top 85%', once: true },
    });
    return () => { ScrollTrigger.getAll().forEach(t => t.kill()); };
  }, []);

  return (
    <section className="section-padding bg-black">
      <div className="container-main">
        <div ref={sectionRef} className="grid md:grid-cols-2 gap-12">
          {/* Payment Methods */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <CreditCard className="w-8 h-8 text-gold" />
              <h3 className="text-2xl font-bold text-gold">OUR PAYMENT METHOD</h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {paymentMethods.map((method) => (
                <div
                  key={method}
                  className="bg-white rounded-lg p-6 flex items-center justify-center h-20 text-gray-800 font-semibold hover:shadow-lg transition-shadow"
                >
                  {method}
                </div>
              ))}
            </div>
          </div>

          {/* Shipping Methods */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Truck className="w-8 h-8 text-gold" />
              <h3 className="text-2xl font-bold text-gold">OUR SHIPPING METHOD</h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {shippingMethods.map((method) => (
                <div
                  key={method}
                  className="bg-white rounded-lg p-6 flex items-center justify-center h-20 text-gray-800 font-semibold hover:shadow-lg transition-shadow"
                >
                  {method}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
