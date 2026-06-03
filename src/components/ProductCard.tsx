import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GitCompare, Eye, Heart, Check } from 'lucide-react';
import type { Product } from '@/types';
import { useApp } from '@/context/AppContext';
import QuickViewModal from './QuickViewModal';

interface ProductCardProps {
  product: Product;
  variant?: 'dark' | 'light';
}

export default function ProductCard({ product, variant = 'dark' }: ProductCardProps) {
  const { state, dispatch } = useApp();
  const navigate = useNavigate();
  const [showQuickView, setShowQuickView] = useState(false);
  const isCompared = state.compare.includes(product.id);
  const isWishlisted = state.wishlist.includes(product.id);

  const bgClass = variant === 'dark' ? 'bg-[#111]' : 'bg-white';
  const nameClass = variant === 'dark' ? 'text-white' : 'text-gray-900';
  const priceClass = 'text-gold';

  return (
    <>
      <div className={`group relative rounded-xl overflow-hidden ${bgClass} transition-all duration-300 hover:shadow-[0_8px_32px_rgba(245,166,35,0.15)]`}>
        {/* Image */}
        <div className="relative aspect-square overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
            onClick={() => navigate(`/product/${product.slug}`)}
          />

          {/* HOT Badge */}
          {product.hot && (
            <span className="absolute top-3 left-3 bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded">
              HOT
            </span>
          )}

          {/* Hover Overlay */}
          <div className="absolute inset-x-0 bottom-0 bg-black/80 translate-y-full group-hover:translate-y-0 transition-transform duration-300 p-4">
            {/* Action Buttons */}
            <div className="absolute right-3 top-3 flex flex-col gap-2">
              <button
                onClick={(e) => { e.stopPropagation(); dispatch({ type: 'TOGGLE_COMPARE', productId: product.id }); }}
                className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${isCompared ? 'bg-green-500 text-white' : 'bg-white/20 text-white hover:bg-gold hover:text-black'}`}
                title="Compare"
              >
                {isCompared ? <Check className="w-4 h-4" /> : <GitCompare className="w-4 h-4" />}
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); setShowQuickView(true); }}
                className="w-8 h-8 rounded-full bg-white/20 text-white flex items-center justify-center hover:bg-gold hover:text-black transition-all"
                title="Quick View"
              >
                <Eye className="w-4 h-4" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); dispatch({ type: 'TOGGLE_WISHLIST', productId: product.id }); if (!isWishlisted) navigate('/wishlist'); }}
                className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${isWishlisted ? 'bg-red-500 text-white' : 'bg-white/20 text-white hover:bg-gold hover:text-black'}`}
                title="Add to Wishlist"
              >
                <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-white' : ''}`} />
              </button>
            </div>

            {/* Detail Preview */}
            <div className="pr-12">
              <p className="text-white/90 text-xs leading-relaxed mb-3 line-clamp-4">{product.description}</p>
              <ul className="text-white/70 text-[10px] space-y-1 mb-3 line-clamp-3">
                {product.details.slice(0, 3).map((d, i) => (
                  <li key={i} className="flex items-start gap-1">
                    <Check className="w-2.5 h-2.5 text-gold shrink-0 mt-0.5" />
                    <span className="line-clamp-1">{d}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={(e) => { e.stopPropagation(); dispatch({ type: 'ADD_TO_CART', product }); }}
                className="w-full bg-gold text-black text-xs font-semibold py-2 rounded-lg hover:bg-gold-hover transition-colors"
              >
                ADD TO CART
              </button>
            </div>
          </div>
        </div>

        {/* Info */}
        <div className="p-4 cursor-pointer" onClick={() => navigate(`/product/${product.slug}`)}>
          <h3 className={`${nameClass} font-semibold text-sm mb-1 group-hover:text-gold transition-colors`}>
            {product.name}
          </h3>
          <p className="text-gray-500 text-xs mb-2">{product.subcategory}</p>
          <p className={`${priceClass} font-bold text-lg`}>${product.price.toFixed(2)}</p>
        </div>
      </div>

      {showQuickView && (
        <QuickViewModal product={product} onClose={() => setShowQuickView(false)} />
      )}
    </>
  );
}
