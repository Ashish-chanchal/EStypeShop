import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Heading from "../components/Shared/Heading";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 4000);
  };

  return (
    <div className="pt-24 min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300">
      <div className="container py-8 max-w-6xl">
        <Heading title="Get In Touch" subtitle="Contact EStyle Shop" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12">
          {/* Left panel: Info cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            <div className="bg-gray-50 dark:bg-gray-800/40 p-6 rounded-3xl border border-gray-100 dark:border-gray-800">
              <h4 className="font-bold text-lg text-primary mb-2">Location</h4>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                100 Design District Avenue, Suite 400<br />
                San Francisco, CA 94103
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800/40 p-6 rounded-3xl border border-gray-100 dark:border-gray-800">
              <h4 className="font-bold text-lg text-primary mb-2">Support & Inquiry</h4>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                Email: support@estypeshop.com<br />
                Phone: +1 (555) 019-2834
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800/40 p-6 rounded-3xl border border-gray-100 dark:border-gray-800">
              <h4 className="font-bold text-lg text-primary mb-2">Business Hours</h4>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                Monday - Friday: 9:00 AM - 6:00 PM EST<br />
                Saturday - Sunday: Closed
              </p>
            </div>
          </motion.div>

          {/* Right panel: Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-7 bg-white dark:bg-gray-800 p-8 rounded-3xl border border-gray-100 dark:border-gray-700/50 shadow-sm relative"
          >
            <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-400 mb-2">Full Name</label>
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-400 mb-2">Email Address</label>
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="name@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-gray-400 mb-2">Subject</label>
                <input
                  required
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-gray-400 mb-2">Message</label>
                <textarea
                  required
                  rows="5"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Write your message here..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-primary text-white font-bold hover:scale-[1.02] active:scale-[0.98] transition-transform duration-200"
              >
                Send Message
              </button>
            </form>

            {/* Success feedback */}
            <AnimatePresence>
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="absolute inset-0 bg-white/95 dark:bg-gray-800/95 flex flex-col justify-center items-center rounded-3xl p-6 text-center z-10"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white text-3xl font-bold mb-4"
                  >
                    ✓
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm max-w-sm">
                    Thank you for reaching out, {formData.name}. Our team will get back to you shortly.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
