import React from 'react'
import { Container, Grid } from '@material-ui/core'
import CardList from '../components/card/cardList'
import CardSummary from '../components/card/cardSummary'
function cart() {
  return (
    <>
      <div style={{ background: '#fff', padding: '50px 0' }}>
        <Container>
          <CardList />
        </Container>
      </div>
    </>
  )
}

export default cart
