module.exports = {
  content: ['./views/**/*.erb', './lib/**/*.rb'],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
