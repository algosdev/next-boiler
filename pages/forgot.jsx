import React from 'react'
import { Container } from '@material-ui/core'
import ForgotForm from '../components/authForm/forgotForm'
import SEO from '../components/seo'
import { fetchMultipleUrls } from '../lib/fetchMultipleUrls'
function forgot() {
  return (
    <>
      <SEO />
      <Container style={{ marginTop: 'auto' }}>
        <ForgotForm />
      </Container>
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

export default forgot
