import React from 'react'
import ProductSearchList from '../../components/productList/productSearchList'
import SEO from '../../components/seo'
import { useTranslation } from '../../i18n'
import { fetchMultipleUrls } from '../../lib/fetchMultipleUrls'
export default function Search({ products, search }) {
  const { t } = useTranslation()
  console.log(products)
  return (
    <>
      <SEO title={t('products')} description={t('product_list_desc')} />
      <ProductSearchList data={products.products} search={search} />
    </>
  )
}
export async function getServerSideProps({ query, req }) {
  const urls = [
    `http://46.101.122.150:1235/v1/product?lang=ru&search=${query.search}&active=true`,
    'http://46.101.122.150:1235/v1/category',
  ]
  const [products, categories] = await fetchMultipleUrls(urls)

  return {
    props: {
      products,
      search: query.search,
      categories,
    },
  }
}
