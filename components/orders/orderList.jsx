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
        <div className={style.header}>
          <div className={style.column}>№</div>
          <div className={style.column}>Заказ ID</div>
          <div className={style.column}>{t('date')}</div>
          <div className={style.column}>{t('status')}</div>
          <div className={style.column}>{t('total_sum')}</div>
          <div className={style.column}></div>
        </div>
        {orderData.map((el, index) => (
          <OrderListItem data={el} index={index} />
        ))}
      </div>
    </>
  )
}

export default OrderList
