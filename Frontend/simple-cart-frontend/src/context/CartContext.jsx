import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const stored = localStorage.getItem("cart");
    return stored ? JSON.parse(stored) : [];
  });

  const [toast, setToast] = useState(null); 

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const showToast = (message) => {
    setToast(message);
    setTimeout(() => setToast(null), 3000); 
  };

  const addToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        showToast(`${product.name} quantity increased!`);
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        showToast(`${product.name} added to cart!`);
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => {
      const item = prev.find((i) => i.id === id);
      if (item) showToast(`${item.name} removed from cart!`);
      return prev.filter((item) => item.id !== id);
    });
  };

  const clearCart = () => {
    if (cartItems.length > 0) showToast("Cart cleared!");
    setCartItems([]);
  };

  const updateQuantity = (id, count) => {
    setCartItems((prev) => {
      const updated = prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + count } : item
        )
        .filter((item) => item.quantity > 0); 
      const item = prev.find((i) => i.id === id);
      if (item) showToast(`${item.name} quantity updated!`);
      return updated;
    });
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, clearCart, updateQuantity }}
    >
      {children}

      
      {toast && (
        <div className="fixed top-12 right-10 bg-green-500 text-white px-6 py-3 rounded shadow-lg animate-bounce">
          {toast}
        </div>
      )}
    </CartContext.Provider>
  );
};
