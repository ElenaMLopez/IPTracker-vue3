module.exports = {
  purge: ['./public/**/*.html', './src/**/*.vue'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      // eslint-disable-next-line no-unused-vars
      backgroundImage: (theme) => ({
        "hero-pattern": "url('pattern-bg.png')",
      }), 
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
