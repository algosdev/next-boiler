import React from 'react'
import { Container } from '@material-ui/core'
import Shipment from './shipment'
import Payment from './payment'
import style from './account.module.scss'
function AccountSettings() {
  return (
    <div style={{ background: '#fff', padding: '50px 0' }}>
      <Container>
        <div className={style.title}>Account Settings</div>
        <Shipment />
        <Payment />
      </Container>
    </div>
  )
}

export default AccountSettings
