/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        yellow: {
          100: '#FFE522'
        }
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}