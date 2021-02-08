const { nextI18NextRewrites } = require('next-i18next/rewrites')
const localeSubpaths = {
  uz: 'uz',
  en: 'en',
}

const baseUrl = 'http://46.101.122.150:1235/'

module.exports = {
  env: {
    LOGIN_API_URL: `${baseUrl}v1/customer`,
    FILTER_PRODUCT_API_URL: `${baseUrl}v1/product/filter`,
    CATEGORY_API_URL: `${baseUrl}v1/category`,
    ORDER_API_URL: `${baseUrl}v1/order`,
    USER_ORDERS_API_URL: `${baseUrl}v1/my-orders`,
    PRODUCT_API_URL: `${baseUrl}v1/product`,
    PRODUCT_PROPERTY_API_URL: `${baseUrl}v1/product-property`,
    FEEDBACK_API_URL: `${baseUrl}v1/feedback`,
    BRAND_API_URL: `${baseUrl}v1/brand`,
  },
  rewrites: async () => nextI18NextRewrites(localeSubpaths),
  publicRuntimeConfig: {
    localeSubpaths,
  },
}
