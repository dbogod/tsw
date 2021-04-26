module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        xs: '400px',
      },
      colors: {
        body: 'var(--body-color)',
        'cta-fill': 'var(--cta-primary-fill)',
        'cta-fill-hover': 'var(--cta-primary-fill-hover)',
        'cta-text-color': 'var(--cta-primary-text-color)',
        'cta-text-color-hover': 'var(--cta-primary-text-color-hover)',
        'cta-border-color': 'var(--cta-primary-border-color)',
        'cta-secondary-fill': 'var(--cta-secondary-fill)',
        'cta-secondary-fill-hover': 'var(--cta-secondary-fill-hover)',
        'cta-secondary-text-color': 'var(--cta-secondary-text-color)',
        'cta-secondary-border-color': 'var(--cta-secondary-border-color)',
        'hot-pink': 'var(--colours-hot-pink)',
        'emperor': 'var(--color-emperor)',
        'nav-mobile-background': 'var(--nav-mobile-bg-color)'
      },
      fontFamily: {
        display: ['Merriweather', 'serif'],
        body: ['Roboto', 'sans-serif']
      },
      lineHeight: {
        'heading': '1.2'
      },
      outline: {
        standard: '3px dotted var(--outline-color)',
      },
      spacing: {
        18: '4.5rem'
      }
    },
  },
  variants: {},
  plugins: [],
}
