import React from 'react'
import style from './productList.module.scss'
function NoProduct({ description = '' }) {
  return <div className={style.no_product}>{description}</div>
}

export default NoProduct
