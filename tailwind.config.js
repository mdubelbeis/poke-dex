/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "poke-water": "#1e90ff",
        "poke-fire": "#ff0000",
        "poke-electric": "#ffff00",
        "poke-grass": "#00ff00",
        "poke-bug": "#00ff00",
        "poke-normal": "#808080",
        "poke-fighting": "#808080",
        "poke-rock": "#a52a2a",
        "poke-ground": "#a52a2a",
        "poke-poison": "#800080",
        "poke-psychic": "#800080",
        "poke-dragon": "#c0c0c0",
        "poke-steel": "#c0c0c0",
        "poke-flying": "#00ffff",
        "poke-ice": "#00ffff",
        "poke-fairy": "#ff00ff",
        "poke-dark": "#4b0082",
        "poke-ghost": "#4b0082",
      },
      backgroundImage: {
        "pokeball": "url('/pokeball.png')",
      },
      fontFamily: {
        nintendo: ["Nintendo NES Font", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
