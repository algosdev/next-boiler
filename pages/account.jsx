import React from 'react'
import { Container } from '@material-ui/core'
import AccountHeader from '../components/account/header'
import AccountSettings from '../components/account/settings'
import SEO from '../components/seo'
function account() {
  return (
    <>
      <SEO title='Профиль' />
      <AccountHeader />
      <AccountSettings />
    </>
  )
}

export default account
