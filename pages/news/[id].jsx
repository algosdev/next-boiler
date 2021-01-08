import { Link } from '@material-ui/core'
import React from 'react'
import LatestNewsCarousel from '../../components/news/latestNewsCarousel'
import NewsSingleContent from '../../components/news/newsSingleContent'
import NewsSingleHeader from '../../components/news/newsSingleHeader'
import SEO from '../../components/seo'
function NewsSingle() {
  return (
    <>
      <SEO />
      <NewsSingleHeader />
      <NewsSingleContent />
      <LatestNewsCarousel />
    </>
  )
}

export default NewsSingle
