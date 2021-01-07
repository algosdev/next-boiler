import React from 'react'
import style from './installment.module.scss'
import { Container } from '@material-ui/core'
function InstallmentBanner() {
  return (
    <div className={style.wrapper_banner}>
      <div className={style.img}>
        <img src='/images/delivery2.jpg' alt='' />
      </div>
      <Container>
        <div className={style.content}>Рассрочка</div>
      </Container>
    </div>
  )
}

export default InstallmentBanner
