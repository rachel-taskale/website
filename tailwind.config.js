/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "background": "#081140",
        "t-primary": "#ECE4C2",
        "t-secondary": "#8D8AA6",
        'dark-100':"#252653",
        'dark-200': '#3F3D67'


      },
      listStyleType: {
        none: 'none',
        disc: 'disc',
        decimal: 'decimal',
        square: 'square',
        dash: '-',
      },
      spacing: {
        '100': '100rem',
        '600':'600px',
        'window':'100%'
      }
    },
  },
  plugins: [],
}

        // "pink-highlight": "#b661de",
