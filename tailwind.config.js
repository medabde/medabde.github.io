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
      '4xl': ['36px', '44px'],
      '5xl': ['50px', '48px'],
    },
    extend: {
      colors: {
        'palette-light': {
          primary: '#1C3879',
          secondary: '#263859',
          accent: '#EAE3D2',
          light: '#FAFAFF',
          text: '#636B83',
        },
        'palette-dark': {
          primary: '#17223B',
          secondary: '#263859',
          light: '#FAFAFF',
          text: '#636B83',
        },
      },
    },
  },
  plugins: [],
};
