/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        media375: "375px",
        media425: "425px",
        media1290: "1290px",
        media1370: "1370px",
        media1920: "1920px",
      },
    },
  },
  plugins: [],
};
