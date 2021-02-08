import React from 'react'
import DeliveryBanner from '../components/delivery/deliveryBanner'
import DeliveryContent from '../components/delivery/deliveryContent'
import SEO from '../components/seo'
import { fetchMultipleUrls } from '../lib/fetchMultipleUrls'
import { useTranslation } from '../i18n'
function Delivery() {
  const { t } = useTranslation()
  return (
    <>
      <SEO title={t('delivery')} description={t('delivery_desc')} />
      <DeliveryBanner />
      <DeliveryContent />
    </>
  )
}
export async function getServerSideProps({ req }) {
  const urls = [`${process.env.CATEGORY_API_URL}?lang=${req.i18n.language}`]
  const [categories] = await fetchMultipleUrls(urls)
  console.log('AAA', categories)
  return {
    props: {
      categories,
    },
  }
}

export default Delivery
