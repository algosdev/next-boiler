import React, { useState, useEffect, useRef } from 'react'
import {
  Typography,
  Checkbox,
  CircularProgress,
  Button,
  TextField,
} from '@material-ui/core'
import style from './authForm.module.scss'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import { Link } from '../../i18n'
import { Router } from '../../i18n'
import { useForm, Controller } from 'react-hook-form'
import composeRefs from '@seznam/compose-react-refs'
import InputMask from 'react-input-mask'
import { useTranslation } from '../../i18n'
import { useStyles, PhoneNumberMask } from './textFieldStyle'
import axios from 'axios'
import { setUser } from '../../redux/actions/authActions/authActions'
import { useDispatch } from 'react-redux'
import VerifyCodeForm from './verifyCodeForm'

function SignUpForm() {
  const { t } = useTranslation()
  const classes = useStyles()
  const dispatch = useDispatch()
  const router = Router
  // const phoneNumRef = useRef(null)
  // const passwordRef = useRef(null)
  const [error, setError] = useState(false)
  // const [isPhoneNumValid, setIsPhoneNumValid] = useState(false)
  const { register, handleSubmit } = useForm()
  const [checked, isChecked] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [values, setValues] = useState({
    pre_password: '',
    password: '',
    phone: '+998',
  })
  const [phone, setPhone] = useState('')
  const [customer, setCustomer] = useState('')
  const checkPassword = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
    console.log(values)
  }

  useEffect(() => {
    prePasswordCheck()
  }, [values])

  const prePasswordCheck = () => {
    if (values.pre_password) {
      if (values.pre_password === values.password) {
        setError(false)
      } else {
        setError(true)
      }
    }
  }

  // useEffect(() => {
  //   if (phoneNumRef.current && passwordRef.current && isPhoneNumValid) {
  //     phoneNumRef.current.blur()
  //     passwordRef.current.focus()
  //   }
  // }, [isPhoneNumValid])

  const createUser = async (data) => {
    try {
      setIsLoading(true)
      const response = await axios.post(
        `${process.env.LOGIN_API_URL}/register`,
        {
          ...data,
          phone: data.phone,
        }
      )
      if (response.status === 200) {
        setCustomer(response.data)
        setPhone(data.phone)
        isChecked(true)
        //Router.push(`/verify-code?phone=${data.phone}`)
      }
      console.log(response)
    } catch (err) {
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  // const saveUser = async (userInfo) => {
  //   dispatch(setUser(userInfo))
  // }

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

  return !checked ? (
    <div className={style.wrapper}>
      <Typography variant='h2'>{t('signup_title')}</Typography>
      <div className={style.inner}>
        <form onSubmit={handleSubmit(createUser)} autoComplete='off'>
          <div className={style.input_cont}>
            <TextField
              value={values.phone}
              variant='filled'
              name='phone'
              fullWidth
              inputRef={register}
              type='tel'
              className={classes.root}
              onChange={handleChange}
              id='formatted-text-mask-input'
              required
              label={t('phone_num')}
            />
          </div>
          <div className={style.input_cont}>
            <TextField
              id='filled-basic'
              name='name'
              variant='filled'
              fullWidth
              type='text'
              className={classes.root}
              required
              label={t('name')}
              inputRef={register}
            />
          </div>
          <div className={style.input_cont}>
            <TextField
              id='filled-basic'
              name='lastname'
              variant='filled'
              fullWidth
              type='text'
              className={classes.root}
              required
              label={t('surname')}
              inputRef={register}
            />
          </div>
          <div className={style.input_cont}>
            <TextField
              id='filled-basic'
              name='password'
              variant='filled'
              fullWidth
              type='password'
              className={classes.root}
              required
              onChange={checkPassword}
              label={t('password')}
              inputRef={register}
            />
          </div>
          <div className={style.input_cont}>
            <TextField
              error={error}
              helperText={error ? 'Пароль не совпадает' : ''}
              id='filled-basic'
              name='pre_password'
              variant='filled'
              fullWidth
              type='password'
              className={classes.root}
              inputRef={register}
              onChange={checkPassword}
              required
              label={t('confirm_password')}
            />
          </div>
          {/* <Controller
            as={TextField}
            name={'phoneNum'}
            control={control}
            defaultValue=''
            label={t('phone_num')}
            fullWidth={true}
            InputLabelProps={{
              required: true,
              variant: 'filled',
            }}
          /> */}
          {/* <Controller
              control={control}
              name='test'
              render={({ onChange, onBlur, value }) => (
                <InputMask
                  mask='+99999-999-99-99'
                  disabled={false}
                  maskChar={' '}
                  defaultValue='+998'
                  name='phoneNum'
                  type='tel'
                >
                  {(inputProps) => (
                    <TextField
                      {...inputProps}
                      disableunderline
                      id='filled-basic'
                      name='phoneNum'
                      ref={register({
                        validate: (value) => checkPhoneNumberLength(value),
                        setValueAs: (value) =>
                          value.trim().replace(/_/g, '').replace(/\s/g, ''),
                      })}
                      label={t('phone_num')}
                      variant='filled'
                    />
                  )}
                </InputMask>
              )}
            /> */}

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
          <Button disabled={error} fullWidth type='submit'>
            {isLoading ? (
              <CircularProgress className={style.progress} color='inherit' />
            ) : (
              t('signup')
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

        {/* <div className={style.checkbox_cont}>
          <Checkbox
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
          />
          <span>{t('remember_me')}</span>
        </div>

        <div className={style.options}>
          <div>
            <Link href='/forgot'>
              <a>{t('forgot_password')}</a>
            </Link>
          </div>
          <div>
            <Link href='/signup'>
              <a>{t('create_yours')}</a>
            </Link>
          </div>
        </div> */}
      </div>
    </div>
  ) : (
    <VerifyCodeForm phone={phone} userInfo={customer} />
  )
}

export default SignUpForm
