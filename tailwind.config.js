/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        studio: {
          black: "#09090b", // Deep rich obsidian
          dark: "#121214",  // Soft slate black
          card: "#18181b",  // Cards background matching dark theme
          gold: {
            DEFAULT: "#dfba6b", // Elegant champagne gold
            light: "#f0d59e",
            dark: "#ca9f4a",
            hover: "#ffd98c"
          },
          border: "#27272a", // Dark separator
          borderGold: "#3a3222" // Muted gold border
        }
      },
      fontFamily: {
        cinzel: ["Cinzel", "serif"],
        serif: ["Playfair Display", "serif"],
        sans: ["Plus Jakarta Sans", "Inter", "sans-serif"]
      },
      letterSpacing: {
        widest: "0.25em"
      }
    },
  },
  plugins: [],
}
