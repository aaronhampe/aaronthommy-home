// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  compatibilityDate: "2024-11-01",

  devtools: { enabled: false },

  site: {
    url: "https://aaronthommy.com",
    trailingSlash: false,
  },

  modules: [
    "@pinia/nuxt",
    "@nuxtjs/tailwindcss",
    "@dargmuesli/nuxt-cookie-control",
    "@nuxtjs/sitemap",
    "@nuxtjs/robots",
    "nuxt-og-image",
    "@nuxt/image",
    "nuxt-security",
    "@nuxtjs/i18n"
  ],

  css: [
    "~/assets/css/main.css",
    "~/assets/css/hero-section.css",
    "~/assets/css/patreon-section.css",
  ],

   security: {
    // Nonce + SRI → Strict CSP für SSR
    nonce: true,
    sri: true,

    headers: {
      /** nur dort anpassen, wo deine App extern lädt */
      contentSecurityPolicy: {                    // alles andere bleibt Default
        "img-src":   ["'self'", "data:", "https://i.ytimg.com"],
        "script-src": [
          "'strict-dynamic'",
          "'nonce-{{nonce}}'",
          "https://www.google.com",  // reCAPTCHA
          "https://www.gstatic.com",
          "https://plausible.io"
        ],
        "connect-src": ["'self'", "https://plausible.io"],
        "frame-src":   ["https://www.youtube.com", "https://www.google.com"]
      },

      strictTransportSecurity: {   // 180 Tage reichen fürs Testen
        maxAge: 60 * 60 * 24 * 180,
        includeSubdomains: true
      },

      referrerPolicy: "strict-origin-when-cross-origin",
      xFrameOptions:  "SAMEORIGIN",
      xContentTypeOptions: "nosniff",

      permissionsPolicy: {
        accelerometer: "none",
        autoplay:      "none",
        camera:        "none",
        fullscreen:    "self",
        geolocation:   "none",
        microphone:    "none"
      }
    },

    /** Middleware */
    rateLimiter:  { tokensPerInterval: 200, interval: "minute" },            // :contentReference[oaicite:2]{index=2}
    requestSizeLimiter: { maxRequestSizeInBytes: 10_000 },                   // :contentReference[oaicite:3]{index=3}
  },

  sitemap: {
    autoLastmod: true,
    credits: false,
    exclude: ["/old-index", "/tabs"],
  },

  robots: {
    allow: "/",
    disallow: ["/admin", "/old-index"],
    sitemap: "/sitemap.xml",
  },

  ogImage: {
    defaults: {
      component: "AaronThommyBanner",
      props: { title: "Aaron Thommy" },
    },
  },

  image: {
    provider: "ipx",
    format: ["webp", "avif", "jpg"], // Browser bekommt das Beste, das er kann
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      "2xl": 1536,
    },
    quality: 70,
  },

  i18n: {
  locales: [
    { code: 'de', iso: 'de-DE', file: 'de.json', name: 'Deutsch' },
    { code: 'en', iso: 'en-US', file: 'en.json', name: 'English' }
  ],
  langDir: 'locales/',
  defaultLocale: 'de'
},

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
      include: ["pinia", "swiper"],
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