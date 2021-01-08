import React from 'react'
import style from './productSingle.module.scss'
import { Link } from '../../i18n'
const compareData = [
  {
    name: 'iPad Pro',
    price: '799',
    type: '',
    img: '/images/compare1.jpeg',
    techspecs: [
      '12,9-дюймовый и 11-дюймовый дисплей Liquid Retina с ProMotion',
      'Бионический чип A12Z',
      'Совместимость с Magic Keyboard и Smart Keyboard Folio',
      'Совместим с Apple Pencil (2-го поколения)',
    ],
  },
  {
    name: 'iPad Air',
    price: '599',
    type: 'Новый',
    img: '/images/compare2.jpeg',
    techspecs: [
      '7,9-дюймовый и 11-дюймовый дисплей Liquid Retina с ProMotion',
      'Бионический чип A12Z',
      'Совместимость с Magic Keyboard и Smart Keyboard Folio',
      'Совместим с Apple Pencil (2-го поколения)',
    ],
  },
  {
    name: 'iPad',
    price: '429',
    type: 'Новый',
    img: '/images/compare3.jpeg',
    techspecs: [
      '9,2-дюймовый дисплей Retina',
      'Бионический чип A12Z',
      'Совместимость с Magic Keyboard и Smart Keyboard Folio',
      'Совместим с Apple Pencil (2-го поколения)',
    ],
  },
  {
    name: 'iPad Mini',
    price: '399',
    type: '',
    img: '/images/compare4.jpeg',
    techspecs: [
      '10,9-дюймовый дисплей Liquid Retina',
      'A14 Bionic chip',
      'Совместимость с Magic Keyboard и Smart Keyboard Folio',
      'Совместим с Apple Pencil (2-го поколения)',
    ],
  },
]
function Compare() {
  return (
    <div className={style.wrapper_compare}>
      <div className={style.main_title}>Сравнить</div>
      <div className={style.desc}>
        <Link href='/compare'>
          <a>Сравните больше продуктов</a>
        </Link>
      </div>

      <div className={style.grid}>
        {compareData.map((item, index) => (
          <div className={style.column} key={index}>
            <div className={style.inner}>
              <div className={style.img}>
                <img src={item.img} alt={item.name} />
              </div>
              <p className={style.type}>{item.type}</p>
              <div className={style.name}>{item.name}</div>
              <div className={style.price}>От {item.price} долларов США</div>
              <div className={style.techspecs}>
                {item.techspecs.map((el, ind) => (
                  <p key={ind}>{el}</p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Compare
