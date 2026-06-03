import { useNavigate } from 'react-router-dom';
import { useApp } from '@/context/AppContext';
import { Trash2, Minus, Plus, ChevronDown } from 'lucide-react';

export default function CartPage() {
  const { state, dispatch } = useApp();
  const navigate = useNavigate();
  const cartItems = state.cart;
  const total = cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  return (
    <>
      {/* Progress */}
      <div className="bg-black pt-24 pb-8">
        <div className="container-main">
          <h1 className="text-4xl font-bold text-white mb-6">Shopping Cart</h1>
          <div className="flex items-center gap-4 text-sm">
            <span className="text-gold font-medium">SHOPPING CART</span>
            <span className="text-gray-600">&gt;</span>
            <span className="text-gray-500">CHECKOUT</span>
            <span className="text-gray-600">&gt;</span>
            <span className="text-gray-500">ORDER COMPLETE</span>
          </div>
        </div>
      </div>

      {/* Cart Content */}
      <div className="bg-white py-12 min-h-[60vh]">
        <div className="container-main">
          {cartItems.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg mb-4">Your cart is empty</p>
              <button onClick={() => navigate('/products')} className="btn-gold">Continue Shopping</button>
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4">
                {cartItems.map((item) => (
                  <div key={item.product.id} className="flex gap-4 bg-gray-50 rounded-xl p-4">
                    <img src={item.product.image} alt={item.product.name} className="w-24 h-24 object-contain bg-white rounded-lg" />
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">{item.product.name}</h4>
                      <p className="text-gray-500 text-sm mb-2">{item.product.subcategory}</p>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center border rounded-lg overflow-hidden">
                          <button onClick={() => dispatch({ type: 'UPDATE_CART_QUANTITY', productId: item.product.id, quantity: item.quantity - 1 })} className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-100">
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-10 h-8 flex items-center justify-center text-sm font-medium border-x">{item.quantity}</span>
                          <button onClick={() => dispatch({ type: 'UPDATE_CART_QUANTITY', productId: item.product.id, quantity: item.quantity + 1 })} className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-100">
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <span className="text-gold font-bold">${(item.product.price * item.quantity).toFixed(2)}</span>
                      </div>
                    </div>
                    <button
                      onClick={() => dispatch({ type: 'REMOVE_FROM_CART', productId: item.product.id })}
                      className="text-gray-400 hover:text-red-500 transition-colors"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                ))}
              </div>

              {/* Cart Totals */}
              <div>
                <div className="bg-gray-50 rounded-xl p-6">
                  <button className="flex items-center gap-2 text-sm text-gray-600 mb-6 w-full">
                    <ChevronDown className="w-4 h-4" /> Add coupons
                  </button>

                  <div className="flex justify-between items-center mb-6 pb-4 border-b">
                    <span className="font-semibold text-gray-900">Estimated total</span>
                    <span className="text-xl font-bold text-gold">${total.toFixed(2)}</span>
                  </div>

                  <button
                    onClick={() => navigate('/checkout')}
                    className="w-full bg-gold text-black font-bold py-4 rounded-lg hover:bg-gold-hover transition-colors"
                  >
                    Proceed to Checkout
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
