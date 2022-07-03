module.exports = {
  content: ['./components/**/*.tsx', './pages/**/*.tsx', './layouts/**/*.tsx'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['Roboto', 'system-ui'],
    },
    fontSize: {
      sm: ['14px', '20px'],
      base: ['16px', '24px'],
      lg: ['20px', '28px'],
      xl: ['24px', '32px'],
      '2xl': ['28px', '36px'],
      '3xl': ['32px', '40px'],
    },
    extend: {
      colors: {
        'palette-light': {
          primary: '#222831',
          secondary: '#39A2DB',
          light: '#FAFAFF',
          text: '#636B83',
        },
        'palette-dark': {
          primary: '#00bcd4',
          secondary: '#ff9800',
          light: '#FAFAFF',
          text: '#636B83',
        },
      },
    },
  },
  plugins: [],
};
