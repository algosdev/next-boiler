import React, { useState } from 'react'
import style from './authForm.module.scss'
import { Typography } from '@material-ui/core'
import { useTranslation } from '../../i18n'
function NewPasswordForm() {
  const { t } = useTranslation()
  const [values, setValues] = useState({
    password: '',
    passwordConfirm: '',
  })
  const submitHandler = (e) => {
    e.preventDefault()
  }
  return (
    <div className={style.wrapper}>
      <Typography variant='h3'>{t('enter_new_password')}</Typography>
      <div className={style.inner}>
        <form onSubmit={submitHandler}>
          <div className={style.input_cont}>
            <input
              className={`input`}
              value={values.password}
              onChange={(e) =>
                setValues({ ...values, password: e.target.value })
              }
              type='num'
              placeholder={t('password')}
            />
          </div>
          <div className={style.input_cont}>
            <input
              className={`input`}
              value={values.passwordConfirm}
              onChange={(e) =>
                setValues({ ...values, passwordConfirm: e.target.value })
              }
              type='num'
              placeholder={t('confirm_password')}
            />
          </div>
          <div className={style.input_cont}>
            <button className='input' type='submit'>
              {t('change')}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default NewPasswordForm
