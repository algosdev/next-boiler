import React, { useState } from 'react'
import style from './authForm.module.scss'
import { Typography } from '@material-ui/core'
function forgotForm() {
  const [values, setValues] = useState({
    phoneNum: '',
  })
  const submitHandler = (e) => {
    e.preventDefault()
  }
  return (
    <div className={style.wrapper}>
      <Typography variant='h3'>Having trouble signing in?</Typography>
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

export default forgotForm
