import React, { useState, useRef, useEffect } from 'react'
import { Typography } from '@material-ui/core'
import style from './authForm.module.scss'
import VisibilityIcon from '@material-ui/icons/Visibility'
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff'
import { Router } from '../../i18n'
import composeRefs from '@seznam/compose-react-refs'
import InputMask from 'react-input-mask'
import { useForm } from 'react-hook-form'
import { useTranslation } from '../../i18n'
function SignUpForm() {
  const { t } = useTranslation()
  const [error, setError] = useState(false)
  const passwordRef = useRef(null)
  const passwordConfirmRef = useRef(null)
  const [showPassword, setShowPassword] = useState(false)
  const { register, handleSubmit, errors, watch } = useForm()
  const password = useRef({})
  password.current = watch('password', '')
  const submitHandler = (data) => {
    console.log(data)
    Router.push('/verify-code')
  }

  useEffect(() => {
    if (passwordRef.current && passwordConfirmRef.current) {
      if (showPassword) {
        passwordRef.current.type = 'text'
        passwordConfirmRef.current.type = 'text'
      } else {
        passwordRef.current.type = 'password'
        passwordConfirmRef.current.type = 'password'
      }
    }
  }, [showPassword])

  const checkPhoneNumber = (string) => {
    let count = 0
    string.split('').forEach((el) => {
      if (el < 10) {
        count++
      }
    })
    return count >= 12 ? true : false
  }
  return (
    <div className={style.wrapper}>
      <Typography variant='h3'>{t('signup_title')}</Typography>
      <div className={style.inner}>
        <form onSubmit={handleSubmit(submitHandler)}>
          <div className={style.fullName}>
            <div className={style.input_cont}>
              <input
                className={`input`}
                required
                ref={register}
                name='name'
                type='text'
                placeholder={t('name')}
              />
            </div>
            <div className={style.input_cont}>
              <input
                className={`input`}
                name='surname'
                type='text'
                ref={register}
                placeholder={t('surname')}
                required
              />
            </div>
          </div>
          <div className={style.input_cont}>
            <InputMask
              mask='+99999-999-99-99'
              disabled={false}
              maskChar={' '}
              defaultValue='+998'
              type='tel'
            >
              {() => (
                <input
                  className='input'
                  name='phoneNum'
                  placeholder={t('phone_num')}
                  ref={register({
                    validate: (value) => checkPhoneNumber(value),
                    setValueAs: (value) =>
                      value.trim().replace(/_/g, '').replace(/\s/g, ''),
                  })}
                />
              )}
            </InputMask>
          </div>
          <span className={style.errorTxt}>
            {errors.phoneNum && t('phone_invalid')}
          </span>
          <div className={style.input_cont}>
            <input
              className={`${error ? style.error : ''} input`}
              required
              onFocus={() => setError(false)}
              name='password'
              ref={composeRefs(
                register({
                  required: true,
                }),
                passwordRef
              )}
              type='password'
              placeholder={t('password')}
            />
            <div
              className={style.eye}
              onClick={() => setShowPassword(!showPassword)}
            >
              {!showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
            </div>
          </div>
          <div className={style.input_cont}>
            <input
              className={`${error ? style.error : ''} input`}
              required
              name='password_repeat'
              onFocus={() => setError(false)}
              ref={composeRefs(
                register({
                  validate: (value) =>
                    value === password.current || t('passwords_dont_match'),
                }),
                passwordConfirmRef
              )}
              type='password'
              placeholder={t('confirm_password')}
            />

            <div
              className={style.eye}
              onClick={() => setShowPassword(!showPassword)}
            >
              {!showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
            </div>
          </div>
          <span className={style.errorTxt}>
            {errors.password_repeat && errors.password_repeat.message}
          </span>
          <div className={style.input_cont}>
            <button className='input' type='submit'>
              {t('continue')}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUpForm
