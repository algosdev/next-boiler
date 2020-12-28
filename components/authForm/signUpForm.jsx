import React, { useState, useRef, useEffect } from 'react'
import { Typography } from '@material-ui/core'
import style from './authForm.module.scss'
import VisibilityIcon from '@material-ui/icons/Visibility'
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff'
import { Router } from '../../i18n'
import composeRefs from '@seznam/compose-react-refs'
import InputMask from 'react-input-mask'
import { useForm } from 'react-hook-form'
function SignUpForm() {
  const [error, setError] = useState(false)
  const passwordRef = useRef(null)
  const passwordConfirmRef = useRef(null)
  const [showPassword, setShowPassword] = useState(false)
  const { register, handleSubmit, errors, watch } = useForm()
  const password = useRef({})
  password.current = watch('password', '')
  const submitHandler = (data) => {
    console.log(data)
    Router.push('/verifyCode')
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
      <Typography variant='h3'>Sign up to MACBRO</Typography>
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
                placeholder='Name'
              />
            </div>
            <div className={style.input_cont}>
              <input
                className={`input`}
                name='surname'
                type='text'
                ref={register}
                placeholder='Surname'
                required
              />
            </div>
          </div>
          <div className={style.input_cont}>
            <InputMask
              mask='+99999-999-99-99'
              disabled={false}
              maskChar=' '
              type='tel'
            >
              {() => (
                <input
                  className='input'
                  name='phoneNum'
                  placeholder='Phone number'
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
            {errors.phoneNum && 'Fill in valid phone number'}
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
              placeholder='Password'
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
                    value === password.current || 'The passwords do not match',
                }),
                passwordConfirmRef
              )}
              type='password'
              placeholder='Confirm password'
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
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUpForm
