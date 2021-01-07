import React from 'react'
import { Container, Grid } from '@material-ui/core'
import CheckoutContainer from '../components/checkout/checkoutContainer'
import CheckoutForm from '../components/checkout/checkoutForm'
import CheckoutDetails from '../components/checkout/checkoutDetails'
import SEO from '../components/seo'
function checkout() {
  return (
    <>
      <SEO />
      <div style={{ background: '#fff', padding: '50px 0' }}>
        <Container>
          <CheckoutContainer />
        </Container>
      </div>
    </>
  )
}

export default checkout
