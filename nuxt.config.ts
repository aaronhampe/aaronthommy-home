// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: false },
  modules: [
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "@dargmuesli/nuxt-cookie-control",
  ],

  plugins: ["~/plugins/i18n.js"],
  css: [
    "~/assets/css/main.css",
    "~/assets/css/hero-section.css",
    "~/assets/css/patreon-section.css",
  ],

  /* ---------- Cookie Banner ---------- */
  cookieControl: {
    locales: ["de", "en"],

    /* Texte überschreiben  */
    localeTexts: {
      de: {
        acceptAll: "Alle akzeptieren",
        declineAll: "Nichts da",
        manageCookies: "Einstellungen",
        accept: "Akzeptieren",
        decline: "Ablehnen",
        save: "Speichern",
      },
    },

    barPosition: "bottom-full",
    isAcceptNecessaryButtonEnabled: true,
    isModalForced: true,

    /* Farben / Glass-Look (Kurzfassung) */
    colors: {
      barBackground: "rgba(99,102,241,.85)", // indigo-500/85
      barTextColor: "#FDF4FF", // fuchsia-50
      barButtonBackground: "rgba(255,255,255,.15)",
      barButtonHoverBackground: "rgba(255,255,255,.30)",
      barButtonColor: "#FDF4FF",
      modalBackground: "rgba(15,23,42,.75)", // slate-900/75
      modalTextColor: "#E2E8F0", // slate-300
      modalButtonSecondaryBackground: "linear-gradient(90deg,#EC4899,#6366F1)", // pink→indigo
      modalButtonSecondaryColor: "#fff",
    },
    

    /* Deine Cookie-Kategorien (neue API-Felder) */
    cookies: {
      necessary: [
        {
          id: "session",
          name: { de: "Sitzung" },
          description: { de: "Speichert Sprache & Log-in" },
          targetCookieIds: ["_session"],
        },
      ],
      optional: [
        {
          id: "analytics",
          name: { de: "Plausible Analytics" },
          description: { de: "Anonyme Seitenstatistik" },
          isPreselected: false, // nie vorauswählen!
        },
        {
          id: "youtube",
          name: { de: "YouTube-Embeds" },
          description: { de: "Lädt eingebettete Videos" },
          targetCookieIds: ["YSC", "VISITOR_INFO1_LIVE"],
          isPreselected: false,
        },
      ],
    },
  },

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
      },
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
