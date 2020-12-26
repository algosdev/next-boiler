import React, { useState } from 'react'
import { Typography, Checkbox, CircularProgress } from '@material-ui/core'
import style from './authForm.module.scss'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import { Link } from '../../i18n'
import { useRouter } from 'next/router'
function SignInForm() {
  const router = useRouter()
  const [rememberMe, setRememberMe] = useState(false)
  const [isPhoneNumValid, setIsPhoneNumValid] = useState(false)
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
  return (
    <div className={style.wrapper}>
      <Typography variant='h3'>Sign in to MACBRO</Typography>
      <div className={style.inner}>
        <form onSubmit={submitHandlerPhone}>
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
                value={values.password}
                onChange={(e) =>
                  setValues({ ...values, password: e.target.value })
                }
                type='text'
                placeholder='Password'
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
          <span>Remember me</span>
        </div>

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
