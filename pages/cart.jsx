import React from 'react'
import { Container } from '@material-ui/core'
import CartList from '../components/cart/cartList'
import SEO from '../components/seo'
function cart() {
  return (
    <>
      <SEO />
      <div style={{ background: '#fff', padding: '50px 0' }}>
        <Container>
          <CartList />
        </Container>
      </div>
    </>
  )
}

export default cart
