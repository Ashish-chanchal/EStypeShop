import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiShoppingBag, FiHeart } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { useCart } from "../../context/CartContext";

const ProductCard = ({ data }) => {
  const { addToCart } = useCart();
  const [added, setAdded] = React.useState(false);
  const oldPrice = Math.round(data.price * 1.25);
  const isPhoto = /\.jpe?g($|\?)/i.test(data.img);

  const handleAdd = (e) => {
    e.preventDefault();
    addToCart(data, 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 1400);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="h-full"
    >
      <Link
        to={`/product/${data.id}`}
        className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lift dark:border-white/5 dark:bg-ink-800"
      >
        <div className="relative aspect-[4/3.4] overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-ink-700 dark:to-ink-800">
          <div className="absolute left-3 top-3 z-10 flex gap-1.5">
            {data.isNew && <span className="rounded-full bg-ink-900 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white dark:bg-white dark:text-ink-900">New</span>}
            {data.isBestSelling && <span className="rounded-full bg-primary px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white">Bestseller</span>}
          </div>
          <span
            className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/80 text-gray-500 opacity-0 backdrop-blur transition group-hover:opacity-100 hover:text-primary dark:bg-ink-900/70"
            aria-hidden
          >
            <FiHeart />
          </span>
          <img
            src={data.img}
            alt={data.name}
            loading="lazy"
            className={`h-full w-full transition-transform duration-500 group-hover:scale-105 ${isPhoto ? "object-cover" : "object-contain p-6"}`}
          />
        </div>
        <div className="flex flex-1 flex-col gap-1 p-5">
          <div className="flex items-center justify-between text-xs">
            <span className="font-medium text-gray-500 dark:text-gray-400">{data.category}</span>
            <span className="flex items-center gap-1 font-semibold text-gray-700 dark:text-gray-200">
              <FaStar className="text-amber-400" /> {data.rating}
            </span>
          </div>
          <h3 className="line-clamp-1 font-semibold text-ink-900 transition-colors group-hover:text-primary dark:text-white">{data.name}</h3>
          <div className="mt-auto flex items-end justify-between pt-3">
            <div className="flex items-baseline gap-2">
              <span className="text-lg font-bold">${data.price}</span>
              <span className="text-xs text-gray-400 line-through">${oldPrice}</span>
            </div>
            <button
              onClick={handleAdd}
              aria-label={`Add ${data.name} to cart`}
              className={`flex h-10 items-center gap-2 rounded-full px-3 text-sm font-semibold transition-all ${added ? "bg-brandGreen text-white" : "bg-ink-900 text-white hover:bg-primary dark:bg-white dark:text-ink-900 dark:hover:bg-primary dark:hover:text-white"}`}
            >
              <FiShoppingBag />
              <span className="hidden sm:inline">{added ? "Added" : "Add"}</span>
            </button>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
