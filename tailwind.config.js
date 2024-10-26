/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // This enables dark mode
  theme: {
    extend: {
      backgroundImage: {
        'dotted-pattern': "radial-gradient(circle, rgba(0, 0, 0, 0.2) 1px, transparent 1px)",
      },
      backgroundSize: {
        '20': '20px 20px',
      },
    },
    animation: {
      "spin-slow": "spin 8s linear infinite",
    },
  },
  plugins: [],
}