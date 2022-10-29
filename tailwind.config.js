

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

      'max150': {'max': '1500px'},

      'max145': {'max': '1450px'},

      'max140': {'max': '1400px'},

      'max135': {'max': '1350px'},

      'max130': {'max': '1300px'},

      'max125': {'max': '1250px'},

      'max120': {'max': '1200px'},

      'max115': {'max': '1150px'},

      'max110': {'max': '1100px'},

      'max105': {'max': '1050px'},

      'max100': {'max': '1000px'},

      'max95': {'max': '950px'},

      'max90': {'max': '900px'},

      'max85': {'max': '850px'},

      'max80': {'max': '800px'},

      'max75': {'max': '750px'},

      'max70': {'max': '700px'},

      'max65': {'max': '650px'},

      'max60': {'max': '600px'},

      'max55': {'max': '550px'},

      'max50': {'max': '500px'},

      'max45': {'max': '450px'},

      'max40': {'max': '400px'},

      'max35': {'max': '350px'},

      'max30': {'max': '300px'},

      'max27': {'max': '275px'},

      'max25': {'max': '250px'},

      'max22': {'max': '225px'},

      'max20': {'max': '200px'},

      'min150': {'min': '1500px'},

      'min145': {'min': '1450px'},

      'min140': {'min': '1400px'},

      'min135': {'min': '1350px'},

      'min130': {'min': '1300px'},

      'min125': {'min': '1250px'},

      'min120': {'min': '1200px'},

      'min115': {'min': '1150px'},

      'min110': {'min': '1100px'},

      'min105': {'min': '1050px'},

      'min100': {'min': '1000px'},

      'min95': {'min': '950px'},

      'min90': {'min': '900px'},

      'min85': {'min': '850px'},

      'min80': {'min': '800px'},

      'min75': {'min': '750px'},

      'min70': {'min': '700px'},

      'min65': {'min': '650px'},

      'min60': {'min': '600px'},

      'min55': {'min': '550px'},

      'min50': {'min': '500px'},

      'min45': {'min': '450px'},

      'min40': {'min': '400px'},

      'min35': {'min': '350px'},

      'min30': {'min': '300px'},

      'min27': {'min': '275px'},

      'min25': {'min': '250px'},

      'min22': {'min': '225px'},

      'min20': {'min': '200px'},

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
        'cus-gray': '#282828'
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
        '100%': '100%',
        '95%': '95%',
        '90%': '90%',
        '85%': '85%',
        '80%': '80%',
        '75%': '75%',
        '70%': '70%',
        '65%': '65%',
        '60%': '60%',
        '55%': '55%',
        '50%': '50%',
        '45%': '45%',
        '40%': '40%',
        '39%': '39%',
        '38%': '38%',
        '37%': '37%',
        '36%': '36%',
        '35%': '35%',
        '34%': '34%',
        '33%': '33%',
        '32.5%': '32.5%',
        '32%': '32%',
        '31%': '31%',
        '30%': '30%',
        '29%': '29%',
        '28%': '28%',
        '27%': '27%',
        '26%': '26%',
        '25%': '25%',
        '24%': '24%',
        '23%': '23%',
        '22%': '22%',
        '21%': '21%',
        '20%': '20%',
        '15%': '15%',
        '10%': '10%',
        '5%': '5%',
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
