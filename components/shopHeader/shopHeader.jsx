import { Container } from '@material-ui/core'
import React from 'react'
import style from './shopHeader.module.scss'

export default function ShopHeader() {
  return (
    <div className={style.shopHeader}>
      <Container>
        <div className={style.wrapper}>
          <h1 className={style.title}>Наушники беспроводные</h1>
        </div>
      </Container>
    </div>
  )
}
