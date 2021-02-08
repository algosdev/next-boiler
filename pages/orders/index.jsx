import React, { useEffect, useState } from 'react'
import { Container } from '@material-ui/core'
import OrderContainer from '../../components/orders/orderContainer'
import SEO from '../../components/seo'
import { useTranslation } from '../../i18n'
import { fetchMultipleUrls } from '../../lib/fetchMultipleUrls'
import axios from 'axios'
import { shallowEqual, useSelector } from 'react-redux'

function Orders() {
  const [data, setData] = useState(null)
  const user = useSelector((state) => state.auth.user, shallowEqual)

  useEffect(() => {
    axios
      .get(`${process.env.USER_ORDERS_API_URL}?limit=100&page=1`, {
        headers: {
          Authorization: user.access_token,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          setData(res.data)
        }
      })
  }, [])

  const { t } = useTranslation()

  return (
    <>
      <SEO title={t('orders')} description={t('orders_desc')} />
      <div style={{ background: '#fff', padding: '50px 0' }}>
        <Container>
          <OrderContainer data={data} />
        </Container>
      </div>
    </>
  )
}
export async function getServerSideProps({ req }) {
  const urls = [`${process.env.CATEGORY_API_URL}?lang=${req.i18n.language}`]

  const [categories] = await fetchMultipleUrls(urls)
  return {
    props: {
      categories,
    },
  }
}

export default Orders
