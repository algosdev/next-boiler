import React, { useState } from 'react'
import OrderDetails from './orderDetails'
import { Grid } from '@material-ui/core'
import style from './orders.module.scss'
function OrderSingleContainer() {
  const [totalPrice, setTotalPrice] = useState(0)
  const [totalQuantity, setTotalQuantity] = useState(0)
  const calculateTotal = (e) => {}
  return (
    <>
      <div className={style.wrapper}>
        <p className={style.list_title}>Order #00001</p>
        <Grid container justify='space-between' xs={12} spacing={2}>
          <Grid item xs={10}>
            <div className={style.inner}>
              <OrderDetails />
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  )
}

export default OrderSingleContainer
