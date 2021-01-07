import React from 'react'
import style from './delivery.module.scss'
import { Container } from '@material-ui/core'
function DeliveryBanner() {
  return (
    <div className={style.wrapper_banner}>
      <div className={style.img}>
        <img src='/images/delivery2.jpg' alt='' />
      </div>
      <Container>
        <div className={style.content}>Быстрая доставка</div>
      </Container>
    </div>
  )
}

export default DeliveryBanner
