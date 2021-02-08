import React from 'react'
import NewsBanner from '../../components/news/newsBanner'
import NewsContent from '../../components/news/newsContent'
import SEO from '../../components/seo'
import { useTranslation } from '../../i18n'
import { fetchMultipleUrls } from '../../lib/fetchMultipleUrls'
function news() {
  const { t } = useTranslation()
  return (
    <>
      <SEO title={t('news')} />
      {/* <NewsBanner /> */}
      <NewsContent />
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

export default news
