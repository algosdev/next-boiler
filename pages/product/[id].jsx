import React, { useState } from 'react'
import ProductSingleCarousel from '../../components/productSingle/carousel'
import ProductSingleContent from '../../components/productSingle/content'
import { Container, Grid } from '@material-ui/core'
import Shops from '../../components/shops/shops'
import Feedback from '../../components/feedback/feedback'
import { initializeStore } from '../../redux/store'
import SEO from '../../components/seo'
import Recommended from '../../components/recommended/recommended'
import ProductTab from '../../components/productTab/productTab'
import Compare from '../../components/productSingle/compare'
import { fetchMultipleUrls } from '../../lib/fetchMultipleUrls'
function ProductSingle({ store, slug, data }) {
  function getData(slug) {
    const data = store.filter((el) => el.slug === slug)
    return data?.[0]
  }
  console.log('SINGLE', data)
  return (
    <>
      <SEO
        title={getData(slug)?.name}
        description={getData(slug)?.desc || 'Macbro product info'}
      />
      <div style={{ background: '#fff' }}>
        <Container>
          <Grid container justify='space-between' spacing={2}>
            <Grid item md={6} sm={12}>
              <ProductSingleCarousel data={data?.product?.gallery} />
            </Grid>
            <Grid item md={6} sm={12}>
              <ProductSingleContent data={data?.product} />
            </Grid>
          </Grid>
          <ProductTab />
          {/* <Shops />
          <Feedback /> */}
          <Compare />
          <Recommended />
        </Container>
      </div>
    </>
  )
}
export async function getServerSideProps(ctx) {
  const store = initializeStore()
  const urls = [
    'http://46.101.122.150:1235/v1/category',
    `http://46.101.122.150:1235/v1/product/${ctx.params.id}`,
  ]
  const [categories, data] = await fetchMultipleUrls(urls)
  return {
    props: {
      store: store.getState().cart.data,
      slug: ctx.query.id,
      categories,
      data,
    },
  }
}

export default ProductSingle
