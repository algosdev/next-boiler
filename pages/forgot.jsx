import React from 'react'
import { Container, Typography } from '@material-ui/core'
import ForgotForm from '../components/authForm/forgotForm'
function forgot() {
  return (
    <>
      <Container style={{ marginTop: 'auto' }}>
        <ForgotForm />
      </Container>
    </>
  )
}

export default forgot
