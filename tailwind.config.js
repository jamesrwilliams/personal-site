const colors = require('tailwindcss/colors')

module.exports = {
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      blue: {
        light: '#298cd5',
        DEFAULT: '#021526',
        dark: '#010E18',
      },
      indigo: colors.indigo,
      white: colors.white,
      black: colors.black,
      gray: colors.trueGray,
    },
    extend: {
      typography: {
        DEFAULT: {
          css: {
            code: {
              color: '#24292e',
              padding: '.2em .4em !important;',
              borderRadius: 6,
              fontSize: '85%',
              background: '#f3f3f3',
              fontWeight: '400',
              '&::before': {
                content: '"" !important;',
              },
              '&::after': {
                content: '"" !important;',
              },
              '&::selection': {
                color: '#f3f3f3;'
              }
            },
            a: {
              code: {
                color: '#fff',
              }
            }
          },
        },
      }
    }
  },
  variants: {},
  plugins: [
      require('@tailwindcss/typography'),
  ],
}
