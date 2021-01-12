import React, { useState, useEffect } from 'react'
import style from './orders.module.scss'
import { Link } from '../../i18n'
import { Button } from '@material-ui/core'
import { useTranslation, Router } from '../../i18n'
import { numberToPrice } from '../../lib/numberToPrice'
function OrderItem({ data, index }) {
  const { t } = useTranslation()
  const setStatusColor = (status) => {
    switch (status) {
      case t('in_progress'):
        return style.blue
      case t('finished'):
        return style.green
      case t('delivered'):
        return style.green
      default:
        return ''
    }
  }
  return (
    <>
      <Link href={`/orders/${data.number}`}>
        <a title='Посмотреть больше'>
          <div className={style.wrapper_item}>
            <div className={style.inner}>
              <div className={style.column}>{index + 1}</div>
              <div className={style.column}>{data.number}</div>
              <div className={style.column}>{data.quantity}</div>
              <div className={style.column}>{data.date}</div>
              <div className={`${style.column} ${setStatusColor(data.status)}`}>
                <div>{data.status}</div>
              </div>
              <div className={style.column}>
                <span>
                  {numberToPrice(data.total)} {t('soum')}
                </span>
              </div>
              {/* <div className={`${style.column} ${style.info}`}>
            <Button
              className={`${style.btn}`}
              onClick={() => Router.push(`/orders/${data.number}`)}
            >
              Посмотреть
            </Button>
          </div> */}
            </div>
          </div>
          {/* </a>
      </Link> */}
          {/* <Link href={`/orders/${data.number}`}>
        <a>
          <div className={style.wrapper_item}>
            <div className={style.inner}>
              <div className={style.header}>№ {data.number}</div>
              <div className={style.details}>
                <span>{t('date')}: </span>
                <span>{t('status')}: </span>
                <span>{t('total')}: </span>
                <p>{data.date}</p>
                <p>{t('in_progress')}</p>
                <p>
                  {numberToPrice(data.total)} {t('soum')}
                </p>
              </div>
            </div>
          </div>
           */}
        </a>
      </Link>
    </>
  )
}

export default OrderItem
