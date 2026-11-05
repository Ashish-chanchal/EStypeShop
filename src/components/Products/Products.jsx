import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import Heading from "../Shared/Heading";
import ProductCard from "./ProductCard";
import { ShopProducts } from "../../data/products";

const tabs = [
  { key: "all", label: "All" },
  { key: "trending", label: "Trending", test: (p) => p.isTrending },
  { key: "best", label: "Best sellers", test: (p) => p.isBestSelling },
  { key: "new", label: "New arrivals", test: (p) => p.isNew },
];

const Products = () => {
  const [active, setActive] = React.useState("all");
  const tab = tabs.find((t) => t.key === active);
  const list = (tab.test ? ShopProducts.filter(tab.test) : ShopProducts).slice(0, 8);

  return (
    <section className="container py-20">
      <Heading eyebrow="Our products" title="Featured this week" />
      <div className="mb-10 flex flex-wrap justify-center gap-2">
        {tabs.map((t) => (
          <button
            key={t.key}
            onClick={() => setActive(t.key)}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
              active === t.key
                ? "bg-ink-900 text-white dark:bg-white dark:text-ink-900"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-white/5 dark:text-gray-300 dark:hover:bg-white/10"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
        {list.map((p) => (
          <ProductCard data={p} key={p.id} />
        ))}
      </div>
      <div className="mt-12 text-center">
        <Link to="/shop" className="btn-ghost">
          View all products <FiArrowRight />
        </Link>
      </div>
    </section>
  );
};

export default Products;
