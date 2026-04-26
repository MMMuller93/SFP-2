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
        // Light Mode B — Polished White. Single bright base, hairlines do the dividing.
        bg: '#ffffff',
        surface: '#f6f5f2',              // subtle warm wash for elevated cards (used at low opacity in blog/services)
        surfaceRecessed: '#efeae0',     // deeper warm tint for form wells and section dividers
        hoverTint: '#faf8f3',            // barely-there warm wash on hover
        border: '#e1ddd7',               // ≈ rgba(26,23,20,0.14) on white
        borderStrong: '#d3cdc4',         // ≈ rgba(26,23,20,0.22)
        borderFaint: '#efeeee',          // ≈ rgba(26,23,20,0.07)
        // Bronze, darkened from #bf9f75 to clear AA on white (~5.4:1)
        accent: '#8a6d44',
        accentHover: '#6e5634',
        accentDim: '#a07e4f',
        ink: '#0e0c0a',                  // alias for text.highlight, used in arbitrary opacity (e.g. via-ink/5)
        text: {
          primary: '#3a3631',            // warm graphite body
          highlight: '#0e0c0a',          // near-black headline
          secondary: '#6f6960',
          muted: '#9a948a',
        },
      },
      backgroundImage: {
        'grid-pattern':
          "linear-gradient(to right, rgba(138, 109, 68, 0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(138, 109, 68, 0.045) 1px, transparent 1px)",
      },
      backgroundSize: {
        'grid-pattern': '60px 60px',
      },
    },
  },
  plugins: [],
};
