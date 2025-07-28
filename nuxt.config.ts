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
  cookieControl: {
    barPosition: "bottom-full",
    isAcceptNecessaryButtonEnabled: true,
    isModalForced: true,
    colors: {
    /* Modal */
    modalButtonBg:           'rgba(255,255,255,.10)',   // Sekundär
    modalButtonTextColor:    '#F1F5F9',
    modalButtonHoverBg:      'rgba(255,255,255,.20)',
    modalButtonBorder:       'rgba(255,255,255,.25)',

    modalButtonSecondaryBg:  'linear-gradient(90deg,#6366F1,#8B5CF6)', // Primär
    modalButtonSecondaryText: '#FFFFFF',
    modalButtonSecondaryHoverBg: 'linear-gradient(90deg,#818CF8,#A78BFA)',
  },
  localeStrings: {
    de: {
      acceptAll:        'Alle akzeptieren',
      acceptNecessary:  'Nur notwendige',
      decline:          'Ablehnen'
    }
  },

    cookies: {
      necessary: [
        {
          id: "session",
          name: { de: "Sitzung", en: "Session" },
          description: {
            de: "Merkt Sprache & Log-in",
            en: "Stores language and log-in",
          },
          targetCookieIds: ["_session"],
        },
      ],
      optional: [
        {
          id: "analytics",
          name: { de: "Plausible Analytics" },
          description: { de: "Anonyme Seitenstatistik" },
          // kein targetCookieIds nötig – Plausible arbeitet cookielos
          isPreselected: false, // wichtig!
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
