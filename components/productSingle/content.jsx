import React, { useState, useEffect } from 'react'
import style from './productSingle.module.scss'
import { useDispatch, shallowEqual, useSelector } from 'react-redux'
import { i18n, useTranslation, Link, Router } from '../../i18n'
import {
  Container,
  Grid,
  Accordion,
  Button,
  AccordionSummary,
  Typography,
  AccordionDetails,
  CircularProgress,
  Box,
} from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'
import { motion, AnimatePresence } from 'framer-motion'
import {
  asyncAddToCartActionWithCustomQuantity,
  asyncIncreaseCartItemQuantityAction,
} from '../../redux/actions/cartActions/cartActions'
import { numberToPrice } from '../../lib/numberToPrice'
import Rating from '@material-ui/lab/Rating'
import { makeStyles } from '@material-ui/core/styles'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
const colorsData = [
  { ru: 'Черный', en: 'Black', uz: 'Qora' },
  { ru: 'Серый', en: 'Grey', uz: 'Kulrang' },
  { ru: 'Красный', en: 'Red', uz: 'Qizil' },
  { ru: 'Синий', en: 'Blue', kok: "Ko'k" },
]

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: '28px',
    lineHeight: '1.5',
    fontWeight: 'bold',
  },
  details: {
    fontSize: '16px',
  },
  summary: {
    padding: '0',
  },
}))

function ProductSingleContent({ data }) {
  const classes = useStyles()
  const dispatch = useDispatch()
  const productsInCart = useSelector(
    (state) => state?.cart?.cartItems,
    shallowEqual
  )
  const [isLoading, setIsLoading] = useState(false)
  const check = productsInCart.filter((el) => el.id === data.id)?.length
    ? true
    : false
  const [error, setError] = useState(false)
  const [quantity, setQuantity] = useState(1)
  const [addedToCart, setAddedToCart] = useState(
    productsInCart.some((el) => el.id === data.id)?.length ? true : false
  )
  const { language } = i18n
  const { t } = useTranslation()
  const [activeColorIndex, setActiveColorIndex] = useState(0)
  const addToCart = () => {
    if (!addedToCart) {
      const validQuantity = quantity > 0 ? quantity : 0
      dispatch(
        asyncAddToCartActionWithCustomQuantity({
          ...data,
          customQuantity: validQuantity,
        })
      )
      // dispatch(asyncAddToCartAction(data))
      setIsLoading(true)
      setTimeout(() => {
        setAddedToCart(true)
        setIsLoading(false)
      }, 1000)
    }
  }
  const changeQuantity = (operator) => {
    if (operator === 'plus') {
      if (1000000 > quantity) {
        // dispatch(asyncAddToCartAction(data))
        setError(false)
        setQuantity((old) => ++old)
      }
    } else if (operator === 'minus') {
      if (quantity !== 1) {
        setError(false)
        // dispatch(asyncReduceCartItemQuantityAction(data))
        setQuantity((old) => --old)
      }
    }
  }
  const setCustomQuantity = (value) => {
    const validQuantity = value > 0 ? value : ''
    console.log(value)
    if (validQuantity <= 1000000) {
      setQuantity(value > 0 ? value : '')
      setError(false)
      dispatch(
        asyncIncreaseCartItemQuantityAction({
          ...data,
          customQuantity: validQuantity,
        })
      )
    } else {
      setError(true)
    }
  }
  useEffect(() => {
    const check = productsInCart.filter((el) => el.id === data.id)?.length
      ? true
      : false
    setAddedToCart(check)
  }, [data])

  return (
    <div className={style.wrapper_content}>
      <Container>
        <div className={style.inner}>
          <div className={style.type}>{t('new')}</div>
          <div className={style.name}>{data.name}</div>
          <div className={style.desc}>
            Требуются AirPods Max с последней версией программного обеспечения и
            модели iPhone и iPod touch с последней версией iOS; модели iPad с
            последней версией iPadOS; Модели Apple Watch с последней версией
            watchOS;
          </div>
          <div className={style.colors_cont}>
            <div className={style.colors_title}>{t('colors')}</div>
            <Grid container spacing={2}>
              {colorsData.map((item, index) => (
                <Grid
                  item
                  xs={6}
                  key={index}
                  onClick={() => setActiveColorIndex(index)}
                >
                  <div
                    className={`${style.color_cont} ${
                      activeColorIndex === index ? style.active : ''
                    }`}
                  >
                    <div className={style.inner}>
                      <div
                        className={`${style.color_ball} ${
                          style[item.en.toLowerCase()]
                        }`}
                      ></div>
                      <div className={style.color_name}>{item[language]}</div>
                    </div>
                  </div>
                </Grid>
              ))}
            </Grid>
          </div>
          {!addedToCart ? (
            <div className={style.quantity_cont}>
              <div className={style.quantity_inner}>
                <button
                  className={style.minus}
                  onClick={() => changeQuantity('minus')}
                >
                  <RemoveIcon />
                </button>
                <div
                  className={`${style.quantity} ${error ? style.error : ''}`}
                >
                  <input
                    type='number'
                    // min={0}
                    pattern='[0-9]'
                    // max={data?.availableQuantity}
                    value={quantity}
                    onBlur={(e) => {
                      setError(false)
                      if (e.target.value === '') {
                        setCustomQuantity(1)
                      }
                    }}
                    onChange={(e) => setQuantity(e.target.value)}
                  ></input>
                </div>
                <button
                  className={style.plus}
                  onClick={() => changeQuantity('plus')}
                >
                  <AddIcon />
                </button>
              </div>
            </div>
          ) : (
            ''
          )}
          <div className={style.price}>
            {numberToPrice(data.price)} {t('soum')}
          </div>
          <div className={style.add}>
            <Button
              className={`input ${isLoading ? style.disabled : ''}`}
              onClick={() => {
                if (!addedToCart) {
                  addToCart()
                } else {
                  Router.push('/cart')
                }
              }}
              disabled={isLoading}
            >
              <AnimatePresence>
                {addedToCart && (
                  <motion.span
                    animate={{ opacity: 1, scale: 1 }}
                    initial={{ opacity: 0, scale: 0 }}
                    exit={{ opacity: 0, scale: 0 }}
                  >
                    {t('added_to_cart')}
                  </motion.span>
                )}
              </AnimatePresence>
              {!addedToCart &&
                (isLoading ? (
                  <CircularProgress color='inherit' />
                ) : (
                  t('add_to_cart')
                ))}
            </Button>
            <Button
              fullWidth
              className={style.secondary}
              onClick={() => {
                Router.push('/compare')
              }}
            >
              {t('compare_with_others')}
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default ProductSingleContent
