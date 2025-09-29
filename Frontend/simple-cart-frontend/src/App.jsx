import React, { useState } from "react";
import ProductGrid from "./components/ProductGrid";
import Cart from "./components/Cart";

function App() {
  const [cartView, setCartView] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-pink-50 to-yellow-50 p-6 relative">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-900 drop-shadow-lg">
        Simple Shopping Cart
      </h1>

      <div className="flex justify-end mb-6">
        <button
          className="flex items-center gap-2 bg-yellow-400 text-gray-900 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-yellow-500 hover:scale-105 transform transition-all duration-300"
          onClick={() => setCartView(true)}
        >
          🛒 View Cart
        </button>
      </div>

      <ProductGrid />
  
      {cartView && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-30 z-40"
            onClick={() => setCartView(false)}
          ></div>
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-lg p-6 bg-white rounded-2xl shadow-2xl z-50 animate-fade-in">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-gray-800">Your Cart</h2>
              <button
                className="text-gray-600 hover:text-gray-900 text-xl font-bold"
                onClick={() => setCartView(false)}
              >
                ✕
              </button>
            </div>
            <Cart />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
