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
      'green': '#1BBF2C',
      'light': '#DDDDDD'
    },
    colors: {
      'text': '#FEFFFF',
      'text-muted': '#737488',
      'text-secondary': '#656682',
      'text-third': '#DDDDDD',
      'text-hover': '#C0C0C0',
      'black': '#0F102C'
    },
    borderColor: {
      'gray': '#737488',
      'light': '#C0C0C0',
      'red': '#FF6F78',
      'blue': '#68BEF7',
      'green': '#1BBF2C',
    },
    height: {
      'icon': '30px',
      'full': '100%',
      '10': '10px',
      '5': '5px'
    },
    extend: {},
  },
  plugins: [],
}