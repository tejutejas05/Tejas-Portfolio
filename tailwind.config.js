/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ["'Playfair Display'", "Georgia", "serif"],
        mono: ["'IBM Plex Mono'", "'Courier New'", "monospace"],
      },
      keyframes: {
        shimmer: {
          "0%":   { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        "badge-glow": {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(74,222,128,0.35)" },
          "50%":      { boxShadow: "0 0 0 7px rgba(74,222,128,0)" },
        },
        "border-breathe": {
          "0%, 100%": { borderColor: "rgba(255,255,255,0.06)" },
          "50%":      { borderColor: "rgba(255,255,255,0.14)" },
        },
        "scroll-bob": {
          "0%, 100%": { transform: "translateX(-50%) translateY(0)" },
          "50%":      { transform: "translateX(-50%) translateY(-7px)" },
        },
      },
      animation: {
        shimmer:        "shimmer 5s linear infinite",
        "badge-glow":   "badge-glow 2.5s ease-in-out infinite",
        "border-breathe": "border-breathe 3s ease-in-out infinite",
        "scroll-bob":   "scroll-bob 2.6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
}