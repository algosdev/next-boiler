const { nextI18NextRewrites } = require('next-i18next/rewrites');
const localeSubpaths = {
  uz: 'uz',
  en: 'en',
};
const withPWA = require('next-pwa');
module.exports = withPWA({
  env: {},
  pwa: {
    dest: 'public',
    swSrc: 'service-worker.js',
  },
  rewrites: async () => nextI18NextRewrites(localeSubpaths),
  publicRuntimeConfig: {
    localeSubpaths,
  },
});
