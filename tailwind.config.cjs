/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        sky: {
          nav: '#87cefa',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
