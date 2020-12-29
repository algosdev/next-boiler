import React from 'react'
import { Container, Typography } from '@material-ui/core'
import NewPasswordForm from '../components/authForm/newPasswordForm'
function NewPassword() {
  return (
    <>
      <Container style={{ marginTop: 'auto' }}>
        <NewPasswordForm />
      </Container>
    </>
  )
}

export default NewPassword
