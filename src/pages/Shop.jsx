import React, { useState, useMemo, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiSearch, FiX, FiSliders } from "react-icons/fi";
import PageHeader from "../components/Shared/PageHeader";
import ProductCard from "../components/Products/ProductCard";
import { ShopProducts } from "../data/products";

const categories = ["All", "Headphones", "Smartwatch", "Laptops", "VR Headsets", "Speakers"];

const Shop = () => {
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const filterParam = queryParams.get("filter");
  const categoryParam = queryParams.get("category");
  const qParam = queryParams.get("q");

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [maxPrice, setMaxPrice] = useState(1500);
  const [sortBy, setSortBy] = useState("default");
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => { setSelectedCategory(categoryParam || "All"); }, [categoryParam]);
  useEffect(() => { setSearchQuery(qParam || ""); }, [qParam]);

  const countFor = (cat) => (cat === "All" ? ShopProducts.length : ShopProducts.filter((p) => p.category === cat).length);

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
      return 0;
    });
  }, [selectedCategory, searchQuery, maxPrice, sortBy, filterParam]);

  const reset = () => { setSelectedCategory("All"); setSearchQuery(""); setMaxPrice(1500); setSortBy("default"); };

  return (
    <div>
      <PageHeader
        eyebrow="Catalog"
        title="Shop premium tech"
        description="Headphones, wearables, laptops and more — hand-picked and backed by a 2-year warranty."
        crumbs={[{ label: "Shop" }]}
      />
      <div className="container py-10">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {/* Filters */}
          <aside className={`${showFilters ? "block" : "hidden"} lg:block`}>
            <div className="card sticky top-28 space-y-7 p-6">
              <div className="relative">
                <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search products…" className="input pl-10" />
              </div>

              <div>
                <h3 className="mb-3 text-xs font-bold uppercase tracking-widest text-gray-400">Categories</h3>
                <div className="flex flex-col gap-1">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`flex items-center justify-between rounded-xl px-3 py-2 text-left text-sm font-medium transition ${
                        selectedCategory === cat ? "bg-ink-900 text-white dark:bg-white dark:text-ink-900" : "text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-white/5"
                      }`}
                    >
                      {cat}
                      <span className={`text-xs ${selectedCategory === cat ? "opacity-70" : "text-gray-400"}`}>{countFor(cat)}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div className="mb-3 flex justify-between text-xs font-bold uppercase tracking-widest text-gray-400">
                  <span>Max price</span>
                  <span className="text-ink-900 dark:text-white">${maxPrice}</span>
                </div>
                <input type="range" min="50" max="1500" step="50" value={maxPrice} onChange={(e) => setMaxPrice(Number(e.target.value))} className="w-full cursor-pointer accent-primary" />
                <div className="mt-1 flex justify-between text-xs text-gray-400"><span>$50</span><span>$1500</span></div>
              </div>

              <button onClick={reset} className="w-full text-center text-sm font-semibold text-gray-500 hover:text-primary">Reset all filters</button>
            </div>
          </aside>

          {/* Grid */}
          <div className="lg:col-span-3">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <button onClick={() => setShowFilters((s) => !s)} className="btn-ghost px-4 py-2 lg:hidden"><FiSliders /> Filters</button>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold text-ink-900 dark:text-white">{filteredProducts.length}</span> products
                </p>
                {filterParam && (
                  <Link to="/shop" className="inline-flex items-center gap-1 rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold capitalize text-primary dark:bg-primary/10">
                    {filterParam.replace("-", " ")} <FiX />
                  </Link>
                )}
              </div>
              <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="input w-auto py-2" aria-label="Sort products">
                <option value="default">Sort: Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>

            <motion.div layout className="grid grid-cols-2 gap-4 sm:gap-6 xl:grid-cols-3">
              <AnimatePresence>
                {filteredProducts.map((product) => (
                  <motion.div layout key={product.id} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.25 }}>
                    <ProductCard data={product} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {filteredProducts.length === 0 && (
              <div className="card py-16 text-center">
                <p className="text-lg font-bold">No products match your filters</p>
                <p className="mt-1 text-sm text-gray-500">Try widening the price range or clearing your search.</p>
                <button onClick={reset} className="btn-primary mt-6">Reset filters</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
