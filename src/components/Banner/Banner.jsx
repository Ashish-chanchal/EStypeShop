import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight, FiClock } from "react-icons/fi";
import Button from "../Shared/Button";

const Banner = ({ data }) => (
  <section className="container py-12">
    <div className={`relative grid grid-cols-1 items-center gap-6 overflow-hidden rounded-4xl px-8 py-12 text-white md:grid-cols-3 md:px-12 ${data.bgColor}`}>
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40 [mask-image:linear-gradient(to_right,black,transparent)]" />
      <div className="pointer-events-none absolute -bottom-32 left-1/3 h-80 w-80 rounded-full bg-white/20 blur-3xl" />

      <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="relative">
        <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-bold uppercase tracking-widest backdrop-blur">{data.discount}</span>
        <h2 className="mt-4 text-5xl font-extrabold uppercase leading-none lg:text-7xl">{data.title}</h2>
        <p className="mt-4 flex items-center gap-2 text-sm text-white/80"><FiClock /> {data.date}</p>
      </motion.div>

      <div className="relative flex items-center justify-center">
        <div className="absolute h-56 w-56 rounded-full bg-white/15 md:h-72 md:w-72" />
        <motion.img
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          src={data.image}
          alt={data.title2}
          className="relative w-60 object-contain drop-shadow-[0_30px_30px_rgba(0,0,0,.35)] md:w-80 md:scale-125"
        />
      </div>

      <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="relative flex flex-col gap-4">
        <p className="text-lg font-semibold text-white/90">{data.title2}</p>
        <p className="text-4xl font-extrabold sm:text-5xl">{data.title3}</p>
        <p className="max-w-sm text-sm leading-relaxed text-white/80">{data.title4}</p>
        <div>
          <Button to={data.link || "/shop"} variant="light">
            Shop now <FiArrowRight />
          </Button>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Banner;
