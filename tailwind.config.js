/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mpp-green': '#008751',       // primary brand color
        'mpp-green-dark': '#00563F',  // secondary/accent
        'mpp-white': '#FFFFFF',       // base/background
        'mpp-red': '#CE1126',         // accent — CTAs, highlights, alerts
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
