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
    // Removed i18n (site now single-language English)
  ],

  css: [
    "~/assets/css/main.css",
    "~/assets/css/hero-section.css",
    "~/assets/css/patreon-section.css",
  ],

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
    provider: "vercel",
    format: ["webp", "avif", "jpg"],
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
  // i18n block removed

  cookieControl: {
    // Single language setup (English only)
    locales: ["en"],

    /* Texte überschreiben  */
    localeTexts: {},

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
          name: "Session",
          description: "Stores session preferences",
          targetCookieIds: ["_session"],
        },
      ],
      optional: [
        {
          id: "analytics",
          name: "Plausible Analytics",
          description: "Anonymous site usage analytics",
          isPreselected: false,
        },
        {
          id: "youtube",
          name: "YouTube Embeds",
          description: "Loads embedded YouTube videos",
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