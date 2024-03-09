/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/**/*.{ts,tsx}`,
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    // uncommenting line below makes VSCode TailwindCSS plugin not working
    // require('@headlessui/tailwindcss'),
  ],
}
