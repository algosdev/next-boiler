import React, { useState } from 'react'
import style from './orders.module.scss'
import { CashIn, CreditCard } from '../svg'
import OrderListItem from './ordersListItem'
import { useTranslation } from '../../i18n'
const orderData = [
  {
    number: '4656',
    date: '2020-10-29 18:16:26',
    status: 'in_progress',
    total: '888000',
  },
  {
    number: '7867',
    date: '2020-10-29 18:16:26',
    status: 'in_progress',
    total: '554000',
  },
  {
    number: '5857',
    date: '2020-10-29 18:16:26',
    status: 'in_progress',
    total: '966000',
  },
  {
    number: '1499',
    date: '2020-10-29 18:16:26',
    status: 'in_progress',
    total: '784000',
  },
]
function OrderList() {
  const { t } = useTranslation()
  return (
    <>
      <div className={style.wrapper_list}>
        {orderData.map((el, index) => (
          <OrderListItem data={el} />
        ))}
      </div>
    </>
  )
}

export default OrderList
