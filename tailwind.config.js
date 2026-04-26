/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./index.tsx",
    "./App.tsx",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        serif: ['"Newsreader"', 'Georgia', 'serif'],
      },
      colors: {
        bg: '#0a0908',
        surface: '#100f0e',
        border: '#1c1917',
        accent: '#bf9f75',
        accentHover: '#ccb391',
        accentDim: '#a68a63',
        text: {
          primary: '#e6d9c9',
          highlight: '#f2ece4',
          secondary: '#a8a29e',
          muted: '#57534e',
        },
      },
      backgroundImage: {
        'grid-pattern':
          "linear-gradient(to right, rgba(191, 159, 117, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(191, 159, 117, 0.05) 1px, transparent 1px)",
      },
      backgroundSize: {
        'grid-pattern': '60px 60px',
      },
    },
  },
  plugins: [],
};
