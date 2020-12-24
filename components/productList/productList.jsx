import React, { useState } from 'react'
import style from './productList.module.scss'
import Link from 'next/link'
import { List, KeyboardArrowDown } from '@material-ui/icons'
import { Grid, Typography } from '@material-ui/core'
const productListData = [
  {
    type: 'Free Engraving',
    price: '549.00',
    name: 'AirPods Max',
    img: 'images/airpods_max.jpg',
    colors: ['green', 'yellow', 'black'],
    slug: 'slug',
  },
  {
    type: 'Free Engraving',
    price: '549.00',
    name: 'AirPods Max',
    img: 'images/airpods_max.jpg',
    colors: ['green', 'yellow', 'black'],
    slug: 'slug',
  },
  {
    type: 'Free Engraving',
    price: '549.00',
    name: 'AirPods Max',
    img: 'images/airpods_max.jpg',
    colors: ['blue', 'black'],
    slug: 'slug',
  },
  {
    type: 'Free Engraving',
    price: '549.00',
    name: 'AirPods Max',
    img: 'images/airpods_max.jpg',
    colors: ['green', 'yellow', 'black'],
    slug: 'slug',
  },
]
export default function ProductList() {
  const [showFilter, setShowFilter] = useState(true)
  return (
    <div className={style.productListWrapper}>
      <div className={style.navBar}>
        <div className={style.wrapper}>
          <div>
            <button
              className={style.btn}
              onClick={() => setShowFilter(!showFilter)}
            >
              <List />
              Filter
            </button>
          </div>
          <div>
            <button className={style.btn}>
              Sort by: Featured <KeyboardArrowDown />
            </button>
          </div>
        </div>
      </div>
      <div className={style.productList}>
        <div
          className={`${style.filterWrapper} ${!showFilter ? style.hide : ''}`}
        >
          <div
            className={`${style.filterContent} ${
              !showFilter ? style.hide : ''
            }`}
          >
            <Typography variant='h6'>Brand</Typography>
            <p>Apple</p>
            <p>Beats by Dr.Dre</p>
          </div>
        </div>
        <div className={style.wrapper}>
          <Grid container>
            {productListData.map((item, index) => (
              <Grid item xs={4}>
                <Link href={`/shop/${item.slug}`} key={index}>
                  <a className={style.product}>
                    <img src={item.img} alt={item.name} />
                    <span className={style.type}>{item.type}</span>
                    <h3 className={style.name}>{item.name}</h3>
                    <span className={style.price}>${item.price}</span>
                    <div className={style.colors}>
                      {item.colors.map((color, ind) => (
                        <span
                          key={ind}
                          className={`${style[color]} ${style.color}`}
                        />
                      ))}
                    </div>
                  </a>
                </Link>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </div>
  )
}
