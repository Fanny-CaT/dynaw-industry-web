import { useState } from 'react';
import { X, Minus, Plus, Facebook, Twitter, Linkedin, Mail } from 'lucide-react';
import type { Product } from '@/types';
import { useApp } from '@/context/AppContext';

interface QuickViewModalProps {
  product: Product;
  onClose: () => void;
}

export default function QuickViewModal({ product, onClose }: QuickViewModalProps) {
  const { dispatch } = useApp();
  const [qty, setQty] = useState(1);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/70" />
      <div
        className="relative bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 bg-gold rounded-full flex items-center justify-center text-black hover:bg-gold-hover transition-colors z-10"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="grid md:grid-cols-2 gap-8 p-8">
          {/* Image */}
          <div className="bg-gray-50 rounded-xl p-6 flex items-center justify-center">
            <img src={product.image} alt={product.name} className="max-w-full max-h-80 object-contain" />
          </div>

          {/* Details */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h2>
            <p className="text-gold text-2xl font-bold mb-4">${product.price.toFixed(2)}</p>

            <div className="mb-4">
              <h4 className="font-semibold text-gray-900 mb-2">Detail:</h4>
              <ul className="text-gray-600 text-sm space-y-1">
                {product.details.slice(0, 5).map((d, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-gold mt-1">-</span>
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Add to Cart */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center border rounded-lg overflow-hidden">
                <button onClick={() => setQty(Math.max(1, qty - 1))} className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-100">
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-12 h-10 flex items-center justify-center font-semibold text-gray-900 border-x">{qty}</span>
                <button onClick={() => setQty(qty + 1)} className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-100">
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <button
                onClick={() => { dispatch({ type: 'ADD_TO_CART', product, quantity: qty }); onClose(); }}
                className="flex-1 bg-gold text-black font-semibold py-3 rounded-lg hover:bg-gold-hover transition-colors"
              >
                ADD TO CART
              </button>
            </div>

            {/* Meta */}
            <div className="text-sm text-gray-600 space-y-1 mb-4">
              <p><span className="font-medium">SKU:</span> {product.sku}</p>
              <p><span className="font-medium">Categories:</span> {product.subcategory}, {product.category}</p>
            </div>

            {/* Social Share */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600 mr-2">Share:</span>
              {[Facebook, Twitter, Linkedin, Mail].map((Icon, i) => (
                <button key={i} className="w-8 h-8 rounded-full border flex items-center justify-center text-gray-400 hover:text-gold hover:border-gold transition-colors">
                  <Icon className="w-3.5 h-3.5" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
