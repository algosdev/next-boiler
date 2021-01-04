import React, { useState, useEffect, useRef } from 'react'
import {
  Typography,
  Checkbox,
  CircularProgress,
  Button,
  makeStyles,
} from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import style from './authForm.module.scss'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import { Link } from '../../i18n'
import { Router } from '../../i18n'
import { useForm, Controller } from 'react-hook-form'
import composeRefs from '@seznam/compose-react-refs'
import InputMask from 'react-input-mask'
import { useTranslation } from '../../i18n'
const useStyles = makeStyles(() => ({
  root: {
    background: 'transparent',
    '& .MuiInputLabel-root': {
      background: 'transparent',
    },
    '& .MuiFilledInput-underline:hover:before, & .MuiFilledInput-underline:hover:after, & .MuiFilledInput-underline:hover:after,  & .MuiFilledInput-underline:after,  & .MuiFilledInput-underline:before': {
      display: 'none',
    },
    '& .MuiFilledInput-root': {
      border: '1px solid var(--border)',
    },
    '& .MuiFormLabel-root.Mui-focused': {
      color: 'var(--primary-color)',
    },

    '& .MuiFilledInput-root.Mui-focused': {
      background: '#fff',
      border: '1px solid var(--primary-color)',
    },
  },
}))
function SignInForm() {
  const { t } = useTranslation()
  const classes = useStyles()
  const router = Router
  const phoneNumRef = useRef(null)
  const passwordRef = useRef(null)
  const [rememberMe, setRememberMe] = useState(false)
  const [isPhoneNumValid, setIsPhoneNumValid] = useState(false)
  const { register, handleSubmit, errors, watch, control } = useForm()
  const [isPasswordValid, setIsPasswordValid] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [values, setValues] = useState({
    phoneNum: '',
    password: '',
  })
  const submitHandlerPhone = (e) => {
    e.preventDefault()
    checkPhoneNum()
  }
  const submitHandlerPassword = (e) => {
    e.preventDefault()
    checkPassword()
  }
  const checkPhoneNum = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsPhoneNumValid(true)
      setIsLoading(false)
    }, 2000)
  }
  const checkPassword = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsPasswordValid(true)
      setIsLoading(false)
      router.push('/')
    }, 2000)
  }
  const checkPhoneNumberLength = (string) => {
    let count = 0
    string.split('').forEach((el) => {
      if (el < 10) {
        count++
      }
    })
    const result = count >= 12 ? true : false
    console.log(result)
    return result
  }
  useEffect(() => {
    if (phoneNumRef.current && passwordRef.current && isPhoneNumValid) {
      phoneNumRef.current.blur()
      passwordRef.current.focus()
    }
  }, [isPhoneNumValid])

  return (
    <div className={style.wrapper}>
      <Typography variant='h3'>{t('signin_title')}</Typography>
      <div className={style.inner}>
        <form
          onSubmit={submitHandlerPhone}
          className={classes.root}
          noValidate
          autoComplete='off'
        >
          <div className={style.input_cont}>
            <TextField
              id='filled-basic'
              name='phoneNum'
              variant='filled'
              fullWidth
              className={classes.root}
              label={t('phone_num')}
            />
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
          </div>
        </form>
        <form onSubmit={submitHandlerPassword}>
          <TextField
            id='filled-basic'
            name='password'
            variant='filled'
            fullWidth
            className={classes.root}
            label={t('password')}
          />
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
          <Button fullWidth type='submit' className={style.submit}>
            Sign In
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
        </div>
      </div>
    </div>
  )
}

export default SignInForm
