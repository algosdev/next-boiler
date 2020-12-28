import React, { useState, useEffect } from 'react'
import style from './checkout.module.scss'
import AddIcon from '@material-ui/icons/Add'
function CheckoutListItem() {
  return (
    <>
      <div className={style.wrapper_item}>
        <div className={style.inner}>
          <div className={style.img}>
            <img src='/images/airpods_max.jpg' alt='' />
          </div>
          <div className={style.details}>
            <div className={style.title}>
              Airpods Max Series 6, Gold Aluminum Case
            </div>
            <div className={style.info}>2 pieces</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CheckoutListItem
