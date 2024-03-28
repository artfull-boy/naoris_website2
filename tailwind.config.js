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
        'vsm':{'max': '517px'}
      }
    },
  },
  plugins: [require("daisyui")],
}

