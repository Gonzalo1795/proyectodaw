/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        primary: "#A085B6",  // Morado claro
        secondary: "#F4E6D8", // Beige
        accent: "#FFD700",    // Amarillo dorado
        cardBg: "#A085B6",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};

