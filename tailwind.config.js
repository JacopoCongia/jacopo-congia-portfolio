/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        retro: {
          yellow: "#F7B32B",
          pink: "#F79D84",
          mint: "#B7E4C7",
          cream: "#FFF8E1",
          brown: "#6B4226",
        },
      },
      fontFamily: {
        shrikhand: ["Shrikhand", "cursive"],
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
