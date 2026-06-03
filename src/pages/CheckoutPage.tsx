import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '@/context/AppContext';
import { ChevronDown } from 'lucide-react';

export default function CheckoutPage() {
  const { state, dispatch } = useApp();
  const navigate = useNavigate();
  const [terms, setTerms] = useState(false);
  const [note, setNote] = useState(false);

  const cartItems = state.cart;
  const total = cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  if (cartItems.length === 0) {
    navigate('/cart');
    return null;
  }

  return (
    <>
      {/* Progress */}
      <div className="bg-black pt-24 pb-8">
        <div className="container-main">
          <h1 className="text-4xl font-bold text-white mb-6">Checkout</h1>
          <div className="flex items-center gap-4 text-sm">
            <span className="text-gray-500">SHOPPING CART</span>
            <span className="text-gray-600">&gt;</span>
            <span className="text-gold font-medium">CHECKOUT</span>
            <span className="text-gray-600">&gt;</span>
            <span className="text-gray-500">ORDER COMPLETE</span>
          </div>
        </div>
      </div>

      {/* Checkout Form */}
      <div className="bg-white py-12 min-h-[60vh]">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left: Form */}
            <div>
              {/* Contact */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact information</h3>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full border rounded-lg px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-gold"
                />
              </div>

              {/* Billing */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Billing address</h3>
                <div className="space-y-4">
                  <select className="w-full border rounded-lg px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-gold">
                    <option>Pakistan</option>
                    <option>United States</option>
                    <option>United Kingdom</option>
                    <option>Canada</option>
                    <option>Australia</option>
                  </select>
                  <div className="grid grid-cols-2 gap-4">
                    <input type="text" placeholder="First name" className="border rounded-lg px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-gold" />
                    <input type="text" placeholder="Last name" className="border rounded-lg px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-gold" />
                  </div>
                  <input type="text" placeholder="Address" className="w-full border rounded-lg px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-gold" />
                  <div className="grid grid-cols-2 gap-4">
                    <input type="text" placeholder="City" className="border rounded-lg px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-gold" />
                    <input type="text" placeholder="State" className="border rounded-lg px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-gold" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <input type="text" placeholder="ZIP code" className="border rounded-lg px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-gold" />
                    <input type="tel" placeholder="Phone" className="border rounded-lg px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-gold" />
                  </div>
                </div>
              </div>

              {/* Note */}
              <div className="mb-8">
                <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                  <input type="checkbox" checked={note} onChange={(e) => setNote(e.target.checked)} className="rounded" />
                  Add a note to your order
                </label>
                {note && (
                  <textarea placeholder="Order note..." rows={3} className="w-full border rounded-lg px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-gold mt-3" />
                )}
              </div>

              {/* Terms */}
              <div className="mb-8">
                <label className="flex items-start gap-2 text-sm text-gray-700 cursor-pointer">
                  <input type="checkbox" checked={terms} onChange={(e) => setTerms(e.target.checked)} className="rounded mt-0.5" />
                  <span>I have read and agree to the website terms and conditions *</span>
                </label>
              </div>

              <button
                onClick={() => {
                  dispatch({ type: 'CLEAR_CART' });
                  navigate('/order-complete');
                }}
                disabled={!terms}
                className="w-full bg-gold text-black font-bold py-4 rounded-lg hover:bg-gold-hover transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Place Order
              </button>
            </div>

            {/* Right: Order Summary */}
            <div>
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Order</h3>

                {/* Coupons */}
                <button className="flex items-center gap-2 text-sm text-gray-600 mb-4 w-full">
                  <ChevronDown className="w-4 h-4" /> Add coupons
                </button>

                {/* Products */}
                <div className="space-y-4 mb-6 pb-6 border-b">
                  {cartItems.map((item) => (
                    <div key={item.product.id} className="flex gap-4">
                      <img src={item.product.image} alt={item.product.name} className="w-16 h-16 object-contain bg-white rounded-lg" />
                      <div className="flex-1">
                        <h4 className="text-sm font-medium text-gray-900">{item.product.name}</h4>
                        <p className="text-xs text-gray-500">{item.product.subcategory}</p>
                        <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                      </div>
                      <span className="text-gold font-bold">${(item.product.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                </div>

                {/* Totals */}
                <div className="flex justify-between items-center mb-4">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium text-gray-900">${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-900 font-semibold">Total</span>
                  <span className="text-xl font-bold text-gold">${total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
