/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        BlueMain: "#0059a7",
        CoralMain: "#d32f2f",
        DarkMain: "#30374f",
        BlueLight: "#2419ff",
      },
    },
  },
  plugins: [],
};
