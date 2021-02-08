import React from 'react'
import LatestNewsCarousel from '../../components/news/latestNewsCarousel'
import NewsSingleContent from '../../components/news/newsSingleContent'
import NewsSingleHeader from '../../components/news/newsSingleHeader'
import SEO from '../../components/seo'
import { fetchMultipleUrls } from '../../lib/fetchMultipleUrls'

function NewsSingle() {
  return (
    <>
      <SEO title={'Новый филиал в Юнусабаде'} />
      <div style={{ background: '#fff', padding: '50px 0' }}>
        <NewsSingleHeader />
        <NewsSingleContent />
        <LatestNewsCarousel />
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

export default NewsSingle
