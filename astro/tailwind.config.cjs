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
      colors: {
        mint: {
          DEFAULT: "#00B1AC",
        },
        brown: {
          DEFAULT: "#F0E7D8",
          dark: "#e3d3b7",
        },
      },
    },
  },
  safelist: [],
  plugins: [],
};
