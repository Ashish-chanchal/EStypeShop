import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ShopProducts } from "../data/products";
import { useCart } from "../context/CartContext";

const ProductDetails = () => {
  const { id } = useParams();
  const product = ShopProducts.find((p) => p.id === Number(id));
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("Default");
  const [activeTab, setActiveTab] = useState("specs");

  const { addToCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="pt-24 min-h-screen bg-white dark:bg-gray-900 text-center flex flex-col justify-center items-center">
        <h2 className="text-3xl font-bold mb-4">Product Not Found</h2>
        <Link to="/shop" className="bg-primary text-white px-6 py-2.5 rounded-full font-bold">
          Back to Shop
        </Link>
      </div>
    );
  }

  const relatedProducts = ShopProducts.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 4);

  return (
    <div className="pt-24 min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300">
      <div className="container py-8 max-w-6xl">

        {/* Breadcrumbs */}
        <div className="text-sm text-gray-500 mb-6 flex gap-2 items-center">
          <Link to="/" className="hover:text-primary">Home</Link> /
          <Link to="/shop" className="hover:text-primary">Shop</Link> /
          <span className="font-semibold text-gray-800 dark:text-gray-200 truncate max-w-[200px]">{product.name}</span>
        </div>

        {/* Product Info Block */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white dark:bg-gray-800 p-6 md:p-10 rounded-3xl border border-gray-100 dark:border-gray-700/50 shadow-sm">

          {/* Left: Gallery & Zoom Display */}
          <div className="flex flex-col items-center">
            <motion.div
              className="bg-gray-50 dark:bg-gray-900/60 p-8 rounded-3xl aspect-square flex items-center justify-center w-full max-w-[400px] border border-gray-100 dark:border-gray-800 relative overflow-hidden"
              whileHover={{ scale: 1.02 }}
            >
              {/* Product Badge */}
              {product.isNew && (
                <span className="absolute top-4 left-4 z-10 bg-primary text-white text-xs px-2.5 py-1 rounded-full font-bold uppercase tracking-wider">
                  New
                </span>
              )}
              <motion.img
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                src={product.img}
                alt={product.name}
                className="w-full h-full max-h-[300px] object-contain drop-shadow-xl"
              />
            </motion.div>

            {/* Gallery Thumbnails */}
            <div className="flex gap-4 mt-6">
              {[1, 2, 3].map((thumb) => (
                <button
                  key={thumb}
                  className={`w-16 h-16 p-2 rounded-xl border-2 transition-all bg-gray-50 dark:bg-gray-900/30 ${thumb === 1 ? "border-primary scale-105" : "border-gray-100 dark:border-gray-850 opacity-60 hover:opacity-100"
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
                <div className="flex text-yellow-500 text-lg">★★★★★</div>
                <span className="text-sm font-semibold text-gray-500 dark:text-gray-400">
                  {product.rating} ({Math.floor(product.rating * 12)} reviews)
                </span>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-4 mb-6">
                <span className="text-3xl font-black text-gray-900 dark:text-white">
                  ${product.price}
                </span>
                <span className="text-sm text-gray-400 line-through">
                  ${Math.round(product.price * 1.35)}
                </span>
                <span className="text-sm font-bold text-green-500">
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
                <div className="flex items-center border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
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
                onClick={() => addToCart(product, quantity, selectedColor)}
                className="flex-1 py-4 bg-primary text-white font-bold rounded-2xl hover:scale-[1.01] active:scale-[0.99] transition-transform duration-200 shadow-lg shadow-primary/20"
              >
                Add to Cart
              </button>
              <button
                onClick={() => {
                  addToCart(product, quantity, selectedColor);
                  navigate("/cart");
                }}
                className="flex-1 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold rounded-2xl hover:scale-[1.01] active:scale-[0.99] transition-transform duration-200"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>

        {/* Collapsible Tabs for Specs / Details */}
        <div className="mt-12 bg-white dark:bg-gray-800 p-6 md:p-8 rounded-3xl border border-gray-100 dark:border-gray-700/50 shadow-sm">
          <div className="flex border-b border-gray-100 dark:border-gray-700 gap-8 mb-6">
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
                  <div key={key} className="flex justify-between border-b border-gray-50 dark:border-gray-700/40 pb-2">
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
            <h2 className="text-2xl font-black mb-6">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {relatedProducts.map((p) => (
                <Link
                  to={`/product/${p.id}`}
                  key={p.id}
                  className="group bg-white dark:bg-gray-800 rounded-2xl p-4 border border-gray-100 dark:border-gray-700/50 shadow-sm hover:shadow-lg transition-all"
                >
                  <div className="aspect-square bg-gray-50 dark:bg-gray-900/40 rounded-xl overflow-hidden flex items-center justify-center p-4">
                    <img
                      src={p.img}
                      alt={p.name}
                      className="max-h-[120px] object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="font-bold mt-4 text-gray-800 dark:text-gray-200 line-clamp-1 group-hover:text-primary transition-colors text-sm">
                    {p.name}
                  </h3>
                  <p className="font-extrabold text-primary mt-1">${p.price}</p>
                </Link>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default ProductDetails;
