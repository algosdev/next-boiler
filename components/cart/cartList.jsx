import React, { useState, useEffect } from 'react'
import CartListItem from './cartListItem'
import CardSummary from './cartSummary'
import { Grid } from '@material-ui/core'
import style from './cart.module.scss'
import NoItemInCart from './NoItemInCart'
import { useTranslation } from '../../i18n'
import { useSelector, shallowEqual } from 'react-redux'
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
  const calculateTotalQuantity = (data) => {
    let sum = 0
    data.forEach((el) => {
      sum += el.quantity
    })
    return sum
  }
  const calculateTotalPrice = (data) => {
    let sum = 0
    data.forEach((el) => {
      sum += el.quantity * el.price
    })
    return sum
  }
  const productsInCart = useSelector(
    (state) => state?.cart?.cartItems,
    shallowEqual
  )
  const [totalPrice, setTotalPrice] = useState(0)
  const [cardItems, setCartItems] = useState(productsInCart)
  const [totalQuantity, setTotalQuantity] = useState(
    calculateTotalQuantity(productsInCart)
  )

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
  useEffect(() => {
    setCartItems(productsInCart)
  }, [productsInCart])
  useEffect(() => {
    setTotalQuantity(calculateTotalQuantity(cardItems))
    setTotalPrice(calculateTotalPrice(cardItems))
  }, [cardItems])
  console.log(totalQuantity)
  return (
    <>
      <div className={style.wrapper_list}>
        <p className={style.list_title}>
          {t('incart1')} {totalQuantity} {t('incart2')}
        </p>
        <Grid container justify='space-between' xs={12} spacing={2}>
          <Grid item xs={8}>
            <div className={style.inner}>
              {cardItems.length ? (
                cardItems.map((el) => (
                  <CartListItem
                    data={el}
                    key={el.id}
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
