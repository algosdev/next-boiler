import React from 'react'
import style from './news.module.scss'
function NewsSingleHeader() {
  return (
    <div className={style.wrapper_header}>
      <div className={style.type}></div>
      <div className={style.date}></div>
    </div>
  )
}

export default NewsSingleHeader
