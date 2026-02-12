/** @type {import('tailwindcss').Config} */
module.exports = {
  // Dark Mode aktivieren mit class-Strategie
  darkMode: 'class',

  darkMode: 'class',
  variantOrder: [
    // …alles Voreingestellte…
    'first',
    /* responsive sm-2xl usw. */,
    'DEFAULT',           // utilities ohne Präfix
    'dark',              // DARK **danach** → überschreibt sicher
    /* hover, focus, motion-safe …*/
  ],

  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
    "*.{js,ts,jsx,tsx,mdx}"
  ],

  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        black: '#000000',
        white: '#ffffff',
        gray: {
          50: '#f9f9f9',
          100: '#f2f2f2',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
      },
    },
  },

  plugins: [],
}
