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
    /* Pflicht!  -> verhindert den 500-Fehler */
    locales: ["de", "en"],

    /* Texte überschreiben  */
    localeTexts: {
      de: {
        barTitle: "🍪 Cookies gefällig?",
        barDescription:
          "Ein paar sind technisch nötig – andere helfen mir, Musik besser zu machen.",
        acceptAll: "Alle akzeptieren",
        acceptNecessary: "Nur notwendige",
        decline: "Ablehnen",
        showDetails: "Auswahl anpassen",
        save: "Speichern",
      },
    },

    barPosition: "bottom-full",
    isAcceptNecessaryButtonEnabled: true,
    isModalForced: true,

    /* Farben / Glass-Look (Kurzfassung) */
    colors: {
      barBackground: "rgba(15,23,42,.60)",
      barTextColor: "#F1F5F9",
      modalBackground: "rgba(15,23,42,.70)",
      modalTextColor: "#F8FAFC",
      modalButtonBackground: "rgba(255,255,255,.10)",
      modalButtonHoverBackground: "rgba(255,255,255,.20)",
      modalButtonColor: "#F8FAFC",
      modalButtonSecondaryBackground: "linear-gradient(90deg,#6366F1,#8B5CF6)",
      modalButtonSecondaryColor: "#FFFFFF",
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
