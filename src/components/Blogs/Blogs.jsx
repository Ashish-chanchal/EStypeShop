import React from "react";
import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
import Heading from "../Shared/Heading";
import BlogCard from "./BlogCard";
import img1 from "../../assets/blogs/blog-1.jpg";
import img2 from "../../assets/blogs/blog-2.jpg";
import img3 from "../../assets/blogs/blog-3.jpg";

export const BlogData = [
  { id: 1, tag: "Buying guide", title: "How to choose the perfect smartwatch in 2026", subtitle: "Battery life, sensors, OS ecosystems — the five things that actually matter before you buy.", date: "Oct 28, 2026", read: "6 min read", image: img1 },
  { id: 2, tag: "Gear", title: "The everyday tech kit for creators on the move", subtitle: "Our editors' pick of compact, durable gadgets that earn their place in your bag.", date: "Oct 14, 2026", read: "4 min read", image: img2 },
  { id: 3, tag: "VR", title: "Is now the right time to get a VR headset?", subtitle: "Displays, comfort and the content library have all leapt forward. Here's our honest take.", date: "Sep 30, 2026", read: "8 min read", image: img3 },
];

const Blogs = () => (
  <section className="container py-20">
    <Heading
      eyebrow="From the journal"
      title="Stories, guides & reviews"
      align="left"
      action={<Link to="/blogs" className="inline-flex items-center gap-1 text-sm font-semibold text-gray-600 hover:text-primary dark:text-gray-300">Read the journal <FiArrowUpRight /></Link>}
    />
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {BlogData.map((data) => (
        <BlogCard data={data} key={data.id} />
      ))}
    </div>
  </section>
);

export default Blogs;
