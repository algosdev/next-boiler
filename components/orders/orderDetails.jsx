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
        <p className={style.status}>
          {t('status')}: <div>{t('in_progress')}</div>
        </p>
        <div className={style.data}>
          <div>
            <p className={style.bold}>Заказ ID</p>
          </div>
          <div>
            <p className={style.bold}>{t('payment_method')}</p>
          </div>
          <div>
            <p className={style.bold}>{t('order_date')}</p>
          </div>
          <div>
            <p className={style.bold}>{t('total_sum')}</p>
          </div>
        </div>
        <div className={style.grid}>
          <div>
            <p>4567</p>
          </div>
          <div>
            <img src='/images/click.png' />
          </div>
          <div>
            <p>23.10.2020</p>
          </div>
          <div>
            <p>
              {numberToPrice(5200000)} {t('soum')}
            </p>
          </div>
        </div>

        <p className={style.odl_title}>{t('order_list')}</p>
        <div className={style.data}>
          <div>
            <p className={style.bold}>{t('product_name')}</p>
          </div>
          <div>
            <p className={style.bold}>{t('price')}</p>
          </div>
          <div>
            <p className={style.bold}>{t('quantity')}</p>
          </div>
          <div>
            <p className={style.bold}>{t('total_sum')}</p>
          </div>
        </div>
        <div className={style.data}>
          <div className={style.first}>
            <img src='/images/iphone12.jpeg' alt='Iphone 12' />
            <p>iPhone 12 | 256GB blue | 5G</p>
          </div>
          <div>
            <p>
              {numberToPrice(2700000)} {t('soum')}
            </p>
          </div>
          <div>
            <p>1 {t('pc1')}</p>
          </div>
          <div>
            <p>
              {numberToPrice(5200000)} {t('soum')}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default OrderDetails
