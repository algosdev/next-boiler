import React, { useState } from 'react'
import CheckoutDetails from './checkoutDetails'
import CheckoutForm from './checkoutForm'
import { Grid } from '@material-ui/core'
import style from './checkout.module.scss'
import { useTranslation } from '../../i18n'
function CheckoutContainer() {
  const { t } = useTranslation()
  const [totalPrice, setTotalPrice] = useState(0)
  const [totalQuantity, setTotalQuantity] = useState(0)
  const calculateTotal = (e) => {}
  return (
    <>
      <div className={style.wrapper}>
        <p className={style.list_title}>{t('checkout')}</p>
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
