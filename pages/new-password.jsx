import React from 'react'
import { Container, Typography } from '@material-ui/core'
import NewPasswordForm from '../components/authForm/newPasswordForm'
import SEO from '../components/seo'
function NewPassword() {
  return (
    <>
      <SEO />
      <Container style={{ marginTop: 'auto' }}>
        <NewPasswordForm />
      </Container>
    </>
  )
}

export default NewPassword
