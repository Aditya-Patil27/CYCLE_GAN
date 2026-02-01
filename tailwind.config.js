/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        saffron: '#FF9933',
        gold: '#FFD700',
        'mc-green': '#7CB342',
        'mc-dirt': '#8D6E63',
        'mc-stone': '#9E9E9E',
        'mc-gold': '#FFC107',
        'mc-iron': '#BDBDBD',
      },
      fontFamily: {
        pixel: ['"Press Start 2P"', 'cursive'],
        vt323: ['"VT323"', 'monospace'],
      },
      boxShadow: {
        'pixel': '8px 8px 0px #000',
        'pixel-sm': '4px 4px 0px #000',
        'pixel-gold': '8px 8px 0px #B8860B',
        'pixel-saffron': '4px 4px 0px #CC7A29',
      },
    },
  },
  plugins: [],
}
