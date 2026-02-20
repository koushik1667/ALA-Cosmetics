/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blush: '#F9DCE3',
        nude: '#EED5C4',
        gloss: '#FFF7FB',
        ink: '#121212'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        glow: '0 10px 30px rgba(249, 220, 227, 0.6)'
      }
    }
  },
  plugins: []
};
