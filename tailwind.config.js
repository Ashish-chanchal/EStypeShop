/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', "ui-sans-serif", "system-ui", "sans-serif"],
        display: ['"Plus Jakarta Sans"', '"Inter"', "ui-sans-serif", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#E11D2E",
          50: "#FEF2F3",
          100: "#FDE3E5",
          500: "#F42C37",
          600: "#E11D2E",
          700: "#BE1424",
        },
        secondary: "#E11D2E",
        ink: {
          DEFAULT: "#0B0F19",
          900: "#0B0F19",
          800: "#121826",
          700: "#1A2232",
          600: "#273043",
        },
        brandYellow: "#F5B82E",
        brandGreen: "#22C55E",
        brandBlue: "#2563EB",
        brandWhite: "#F4F4F5",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(16,24,40,.04), 0 8px 24px -8px rgba(16,24,40,.08)",
        lift: "0 2px 4px rgba(16,24,40,.04), 0 24px 48px -16px rgba(16,24,40,.18)",
        glow: "0 10px 30px -10px rgba(225,29,46,.55)",
      },
      borderRadius: { "4xl": "2rem" },
      keyframes: {
        marquee: { "0%": { transform: "translateX(0)" }, "100%": { transform: "translateX(-50%)" } },
      },
      animation: { marquee: "marquee 30s linear infinite" },
      container: {
        center: true,
        padding: { DEFAULT: "1rem", sm: "1.5rem", lg: "2rem" },
        screens: { "2xl": "1280px" },
      },
    },
  },
  plugins: [],
};
