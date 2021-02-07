import React, { useState, useEffect } from 'react'
import style from './checkout.module.scss'
import {
  CashIn,
  CreditCard,
  DefaultDelivery,
  PickUp,
  FastDelivery,
  TerminalIcon,
  CreditCardIcon,
  CashIcon,
  CalendarIcon,
  InstallmentIcon,
} from '../svg'
import { useTranslation, i18n, Router } from '../../i18n'
import { createFormData } from '../../lib/createFormData'
import {
  YMaps,
  Map,
  FullscreenControl,
  SearchControl,
  GeolocationControl,
  ZoomControl,
} from 'react-yandex-maps'
import { useDispatch, shallowEqual, useSelector } from 'react-redux'
import axios from 'axios'
function CheckoutForm({ productsInCart }) {
  const { t } = useTranslation()
  const user = useSelector((state) => state.auth.user, shallowEqual)
  const [values, setValues] = useState({
    address: '',
    delivery_method: 'self',
    payment_method: 'cash',
    customer_name: `${user.name} ${user.lastname}`,
    phone: user.phone,
    entrance: '',
    floor: '',
    domofon: '',
    items: [],
    num_house_or_flat: '',
    long_lat: '',
  })
  const handleChange = (e, prop) => {
    setValues({ ...values, [prop]: e.target.value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(values)
    axios
      .post(
        'http://46.101.122.150:1235/v1/order',
        createFormData({
          address: `${values.num_house_or_flat}, ${values.floor}, ${values.entrance},  ${values.domofon}`,
          delivery_method: 'self',
          payment_method: values.payment_method,
          customer_name: values.customer_name,
          phone: values.phone,
          items: values.items,
          note: values.note,
          longlat: '0',
          customer_id: user.id,
        })
      )
      .then((res) => {
        console.log(res)
        if (res.status === 200 || res.status === 201) {
          Router.push(`/orders/${res.data.number}`)
        }
      })
      .catch((err) => console.log(err))
  }
  useEffect(() => {
    let productsForAPI = []
    productsInCart.forEach((el) => {
      const formatted = {
        image: el.image,
        price: parseInt(el.price?.price || 0),
        product_id: el.id,
        quantity: el.quantity,
      }
      productsForAPI.push(formatted)
    })
    setValues({ ...values, items: JSON.stringify(productsForAPI) })
  }, [])

  console.log(user)

  return (
    <>
      <div className={style.wrapper_form}>
        <p></p>
        <form onSubmit={handleSubmit}>
          <div className={style.form_section}>
            <p className={style.title}>{t('obtaining')}</p>
            <div className={style.flex}>
              <div className={style.radio_input}>
                <input
                  required
                  className={`${style.input} input`}
                  type='radio'
                  id='opt1'
                  defaultChecked
                  value='self'
                  onChange={(e) => handleChange(e, 'delivery_method')}
                  name='obtaining'
                />
                <label htmlFor='opt1'>
                  <div>
                    <p className={style.opt_title}>{t('pickup')}</p>
                    <p className={style.opt_img}>
                      <PickUp />
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
                  required
                  value='day'
                  onChange={(e) => handleChange(e, 'delivery_method')}
                />
                <label htmlFor='opt2'>
                  <div>
                    <p className={style.opt_title}>{t('delivery_one')}</p>
                    <p className={style.opt_img}>
                      <DefaultDelivery />
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
                  required
                  value='fast'
                  onChange={(e) => handleChange(e, 'delivery_method')}
                />
                <label htmlFor='opt3'>
                  <div>
                    <p className={style.opt_title}>{t('delivery_speed')}</p>
                    <p className={style.opt_img}>
                      <FastDelivery />
                    </p>
                  </div>
                </label>
              </div>
            </div>
          </div>
          <div className={style.form_section}>
            <input
              required
              className={`${style.input} input`}
              placeholder={t('full_name')}
              type='text'
              value={values.customer_name}
              onChange={(e) => handleChange(e, 'customer_name')}
            />
            <input
              required
              className={`${style.input} input`}
              placeholder={t('phone_num')}
              type='text'
              value={values.phone}
              onChange={(e) => handleChange(e, 'phone')}
            />
            {values.delivery_method !== 'self' && values.delivery_method ? (
              <>
                <input
                  required
                  className={`${style.input} input`}
                  placeholder={t('entrance')}
                  type='text'
                  value={values.entrance}
                  onChange={(e) => handleChange(e, 'entrance')}
                />
                <input
                  required
                  className={`${style.input} input`}
                  placeholder={t('floor')}
                  type='text'
                  value={values.floor}
                  onChange={(e) => handleChange(e, 'floor')}
                />
                <input
                  required
                  className={`${style.input} input`}
                  placeholder={t('num_house_flat')}
                  type='text'
                  value={values.num_house_or_flat}
                  onChange={(e) => handleChange(e, 'num_house_or_flat')}
                />
                <input
                  required
                  className={`${style.input} input`}
                  placeholder={t('intercom')}
                  type='text'
                  value={values.domofon}
                  onChange={(e) => handleChange(e, 'domofon')}
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
                    className={style.yandex_map149}
                  >
                    <FullscreenControl />
                    <GeolocationControl options={{ float: 'left' }} />
                    <ZoomControl options={{ float: 'right' }} />
                    <SearchControl options={{ float: 'left' }} />
                  </Map>
                </YMaps>
              </>
            ) : (
              ''
            )}
            <input
              className={`${style.input} input`}
              placeholder={t('comment_to_order')}
              type='text'
              value={values.note}
              onChange={(e) => handleChange(e, 'note')}
              required
            />
          </div>
          <div className={`${style.form_section}`}>
            <p className={style.title}>{t('payment_method')}</p>
            <div className={style.flex}>
              <div className={style.radio_input}>
                <input
                  required
                  className={`${style.input} input`}
                  type='radio'
                  defaultChecked
                  id='opt4'
                  name='payment'
                  value='cash'
                  onChange={(e) => handleChange(e, 'payment_method')}
                />
                <label htmlFor='opt4'>
                  <div>
                    <p className={style.opt_title}>{t('incash')}</p>
                    <p className={style.opt_img}>
                      <CashIcon />
                    </p>
                  </div>
                </label>
              </div>
              <div className={style.radio_input}>
                <input
                  className={`${style.input} input`}
                  type='radio'
                  id='opt6'
                  name='payment'
                  value='terminal'
                  onChange={(e) => handleChange(e, 'payment_method')}
                />
                <label htmlFor='opt6'>
                  <div>
                    <p className={style.opt_title}>{t('terminal')}</p>
                    <p className={style.opt_img}>
                      <CreditCardIcon />
                    </p>
                  </div>
                </label>
              </div>
              <div
                className={style.radio_input}
                onClick={() => Router.push('/checkout-installment')}
              >
                <input
                  className={`${style.input} input`}
                  type='radio'
                  id='opt9'
                  name='payment'
                  value='installment'
                  onChange={(e) => handleChange(e, 'payment_method')}
                />
                <label htmlFor='opt9'>
                  <div>
                    <p className={style.opt_title}>{t('installment')}</p>
                    <p className={style.opt_img}>
                      <CalendarIcon />
                    </p>
                  </div>
                </label>
              </div>
              <div className={style.radio_input}>
                <input
                  className={`${style.input} input`}
                  type='radio'
                  id='opt7'
                  name='payment'
                  value='click'
                  onChange={(e) => handleChange(e, 'payment_method')}
                />
                <label htmlFor='opt7'>
                  <div>
                    <p className={style.opt_title}>Click</p>
                    <p className={style.opt_img}>
                      <img src='/images/click.png' alt='Click' />
                    </p>
                  </div>
                </label>
              </div>
              <div className={style.radio_input}>
                <input
                  className={`${style.input} input`}
                  type='radio'
                  id='opt8'
                  name='payment'
                  value='payme'
                  onChange={(e) => handleChange(e, 'payment_method')}
                />
                <label htmlFor='opt8'>
                  <div>
                    <p className={style.opt_title}>Payme</p>
                    <p className={style.opt_img}>
                      <img src='/images/payme.png' alt='Payme' />
                    </p>
                  </div>
                </label>
              </div>
            </div>
          </div>
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
  )
}

export default CheckoutForm
