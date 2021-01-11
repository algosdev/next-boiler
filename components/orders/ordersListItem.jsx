import React, { useState, useEffect } from 'react'
import style from './orders.module.scss'
import { Link } from '../../i18n'
import { Button } from '@material-ui/core'
import { useTranslation, Router } from '../../i18n'
import { numberToPrice } from '../../lib/numberToPrice'
function OrderItem({ data, index }) {
  const { t } = useTranslation()
  return (
    <>
      {/* <Link href={`/orders/${data.number}`}>
        <a> */}
      <div className={style.wrapper_item}>
        <div className={style.inner}>
          <div className={style.column}>{index + 1}</div>
          <div className={style.column}>{data.number}</div>
          <div className={style.column}>{'2020-10-29 18:16:26'}</div>
          <div className={style.column}>{t('in_progress')}</div>
          <div className={style.column}>
            <span>
              {'600000'} {t('soum')}
            </span>
          </div>
          <div className={`${style.column} ${style.info}`}>
            <Button
              className={`${style.btn}`}
              onClick={() => Router.push(`/orders/${data.number}`)}
            >
              Посмотреть
            </Button>
          </div>
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
        </a>
      </Link> */}
    </>
  )
}

export default OrderItem
