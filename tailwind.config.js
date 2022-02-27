module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'contact-image' : "url('./src/assets/ink.jpg')"
      }
    },
  },
  plugins: [
     require('@tailwindcss/forms'),
  ],
}