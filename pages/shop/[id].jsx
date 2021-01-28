import React, { useState } from 'react';
import ProductSingleCarousel from '../../components/productSingle/carousel';
import ProductSingleContent from '../../components/productSingle/content';
import { Container, Grid } from '@material-ui/core';
import Shops from '../../components/shops/shops';
import Feedback from '../../components/feedback/feedback';
import { initializeStore } from '../../redux/store';
import SEO from '../../components/seo';
import Recommended from '../../components/recommended/recommended';
import ProductTab from '../../components/productTab/productTab';
import Compare from '../../components/productSingle/compare';
import { fetchMultipleUrls } from '../../lib/fetchMultipleUrls';
function ProductSingle({ store, slug }) {
  function getData(slug) {
    const data = store.filter((el) => el.slug === slug);
    return data?.[0];
  }
  console.log(getData(slug));
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
              <ProductSingleCarousel data={getData(slug)} />
            </Grid>
            <Grid item md={6} sm={12}>
              <ProductSingleContent data={getData(slug)} />
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
  );
}
export async function getServerSideProps(ctx) {
  const store = initializeStore();
  const urls = ['http://46.101.122.150:1235/v1/category'];
  const [categories] = await fetchMultipleUrls(urls);
  return {
    props: {
      store: store.getState().cart.data,
      slug: ctx.query.id,
      categories,
    },
  };
}

export default ProductSingle;
