/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ["Montserrat", "Sans-Serif", "Arial"],
        Inter: ["Inter", "Sans-Serif", "Arial"],
      },
    },
  },
  plugins: [],
};
