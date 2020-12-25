import React from 'react'
import { Container, Typography } from '@material-ui/core'
import SignUpForm from '../components/authForm/signUpForm'
function signUp() {
  return (
    <>
      <Container>
        <SignUpForm />
      </Container>
    </>
  )
}

export default signUp
