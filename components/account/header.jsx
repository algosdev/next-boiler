import React, { useRef } from 'react'
import { Container } from '@material-ui/core'
import style from './account.module.scss'
import Link from 'next/link'
import { useTranslation } from '../../i18n'
function AccountHeader() {
  const { t } = useTranslation()
  return (
    <div className={style.wrapper_header}>
      <Container>
        {/* <div className={style.top}>
          <h5>Профиль</h5>
          <Link href='/'>
            <a className={style.btn}>{t('signout')}</a>
          </Link>
        </div> */}
        <div className={style.title}>{t('hi')}, Samandar</div>
      </Container>
    </div>
  )
}

export default AccountHeader
