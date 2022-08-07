/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#05013e',
        'icon-hover': '#6397fc',
      },
      fontFamily: {
        'Raleway': ['Raleway', 'sans-serif'],
        'OpenSans': ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
