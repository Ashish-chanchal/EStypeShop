import React from "react";
import { FiMoon, FiSun } from "react-icons/fi";

const getInitial = () => {
  try { return localStorage.getItem("theme") || "light"; } catch { return "light"; }
};

const DarkMode = () => {
  const [theme, setTheme] = React.useState(getInitial);

  React.useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    try { localStorage.setItem("theme", theme); } catch { /* ignore */ }
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="icon-btn"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {theme === "dark" ? <FiSun className="text-lg" /> : <FiMoon className="text-lg" />}
    </button>
  );
};

export default DarkMode;
