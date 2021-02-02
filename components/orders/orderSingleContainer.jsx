import React, { useState } from 'react';
import OrderDetails from './orderDetails';
import { Grid } from '@material-ui/core';
import style from './orders.module.scss';
import { useTranslation } from '../../i18n';
function OrderSingleContainer({ data }) {
  const { t } = useTranslation();
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const calculateTotal = (e) => {};
  return (
    <>
      <div className={style.wrapper}>
        {/* <p className={style.list_title}>{t('order')} #00001</p> */}
        <div className={style.grid_container}>
          <div className={style.grid_item}>
            <div className={style.inner}>
              <OrderDetails data={data} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderSingleContainer;
