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
    // "@vite-pwa/nuxt",
  ],
  delayHydration: {
    mode: "init",
  },
  i18n: {
    vueI18n: "./i18n.config.ts",
  },
  robots: {
    UserAgent: "*",
    Disallow: "",
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
