import React, { useState } from 'react'
import ProductSingleCarousel from '../../components/productSingleCarousel/productSingleCarousel'
import ProductSingleContent from '../../components/productSingleContent/productSingleContent'
import { Container, Grid } from '@material-ui/core'
import Shops from '../../components/shops/shops'
import Feedback from '../../components/feedback/feedback'
import { initializeStore } from '../../redux/store'
import Recommended from '../../components/recommended/recommended'
function ProductSingle({ store, slug }) {
  function getData(slug) {
    const data = store.filter((el) => el.slug === slug)
    return data?.[0]
  }
  return (
    <>
      <div style={{ background: '#fff', padding: '50px 0' }}>
        <Container>
          <Grid container justify='space-between' spacing={2}>
            <Grid item xs={6}>
              <ProductSingleCarousel data={getData(slug)} />
            </Grid>
            <Grid item xs={6}>
              <ProductSingleContent data={getData(slug)} />
            </Grid>
          </Grid>
          <Shops />
          <Feedback />
          <Recommended />
        </Container>
      </div>
    </>
  )
}
export async function getServerSideProps(ctx) {
  const store = initializeStore()
  return {
    props: {
      store: store.getState().cart.data,
      slug: ctx.query.id,
    },
  }
}

export default ProductSingle
