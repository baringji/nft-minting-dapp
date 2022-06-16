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
      bodyAttrs: {
        class: 'bg-secondary font-sans text-2xl',
      }
    }
  },
  loading: {
    color: '#0D0D11'
  },
  modules: [
    '@nuxt/content',
    '@unocss/nuxt',
    'nuxt-web3.js'
  ],
  build: {
    transpile: ['swiper'],
  },
  css: [],
  content: {},
  unocss: {
    preflight: true,
    theme: {
      colors: {
        'secondary': '#0D0D11',
      },
    }
  },
})
