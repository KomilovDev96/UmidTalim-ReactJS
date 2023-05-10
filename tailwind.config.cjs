/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        blackColor: "#404258",  // background
        greyColor: "#474E68",   //  title
        novyColor: "#50577A",   // buttons 
        winterColor: "#6B728E", // text
      },

    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}