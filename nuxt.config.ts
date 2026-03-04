// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  app: {
    baseURL: '/GSC-Test-Nuxt3/',
    buildAssetsDir: '/assets/'
  },
  site: {
    url: 'https://regret-H.github.io/GSC-Test-Nuxt3/'
  },
  modules: [
    '@nuxtjs/i18n',
    '@nuxtjs/sitemap'
  ],
  i18n: {
    locales: [
      { code: 'en', iso: 'en-US', name: 'English' },
      { code: 'zh', iso: 'zh-CN', name: '中文' }
    ],
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    baseUrl: 'https://regret-H.github.io'
  },
  sitemap: {
    xsl: false,
    autoLastmod: true,
    sortEntries: true,
    sitemaps: false,
    autoI18n: true
  },
  ssr: true,
  nitro: {
    preset: 'static',
    output: {
      dir: 'dist'
    },
    publicAssets: [
      {
        baseURL: '/',
        dir: './'
      }
    ],
    prerender: {
      routes: [
        '/',
        '/series',
        '/zh/',
        '/zh/series'
      ]
    }
  }
})
