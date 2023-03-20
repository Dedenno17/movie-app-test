/** @type {import('tailwindcss').Config} */

const { join } = require('path');

module.exports = {
  content: [
    join(__dirname, './pages/**/*.{js,ts,jsx,tsx}'),
    join(__dirname, './src/**/*.{js,ts,jsx,tsx}'),
  ],
  theme: {
    extend: {
      colors: {
        primaryRed: '#E50914',
        primaryGrey: '#C8C6C7',
        secondaryGrey: '#272A28',
        primaryWhite: '#F9F9F9',
        primaryBlack: '#0F0F0F',
      },
    },
  },
  plugins: [],
};
