import React, { useState, useEffect } from 'react';
import style from './orders.module.scss';
import { useTranslation } from '../../i18n';
import { numberToPrice } from '../../lib/numberToPrice';
import { formatDate } from '../../lib/formatDate';
import { CreditCardIcon, CashIcon, CalendarIcon } from '../svg';
function OrderDetails({ data }) {
  const { t } = useTranslation();
  const [totalPrice, setTotalPrice] = useState('');
  const calculateTotalPrice = (data) => {
    let sum = 0;
    data.forEach((el) => {
      sum += parseInt(el.quantity) * parseInt(el?.price);
    });
    return sum;
  };
  useEffect(() => {
    const totalP = calculateTotalPrice(data.items);
    setTotalPrice(totalP);
  }, []);
  return (
    <>
      <div className={style.wrapper_details}>
        <p className={style.od_title}>{t('app_accepted')}</p>

        <p className={style.ol_title}>{t('thank_you_order')}</p>
        <p className={style.status}>
          {t('status')}: <div>{t(data.status)}</div>
        </p>
        <div className={style.order_in_total}>
          <div className={style.data}>
            <div>
              <p className={style.bold}>Заказ ID</p>
            </div>
            <div>
              <p className={style.bold}>{t('payment_method')}</p>
            </div>
            <div>
              <p className={style.bold}>{t('order_date')}</p>
            </div>
            <div>
              <p className={style.bold}>{t('total_sum')}</p>
            </div>
          </div>
          <div className={style.grid}>
            <div>
              <p>{data.number}</p>
            </div>
            <div className={style.has_svg}>
              {data.payment_method === 'cash' ? (
                <>
                  <CashIcon /> {t('incash')}
                </>
              ) : data.payment_method === 'click' ? (
                <img src='/images/click.png' alt='Click' />
              ) : data.payment_method === 'payme' ? (
                <img src='/images/payme.png' alt='Payme' />
              ) : (
                <>
                  <CreditCardIcon /> {t('terminal')}
                </>
              )}
            </div>
            <div>
              <p>{formatDate(data.created_at)}</p>
            </div>
            <div>
              <p>
                {numberToPrice(totalPrice)} {t('soum')}
              </p>
            </div>
          </div>
        </div>
        <div className={style.order_in_total_mobile}>
          <div className={style.data}>
            <div>
              Заказ ID: <p className={style.bold}>4567</p>
            </div>
            <div>
              {t('payment_method')}:{' '}
              <p className={style.bold}>
                <img src='/images/click.png' />
              </p>
            </div>
            <div>
              {t('order_date')}: <p className={style.bold}>23.10.2020</p>
            </div>
            <div>
              {t('total_sum')}:{' '}
              <p className={style.bold}>
                {numberToPrice(5200000)} {t('soum')}
              </p>
            </div>
          </div>
        </div>

        <p className={style.border}></p>
        <div className={style.product_list}>
          <div className={style.data}>
            <div>
              <p className={style.bold}>Продукт</p>
            </div>
            <div>
              <p className={style.bold}>{t('price')}</p>
            </div>
            <div>
              <p className={style.bold}>{t('quantity')}</p>
            </div>
            <div>
              <p className={style.bold}>{t('total_sum')}</p>
            </div>
          </div>
          {data.items.map((item) => (
            <div className={style.data} key={item.id}>
              <div className={style.first}>
                <img src={item.image} alt={item.product_name} />
                <p>{item.product_name}</p>
              </div>
              <div>
                <p>
                  {numberToPrice(item.price)} {t('soum')}
                </p>
              </div>
              <div>
                <p>
                  {item.quantity} {t(item.quantity < 2 ? 'pc1' : 'pc2')}
                </p>
              </div>
              <div>
                <p>
                  {numberToPrice(
                    parseInt(item.quantity) * parseInt(item.price)
                  )}{' '}
                  {t('soum')}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className={style.product_list_mobile}>
          <div className={style.item}>
            <div className={style.row}>
              <div className={style.img}>
                <img src='/images/iphone12.jpeg' alt='Iphone 12' />
              </div>
            </div>
            <div className={style.row}>
              <p>iPhone 12 | 256GB blue</p>
            </div>
            <div className={style.row}>
              <p>
                {t('price')}: {numberToPrice(2700000)} {t('soum')}{' '}
              </p>
            </div>
            <div className={style.row}>
              <p>
                {t('quantity')}: 1 {t('pc1')}
              </p>
            </div>
            <div className={style.row}>
              <p className={style.total}>
                {t('total_sum')}: {numberToPrice(5200000)} {t('soum')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderDetails;
