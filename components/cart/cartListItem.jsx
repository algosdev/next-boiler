import React, { useState, useEffect } from 'react'
import style from './cart.module.scss'
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'
import DeleteIcon from '@material-ui/icons/Delete'
import { motion, AnimatePresence } from 'framer-motion'
function CartListItem({ src, name, quantityProp, priceProp }) {
  const [quantity, setQuantity] = useState(1)
  const [price, setPrice] = useState(priceProp)
  const [total, setTotal] = useState(1)
  const [isdeleted, setIsDeleted] = useState(false)
  const changeQuantity = (operator) => {
    if (operator === 'plus') {
      setQuantity((old) => ++old)
    } else if (operator === 'minus') {
      if (quantity !== 1) {
        setQuantity((old) => --old)
      }
    }
  }
  useEffect(() => {
    setTotal(price * quantity)
  }, [quantity, price])
  return (
    <>
      <AnimatePresence>
        {!isdeleted ? (
          <motion.div
            className={style.wrapper_item}
            exit={{ opacity: 0, x: -200 }}
          >
            <div className={style.inner}>
              <div className={style.img}>
                <img src={src} alt='' />
              </div>
              <div className={style.details}>
                <div className={style.title}>{name}</div>
                <div className={style.info}>
                  {quantityProp} pieces available
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
                  <div className={style.quantity}>{quantity}</div>
                  <div
                    className={style.plus}
                    onClick={() => changeQuantity('plus')}
                  >
                    <AddIcon />
                  </div>
                </div>
                <div className={style.price}>{price} soum/pc</div>
              </div>
              <div className={style.total}>{total} soum</div>
              <div className={style.trash}>
                <div className={style.icon} onClick={() => setIsDeleted(true)}>
                  <DeleteIcon />
                </div>
              </div>
            </div>
          </motion.div>
        ) : (
          ''
        )}
      </AnimatePresence>
    </>
  )
}

export default CartListItem
