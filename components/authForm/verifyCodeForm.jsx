import React, { useEffect, useState } from 'react'
import style from './authForm.module.scss'
import { Typography, Button, TextField } from '@material-ui/core'
import { i18n, Router } from '../../i18n'
import { useRouter } from 'next/router'
import { useTranslation } from '../../i18n'
import { useForm } from 'react-hook-form'
import { useStyles } from './textFieldStyle'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { logout, setUser } from '../../redux/actions/authActions/authActions'
function VerifyCodeForm({ phone, userInfo }) {
  const classes = useStyles()
  const { t } = useTranslation()
  const [error, setError] = useState(false)
  // const submitHandler = (e) => {
  //   e.preventDefault()
  //   if (router.query.signup === 'true') {
  //     Router.push('/account?signup=true')
  //   } else {
  //     Router.push('/')
  //   }
  // }
  const user = useSelector((state) => state.auth.user)

  const { register, handleSubmit } = useForm()
  const dispatch = useDispatch()

  // useEffect(() => {
  //   console.log('clean')
  //   return function cleanup() {
  //     dispatch(logout())
  //   }
  // })
  const sendCode = async (data) => {
    setError(false)
    try {
      const response = await axios.post(
        `${process.env.LOGIN_API_URL}/verify-phone`,
        {
          ...data,
          phone: phone.replaceAll(' ', ''),
        },
        {
          headers: {
            Authorization: userInfo.access_token,
          },
        }
      )
      if (response.status === 200) {
        console.log(response)
        dispatch(setUser(userInfo))
        Router.push('/account')
      } else {
        setError(true)
      }
    } catch (err) {
      setError(true)
      console.log(err)
    }
  }

  return (
    <div className={style.wrapper}>
      <Typography variant='h3'>
        {t('enter_otp')} {phone || ''}
      </Typography>
      <div className={style.inner}>
        <form onSubmit={handleSubmit(sendCode)}>
          <div className={style.input_cont}>
            {/* <input
              className={`input`}
              value={values.code}
              onChange={(e) => setValues({ ...values, code: e.target.value })}
              type='num'
              placeholder='OTP code'
              required
            /> */}
            <TextField
              id='filled-basic'
              name='code'
              inputRef={register}
              variant='filled'
              fullWidth
              type='number'
              className={classes.root}
              error={error}
              helperText={error ? 'OTP неверен!' : ''}
              // onChange={(e) =>
              //   setValues({ ...values, phoneNum: e.target.value })
              // }
              required
              label={t('otp')}
            />
          </div>
          <div className={style.input_cont}>
            <Button fullWidth type='submit'>
              {t('continue')}
            </Button>
            {/* <button className='input' type='submit'>
              Submit
            </button> */}
          </div>
        </form>
      </div>
    </div>
  )
}

export default VerifyCodeForm
