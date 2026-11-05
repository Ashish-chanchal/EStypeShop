import React from "react";
import { motion } from "framer-motion";
import Heading from "../components/Shared/Heading";
import PageHeader from "../components/Shared/PageHeader";
import AboutArt from "../assets/illustrations/about-hero.svg";

const stats = [
  { id: 1, value: "10k+", label: "Premium Products Sold" },
  { id: 2, value: "99%", label: "Customer Satisfaction" },
  { id: 3, value: "24/7", label: "Dedicated Support" },
  { id: 4, value: "50+", label: "Brand Partnerships" }
];

const team = [
  { id: 1, name: "Alexander Pierce", role: "CEO & Founder", initials: "AP", tone: "from-rose-500 to-orange-400" },
  { id: 2, name: "Sophia Martinez", role: "Head of Product Design", initials: "SM", tone: "from-indigo-500 to-sky-400" },
  { id: 3, name: "Lucas Chen", role: "Lead Technology Architect", initials: "LC", tone: "from-emerald-500 to-teal-400" }
];

const About = () => {
  return (
    <div>
      <PageHeader eyebrow="About us" title="Our story" description="Technology that performs beautifully — and looks the part." crumbs={[{ label: "About" }]} />
      <div className="container py-12">

        {/* Intro Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-extrabold mb-4">Redefining Tech & Aesthetics</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              At EStyle Shop, we believe technology shouldn't just be functional—it should be a statement. We curate
              premium tech products, audio devices, and wearables that blend seamless performance with outstanding
              contemporary design.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Founded in 2024, we have grown from a small design boutique to a globally recognized brand, delivering
              state-of-the-art gear to designers, creators, and audio enthusiasts worldwide.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-full bg-primary/20 blur-3xl"></div>
            <img src={AboutArt} alt="EStyle Shop — premium tech, curated" className="relative w-full rounded-3xl shadow-lift" />
          </motion.div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 my-16">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-gray-50 dark:bg-ink-800 p-6 rounded-2xl text-center border border-gray-100 dark:border-white/5"
            >
              <h4 className="font-display text-4xl font-extrabold mb-2">{stat.value}</h4>
              <p className="text-sm font-semibold text-gray-500 dark:text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Vision and Values Section */}
        <div className="bg-gray-50 dark:bg-ink-800 p-8 md:p-12 rounded-3xl mb-16 border border-gray-100 dark:border-white/5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-3 uppercase tracking-wider text-primary">Our Vision</h4>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm md:text-base">
                To create a world where design and utility live in perfect harmony. We strive to be the ultimate
                destination for those who refuse to compromise on visual excellence or premium engineering.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-3 uppercase tracking-wider text-primary">Our Promise</h4>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm md:text-base">
                Uncompromising build quality, curated item listings, prompt customer care, and a smooth shopping experience
                from screen to doorstep.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center mb-10">
          <Heading title="The people behind EStyle" eyebrow="Meet the team" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 max-w-5xl mx-auto">
            {team.map((person, i) => (
              <motion.div
                key={person.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="group bg-white dark:bg-ink-800 rounded-2xl overflow-hidden shadow-soft hover:shadow-lift transition-all duration-300 border border-gray-100 dark:border-white/5"
              >
                <div className="relative overflow-hidden aspect-square bg-gray-50 dark:bg-ink-700">
                  <div className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${person.tone} font-display text-6xl font-extrabold text-white/90 transition-transform duration-500 group-hover:scale-105`}>{person.initials}</div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                    <p className="text-white text-xs font-semibold uppercase tracking-widest">Connect with Socials</p>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="font-bold text-lg">{person.name}</h4>
                  <p className="text-primary text-sm font-semibold mt-1">{person.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
