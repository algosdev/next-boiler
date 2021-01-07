import React from 'react'
import { Container, Typography } from '@material-ui/core'
import ForgotForm from '../components/authForm/forgotForm'
import SEO from '../components/seo'
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

export default forgot
