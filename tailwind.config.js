/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",


  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        Arbutus: ["Arbutus", "serif"],
        Handlee: ["Handlee", "cursive"],
        Kalam: ["Kalam", "cursive"],
        Actor: ["Actor", "sans-serif"],
        Inter: ["Inter", "sans-serif"],
        JetBrainsMono: ["JetBrains Mono", "monospace"],
        Sora: ["Sora", "sans-serif"],
        Ubuntu: ["Ubuntu", "sans-serif"],
      },
    },
  },
  plugins: [],
}

