module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        'gradient-black-0': '#1D1D1D',
        'gradient-black-1': '#151515'
      },
      spacing: {
        '27.5':'27.5rem',
        '36.2':'36.2rem',
        '5/12':'41.666667%',
        '47.5':'47.5rem',
        '51.5':'51.5rem',
        '505':'505px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
