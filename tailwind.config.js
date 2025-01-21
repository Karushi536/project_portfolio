/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        customPurple: "#7D4AEB",
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], // Add Google Fonts like Poppins
        serif: ['Merriweather', 'serif'], // Example: Merriweather
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      animation:{
        'fade-in': 'fadeIn 1s ease-in-out forwards'
      },
      keyframes:{
        fadeIn:{
          '0%': { opacity: '0'},
          '100%': { opacity: '1'},
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'), // Styles for forms
    require('@tailwindcss/typography'), // Beautiful typography styles
  ],
};
