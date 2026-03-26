// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/ui', '@nuxtjs/i18n'],

  css: ['~/assets/css/main.css'],

  colorMode: {
    preference: 'system',
    fallback: 'light',
    classSuffix: '',
  },

  i18n: {
    locales: [
      { code: 'es', language: 'es-ES', name: 'Español', file: 'es.json' },
      { code: 'en', language: 'en-US', name: 'English', file: 'en.json' },
    ],
    defaultLocale: 'es',
    lazy: true,
    langDir: 'locales',
    restructureDir: false,
    strategy: 'prefix_except_default',
  },

  app: {
    head: {
      charset: 'utf-8',
      meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }],
    },
  },

  runtimeConfig: {
    public: {
      snapshotUrl: '',
      siteUrl: '',
      contactEmail: '',
      /** Ruta o URL del CV; vacío = ocultar botón «Descargar CV» (p. ej. `/cv.pdf` si existe en public/) */
      cvUrl: '',
    },
  },

  devtools: { enabled: false },

  compatibilityDate: '2025-01-01',
})
