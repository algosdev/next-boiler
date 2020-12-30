import React, { useState } from 'react'
import style from './productList.module.scss'
import { Link } from '../../i18n'
import { List, KeyboardArrowDown } from '@material-ui/icons'
import { Grid, Typography, ClickAwayListener } from '@material-ui/core'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from '../../i18n'

export default function ProductList() {
  const { t } = useTranslation()
  const sortByData = [
    t('sort_recommended'),
    t('sort_new'),
    t('sort_price_low'),
    t('sort_price_high'),
  ]
  const productListData = [
    {
      type: t('new'),
      price: '5490000',
      name: 'AirPods Max',
      img: 'images/airpods_max.jpg',
      colors: ['green', 'yellow', 'black'],
      slug: 'slug',
    },
    {
      type: t('new'),
      price: '990000',
      name: 'HomePod mini',
      img: 'images/homepod_mini.jpeg',
      colors: ['yellow', 'black'],
      slug: 'slug',
    },
    {
      type: t('new'),
      price: '490000',
      name: 'iPhone 12 Pro Max Silicone case',
      img: 'images/case.jpeg',
      colors: ['orange'],
      slug: 'slug',
    },
    {
      type: t('new'),
      price: '850000',
      name: 'iPhone 12 mini Silicone case',
      img: 'images/silicone_case.jpeg',
      colors: ['plum'],
      slug: 'slug',
    },
    {
      type: t('new'),
      price: '590000',
      name: 'iPhone Leather Wallet',
      img: 'images/wallet.jpeg',
      colors: ['brown'],
      slug: 'slug',
    },
  ]
  const [activeSortBy, setActiveSortBy] = useState(0)
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
              {t('filter')}
            </button>
          </div>

          <div className={style.sort_cont}>
            <button
              className={style.btn}
              onClick={() => setSortByOpen(!sortByOpen)}
            >
              <span>{t('sort_by')}: </span> {sortByData[activeSortBy]}
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
                              setActiveSortBy(index)
                              setSortByOpen(false)
                            }}
                            disabled={index === activeSortBy ? true : false}
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
            <Typography variant='h6'>{t('brand')}</Typography>
            <p>Apple</p>
            <p>Samsung</p>
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
                    <span className={style.price}>
                      {item.price} {t('soum')}
                    </span>
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
