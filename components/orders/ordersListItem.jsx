import React, { useState, useEffect } from 'react';
import style from './orders.module.scss';
import { Link } from '../../i18n';
import { Button } from '@material-ui/core';
import { useTranslation, Router } from '../../i18n';
import { numberToPrice } from '../../lib/numberToPrice';
import { formatDate } from '../../lib/formatDate';
function OrderItem({ data, index }) {
  console.log(data);
  const { t } = useTranslation();
  const setStatusColor = (status) => {
    switch (status) {
      case 'in-progress':
        return style.blue;
        break;
      case t('finished'):
        return style.green;
        break;

      case t('delivered'):
        return style.green;
        break;
      default:
        return '';
    }
  };
  const calculateTotalQuantity = (data) => {
    let sum = 0;
    data.forEach((el) => {
      sum += el.quantity;
    });
    return sum;
  };
  const calculateTotalPrice = (data) => {
    let sum = 0;
    data.forEach((el) => {
      sum += parseInt(el.quantity) * parseInt(el?.price);
    });
    return sum;
  };
  return (
    <>
      <Link href={`/orders/${data.number}`}>
        <a>
          <div className={style.wrapper_item}>
            <div className={style.inner}>
              <div className={style.column}>{index + 1}</div>
              <div className={style.column}>{data.number}</div>
              <div className={style.column}>
                {calculateTotalQuantity(data.items)}
              </div>
              <div className={style.column}>{formatDate(data.created_at)}</div>
              <div className={`${style.column} ${setStatusColor(data.status)}`}>
                <div>{t(`${data.status}`)}</div>
              </div>
              <div className={style.column}>
                <span>
                  {numberToPrice(calculateTotalPrice(data.items))}
                  {` ${t('soum')}`}
                </span>
              </div>
            </div>
          </div>
        </a>
      </Link>
    </>
  );
}

export default OrderItem;
