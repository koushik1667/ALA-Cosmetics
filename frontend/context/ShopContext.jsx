'use client';

import { createContext, useContext, useMemo, useState } from 'react';

const ShopContext = createContext();

export function ShopProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const addToCart = (product, quantity = 1) => {
    setCart((current) => {
      const found = current.find((item) => item.id === product.id);
      if (found) {
        return current.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item));
      }
      return [...current, { ...product, quantity }];
    });
  };

  const updateQuantity = (id, quantity) => {
    setCart((current) => current.map((item) => (item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item)));
  };

  const removeFromCart = (id) => setCart((current) => current.filter((item) => item.id !== id));

  const toggleWishlist = (product) => {
    setWishlist((current) => (current.some((item) => item.id === product.id) ? current.filter((item) => item.id !== product.id) : [...current, product]));
  };

  const totals = useMemo(() => {
    const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const tax = subtotal * 0.08;
    const shipping = subtotal > 50 ? 0 : 6;
    return { subtotal, tax, shipping, total: subtotal + tax + shipping };
  }, [cart]);

  return (
    <ShopContext.Provider value={{ cart, wishlist, addToCart, updateQuantity, removeFromCart, toggleWishlist, totals }}>
      {children}
    </ShopContext.Provider>
  );
}

export const useShop = () => useContext(ShopContext);
