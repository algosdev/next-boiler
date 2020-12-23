import React from 'react'
import ProductList from '../components/productList/productList'
import SEO from '../components/seo'
import ShopHeader from '../components/shopHeader/shopHeader'

export default function Shop() {
  return (
    <>
      <SEO />
      <ShopHeader />
      <ProductList />
    </>
  )
}
