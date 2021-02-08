import React from 'react'
import { Container, Typography } from '@material-ui/core'
import SignUpForm from '../components/authForm/signUpForm'
import SEO from '../components/seo'
import { useTranslation } from '../i18n'
import { fetchMultipleUrls } from '../lib/fetchMultipleUrls'
function signUp() {
  const { t } = useTranslation()
  return (
    <>
      <SEO
        title={t('signup')}
        description={`${t('signup')} - ${t('auth_desc')}`}
        keywords={'signup, зарегистрироваться, authorization, MacBro, form'}
      />
      <Container style={{ marginTop: 'auto' }}>
        <SignUpForm />
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

export default signUp
