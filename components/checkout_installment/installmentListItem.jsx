import React, { useState, useEffect } from 'react';
import style from './checkout_installment.module.scss';
import AddIcon from '@material-ui/icons/Add';
import { useTranslation } from '../../i18n';
function InstallmentListItem({ data }) {
  const { t } = useTranslation();
  const [quantity, setQuantity] = useState(data.quantity);
  return (
    <>
      <div className={style.wrapper_item}>
        <div className={style.inner}>
          <div className={style.img}>
            <img src={data.image} alt='' />
          </div>
          <div className={style.details}>
            <div className={style.title}>{data.name}</div>
            <div className={style.info}>
              {quantity} {quantity > 1 ? t('pc1') : t('pc2')}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default InstallmentListItem;
