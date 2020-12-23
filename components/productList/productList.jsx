import React from 'react'
import style from './productList.module.scss'
import { List, KeyboardArrowDown } from '@material-ui/icons'
import { Grid, Typography } from '@material-ui/core'

export default function ProductList() {
  return (
    <div className={style.productListWrapper}>
      <div className={style.navBar}>
        <div className={style.wrapper}>
          <div>
            <button className={style.btn}>
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
        <div className={style.filterWrapper}>
          <div className={style.filterContent}>
            <Typography variant='h6'>Brand</Typography>
            <p>Apple</p>
            <p>Beats by Dr.Dre</p>
          </div>
        </div>
        <div className={style.wrapper}>
          <Grid container>
            <Grid item xs={4}>
              <a href='/' className={style.product}>
                <img src='images/airpods_max.jpg' alt='AirPods' />
                <span className={style.type}>Free Engraving</span>
                <h3 className={style.name}>AirPods Max</h3>
                <span className={style.price}>$549.00</span>
                <div className={style.colors}>
                  <span className={style.color} />
                  <span className={style.color} />
                  <span className={style.color} />
                  <span className={style.color} />
                  <span className={style.color} />
                </div>
              </a>
            </Grid>
            <Grid item xs={4}>
              <a href='/' className={style.product}>
                <img src='images/airpods_max.jpg' alt='AirPods' />
                <span className={style.type}>Free Engraving</span>
                <h3 className={style.name}>AirPods Max</h3>
                <span className={style.price}>$549.00</span>
                <div className={style.colors}>
                  <span className={style.color} />
                </div>
              </a>
            </Grid>
            <Grid item xs={4}>
              <a href='/' className={style.product}>
                <img src='images/airpods_max.jpg' alt='AirPods' />
                <span className={style.type}>Free Engraving</span>
                <h3 className={style.name}>AirPods Max</h3>
                <span className={style.price}>$549.00</span>
                <div className={style.colors}>
                  <span className={style.color} />
                </div>
              </a>
            </Grid>
            <Grid item xs={4}>
              <a href='/' className={style.product}>
                <img src='images/airpods_max.jpg' alt='AirPods' />
                <span className={style.type}>Free Engraving</span>
                <h3 className={style.name}>AirPods Max</h3>
                <span className={style.price}>$549.00</span>
                <div className={style.colors}>
                  <span className={style.color} />
                </div>
              </a>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  )
}
