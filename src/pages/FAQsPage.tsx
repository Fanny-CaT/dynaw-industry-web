import { useState } from 'react';
import ServicePageLayout from '@/components/ServicePageLayout';
import { faqsPage } from '@/data/products';
import { ChevronDown } from 'lucide-react';

export default function FAQsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const leftFAQs = faqsPage.slice(0, 5);
  const rightFAQs = faqsPage.slice(5);

  return (
    <ServicePageLayout title="FAQs" breadcrumb="HOME / FAQS">
      <h3 className="text-2xl font-bold text-gold mb-2">Help & Faqs</h3>
      <div className="w-16 h-0.5 bg-gold mb-8" />

      <div className="grid md:grid-cols-2 gap-6">
        {/* Left column */}
        <div className="space-y-3">
          {leftFAQs.map((faq, i) => (
            <div key={i} className="bg-[#111] border border-white/10 rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex items-center justify-between w-full px-5 py-4 text-left"
              >
                <span className="text-white text-sm font-medium pr-4">{faq.question}</span>
                <ChevronDown className={`w-5 h-5 text-gold shrink-0 transition-transform ${openIndex === i ? 'rotate-180' : ''}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openIndex === i ? 'max-h-48' : 'max-h-0'}`}>
                <p className="px-5 pb-4 text-gray-400 text-sm">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right column */}
        <div className="space-y-3">
          {rightFAQs.map((faq, i) => (
            <div key={i + 5} className="bg-[#111] border border-white/10 rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === (i + 5) ? null : (i + 5))}
                className="flex items-center justify-between w-full px-5 py-4 text-left"
              >
                <span className="text-white text-sm font-medium pr-4">{faq.question}</span>
                <ChevronDown className={`w-5 h-5 text-gold shrink-0 transition-transform ${openIndex === (i + 5) ? 'rotate-180' : ''}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openIndex === (i + 5) ? 'max-h-48' : 'max-h-0'}`}>
                <p className="px-5 pb-4 text-gray-400 text-sm">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ServicePageLayout>
  );
}
