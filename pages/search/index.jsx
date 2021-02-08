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
    encodeURI(
      `${process.env.PRODUCT_API_URL}?lang=ru&search=${query.search}&active=true`
    ),
    `${process.env.CATEGORY_API_URL}?lang=${req.i18n.language}`,
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
