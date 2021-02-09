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
          <ProductTab
            slug={data?.product?.slug}
            previewText={data?.product?.preview_text}
            description={data?.product?.description}
          />
          {/* <Shops />
          <Feedback /> */}
          {/* <Compare /> */}
          <Recommended relatedProducts={data?.product?.related_products} />
        </Container>
      </div>
    </>
  )
}

export async function getServerSideProps({ req, query }) {
  const store = initializeStore()
  const urls = [
    `${process.env.CATEGORY_API_URL}?lang=${req.i18n.language}`,
    `${process.env.PRODUCT_API_URL}/${query.id}?lang=${req.i18n.language}`,
  ]
  const [categories, data] = await fetchMultipleUrls(urls)
  return {
    props: {
      store: store.getState().cart.data,
      slug: query.id,
      categories,
      data,
    },
  }
}

export default ProductSingle
