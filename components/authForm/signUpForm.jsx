import React, { useState } from 'react'
import { Typography, Checkbox } from '@material-ui/core'
import style from './authForm.module.scss'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import { Link } from '../../i18n'
function SignUpForm() {
  const [rememberMe, setRememberMe] = useState(false)
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
      <Typography variant='h3'>Sign up to MACBRO</Typography>
      <div className={style.inner}>
        <form onSubmit={submitHandler}>
          <div className={style.fullName}>
            <div className={style.input_cont}>
              <input
                className={`input`}
                value={values.firstName}
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
            <input
              className='input'
              value={values.phoneNum}
              required
              onChange={(e) =>
                setValues({ ...values, phoneNum: e.target.value })
              }
              type='tel'
              placeholder='Phone number'
            />
          </div>
          <div className={style.input_cont}>
            <input
              className='input'
              required
              value={values.password}
              onChange={(e) =>
                setValues({ ...values, password: e.target.value })
              }
              type='text'
              placeholder='Password'
            />
          </div>
          <div className={style.input_cont}>
            <input
              className='input'
              required
              value={values.passwordConfirm}
              onChange={(e) =>
                setValues({ ...values, passwordConfirm: e.target.value })
              }
              type='text'
              placeholder='Confirm password'
            />
          </div>
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
