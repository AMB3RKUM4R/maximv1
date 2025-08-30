/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          bg: "#000000",
          primary: "#FFD500",
          "primary-dark": "#B39500",
          glow: "rgba(255, 213, 0, 0.15)",
          purple: "#a855f7",
          cyan: "#06b6d4",
        },
      },
      fontFamily: {
        mono: ["'Courier New'", "monospace"],
      },
      keyframes: {
        "glitch-smooth": {
          "0%, 100%": { textShadow: "none", transform: "none" },
          "25%": { textShadow: "2px 2px 0px #f87171, -2px -2px 0px #60a5fa", transform: "translate(-1px, 1px)" },
          "50%": { textShadow: "2px -2px 0px #f87171, -2px 2px 0px #60a5fa", transform: "translate(1px, -1px)" },
          "75%": { textShadow: "-2px 2px 0px #f87171, 2px -2px 0px #60a5fa", transform: "translate(1px, 1px)" },
        },
        "scan-smooth": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
        "digital-rain-smooth": {
            "0%": { transform: "translateY(-100%)", opacity: "0" },
            "20%": { opacity: "1" },
            "90%": { opacity: "1" },
            "100%": { transform: "translateY(100vh)", opacity: "0" },
        },
        "float-smooth": {
            "0%": { transform: "translateY(0px)" },
            "50%": { transform: "translateY(-20px)" },
            "100%": { transform: "translateY(0px)" },
        },
      },
      animation: {
        "glitch-smooth": "glitch-smooth 0.3s linear",
        "pulse-smooth": "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "spin-smooth": "spin 10s linear infinite",
        "scan-smooth": "scan-smooth 8s ease-in-out infinite",
        "digital-rain-smooth": "digital-rain-smooth 5s linear infinite",
        "float-smooth": "float-smooth 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};