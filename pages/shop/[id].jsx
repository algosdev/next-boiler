import React from 'react'
import ProductList from '../../components/productList/productList'
import SEO from '../../components/seo'
import ShopHeader from '../../components/shopHeader/shopHeader'
import { useTranslation } from '../../i18n'
import { fetchMultipleUrls } from '../../lib/fetchMultipleUrls'
export default function Shop({
  products,
  categoryId,
  query,
  category,
  parentCategory,
  brands,
  properties,
  categories,
}) {
  const { t } = useTranslation()
  console.log('category ', category)
  console.log('categoryid', categoryId)
  return (
    <>
      <SEO title={t('products')} description={t('product_list_desc')} />
      <ShopHeader
        categ={parentCategory}
        childCategs={parentCategory.children}
        subCateg={category}
      />
      <ProductList
        categoryId={categoryId}
        data={products}
        brands={brands}
        properties={properties}
      />
    </>
  )
}
export async function getServerSideProps({ query, req }) {
  const urls = ['http://46.101.122.150:1235/v1/category']
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
    `http://46.101.122.150:1235/v1/product?active=true&category=${categoryId}&lang=${req.i18n.language}`,
    `http://46.101.122.150:1235/v1/category/${query.id}?lang=${req.i18n.language}`,
    'http://46.101.122.150:1235/v1/brand',
    'http://46.101.122.150:1235/v1/product-property',
  ])

  // const urls = [
  //   'http://46.101.122.150:1235/v1/category',
  //   `http://46.101.122.150:1235/v1/category/${query.categ}`,
  //   `http://46.101.122.150:1235/v1/category/${query.subcateg}`,
  //   `http://46.101.122.150:1235/v1/product?category=${query.categid}`,
  //   `http://46.101.122.150:1235/v1/brand`,
  //   `http://46.101.122.150:1235/v1/product-property`,
  // ]
  // const [
  //   categories,
  //   categ,
  //   subCateg,
  //   products,
  //   brands,
  //   properties,
  // ] = await fetchMultipleUrls(urls)
  // const childCategs = categories?.categories.filter(
  //   (el) => el.slug === query?.categ
  // )
  return {
    // props: {
    //   categories,
    //   subCateg,
    //   categ,
    //   childCategs: childCategs?.length ? childCategs[0].children : null,
    //   products,
    //   brands,
    //   properties,
    // },
    props: {
      products,
      categories: categories.categories,
      category,
      brands,
      properties,
      parentCategory,
      categoryId,
    },
  }
}
