import React, { useState } from 'react'
import style from './checkout.module.scss'
import {
  CashIn,
  CreditCard,
  DefaultDelivery,
  PickUp,
  FastDelivery,
  TerminalIcon,
  InstallmentIcon,
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
                  defaultChecked
                  value='self'
                  onChange={(e) =>
                    setValues({ ...values, obtaining: e.target.value })
                  }
                  name='obtaining'
                />
                <label htmlFor='opt1'>
                  <div>
                    <p className={style.opt_title}>Самовывоз</p>
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
                  value='day'
                  onChange={(e) =>
                    setValues({ ...values, obtaining: e.target.value })
                  }
                />
                <label htmlFor='opt2'>
                  <div>
                    <p className={style.opt_title}>Доставка в течение дня</p>
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
                  value='fast'
                  onChange={(e) =>
                    setValues({ ...values, obtaining: e.target.value })
                  }
                />
                <label htmlFor='opt3'>
                  <div>
                    <p className={style.opt_title}>Быстрая доставка</p>
                    <p className={style.opt_img}>
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
                {/* <p className={style.title}>{t('shipping_address')}</p> */}
                <input
                  required
                  className={`${style.input} input`}
                  placeholder={t('full_name')}
                  type='text'
                />

                <input
                  required
                  className={`${style.input} input`}
                  placeholder={t('phone_num')}
                  type='text'
                />
                <input
                  required
                  className={`${style.input} input`}
                  placeholder={'Подъезд'}
                  type='text'
                />
                <input
                  required
                  className={`${style.input} input`}
                  placeholder={'Этаж'}
                  type='text'
                />
                <input
                  required
                  className={`${style.input} input`}
                  placeholder={'Номер квартиры / дома'}
                  type='text'
                />
                <input
                  required
                  className={`${style.input} input`}
                  placeholder={'Домофон'}
                  type='text'
                />
                <input
                  className={`${style.input} input`}
                  placeholder={'Комментарий к заказу(необязательный)'}
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
                {/* <p className={style.map_title}>Локации</p> */}
                {/* <div>My awesome application with maps!</div> */}
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
            <>
              <div className={style.form_section}>
                <input
                  required
                  className={`${style.input} input`}
                  placeholder={t('full_name')}
                  type='text'
                />
                <input
                  required
                  className={`${style.input} input`}
                  placeholder={t('phone_num')}
                  type='text'
                />
                <input
                  className={`${style.input} input`}
                  placeholder={'Комментарий к заказу(необязательный)'}
                  type='text'
                />
              </div>
            </>
          )}
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
                />
                <label htmlFor='opt4'>
                  <div>
                    <p className={style.opt_title}>{t('incash')}</p>
                    {/* <p className={style.opt_desc}>
                      <CashIn />
                    </p> */}
                    <p className={style.opt_img}>
                      <img
                        className={style.grey}
                        src='/images/cash.png'
                        alt='Cash'
                      />
                    </p>
                  </div>
                </label>
              </div>
              {/* <div className={style.radio_input}>
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
              </div> */}
              <div className={style.radio_input}>
                <input
                  className={`${style.input} input`}
                  type='radio'
                  id='opt6'
                  name='payment'
                />
                <label htmlFor='opt6'>
                  <div>
                    <p className={style.opt_title}>Терминал</p>
                    {/* <p className={style.opt_desc}>
                      <TerminalIcon />
                    </p> */}
                    <p className={style.opt_img}>
                      <img
                        className={style.grey}
                        src='/images/terminal.png'
                        alt='Terminal'
                      />
                    </p>
                  </div>
                </label>
              </div>
              <div className={style.radio_input}>
                <input
                  className={`${style.input} input`}
                  type='radio'
                  id='opt9'
                  name='payment'
                />
                <label htmlFor='opt9'>
                  <div>
                    <p className={style.opt_title}>Рассрочка</p>
                    <p className={style.opt_img}>
                      <img
                        className={style.grey}
                        src='/images/installment2.png'
                        alt='Installment'
                      />
                    </p>
                    {/* <p className={style.opt_desc}>
                      <InstallmentIcon />
                    </p> */}
                  </div>
                </label>
              </div>
              <div className={style.radio_input}>
                <input
                  className={`${style.input} input`}
                  type='radio'
                  id='opt7'
                  name='payment'
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
          {/* <div className={style.form_section}>
            <p className={style.title}>{t('additional')}</p>
            <input
              className={`${style.input} input`}
              placeholder={t('comment_to_order')}
              type='text'
            />
          </div> */}
          {/* <p>{t('confirm_txt')}</p> */}
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
