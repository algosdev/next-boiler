import React from 'react'
import { Container, Typography } from '@material-ui/core'
import VerifyCodeForm from '../components/authForm/verifyCodeForm'
function VerifyCode() {
  return (
    <>
      <Container style={{ marginTop: 'auto' }}>
        <VerifyCodeForm />
      </Container>
    </>
  )
}

export default VerifyCode
