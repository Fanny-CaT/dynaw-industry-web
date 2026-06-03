import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const slides = [
  {
    image: '/assets/hero/hero-bg-1.jpg',
    title: 'CASUAL',
    subtitle: 'WEAR',
    cta: 'Explore Now',
    link: '/products?casual',
  },
  {
    image: '/assets/hero/hero-bg-2.jpg',
    title: 'SPORTS',
    subtitle: 'WEAR',
    cta: 'Shop Now',
    link: '/products',
  },
  {
    image: '/assets/hero/asset_1.jpg',
    title: 'FITNESS',
    subtitle: 'WEAR',
    cta: 'View Collection',
    link: '/products?fitness',
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const navigate = useNavigate();

  const goTo = useCallback((index: number) => {
    if (transitioning) return;
    setTransitioning(true);
    setCurrent(index);
    setTimeout(() => setTransitioning(false), 800);
  }, [transitioning]);

  const next = useCallback(() => goTo((current + 1) % slides.length), [current, goTo]);
  const prev = useCallback(() => goTo((current - 1 + slides.length) % slides.length), [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative h-[calc(100vh-72px)] overflow-hidden group">
      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-all ease-in-out duration-700 ${
            i === current ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
        >
          <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40" />

          {/* Text */}
          <div className="absolute inset-0 flex flex-col justify-center container-main">
            <div className={`transition-all duration-700 ${i === current ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter">
                {slide.title}
              </h1>
              <h2 className="text-6xl md:text-8xl lg:text-9xl font-black text-gold tracking-tighter -mt-2 md:-mt-4">
                {slide.subtitle}
              </h2>
              <button
                onClick={() => navigate(slide.link)}
                className="mt-8 px-8 py-3 bg-gold text-black font-bold rounded-lg hover:bg-gold-hover transition-colors w-fit"
              >
                {slide.cta}
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-gold hover:text-black"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-gold hover:text-black"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === current ? 'bg-gold w-8' : 'bg-white/50 hover:bg-white'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
