import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem('dk_studio_cart');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('dk_studio_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item) => {
    setCartItems((prev) => {
      // Avoid duplicate pictures or services in inquiry
      if (prev.some((i) => i.id === item.id && i.category === item.category)) {
        return prev;
      }
      return [...prev, item];
    });
  };

  const removeFromCart = (itemId, itemCategory) => {
    setCartItems((prev) => prev.filter((i) => !(i.id === itemId && i.category === itemCategory)));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
