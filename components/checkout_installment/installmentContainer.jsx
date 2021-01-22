import React, { useState } from 'react';
import InstallmentDetails from './installmentDetails';
import InstallmentForm from './installmentForm';
import { Grid } from '@material-ui/core';
import style from './checkout_installment.module.scss';
import { useTranslation } from '../../i18n';
import { makeStyles } from '@material-ui/core';
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
function InstallmentContainer() {
  const classes = useStyles();
  const { t } = useTranslation();
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const calculateTotal = (e) => {};
  const [type, setType] = useState(24);
  return (
    <>
      <div className={style.wrapper}>
        <p className={style.list_title}>Оформление рассрочки</p>
        <div className={style.grid_container}>
          <div className={style.grid_item}>
            <div className={style.inner}>
              <InstallmentForm setType={setType} />
            </div>
          </div>
          <div className={style.grid_item}>
            <InstallmentDetails type={type} />
          </div>
        </div>
      </div>
    </>
  );
}

export default InstallmentContainer;
