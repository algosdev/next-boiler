import React, { useEffect, useRef, useState } from 'react'
import style from './productList.module.scss'
import { i18n, Link } from '../../i18n'
import InfiniteScroll from 'react-infinite-scroll-component'
import { List, KeyboardArrowDown } from '@material-ui/icons'
import {
  Grid,
  Typography,
  ClickAwayListener,
  Checkbox,
  FormControlLabel,
  CircularProgress,
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
export default function ProductList({
  data,
  brands,
  properties,
  categoryId,
  query,
}) {
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
  const didMountRef = useRef(false)
  const [showFilter, setShowFilter] = useState(true)
  const [products, setProducts] = useState(data)
  const [loading, setLoading] = useState(false)
  const [value, setValue] = useState([])
  const [filters, setFilter] = useState({
    category: categoryId,
    brand: [],
    properties: [],
    sort: '',
    priceRange: [],
    limit: 6,
    page: 1,
  })

  useEffect(() => {
    if (didMountRef.current) filterProduct(false)
    else {
      didMountRef.current = true
    }
  }, [filters])

  useEffect(() => {
    setValue([])
    filterProduct(true)
  }, [query])

  const filterProduct = async (isQuery) => {
    try {
      const { brand, properties, priceRange, sort, limit, page } = filters
      const formData = createFormData({
        category: categoryId,
        brand: brand.length > 0 ? brand.join(',') : '',
        properties: JSON.stringify(properties),
        lang: i18n.language,
        inactive: false,
        active: true,
        limit,
        page,
        price_from: priceRange.length && !isQuery > 0 ? priceRange[0] : '0',
        price_till: priceRange.length && !isQuery > 0 ? priceRange[1] : '0',
        search: '',
        sort: sort ? sort : '',
      })

      const response = await axios.post(
        `${process.env.FILTER_PRODUCT_API_URL}`,
        formData
      )
      console.log('filter=>>>>', response)
      if (response.status === 200) {
        setProducts(response.data.products)

        if (response.data.products) {
          if (isQuery) {
            let sortedProductsByPrice = response.data.products?.sort(
              (a, b) => a.price.price - b.price.price
            )

            if (
              sortedProductsByPrice[0].price.price ===
              sortedProductsByPrice[sortedProductsByPrice.length - 1].price
                .price
            ) {
              setValue([])
            } else {
              setValue([
                parseInt(sortedProductsByPrice[0].price.price),
                parseInt(
                  sortedProductsByPrice[sortedProductsByPrice.length - 1].price
                    .price
                ),
              ])
            }
          }
        }
      }
    } catch (err) {
      console.log(err)
    } finally {
      setLoading(false)
    }
  }

  const fetchMoreData = () => {
    setLoading(true)
    setFilter({ ...filters, limit: filters.limit + 6 })
  }

  console.log(products)

  return (
    <div className={style.productListWrapper}>
      <ProductHeader
        showFilter={showFilter}
        setFilter={setFilter}
        filters={filters}
        setShowFilter={setShowFilter}
      />
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

          {products && products.length >= 6 ? (
            <InfiniteScroll
              dataLength={products.length}
              next={fetchMoreData}
              hasMore={true}
              loader={
                loading ? (
                  <div className={style.progress}>
                    <CircularProgress />
                  </div>
                ) : (
                  ''
                )
              }
            >
              {gridProducts(products)}
            </InfiniteScroll>
          ) : (
            gridProducts(products)
          )}
        </div>
      </div>
    </div>
  )
}

const gridProducts = (products) => (
  <Grid container>
    {products?.map((item, index) => (
      <Grid item xs={6} xl={3} sm={6} lg={4} md={6} sh={12} key={index}>
        <ProductListItem item={item} key={index} />
      </Grid>
    )) || (
      <Grid item xs={12}>
        <NoProduct description={t('filter-product-empty')} />
      </Grid>
    )}
  </Grid>
)
