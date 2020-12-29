import React, { useState, useEffect, useRef } from 'react'
import { Typography, Checkbox, CircularProgress } from '@material-ui/core'
import style from './authForm.module.scss'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import { Link } from '../../i18n'
import { Router } from '../../i18n'
import { useForm } from 'react-hook-form'
import composeRefs from '@seznam/compose-react-refs'
import InputMask from 'react-input-mask'
import { useTranslation } from '../../i18n'
function SignInForm() {
  const { t } = useTranslation()
  const router = Router
  const phoneNumRef = useRef(null)
  const passwordRef = useRef(null)
  const [rememberMe, setRememberMe] = useState(false)
  const [isPhoneNumValid, setIsPhoneNumValid] = useState(false)
  const { register, handleSubmit, errors, watch } = useForm()
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
    if (count >= 12) {
      setIsPhoneNumValid(true)
    } else {
      setIsPhoneNumValid(false)
    }
    return count >= 12 ? true : false
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
        <form onSubmit={submitHandlerPhone}>
          <div className={style.input_cont}>
            <InputMask
              mask='+99999-999-99-99'
              disabled={false}
              maskChar=' '
              type='tel'
              onChange={(e) =>
                setValues({ ...values, phoneNum: e.target.value })
              }
            >
              {() => (
                <input
                  className='input'
                  name='phoneNum'
                  placeholder={t('phone_num')}
                  ref={register({
                    validate: (value) => checkPhoneNumberLength(value),
                    setValueAs: (value) =>
                      value.trim().replace(/_/g, '').replace(/\s/g, ''),
                  })}
                />
              )}
            </InputMask>
            {!isPhoneNumValid ? (
              values.phoneNum ? (
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
        </form>
        <form onSubmit={submitHandlerPassword}>
          {isPhoneNumValid ? (
            <div className={style.input_cont}>
              <input
                className='input'
                // value={values.password}
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
          )}
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
