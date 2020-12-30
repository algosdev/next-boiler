import React, { useState, useEffect } from 'react'
import CartListItem from './cartListItem'
import CardSummary from './cartSummary'
import { Grid } from '@material-ui/core'
import style from './cart.module.scss'
import NoItemInCart from './NoItemInCart'
import { useTranslation } from '../../i18n'
const cartData = [
  {
    name: 'Airpods Max Series 6, Gold Aluminum Case',
    availableQuantity: '14',
    price: 25000,
    src: '/images/airpods_max.jpg',
    id: 1,
    selectedQuantity: 1,
  },
  {
    name: 'HomePod mini',
    availableQuantity: '6',
    price: 140000,
    src: 'images/homepod_mini.jpeg',
    id: 2,
    selectedQuantity: 1,
  },
  {
    name: 'iPhone 12 Pro Max Silicone case',
    availableQuantity: '23',
    price: 99000,
    src: 'images/case.jpeg',
    id: 3,
    selectedQuantity: 1,
  },
]
function CartList() {
  const { t } = useTranslation()
  const [totalPrice, setTotalPrice] = useState(0)
  const [cardItems, setCartItems] = useState(cartData)
  const [totalQuantity, setTotalQuantity] = useState(0)
  const deleteItem = (id) => {
    const newItems = cardItems.filter((el) => el.id !== id)
    setCartItems(newItems)
  }
  const calculateTotal = (id, quantity) => {
    const newItems = cardItems.map((el) => {
      if (el.id === id) {
        el.selectedQuantity = quantity
        return el
      } else {
        return el
      }
    })
    setCartItems(newItems)
  }
  const updateSummary = () => {
    let totalQ = 0
    let totalP = 0
    cardItems.forEach((el) => {
      totalP += el.price * el.selectedQuantity
      totalQ += el.selectedQuantity
    })
    setTotalPrice(totalP)
    setTotalQuantity(totalQ)
  }
  useEffect(() => {
    updateSummary()
  }, [cardItems])
  console.log(cardItems)
  return (
    <>
      <div className={style.wrapper_list}>
        <p className={style.list_title}>
          {t('incart1')} {cardItems.length} {t('incart2')}
        </p>
        <Grid container justify='space-between' xs={12} spacing={2}>
          <Grid item xs={8}>
            <div className={style.inner}>
              {cardItems.length ? (
                cardItems.map((el) => (
                  <CartListItem
                    name={el.name}
                    availableQuantity={el.availableQuantity}
                    key={el.id}
                    id={el.id}
                    priceProp={el.price}
                    src={el.src}
                    deleteItem={deleteItem}
                    calculateTotal={calculateTotal}
                  />
                ))
              ) : (
                <NoItemInCart />
              )}
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

export default CartList
