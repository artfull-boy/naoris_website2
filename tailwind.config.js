/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
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
        'medium':{'max': '1250px'},
        'usecase_size':{'max':'1160px'},
        'cards':{'max':'705px'},
        'media':{'min':'1420px'}
      }
    },
  },
  plugins: [require("daisyui")],
})

