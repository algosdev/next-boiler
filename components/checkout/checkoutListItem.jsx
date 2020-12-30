import React, { useState, useEffect } from 'react'
import style from './checkout.module.scss'
import AddIcon from '@material-ui/icons/Add'
import { useTranslation } from '../../i18n'
function CheckoutListItem({ quantityProp, src }) {
  const { t } = useTranslation()
  const [quantity, setQuantity] = useState(quantityProp)
  return (
    <>
      <div className={style.wrapper_item}>
        <div className={style.inner}>
          <div className={style.img}>
            <img src={src} alt='' />
          </div>
          <div className={style.details}>
            <div className={style.title}>
              Airpods Max Series 6, Gold Aluminum Case
            </div>
            <div className={style.info}>
              {quantity} {quantity > 1 ? t('pc1') : t('pc2')}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CheckoutListItem
