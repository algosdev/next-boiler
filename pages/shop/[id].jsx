import { useRouter } from 'next/router'
import React from 'react'
import ProductList from '../../components/productList/productList'
import SEO from '../../components/seo'
import ShopHeader from '../../components/shopHeader/shopHeader'
import { useTranslation } from '../../i18n'
import { fetchMultipleUrls } from '../../lib/fetchMultipleUrls'
export default function Shop({
  products,
  categoryId,
  category,
  parentCategory,
  brands,
  properties,
}) {
  const { t } = useTranslation()
  const { query } = useRouter()
  console.log('property', properties)
  console.log('cat', category.product_properties)
  return (
    <>
      <SEO title={t('products')} description={t('product_list_desc')} />
      <ShopHeader
        categ={parentCategory}
        childCategs={parentCategory.children}
        subCateg={category}
      />
      <ProductList
        query={query}
        categoryId={categoryId}
        data={products}
        brands={brands}
        properties={category}
      />
    </>
  )
}
export async function getServerSideProps({ query, req }) {
  const urls = [`${process.env.CATEGORY_API_URL}?lang=${req.i18n.language}`]

  const [categories] = await fetchMultipleUrls(urls)

  let categoryId = null
  let foundChildCategory = null
  let parentCategory = null

  categories.categories.forEach((category) => {
    let foundCategory
    if (category.children) {
      foundCategory = category.children.find((ctg) => ctg.slug === query.id)
      if (foundCategory) {
        categoryId = foundCategory.id
        parentCategory = category
      }
      if (!foundCategory) {
        category.children.forEach((childCategory) => {
          if (childCategory.children) {
            foundChildCategory = childCategory.children.find(
              (item) => item.slug === query.id
            )
            if (foundChildCategory) {
              categoryId = foundChildCategory.id
              parentCategory = category
            }
          }
        })
      }
    }
  })

  const [
    { products },
    { category },
    brands,
    properties,
  ] = await fetchMultipleUrls([
    `${process.env.PRODUCT_API_URL}?active=true&category=${categoryId}&lang=${req.i18n.language}`,
    `${process.env.CATEGORY_API_URL}/${query.id}?lang=${req.i18n.language}`,
    `${process.env.BRAND_API_URL}?lang=${req.i18n.language}&category=${categoryId}`,
    `${process.env.PRODUCT_PROPERTY_API_URL}?lang=${req.i18n.language}`,
  ])

  return {
    props: {
      products,
      categories,
      category,
      brands,
      properties,
      parentCategory,
      categoryId,
    },
  }
}
