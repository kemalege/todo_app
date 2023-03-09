/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true
    },
    extend: {
      colors: {
        'todo-purple': '#2F1A67',
        'todo-blue': '#292775',
        'todo-grey': '#9C92B5',
        'todo-white': '#EDEDF5',
        'todo-yellow': '#EDE49C',
        
      },
    },
    fontFamily: {
      note: ['Roboto','sans-serif']
    }
  },
  plugins: [],
}