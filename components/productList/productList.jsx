import React, { useState } from 'react'
import style from './productList.module.scss'
import Link from 'next/link'
import { List, KeyboardArrowDown } from '@material-ui/icons'
import { Grid, Typography, ClickAwayListener } from '@material-ui/core'
import { motion, AnimatePresence } from 'framer-motion'
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
const sortByData = [
  'Featured',
  'Newest',
  'Price: High to Low',
  'Price: Low to High',
]
export default function ProductList() {
  const [activeSortBy, setActiveSortBy] = useState('Featured')
  const [showFilter, setShowFilter] = useState(true)
  const [sortByOpen, setSortByOpen] = useState(false)
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

          <div className={style.sort_cont}>
            <button
              className={style.btn}
              onClick={() => setSortByOpen(!sortByOpen)}
            >
              <span>Sort by: </span> {activeSortBy}
              <span
                className={`${style.arrow} ${sortByOpen ? style.open : ''}`}
              >
                <KeyboardArrowDown />
              </span>
            </button>
            {sortByOpen ? (
              <AnimatePresence>
                <ClickAwayListener onClickAway={() => setSortByOpen(false)}>
                  <motion.div
                    layout
                    className={style.popup}
                    key='someKey'
                    variants={{
                      visible: {
                        y: 0,
                        x: '-50%',
                        opacity: 1,
                      },
                      stable: {
                        y: -20,
                        opacity: 0,
                        x: '-50%',
                        transition: {
                          duration: 1,
                        },
                      },
                    }}
                    animate={'visible'}
                    initial={'stable'}
                    exit={{
                      y: -20,
                      opacity: 0,
                      x: '-50%',
                      transition: {
                        duration: 1,
                      },
                    }}
                  >
                    <ul>
                      {sortByData.map((item, index) => (
                        <li key={index}>
                          <button
                            onClick={() => {
                              setActiveSortBy(item)
                              setSortByOpen(false)
                            }}
                            disabled={item === activeSortBy ? true : false}
                          >
                            {item}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </ClickAwayListener>
              </AnimatePresence>
            ) : (
              ''
            )}
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
          <Grid container xs={12}>
            {productListData.map((item, index) => (
              <Grid item xs={3}>
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
