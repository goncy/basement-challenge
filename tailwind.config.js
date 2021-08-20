module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        'gradient-black-0': '#1D1D1D',
        'gradient-black-1': '#151515'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
