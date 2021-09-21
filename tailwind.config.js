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
      },
      animation: {
        fadeIn: "fadeIn 2.3s ease-in forwards"
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 }
        }
      },
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
