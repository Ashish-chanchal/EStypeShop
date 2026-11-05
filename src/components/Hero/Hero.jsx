import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { FiArrowRight, FiTruck, FiShield } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import Image1 from "../../assets/hero/headphone.png";
import Image2 from "../../assets/category/vr.png";
import Image3 from "../../assets/category/macbook.png";
import Button from "../Shared/Button";

const HeroData = [
  {
    id: 1,
    img: Image1,
    tag: "New · Solo Active Pro",
    title: "Sound that",
    highlight: "moves you.",
    description: "Hybrid noise cancelling, 35-hour battery and studio-tuned drivers in a featherweight build.",
    price: 220,
    link: "/product/7",
    bg: "Audio",
  },
  {
    id: 2,
    img: Image2,
    tag: "Trending · VR Virtual Pro",
    title: "Step into",
    highlight: "new worlds.",
    description: "Micro-OLED displays at 2K per eye with 120Hz refresh and ultra-low-latency tracking.",
    price: 590,
    link: "/product/4",
    bg: "Virtual",
  },
  {
    id: 3,
    img: Image3,
    tag: "Bestseller · Zenith Air",
    title: "Built for",
    highlight: "creators.",
    description: "Next-gen 8-core performance with all-day battery in a sleek aluminium body.",
    price: 1290,
    link: "/product/5",
    bg: "Laptops",
  },
];

const Hero = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 700,
    autoplay: true,
    slidesToScroll: 1,
    autoplaySpeed: 5000,
    cssEase: "ease-in-out",
    pauseOnHover: true,
    fade: true,
  };
  const SliderComponent = Slider.default || Slider;

  return (
    <section className="container pt-28 sm:pt-32">
      <div className="hero-slider relative overflow-hidden rounded-4xl border border-gray-100 hero-bg-color dark:border-white/5">
        <div className="pointer-events-none absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
        <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
        <SliderComponent {...settings}>
          {HeroData.map((item) => (
            <div key={item.id}>
              <div className="relative grid min-h-[600px] grid-cols-1 items-center gap-6 px-6 pb-16 pt-10 sm:px-12 md:grid-cols-2 lg:px-16">
                <span className="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 select-none whitespace-nowrap font-display text-[160px] font-extrabold leading-none text-ink-900/[0.03] dark:text-white/[0.03] lg:block">
                  {item.bg}
                </span>

                <div className="relative z-10 order-2 flex flex-col items-center gap-6 text-center md:order-1 md:items-start md:text-left">
                  <motion.span
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/70 px-3 py-1 text-xs font-semibold text-primary backdrop-blur dark:bg-white/5"
                  >
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
                    {item.tag}
                  </motion.span>
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-5xl font-extrabold leading-[1.05] sm:text-6xl lg:text-7xl"
                  >
                    {item.title}
                    <br />
                    <span className="text-gradient">{item.highlight}</span>
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="max-w-md text-base text-gray-600 dark:text-gray-400 sm:text-lg"
                  >
                    {item.description}
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-wrap items-center justify-center gap-3 md:justify-start"
                  >
                    <Button to={item.link}>
                      Shop now · ${item.price} <FiArrowRight />
                    </Button>
                    <Button to="/shop" variant="ghost">Browse all</Button>
                  </motion.div>
                  <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 pt-2 text-xs font-medium text-gray-500 dark:text-gray-400 md:justify-start">
                    <span className="flex items-center gap-1.5"><FaStar className="text-amber-400" /> 4.8 from 2,400+ reviews</span>
                    <span className="flex items-center gap-1.5"><FiTruck /> Free delivery</span>
                    <span className="flex items-center gap-1.5"><FiShield /> 2-year warranty</span>
                  </div>
                </div>

                <div className="relative order-1 flex items-center justify-center md:order-2">
                  <div className="absolute h-64 w-64 rounded-full bg-gradient-to-br from-primary/25 to-orange-300/20 blur-2xl sm:h-96 sm:w-96" />
                  <div className="absolute h-60 w-60 rounded-full border border-gray-200/80 dark:border-white/10 sm:h-[420px] sm:w-[420px]" />
                  <motion.img
                    animate={{ y: [0, -14, 0] }}
                    transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                    src={item.img}
                    alt={item.highlight}
                    className="relative z-10 h-[260px] w-[260px] object-contain drop-shadow-[0_30px_40px_rgba(0,0,0,.25)] sm:h-[440px] sm:w-[440px]"
                  />
                </div>
              </div>
            </div>
          ))}
        </SliderComponent>
      </div>
    </section>
  );
};

export default Hero;
