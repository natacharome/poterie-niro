/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        colors: {
          'primary': '#484040',
          'secondary': '#FFB682',
          'tertiary': '#F9F7F4'
        },
        screens: {
          'lg': '1300px',
          'md': '900px',
        }
      },
      fontFamily: {
        'base': ['"Manrope"', 'sans-serif'],
      }
    },
    plugins: [
      require('@tailwindcss/typography'),
    ],
  }
  
  