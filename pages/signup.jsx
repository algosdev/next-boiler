import React from 'react'
import { Container, Typography } from '@material-ui/core'
import SignUpForm from '../components/authForm/signUpForm'
import SEO from '../components/seo'
function signUp() {
  return (
    <>
      <SEO />
      <Container style={{ marginTop: 'auto' }}>
        <SignUpForm />
      </Container>
    </>
  )
}

export default signUp
