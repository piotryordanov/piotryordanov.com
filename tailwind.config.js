module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: 'class',
  theme: {
    darkSelector: '.dark-mode',
    container: {
      center: true,
      padding: '1rem',
    },
    fontFamily: {
      header: ['Nunito Sans', 'sans-serif'],
      body: ['Nunito Sans', 'sans-serif'],
    },
    borderWidth: {
      '14': '14px',
      '12': '14px',
    },
    extend: {
      colors: {
        primary: {
          lighter: '#4FD1C5',
          default: '#2d3748',
          darker: '#319795',
        },
        secondary: {
          lighter: '#63B3ED',
          default: '#4299E1',
          darker: '#3182CE',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('tailwindcss-dark-mode')()],
}