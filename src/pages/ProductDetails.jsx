import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ShopProducts } from "../data/products";
import { useCart } from "../context/CartContext";
import Rating from "../components/Shared/Rating";
import ProductCard from "../components/Products/ProductCard";
import { FiShoppingBag, FiTruck, FiRefreshCcw, FiShield, FiCheck } from "react-icons/fi";

const ProductDetails = () => {
  const { id } = useParams();
  const product = ShopProducts.find((p) => p.id === Number(id));
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("Default");
  const [activeTab, setActiveTab] = useState("specs");
  const [added, setAdded] = useState(false);

  const { addToCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="pt-24 min-h-[70vh] text-center flex flex-col justify-center items-center">
        <h2 className="text-3xl font-bold mb-4">Product Not Found</h2>
        <Link to="/shop" className="btn-primary">
          Back to Shop
        </Link>
      </div>
    );
  }

  const relatedProducts = ShopProducts.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 4);

  return (
    <div className="pt-24 min-h-screen bg-gray-50/60 dark:bg-ink-900">
      <div className="container py-10">

        {/* Breadcrumbs */}
        <div className="text-sm text-gray-500 mb-6 flex gap-2 items-center">
          <Link to="/" className="hover:text-primary">Home</Link> /
          <Link to="/shop" className="hover:text-primary">Shop</Link> /
          <span className="font-semibold text-ink-900 dark:text-gray-100 truncate max-w-[200px]">{product.name}</span>
        </div>

        {/* Product Info Block */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white dark:bg-ink-800 p-6 md:p-10 rounded-3xl border border-gray-100 dark:border-white/5 shadow-soft">

          {/* Left: Gallery & Zoom Display */}
          <div className="flex flex-col items-center">
            <motion.div
              className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-ink-700 dark:to-ink-800 p-8 rounded-3xl aspect-square flex items-center justify-center w-full max-w-[480px] border border-gray-100 dark:border-white/5 relative overflow-hidden"
              whileHover={{ scale: 1.02 }}
            >
              {/* Product Badge */}
              {product.isNew && (
                <span className="absolute top-4 left-4 z-10 bg-primary text-white text-xs px-2.5 py-1 rounded-full font-bold uppercase tracking-wider">
                  New
                </span>
              )}
              <img
                key={product.id}
                src={product.img}
                alt={product.name}
                className="w-full h-full max-h-[340px] object-contain drop-shadow-xl rounded-2xl"
              />
            </motion.div>

            {/* Gallery Thumbnails */}
            <div className="flex gap-4 mt-6">
              {[1, 2, 3].map((thumb) => (
                <button
                  key={thumb}
                  className={`w-16 h-16 p-2 rounded-xl border-2 transition-all bg-gray-50 dark:bg-ink-700 ${thumb === 1 ? "border-primary scale-105" : "border-gray-100 dark:border-white/5 opacity-60 hover:opacity-100"
                    }`}
                >
                  <img src={product.img} alt="" className="w-full h-full object-contain" />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Info & Actions */}
          <div className="flex flex-col justify-between">
            <div>
              {/* Category */}
              <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full w-fit">
                {product.category}
              </span>

              {/* Title */}
              <h1 className="text-3xl md:text-4xl font-extrabold mt-4 mb-2 leading-tight">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <Rating value={product.rating} />
                <span className="text-sm font-semibold text-gray-500 dark:text-gray-400">
                  {product.rating} ({Math.floor(product.rating * 12)} reviews)
                </span>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-4 mb-6">
                <span className="text-3xl font-extrabold text-gray-900 dark:text-white">
                  ${product.price}
                </span>
                <span className="text-sm text-gray-400 line-through">
                  ${Math.round(product.price * 1.35)}
                </span>
                <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-bold text-emerald-600 dark:bg-emerald-500/10">
                  Save 25%
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed text-sm md:text-base">
                {product.description}
              </p>

              {/* Color Selection */}
              <div className="mb-6">
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
                  Select Color
                </label>
                <div className="flex gap-3">
                  {["#f35555", "#46c2f1", "#2dcc70", "#000"].map((colorHex, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedColor(`Color ${idx + 1}`)}
                      style={{ backgroundColor: colorHex }}
                      className={`w-8 h-8 rounded-full border-2 transition-transform ${selectedColor === `Color ${idx + 1}`
                          ? "border-primary scale-110 ring-2 ring-primary/20"
                          : "border-transparent hover:scale-105"
                        }`}
                    />
                  ))}
                </div>
              </div>

              {/* Quantity Selector */}
              <div className="mb-8 flex items-center gap-4">
                <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Qty:</span>
                <div className="flex items-center border border-gray-200 dark:border-white/5 rounded-xl overflow-hidden">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-1.5 hover:bg-gray-100 dark:hover:bg-gray-700 font-bold transition-all"
                  >
                    -
                  </button>
                  <span className="px-4 font-bold text-sm select-none">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-1.5 hover:bg-gray-100 dark:hover:bg-gray-700 font-bold transition-all"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Purchase buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => { addToCart(product, quantity, selectedColor); setAdded(true); setTimeout(() => setAdded(false), 1500); }}
                className="btn-primary flex-1 py-4"
              >
                {added ? <><FiCheck /> Added to cart</> : <><FiShoppingBag /> Add to cart</>}
              </button>
              <button
                onClick={() => {
                  addToCart(product, quantity, selectedColor);
                  navigate("/cart");
                }}
                className="btn-dark flex-1 py-4"
              >
                Buy now
              </button>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-3 border-t border-gray-100 pt-6 text-center text-xs text-gray-500 dark:border-white/5 dark:text-gray-400">
              <div className="flex flex-col items-center gap-1.5"><FiTruck className="text-lg text-ink-900 dark:text-white" />Free delivery</div>
              <div className="flex flex-col items-center gap-1.5"><FiRefreshCcw className="text-lg text-ink-900 dark:text-white" />30-day returns</div>
              <div className="flex flex-col items-center gap-1.5"><FiShield className="text-lg text-ink-900 dark:text-white" />2-year warranty</div>
            </div>
          </div>
        </div>

        {/* Collapsible Tabs for Specs / Details */}
        <div className="mt-12 bg-white dark:bg-ink-800 p-6 md:p-8 rounded-3xl border border-gray-100 dark:border-white/5 shadow-soft">
          <div className="flex border-b border-gray-100 dark:border-white/5 gap-8 mb-6">
            <button
              onClick={() => setActiveTab("specs")}
              className={`pb-3 font-bold text-sm tracking-wider uppercase transition-colors relative ${activeTab === "specs" ? "text-primary border-b-2 border-primary" : "text-gray-400"
                }`}
            >
              Specifications
            </button>
            <button
              onClick={() => setActiveTab("shipping")}
              className={`pb-3 font-bold text-sm tracking-wider uppercase transition-colors relative ${activeTab === "shipping" ? "text-primary border-b-2 border-primary" : "text-gray-400"
                }`}
            >
              Shipping & Returns
            </button>
          </div>

          <div className="min-h-[120px]">
            {activeTab === "specs" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 text-sm">
                {Object.entries(product.specs || {}).map(([key, val]) => (
                  <div key={key} className="flex justify-between border-b border-gray-50 dark:border-white/5 pb-2">
                    <span className="font-semibold text-gray-400 capitalize">{key}</span>
                    <span className="font-bold text-gray-700 dark:text-gray-200">{val}</span>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "shipping" && (
              <div className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                <p className="mb-2"><strong>Free Standard Shipping:</strong> 3-5 business days. Ships within 24 hours.</p>
                <p className="mb-2"><strong>Express Shipping:</strong> 1-2 business days available at checkout.</p>
                <p><strong>Returns:</strong> 30-day money-back guarantee. No questions asked. Pre-paid return label provided.</p>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-extrabold mb-6">You may also like</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} data={p} />
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default ProductDetails;
