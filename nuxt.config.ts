import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Mint something awesome!',
      titleTemplate: 'MintingDAPP.io - %s',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      ],
    }
  },
  loading: {
    color: '#0D0D11'
  },
  modules: [
    '@nuxt/content',
    '@unocss/nuxt',
    'nuxt-web3.js',
  ],
  build: {
    transpile: [
      'swiper',
    ],
  },
  css: [
    '~/assets/css/main.css',
  ],
  content: {},
  unocss: {
    preflight: true,
    theme: {
      colors: {
        'secondary': '#0D0D11',
      },
    }
  },
  runtimeConfig: {
    public: {
      provider: {
        mainnet: `wss://mainnet.infura.io/ws/v3/${process.env.INFURA_KEY}`,
        rinkeby: `wss://rinkeby.infura.io/ws/v3/${process.env.INFURA_KEY}`,
        develop: 'http://127.0.0.1:7545',
      },
    },
  },
})
