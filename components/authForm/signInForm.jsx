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
import { useStyles, PhoneNumberMask } from './textFieldStyle'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { setUser } from '../../redux/actions/authActions/authActions'

function SignInForm() {
  const { t } = useTranslation()
  const classes = useStyles()
  // const router = Router
  // const phoneNumRef = useRef(null)
  // const passwordRef = useRef(null)
  const [error, setError] = useState(false)
  const [errorPassword, setErrorPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)
  const [checked, setChecked] = useState(false)
  // const [isPhoneNumValid, setIsPhoneNumValid] = useState(false)
  const { register, handleSubmit, errors, watch, control } = useForm()
  // const [isPasswordValid, setIsPasswordValid] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [values, setValues] = useState({
    phone: '+998',
    password: '',
  })

  // const submitHandlerPhone = (e) => {
  //   e.preventDefault()
  //   checkPhoneNum()
  // }
  // const submitHandlerPassword = (e) => {
  //   e.preventDefault()
  //   checkPassword()
  // }
  // const checkPhoneNum = () => {
  //   setIsLoading(true)
  //   setTimeout(() => {
  //     setIsPhoneNumValid(true)
  //     setIsLoading(false)
  //     router.push('/verify-code?signin=true')
  //   }, 2000)
  //   if (isPhoneNumValid) {
  //     checkPassword()
  //   }
  // }
  // const checkPassword = () => {
  //   setIsLoading(true)
  //   setTimeout(() => {
  //     setIsPasswordValid(true)
  //     setIsLoading(false)
  //     router.push('/verify-code?signin=true')
  //   }, 2000)
  // }
  // const checkPhoneNumberLength = (string) => {
  //   let count = 0
  //   string.split('').forEach((el) => {
  //     if (el < 10) {
  //       count++
  //     }
  //   })
  //   const result = count >= 12 ? true : false
  //   console.log(result)
  //   return result
  // }

  // const signin = async () => {
  //   const response = axios.post()
  // }

  // useEffect(() => {
  //   if (phoneNumRef.current && passwordRef.current && isPhoneNumValid) {
  //     phoneNumRef.current.blur()
  //     passwordRef.current.focus()
  //   }
  // }, [isPhoneNumValid])

  const dispatch = useDispatch()

  const checkExists = async (data) => {
    console.log(data)
    setIsLoading(true)
    try {
      const response = await axios.get(
        `${process.env.LOGIN_API_URL}/exists?phone=%2B${data.phone.substring(
          1,
          data.phone.length
        )}`
      )
      setChecked(response.data.exists)
      if (!response.data.exists) {
        setError(true)
      } else {
        setError(false)
      }
      console.log(response)
    } catch (err) {
      console.log(err)
    } finally {
      setIsLoading(false)
    }
  }

  const signin = async (data) => {
    setIsLoading(true)
    setError(false)
    setErrorPassword(false)
    console.log(data)
    try {
      const response = await axios.post(`${process.env.LOGIN_API_URL}/login`, {
        ...data,
        phone: data.phone,
      })
      if (response.status === 200) {
        dispatch(setUser(response.data))
        Router.push('/account')
      }
      console.log(response)
    } catch (err) {
      console.log(err)
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
              helperText={
                error ? 'Пользователь не найден, зарегистрируйтесь!' : ''
              }
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
                helperText={errorPassword ? 'Неверный пароль' : ''}
              />
            </div>
          ) : (
            ''
          )}
          {/* {isPhoneNumValid ? (
            <div className={style.input_cont}>
              <TextField
                id='filled-basic'
                name='password'
                onChange={(e) =>
                  setValues({ ...values, password: e.target.value })
                }
                variant='filled'
                required
                type='password'
                fullWidth
                className={classes.root}
                label={t('password')}
              />
            </div>
          ) : (
            ''
          )} */}
          <Button fullWidth type='submit'>
            {isLoading ? (
              <CircularProgress className={style.progress} color='inherit' />
            ) : (
              t('signin')
            )}
          </Button>
        </form>
        {/* <form onSubmit={submitHandlerPassword}>
          <TextField
            id='filled-basic'
            name='password'
            variant='filled'
            fullWidth
            className={classes.root}
            label={t('password')}
          /> */}
        {/* {isPhoneNumValid ? (
            <div className={style.input_cont}>
              <input
                className='input'
                ref={composeRefs(passwordRef, register)}
                onChange={(e) =>
                  setValues({ ...values, password: e.target.value })
                }
                type='text'
                name='password'
                placeholder={t('password')}
              />
              {!isPasswordValid ? (
                values.password ? (
                  <button className={style.icon} type='submit'>
                    {isLoading ? (
                      <CircularProgress className={style.progress} />
                    ) : (
                      <ArrowForwardIcon />
                    )}
                  </button>
                ) : (
                  ''
                )
              ) : (
                ''
              )}
            </div>
          ) : (
            ''
          )} */}
        {/* <Button fullWidth type='submit' className={style.submit}>
            Sign In
          </Button>
        </form> */}

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
