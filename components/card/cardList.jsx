import React, { useState } from 'react'
import CardListItem from './cardListItem'
import CardSummary from './cardSummary'
import { Grid } from '@material-ui/core'
import style from './card.module.scss'
function CardList() {
  const [totalPrice, setTotalPrice] = useState(0)
  const [totalQuantity, setTotalQuantity] = useState(0)
  const calculateTotal = (e) => {}
  return (
    <>
      <div className={style.wrapper_list}>
        <p className={style.list_title}>In cart 4 products</p>
        <Grid container justify='space-between' xs={12} spacing={2}>
          <Grid item xs={8}>
            <div className={style.inner}>
              <CardListItem />
              <CardListItem />
              <CardListItem />
              <CardListItem />
            </div>
          </Grid>
          <Grid item xs={4}>
            <CardSummary
              totalPrice={totalPrice}
              totalQuantity={totalQuantity}
            />
          </Grid>
        </Grid>
      </div>
    </>
  )
}

export default CardList
