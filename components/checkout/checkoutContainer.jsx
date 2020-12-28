import React, { useState } from 'react'
import CheckoutDetails from './checkoutDetails'
import CheckoutForm from './checkoutForm'
import { Grid } from '@material-ui/core'
import style from './checkout.module.scss'
function CheckoutContainer() {
  const [totalPrice, setTotalPrice] = useState(0)
  const [totalQuantity, setTotalQuantity] = useState(0)
  const calculateTotal = (e) => {}
  return (
    <>
      <div className={style.wrapper}>
        <p className={style.list_title}>Checkout</p>
        <Grid container justify='space-between' xs={12} spacing={2}>
          <Grid item xs={8}>
            <div className={style.inner}>
              <CheckoutForm />
            </div>
          </Grid>
          <Grid item xs={4}>
            <CheckoutDetails />
          </Grid>
        </Grid>
      </div>
    </>
  )
}

export default CheckoutContainer
