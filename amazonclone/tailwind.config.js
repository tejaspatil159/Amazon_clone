/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        amazonclone: {
          background: "#E3E6E6",
          darkblue: "#131921",
          lightblue: "#232F3E",
          yellow: "#FEBD69",
        },
      },
    },
  },
  plugins: [],
};
