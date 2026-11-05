import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiMinus, FiPlus, FiTrash2, FiLock, FiTruck, FiArrowLeft, FiTag } from "react-icons/fi";
import PageHeader from "../components/Shared/PageHeader";
import { useCart } from "../context/CartContext";
import EmptyCart from "../assets/illustrations/empty-cart.svg";

const FREE_SHIP = 500;

const Cart = () => {
  const { cartItems, updateQty, removeFromCart, cartCount } = useCart();
  const [promoCode, setPromoCode] = useState("");
  const [discountApplied, setDiscountApplied] = useState(false);
  const [promoError, setPromoError] = useState("");

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discount = discountApplied ? subtotal * 0.1 : 0;
  const shipping = subtotal >= FREE_SHIP || subtotal === 0 ? 0 : 15;
  const total = subtotal - discount + shipping;
  const progress = Math.min(100, (subtotal / FREE_SHIP) * 100);

  const handlePromoSubmit = (e) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === "ESTYLE10") { setDiscountApplied(true); setPromoError(""); }
    else setPromoError("That code isn't valid.");
  };

  return (
    <div>
      <PageHeader title="Your cart" description={cartCount ? `${cartCount} item${cartCount > 1 ? "s" : ""} ready for checkout.` : undefined} crumbs={[{ label: "Cart" }]} />
      <div className="container py-10">
        {cartItems.length === 0 ? (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="card mx-auto max-w-lg px-6 py-14 text-center">
            <img src={EmptyCart} alt="" className="mx-auto w-56" />
            <h2 className="mt-6 text-2xl font-extrabold">Your cart is empty</h2>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Looks like you haven't added anything yet. Let's fix that.</p>
            <Link to="/shop" className="btn-primary mt-8">Start shopping</Link>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            <div className="lg:col-span-8">
              {/* Free shipping progress */}
              <div className="card mb-6 p-5">
                <p className="flex items-center gap-2 text-sm font-medium">
                  <FiTruck className="text-primary" />
                  {subtotal >= FREE_SHIP ? "You've unlocked free shipping!" : <>Add <b>${FREE_SHIP - subtotal}</b> more for free shipping</>}
                </p>
                <div className="mt-3 h-2 overflow-hidden rounded-full bg-gray-100 dark:bg-white/10">
                  <motion.div className="h-full rounded-full bg-gradient-to-r from-primary-500 to-orange-400" initial={{ width: 0 }} animate={{ width: `${progress}%` }} />
                </div>
              </div>

              <div className="card divide-y divide-gray-100 dark:divide-white/5">
                <AnimatePresence initial={false}>
                  {cartItems.map((item) => (
                    <motion.div
                      key={`${item.id}-${item.color}`}
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0, height: 0 }}
                      className="flex gap-4 p-5 sm:items-center sm:gap-6"
                    >
                      <Link to={`/product/${item.id}`} className="flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-gray-50 p-2 dark:bg-ink-700">
                        <img src={item.img} alt={item.name} className="max-h-full max-w-full object-contain mix-blend-multiply dark:mix-blend-normal" />
                      </Link>
                      <div className="flex flex-1 flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                          <Link to={`/product/${item.id}`} className="font-semibold hover:text-primary">{item.name}</Link>
                          <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">{item.category}{item.color !== "Default" && ` · ${item.color}`}</p>
                          <p className="mt-1 text-sm font-medium text-gray-500 sm:hidden">${item.price}</p>
                        </div>
                        <div className="flex items-center justify-between gap-6">
                          <div className="flex items-center rounded-full border border-gray-200 dark:border-white/10">
                            <button onClick={() => updateQty(item.id, -1, item.color)} className="flex h-9 w-9 items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-white/10" aria-label="Decrease quantity"><FiMinus /></button>
                            <span className="w-8 text-center text-sm font-semibold">{item.quantity}</span>
                            <button onClick={() => updateQty(item.id, 1, item.color)} className="flex h-9 w-9 items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-white/10" aria-label="Increase quantity"><FiPlus /></button>
                          </div>
                          <p className="w-20 text-right font-bold">${item.price * item.quantity}</p>
                          <button onClick={() => removeFromCart(item.id, item.color)} className="icon-btn hover:text-primary" aria-label={`Remove ${item.name}`}><FiTrash2 /></button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
              <Link to="/shop" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-primary dark:text-gray-300"><FiArrowLeft /> Continue shopping</Link>
            </div>

            <div className="lg:col-span-4">
              <div className="card sticky top-28 p-6">
                <h3 className="text-lg font-bold">Order summary</h3>
                <dl className="mt-6 space-y-3 text-sm">
                  <div className="flex justify-between"><dt className="text-gray-500 dark:text-gray-400">Subtotal</dt><dd className="font-semibold">${subtotal}</dd></div>
                  {discountApplied && <div className="flex justify-between text-brandGreen"><dt>Discount (10%)</dt><dd className="font-semibold">−${discount.toFixed(2)}</dd></div>}
                  <div className="flex justify-between"><dt className="text-gray-500 dark:text-gray-400">Shipping</dt><dd className="font-semibold">{shipping === 0 ? "Free" : `$${shipping}`}</dd></div>
                  <div className="flex justify-between border-t border-gray-100 pt-4 text-lg font-extrabold dark:border-white/5"><dt>Total</dt><dd>${total.toFixed(2)}</dd></div>
                </dl>

                <form onSubmit={handlePromoSubmit} className="mt-6">
                  <div className="relative flex gap-2">
                    <FiTag className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input type="text" value={promoCode} onChange={(e) => setPromoCode(e.target.value)} placeholder="Promo code" disabled={discountApplied} className="input pl-10 uppercase disabled:opacity-50" />
                    <button type="submit" disabled={discountApplied} className="btn-dark rounded-xl px-4">Apply</button>
                  </div>
                  {discountApplied && <p className="mt-2 text-xs font-semibold text-brandGreen">ESTYLE10 applied — you saved ${discount.toFixed(2)}</p>}
                  {promoError && !discountApplied && <p className="mt-2 text-xs font-semibold text-primary">{promoError}</p>}
                </form>

                <button className="btn-primary mt-6 w-full py-4">Proceed to checkout</button>
                <p className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-500"><FiLock /> Secure, encrypted checkout</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
