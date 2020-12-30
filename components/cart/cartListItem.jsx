import React, { useState, useEffect } from 'react'
import style from './cart.module.scss'
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'
import DeleteIcon from '@material-ui/icons/Delete'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from '../../i18n'
function CartListItem({
  src,
  name,
  availableQuantity,
  priceProp,
  id,
  deleteItem,
  calculateTotal,
}) {
  const { t } = useTranslation()
  const [quantity, setQuantity] = useState(1)
  const [price, setPrice] = useState(priceProp)
  const [total, setTotal] = useState(0)
  const [isdeleted, setIsDeleted] = useState(false)
  const changeQuantity = (operator) => {
    if (operator === 'plus') {
      if (availableQuantity > quantity) {
        setQuantity((old) => ++old)
      }
    } else if (operator === 'minus') {
      if (quantity !== 1) {
        setQuantity((old) => --old)
      }
    }
  }
  useEffect(() => {
    setTotal(price * quantity)
    calculateTotal(id, quantity)
  }, [quantity, price])
  return (
    <>
      {/* <AnimatePresence>
        {!isdeleted ? ( */}
      <motion.div className={style.wrapper_item} exit={{ opacity: 0, x: -200 }}>
        <div className={style.inner}>
          <div className={style.img}>
            <img src={src} alt='Product' />
          </div>
          <div className={style.details}>
            <div className={style.title}>{name}</div>
            <div className={style.info}>
              {availableQuantity} {availableQuantity > 1 ? t('pc1') : t('pc2')}{' '}
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
              <div className={style.quantity}>{quantity}</div>
              <div
                className={style.plus}
                onClick={() => changeQuantity('plus')}
              >
                <AddIcon />
              </div>
            </div>
            <div className={style.price}>
              {price} {t('soum/pc')}
            </div>
          </div>
          <div className={style.total}>
            {total} {t('soum')}
          </div>
          <div className={style.trash}>
            <div
              className={style.icon}
              onClick={() => {
                deleteItem(id)
                setIsDeleted(true)
              }}
            >
              <DeleteIcon />
            </div>
          </div>
        </div>
      </motion.div>
      {/* ) : (
          ''
        )}
      </AnimatePresence> */}
    </>
  )
}

export default CartListItem
