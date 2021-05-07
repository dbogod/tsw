const { screens } = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xs: '400px',
      ...screens
    },
    extend: {
      boxShadow: {
        'img': '0 0.5rem 2rem -0.5rem rgb(0 0 0 / 50%)'
      },
      colors: {
        'hot-pink': 'var(--color-hot-pink)',
        'emperor': 'var(--color-emperor)',
        'body': 'var(--body-color)',
        'cta-fill': 'var(--cta-primary-fill)',
        'cta-fill-hover': 'var(--cta-primary-fill-hover)',
        'cta-text-color': 'var(--cta-primary-text-color)',
        'cta-text-color-hover': 'var(--cta-primary-text-color-hover)',
        'cta-border-color': 'var(--cta-primary-border-color)',
        'cta-secondary-fill': 'var(--cta-secondary-fill)',
        'cta-secondary-fill-hover': 'var(--cta-secondary-fill-hover)',
        'cta-secondary-text-color': 'var(--cta-secondary-text-color)',
        'cta-secondary-border-color': 'var(--cta-secondary-border-color)',
        'hero-title-color': 'var(--hero-title-color)',
        'link-color': 'var(--link-color)',
        'link-hover-color': 'var(--link-hover-color)',
        'nav-mobile-background': 'var(--nav-mobile-bg-color)',
        'nav-text-color': 'var(--nav-text-color)',
        'nav-text-color-hover': 'var(--nav-text-color-hover)',
      },
      fontFamily: {
        display: ['Merriweather', 'serif'],
        body: ['Roboto', 'sans-serif']
      },
      fontSize: {
        'hero-title-size': ['2.5rem', { lineHeight: '1' }],
        'hero-title-size-sm': ['3.5rem', { lineHeight: '1' }],
        'hero-title-size-xl': ['4.25rem', { lineHeight: '1' }]
      },
      lineHeight: {
        'heading': '1.2',
        'body': '1.65'
      },
      outline: {
        standard: '3px dotted var(--outline-color)',
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem'
      },
      maxHeight: {
        88: '22rem'
      },
      minHeight: {
        4: '1rem',
        '80vh': '80vh'
      },
      minWidth: {
        4: '1rem'
      },
      rotate: {
        10: '10deg'
      },
      transitionTimingFunction: {
        'ease-out': 'ease-out'
      }
    },
  },
  variants: {},
  plugins: [],
}
