import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
//import { aliases, mdi } from 'vuetify/iconsets/mdi'

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    defaults: {
      global: {
        ripple: false,
      },
    },
    components,
    directives,
    icons: {
      defaultSet: 'mdi',
     
    },
    theme: {
      defaultTheme: 'system', // 'light' | 'dark' | 'system'
    },
  })
  nuxtApp.vueApp.use(vuetify)
})