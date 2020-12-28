import React from 'react'
import style from './cart.module.scss'
import { Router } from '../../i18n'
function CartSummary({ quantity, totalPrice }) {
  return (
    <div className={style.wrapper_summary}>
      <div className={style.summary_inner}>
        <div className={style.info}>
          <p>Products({quantity})</p>
          <p>{totalPrice || '450 000 soum'}</p>
        </div>
        <div className={style.info}>
          <p>Shipping fee</p>
          <p>{totalPrice || '450 000 soum'}</p>
        </div>
        <div className={style.info}>
          <p>Sale</p>
          <p>{totalPrice || '450 000 soum'}</p>
        </div>
        <div className={style.totalPrice}>
          <p>Total</p>
          <p>{totalPrice || '450 000 soum'}</p>
        </div>
        <button
          className={`input ${style.go}`}
          onClick={() => Router.push('/checkout')}
        >
          Go to Payment
        </button>
        <button
          className={`input ${style.back}`}
          onClick={() => Router.push('/')}
        >
          Back to Menu
        </button>
      </div>
    </div>
  )
}

export default CartSummary
