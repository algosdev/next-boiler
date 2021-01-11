import React from 'react'
import { Container } from '@material-ui/core'
import SEO from '../../components/seo'
import OrderSingleContainer from '../../components/orders/orderSingleContainer'
function orders() {
  return (
    <>
      <SEO />
      <Container>
        <OrderSingleContainer />
      </Container>
    </>
  )
}

export default orders
