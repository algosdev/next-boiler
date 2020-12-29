import React from 'react'
import { Container, Typography } from '@material-ui/core'
import SignInForm from '../components/authForm/signInForm'
function signIn() {
  return (
    <>
      <Container style={{ marginTop: 'auto' }}>
        <SignInForm />
      </Container>
    </>
  )
}

export default signIn
