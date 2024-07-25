/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'custom-gradient-1': 'linear-gradient(90deg, hsla(191, 75%, 60%, 1) 0%, hsla(248, 87%, 36%, 1) 100%)',
      },
    },
  },
  plugins: [],
}