import React from 'react'
import style from './cart.module.scss'
import { useTranslation } from '../../i18n'
function NoItemInCart() {
  const { t } = useTranslation()
  return (
    <div className={style.wrapper_item}>
      <div className={style.noItem}>{t('no_item_in_cart')}</div>
    </div>
  )
}

export default NoItemInCart
