import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import Heading from "../Shared/Heading";
import Image1 from "../../assets/category/earphone.png";
import Image2 from "../../assets/category/watch.png";
import Image3 from "../../assets/category/macbook.png";
import Image4 from "../../assets/category/gaming.png";
import Image5 from "../../assets/category/vr.png";
import Image6 from "../../assets/category/speaker.png";

const categories = [
  { name: "Earphones", count: "6 products", link: "/shop?category=Headphones", img: Image1, span: "", tone: "bg-ink-900 text-white", imgCls: "w-56 -bottom-4 -right-4" },
  { name: "Smartwatches", count: "2 products", link: "/shop?category=Smartwatch", img: Image2, span: "", tone: "bg-amber-100 text-ink-900 dark:bg-amber-400/15 dark:text-white", imgCls: "w-56 -right-10 -bottom-6" },
  { name: "Laptops", count: "1 product", link: "/shop?category=Laptops", img: Image3, span: "sm:col-span-2", tone: "bg-primary text-white", imgCls: "w-72 -right-6 bottom-0" },
  { name: "Gaming", count: "Explore all", link: "/shop", img: Image4, span: "sm:col-span-2", tone: "bg-gray-100 text-ink-900 dark:bg-ink-800 dark:text-white", imgCls: "w-72 right-4 -bottom-6" },
  { name: "VR Headsets", count: "1 product", link: "/shop?category=VR Headsets", img: Image5, span: "", tone: "bg-emerald-100 text-ink-900 dark:bg-emerald-400/15 dark:text-white", imgCls: "w-52 -right-6 bottom-0" },
  { name: "Speakers", count: "1 product", link: "/shop?category=Speakers", img: Image6, span: "", tone: "bg-blue-100 text-ink-900 dark:bg-blue-500/15 dark:text-white", imgCls: "w-40 right-2 bottom-0" },
];

const Category = () => (
  <section className="container py-20">
    <Heading
      eyebrow="Shop by category"
      title="Find your next favourite"
      align="left"
      action={<Link to="/shop" className="inline-flex items-center gap-1 text-sm font-semibold text-gray-600 hover:text-primary dark:text-gray-300">View all categories <FiArrowUpRight /></Link>}
    />
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {categories.map((c, i) => (
        <motion.div
          key={c.name}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
          className={c.span}
        >
          <Link to={c.link} className={`group relative flex h-64 overflow-hidden rounded-3xl p-7 ${c.tone}`}>
            <div className="relative z-10 flex flex-col">
              <p className="text-xs font-semibold uppercase tracking-widest opacity-60">{c.count}</p>
              <h3 className="mt-1 text-2xl font-extrabold">{c.name}</h3>
              <span className="mt-auto flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-ink-900 shadow-sm transition-all duration-300 group-hover:w-28 group-hover:gap-1">
                <span className="hidden text-sm font-semibold group-hover:inline">Browse</span>
                <FiArrowUpRight className="transition-transform group-hover:rotate-45" />
              </span>
            </div>
            <img
              src={c.img}
              alt=""
              loading="lazy"
              className={`absolute object-contain drop-shadow-2xl transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-105 ${c.imgCls}`}
            />
          </Link>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Category;
