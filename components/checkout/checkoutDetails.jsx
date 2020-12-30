import { Link } from '../../i18n'
import React, { useState } from 'react'
import { useTranslation } from '../../i18n'
import style from './checkout.module.scss'
import CheckoutListItem from './checkoutListItem'
function CheckoutDetails({ quantity, totalPrice }) {
  const { t } = useTranslation()
  const [shippingFee, setShippingFee] = useState(50000)
  const [discount, setDiscount] = useState(10000)
  return (
    <div className={style.wrapper_summary}>
      <div className={style.summary_inner}>
        <div className={style.header}>
          <p>{t('your_order')}</p>
          <Link href='/cart'>
            <a>{t('edit')}</a>
          </Link>
        </div>

        <div className={style.info}>
          <p>
            {t('products')}({quantity || 2})
          </p>
          <p>{totalPrice || '450000'}</p>
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
          <p>
            {totalPrice || '450000'} {t('soum')}
          </p>
        </div>
        <div className={style.list}>
          <div className={style.totalPrice}>
            <p>{t('order_list')}</p>
          </div>
          <CheckoutListItem quantityProp={4} src='images/homepod_mini.jpeg' />
          <CheckoutListItem quantityProp={1} src='/images/airpods_max.jpg' />
        </div>
      </div>
    </div>
  )
}

export default CheckoutDetails
