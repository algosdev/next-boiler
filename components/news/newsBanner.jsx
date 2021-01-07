import React from 'react'
import style from './news.module.scss'
import { Container } from '@material-ui/core'
function NewsBanner() {
  return (
    <div className={style.wrapper_banner}>
      <div className={style.img}>
        <img src='/images/delivery2.jpg' alt='' />
      </div>
      <Container>
        <div className={style.content}>Новости</div>
      </Container>
    </div>
  )
}

export default NewsBanner
