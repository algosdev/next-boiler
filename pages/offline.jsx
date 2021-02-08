import React from 'react'
import OfflinePage from '../components/offline/OfflinePage'
import SEO from '../components/seo'
import { fetchMultipleUrls } from '../lib/fetchMultipleUrls'
function offline() {
  return (
    <>
      <SEO />
      <OfflinePage />
    </>
  )
}
export async function getServerSideProps({ req }) {
  const urls = [`${process.env.CATEGORY_API_URL}?lang=${req.i18n.language}`]
  const [categories] = await fetchMultipleUrls(urls)
  console.log('AAA', categories)
  return {
    props: {
      categories,
    },
  }
}

export default offline
