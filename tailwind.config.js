/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        mustard: '#F4B400',
        tomato: '#E63946',
        cream: '#FFF4E0',
        chocolate: '#3D2314',
      },
      fontFamily: {
        display: ['Fredoka', 'Baloo 2', 'cursive'],
        body: ['Poppins', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
};
