import React, { useEffect, useState } from 'react'
import style from './productList.module.scss'
import { Grid } from '@material-ui/core'
import ProductHeader from './productHeader'
import ProductListItem from './productListItem'
import NoProduct from './NoProduct'
import axios from 'axios'
import { useTranslation } from '../../i18n'

export default function ProductSearchList({ data, search }) {
  const { t } = useTranslation()
  const [products, setProducts] = useState(data)

  const [showFilter, setShowFilter] = useState(true)

  const [filters, setFilter] = useState({
    sort: '',
  })

  useEffect(() => {
    setProducts(data)
  }, [data])

  useEffect(() => {
    filterProduct()
  }, [filters])

  const filterProduct = async () => {
    try {
      const response = await axios.get(
        `http://46.101.122.150:1235/v1/product?lang=ru&search=${search}&active=true&sort=${
          filters.sort ? `${filters.sort}` : ''
        }`
      )
      console.log('prod', response)
      setProducts(response.data.products)
    } catch (err) {
      console.log(err)
    }
  }

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
          <Grid container>
            {products?.map((item, index) => (
              <Grid item xs={6} xl={3} sm={6} lg={4} md={6} sh={12} key={index}>
                <ProductListItem item={item} key={index} />
              </Grid>
            )) || (
              <Grid item xs={12}>
                <NoProduct description={t('search-product-empty')} />
              </Grid>
            )}
          </Grid>
        </div>
      </div>
    </div>
  )
}
