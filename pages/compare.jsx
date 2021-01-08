import React from 'react'
import CompareContent from '../components/compare/compareContent'
import CompareFilter from '../components/compare/compareFilter'
import SEO from '../components/seo'
import { Container } from '@material-ui/core'
function compare() {
  return (
    <>
      <SEO />
      <Container>
        <CompareFilter />
        {/* <CompareContent /> */}
      </Container>
    </>
  )
}

export default compare
