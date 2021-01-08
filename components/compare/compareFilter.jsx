import React from 'react'
import compare from '../../pages/compare'
import style from './compare.module.scss'
import CompareContent from './compareContent'
function CompareFilter() {
  return (
    <div className={style.wrapper_filter}>
      <div className={style.main_title}>Сравните модели Mac</div>
      <div className={style.grid}>
        <div className={style.option}>
          <select>
            <option>MacBook</option>
            <option>MacBook3</option>
          </select>
        </div>
        <div className={style.option}>
          <select>
            <option>MacBook</option>
            <option>MacBook3</option>
          </select>
        </div>
        <div className={style.option}>
          <select>
            <option>MacBook</option>
            <option>MacBook3</option>
          </select>
        </div>
      </div>
      <CompareContent />
    </div>
  )
}

export default CompareFilter
