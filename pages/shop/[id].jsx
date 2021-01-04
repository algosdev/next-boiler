import React from 'react'
import ProductSingleCarousel from '../../components/productSingleCarousel/productSingleCarousel'
import ProductSingleContent from '../../components/productSingleContent/productSingleContent'
import { Container, Grid } from '@material-ui/core'
import Shops from '../../components/shops/shops'
import Feedback from '../../components/feedback/feedback'
import Recommended from '../../components/recommended/recommended'
function ProductSingle() {
  return (
    <>
      <div style={{ background: '#fff', padding: '50px 0' }}>
        <Container>
          <Grid container justify='space-between' xs={12} spacing={2}>
            <Grid item xs={6}>
              <ProductSingleCarousel />
            </Grid>
            <Grid item xs={6}>
              <ProductSingleContent />
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

export default ProductSingle
