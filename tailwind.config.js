module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        xs: '400px',
      },
      colors: {
        body: 'rgba(0, 0, 0, 0.8)'
      },
      fontFamily: {
        display: ['Merriweather', 'serif'],
        body: ['Roboto', 'sans-serif']
      }
    },
  },
  variants: {},
  plugins: [],
}
