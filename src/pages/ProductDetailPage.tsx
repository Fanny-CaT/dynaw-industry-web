import { useState, useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ProductCard from '@/components/ProductCard';
import { products, relatedProducts } from '@/data/products';
import { useApp } from '@/context/AppContext';
import { Minus, Plus, Star, Check, Facebook, Twitter, Linkedin, Mail } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function ProductDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const { dispatch } = useApp();
  const [qty, setQty] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [activeTab, setActiveTab] = useState<'description' | 'reviews' | 'shipping'>('description');
  const [rating, setRating] = useState(0);
  const [reviewForm, setReviewForm] = useState({ name: '', email: '', review: '' });
  const relatedRef = useRef<HTMLDivElement>(null);

  const product = products.find(p => p.slug === slug) || products[3];
  const currentImage = product.images[activeImage] || product.image;

  useEffect(() => {
    if (!relatedRef.current) return;
    const cards = relatedRef.current.children;
    gsap.fromTo(cards, { y: 30, opacity: 0 }, {
      y: 0, opacity: 1, stagger: 0.1, duration: 0.6, ease: 'power3.out',
      scrollTrigger: { trigger: relatedRef.current, start: 'top 85%', once: true },
    });
  }, []);

  return (
    <>
      {/* Top: White bg */}
      <div className="bg-white pt-12 pb-12">
        <div className="container-main">
          {/* Breadcrumb */}
          <p className="text-gray-500 text-sm mb-6">Dynaw Industry &gt; {product.category} &gt; {product.subcategory} &gt; {product.name}</p>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Gallery */}
            <div>
              <div className="bg-gray-50 rounded-xl p-8 mb-4">
                <img src={currentImage} alt={product.name} className="w-full max-h-96 object-contain mx-auto" />
              </div>
              <div className="flex gap-3">
                {product.images.map((img, i) => (
                  <button key={i} onClick={() => setActiveImage(i)} className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${activeImage === i ? 'border-gold' : 'border-transparent'}`}>
                    <img src={img} alt="" className="w-full h-full object-contain bg-gray-50" />
                  </button>
                ))}
              </div>
            </div>

            {/* Details */}
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
              <p className="text-gold text-3xl font-bold mb-6">${product.price.toFixed(2)}</p>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Detail:</h4>
                <ul className="text-gray-600 text-sm space-y-2">
                  {product.details.map((d, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-gold shrink-0 mt-0.5" />
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
                  <span className="w-12 h-10 flex items-center justify-center font-semibold border-x">{qty}</span>
                  <button onClick={() => setQty(qty + 1)} className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-100">
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                <button
                  onClick={() => dispatch({ type: 'ADD_TO_CART', product, quantity: qty })}
                  className="flex-1 bg-gold text-black font-bold py-3 rounded-lg hover:bg-gold-hover transition-colors"
                >
                  ADD TO CART
                </button>
              </div>

              <div className="flex gap-4 mb-6 text-sm text-gray-600">
                <button className="flex items-center gap-2 hover:text-gold transition-colors">
                  <Check className="w-4 h-4" /> Compare
                </button>
                <button className="flex items-center gap-2 hover:text-gold transition-colors">
                  <Check className="w-4 h-4" /> Add to wishlist
                </button>
              </div>

              <div className="text-sm text-gray-600 space-y-1">
                <p><span className="font-medium">SKU:</span> {product.sku}</p>
                <p><span className="font-medium">Categories:</span> {product.subcategory}, {product.category}</p>
              </div>

              <div className="flex items-center gap-2 mt-4">
                <span className="text-sm text-gray-600">Share:</span>
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

      {/* Tabs Section */}
      <div className="bg-white border-t">
        <div className="container-main py-8">
          <div className="flex border-b mb-6">
            {(['description', 'reviews', 'shipping'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 font-medium capitalize transition-colors ${
                  activeTab === tab ? 'text-gold border-b-2 border-gold' : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab} {tab === 'reviews' && '(0)'}
              </button>
            ))}
          </div>

          {activeTab === 'description' && (
            <div>
              <h4 className="font-semibold mb-3">Detail:</h4>
              <ul className="text-gray-600 text-sm space-y-2">
                {product.details.map((d, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {activeTab === 'reviews' && (
            <div>
              <div className="bg-gray-50 rounded-lg p-6 mb-6 text-center">
                <p className="text-gray-500 mb-4">There are no reviews yet.</p>
                <button className="bg-gold text-black font-semibold px-6 py-2 rounded-lg hover:bg-gold-hover transition-colors">
                  Be the first to review &quot;{product.name}&quot;
                </button>
              </div>

              <div className="max-w-xl">
                <h4 className="font-semibold text-lg mb-4">ADD YOUR REVIEW</h4>
                <p className="text-sm text-gray-500 mb-4">Your email address will not be published. Required fields are marked *</p>

                <div className="mb-4">
                  <label className="text-sm text-gray-600 mb-2 block">Your rating *</label>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <button key={s} onClick={() => setRating(s)}>
                        <Star className={`w-6 h-6 ${s <= rating ? 'text-gold fill-gold' : 'text-gray-300'}`} />
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <textarea
                    placeholder="Your Review *"
                    className="w-full border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold"
                    rows={4}
                    value={reviewForm.review}
                    onChange={(e) => setReviewForm({ ...reviewForm, review: e.target.value })}
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Name *"
                      className="border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold"
                      value={reviewForm.name}
                      onChange={(e) => setReviewForm({ ...reviewForm, name: e.target.value })}
                    />
                    <input
                      type="email"
                      placeholder="Email *"
                      className="border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold"
                      value={reviewForm.email}
                      onChange={(e) => setReviewForm({ ...reviewForm, email: e.target.value })}
                    />
                  </div>
                  <button className="bg-gold text-black font-semibold px-8 py-3 rounded-lg hover:bg-gold-hover transition-colors">
                    SUBMIT
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'shipping' && (
            <div className="text-gray-600">
              <p>We offer worldwide shipping through our trusted logistics partners. Delivery times vary by location:</p>
              <ul className="list-disc list-inside mt-4 space-y-2">
                <li>North America: 5-7 business days</li>
                <li>Europe: 7-10 business days</li>
                <li>Asia: 5-8 business days</li>
                <li>Rest of world: 10-15 business days</li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Related Products */}
      <div className="bg-white py-16 border-t">
        <div className="container-main">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">RELATED PRODUCTS</h2>
          <div ref={relatedRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} variant="light" />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
