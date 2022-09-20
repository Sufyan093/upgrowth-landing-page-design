/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'brand-color': '#53A89A',
      'circle-one': '#5264BE',
      'circle-two': '#788DF5',
      'circle-three': '#CBD2FB',
      'circle-four': '#E9E9E9',
      'circle-five': '#F08B34',
      'third-section': '#1F6459',
    },
    extend: {
      colors: {
        gray: colors.trueGray,
        red: colors.red,
        blue: colors.sky,
        yellow: colors.amber,
        amber: colors.amber,
        emerald: colors.emerald,
      }
    },
  },
  plugins: [],
}
