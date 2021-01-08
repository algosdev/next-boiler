import React from 'react'
import style from './about.module.scss'
import { Container } from '@material-ui/core'
function AboutBanner() {
  return (
    <div className={style.wrapper_banner}>
      <div className={style.img}>
        <img src='/images/delivery2.jpg' alt='' />
      </div>
      <Container>
        <div className={style.content}>О компании</div>
      </Container>
    </div>
  )
}

export default AboutBanner
