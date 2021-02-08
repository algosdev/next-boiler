import React from 'react'
import { Container, Typography } from '@material-ui/core'
import NewPasswordForm from '../components/authForm/newPasswordForm'
import SEO from '../components/seo'
import { fetchMultipleUrls } from '../lib/fetchMultipleUrls'
function NewPassword() {
  return (
    <>
      <SEO />
      <Container style={{ marginTop: 'auto' }}>
        <NewPasswordForm />
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

export default NewPassword
