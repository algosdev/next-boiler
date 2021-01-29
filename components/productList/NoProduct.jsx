import React from 'react';
import style from './productList.module.scss';
function NoProduct() {
  return (
    <div className={style.no_product}>
      По фильтру не найдено ни одного товара
    </div>
  );
}

export default NoProduct;
