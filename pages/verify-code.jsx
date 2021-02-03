import React from 'react'
import { Container, Typography } from '@material-ui/core'
import VerifyCodeForm from '../components/authForm/verifyCodeForm'
import SEO from '../components/seo'
import { useTranslation } from '../i18n'
import { fetchMultipleUrls } from '../lib/fetchMultipleUrls'
import { useRouter } from 'next/router'

function VerifyCode() {
  const { t } = useTranslation()
  const router = useRouter()

  return (
    <>
      <SEO
        title={t('code_verification')}
        description={`${t('code_verification')} - ${t('auth_desc')}`}
        keywords={'проверка, OTP, authorization, MacBro, form'}
      />
      <Container style={{ marginTop: 'auto' }}>
        <VerifyCodeForm phone={router.query.phone} />
      </Container>
    </>
  )
}

export default VerifyCode
