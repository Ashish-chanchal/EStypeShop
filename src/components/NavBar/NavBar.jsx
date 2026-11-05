import React from "react";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { FiSearch, FiShoppingBag, FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import DarkMode from "../DarkMode";
import Logo from "../Shared/Logo";
import { useCart } from "../../context/CartContext";

const MenuLinks = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "Shop", link: "/shop" },
  { id: 3, name: "About", link: "/about" },
  { id: 4, name: "Blogs", link: "/blogs" },
  { id: 5, name: "Contact", link: "/contact" },
];

const DropDownLinks = [
  { id: 1, name: "Trending Products", desc: "What everyone's buying", link: "/shop?filter=trending" },
  { id: 2, name: "Best Selling", desc: "Customer favourites", link: "/shop?filter=best-selling" },
  { id: 3, name: "Top Rated", desc: "4.7★ and above", link: "/shop?filter=top-rated" },
];

const linkCls = ({ isActive }) =>
  `relative px-3 py-2 text-sm font-medium transition-colors ${
    isActive ? "text-ink-900 dark:text-white" : "text-gray-500 hover:text-ink-900 dark:text-gray-400 dark:hover:text-white"
  }`;

const NavBar = () => {
  const { cartCount } = useCart();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const [query, setQuery] = React.useState("");

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => { setOpen(false); }, [pathname]);

  const submitSearch = (e) => {
    e.preventDefault();
    navigate(`/shop${query.trim() ? `?q=${encodeURIComponent(query.trim())}` : ""}`);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-gray-200/70 bg-white/80 backdrop-blur-xl dark:border-white/5 dark:bg-ink-900/80"
          : "bg-white dark:bg-ink-900"
      }`}
    >
      {/* Announcement bar */}
      <div className="bg-ink-900 text-center text-xs font-medium text-white/90 dark:bg-black">
        <div className="container truncate py-2">
          Free shipping over $500<span className="hidden sm:inline"> · Use code <span className="font-bold text-white">ESTYLE10</span> for 10% off</span>
        </div>
      </div>

      <nav className="container flex h-16 items-center justify-between gap-4">
        <div className="flex items-center gap-8">
          <Logo />
          <ul className="hidden items-center lg:flex">
            {MenuLinks.map((item) => (
              <li key={item.id}>
                <NavLink to={item.link} end={item.link === "/"} className={linkCls}>
                  {({ isActive }) => (
                    <>
                      {item.name}
                      {isActive && (
                        <motion.span layoutId="nav-underline" className="absolute inset-x-3 -bottom-[17px] h-0.5 rounded-full bg-primary" />
                      )}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
            <li className="group relative">
              <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-500 hover:text-ink-900 dark:text-gray-400 dark:hover:text-white">
                Collections <FiChevronDown className="transition-transform duration-200 group-hover:rotate-180" />
              </button>
              <div className="invisible absolute left-0 top-full w-64 translate-y-2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                <ul className="card p-2">
                  {DropDownLinks.map((d) => (
                    <li key={d.id}>
                      <Link to={d.link} className="block rounded-2xl px-4 py-3 transition hover:bg-gray-50 dark:hover:bg-white/5">
                        <p className="text-sm font-semibold">{d.name}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{d.desc}</p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>
        </div>

        <div className="flex items-center gap-1">
          <form onSubmit={submitSearch} className="relative hidden md:block">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              type="search"
              placeholder="Search products…"
              className="search-bar"
              aria-label="Search products"
            />
            <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary" aria-label="Search">
              <FiSearch />
            </button>
          </form>
          <DarkMode />
          <Link to="/cart" className="icon-btn" aria-label={`Cart, ${cartCount} items`}>
            <FiShoppingBag className="text-lg" />
            {cartCount > 0 && (
              <motion.span
                key={cartCount}
                initial={{ scale: 0.4 }}
                animate={{ scale: 1 }}
                className="absolute -right-0.5 -top-0.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1 text-[10px] font-bold text-white ring-2 ring-white dark:ring-ink-900"
              >
                {cartCount}
              </motion.span>
            )}
          </Link>
          <button className="icon-btn lg:hidden" onClick={() => setOpen((o) => !o)} aria-label="Toggle menu" aria-expanded={open}>
            {open ? <FiX className="text-lg" /> : <FiMenu className="text-lg" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-gray-100 bg-white dark:border-white/5 dark:bg-ink-900 lg:hidden"
          >
            <div className="container space-y-1 py-4">
              <form onSubmit={submitSearch} className="relative mb-3">
                <input value={query} onChange={(e) => setQuery(e.target.value)} type="search" placeholder="Search products…" className="input rounded-full pr-10" />
                <FiSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
              </form>
              {[...MenuLinks, ...DropDownLinks].map((item) => (
                <NavLink
                  key={item.link}
                  to={item.link}
                  end={item.link === "/"}
                  className={({ isActive }) =>
                    `block rounded-xl px-4 py-3 text-sm font-medium ${isActive ? "bg-primary-50 text-primary dark:bg-primary/10" : "hover:bg-gray-50 dark:hover:bg-white/5"}`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default NavBar;
