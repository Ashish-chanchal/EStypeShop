import React from "react";
import { FaMobileAlt } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa6";

const FooterLinks = [
    [
        {
          id: 1,
          title: "Home",
          link: "#",
        },
        {
          id: 2,
          title: "About",
          link: "#",
        },
        {
          id: 3,
          title: "Contact",
          link: "#",
        },
        {
          id: 4,
          title: "Blog",
          link: "#",
        },
      ],
      [
        {
          id: 5,
          title: "Trending Products",
          link: "#",
        },
        {
          id: 6,
          title: "Best Selling",
          link: "#",
        },
        {
          id: 7,
          title: "Top Rated",
          link: "#",
        },
        
      ]
];

const Footer = () => {
  return (
    <div className="dark:bg-gray-950">
      <div className="container">
        <div className="grid md:grid-cols-3 pb-20 pt-5">
          <div className="py-8 px-4">
            <a
              href="#"
              className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl"
            >
              EStyleShop
            </a>
            <p className="text-gray-600 lg:pr-24 pt-3 dark:text-white">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Cupiditate iure dolor, tempore iusto porro vel optio unde magnam
              alias debitis?
            </p>
            <p className="text-gray-500 mt-4">
              Made by{" "}
              <a
                href="https://www.linkedin.com/in/ashishchanchal/"
                target="_blank"
              >
                Ashish Chanchal
              </a>
            </p>
          </div>
          <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">
            <div className="py-8 px-4">
              <h2 className="text-xl font-semibold sm:text-left mb-3">Important Links</h2>
              <ul className="space-y-3">
                {FooterLinks[0].map((data) => (
                    <li key={data.id} >
                    <a href={data.link} className="text-gray-600 hover:text-black hover:dark:text-white duration-300">{data.title}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="py-8 px-4">
              <h2 className="text-xl font-semibold sm:text-left mb-3">Quick Links</h2>
              <ul className="space-y-3">
                {FooterLinks[1].map((data) => (
                    <li key={data.id} >
                    <a href={data.link} className="text-gray-600 hover:text-black hover:dark:text-white duration-300">{data.title}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="py-8 px-4 col-span-2 sm:col-auto">
                <h2 className="text-xl font-bold sm:text-left mb-3">Address</h2>
                <div>
                    <div>
                        <div className="flex items-center gap-3">
                            <FaLocationArrow />
                            <p>Noida, UP</p>
                        </div>
                        <div className="flex items-center gap-3 mt-6">
                            <FaMobileAlt />
                            <p>+91 123456890w</p>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
