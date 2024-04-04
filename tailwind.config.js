/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Manrope", "sans-serif"],
      },
      screens: {
        'vsm':{'max': '517px'},
        'medium':{'max': '1150px'}
      }
    },
  },
  plugins: [require("daisyui")],
}

