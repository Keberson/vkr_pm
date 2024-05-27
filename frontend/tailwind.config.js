/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./src/**/*.tsx",
  ],
  theme: {
    fontFamily: {
      'mono': []
    },
    colors: {
      'background': '#0F102C',
      'background-secondary': '#272847',
      'block-background': '#23233B',
      'block-background-secondary': '#434459',
      'text': '#FEFFFF',
      'text-muted': '#737488',
      'text-secondary': '#656682'
    },
    extend: {},
  },
  plugins: [],
}