import { Link } from '../../i18n';
import React, { useState, useEffect } from 'react';
import { useTranslation } from '../../i18n';
import style from './checkout.module.scss';
import CheckoutListItem from './checkoutListItem';
import { numberToPrice } from '../../lib/numberToPrice';
import { useSelector, shallowEqual } from 'react-redux';
function CheckoutDetails() {
  const { t } = useTranslation();
  const productsInCart = useSelector(
    (state) => state?.cart?.cartItems,
    shallowEqual
  );
  const calculateTotalPrice = (data) => {
    let sum = 0;
    data.forEach((el) => {
      sum += el.quantity * el?.price?.price;
    });
    return sum;
  };
  const calculateTotalQuantity = (data) => {
    let sum = 0;
    data.forEach((el) => {
      sum += el.quantity;
    });
    return sum;
  };
  const [totalPrice, setTotalPrice] = useState(0);
  const [cardItems, setCartItems] = useState(productsInCart);
  const [totalQuantity, setTotalQuantity] = useState(
    calculateTotalQuantity(productsInCart)
  );

  const [shippingFee, setShippingFee] = useState(50000);
  const [discount, setDiscount] = useState(10000);
  useEffect(() => {
    setCartItems(productsInCart);
  }, [productsInCart]);
  useEffect(() => {
    setTotalQuantity(calculateTotalQuantity(cardItems));
    setTotalPrice(calculateTotalPrice(cardItems));
  }, [cardItems]);
  return (
    <div className={style.wrapper_summary}>
      <div className={style.summary_inner}>
        <div className={style.header}>
          <p>{t('your_order')}</p>
          <Link href='/cart'>
            <a>{t('edit')}</a>
          </Link>
        </div>

        <div className={style.info}>
          <p>
            {t('products')}({totalQuantity || 0})
          </p>
          <p>{numberToPrice(totalPrice) || '0'}</p>
        </div>
        <div className={style.info}>
          <p> {t('shipping_fee')}</p>
          <p>{numberToPrice(totalPrice !== 0 ? shippingFee : '0')}</p>
        </div>
        <div className={style.info}>
          <p>{t('discount')}</p>
          <p>{numberToPrice(totalPrice !== 0 ? discount : '0')}</p>
        </div>
        <div className={style.totalPrice}>
          <p>{t('total')}</p>
          <p>
            {`${numberToPrice(
              totalPrice !== 0 ? totalPrice + shippingFee - discount : '0'
            )} ${t('soum')}`}
          </p>
        </div>
        <div className={style.list}>
          <div className={style.totalPrice}>
            <p>{t('order_list')}</p>
          </div>
          {cardItems.map((el, ind) => (
            <CheckoutListItem key={ind} data={el} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CheckoutDetails;
