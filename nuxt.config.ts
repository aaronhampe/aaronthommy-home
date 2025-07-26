// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: false },
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt"],

  plugins: ["~/plugins/i18n.js"],
  css: ["~/assets/css/main.css", "~/assets/css/hero-section.css", "~/assets/css/patreon-section.css"],
  vite: {
    optimizeDeps: {
      include: ["vue", "vue-router", "pinia", "swiper", "vue-i18n"],
    },
    build: {
      minify: false, // Im Entwicklungsmodus nicht minifizieren
      sourcemap: false,
    },
    server: {
      hmr: {
        clientPort: 24678,
        host: "0.0.0.0",
      },
      host: "0.0.0.0",
    },
  },
  nitro: {
    esbuild: {
      options: {
        target: "esnext",
        minify: false,
      },
    },
  },
});
