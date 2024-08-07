/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro, html, js, jsx, ts, tsx}',
    './src/components/*.{astro, html, js, jsx, ts, tsx}',
    './src/layouts/*.{astro, html, js, jsx, ts, tsx}',
    './src/pages/*.{astro, html, js, jsx, ts, tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}

