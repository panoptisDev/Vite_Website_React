/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dark_primary: "#242424",
        dark_secondary: "#2F2F2F",
        midnight: "#213547",
        light_secondary: "#F9F9F9",
      },
      backgroundImage: {
        lightbulb: "url('./src/assets/icon/light-bulb.png')",
        lighting: "url('./src/assets/icon/lighting.png')",
        tool: "url('./src/assets/icon/tool.png')",
        box: "url('./src/assets/icon/box.png')",
        screw: "url('./src/assets/icon/screw.png')",
        key: "url('./src/assets/icon/key.png')",
      },
    },
  },
  plugins: [],
};
