/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      fontFamily: {
        amandine: ["Amandine", "cursive"],
        michroma: ["Michroma", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        decorative: ['"Cinzel Decorative"', "cursive"],
        vishal: ['"Cinzel"', "serif"],
        poppins: ["poppins", "serif"],
      },
      animation: {
        wave: "waveSlide 2s linear infinite",
      },
      keyframes: {
        waveSlide: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      animation: {
        flame: "flame 1.5s ease-in-out infinite",
      },
    },
  },

  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  plugins: [],
};
