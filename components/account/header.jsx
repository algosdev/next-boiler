import React, { useRef } from 'react'
import { Container } from '@material-ui/core'
import style from './account.module.scss'
import Link from 'next/link'
function AccountHeader() {
  return (
    <div className={style.wrapper_header}>
      <Container>
        <div className={style.top}>
          <Link href='/'>
            <a className={style.btn}>Sign out</a>
          </Link>
        </div>
        <div className={style.title}>Hi, Samandar</div>
      </Container>
    </div>
  )
}

export default AccountHeader
