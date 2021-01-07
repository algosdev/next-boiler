import React from 'react'
import { Container } from '@material-ui/core'
import OrderContainer from '../../components/orders/orderContainer'
import SEO from '../components/seo'
function orders() {
  return (
    <>
      <SEO />
      <div style={{ background: '#fff', padding: '50px 0' }}>
        <Container>
          <OrderContainer />
        </Container>
      </div>
    </>
  )
}

export default orders
