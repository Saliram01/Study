/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow : {
        'md' : '2px 0px 0px 2px rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [],
}

