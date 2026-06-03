import { Lightbulb, FlaskConical, Box, CheckCircle } from 'lucide-react';
import ServicePageLayout from '@/components/ServicePageLayout';

const cards = [
  { icon: Lightbulb, title: 'Product Innovation', desc: 'We continuously explore new technologies, materials, and manufacturing techniques to stay ahead of industry trends and deliver cutting-edge products to our clients.' },
  { icon: FlaskConical, title: 'Material Research', desc: 'Our dedicated research team tests and evaluates new fabrics and materials to ensure optimal performance, comfort, and durability in all our products.' },
  { icon: Box, title: 'Prototype Development', desc: 'We create detailed prototypes and samples for client approval, ensuring every design meets specifications before moving to full production.' },
  { icon: CheckCircle, title: 'Quality Improvement', desc: 'Through continuous analysis and feedback, we refine our processes and products to consistently exceed quality standards and customer expectations.' },
];

export default function RDPage() {
  return (
    <ServicePageLayout title="Research & Development" breadcrumb="HOME / RESEARCH & DEVELOPMENT">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card) => (
          <div key={card.title} className="bg-[#111] border border-white/10 rounded-xl p-6 text-center hover:border-gold/50 transition-all card-glow">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <card.icon className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-white font-semibold text-lg mb-2">{card.title}</h4>
            <p className="text-gray-400 text-sm">{card.desc}</p>
          </div>
        ))}
      </div>
    </ServicePageLayout>
  );
}
