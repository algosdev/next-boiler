import React from 'react'
import { Container } from '@material-ui/core'
import SEO from '../components/seo'
import Shops from '../components/shops/shops'
function shopAddresses() {
  return (
    <>
      <SEO />
      <Container>
        <Shops />
      </Container>
    </>
  )
}

export default shopAddresses
