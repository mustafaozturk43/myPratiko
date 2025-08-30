// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
import vuetify from "vite-plugin-vuetify";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: false },

  modules: [
    "@nuxt/scripts",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxt/eslint",
  ],

  // Explicit routing configuration
  router: {
    options: {
      strict: false
    }
  },

  // Page configuration
  pages: true,

  // App configuration
  app: {
    head: {
      title: 'Pratiko ERP',
      titleTemplate: '%s - Pratiko ERP'
    }
  },

  // CSS optimization
  css: [
    // Critical CSS first
    "~/assets/css/custom.css",
    // Vuetify with optimization
    "vuetify/styles",
  ],

  // Build optimization
  build: {
    transpile: ["vuetify"],
  },

  // Vite optimization
  vite: {
    plugins: [tailwindcss(), vuetify({ autoImport: true })],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "vuetify/styles";'
        }
      }
    },
    optimizeDeps: {
      include: ['vuetify', 'vuetify/components', 'vuetify/directives']
    }
  },

  // Performance optimization
  experimental: {
    payloadExtraction: false
  },

  // Nitro optimization
  nitro: {
    compressPublicAssets: true,
    minify: true
  }
});
