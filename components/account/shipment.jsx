import React from 'react'
import style from './account.module.scss'
import Item from './item'
function Shipment() {
  return (
    <div className={style.wrapper_item}>
      <div className={style.grid}>
        <div className={style.mini_title}>Shipment</div>
        <div className={style.column}>
          <Item
            title='Shipping address'
            details='78C, Washington Street, United States'
          />
        </div>
        <div className={style.column}>
          <Item
            title='Contact information'
            details='samandar149official@gmail.com'
          />
        </div>
      </div>
    </div>
  )
}

export default Shipment
