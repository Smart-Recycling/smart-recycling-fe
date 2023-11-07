/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00AF5C",
        darkBlue: "#688089",
        secondary: "#26a57d",
      },
    },
  },
  plugins: [],
};
