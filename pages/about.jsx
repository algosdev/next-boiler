import React from 'react'
import AboutBanner from '../components/about/aboutBanner'
import AboutContent from '../components/about/aboutContent'
import SEO from '../components/seo'
function about() {
  return (
    <>
      <SEO />
      <AboutBanner />
      <AboutContent />
    </>
  )
}

export default about
