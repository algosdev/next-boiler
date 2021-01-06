import React, { useState } from 'react'
import style from './checkout.module.scss'
import {
  CashIn,
  CreditCard,
  DefaultDelivery,
  PickUp,
  FastDelivery,
} from '../svg'
import { useTranslation, i18n } from '../../i18n'
import {
  YMaps,
  Map,
  FullscreenControl,
  SearchControl,
  GeolocationControl,
  ZoomControl,
} from 'react-yandex-maps'
function CheckoutForm() {
  const { t } = useTranslation()
  const [values, setValues] = useState({
    address: '',
    obtaining: '',
    payment_method: '',
  })
  console.log(values)
  return (
    <>
      <div className={style.wrapper_form}>
        <p></p>
        <form>
          <div className={style.form_section}>
            <p className={style.title}>{t('obtaining')}</p>
            <div className={style.flex}>
              <div className={style.radio_input}>
                <input
                  required
                  className={`${style.input} input`}
                  type='radio'
                  id='opt1'
                  value='self'
                  onChange={(e) =>
                    setValues({ ...values, obtaining: e.target.value })
                  }
                  name='obtaining'
                />
                <label htmlFor='opt1'>
                  <div>
                    <p className={style.opt_title}>Самовывоз</p>
                    <p className={style.opt_desc}>
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
                  value='day'
                  onChange={(e) =>
                    setValues({ ...values, obtaining: e.target.value })
                  }
                />
                <label htmlFor='opt2'>
                  <div>
                    <p className={style.opt_title}>Доставка в течение дня</p>
                    <p className={style.opt_desc}>
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
                  value='fast'
                  onChange={(e) =>
                    setValues({ ...values, obtaining: e.target.value })
                  }
                />
                <label htmlFor='opt3'>
                  <div>
                    <p className={style.opt_title}>Быстрая доставка</p>
                    <p className={style.opt_desc}>
                      <FastDelivery />
                    </p>
                  </div>
                </label>
              </div>
            </div>
          </div>
          {values.obtaining !== 'self' && values.obtaining ? (
            <>
              <div className={style.form_section}>
                <p className={style.title}>{t('shipping_address')}</p>
                <input
                  required
                  className={`${style.input} input`}
                  placeholder={t('full_name')}
                  type='text'
                />
                <input
                  required
                  className={`${style.input} input`}
                  placeholder={t('shipping_address')}
                  type='text'
                />
                <input
                  required
                  className={`${style.input} input`}
                  placeholder={t('phone_num')}
                  type='text'
                />
              </div>
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
                <div>My awesome application with maps!</div>
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
            </>
          ) : (
            ''
          )}
          <div className={`${style.form_section} ${style.limit}`}>
            <p className={style.title}>{t('payment_method')}</p>
            <div className={style.flex}>
              <div className={style.radio_input}>
                <input
                  required
                  className={`${style.input} input`}
                  type='radio'
                  id='opt4'
                  name='payment'
                />
                <label htmlFor='opt4'>
                  <div>
                    <p className={style.opt_title}>{t('incash')}</p>
                    <p className={style.opt_desc}>
                      <CashIn />
                    </p>
                  </div>
                </label>
              </div>
              <div className={style.radio_input}>
                <input
                  className={`${style.input} input`}
                  type='radio'
                  id='opt5'
                  name='payment'
                />
                <label htmlFor='opt5'>
                  <div>
                    <p className={style.opt_title}>{t('credit_card')}</p>
                    <p className={style.opt_desc}>
                      <CreditCard />
                    </p>
                  </div>
                </label>
              </div>
            </div>
          </div>
          <div className={style.form_section}>
            <p className={style.title}>{t('additional')}</p>
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
  )
}

export default CheckoutForm
