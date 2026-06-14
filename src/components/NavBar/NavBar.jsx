import React from "react";
import { Link } from "react-router-dom";
import { FaCaretDown, FaCartShopping } from "react-icons/fa6";
import { IoMdSearch } from "react-icons/io";
import DarkMode from "../DarkMode";
import { useCart } from "../../context/CartContext";
const MenuLinks = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "Shop",
    link: "/shop",
  },
  {
    id: 3,
    name: "About",
    link: "/about",
  },
  {
    id: 4,
    name: "Blogs",
    link: "/blogs",
  },
  {
    id: 5,
    name: "Contact",
    link: "/contact",
  },
];
const DropDownLinks = [
    {
        id:1,
        name:"Trending Products",
        link:"/shop?filter=trending"

    },
    {
        id:2,
        name:"Best Selling",
        link:"/shop?filter=best-selling"
    },
    {
        id:3,
        name:"Top Rated",
        link:"/shop?filter=top-rated"
    }
]
const NavBar = () => {
  const { cartCount } = useCart();
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 w-full z-40 fixed ">
      <div className="py-4">
        <div className="container flex justify-between items-center">
          {/* {Logo and Links section} */}
          <div className="flex gap-4 items-center">
            <Link
              to="/"
              className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl"
            >
              EStypeShop
            </Link>
            {/* Menu item */}
            <div className="hidden lg:block">
              <ul className="flex items-center gap-4 ">
                {MenuLinks.map((data, index) => (
                  <li key={data.id}>
                    <Link
                      to={data.link}
                      className="inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200"
                    >
                      {data.name}
                    </Link>
                  </li>
                ))}
                {/* Dropdown Menu */}
                <li className="relative cursor-pointer group">
                    <a href="#" className="flex items-center gap-[2px] font-semibold text-gray-500 dark:hover:text-white py-2">
                        Quick Links
                        <span>
                        <FaCaretDown className="group-hover:rotate-180 duration-300"/>
                    </span>
                    </a>
                           {/* Dropdown links */}
                  <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white shadow-md dark:bg-gray-900 text-black p-2 dark:text-white ">
             
                    <ul className="space-y-2">
                        {DropDownLinks.map((data,index)=>(
                            <li key={data.id} >
                                <Link className="text-gray-500 dark:hover:text-white  duration-200 hover:bg-primary/20 inline-block w-full p-2 rounded-md font-semibold" to={data.link}>
                                    {data.name}
                                </Link>
                                </li>
                        ))}
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* {NavBar Right Section} */}
          <div className="flex justify-between items-center gap--4">
            <div className="relative group hidden sm:block">
              <input type="text" placeholder="Search" className="search-bar" />
              <IoMdSearch className="text-xl text-gray-600 group-hover:text-primary dark:text-gray-400 absolute top-1/2 -translate-y-1/2 right-3 duration-200" />
            </div>
 
            {/* Order-button section  */}
            <Link to="/cart" className="relative p-3 block">
                <FaCartShopping className="text-xl text-gray-600 dark:text-gray-400"/>
                <div className="w-4 h-4 bg-red-500 absolute text-white rounded-full top-0 right-0 flex items-center justify-center text-xs font-bold">{cartCount}</div>
            </Link>
            {/* dark mode section  */}
            <div>
                <DarkMode/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
