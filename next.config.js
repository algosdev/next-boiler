const { nextI18NextRewrites } = require('next-i18next/rewrites');
const runtimeCaching = require('next-pwa/cache');
const localeSubpaths = {
  uz: 'uz',
  en: 'en',
};

module.exports = {
  env: {
    LOGIN_API_URL: 'http://46.101.122.150:1235/v1/customer',
  },
  pwa: {
    dest: 'public',
    swSrc: 'service-worker.js',
    // runtimeCaching,
  },
  rewrites: async () => nextI18NextRewrites(localeSubpaths),
  publicRuntimeConfig: {
    localeSubpaths,
  },
};
