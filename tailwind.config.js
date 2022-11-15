/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideIn: {
          "0%": { transform: "translate(-25,0)" },
          "10%": { transform: "translate(-20,0)" },
          "20%": { transform: "translate(-15,0)" },
          "30%": { transform: "translate(-10,0)" },
          "40%": { transform: "translate(-5,0)" },
          "50%": { transform: "translate(-0,0)" },
          "60%": { transform: "translate(-0,0)" },
          "100%": { transform: "translate(-0,0)" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
