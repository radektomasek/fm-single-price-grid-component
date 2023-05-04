/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
  ],
  theme: {
    extend: {
      screens: {
        sm: '375px',
        lg: '1440px',
      },
      colors: {
        cyan: 'hsl(179, 62%, 43%)',
        brightYellow: 'hsl(71, 73%, 54%)',
        lightGray: 'hsl(204, 43%, 93%)',
        backgroundGray: 'hsl(0, 0%, 95%)',
        grayishBlue: 'hsl(218, 22%, 67%)',
      },
      fontFamily: {
        karla: ['Karla', 'sans-serif'],
      },
      dropShadow: {
        'xl': '0 4px 4px rgba(0, 0, 0, 0.25)',
        '2xl': '0 10px 10px rgba(0, 0, 0, 0.097)'
      }
    },
  },
  plugins: [],
}