/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
    container: {
      center: true,
      padding: "10px",
    },
    extend: {
      screens: {
        1536: { max: "1536px", min: "1280px" },
        1280: { max: "1280px", min: "1024px" },
        1024: { max: "1024px", min: "768px" },
        768: { max: "768px" },
      },
      colors: {
        mint: {
          DEFAULT: "#00B1AC",
        },
        brown: {
          DEFAULT: "#F0E7D8",
          dark: "#e3d3b7",
          darker: "#ccaf7c",
        },
      },
    },
  },
  safelist: [],
  plugins: [],
};
