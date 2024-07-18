/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "blackP" :{
          DEFAULT: "#0A070B",
          400: "#15161C",
          300 : "#363536",
          200 : "#4F4E50",
          100 : "#737174"
        } ,
        "redP" : "#F41B3B",
        "blueP" : "#1884F7",
        "greenP" : "#1EBC99",
        "YellowP" : "#F9CC0D"

      },
      fontFamily: {
        "Roboto" : ["Roboto", "sans-serif"],
      }
    },
  },
  plugins: [],
}

