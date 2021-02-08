import React from 'react'
import { Container } from '@material-ui/core'
import SEO from '../../components/seo'
import OrderSingleContainer from '../../components/orders/orderSingleContainer'
import { useTranslation } from '../../i18n'
import { fetchMultipleUrls } from '../../lib/fetchMultipleUrls'
function orders({ data }) {
  const { t } = useTranslation()
  console.log('DDD', data)
  return (
    <>
      <SEO title={`${t('order')} №6546`} />
      <Container>
        <OrderSingleContainer data={data} />
      </Container>
    </>
  )
}
export async function getServerSideProps({ req, query }) {
  const urls = [
    `${process.env.CATEGORY_API_URL}?lang=${req.i18n.language}`,
    `${process.env.ORDER_API_URL}/${query.id}`,
  ]
  const [categories, data] = await fetchMultipleUrls(urls)
  return {
    props: {
      categories,
      data,
    },
  }
}

export default orders
