/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        custom: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px",
        custom2:
          "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
      },
      backgroundImage: {
        "hero-pattern": "url('/images/pattern.svg')",
        "hero-bg": "url('/images/heroBg.png')",
        "team-bg": "url('/images/teamBg.png')",
      },
      keyframes: {
        xy: {
          "0%, 100%": { backgroundSize: "400% 400%", backgroundPosition: "0" },
          "50%": { backgroundSize: "200% 200%", backgroundPosition: "100%" },
        },
      },
      animation: {
        xy: "xy 5s ease infinite",
      },
    },
  },
  plugins: [],
};
