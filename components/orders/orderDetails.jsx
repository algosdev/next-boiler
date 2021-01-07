import React from 'react'
import style from './orders.module.scss'
import { useTranslation } from '../../i18n'
import { numberToPrice } from '../../lib/numberToPrice'
function OrderDetails() {
  const { t } = useTranslation()
  return (
    <>
      <div className={style.wrapper_details}>
        <p className={style.od_title}>{t('app_accepted')}</p>
        <p className={style.ol_title}>{t('thank_you_order')}</p>
        <div className={style.data}>
          <div>
            <p className={style.bold}>{t('status')}</p>
            <p>{t('in_progress')}</p>
          </div>
          <div>
            <p className={style.bold}>{t('payment_method')}</p>
            <p>Click</p>
          </div>
          <div>
            <p className={style.bold}>{t('order_date')}</p>
            <p>2020-10-23 10:22:03</p>
          </div>
          <div>
            <p className={style.bold}>{t('total_sum')}</p>
            <p>
              {numberToPrice(5200000)} {t('soum')}
            </p>
          </div>
        </div>
        <p className={style.od_title}>{t('order_list')}</p>
        <div className={style.data}>
          <div>
            <p className={style.bold}>{t('product_name')}</p>
            <p>Xiaomi Redmi Note 9S 4/64GB blue (27895)</p>
          </div>
          <div>
            <p className={style.bold}>{t('price')}</p>
            <p>
              {' '}
              {numberToPrice(2700000)} {t('soum')}
            </p>
          </div>
          <div>
            <p className={style.bold}>{t('quantity')}</p>
            <p>1</p>
          </div>
          <div>
            <p className={style.bold}>{t('total_sum')}</p>
            <p>
              {' '}
              {numberToPrice(5200000)} {t('soum')}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default OrderDetails
