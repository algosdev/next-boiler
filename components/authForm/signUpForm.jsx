import React, { useState, useRef, useEffect } from 'react'
import { Typography, Checkbox } from '@material-ui/core'
import style from './authForm.module.scss'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import { Link } from '../../i18n'
import VisibilityIcon from '@material-ui/icons/Visibility'
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff'
import TextField from '@material-ui/core/TextField'
import InputMask from 'react-input-mask'
import { Router } from '../../i18n'
function SignUpForm() {
  const [rememberMe, setRememberMe] = useState(false)
  const [error, setError] = useState(false)
  const passwordRef = useRef(null)
  const passwordConfirmRef = useRef(null)
  const [showPassword, setShowPassword] = useState(false)
  const [isPhoneNumValid, setIsPhoneNumValid] = useState(false)
  const [isPasswordValid, setIsPasswordValid] = useState(false)
  const [values, setValues] = useState({
    phoneNum: '',
    password: '',
    passwordConfirm: '',
    firstName: '',
    lastName: '',
  })
  const submitHandler = (e) => {
    e.preventDefault()
    if (values.password === values.passwordConfirm) {
      setError(false)
      Router.push('/verifyCode')
    } else {
      setError(true)
    }
  }
  const checkPhoneNum = () => {
    setTimeout(() => {
      setIsPhoneNumValid(true)
    }, 2000)
  }
  const checkPassword = () => {
    setTimeout(() => {
      setIsPasswordValid(true)
    }, 2000)
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
      console.log(passwordRef.current.type)
    }
  }, [showPassword])

  return (
    <div className={style.wrapper}>
      <Typography variant='h3'>Sign up to MACBRO</Typography>
      <div className={style.inner}>
        <form onSubmit={submitHandler}>
          <div className={style.fullName}>
            <div className={style.input_cont}>
              <input
                className={`input`}
                value={values.firstName}
                required
                onChange={(e) =>
                  setValues({ ...values, firstName: e.target.value })
                }
                type='text'
                placeholder='Name'
              />
            </div>
            <div className={style.input_cont}>
              <input
                className={`input`}
                value={values.lastName}
                onChange={(e) =>
                  setValues({ ...values, lastName: e.target.value })
                }
                type='text'
                placeholder='Surname'
                required
              />
            </div>
          </div>
          <div className={style.input_cont}>
            {/* <InputMask
              mask='+99999-999-99-99'
              disabled={false}
              maskChar=' '
              required
              value={values.phoneNum}
              onChange={(e) =>
                setValues({ ...values, phoneNum: e.target.value })
              }
              placeholder={`+998 __ ___ __ __`}
            >
              {() => (
                <TextField
                  variant='outlined'
                  fullWidth
                  placeholder='Phone number'
                />
              )}
            </InputMask> */}
            <input
              className='input'
              required
              placeholder='Phone number'
              value={values.phoneNum}
              onChange={(e) =>
                setValues({ ...values, phoneNum: e.target.value })
              }
              type='tel'
              mask='/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g/'
            />
          </div>
          <div className={style.input_cont}>
            <input
              className={`${error ? style.error : ''} input`}
              required
              onFocus={() => setError(false)}
              value={values.password}
              onChange={(e) =>
                setValues({ ...values, password: e.target.value })
              }
              ref={passwordRef}
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
              ref={passwordConfirmRef}
              onFocus={() => setError(false)}
              value={values.passwordConfirm}
              onChange={(e) =>
                setValues({ ...values, passwordConfirm: e.target.value })
              }
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
          <span className={`${error ? style.errorTxt : style.leading}`}>
            {error
              ? "Passwords don't match"
              : 'Make sure to fill in all fields with right details.'}
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
