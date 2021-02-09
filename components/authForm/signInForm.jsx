import React, { useState } from 'react'
import {
  Typography,
  Checkbox,
  CircularProgress,
  Button,
  TextField,
} from '@material-ui/core'
import style from './authForm.module.scss'
import { Link } from '../../i18n'
import { Router } from '../../i18n'
import { useForm } from 'react-hook-form'
import { useTranslation } from '../../i18n'
import { useStyles } from './textFieldStyle'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { setUser } from '../../redux/actions/authActions/authActions'

function SignInForm() {
  const { t } = useTranslation()
  const classes = useStyles()
  const [error, setError] = useState(false)
  const [errorPassword, setErrorPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)
  const [checked, setChecked] = useState(false)
  const { register, handleSubmit, errors, watch, control } = useForm()
  const [isLoading, setIsLoading] = useState(false)
  const [values, setValues] = useState({
    phone: '+998',
    password: '',
  })

  const dispatch = useDispatch()

  const checkExists = async (data) => {
    if (data.phone.length < 13) {
      setError(t('phone-number-error'))
      return
    }

    try {
      setIsLoading(true)
      setError('')
      const response = await axios.get(
        `${process.env.LOGIN_API_URL}/exists?phone=%2B${data.phone.substring(
          1,
          data.phone.length
        )}`
      )
      setChecked(response.data.exists)
      if (!response.data.exists) {
        setError(t('no-user-error'))
      } else {
        setError('')
      }
    } catch (err) {
      console.log(err)
    } finally {
      setIsLoading(false)
    }
  }

  const signin = async (data) => {
    setIsLoading(true)
    setError('')
    setErrorPassword(false)
    try {
      const response = await axios.post(`${process.env.LOGIN_API_URL}/login`, {
        ...data,
        phone: data.phone,
      })
      if (response.status === 200) {
        dispatch(setUser(response.data))
        Router.push('/account')
      }
    } catch (err) {
      setErrorPassword(true)
    } finally {
      setIsLoading(false)
    }
  }

  const phoneRegEx = /^([0-9+]+)$/

  const handleChange = (event) => {
    if (event.target.name === 'phone' || event.target.name === 'code') {
      if (
        event.target.value.length === 0 ||
        (event.target.value.length <= 13 && phoneRegEx.test(event.target.value))
      ) {
        setValues({ ...values, [event.target.name]: event.target.value })
      }
    } else setValues({ ...values, [event.target.name]: event.target.value })
  }

  return (
    <div className={style.wrapper}>
      <Typography variant='h2'>{t('signin')}</Typography>
      <div className={style.inner}>
        <form
          onSubmit={handleSubmit(checked ? signin : checkExists)}
          autoComplete='off'
        >
          <div className={style.input_cont}>
            <TextField
              value={values.phone}
              variant='filled'
              fullWidth
              className={classes.root}
              name='phone'
              error={error}
              helperText={error ? error : ''}
              type='tel'
              id='formatted-text-mask-input'
              onChange={handleChange}
              required
              inputRef={register}
              label={t('phone_num')}
            />
          </div>
          {checked ? (
            <div className={style.input_cont}>
              <TextField
                id='filled-basic'
                name='password'
                variant='filled'
                fullWidth
                type='password'
                className={classes.root}
                required
                label={t('password')}
                inputRef={register}
                error={errorPassword}
                helperText={errorPassword ? t('check-password-error') : ''}
              />
            </div>
          ) : (
            ''
          )}
          <Button fullWidth type='submit'>
            {isLoading ? (
              <CircularProgress className={style.progress} color='inherit' />
            ) : (
              t('signin')
            )}
          </Button>
        </form>

        <div className={style.checkbox_cont}>
          <Checkbox
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
          />
          <span>{t('remember_me')}</span>
        </div>

        <div className={style.options}>
          {/* <div>
            <Link href='/forgot'>
              <a>{t('forgot_password')}</a>
            </Link>
          </div> */}
          <div>
            <Link href='/signup'>
              <a>{t('create_yours')}</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignInForm
