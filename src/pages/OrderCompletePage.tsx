import { useNavigate } from 'react-router-dom';

export default function OrderCompletePage() {
  const navigate = useNavigate();

  return (
    <>
      {/* Progress */}
      <div className="bg-black pt-24 pb-8">
        <div className="container-main">
          <h1 className="text-4xl font-bold text-white mb-6">Order Complete</h1>
          <div className="flex items-center gap-4 text-sm">
            <span className="text-gray-500">SHOPPING CART</span>
            <span className="text-gray-600">&gt;</span>
            <span className="text-gray-500">CHECKOUT</span>
            <span className="text-gray-600">&gt;</span>
            <span className="text-gold font-medium">ORDER COMPLETE</span>
          </div>
        </div>
      </div>

      {/* Thank You */}
      <div className="bg-white py-16 min-h-[60vh]">
        <div className="container-main max-w-2xl">
          <div className="text-center mb-8">
            <div className="border border-gold rounded-xl p-8 inline-block">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Thank you. Your order has been received.</h2>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 mb-8">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-gray-500 text-sm mb-1">Order number</p>
                <p className="font-semibold text-gray-900">1835</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm mb-1">Date</p>
                <p className="font-semibold text-gray-900">May 27, 2026</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm mb-1">Total</p>
                <p className="font-semibold text-gold">$0.00</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 mb-8">
            <h3 className="font-semibold text-gray-900 mb-4">Order details</h3>
            <div className="flex justify-between items-center py-3 border-b">
              <span className="text-gray-600">Product</span>
              <span className="text-gray-600">Subtotal</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b">
              <span className="text-gray-900">Your Order Details × 1</span>
              <span className="text-gray-900">$0.00</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b">
              <span className="font-medium text-gray-900">Subtotal</span>
              <span className="text-gray-900">$0.00</span>
            </div>
            <div className="flex justify-between items-center py-3">
              <span className="font-bold text-gray-900">Total</span>
              <span className="font-bold text-gold">$0.00</span>
            </div>

            <div className="mt-6 p-4 bg-white rounded-lg">
              <p className="text-gray-600 text-sm">Note: This is just a test</p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="font-semibold text-gray-900 mb-4">Billing address</h3>
            <p className="text-gray-600 text-sm">Dynaw Industry</p>
            <p className="text-gray-600 text-sm">Dynaw Indsutry@gmail.com</p>
            <p className="text-gray-600 text-sm">+92 3230612143</p>
          </div>

          <div className="text-center mt-8">
            <button onClick={() => navigate('/')} className="btn-gold">Back to Home</button>
          </div>
        </div>
      </div>
    </>
  );
}
