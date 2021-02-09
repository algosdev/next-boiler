import React, { useState } from 'react'
import style from './cart.module.scss'
import { Router } from '../../i18n'
import { useTranslation } from '../../i18n'
import { numberToPrice } from '../../lib/numberToPrice'
import { useSelector, shallowEqual } from 'react-redux'
import { Button } from '@material-ui/core'
function CartSummary({ totalQuantity, totalPrice }) {
  const productsInCart = useSelector(
    (state) => state?.cart?.cartItems,
    shallowEqual
  )
  const { t } = useTranslation()
  const [shippingFee, setShippingFee] = useState(50000)
  const [discount, setDiscount] = useState(10000)
  const user = useSelector((state) => state.auth.user)
  console.log('user', typeof user)
  return (
    <div className={style.wrapper_summary}>
      <div className={style.summary_inner}>
        <div className={style.info}>
          <p>
            {t('products')}({totalQuantity || '0'})
          </p>
          <p>{numberToPrice(totalPrice || '0')}</p>
        </div>
        <div className={style.info}>
          <p> {t('shipping_fee')}</p>
          <p>{numberToPrice(totalPrice !== 0 ? shippingFee : '0')}</p>
        </div>
        <div className={style.info}>
          <p>{t('discount')}</p>
          <p>{numberToPrice(totalPrice !== 0 ? discount : '0')}</p>
        </div>
        <div className={style.totalPrice}>
          <p>{t('total')}</p>
          <p>{`${
            totalPrice !== 0
              ? numberToPrice(totalPrice + shippingFee - discount)
              : '0'
          } ${t('soum')}`}</p>
        </div>
        {totalQuantity !== 0 ? (
          <Button
            className={`input ${style.go}`}
            onClick={() => {
              if (user) Router.push('/checkout')
              else Router.push('/signin')
            }}
          >
            {t('go_to_payment')}
          </Button>
        ) : (
          ''
        )}
        <Button
          className={`input ${style.back}`}
          onClick={() => Router.push('/')}
        >
          {t('back_to_menu')}
        </Button>
      </div>
    </div>
  )
}

export default CartSummary
