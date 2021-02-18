const { nextI18NextRewrites } = require('next-i18next/rewrites')
const localeSubpaths = {
  uz: 'uz',
  en: 'en',
}

const baseUrl = 'https://api.website.com/'

module.exports = {
  env: {
    LOGIN_API_URL: `${baseUrl}v1/login`,
  },
  rewrites: async () => nextI18NextRewrites(localeSubpaths),
  publicRuntimeConfig: {
    localeSubpaths,
  },
}
