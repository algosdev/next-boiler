import React, { useState, useEffect } from 'react'
import style from './orders.module.scss'
import { Link } from '../../i18n'
import { useTranslation } from '../../i18n'
function OrderItem() {
  const { t } = useTranslation()
  return (
    <>
      <Link href={`/orders/${'slug'}`}>
        <a>
          <div className={style.wrapper_item}>
            <div className={style.inner}>
              <div className={style.header}>
                {t('order')} {'#00001'}
              </div>
              <div className={style.details}>
                <p>
                  <span>{t('date')}: </span>
                  {'2020-10-29 18:16:26'}
                </p>
                <p>
                  <span>{t('status')}: </span>
                  {t('in_progress')}
                </p>
                <p>
                  <span>{t('total')}: </span>
                  {'600000'} {t('soum')}
                </p>
              </div>
            </div>
          </div>
        </a>
      </Link>
    </>
  )
}

export default OrderItem
