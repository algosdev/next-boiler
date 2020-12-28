import React from 'react'
import style from './orders.module.scss'
function OrderDetails() {
  return (
    <>
      <div className={style.wrapper_details}>
        <p className={style.od_title}>Application accepted</p>
        <p className={style.ol_title}>
          Thanks for your choice. We've accepted your order.
        </p>
        <div className={style.data}>
          <div>
            <p className={style.bold}>Status</p>
            <p>In progress</p>
          </div>
          <div>
            <p className={style.bold}>Payment method</p>
            <p>Click</p>
          </div>
          <div>
            <p className={style.bold}>Order date</p>
            <p>2020-10-23 10:22:03</p>
          </div>
          <div>
            <p className={style.bold}>Total sum</p>
            <p>5 200 000 soum</p>
          </div>
        </div>
        <p className={style.od_title}>Order list</p>
        <div className={style.data}>
          <div>
            <p className={style.bold}>Product name</p>
            <p>Xiaomi Redmi Note 9S 4/64GB blue (27895)</p>
          </div>
          <div>
            <p className={style.bold}>Price</p>
            <p>2 700 000 soum</p>
          </div>
          <div>
            <p className={style.bold}>Quality</p>
            <p>1</p>
          </div>
          <div>
            <p className={style.bold}>Total sum</p>
            <p>5 200 000 soum</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default OrderDetails
