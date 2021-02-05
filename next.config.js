const { nextI18NextRewrites } = require('next-i18next/rewrites')
const localeSubpaths = {
  uz: 'uz',
  en: 'en',
}

module.exports = {
  env: {
    LOGIN_API_URL: 'http://46.101.122.150:1235/v1/customer',
    FILTER_PRODUCT_API_URL: 'http://46.101.122.150:1235/v1/product/filter',
    MIN_PRICE: 1000,
    MAX_PRICE: 100000000,
  },
  // pwa: {
  //   dest: 'public',
  //   swSrc: 'service-worker.js',
  //   runtimeCaching,
  // },
  rewrites: async () => nextI18NextRewrites(localeSubpaths),
  publicRuntimeConfig: {
    localeSubpaths,
  },
}
