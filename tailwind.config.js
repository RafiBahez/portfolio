module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'port-black': '#141414',
        'port-dark-black': '#1121212',
        'port-orange': '#E1A87A',
        'port-gray': '#B7B7B7'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
