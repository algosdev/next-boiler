import React from 'react'
import style from './account.module.scss'
import Item from './item'
function Payment() {
  return (
    <div className={style.wrapper_item}>
      <div className={style.grid}>
        <div className={style.mini_title}>Payment</div>
        <div className={style.column}>
          <Item title='Billing contact' details='Sam Andar' />
        </div>
        <div className={style.column}>
          <Item
            title='Billing address'
            details='78C, Washington Street, United States'
          />
        </div>
        <div className={style.column}>
          <Item title='Payment method' details='Click, Payme' />
        </div>
      </div>
    </div>
  )
}

export default Payment
