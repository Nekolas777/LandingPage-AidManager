/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '2px 2px 4px rgba(0, 0, 0, 0.2)'
      },
      colors: {
        'primary': '#3652AD',
        'secondary': '#6CFBCE',
        'third': '#20C198',
        'secondary-dark': '#008A65',
        'dark-green': 'rgba(3, 61, 47)',
        'error': 'hsl(0, 100%, 63%)',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'lora': ['Lora', 'serif'],
      }
    },
  },
  plugins: [],
}

