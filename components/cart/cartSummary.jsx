import React, { useState } from 'react'
import style from './cart.module.scss'
import { Router } from '../../i18n'
import { useTranslation } from '../../i18n'
import { useSelector, shallowEqual } from 'react-redux'
function CartSummary({ totalQuantity, totalPrice }) {
  const productsInCart = useSelector(
    (state) => state?.cart?.cartItems,
    shallowEqual
  )
  const { t } = useTranslation()
  const [shippingFee, setShippingFee] = useState(50000)
  const [discount, setDiscount] = useState(10000)
  console.log('Summary', productsInCart)
  return (
    <div className={style.wrapper_summary}>
      <div className={style.summary_inner}>
        <div className={style.info}>
          <p>
            {t('products')}({totalQuantity || '0'})
          </p>
          <p>{totalPrice || '0'}</p>
        </div>
        <div className={style.info}>
          <p> {t('shipping_fee')}</p>
          <p>{totalPrice !== 0 ? shippingFee : '0'}</p>
        </div>
        <div className={style.info}>
          <p>{t('discount')}</p>
          <p>{totalPrice !== 0 ? discount : '0'}</p>
        </div>
        <div className={style.totalPrice}>
          <p>{t('total')}</p>
          <p>{`${
            totalPrice !== 0 ? totalPrice + shippingFee - discount : '0'
          } ${t('soum')}`}</p>
        </div>
        {totalQuantity !== 0 ? (
          <button
            className={`input ${style.go}`}
            onClick={() => Router.push('/checkout')}
          >
            {t('go_to_payment')}
          </button>
        ) : (
          ''
        )}
        <button
          className={`input ${style.back}`}
          onClick={() => Router.push('/')}
        >
          {t('back_to_menu')}
        </button>
      </div>
    </div>
  )
}

export default CartSummary
