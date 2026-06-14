import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Heading from "../components/Shared/Heading";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cartItems, updateQty, removeFromCart } = useCart();
  const [promoCode, setPromoCode] = useState("");
  const [discountApplied, setDiscountApplied] = useState(false);

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discount = discountApplied ? subtotal * 0.1 : 0;
  const shipping = subtotal > 500 ? 0 : 15;
  const total = subtotal - discount + shipping;

  const handlePromoSubmit = (e) => {
    e.preventDefault();
    if (promoCode.toUpperCase() === "ESTYLE10") {
      setDiscountApplied(true);
    }
  };

  return (
    <div className="pt-24 min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300">
      <div className="container py-8 max-w-6xl">
        <Heading title="Shopping Cart" subtitle="Manage your selected premium items" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-10">
          
          {/* Left Column: Cart items */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            <AnimatePresence>
              {cartItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="flex flex-col sm:flex-row items-center justify-between gap-6 bg-white dark:bg-gray-800 p-6 rounded-3xl border border-gray-100 dark:border-gray-700/50 shadow-sm"
                >
                  {/* Info + Image */}
                  <div className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto">
                    <div className="w-20 h-20 p-2 bg-gray-50 dark:bg-gray-900/40 rounded-2xl flex items-center justify-center border border-gray-100 dark:border-gray-800">
                      <img src={item.img} alt={item.name} className="max-h-full max-w-full object-contain" />
                    </div>
                    <div className="text-center sm:text-left">
                      <h4 className="font-bold text-lg text-gray-850 dark:text-white">{item.name}</h4>
                      <p className="text-xs text-gray-400 capitalize mt-1">Category: {item.category}</p>
                      <p className="text-xs text-gray-400 mt-1">Color: <span className="font-semibold text-gray-600 dark:text-gray-200">{item.color}</span></p>
                    </div>
                  </div>

                  {/* Quantity & Pricing details */}
                  <div className="flex items-center justify-between sm:justify-end gap-12 w-full sm:w-auto">
                    
                    {/* Qty Selector */}
                    <div className="flex items-center border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden bg-gray-50 dark:bg-gray-900/40">
                      <button
                        onClick={() => updateQty(item.id, -1)}
                        className="px-2.5 py-1 hover:bg-gray-150 dark:hover:bg-gray-700 font-bold transition-all text-sm"
                      >
                        -
                      </button>
                      <span className="px-3 font-bold text-xs">{item.quantity}</span>
                      <button
                        onClick={() => updateQty(item.id, 1)}
                        className="px-2.5 py-1 hover:bg-gray-150 dark:hover:bg-gray-700 font-bold transition-all text-sm"
                      >
                        +
                      </button>
                    </div>

                    {/* Price */}
                    <div className="text-right">
                      <p className="font-extrabold text-lg text-primary">${item.price * item.quantity}</p>
                      {item.quantity > 1 && (
                        <p className="text-xs text-gray-400 mt-1">${item.price} each</p>
                      )}
                    </div>

                    {/* Remove */}
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-gray-400 hover:text-red-500 transition-colors text-xl font-bold"
                    >
                      &times;
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {cartItems.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16 bg-white dark:bg-gray-800 rounded-3xl p-6 border border-gray-100 dark:border-gray-700/50 shadow-sm"
              >
                <p className="text-xl font-bold text-gray-500 dark:text-gray-400">Your shopping cart is empty</p>
                <Link to="/shop" className="mt-4 inline-block bg-primary text-white px-6 py-2.5 rounded-full font-bold">
                  Discover Products
                </Link>
              </motion.div>
            )}
          </div>

          {/* Right Column: Checkout Summary */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-3xl border border-gray-100 dark:border-gray-700/50 shadow-sm">
              <h3 className="text-xl font-extrabold mb-6">Order Summary</h3>

              <div className="space-y-4 text-sm">
                <div className="flex justify-between pb-2 border-b border-gray-550 dark:border-gray-700/40">
                  <span className="text-gray-500 dark:text-gray-400">Subtotal</span>
                  <span className="font-bold">${subtotal}</span>
                </div>
                {discountApplied && (
                  <div className="flex justify-between pb-2 border-b border-gray-550 dark:border-gray-700/40 text-green-500">
                    <span>Discount (10%)</span>
                    <span className="font-bold">-${discount.toFixed(0)}</span>
                  </div>
                )}
                <div className="flex justify-between pb-2 border-b border-gray-550 dark:border-gray-700/40">
                  <span className="text-gray-500 dark:text-gray-400">Shipping</span>
                  <span className="font-bold">{shipping === 0 ? "Free" : `$${shipping}`}</span>
                </div>
                <div className="flex justify-between text-lg font-black pt-2">
                  <span>Total</span>
                  <span className="text-primary">${total}</span>
                </div>
              </div>

              {/* Promo code */}
              <form onSubmit={handlePromoSubmit} className="mt-8">
                <label className="block text-xs font-bold uppercase text-gray-400 mb-2">Promo Code</label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    placeholder="ESTYLE10"
                    disabled={discountApplied}
                    className="flex-grow px-3 py-2 text-sm rounded-xl border border-gray-200 dark:border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-primary uppercase disabled:opacity-50"
                  />
                  <button
                    type="submit"
                    disabled={discountApplied}
                    className="px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold rounded-xl text-xs hover:scale-105 active:scale-95 transition-all disabled:opacity-50"
                  >
                    Apply
                  </button>
                </div>
                {discountApplied && (
                  <p className="text-xs text-green-500 font-semibold mt-2">10% discount successfully applied!</p>
                )}
              </form>

              {/* Checkout CTA */}
              <button
                disabled={cartItems.length === 0}
                className="w-full mt-8 py-4 bg-primary text-white font-bold rounded-2xl hover:scale-[1.01] active:scale-[0.99] transition-transform duration-200 shadow-lg shadow-primary/20 disabled:opacity-50"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Cart;
