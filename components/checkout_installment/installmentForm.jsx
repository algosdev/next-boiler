import React, { useEffect, useState } from 'react';
import style from './checkout_installment.module.scss';
import {
  CashIn,
  CreditCard,
  DefaultDelivery,
  PickUp,
  FastDelivery,
  TerminalIcon,
  InstallmentIcon,
} from '../svg';
import { asyncSetInstallmentPeriod } from '../../redux/actions/cartActions/cartActions';
import { Button } from '@material-ui/core';
import { useTranslation, i18n } from '../../i18n';
import { numberToPrice } from '../../lib/numberToPrice';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import {
  YMaps,
  Map,
  FullscreenControl,
  SearchControl,
  GeolocationControl,
  ZoomControl,
} from 'react-yandex-maps';
function InstallmentForm() {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [totalPrice, setTotalPrice] = useState();
  const [values, setValues] = useState({
    address: '',
    obtaining: '',
    type: 24,
    payment_method: '',
    passport_img: '',
  });
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
  const handleChange = (e, name) => {
    setValues({ ...values, [name]: e.target.value });
  };
  console.log(values);
  useEffect(() => {
    dispatch(asyncSetInstallmentPeriod(values.type));
  }, [values.type]);
  useEffect(() => {
    setTotalPrice(calculateTotalPrice(productsInCart));
  }, [productsInCart]);
  return (
    <>
      <div className={style.wrapper_form}>
        <p></p>
        <form>
          <div className={style.form_section}>
            <p className={style.title}>Выберите тариф рассрочка</p>
            <div className={style.flex}>
              <div className={style.radio_input}>
                <input
                  required
                  className={`${style.input} input`}
                  type='radio'
                  id='opt1'
                  defaultChecked
                  value={24}
                  onChange={(e) =>
                    setValues({ ...values, type: e.target.value })
                  }
                  name='obtaining'
                />
                <label htmlFor='opt1'>
                  <div>
                    <p className={style.opt_title}>24 мес.</p>
                    <p className={style.opt_img}>
                      {numberToPrice(Math.round(totalPrice / 24))} сум/мес.
                    </p>
                  </div>
                </label>
              </div>
              <div className={style.radio_input}>
                <input
                  className={`${style.input} input`}
                  type='radio'
                  id='opt2'
                  name='obtaining'
                  value={12}
                  onChange={(e) =>
                    setValues({ ...values, type: e.target.value })
                  }
                />
                <label htmlFor='opt2'>
                  <div>
                    <p className={style.opt_title}>12 мес.</p>
                    <p className={style.opt_img}>
                      {numberToPrice(Math.round(totalPrice / 12))} сум/мес.
                    </p>
                  </div>
                </label>
              </div>
              <div className={style.radio_input}>
                <input
                  className={`${style.input} input`}
                  type='radio'
                  id='opt3'
                  name='obtaining'
                  value={6}
                  onChange={(e) =>
                    setValues({ ...values, type: e.target.value })
                  }
                />
                <label htmlFor='opt3'>
                  <div>
                    <p className={style.opt_title}>6 мес.</p>
                    <p className={style.opt_img}>
                      {numberToPrice(Math.round(totalPrice / 6))} сум/мес.
                    </p>
                  </div>
                </label>
              </div>
            </div>
          </div>
          <div className={style.form_section}>
            <p className={style.title}>Персональная информация</p>
            <input
              required
              className={`${style.input} input`}
              placeholder={t('name')}
              type='text'
            />
            <input
              required
              className={`${style.input} input`}
              placeholder={t('surname')}
              type='text'
            />
            <input
              required
              className={`${style.input} input`}
              placeholder='Отчество'
              type='text'
            />
            <input
              required
              className={`${style.input} input`}
              placeholder='Серия и номер паспорта'
              type='text'
            />
            <div className={style.input_file}>
              <input
                required
                className={`${style.input} input`}
                type='file'
                // value={values.passport_img}
                id='file_passport'
                accept='image/png, image/jpeg'
                onChange={(e) => {
                  let file = e.target.files[0];
                  const reader = new FileReader();
                  reader.onloadend = () => {
                    setValues({
                      ...values,
                      passport_img: reader.result,
                    });
                    console.log(reader);
                  };
                  if (file) {
                    reader.readAsDataURL(file);
                  }
                }}
              />
              <div className={style.sample}>
                <img src='/images/passport.jpeg' alt='Passport' />
              </div>
              {values.passport_img && (
                <Button
                  className={style.delete}
                  onClick={() => setValues({ ...values, passport_img: '' })}
                >
                  Удалить
                </Button>
              )}
              <label htmlFor='file_passport'>
                {values.passport_img !== '' ? (
                  <>
                    <div className={style.img}>
                      <img src={values.passport_img} alt='Passport' />
                    </div>
                  </>
                ) : (
                  <div className={style.file_content}>
                    <span>Фото паспорта</span>
                    <span>Нажмите для загрузки</span>
                  </div>
                )}
              </label>
            </div>
          </div>
          <div className={style.form_section}>
            <p className={style.title}>Реквизиты платежной карты</p>
            <input
              required
              className={`${style.input} input`}
              placeholder={'Номер пластиковой карты'}
              type='text'
            />
            <input
              required
              className={`${style.input} input`}
              placeholder={'Срок действия (ММ/ГГ)s'}
              type='text'
            />
            <input
              required
              className={`${style.input} input`}
              placeholder={'Номер телефона прикрепленный к пластиковой карте'}
              type='text'
            />
          </div>
          <div className={style.form_section}>
            <p className={style.title}>Информация о прописке</p>
            <input
              required
              className={`${style.input} input`}
              placeholder={'Регион'}
              type='text'
            />
            <input
              className={`${style.input} input`}
              placeholder={'Район'}
              type='text'
            />
            <input
              className={`${style.input} input`}
              placeholder={'Улица/Массив'}
              type='text'
            />
            <input
              required
              className={`${style.input} input`}
              placeholder={t('entrance')}
              type='text'
            />
            <input
              required
              className={`${style.input} input`}
              placeholder={t('floor')}
              type='text'
            />
            <input
              required
              className={`${style.input} input`}
              placeholder={t('num_house_flat')}
              type='text'
            />
          </div>
          <div className={`${style.form_section}`}>
            <p className={style.title}>Доставка</p>
            <input
              required
              className={`${style.input} input`}
              placeholder={'Регион'}
              type='text'
            />
            <input
              className={`${style.input} input`}
              placeholder={'Район'}
              type='text'
            />
            <input
              className={`${style.input} input`}
              placeholder={'Улица/Массив'}
              type='text'
            />
            <input
              required
              className={`${style.input} input`}
              placeholder={t('entrance')}
              type='text'
            />
            <input
              required
              className={`${style.input} input`}
              placeholder={t('floor')}
              type='text'
            />
            <input
              required
              className={`${style.input} input`}
              placeholder={t('num_house_flat')}
              type='text'
            />
            <YMaps
              query={{
                lang: `${
                  i18n.language === 'ru'
                    ? 'ru_RU'
                    : i18n.language === 'en'
                    ? 'en_RU'
                    : 'ru_RU'
                }_`,
              }}
              apikey
            >
              <Map
                defaultState={{ center: [41.29, 69.2], zoom: 10 }}
                width='100%'
                height='400px'
              >
                <FullscreenControl />
                <GeolocationControl options={{ float: 'left' }} />
                <ZoomControl options={{ float: 'right' }} />
                <SearchControl options={{ float: 'left' }} />
              </Map>
            </YMaps>
          </div>
          <div className={style.form_section}>
            <p className={style.confirm_txt}>{t('additional')}</p>
            <input
              className={`${style.input} input`}
              placeholder={t('comment_to_order')}
              type='text'
            />
          </div>
          <p>{t('confirm_txt')}</p>
          <div className={style.form_section}>
            <button
              className={`${style.submit} input`}
              placeholder='Commment to order'
              type='submit'
            >
              {t('confirm_order')}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default InstallmentForm;
