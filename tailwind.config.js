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

      'm': {'max': '900px'},

      'md': {'max': '750px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '450px'},

      '2sm': {'max': '300px'},
      // => @media (max-width: 639px) { ... }
    },
    maxWidth: {
      '1/5': '30%',
    },
    minWidth: {
      '1/5': '27%',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("tailwind-gradient-mask-image")
  ],
}
