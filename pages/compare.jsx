import React from 'react'
import CompareContent from '../components/compare/compareContent'
import CompareFilter from '../components/compare/compareFilter'
import SEO from '../components/seo'
import { Container } from '@material-ui/core'
import { useTranslation } from '../i18n'
import { fetchMultipleUrls } from '../lib/fetchMultipleUrls'
function compare() {
  const { t } = useTranslation()
  return (
    <>
      <SEO title={t('compare')} description={t('compare_desc')} />
      <div style={{ background: '#fff' }}>
        <Container>
          <CompareFilter />
          {/* <CompareContent /> */}
        </Container>
      </div>
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

export default compare
