module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Roboto', 'Helvetica', 'Arial', 'sans-serif']
      },
      colors: {
        gray: {
          500: 'rgba(0,0,0,0.05)',
          600: 'rgba(0,0,0,0.1)',
          700: '#cccccc',
          800: '#606060',
          900: '#030303',
        },
        red: {
          900: '#f00',
        }
      }
    }
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
    },
    inset: {
      bottom: {
        2: '0.5rem',
      }
    }
  },
  plugins: [],
}
