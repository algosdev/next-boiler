import React, { useState } from 'react'
import style from './authForm.module.scss'
import { Typography, TextField, Button } from '@material-ui/core'
import { useTranslation } from '../../i18n'
import { useStyles } from './textFieldStyle'
function NewPasswordForm() {
  const classes = useStyles()
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
      <Typography variant='h2'>{t('enter_new_password')}</Typography>
      <div className={style.inner}>
        <form onSubmit={submitHandler}>
          <div className={style.input_cont}>
            <TextField
              id='filled-basic'
              name='otp'
              variant='filled'
              fullWidth
              onChange={(e) =>
                setValues({ ...values, password: e.target.value })
              }
              type='num'
              required
              label={t('password')}
            />
            {/* <input
              className={`input`}
              value={values.password}
              onChange={(e) =>
                setValues({ ...values, password: e.target.value })
              }
              type='num'
              placeholder={t('password')}
            /> */}
          </div>
          <div className={style.input_cont}>
            <TextField
              id='filled-basic'
              name='otp'
              variant='filled'
              fullWidth
              value={values.passwordConfirm}
              onChange={(e) =>
                setValues({ ...values, passwordConfirm: e.target.value })
              }
              type='num'
              required
              label={t('confirm_password')}
            />
            {/* <input
              className={`input`}
              value={values.passwordConfirm}
              onChange={(e) =>
                setValues({ ...values, passwordConfirm: e.target.value })
              }
              type='num'
              placeholder={t('confirm_password')}
            /> */}
          </div>
          <div className={style.input_cont}>
            <Button fullWidth type='submit'>
              {t('change')}
            </Button>
            {/* <button className='input' type='submit'>
              {t('change')}
            </button> */}
          </div>
        </form>
      </div>
    </div>
  )
}

export default NewPasswordForm
