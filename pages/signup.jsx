import React from 'react'
import { Container, Typography } from '@material-ui/core'
import SignUpForm from '../components/authForm/signUpForm'
function signUp() {
  return (
    <>
      <Container style={{ marginTop: 'auto' }}>
        <SignUpForm />
      </Container>
    </>
  )
}

export default signUp
