// https://nuxt.com/docs/api/configuration/nuxt-config
import { writeFile } from 'node:fs/promises'

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
    strict: true,  // aktiviert alle Defaults
    nonce : true,
    sri   : true,

    headers: {
      /* --- Content-Security-Policy wie gehabt --- */
      contentSecurityPolicy: {
        "img-src"    : ["self", "data:", "https://i.ytimg.com"],
        "style-src"  : ["self", "unsafe-inline",
                        "https://fonts.googleapis.com", "https://fonts.gstatic.com"],
        "font-src"   : ["'self'", "https://fonts.gstatic.com"],
        "script-src" : ["'strict-dynamic'", "'nonce-{{nonce}}'",
                        "https://www.google.com", "https://www.gstatic.com",
                        "https://plausible.io"],
        "connect-src": ["'self'", "https://plausible.io", "https://formspree.io"],
        "frame-src"  : ["https://www.youtube.com", "https://www.google.com"]
      },

      /* --- Fehlende / korrigierte Header --- */
      strictTransportSecurity: {
        maxAge           : 63072000,   // 2 Jahre (empfohlen) :contentReference[oaicite:3]{index=3}
        includeSubdomains: true,
        preload          : true        // optional, aber gibt Extrapunkte
      },

      referrerPolicy           : 'strict-origin-when-cross-origin',
      xFrameOptions            : 'SAMEORIGIN',
      xContentTypeOptions      : 'nosniff',
      crossOriginResourcePolicy: 'same-origin'
    },

    /* Middleware (bleibt unverändert) */
    rateLimiter        : { tokensPerInterval: 200, interval: 'minute' },
    requestSizeLimiter : { maxRequestSizeInBytes: 10_000 }
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