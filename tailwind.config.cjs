/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        main: 'minmax(0, 1fr) minmax(0, 80em) minmax(0, 1fr)'
      }
    }
  },
  plugins: []
}
