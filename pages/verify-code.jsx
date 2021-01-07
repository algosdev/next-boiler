import React from 'react'
import { Container, Typography } from '@material-ui/core'
import VerifyCodeForm from '../components/authForm/verifyCodeForm'
import SEO from '../components/seo'
function VerifyCode() {
  return (
    <>
      <SEO />
      <Container style={{ marginTop: 'auto' }}>
        <VerifyCodeForm />
      </Container>
    </>
  )
}

export default VerifyCode
