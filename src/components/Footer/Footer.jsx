import React from "react";
import { Link } from "react-router-dom";
import { FiMapPin, FiPhone, FiMail, FiInstagram, FiTwitter, FiLinkedin, FiYoutube } from "react-icons/fi";
import { FaCcVisa, FaCcMastercard, FaCcPaypal, FaCcApplePay } from "react-icons/fa";
import Logo from "../Shared/Logo";

const columns = [
  {
    title: "Shop",
    links: [
      { title: "All Products", link: "/shop" },
      { title: "Trending", link: "/shop?filter=trending" },
      { title: "Best Selling", link: "/shop?filter=best-selling" },
      { title: "Top Rated", link: "/shop?filter=top-rated" },
    ],
  },
  {
    title: "Company",
    links: [
      { title: "About", link: "/about" },
      { title: "Journal", link: "/blogs" },
      { title: "Contact", link: "/contact" },
      { title: "Cart", link: "/cart" },
    ],
  },
];

const socials = [
  { icon: FiInstagram, label: "Instagram" },
  { icon: FiTwitter, label: "Twitter" },
  { icon: FiYoutube, label: "YouTube" },
  { icon: FiLinkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/ashishchanchal/" },
];

const Footer = () => (
  <footer className="border-t border-gray-100 bg-gray-50/70 dark:border-white/5 dark:bg-black/30">
    <div className="container grid grid-cols-2 gap-10 py-16 md:grid-cols-12">
      <div className="col-span-2 md:col-span-4">
        <Logo />
        <p className="mt-4 max-w-xs text-sm leading-relaxed text-gray-500 dark:text-gray-400">
          Premium audio, wearables and computing — curated for people who care how their tech looks and sounds.
        </p>
        <div className="mt-6 flex gap-2">
          {socials.map(({ icon: Icon, label, href }) => (
            <a key={label} href={href || "#"} target={href ? "_blank" : undefined} rel="noreferrer" aria-label={label}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition hover:border-primary hover:bg-primary hover:text-white dark:border-white/10 dark:text-gray-400">
              <Icon />
            </a>
          ))}
        </div>
      </div>

      {columns.map((col) => (
        <div key={col.title} className="md:col-span-2">
          <h4 className="text-sm font-bold">{col.title}</h4>
          <ul className="mt-4 space-y-3">
            {col.links.map((l) => (
              <li key={l.title}>
                <Link to={l.link} className="text-sm text-gray-500 transition hover:text-primary dark:text-gray-400">{l.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}

      <div className="col-span-2 md:col-span-4">
        <h4 className="text-sm font-bold">Get in touch</h4>
        <ul className="mt-4 space-y-3 text-sm text-gray-500 dark:text-gray-400">
          <li className="flex items-center gap-3"><FiMapPin className="text-primary" /> Noida, Uttar Pradesh, India</li>
          <li className="flex items-center gap-3"><FiPhone className="text-primary" /> +91 12345 67890</li>
          <li className="flex items-center gap-3"><FiMail className="text-primary" /> support@estyleshop.com</li>
        </ul>
      </div>
    </div>

    <div className="border-t border-gray-100 dark:border-white/5">
      <div className="container flex flex-col items-center justify-between gap-4 py-6 text-xs text-gray-500 dark:text-gray-400 sm:flex-row">
        <p>
          © {new Date().getFullYear()} EStyle Shop. Made by{" "}
          <a href="https://www.linkedin.com/in/ashishchanchal/" target="_blank" rel="noreferrer" className="font-semibold hover:text-primary">Ashish Chanchal</a>
        </p>
        <div className="flex items-center gap-3 text-2xl text-gray-400">
          <FaCcVisa /><FaCcMastercard /><FaCcPaypal /><FaCcApplePay />
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
