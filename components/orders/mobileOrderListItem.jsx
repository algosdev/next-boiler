import React from 'react'
import style from './orders.module.scss'
import { numberToPrice } from '../../lib/numberToPrice'
import { useTranslation, Link } from '../../i18n'
function MobileOrderListItem({ data, index }) {
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
        <a>
          <div className={style.wrapper_mobile_item}>
            <div className={style.inner}>
              <div className={style.item_header}>
                <div className={style.row}>№{index + 1}</div>
                <div className={style.row}>
                  <div>{t('status')}:</div>
                  <div className={setStatusColor(data.status)}>
                    {data.status}
                  </div>
                </div>
              </div>
              <div className={style.row}> Заказ ID: {data.number}</div>
              <div className={style.row}>
                {t('date')}: {data.date}
              </div>
              <div className={style.row}>
                {t('quantity')}: {data.quantity}
              </div>
              <div className={style.total}>
                {t('total')}: {numberToPrice(data.total)} {t('soum')}
              </div>
            </div>
          </div>
        </a>
      </Link>
    </>
  )
}

export default MobileOrderListItem
