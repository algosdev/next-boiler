import React, { useState } from 'react'
import style from './authForm.module.scss'
import { Typography, Button, TextField } from '@material-ui/core'
import { Router } from '../../i18n'
import { useRouter } from 'next/router'
import { useTranslation } from '../../i18n'
import { useStyles } from './textFieldStyle'
function VerifyCodeForm() {
  const router = useRouter()
  const classes = useStyles()
  const { t } = useTranslation()
  const [values, setValues] = useState({
    code: '',
  })
  const submitHandler = (e) => {
    e.preventDefault()
    if (router.query.signup === 'true') {
      Router.push('/account?signup=true')
    } else {
      Router.push('/')
    }
  }
  return (
    <div className={style.wrapper}>
      <Typography variant='h3'>
        {t('enter_otp')} {' +99897777777'}
      </Typography>
      <div className={style.inner}>
        <form onSubmit={submitHandler}>
          <div className={style.input_cont}>
            {/* <input
              className={`input`}
              value={values.code}
              onChange={(e) => setValues({ ...values, code: e.target.value })}
              type='num'
              placeholder='OTP code'
              required
            /> */}
            <TextField
              id='filled-basic'
              name='otp'
              variant='filled'
              fullWidth
              type='number'
              className={classes.root}
              // onChange={(e) =>
              //   setValues({ ...values, phoneNum: e.target.value })
              // }
              required
              label={t('otp')}
            />
          </div>
          <div className={style.input_cont}>
            <Button fullWidth type='submit'>
              {t('continue')}
            </Button>
            {/* <button className='input' type='submit'>
              Submit
            </button> */}
          </div>
        </form>
      </div>
    </div>
  )
}

export default VerifyCodeForm
