/** @type {import('tailwindcss').Config} */
// #b2edd7
// #0c0c24
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "background": "#16191B",
        "t-primary":"#F8F8F2",
        "t-secondary":"#C2A7F7",
        "t-highlight":"#b2edd7",
        'recessed':"#0a0b21",
        // "t-highlight":"#41CFE6",
        // 'dark-100':"#26273b",
        // 'dark-hover-100':"#26273b20",
        // 'dark-200': '#26273b'
        'dark-hover-100':"#1b203350",
        'dark-100':"#1b2033"


      },
      listStyleType: {
        none: 'none',
        disc: 'disc',
        decimal: 'decimal',
        square: 'square',
        dash: '-',
      },
      spacing: {
        '120':'120px',
        '100': '100rem',
        '600':'700px',
        'window':'100%'
      },
      text:{

      }
    },
  },
  plugins: [],
}




// "background": "#101126",
// "t-primary":"#d5f5e9",
// "t-secondary":"#ccf3e470",
// "t-highlight":"#b2edd7",
// // "t-highlight":"#41CFE6",
// // 'dark-100':"#26273b",
// // 'dark-hover-100':"#26273b20",
// // 'dark-200': '#26273b'
// 'dark-hover-100':"#1b203350",
// 'dark-100':"#1b2033"
        // "pink-highlight": "#b661de",
