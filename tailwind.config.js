module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'port-main': '#141414',
        'main-darker': '#101010',
        'port-second': '#B58762',
        'second-darker': '#876449',
        'port-gray': '#b7b7b7'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
