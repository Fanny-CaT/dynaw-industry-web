import { Link } from 'react-router-dom';
import { Truck, Headphones, CreditCard, Zap, Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

const features = [
  { icon: Truck, title: 'Shipping worldwide', subtitle: 'No one rejects, dislikes.' },
  { icon: Headphones, title: '24/7 Support.', subtitle: 'It has survived not only.' },
  { icon: CreditCard, title: 'Online Payment.', subtitle: 'Yes we have online payment' },
  { icon: Zap, title: 'Fast Delivery.', subtitle: 'We have very fast delivery' },
];

const quickLinks = [
  { label: 'Home', path: '/' },
  { label: 'Our Products', path: '/products' },
  { label: 'About Us', path: '/about' },
  { label: 'Contact Us', path: '/contact' },
];

const categoryLinks = [
  { label: 'Sports Wear', path: '/products' },
  { label: 'Casual Wear', path: '/products' },
  { label: 'Bags', path: '/products' },
  { label: 'Fitness Wear', path: '/products' },
  { label: 'Jackets', path: '/products' },
];

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a]">
      {/* Features Bar */}
      <div className="border-b border-white/10">
        <div className="container-main py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {features.map((f) => (
              <div key={f.title} className="flex items-center gap-3">
                <f.icon className="w-8 h-8 text-gold shrink-0" />
                <div>
                  <h4 className="text-white text-sm font-semibold">{f.title}</h4>
                  <p className="text-gray-500 text-xs">{f.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-main py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Logo & Description */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <img src="/assets/logo.png" alt="Dynaw Industry" className="h-12 w-auto" />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              We are worldwide manufacturer and Exporter of Sports Wear, Casual Wear, Fitness Wear, Gym Wear, & Street Wear and provide best quality products to everyone.
            </p>
            <div className="flex items-center gap-3">
              {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full bg-gold/20 flex items-center justify-center text-gold hover:bg-gold hover:text-black transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-gold">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="text-gray-400 text-sm hover:text-gold transition-colors flex items-center gap-2">
                    <span className="text-gold">+</span> {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Categories */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-gold">
              Our Categories
            </h3>
            <ul className="space-y-2.5">
              {categoryLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="text-gray-400 text-sm hover:text-gold transition-colors flex items-center gap-2">
                    <span className="text-gold">+</span> {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-gold">
              Contact Info
            </h3>
            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <Phone className="w-6 h-6 text-white shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">+92 345 71551445</span>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-6 h-6 text-white shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">info@dynawindustry.com</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-6 h-6 text-white shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">Ruby Villaz Kashmir Road Sialkot Punjab Pakistan</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-main py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-gray-500 text-xs">Copyright 2026 Dynaw Industry</p>
          <p className="text-gray-500 text-xs">Developed By Quick Solutions.</p>
        </div>
      </div>
    </footer>
  );
}
