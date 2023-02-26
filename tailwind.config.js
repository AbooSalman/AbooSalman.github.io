/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#070B0D",
        dark2: "#0C1012",
        darkGrey: "#444854"
      },
      maxWidth: {
        'xt': '1440px'
      },
      screens: {
        'xt': '1350px'
      },
      fontFamily: {
        'freight-regular': 'freight-regular',
        handwriting: 'handwriting',
        'gilroy-medium': 'gilroy-medium',
        'axiforma-regular': 'axiforma-regular',
        'axiforma-light': 'axiforma-light',
        'axiforma-bold': 'axiforma-bold'
      }
    },
  },
  plugins: [],
}