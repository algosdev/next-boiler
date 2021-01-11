import React, { useState, useEffect } from 'react'
import style from './productSingle.module.scss'
import { useDispatch, shallowEqual, useSelector } from 'react-redux'
import { i18n, useTranslation, Link, Router } from '../../i18n'
import { asyncAddToCartAction } from '../../redux/actions/cartActions/cartActions'
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
import { numberToPrice } from '../../lib/numberToPrice'
import Rating from '@material-ui/lab/Rating'
import { makeStyles } from '@material-ui/core/styles'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { motion, AnimatePresence } from 'framer-motion'
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
  const [addedToCart, setAddedToCart] = useState(
    productsInCart.some((el) => el.id === data.id)?.length ? true : false
  )
  const { language } = i18n
  const { t } = useTranslation()
  const [activeColorIndex, setActiveColorIndex] = useState(0)
  const addToCart = () => {
    if (!addedToCart) {
      dispatch(asyncAddToCartAction(data))
      setIsLoading(true)
      setTimeout(() => {
        setAddedToCart(true)
        setIsLoading(false)
      }, 1000)
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
          </div>
        </div>
      </Container>
    </div>
  )
}

export default ProductSingleContent
