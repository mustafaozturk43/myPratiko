// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite"
import vuetify from "vite-plugin-vuetify"

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts'
  ],
  css: [
    'vuetify/styles',
    '~/assets/css/main.css'
  ],
  build: {
    transpile: ['vuetify']
  },
  vite: {
    plugins: [
      tailwindcss(),
      vuetify({ autoImport: true })
    ]
  },
})