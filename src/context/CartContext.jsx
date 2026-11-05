import React, { createContext, useState, useContext, useEffect } from "react";
import { ShopProducts } from "../data/products";

const CartContext = createContext();
const STORAGE_KEY = "estyle-cart";

export const useCart = () => useContext(CartContext);

const loadCart = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const items = raw ? JSON.parse(raw) : [];
    // Re-resolve product data so stale asset URLs from older builds never break images.
    return items
      .map((item) => {
        const product = ShopProducts.find((p) => p.id === item.id);
        return product ? { ...item, name: product.name, price: product.price, img: product.img } : null;
      })
      .filter(Boolean);
  } catch {
    return [];
  }
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(loadCart);

  useEffect(() => {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(cartItems)); } catch { /* ignore */ }
  }, [cartItems]);

  const addToCart = (product, qty = 1, color = "Default") => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id && item.color === color);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id && item.color === color ? { ...item, quantity: item.quantity + qty } : item
        );
      }
      return [
        ...prevItems,
        { id: product.id, name: product.name, price: product.price, category: product.category, img: product.img, quantity: qty, color },
      ];
    });
  };

  const removeFromCart = (id, color) => {
    setCartItems((prevItems) => prevItems.filter((item) => !(item.id === id && (color === undefined || item.color === color))));
  };

  const updateQty = (id, delta, color) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && (color === undefined || item.color === color)
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQty, cartCount }}>
      {children}
    </CartContext.Provider>
  );
};
