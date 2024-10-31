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
          100 : "#737174",
          50 : "#00000033"
        } ,
        "whiteP" :{
          DEFAULT: "#F7F7F7",
          400: "#F5F5F5",
          300 : "#E5E5E5",
          200 : "#D9D9D9",
          100 : "#C9C9C9",
          75 : "#FFFFFF56",
          50 : "#FFFFFF33"
        },
        "redP" : "#F41B3B",
        "blueP" : "#1884F7",
        "greenP" : "#1EBC99",
        "YellowP" : "#F9CC0D"

      },
      fontFamily: {
        "Roboto" : ["Roboto", "sans-serif"],
        "Poppins":["Poppins" , "sans-serif"]
      }
    },
  },
  plugins: [],
}

