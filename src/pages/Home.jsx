import React from "react";
import Hero from "../components/Hero/Hero";
import Category from "../components/Category/Category";
import Services from "../components/Services/Services";
import Banner from "../components/Banner/Banner";
import Products from "../components/Products/Products";
import Blogs from "../components/Blogs/Blogs";
import Parnters from "../components/Partners/Parnters";
import Newsletter from "../components/Newsletter/Newsletter";
import headphone from "../assets/hero/headphone.png";
import watch2 from "../assets/category/watch2.png";

const BannerData = [
  {
    id: 1,
    discount: "Up to 50% off",
    title: "Winter Sale",
    date: "Ends Dec 31",
    image: headphone,
    title2: "Solo Active Pro",
    title3: "Hear every detail.",
    title4: "Hybrid noise cancelling and 35-hour battery — now at its lowest price ever for a limited time.",
    link: "/product/7",
    bgColor: "bg-gradient-to-br from-primary-500 to-primary-700",
  },
  {
    id: 2,
    discount: "30% off",
    title: "Happy Hours",
    date: "Weekends only",
    image: watch2,
    title2: "Quantum Watch 2.0",
    title3: "Your health, in sync.",
    title4: "Sleep stages, stress metrics and built-in GPS with 10-day battery. Smarter tracking, effortless style.",
    link: "/product/8",
    bgColor: "bg-gradient-to-br from-emerald-500 to-teal-700",
  },
];

const Home = () => (
  <>
    <Hero />
    <Parnters />
    <Category />
    <Services />
    <Products />
    <Banner data={BannerData[0]} />
    <Blogs />
    <Banner data={BannerData[1]} />
    <Newsletter />
  </>
);

export default Home;
