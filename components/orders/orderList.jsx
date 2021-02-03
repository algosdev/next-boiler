import React, { useState } from 'react';
import style from './orders.module.scss';
import { CashIn, CreditCard } from '../svg';
import OrderListItem from './ordersListItem';
import { useTranslation } from '../../i18n';
import MobileOrderListItem from './mobileOrderListItem';
function OrderList({ data }) {
  const { t } = useTranslation();
  const orderData = [
    {
      number: '4656',
      date: '29.10.2020',
      total: '888000',
      status: t('in_progress'),
      quantity: `4 ${t('pc1')}.`,
    },
    {
      number: '7867',
      date: '30.09.2019',
      total: '554000',
      status: t('in_progress'),
      quantity: `4 ${t('pc1')}.`,
    },
    {
      number: '5857',
      date: '05.12.2019',
      total: '966000',
      status: t('delivered'),
      quantity: `4 ${t('pc1')}.`,
    },
    {
      number: '1499',
      date: '02.01.2020',
      total: '784000',
      status: t('finished'),
      quantity: `4 ${t('pc1')}.`,
    },
  ];
  return (
    <>
      <div className={style.wrapper_list}>
        <div className={style.header}>
          <div className={style.column}>№</div>
          <div className={style.column}>Заказ ID</div>
          <div className={style.column}>{t('quantity')}</div>
          <div className={style.column}>{t('date')}</div>
          <div className={style.column}>{t('status')}</div>
          <div className={style.column}>{t('total_sum')}</div>
        </div>
        <div className={style.order_list}>
          {data?.orders?.map((el, index) => (
            <OrderListItem data={el} index={index} />
          ))}
        </div>
        <div className={style.order_list_mobile}>
          {data?.orders?.map((el, index) => (
            <MobileOrderListItem data={el} index={index} />
          ))}
        </div>
      </div>
    </>
  );
}

export default OrderList;
