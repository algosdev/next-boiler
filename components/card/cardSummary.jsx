import React from 'react'
import style from './card.module.scss'
function CardSummary({ quantity, totalPrice }) {
  return (
    <div className={style.wrapper_summary}>
      <div className={style.summary_inner}>
        <div className={style.info}>
          <p>Products({quantity})</p>
          <p>{totalPrice}</p>
        </div>
        <div className={style.info}>
          <p>Shipping fee</p>
          <p>{totalPrice}</p>
        </div>
        <div className={style.info}>
          <p>Sale</p>
          <p>{totalPrice}</p>
        </div>
        <div className={style.totalPrice}>
          <p>Total</p>
          <p>{totalPrice}</p>
        </div>
        <button className={`input ${style.go}`}>Go to Payment</button>
        <button className={`input ${style.back}`}>Back to Menu</button>
      </div>
    </div>
  )
}

export default CardSummary
