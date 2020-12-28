import { Link } from '../../i18n'
import React from 'react'
import style from './checkout.module.scss'
import CheckoutListItem from './checkoutListItem'
function CheckoutDetails({ quantity, totalPrice }) {
  return (
    <div className={style.wrapper_summary}>
      <div className={style.summary_inner}>
        <div className={style.header}>
          <p>Your order</p>
          <Link href='/cart'>
            <a>Edit</a>
          </Link>
        </div>
        <div className={style.info}>
          <p>Products({quantity || 4})</p>
          <p>{totalPrice || '450000 soum'}</p>
        </div>
        <div className={style.info}>
          <p>Shipping fee</p>
          <p>{totalPrice || '450000 soum'}</p>
        </div>
        <div className={style.info}>
          <p>Sale</p>
          <p>{totalPrice || '450000 soum'}</p>
        </div>
        <div className={style.totalPrice}>
          <p>Total</p>
          <p>{totalPrice || '450000 soum'}</p>
        </div>
        <div className={style.list}>
          <div className={style.totalPrice}>
            <p>Order List</p>
          </div>
          <CheckoutListItem />
          <CheckoutListItem />
          <CheckoutListItem />
        </div>
      </div>
    </div>
  )
}

export default CheckoutDetails
