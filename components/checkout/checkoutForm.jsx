import React, { useState } from 'react'
import style from './checkout.module.scss'
import { CashIn, CreditCard } from '../svg'
function CheckoutForm() {
  return (
    <>
      <div className={style.wrapper_form}>
        <p></p>
        <form>
          <div className={style.form_section}>
            <p className={style.title}>Address</p>
            <input
              required
              className={`${style.input} input`}
              placeholder='Fullname'
              type='text'
            />
            <input
              required
              className={`${style.input} input`}
              placeholder='Address'
              type='text'
            />
            <input
              required
              className={`${style.input} input`}
              placeholder='Phone number'
              type='text'
            />
          </div>
          <div className={style.form_section}>
            <p className={style.title}>Method of obtaining</p>
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
                    <p className={style.opt_title}>Pickup</p>
                    <p className={style.opt_desc}>
                      Hands-free and when convenient
                    </p>
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
                    <p className={style.opt_title}>Courier</p>
                    <p className={style.opt_desc}>
                      On a convenient day and time interval for you
                    </p>
                  </div>
                </label>
              </div>
            </div>
          </div>
          <div className={style.form_section}>
            <p className={style.title}>Payment method</p>
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
                    <p className={style.opt_title}>In cash</p>
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
                    <p className={style.opt_title}>Credit card</p>
                    <p className={style.opt_desc}>
                      <CreditCard />
                    </p>
                  </div>
                </label>
              </div>
            </div>
          </div>
          <div className={style.form_section}>
            <p className={style.title}>Additional</p>
            <input
              className={`${style.input} input`}
              placeholder='Commment to order'
              type='text'
            />
          </div>
          <p>
            By clicking "Confirm order", you agree to the terms of use of the
            MyShop marketplace. Detailed delivery terms can be found on the
            delivery page
          </p>
          <div className={style.form_section}>
            <button
              className={`${style.submit} input`}
              placeholder='Commment to order'
              type='submit'
            >
              Confirm order
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default CheckoutForm
