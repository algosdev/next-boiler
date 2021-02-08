import React from 'react'
import InstallmentBanner from '../components/installment/installmentBanner'
import InstallmentContent from '../components/installment/installmentContent'
import SEO from '../components/seo'
import { useTranslation } from '../i18n'
import { fetchMultipleUrls } from '../lib/fetchMultipleUrls'
function Installment() {
  const { t } = useTranslation()
  return (
    <>
      <SEO title={t('installment')} description={t('installment_desc')} />
      <InstallmentBanner />
      <InstallmentContent />
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

export default Installment
