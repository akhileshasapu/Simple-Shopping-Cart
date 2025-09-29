import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { checkout } from "../api/productApi";

const Cart = () => {
  const { cartItems, removeFromCart, clearCart, updateQuantity } = useContext(CartContext);
  const [showSuccess, setShowSuccess] = useState(false);

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleCheckout = async () => {
    try {
      const itemsObj = {};
      cartItems.forEach(item => (itemsObj[item.id] = item.quantity));
      await checkout(itemsObj);

      clearCart();
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    } catch (err) {
      console.error(err);
      alert("Checkout failed!");
    }
  };

  const handleIncrement = (id) => updateQuantity(id, 1);
  const handleDecrement = (id) => updateQuantity(id, -1);

  return (
    <>
      {showSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
          <div className="bg-gradient-to-r from-green-400 via-green-300 to-green-500 rounded-3xl p-8 flex flex-col items-center animate-pop">
            <div className="text-6xl mb-4 animate-bounce">🎉</div>
            <h2 className="text-3xl font-bold text-white mb-2">Checkout Successful!</h2>
            <p className="text-white font-semibold text-center">
              Your order has been placed successfully.
            </p>
          </div>
        </div>
      )}

      <div className="bg-gradient-to-b from-white via-purple-50 to-white rounded-3xl shadow-2xl p-6 w-full max-w-md mx-auto animate-fade-in">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">🛒 Your Cart</h2>

        {cartItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
              alt="Empty Cart"
              className="w-32 h-32 mb-4 animate-bounce"
            />
            <p className="text-gray-500 text-lg text-center">Your cart is empty!</p>
          </div>
        ) : (
          <>
            {/* ✅ Scrollable cart items list */}
            <div className="max-h-80 overflow-y-auto pr-2">
              {cartItems.map(item => (
                <div
                  key={item.id}
                  className="flex justify-between items-center mb-4 p-3 border-b border-gray-200 hover:bg-purple-50 rounded-lg transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <img src={item.imageUrl} alt={item.name} className="w-16 h-16 object-cover rounded" />
                    <div className="flex flex-col">
                      <p className="font-semibold text-gray-800">{item.name}</p>
                      <p className="text-gray-600 text-sm">₹{item.price} each</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleDecrement(item.id)}
                      className="bg-gray-200 px-2 rounded hover:bg-gray-300 transition"
                      aria-label={`Decrease quantity of ${item.name}`}
                    >
                      -
                    </button>
                    <span className="px-2 font-semibold transition-transform duration-300 ease-out transform scale-100">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => handleIncrement(item.id)}
                      className="bg-gray-200 px-2 rounded hover:bg-gray-300 transition"
                      aria-label={`Increase quantity of ${item.name}`}
                    >
                      +
                    </button>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-700 font-semibold ml-2"
                      aria-label={`Remove ${item.name} from cart`}
                    >
                      ✕
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* ✅ Sticky total + actions */}
            <div className="mt-6 flex flex-col gap-3  bottom-0 bg-white bg-opacity-90 pt-4">
              <h3 className="text-lg font-bold text-gray-800 text-right">Total: ₹{total}</h3>
              <div className="flex gap-4 justify-end">
                <button
                  onClick={clearCart}
                  className="bg-red-500 text-white py-2 px-4 rounded-full font-semibold shadow-lg hover:bg-red-600 transition-all duration-300"
                >
                  Clear Cart
                </button>
                <button
                  onClick={handleCheckout}
                  className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 px-4 rounded-full font-semibold shadow-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
                >
                  Checkout
                </button>
              </div>
            </div>
          </>
        )}
      </div>

      <style>
        {`
          @keyframes pop {
            0% { transform: scale(0); opacity: 0; }
            50% { transform: scale(1.1); opacity: 1; }
            100% { transform: scale(1); opacity: 1; }
          }
          .animate-pop { animation: pop 0.5s ease-in-out forwards; }
        `}
      </style>
    </>
  );
};

export default Cart;
