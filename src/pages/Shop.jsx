import React, { useState, useMemo, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Heading from "../components/Shared/Heading";
import { ShopProducts } from "../data/products";

const Shop = () => {
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const filterParam = queryParams.get("filter"); // "trending", "best-selling", "top-rated"
  const categoryParam = queryParams.get("category"); // e.g. "Headphones"

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [maxPrice, setMaxPrice] = useState(1500);
  const [sortBy, setSortBy] = useState("default");

  useEffect(() => {
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    } else {
      setSelectedCategory("All");
    }
  }, [categoryParam]);

  const categories = ["All", "Headphones", "Smartwatch", "Laptops", "VR Headsets", "Speakers"];

  const filteredProducts = useMemo(() => {
    return ShopProducts.filter((product) => {
      const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesPrice = product.price <= maxPrice;

      let matchesFilter = true;
      if (filterParam === "trending") matchesFilter = product.isTrending;
      else if (filterParam === "best-selling") matchesFilter = product.isBestSelling;
      else if (filterParam === "top-rated") matchesFilter = product.rating >= 4.7;

      return matchesCategory && matchesSearch && matchesPrice && matchesFilter;
    }).sort((a, b) => {
      if (sortBy === "price-low") return a.price - b.price;
      if (sortBy === "price-high") return b.price - a.price;
      if (sortBy === "rating") return b.rating - a.rating;
      return 0; // default
    });
  }, [selectedCategory, searchQuery, maxPrice, sortBy, filterParam]);

  return (
    <div className="pt-24 min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300">
      <div className="container py-8">
        <Heading title="Catalog" subtitle="Shop Premium Tech" />

        {/* Filters and catalog control panel */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-10">

          {/* Left column Filters */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 h-fit">
            <h3 className="text-xl font-bold mb-4">Filters</h3>

            {/* Search */}
            <div className="mb-6">
              <label className="block text-sm font-semibold mb-2 text-gray-500 dark:text-gray-400">Search Product</label>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className="w-full px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-600 bg-transparent focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary/50 text-sm"
              />
            </div>

            {/* Categories */}
            <div className="mb-6">
              <label className="block text-sm font-semibold mb-2 text-gray-500 dark:text-gray-400">Categories</label>
              <div className="flex flex-col gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`text-left px-3 py-2 rounded-lg text-sm font-medium transition-all ${selectedCategory === cat
                      ? "bg-primary text-white shadow-md shadow-primary/20"
                      : "hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300"
                      }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Filter */}
            <div className="mb-6">
              <div className="flex justify-between text-sm font-semibold mb-2 text-gray-500 dark:text-gray-400">
                <span>Max Price</span>
                <span className="text-primary font-bold">${maxPrice}</span>
              </div>
              <input
                type="range"
                min="50"
                max="1500"
                step="50"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full accent-primary bg-gray-200 dark:bg-gray-700 h-2 rounded-lg cursor-pointer"
              />
            </div>

            {/* Sorting */}
            <div>
              <label className="block text-sm font-semibold mb-2 text-gray-500 dark:text-gray-400">Sort By</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary text-sm"
              >
                <option value="default">Default</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Rating</option>
              </select>
            </div>
          </div>

          {/* Right column Product grid */}
          <div className="lg:col-span-3">
            {filterParam && (
              <div className="flex items-center gap-2 mb-4 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-xs font-bold w-fit uppercase tracking-wider">
                <span>Filter: {filterParam.replace("-", " ")}</span>
                <Link to="/shop" className="font-extrabold ml-1 text-base hover:text-red-500 transition-colors">&times;</Link>
              </div>
            )}
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                Showing <span className="font-semibold text-gray-800 dark:text-gray-200">{filteredProducts.length}</span> products
              </p>
            </div>

            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
            >
              <AnimatePresence>
                {filteredProducts.map((product) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    key={product.id}
                  >
                    <Link
                      to={`/product/${product.id}`}
                      className="block group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 dark:border-gray-700/50 transition-all duration-300 relative h-full"
                    >
                      {/* Badge */}
                      {product.isNew && (
                        <span className="absolute top-4 left-4 z-10 bg-primary text-white text-xs px-2.5 py-1 rounded-full font-bold uppercase tracking-wider">
                          New
                        </span>
                      )}

                      {/* Image Box */}
                      <div className="relative overflow-hidden bg-gray-50 dark:bg-gray-900/40 p-4 aspect-square flex items-center justify-center">
                        <motion.img
                          whileHover={{ scale: 1.08 }}
                          transition={{ type: "spring", stiffness: 300, damping: 20 }}
                          src={product.img}
                          alt={product.name}
                          className="w-full h-full max-h-[180px] object-contain drop-shadow-md"
                        />
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                          <span className="bg-primary text-white px-5 py-2.5 rounded-full font-bold hover:scale-105 transition-transform duration-200">
                            View Details
                          </span>
                        </div>
                      </div>

                      {/* Info */}
                      <div className="p-5">
                        <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">{product.category}</p>
                        <h3 className="font-bold text-gray-800 dark:text-white line-clamp-1 group-hover:text-primary transition-colors">
                          {product.name}
                        </h3>
                        <div className="flex justify-between items-center mt-3">
                          <p className="text-xl font-extrabold text-gray-900 dark:text-gray-100">${product.price}</p>
                          <div className="flex items-center text-yellow-500 gap-1 text-sm font-semibold">
                            ★ <span>{product.rating}</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {filteredProducts.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <p className="text-xl font-bold text-gray-500 dark:text-gray-400">No products match your criteria</p>
                <button
                  onClick={() => { setSelectedCategory("All"); setSearchQuery(""); setMaxPrice(1500); }}
                  className="mt-4 bg-primary text-white px-6 py-2 rounded-xl font-semibold"
                >
                  Reset Filters
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
