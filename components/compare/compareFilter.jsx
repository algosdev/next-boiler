import React from 'react'
import style from './compare.module.scss'
import CompareContent from './compareContent'
import CompareOption from './compareOption'

const compareOptionData = [
  ['MacBook', 'MacBook Air', 'MacBook Pro'],
  ['MacBook', 'MacBook Air', 'MacBook Pro'],
  ['MacBook', 'MacBook Air', 'MacBook Pro'],
]
function CompareFilter() {
  return (
    <div className={style.wrapper_filter}>
      <div className={style.main_title}>Сравните модели Mac</div>
      <div className={style.grid_option}>
        {compareOptionData.map((item, index) => (
          <CompareOption data={item} key={index} />
        ))}
      </div>
      <CompareContent />
    </div>
  )
}

export default CompareFilter
