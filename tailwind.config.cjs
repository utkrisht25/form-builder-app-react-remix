// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}", // This tells Tailwind to look for classes in your Remix files (JS/JSX)
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
