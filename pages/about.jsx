import React from 'react'
import AboutBanner from '../components/about/aboutBanner'
import AboutContent from '../components/about/aboutContent'
import SEO from '../components/seo'
import { useTranslation } from '../i18n'
import { fetchMultipleUrls } from '../lib/fetchMultipleUrls'
function about() {
  const { t } = useTranslation()
  return (
    <>
      <SEO title={t('about')} description={t('contact_desc')} />
      <div style={{ background: '#fff' }}>
        <AboutBanner />
        <AboutContent />
      </div>
    </>
  )
}
export async function getServerSideProps({ req }) {
  const urls = [`${process.env.CATEGORY_API_URL}?lang=${req.i18n.language}`]
  const [categories] = await fetchMultipleUrls(urls)
  return {
    props: {
      categories,
    },
  }
}

export default about
