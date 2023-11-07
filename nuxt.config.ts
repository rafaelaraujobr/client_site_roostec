// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["@/assets/styles/custom.sass"],
  modules: [
    "nuxt-quasar-ui",
  ],
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
    components: {
      defaults: {
        QBtn: {
          unelevated: true,
        },
      },
    },
  },
});
