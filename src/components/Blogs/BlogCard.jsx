import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

const BlogCard = ({ data }) => (
  <article className="group flex h-full w-full cursor-pointer flex-col">
    <div className="relative overflow-hidden rounded-3xl">
      <img src={data.image} alt={data.title} loading="lazy" className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
      {data.tag && (
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-ink-900 backdrop-blur">{data.tag}</span>
      )}
    </div>
    <div className="flex flex-1 flex-col gap-2 pt-5">
      <p className="text-xs font-medium text-gray-500 dark:text-gray-400">{data.date}{data.read && ` · ${data.read}`}</p>
      <h3 className="flex items-start justify-between gap-3 text-lg font-bold leading-snug transition-colors group-hover:text-primary">
        <span className="line-clamp-2">{data.title}</span>
        <FiArrowUpRight className="mt-1 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </h3>
      <p className="line-clamp-2 text-sm text-gray-600 dark:text-gray-400">{data.subtitle}</p>
    </div>
  </article>
);

export default BlogCard;
