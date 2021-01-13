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
import ProductHeader from './productHeader'
import ProductFilter from './productFilter'

export default function ProductList() {
  const { t } = useTranslation()

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

  return (
    <div className={style.productListWrapper}>
      <ProductHeader showFilter={showFilter} setShowFilter={setShowFilter} />
      <div className={style.productList}>
        <div className={style.wrapper}>
          <ProductFilter showFilter={showFilter} />
          <Grid container>
            {productListData.map((item, index) => (
              <Grid item xs={6} xl={3} sm={6} lg={4} md={6} sh={12} key={index}>
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
