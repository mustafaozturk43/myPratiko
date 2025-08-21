/** @type {import('tailwindcss').Config} */
module.exports = {
  // Vuetify ile çakışmaları önlemek için ön ek ekliyoruz.
  
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        "pastel-blue": "#A7C7E7",
        "pastel-green": "#C1E1C1",
        "pastel-pink": "#F8C8DC",
        "pastel-yellow": "#FDFD96",
      },
    },
  },
  plugins: [],
};
