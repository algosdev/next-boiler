import React, { useState, useEffect } from 'react'
import style from './cart.module.scss'
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'
import DeleteIcon from '@material-ui/icons/Delete'
import { useDispatch } from 'react-redux'
import { motion, AnimatePresence } from 'framer-motion'
import NoItemInCart from './NoItemInCart'
import {
  asyncAddToCartAction,
  asyncReduceCartItemQuantityAction,
  asyncRemoveFromCartAction,
} from '../../redux/actions/cartActions/cartActions'
import { useTranslation } from '../../i18n'
function CartListItem({ id, data, calculateTotal }) {
  const dispatch = useDispatch()
  const { t } = useTranslation()
  const [total, setTotal] = useState(0)
  const [isdeleted, setIsDeleted] = useState(false)
  const changeQuantity = (operator) => {
    if (operator === 'plus') {
      if (data?.availableQuantity > data?.quantity) {
        dispatch(asyncAddToCartAction(data))
        // setQuantity((old) => ++old)
      }
    } else if (operator === 'minus') {
      if (data?.quantity !== 1) {
        dispatch(asyncReduceCartItemQuantityAction(data))
        // setQuantity((old) => --old)
      }
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
                <div className={style.info}>
                  {data?.availableQuantity}{' '}
                  {data?.availableQuantity > 1 ? t('pc1') : t('pc2')}{' '}
                  {t('available')}
                </div>
              </div>
              <div className={style.quantity_cont}>
                <div className={style.quantity_inner}>
                  <div
                    className={style.minus}
                    onClick={() => changeQuantity('minus')}
                  >
                    <RemoveIcon />
                  </div>
                  <div className={style.quantity}>{data?.quantity}</div>
                  <div
                    className={style.plus}
                    onClick={() => changeQuantity('plus')}
                  >
                    <AddIcon />
                  </div>
                </div>
                <div className={style.price}>
                  {data.price} {t('soum/pc')}
                </div>
              </div>
              <div className={style.total}>
                {total} {t('soum')}
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
