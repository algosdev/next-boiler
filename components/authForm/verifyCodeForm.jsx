import React, { useState } from 'react'
import style from './authForm.module.scss'
import { Typography } from '@material-ui/core'
function VerifyCodeForm() {
  const [values, setValues] = useState({
    code: '',
  })
  const submitHandler = (e) => {
    e.preventDefault()
  }
  return (
    <div className={style.wrapper}>
      <Typography variant='h3'>
        Enter OTP which has been sent to +99897777777
      </Typography>
      <div className={style.inner}>
        <form onSubmit={submitHandler}>
          <div className={style.input_cont}>
            <input
              className={`input`}
              value={values.code}
              onChange={(e) => setValues({ ...values, code: e.target.value })}
              type='num'
              placeholder='OTP code'
            />
          </div>
          <div className={style.input_cont}>
            <button className='input' type='submit'>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default VerifyCodeForm
