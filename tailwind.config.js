/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "anne-purple": "#6B3B52",
        "anne-gold": "#F4C078",
        "anne-pink": "#EBBAB9",
        "anne-bg": "#FDF6F0",
        "anne-bg-peach": "#FFF1E6",
      },
    },
  },
  plugins: [],
};
