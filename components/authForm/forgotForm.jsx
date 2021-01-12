import React, { useState } from 'react'
import style from './authForm.module.scss'
import { Typography, Button, TextField } from '@material-ui/core'
import { Router } from '../../i18n'
import { useTranslation } from '../../i18n'
import { useStyles } from './textFieldStyle'
function forgotForm() {
  const classes = useStyles()
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
      <Typography variant='h2'>{t('forgot_title')}</Typography>
      <div className={style.inner}>
        <form onSubmit={submitHandler}>
          <div className={style.input_cont}>
            <TextField
              id='filled-basic'
              name='phoneNum'
              variant='filled'
              fullWidth
              type='tel'
              className={classes.root}
              onChange={(e) =>
                setValues({ ...values, phoneNum: e.target.value })
              }
              required
              label={t('phone_num')}
            />
            {/* <input
              className={`input`}
              value={values.phoneNum}
              onChange={(e) =>
                setValues({ ...values, phoneNum: e.target.value })
              }
              type='tel'
              placeholder={t('phone_num')}
            /> */}
          </div>
          <div className={style.input_cont}>
            <Button fullWidth type='submit'>
              {t('continue')}
            </Button>
            {/* <button className='input' type='submit'>
              {t('continue')}
            </button> */}
          </div>
        </form>
      </div>
    </div>
  )
}

export default forgotForm
