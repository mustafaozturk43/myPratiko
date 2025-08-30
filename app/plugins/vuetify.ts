import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    defaults: {
      global: {
        ripple: false,
        // Disable animations for faster loading
        transitions: false,
      },
    },
    components,
    directives,
    icons: {
      defaultSet: 'mdi',
    },
    theme: {
      defaultTheme: 'light', // Use light theme by default for faster loading
    },
    // Performance optimizations
    ssr: true,
    experimental: {
      // Enable tree-shaking
      treeshaking: true,
    },
  })
  
  nuxtApp.vueApp.use(vuetify)
})