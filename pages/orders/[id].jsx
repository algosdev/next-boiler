import React from 'react'
import { Container } from '@material-ui/core'
import SEO from '../components/seo'
import OrderSingleContainer from '../../components/orders/orderSingleContainer'
function orders() {
  return (
    <>
      <SEO />
      <div style={{ background: '#fff', padding: '50px 0' }}>
        <Container>
          <OrderSingleContainer />
        </Container>
      </div>
    </>
  )
}

export default orders
