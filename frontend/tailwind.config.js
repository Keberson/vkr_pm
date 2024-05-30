/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./src/**/*.tsx",
  ],
  theme: {
    fontFamily: {
      'mono': []
    },
    backgroundColor: {
      'background': '#0F102C',
      'background-secondary': '#272847',
      'block-background': '#23233B',
      'block-background-secondary': '#434459',
      'red': '#FF6F78',
      'blue': '#68BEF7',
      'green': '#1BBF2C'
    },
    colors: {
      'text': '#FEFFFF',
      'text-muted': '#737488',
      'text-secondary': '#656682',
      'text-third': '#DDDDDD',
      'text-hover': '#C0C0C0',
    },
    extend: {},
  },
  plugins: [],
}