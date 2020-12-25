import React from 'react'
import { Container, Typography } from '@material-ui/core'
import SignInForm from '../components/authForm/signInForm'
function signIn() {
  return (
    <>
      <Container>
        <SignInForm />
      </Container>
    </>
  )
}

export default signIn
