

module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    screens: {
      '3xl': {'max': '2000px'},

      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1379px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1100px'},
      // => @media (max-width: 1023px) { ... }

      'l': {'max': '1000px'},

      'm': {'max': '900px'},

      'mmm': {'max': '800px'},

      'md': {'max': '750px'},
      // => @media (max-width: 767px) { ... }

      'smd': {'max': '650px'},

      'mm': {'max': '500px'},

      'sm': {'max': '450px'},

      '/sm': {'max': '350px'},

      '2sm': {'max': '300px'},

      '/2sm': {'max': '275px'},

      '3sm': {'max': '250px'},

      '/3sm': {'max': '225px'},

      '4sm': {'max': '200px'},
      // => @media (max-width: 639px) { ... }

      'minmd': {'min': '750px'},
    },

    maxWidth: {
      '1/5': '30%',
    },
    minWidth: {
      '1/5': '27%',
    },
    fontFamily: {
      'raleway': ['Raleway', 'sans-serif'],
      'cin' : ['Cinzel', 'sans-serif'],
    },
    extend: {
      colors: {
        'cus-yellow': '#EAD185',
      },
      fontSize: {
        xxsm: '9px',
        xsm: '10px',
        smm: '11px',
        sm: '0.8rem',
        base: '1rem',
        xl: '1.25rem',
        txl: '1.563rem',
        ttxl: '1.953rem',
        fxl: '2.441rem',
        ffxl: '3.052rem',
      },
      spacing: {
        '25%': '25%',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("tailwind-gradient-mask-image")
  ],
}
