const NextI18Next = require('next-i18next').default
const { localeSubpaths } = require('next/config').default().publicRuntimeConfig
const path = require('path')

const nextI18n = new NextI18Next({
  defaultLanguage: 'ru',
  otherLanguages: ['uz', 'en'],
  localeSubpaths,
  localePath: path.resolve('./public/static/locales'),
  //browserLanguageDetection: false,
  //serverLanguageDetection: false,
})

module.exports = nextI18n

exports.i18n = nextI18n.i18n
