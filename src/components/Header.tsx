import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ChevronDown, Menu, X, ShoppingCart, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { useApp } from '@/context/AppContext';

const navLinks = [
  { label: 'HOME', path: '/' },
  {
    label: 'OUR PRODUCTS',
    path: '/products',
    dropdown: [
      { label: 'Sports Wear', path: '/products?sport' },
      { label: 'Casual Wear', path: '/products?casual' },
      { label: 'Fitness Wear', path: '/products?fitness' },
      { label: 'Bags', path: '/products?bags' },
      { label: 'Jackets', path: '/products?jackets' },
      { label: 'Sublimation Garments', path: '/products?sublimation' },
    ],
  },
  { label: 'ABOUT US', path: '/about' },
  { label: 'CATALOGUE', path: '/catalogue' },
  {
    label: 'SERVICES',
    path: '#',
    dropdown: [
      { label: 'Customization', path: '/services/customization' },
      { label: 'Manufacturing Process', path: '/services/manufacturing' },
      { label: 'Color Variable', path: '/services/color-variable' },
      { label: 'Size Chart', path: '/services/size-chart' },
      { label: 'Research & Development', path: '/services/research-development' },
      { label: 'Quality Assurance', path: '/services/quality-assurance' },
      { label: 'FAQs', path: '/services/faqs' },
      { label: 'Privacy Policy', path: '/services/privacy-policy' },
      { label: 'Refund and Returns Policy', path: '/services/refund-policy' },
    ],
  },
  { label: 'CONTACT US', path: '/contact' },
];

export default function Header() {
  const { state } = useApp();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);
  const cartCount = state.cart.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path) && path !== '#';
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-b border-white/10">
      <div className="container-main flex items-center justify-between h-[72px]">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img src="/assets/logo.png" alt="Dynaw Industry" className="h-12 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <nav ref={dropdownRef} className="hidden lg:flex items-center gap-1 relative">
          {navLinks.map((link) => (
            <div
              key={link.label}
              className="relative"
              onMouseEnter={() => link.dropdown && setActiveDropdown(link.label)}
              onMouseLeave={() => link.dropdown && setActiveDropdown(null)}
            >
              <Link
                to={link.path}
                onClick={(e) => {
                  if (link.path === '#') e.preventDefault();
                }}
                className={`flex items-center gap-1 px-3 py-2 text-xs font-medium tracking-wider transition-colors duration-200 ${
                  isActive(link.path) || (link.dropdown && link.dropdown.some(d => location.pathname === d.path))
                    ? 'text-gold'
                    : 'text-white hover:text-gold'
                }`}
              >
                {link.label}
                {link.dropdown && <ChevronDown className="w-3 h-3" />}
              </Link>

              {/* Dropdown */}
              {link.dropdown && activeDropdown === link.label && (
                <div className="absolute top-full left-0 bg-black border border-white/10 min-w-[220px] py-2 shadow-xl animate-fade-in">
                  {link.dropdown.map((item) => (
                    <Link
                      key={item.label}
                      to={item.path}
                      className={`block px-4 py-2.5 text-sm border-l-2 border-transparent hover:border-gold hover:text-gold transition-all duration-200 ${
                        location.pathname === item.path ? 'text-gold border-gold' : 'text-white/80'
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Right side */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Search */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search for products"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-48 h-9 pl-4 pr-10 rounded-full bg-white text-black text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gold"
            />
            <button className="absolute right-1 top-1/2 -translate-y-1/2 w-7 h-7 bg-gold rounded-full flex items-center justify-center hover:bg-gold-hover transition-colors">
              <Search className="w-3.5 h-3.5 text-black" />
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-2">
            <a href="#" className="text-gray-400 hover:text-gold transition-colors"><Facebook className="w-4 h-4" /></a>
            <a href="#" className="text-gray-400 hover:text-gold transition-colors"><Twitter className="w-4 h-4" /></a>
            <a href="#" className="text-gray-400 hover:text-gold transition-colors"><Instagram className="w-4 h-4" /></a>
            <a href="#" className="text-gray-400 hover:text-gold transition-colors"><Youtube className="w-4 h-4" /></a>
          </div>

          {/* Cart */}
          <Link to="/cart" className="relative text-white hover:text-gold transition-colors">
            <ShoppingCart className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-gold text-black text-[10px] font-bold rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
        </div>

        {/* Mobile controls */}
        <div className="flex lg:hidden items-center gap-3">
          <Link to="/cart" className="relative text-white">
            <ShoppingCart className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-gold text-black text-[10px] font-bold rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="text-white p-1">
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-black border-t border-white/10 animate-slide-up">
          <div className="container-main py-4 space-y-1">
            {/* Mobile Search */}
            <div className="relative mb-4">
              <input
                type="text"
                placeholder="Search for products"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-10 pl-4 pr-10 rounded-full bg-white text-black text-sm placeholder:text-gray-500 focus:outline-none"
              />
              <button className="absolute right-1 top-1/2 -translate-y-1/2 w-8 h-8 bg-gold rounded-full flex items-center justify-center">
                <Search className="w-4 h-4 text-black" />
              </button>
            </div>

            {navLinks.map((link) => (
              <div key={link.label}>
                <Link
                  to={link.path}
                  onClick={(e) => {
                    if (link.path === '#') {
                      e.preventDefault();
                      setActiveDropdown(activeDropdown === link.label ? null : link.label);
                    } else {
                      setMobileOpen(false);
                    }
                  }}
                  className={`flex items-center justify-between py-3 text-sm font-medium ${
                    isActive(link.path) ? 'text-gold' : 'text-white'
                  }`}
                >
                  {link.label}
                  {link.dropdown && (
                    <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === link.label ? 'rotate-180' : ''}`} />
                  )}
                </Link>
                {link.dropdown && activeDropdown === link.label && (
                  <div className="pl-4 pb-2 space-y-1">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.label}
                        to={item.path}
                        onClick={() => setMobileOpen(false)}
                        className="block py-2 text-sm text-white/70 hover:text-gold"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Social Icons */}
            <div className="flex items-center gap-4 pt-4 border-t border-white/10">
              <a href="#" className="text-gray-400 hover:text-gold"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-gold"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-gold"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-gold"><Youtube className="w-5 h-5" /></a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
