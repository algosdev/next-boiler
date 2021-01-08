import React from 'react'
import { Container } from '@material-ui/core'
import style from './news.module.scss'
function NewsSingleHeader() {
  return (
    <Container>
      <div className={style.wrapper_header}>
        <div className={style.type}>Новости</div>
        <div className={style.date}>5 января 2021 г.</div>
      </div>
    </Container>
  )
}

export default NewsSingleHeader
