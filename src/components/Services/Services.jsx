import React from "react";
import { FiTruck, FiRefreshCcw, FiLock, FiHeadphones } from "react-icons/fi";

const ServicesData = [
  { id: 1, icon: FiTruck, title: "Free Shipping", description: "On every order over $500" },
  { id: 2, icon: FiRefreshCcw, title: "30-Day Returns", description: "Money-back guarantee" },
  { id: 3, icon: FiLock, title: "Secure Checkout", description: "256-bit encrypted payments" },
  { id: 4, icon: FiHeadphones, title: "24/7 Support", description: "Real humans, any time" },
];

const Services = () => (
  <section className="container">
    <div className="grid grid-cols-2 divide-gray-100 rounded-3xl border border-gray-100 bg-gray-50/60 dark:divide-white/5 dark:border-white/5 dark:bg-ink-800/60 lg:grid-cols-4 lg:divide-x">
      {ServicesData.map(({ id, icon: Icon, title, description }) => (
        <div key={id} className="flex flex-col items-start gap-3 p-6 sm:flex-row sm:items-center lg:p-8">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-xl text-primary shadow-soft dark:bg-ink-700">
            <Icon />
          </span>
          <div>
            <h3 className="text-sm font-bold sm:text-base">{title}</h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 sm:text-sm">{description}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Services;
