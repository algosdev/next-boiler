import React, { useState } from 'react'
import { Typography, Checkbox } from '@material-ui/core'
import style from './authForm.module.scss'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import { Link } from '../../i18n'
function SignInForm() {
  const [rememberMe, setRememberMe] = useState(false)
  const [isPhoneNumValid, setIsPhoneNumValid] = useState(false)
  const [isPasswordValid, setIsPasswordValid] = useState(false)
  const [values, setValues] = useState({
    phoneNum: '',
    password: '',
  })
  const submitHandler = (e) => {
    e.preventDefault()
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
  return (
    <div className={style.wrapper}>
      <Typography variant='h3'>Sign in to MACBRO</Typography>
      <div className={style.inner}>
        <form onSubmit={submitHandler}>
          <div className={style.input_cont}>
            <input
              className={`input`}
              value={values.phoneNum}
              onChange={(e) =>
                setValues({ ...values, phoneNum: e.target.value })
              }
              type='tel'
              placeholder='Phone number'
            />
            {!isPhoneNumValid ? (
              values.phoneNum ? (
                <div className={style.icon} onClick={checkPhoneNum}>
                  <ArrowForwardIcon />
                </div>
              ) : (
                ''
              )
            ) : (
              ''
            )}
          </div>
          {isPhoneNumValid ? (
            <div className={style.input_cont}>
              <input
                className='input'
                value={values.password}
                onChange={(e) =>
                  setValues({ ...values, password: e.target.value })
                }
                type='text'
                placeholder='Password'
              />
              {!isPasswordValid ? (
                values.password ? (
                  <div className={style.icon} onClick={checkPassword}>
                    <ArrowForwardIcon />
                  </div>
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
          <div className={style.checkbox_cont}>
            <Checkbox
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <span>Remember me</span>
          </div>
        </form>
        <div className={style.options}>
          <div>
            <Link href='/forgot'>
              <a>Forgot password?</a>
            </Link>
          </div>
          <div>
            <Link href='/signUp'>
              <a>Don’t have an account? Create yours</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignInForm
