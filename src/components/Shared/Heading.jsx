import React from "react";
import { motion } from "framer-motion";

const Heading = ({ title, subtitle, eyebrow, align = "center", action }) => {
  const centered = align === "center";
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`mb-10 flex flex-col gap-4 ${centered ? "items-center text-center" : "sm:flex-row sm:items-end sm:justify-between"}`}
    >
      <div className={`space-y-3 ${centered ? "max-w-2xl" : ""}`}>
        {(eyebrow || subtitle) && <p className="eyebrow">{eyebrow || subtitle}</p>}
        <h2 className="text-3xl font-extrabold sm:text-4xl">{title}</h2>
      </div>
      {action}
    </motion.div>
  );
};

export default Heading;
