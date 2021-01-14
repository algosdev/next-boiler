import React, { useState, useEffect } from 'react'
import style from './cart.module.scss'
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'
import DeleteIcon from '@material-ui/icons/Delete'
import { useDispatch } from 'react-redux'
import { motion, AnimatePresence } from 'framer-motion'
import NoItemInCart from './NoItemInCart'
import { numberToPrice } from '../../lib/numberToPrice'
import {
  asyncAddToCartAction,
  asyncReduceCartItemQuantityAction,
  asyncIncreaseCartItemQuantityAction,
  asyncRemoveFromCartAction,
} from '../../redux/actions/cartActions/cartActions'
import { useTranslation } from '../../i18n'
function CartListItem({ id, data, calculateTotal }) {
  const dispatch = useDispatch()
  const [quantity, setQuantity] = useState(data?.quantity)
  const { t } = useTranslation()
  const [total, setTotal] = useState(0)

  const [error, setError] = useState(false)
  const [isdeleted, setIsDeleted] = useState(false)
  const changeQuantity = (operator) => {
    if (operator === 'plus') {
      if (1000000 > data?.quantity) {
        dispatch(asyncAddToCartAction(data))
        setError(false)
        setQuantity((old) => ++old)
      }
    } else if (operator === 'minus') {
      if (data?.quantity !== 1) {
        setError(false)
        dispatch(asyncReduceCartItemQuantityAction(data))
        setQuantity((old) => --old)
      }
    }
  }
  const setCustomQuantity = (value) => {
    const validQuantity = value > 0 ? value : 0
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
  const deleteItem = () => {
    dispatch(asyncRemoveFromCartAction(data))
  }
  useEffect(() => {
    setTotal(data?.price * data?.quantity)
    calculateTotal(id, data.quantity)
  }, [data])
  useEffect(() => {
    if (isdeleted) {
      setTimeout(deleteItem(data), 200)
    }
  }, [isdeleted])
  return (
    <>
      <AnimatePresence>
        {!isdeleted ? (
          <motion.div
            className={style.wrapper_item}
            exit={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className={style.inner}>
              <div className={style.img}>
                <img src={data?.img} alt='Product' />
              </div>
              <div className={style.details}>
                <div className={style.title}>{data.name}</div>
                {/* <div className={style.info}>
                  {data?.availableQuantity}{' '}
                  {data?.availableQuantity > 1 ? t('pc1') : t('pc2')}{' '}
                  {t('available')}
                </div> */}
              </div>
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
                      onChange={(e) =>
                        setCustomQuantity(
                          e.target.value.replace(/[e\+\-\.]/gi, '')
                        )
                      }
                    ></input>
                  </div>
                  <button
                    className={style.plus}
                    onClick={() => changeQuantity('plus')}
                  >
                    <AddIcon />
                  </button>
                </div>
                <div className={style.price}>
                  {/* {numberToPrice(data.price)} */}
                  {/* {t('soum/pc')} */}
                </div>
              </div>
              <div className={style.total}>
                {numberToPrice(total)} {t('soum')}
              </div>
              <div className={style.trash}>
                <div
                  className={style.icon}
                  onClick={() => {
                    setIsDeleted(true)
                  }}
                >
                  <DeleteIcon />
                </div>
              </div>
            </div>
          </motion.div>
        ) : (
          <NoItemInCart />
        )}
      </AnimatePresence>
    </>
  )
}

export default CartListItem
