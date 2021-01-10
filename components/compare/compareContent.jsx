import React from 'react'
import style from './compare.module.scss'
import { Button } from '@material-ui/core'
function CompareContent() {
  return (
    <div className={style.wrapper_content}>
      <div className={style.grid}>
        <div className={style.column}>
          <div className={style.top}>
            <div className={style.img}>
              <img src='/images/comp1.jpg' alt='' />
            </div>
            <p>От $999</p>
            <Button>Купить</Button>
          </div>
        </div>
        <div className={style.column}>
          <div className={style.top}>
            <div className={style.img}>
              <img src='/images/comp2.jpg' alt='' />
            </div>
            <p>От $499</p>
            <Button>Купить</Button>
          </div>
        </div>
        <div className={style.column}>
          <div className={style.top}>
            <div className={style.img}>
              <img src='/images/comp3.jpg' alt='' />
            </div>
            <p>От $699</p>
            <Button>Купить</Button>
          </div>
        </div>
      </div>
      <div className={style.specs_section}>
        <div className={style.title}>Быстрый взгляд</div>
      </div>
      <div className={style.grid}>
        <div className={style.column}>
          <div className={style.value}>13.3"</div>
          <div className={style.desc}>
            Retina display<sup>1</sup>
          </div>
        </div>
        <div className={style.column}>
          <div className={style.value}>13.3"</div>
          <div className={style.desc}>
            Retina display<sup>1</sup>
          </div>
        </div>
        <div className={style.column}>
          <div className={style.value}>16"</div>
          <div className={style.desc}>
            Retina display<sup>1</sup>
          </div>
        </div>
      </div>
      <div className={style.grid}>
        <div className={style.column}>
          <div className={style.value}>8-core</div>
          <div className={style.desc}>Apple M1 chip</div>
        </div>
        <div className={style.column}>
          <div className={style.value}>8-core</div>
          <div className={style.desc}>Apple M1 chip</div>
        </div>
        <div className={style.column}>
          <div className={style.desc}>до</div>
          <div className={style.value}>8-core</div>
          <div className={style.desc}>Intel Core i9 processor</div>
        </div>
      </div>
      <div className={style.grid}>
        <div className={style.column}>
          <div className={style.desc}>до</div>
          <div className={style.value}>16GB</div>
          <div className={style.desc}>единая память</div>
        </div>
        <div className={style.column}>
          <div className={style.desc}>до</div>
          <div className={style.value}>16GB</div>
          <div className={style.desc}>единая память</div>
        </div>
        <div className={style.column}>
          <div className={style.desc}>до</div>
          <div className={style.value}>16GB</div>
          <div className={style.desc}>единая память</div>
        </div>
      </div>
      <div className={style.specs_section}>
        <div className={style.title}>Оперативная память</div>
      </div>
      <div className={style.simple_grid}>
        <p>8GB</p>
        <p>8GB</p>
        <p>16GB</p>
      </div>
      <div className={style.simple_grid}>
        <p>16GB</p>
        <p>16GB</p>
        <p>32GB</p>
      </div>
      <div className={style.specs_section}>
        <div className={style.title}>Память</div>
      </div>
      <div className={style.simple_grid}>
        <p>256GB SSD</p>
        <p>256GB SSD</p>
        <p>512GB SSD</p>
      </div>
      <div className={style.simple_grid}>
        <p>512GB SSD</p>
        <p>512GB SSD</p>
        <p>1TB SSD</p>
      </div>
      <div className={style.simple_grid}>
        <p>1TB SSD</p>
        <p>1TB SSD</p>
        <p>2TB SSD</p>
      </div>
      <div className={style.simple_grid}>
        <p>2TB SSD</p>
        <p>2TB SSD</p>
        <p>4TB SSD</p>
      </div>
      <div className={style.simple_grid}>
        <p></p>
        <p></p>
        <p>8TB SSD</p>
      </div>
    </div>
  )
}

export default CompareContent
