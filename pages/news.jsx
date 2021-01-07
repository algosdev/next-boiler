import React from 'react'
import NewsBanner from '../components/news/newsBanner'
import NewsContent from '../components/news/newsContent'
import SEO from '../components/seo'
function news() {
  return (
    <>
      <SEO />
      <NewsBanner />
      <NewsContent />
    </>
  )
}

export default news
