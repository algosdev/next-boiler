import React from 'react'
import { Container } from '@material-ui/core'
import OrderSingleContainer from '../../components/orders/orderSingleContainer'
function orders() {
  return (
    <>
      <div style={{ background: '#fff', padding: '50px 0' }}>
        <Container>
          <OrderSingleContainer />
        </Container>
      </div>
    </>
  )
}

export default orders
