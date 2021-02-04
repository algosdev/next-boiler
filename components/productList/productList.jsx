import React, { useEffect, useState } from 'react'
import style from './productList.module.scss'
import { i18n, Link } from '../../i18n'
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
import ProductListItem from './productListItem'
import NoProduct from './NoProduct'
import axios from 'axios'
import { createFormData } from '../../lib/createFormData'
export default function ProductList({ data, brands, properties, categoryId }) {
  const { t } = useTranslation()

  const productListData = [
    // {
    //   type: t('new'),
    //   id: '1',
    //   price: '15490000',
    //   name: 'Ipad',
    //   img: '/images/ipad.png',
    //   colors: ['grey', 'yellow', 'black'],
    //   slug: 'ipad',
    // },
    // {
    //   type: t('new'),
    //   id: '99',
    //   price: '18000000',
    //   name: 'Macbook',
    //   img: '/images/macbook.jpg',
    //   colors: ['green', 'yellow', 'black'],
    //   slug: 'macbook',
    // },

    // {
    //   type: t('new'),
    //   id: '77',
    //   price: '5490000',
    //   name: 'Iphone ',
    //   img: '/images/iphone.jpg',
    //   colors: ['green', 'yellow', 'black'],
    //   slug: 'iphome',
    // },
    {
      type: t('new'),
      id: '88',
      colors: ['green', 'yellow', 'black'],
      price: '5490000',
      name: 'AirPods Max',
      img: '/images/airpods.png',
      slug: 'airpods-max',
    },
    {
      type: t('new'),
      id: '2',
      price: '990000',
      name: 'HomePod mini',
      img: '/images/homepod_mini.png',
      colors: ['yellow', 'black'],
      slug: 'homepod',
    },
    {
      type: t('new'),
      id: '3',
      price: '490000',
      name: 'iPhone 12 Pro Max simple case',
      img: '/images/case.png',
      colors: ['orange'],
      slug: 'iphone12-case',
    },
    {
      type: t('new'),
      id: '4',
      price: '850000',
      name: 'iPhone 12 mini Silicone case',
      img: '/images/silicone_case.png',
      colors: ['plum'],
      slug: 'iphone12-silicone-case',
    },
    {
      type: t('new'),
      id: '5',
      price: '590000',
      name: 'iPhone Leather Wallet',
      img: '/images/wallet.png',
      colors: ['brown'],
      slug: 'iphone-leather-waller',
    },
    {
      type: t('new'),
      id: '1',
      price: '15490000',
      name: 'Ipad',
      img: '/images/ipad.png',
      colors: ['grey', 'yellow', 'black'],
      slug: 'ipad',
      availableQuantity: 5,
      carouselData: [
        '/images/ipad.png',
        '/images/airpods_max.jpg',
        '/images/case.jpeg',
      ],
    },
    {
      type: t('new'),
      id: '99',
      price: '18000000',
      name: 'Macbook',
      img: '/images/macbook.jpg',
      colors: ['green', 'yellow', 'black'],
      slug: 'macbook',
      availableQuantity: 5,
      carouselData: [
        '/images/macbook.jpg',
        '/images/airpods_max.jpg',
        '/images/case.jpeg',
      ],
    },

    {
      type: t('new'),
      id: '77',
      price: '5490000',
      name: 'Iphone ',
      img: '/images/iphone.jpg',
      colors: ['green', 'yellow', 'black'],
      slug: 'iphome',
      availableQuantity: 5,
      carouselData: [
        '/images/iphone.jpg',
        '/images/airpods_max.jpg',
        '/images/case.jpeg',
      ],
    },
  ]

  const [showFilter, setShowFilter] = useState(true)
  const [products, setProducts] = useState(data)
  const [value, setValue] = useState([0, 123213213])
  const [filters, setFilter] = useState({
    category: categoryId,
    brand: [],
    properties: [],
  })

  useEffect(() => {
    filterProduct()
    // if (value.length === 0) {
    //   let sortedProductsByPrice = products.sort(
    //     (a, b) => a.price.price - b.price.price
    //   )
    //   if (
    //     sortedProductsByPrice[0] ===
    //     sortedProductsByPrice[sortedProductsByPrice.length - 1]
    //   ) {
    //     setValue([
    //       +0,
    //       +sortedProductsByPrice[sortedProductsByPrice.length - 1].price.price,
    //     ])
    //   } else {
    //     setValue([
    //       +sortedProductsByPrice[0].price.price,
    //       +sortedProductsByPrice[sortedProductsByPrice.length - 1].price.price,
    //     ])
    //   }
    // }

    console.log('prod filter', filters)
  }, [filters])

  const filterProduct = async () => {
    const { category, brand, properties } = filters
    const formData = createFormData({
      category: category,
      brand: brand.length > 0 ? brand.join(',') : '',
      properties: JSON.stringify(properties),
      lang: i18n.language,
      inactive: true,
      active: true,
      // limit: productLimit.toString(),
      page: '1',
      // price_from: value.length > 0 ? value[0] : '0',
      // price_till: value.length > 0 ? value[1] : '0',
      search: '',
      sort: '',
    })
    const response = await axios.post(
      `${process.env.FILTER_PRODUCT_API_URL}`,
      formData
    )
    if (response.status === 200) {
      setProducts(response.data.products)
    }
    console.log('filter=>>>>', response)
  }

  return (
    <div className={style.productListWrapper}>
      <ProductHeader showFilter={showFilter} setShowFilter={setShowFilter} />
      <div className={style.productList}>
        <div className={style.wrapper}>
          <ProductFilter
            showFilter={showFilter}
            brands={brands}
            properties={properties}
            setFilter={setFilter}
            filters={filters}
            value={value}
            setValue={setValue}
          />
          <Grid container>
            {products?.map((item, index) => (
              <Grid item xs={6} xl={3} sm={6} lg={4} md={6} sh={12} key={index}>
                <ProductListItem item={item} key={index} />
              </Grid>
            )) || (
              <Grid item xs={12}>
                <NoProduct />
              </Grid>
            )}
          </Grid>
        </div>
      </div>
    </div>
  )
}
