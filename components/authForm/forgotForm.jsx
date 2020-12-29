import React, { useState } from 'react'
import style from './authForm.module.scss'
import { Typography } from '@material-ui/core'
import { Router } from '../../i18n'
import { useTranslation } from '../../i18n'
function forgotForm() {
  const { t } = useTranslation()
  const [values, setValues] = useState({
    phoneNum: '',
  })
  const submitHandler = (e) => {
    e.preventDefault()
    Router.push('/verify-code')
  }
  return (
    <div className={style.wrapper}>
      <Typography variant='h3'>{t('forgot_title')}</Typography>
      <div className={style.inner}>
        <form onSubmit={submitHandler}>
          <div className={style.input_cont}>
            <input
              className={`input`}
              value={values.phoneNum}
              onChange={(e) =>
                setValues({ ...values, phoneNum: e.target.value })
              }
              type='tel'
              placeholder={t('phone_num')}
            />
          </div>
          <div className={style.input_cont}>
            <button className='input' type='submit'>
              {t('continue')}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default forgotForm
