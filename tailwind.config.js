/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/index.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['poppins','sans-serif']
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          'sm' : '512px',
          'md' : '720px',
          'lg' : "1024px",
          'xl' : "1140px",
          '2xl' : "1320px"
        }
      },

  },
  },
  plugins: [],
}
