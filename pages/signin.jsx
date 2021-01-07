import React from 'react'
import { Container, Typography } from '@material-ui/core'
import SignInForm from '../components/authForm/signInForm'
import SEO from '../components/seo'
function signIn() {
  return (
    <>
      <SEO />
      <div className='white_bg'>
        <Container style={{ marginTop: 'auto' }}>
          <SignInForm />
        </Container>
      </div>
    </>
  )
}

export default signIn
