/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-custom": "#E5E7EB",
      },
      // height: {
      //   '80vh-screen': '80vh'
      // },
      container: {
        center: true,
        padding: "2rem",
      },
    },
  },
  plugins: [],
};
