/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ["Montserrat", "Sans-Serif", "Arial"],
        Inter: ["Inter", "Sans-Serif", "Arial"],
      },
      backgroundImage:{
        Hero: 'url("https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=600")'
      }
    },
  },
  plugins: [],
};
