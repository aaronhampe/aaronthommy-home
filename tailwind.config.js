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
      colors: {
        primary: {
          DEFAULT: '#3490dc',
          dark: '#2779bd',
        },
        // Erweiterte Farbpalette für Dark Mode
        dark: {
          bg: {
            primary: '#121212',
            secondary: '#1e1e1e',
            tertiary: '#2d2d2d'
          },
          text: {
            primary: '#f1f1f1',
            secondary: '#a0a0a0'
          }
        }
      },
      // Verbesserte Schatten für Dark Mode
      boxShadow: {
        'dark-sm': '0 1px 2px 0 rgba(0, 0, 0, 0.4)',
        'dark-md': '0 4px 6px -1px rgba(0, 0, 0, 0.4), 0 2px 4px -1px rgba(0, 0, 0, 0.4)',
        'dark-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.4), 0 4px 6px -2px rgba(0, 0, 0, 0.4)',
      },
    },
  },
  
  plugins: [],
}
