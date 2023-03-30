import th from './locales/th'
import en from './locales/en'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  app: {
    head: {
      title: 'Event Ticket',
    },
  },
  css: ['@/assets/styles/main.scss'],
  runtimeConfig: {
    // The private keys which are only available server-side
    apiSecret: '',
    // Keys within public are also exposed client-side
    public: {
      baseURL: process.env.API,
    },
  },
  modules: [
    // ...
    '@pinia/nuxt',
    'nuxt-windicss',
    '@nuxtjs/i18n',
    '@nuxt/image-edge',
    'nuxt-icons',
    '@vueuse/nuxt',
  ],
  i18n: {
    /* module options */
    strategy: 'no_prefix',
    locales: [
      {
        code: 'en',
        name: 'English',
        icon: 'en.png',
        file: 'en.js',
      },
      {
        code: 'th',
        name: 'ไทย',
        icon: 'th.png',
        file: 'th.js',
      },
    ],
    langDir: '/locales',
    defaultLocale: 'th',
    vueI18n: {
      legacy: false,
      locale: 'th',
      messages: {
        en,
        th,
      },
    },
  },
})
