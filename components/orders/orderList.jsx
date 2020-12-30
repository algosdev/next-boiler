import React, { useState } from 'react'
import style from './orders.module.scss'
import { CashIn, CreditCard } from '../svg'
import OrderListItem from './ordersListItem'
import { useTranslation } from '../../i18n'
function OrderList() {
  const { t } = useTranslation()
  return (
    <>
      <div className={style.wrapper_list}>
        <OrderListItem />
        <OrderListItem />
        <OrderListItem />
        <OrderListItem />
        <OrderListItem />
      </div>
    </>
  )
}

export default OrderList
