import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Heading from "../components/Shared/Heading";

// Sample blog images
import Blog1 from "../assets/blogs/blog-1.jpg";
import Blog2 from "../assets/blogs/blog-2.jpg";
import Blog3 from "../assets/blogs/blog-3.jpg";

const blogPosts = [
  {
    id: 1,
    title: "How to Choose the Perfect Smartwatch",
    subtitle: "A comprehensive guide to specs, design, and usability.",
    published: "Jan 20, 2024 by John Doe",
    image: Blog1,
    category: "Smartwatch",
    content: "Selecting a smartwatch isn't just about picking the coolest design. You need to consider battery life, operating system compatibility, health sensors, display type, and premium build quality. Devices like Apple Watch, Samsung Galaxy Watch, and Garmin offer different pros depending on whether you value lifestyle features, fitness metrics, or battery life. In this article, we break down all details."
  },
  {
    id: 2,
    title: "The Future of Virtual Reality (VR)",
    subtitle: "How next-gen standalone VR headsets are changing the game.",
    published: "Jan 24, 2024 by Alex Mercer",
    image: Blog2,
    category: "Tech",
    content: "Virtual reality is rapidly advancing from a niche gaming hobby into a mainstream immersive tech platform. Hardware upgrades, including pancake lenses, micro-OLED displays, eye tracking, and mixed reality capabilities, are rendering old tethered setups obsolete. Standalone headsets are now giving developers the power to create complex, photorealistic virtual environments without heavy PCs."
  },
  {
    id: 3,
    title: "Understanding High-Fidelity Audio",
    subtitle: "What does lossless audio actually mean for casual listeners?",
    published: "Jan 28, 2024 by Sarah Connor",
    image: Blog3,
    category: "Audio",
    content: "Audiophiles frequently talk about bit rates, sample rates, DACs, and high-impedance headphones. But does high-fidelity, lossless audio matter to the average listener? With mainstream platforms now supporting high-res audio, we explore the hardware needed to actually appreciate studio-quality tracks, and whether your wireless Bluetooth earbuds are bottlenecking your music."
  },
  {
    id: 4,
    title: "Aesthetically Pleasing Workspace Setup Tips",
    subtitle: "Upgrade your desk setup with these design principles.",
    published: "Feb 02, 2024 by Oliver Queen",
    image: Blog1,
    category: "Design",
    content: "A clean, functional, and visually appealing desk setup boosts both focus and creativity. Start by applying a cohesive color theme (like minimal monochrome or cozy wood tones). Hide cables using underslung trays, invest in ergonomic chairs and monitor arms, and add personalized ambient light bars or LED backlights. Lastly, clear away clutter to leave only your primary creative tools."
  }
];

const BlogsPage = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBlogs = blogPosts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="pt-24 min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300">
      <div className="container py-8">
        <Heading title="Our Blogs" subtitle="Tech, Audio & Design News" />

        {/* Search */}
        <div className="max-w-md mx-auto my-8">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search articles by title or category..."
            className="w-full px-5 py-3 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {filteredBlogs.map((post) => (
            <motion.div
              key={post.id}
              whileHover={{ y: -6 }}
              className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700/50 flex flex-col h-full"
            >
              {/* Image */}
              <div className="overflow-hidden aspect-video relative">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                <span className="absolute top-4 right-4 bg-primary text-white text-xs px-3 py-1 rounded-full font-bold">
                  {post.category}
                </span>
              </div>

              {/* Body */}
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <p className="text-xs text-gray-400 mb-2">{post.published}</p>
                  <h3 className="font-bold text-lg mb-2 line-clamp-2 hover:text-primary transition-colors cursor-pointer" onClick={() => setSelectedBlog(post)}>
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-3 mb-4">{post.subtitle}</p>
                </div>

                <button
                  onClick={() => setSelectedBlog(post)}
                  className="text-primary font-bold text-sm text-left hover:underline w-fit"
                >
                  Read More &rarr;
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Detailed Article Modal Dialog */}
        <AnimatePresence>
          {selectedBlog && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedBlog(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9999] flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white dark:bg-gray-800 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-8 relative shadow-2xl"
              >
                <button
                  onClick={() => setSelectedBlog(null)}
                  className="absolute top-4 right-4 text-2xl font-bold text-gray-400 hover:text-primary transition-colors"
                >
                  &times;
                </button>

                <span className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full font-bold uppercase tracking-wider">
                  {selectedBlog.category}
                </span>
                <h2 className="text-2xl md:text-3xl font-extrabold mt-3 mb-2">{selectedBlog.title}</h2>
                <p className="text-xs text-gray-400 mb-6">{selectedBlog.published}</p>

                <div className="aspect-video w-full rounded-2xl overflow-hidden mb-6">
                  <img src={selectedBlog.image} alt={selectedBlog.title} className="w-full h-full object-cover" />
                </div>

                <p className="text-lg font-medium text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {selectedBlog.subtitle}
                </p>
                <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-sm md:text-base whitespace-pre-line">
                  {selectedBlog.content}
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default BlogsPage;
