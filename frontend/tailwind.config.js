/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        leckerli: ['"Leckerli One"', 'cursive'], // Add 'cursive' as fallback
        MarkoOne: ['"Marko One"', 'cursive'], // Add 'cursive' as fallback
        Aclonica: ['"Aclonicas"', 'cursive'], // Add 'cursive' as fallback
      },
    },
  },
  plugins: [],
}

