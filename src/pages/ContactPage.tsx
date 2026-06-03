import { useState } from 'react';
import { Clock, MapPin, Phone, Mail, ChevronDown } from 'lucide-react';
import { contactFAQs } from '@/data/products';

export default function ContactPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', message: '' });

  return (
    <>
      {/* Hero */}
      <div className="bg-black pt-24 pb-16">
        <div className="container-main">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">CONTACT US</h1>
          <p className="text-gray-400">Dynaw Industry &gt; Contact us</p>
        </div>
      </div>

      {/* Get In Touch */}
      <div className="bg-black section-padding border-t border-white/10">
        <div className="container-main">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">
                Get In <span className="text-gold">Touch</span> With Us
              </h2>
              <div className="w-16 h-0.5 bg-gold mb-6" />
              <p className="text-gray-400">We&apos;d love to hear from you. Reach out to us for any inquiries or collaboration opportunities.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-4">OUR LOCATION</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <div>
                    <p className="text-gray-300 text-sm font-medium">Monday – Sunday 9:00 – 6:00</p>
                    <p className="text-gray-500 text-xs">Business Hours</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <div>
                    <p className="text-gray-300 text-sm font-medium">Ruby Villaz Kashmir Road Sialkot Punjab Pakistan</p>
                    <p className="text-gray-500 text-xs">Address</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-4">MORE INFORMATION</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <div>
                    <p className="text-gray-300 text-sm font-medium">+92 345 71551445</p>
                    <p className="text-gray-500 text-xs">Phone</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <div>
                    <p className="text-gray-300 text-sm">info@dynawindustry.com</p>
                    <p className="text-gray-300 text-sm">sales@dynawindustry.com</p>
                    <p className="text-gray-500 text-xs">Email</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form + FAQ */}
      <div className="bg-white py-16">
        <div className="container-main">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">CONTACT US FOR ANY QUESTIONS</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full border rounded-lg px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-gold"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full border rounded-lg px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-gold"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full border rounded-lg px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-gold"
                />
                <input
                  type="text"
                  placeholder="Company"
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                  className="w-full border rounded-lg px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-gold"
                />
                <textarea
                  placeholder="Your Message"
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full border rounded-lg px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-gold"
                />
                <button type="submit" className="bg-gold text-black font-semibold px-8 py-3 rounded-lg hover:bg-gold-hover transition-colors">
                  SEND MESSAGE
                </button>
              </form>
            </div>

            {/* FAQ */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">FREQUENTLY ASKED QUESTIONS</h3>
              <div className="space-y-3">
                {contactFAQs.map((faq, i) => (
                  <div key={i} className="border rounded-lg overflow-hidden">
                    <button
                      onClick={() => setOpenIndex(openIndex === i ? null : i)}
                      className="flex items-center justify-between w-full px-5 py-4 text-left bg-gray-50"
                    >
                      <span className="text-gray-900 text-sm font-medium pr-4">{faq.question}</span>
                      <ChevronDown className={`w-5 h-5 text-gray-500 shrink-0 transition-transform ${openIndex === i ? 'rotate-180' : ''}`} />
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ${openIndex === i ? 'max-h-48' : 'max-h-0'}`}>
                      <p className="px-5 py-4 text-gray-600 text-sm bg-white">{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
