import React, { useState } from 'react';
import CheckoutDetails from './checkoutDetails';
import CheckoutForm from './checkoutForm';
import { Grid } from '@material-ui/core';
import style from './checkout.module.scss';
import { useTranslation } from '../../i18n';
import { makeStyles } from '@material-ui/core';
import { useSelector, shallowEqual } from 'react-redux';
const useStyles = makeStyles((theme) => ({
  item1: {
    [theme.breakpoints.up('md')]: {
      order: 2,
    },
    [theme.breakpoints.up('sm')]: {
      order: 1,
    },
  },
  item2: {
    [theme.breakpoints.up('md')]: {
      order: 1,
    },
    [theme.breakpoints.up('sm')]: {
      order: 2,
    },
  },
}));
function CheckoutContainer() {
  const classes = useStyles();
  const { t } = useTranslation();
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const calculateTotal = (e) => {};
  const productsInCart = useSelector(
    (state) => state?.cart?.cartItems,
    shallowEqual
  );

  return (
    <>
      <div className={style.wrapper}>
        <p className={style.list_title}>{t('checkout')}</p>
        <div className={style.grid_container}>
          <div className={style.grid_item}>
            <div className={style.inner}>
              <CheckoutForm productsInCart={productsInCart} />
            </div>
          </div>
          <div className={style.grid_item}>
            <CheckoutDetails productsInCart={productsInCart} />
          </div>
        </div>
      </div>
    </>
  );
}

export default CheckoutContainer;
