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
        Hero_Leaf: 'url("https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=600")',
        About_Phone: 'url("https://images.pexels.com/photos/3850588/pexels-photo-3850588.jpeg?auto=compress&cs=tinysrgb&w=600")',
        CTA_SolarPanel: 'url("https://images.pexels.com/photos/9875443/pexels-photo-9875443.jpeg?auto=compress&cs=tinysrgb&w=600")',
      }
    },
  },
  plugins: [],
};
