/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
      },
      colors: {
        main: '#3c6cb4',
        secondary: '#1a4482',
        black: 'rgba(0, 0, 0, 0.95)',
      },
    },
  },
  plugins: [],
};
