// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["@/assets/styles/custom.sass"],
  ssr: true,
  modules: [
    "nuxt-quasar-ui",
    "@nuxtjs/i18n",
    "@nuxtjs/robots",
    "nuxt-delay-hydration",
    "@pinia/nuxt",
    "nuxt-simple-sitemap",
    "@vite-pwa/nuxt",
  ],
  pwa: {
    manifest: {
      name: "roostec desenvolvimento - ltda",
      short_name: "roostec",
      start_url: ".",
      description: "Testing Nuxt3 PWA",
      icons: [
        {
          src: "icons/icon_64x64.png",
          sizes: "64x64",
          type: "image/png",
        },
        {
          src: "icons/icon_144x144.png",
          sizes: "144x144",
          type: "image/png",
        },
        {
          src: "icons/icon_192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "icons/icon_512x512.png",
          sizes: "512x512",
          type: "image/png",
        },
      ],
      related_applications: [
        {
          platform: "play",
          url: "https://play.google.com/store/apps/details?id=cheeaun.hackerweb",
        },
      ],
    },
    workbox: {
      navigateFallback: "/",
    },
    devOptions: {
      enabled: true,
      type: "module",
    },
  },
  pinia: {
    storesDirs: ["./stores/**"],
  },
  delayHydration: {
    mode: "init",
  },
  i18n: {
    vueI18n: "./i18n.config.ts",
  },
  quasar: {
    sassVariables: "assets/styles/quasar.variables.sass",
    plugins: [
      "BottomSheet",
      "Dialog",
      "Loading",
      "LoadingBar",
      "Notify",
      "Dark",
    ],
    // extras: {
    //   font: "roboto-font",
    // },
    lang: "pt-BR",
    iconSet: "material-symbols-rounded",
    components: {
      defaults: {
        QBtn: {
          unelevated: true,
          dense: true,
          noCaps: true,
        },
      },
    },
  },
});
