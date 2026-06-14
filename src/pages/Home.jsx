import React from "react";
import Hero from "../components/Hero/Hero";
import Category from "../components/Category/Category";
import Services from "../components/Services/Services";
import Banner from "../components/Banner/Banner";
import Products from "../components/Products/Products";
import Blogs from "../components/Blogs/Blogs";
import Parnters from "../components/Partners/Parnters";
import headphone from "../assets/hero/headphone.png";
import watch2 from "../assets/category/watch2.png";

const BannerData = [
  {
    id: 1,
    discount: "50% OFF",
    title: "Fine Smile",
    date: "10 Jan to 28 Jan",
    image: headphone,
    title2: "Air Solo Bass",
    title3: "Winter Sale",
    title4: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.",
    textColor: "text-primary",
    bgColor: "bg-primary",
  },
  {
    id: 2,
    discount: "30% OFF",
    title: "Happy Hours",
    date: "14 Jan to 28 Jan",
    image: watch2,
    title2: "Smart Solo",
    title3: "Winter Sale",
    title4: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.",
    textColor: "text-brandGreen",
    bgColor: "bg-brandGreen",
  },
];

const Home = () => {
  return (
    <>
      <Hero />
      <Category />
      <Services />
      <Banner data={BannerData[0]} />
      <Products />
      <Banner data={BannerData[1]} />
      <Blogs />
      <Parnters />
    </>
  );
};

export default Home;
