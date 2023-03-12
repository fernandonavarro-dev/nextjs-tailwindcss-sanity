// const { theme } = require('@sanity/demo/tailwind')

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     './sanity/**/*.{js,ts,jsx,tsx}',
//     './pages/**/*.{js,ts,jsx,tsx}',
//     './intro-template/**/*.{js,ts,jsx,tsx}',
//   ],
//   theme: {
//     ...theme,
//     // Overriding fontFamily to use @next/font loaded families
//     fontFamily: {
//       mono: 'var(--font-mono)',
//       sans: 'var(--font-sans)',
//       serif: 'var(--font-serif)',
//     },
//   },
//   plugins: [require('@tailwindcss/typography')],
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [require('tailwind-scrollbar')],
}
