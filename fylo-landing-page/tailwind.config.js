/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#05013e',
        'btn-primary': '#2f65f9',
        'btn-primary-hover': '#6b9bff',
        'icon-hover': '#6397fc',
        'get-started': '#575989',
        'productivity': '#f9f8fe',
      },
      fontFamily: {
        'Raleway': ['Raleway', 'sans-serif'],
        'OpenSans': ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
