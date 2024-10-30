/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary_50: "#E6F2FF",
        primary_500: "#0078FF",
        secondary_50: "#FFF9E9",
        secondary_500: "#FFC025",
        purple_50: "#F4ECF2",
        purple_500: "#93437C",
        brown_50: "#F8F2F0",
        brown_500: "#BA7B6B",
        green_50: "#EEF9F1",
        green_500: "#50C36E",
        gray_50: "#F3F4F6",
        gray_100: "#D9DEE2",
        gray_200: "#C7CDD5",
        gray_500: "#8593A3",
        gray_700: "#5E6874",
        gray_900: "#383E44",
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [],
};
