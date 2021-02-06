const colors = require('tailwindcss/colors')

module.exports = {
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  theme: {
    container: {
      center: true,
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      blue: {
        light: '#298cd5',
        DEFAULT: '#021526',
        dark: '#010E18',
      },
      white: colors.white,
      black: colors.black,
      gray: colors.trueGray,
    }
  },
  variants: {},
  plugins: [],
}
