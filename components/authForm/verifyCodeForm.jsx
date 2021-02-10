import React, { useState } from 'react'
import style from './authForm.module.scss'
import {
  Typography,
  Button,
  TextField,
  CircularProgress,
} from '@material-ui/core'
import { Router } from '../../i18n'
import { useTranslation } from '../../i18n'
import { useForm } from 'react-hook-form'
import { useStyles } from './textFieldStyle'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { setUser } from '../../redux/actions/authActions/authActions'
function VerifyCodeForm({ phone, userInfo }) {
  const classes = useStyles()
  const { t } = useTranslation()
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const { register, handleSubmit } = useForm()
  const dispatch = useDispatch()

  const sendCode = async (data) => {
    setError(false)
    try {
      setLoading(true)
      const response = await axios.post(
        `${process.env.LOGIN_API_URL}/verify-phone`,
        {
          ...data,
          phone: phone,
        },
        {
          headers: {
            Authorization: userInfo.access_token,
          },
        }
      )
      if (response.status === 200) {
        console.log(response)
        dispatch(setUser(userInfo))
        Router.push('/account')
      } else {
        setError(true)
      }
    } catch (err) {
      if (err.response.status === 400) {
        setError(true)
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className={style.wrapper}>
      <Typography variant='h3'>
        {t('enter_otp')} {phone || ''}
      </Typography>
      <div className={style.inner}>
        <form onSubmit={handleSubmit(sendCode)}>
          <div className={style.input_cont}>
            <TextField
              id='filled-basic'
              name='code'
              inputRef={register}
              variant='filled'
              fullWidth
              type='number'
              className={classes.root}
              error={error}
              helperText={error ? t('otp-error') : ''}
              required
              label={t('otp')}
            />
          </div>
          <div className={style.input_cont}>
            <Button fullWidth type='submit'>
              {loading ? (
                <CircularProgress className={style.progress} color='inherit' />
              ) : (
                t('continue')
              )}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default VerifyCodeForm
