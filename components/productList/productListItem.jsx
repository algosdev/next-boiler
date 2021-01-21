import React from 'react';
import { Link, useTranslation } from '../../i18n';
import { numberToPrice } from '../../lib/numberToPrice';
import style from './productList.module.scss';
function ProductListItem({ item }) {
  const { t } = useTranslation();
  return (
    <>
      <Link href={`/shop/${item.slug}`}>
        <a className={style.product}>
          <div className={style.img_cont}>
            <figure>
              <img src={item.img} />
            </figure>
          </div>
          <span className={style.type}>{item.type}</span>
          <h3 className={style.name}>{item.name}</h3>
          <span className={style.price}>
            {numberToPrice(item.price)} {t('soum')}
          </span>
          <div className={style.colors}>
            {item.colors.map((color, ind) => (
              <span key={ind} className={`${style[color]} ${style.color}`} />
            ))}
          </div>
        </a>
      </Link>
    </>
  );
}

export default ProductListItem;
