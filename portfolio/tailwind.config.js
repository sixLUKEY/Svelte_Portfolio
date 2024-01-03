/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'dark' : '#1A1A1A',
        'light' : '#F8F8F8',
        'primary' : '#F99909',
        'secondary' : '#CDCCCC'
      }
    },
  },
  plugins: [],
}

