import React, { createContext, useState, useContext } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Boat Bassheads",
      price: 120,
      category: "Headphones",
      img: "/src/assets/product/p-1.jpg",
      quantity: 1,
      color: "Red"
    }
  ]);

  const addToCart = (product, qty = 1, color = "Default") => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id && item.color === color);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id && item.color === color
            ? { ...item, quantity: item.quantity + qty }
            : item
        );
      }
      return [
        ...prevItems,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          category: product.category,
          img: product.img,
          quantity: qty,
          color: color
        }
      ];
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const updateQty = (id, delta) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
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
