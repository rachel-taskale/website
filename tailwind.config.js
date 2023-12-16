/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'subtitle-blue': '#243e6a',
        'red-highlight': "#e6646d",
        'green-highlight': "#c2d94c",
        'orange-highlight':"#ff8f40",
        "blue-highlight":"#56c0fe",
        "blue-overlay":"#243e6a95",
        "transparent": "ffffff00"

      },
      listStyleType: {
        none: 'none',
        disc: 'disc',
        decimal: 'decimal',
        square: 'square',
        dash: '-',
      }
    },
  },
  plugins: [],
}