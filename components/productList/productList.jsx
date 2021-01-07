import React, { useState } from 'react'
import style from './productList.module.scss'
import { Link } from '../../i18n'
import { List, KeyboardArrowDown } from '@material-ui/icons'
import {
  Grid,
  Typography,
  ClickAwayListener,
  Checkbox,
  FormControlLabel,
} from '@material-ui/core'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from '../../i18n'
import { numberToPrice } from '../../lib/numberToPrice'
import Slider from '@material-ui/core/Slider'

export default function ProductList() {
  const [value, setValue] = useState([2000000, 9990000])

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
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
      id: '1',
      price: '5490000',
      name: 'AirPods Max',
      img: '/images/airpods_max.jpg',
      colors: ['green', 'yellow', 'black'],
      slug: 'airpods-max',
    },
    {
      type: t('new'),
      id: '2',
      price: '990000',
      name: 'HomePod mini',
      img: '/images/homepod_mini.jpeg',
      colors: ['yellow', 'black'],
      slug: 'homepod',
    },
    {
      type: t('new'),
      id: '3',
      price: '490000',
      name: 'iPhone 12 Pro Max simple case',
      img: '/images/case.jpeg',
      colors: ['orange'],
      slug: 'iphone12-case',
    },
    {
      type: t('new'),
      id: '4',
      price: '850000',
      name: 'iPhone 12 mini Silicone case',
      img: '/images/silicone_case.jpeg',
      colors: ['plum'],
      slug: 'iphone12-silicone-case',
    },
    {
      type: t('new'),
      id: '5',
      price: '590000',
      name: 'iPhone Leather Wallet',
      img: '/images/wallet.jpeg',
      colors: ['brown'],
      slug: 'iphone-leather-waller',
    },
  ]
  const [activeSortBy, setActiveSortBy] = useState(0)
  const [showFilter, setShowFilter] = useState(true)
  const [sortByOpen, setSortByOpen] = useState(false)
  const handlePriceChange = (e, newValue) => {
    console.log(newValue)
  }

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
            <AnimatePresence>
              {sortByOpen ? (
                <ClickAwayListener onClickAway={() => setSortByOpen(false)}>
                  <motion.div
                    className={style.popup}
                    variants={{
                      visible: {
                        y: 0,
                        position: 'absolute',
                        x: '-50%',
                        opacity: 1,
                        top: '200%',
                        left: 'calc(50% - 13px)',
                      },
                      stable: {
                        position: 'absolute',
                        y: -20,
                        opacity: 0,
                        x: '-50%',
                        top: '200%',
                        left: 'calc(50% - 13px)',
                      },
                    }}
                    animate={'visible'}
                    initial={'stable'}
                    exit={'stable'}
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
              ) : (
                ''
              )}
            </AnimatePresence>
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
            <div className={style.price}>
              <Typography variant='h6'>{t('price')}</Typography>
              <p>
                {numberToPrice(value[0])} &ndash; {numberToPrice(value[1])}
              </p>

              <Slider
                value={value}
                onChangeCommitted={handlePriceChange}
                onChange={handleChange}
                max={9990000}
                track={false}
                min={2000000}
                aria-labelledby='range-slider'
              />
            </div>
            <div className={style.brand}>
              <Typography variant='h6'>{t('brand')}</Typography>
              <div className={style.filter_item}>
                <FormControlLabel
                  control={
                    <Checkbox
                      // checked={gilad}
                      // onChange={handleChange}
                      name='gilad'
                    />
                  }
                  label='Apple'
                />
              </div>
              <div className={style.filter_item}>
                <FormControlLabel
                  control={
                    <Checkbox
                      // checked={gilad}
                      // onChange={handleChange}
                      name='gilad'
                    />
                  }
                  label='Samsung'
                />
              </div>
              <div className={style.filter_item}>
                <FormControlLabel
                  control={
                    <Checkbox
                    // checked={gilad}
                    // onChange={handleChange}
                    />
                  }
                  label='Xiaomi'
                />
              </div>
            </div>
            <div className={style.color}>
              <Typography variant='h6'>Цвет</Typography>
              <div className={style.filter_item}>
                <FormControlLabel control={<Checkbox />} label='Черный' />
              </div>
              <div className={style.filter_item}>
                <FormControlLabel control={<Checkbox />} label='Синий' />
              </div>
              <div className={style.filter_item}>
                <FormControlLabel control={<Checkbox />} label='Красный' />
              </div>
              <div className={style.filter_item}>
                <FormControlLabel control={<Checkbox />} label='Серый' />
              </div>
              <div className={style.filter_item}>
                <FormControlLabel control={<Checkbox />} label='Коричневый' />
              </div>
              <div className={style.filter_item}>
                <FormControlLabel control={<Checkbox />} label='Белый' />
              </div>
            </div>
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
                      {numberToPrice(item.price)} {t('soum')}
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
