import { Container } from '@material-ui/core'
import React from 'react'
import style from './shopHeader.module.scss'
import { useTranslation } from '../../i18n'
export default function ShopHeader() {
  const { t } = useTranslation()
  return (
    <div className={style.shopHeader}>
      <Container>
        <div className={style.wrapper}>
          <h1 className={style.title}>{t('wireless_headphones')}</h1>
        </div>
      </Container>
    </div>
  )
}
