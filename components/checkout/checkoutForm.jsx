import React, { useState } from 'react'
import style from './checkout.module.scss'
import { CashIn, CreditCard } from '../svg'
import { useTranslation } from '../../i18n'
function CheckoutForm() {
  const { t } = useTranslation()

  return (
    <>
      <div className={style.wrapper_form}>
        <p></p>
        <form>
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
          <div className={style.form_section}>
            <p className={style.title}>{t('obtaining')}</p>
            <div className={style.flex}>
              <div className={style.radio_input}>
                <input
                  required
                  className={`${style.input} input`}
                  type='radio'
                  id='opt1'
                  name='obtaining'
                />
                <label htmlFor='opt1'>
                  <div>
                    <p className={style.opt_title}>{t('pickup')}</p>
                    <p className={style.opt_desc}>{t('pickup_txt')}</p>
                  </div>
                </label>
              </div>
              <div className={style.radio_input}>
                <input
                  required
                  className={`${style.input} input`}
                  type='radio'
                  id='opt2'
                  name='obtaining'
                />
                <label htmlFor='opt2'>
                  <div>
                    <p className={style.opt_title}>{t('courier')}</p>
                    <p className={style.opt_desc}>{t('courier_txt')}</p>
                  </div>
                </label>
              </div>
            </div>
          </div>
          <div className={style.form_section}>
            <p className={style.title}>{t('payment_method')}</p>
            <div className={style.flex}>
              <div className={style.radio_input}>
                <input
                  required
                  className={`${style.input} input`}
                  type='radio'
                  id='opt3'
                  name='payment'
                />
                <label htmlFor='opt3'>
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
                  required
                  className={`${style.input} input`}
                  type='radio'
                  id='opt4'
                  name='payment'
                />
                <label htmlFor='opt4'>
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
