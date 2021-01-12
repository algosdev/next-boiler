import React, { useState, useRef, useEffect } from 'react'
import {
  Typography,
  TextField,
  FormControl,
  InputLabel,
  FilledInput,
  InputAdornment,
  IconButton,
  Button,
} from '@material-ui/core'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import style from './authForm.module.scss'
import VisibilityIcon from '@material-ui/icons/Visibility'
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff'
import { Router } from '../../i18n'
import composeRefs from '@seznam/compose-react-refs'
import InputMask from 'react-input-mask'
import { useForm } from 'react-hook-form'
import { useTranslation } from '../../i18n'
import { useStyles } from './textFieldStyle'
function SignUpForm() {
  const classes = useStyles()
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
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    passwordConfirm: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  })
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword })
  }

  const handleMouseDownPassword = (event) => {
    event.preventDefault()
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
      <Typography variant='h2'>{t('signup_title')}</Typography>
      <div className={style.inner}>
        <form onSubmit={handleSubmit(submitHandler)}>
          <div className={style.input_cont}>
            <TextField
              id='filled-basic'
              name='name'
              variant='filled'
              fullWidth
              type='text'
              className={classes.root}
              required
              label={t('name')}
            />
            {/* <input
                className={`input`}
                required
                ref={register}
                name='name'
                type='text'
                placeholder={t('name')}
              /> */}
          </div>
          <div className={style.input_cont}>
            <TextField
              id='filled-basic'
              name='name'
              variant='filled'
              fullWidth
              type='text'
              className={classes.root}
              required
              label={t('surname')}
            />
            {/* <input
                className={`input`}
                name='surname'
                type='text'
                ref={register}
                placeholder={t('surname')}
                required
              /> */}
          </div>
          <div className={style.input_cont}>
            <TextField
              id='filled-basic'
              name='phoneNum'
              variant='filled'
              fullWidth
              type='tel'
              className={classes.root}
              // onChange={(e) =>
              //   setValues({ ...values, phoneNum: e.target.value })
              // }
              required
              label={t('phone_num')}
            />
            {/* <InputMask
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
            </InputMask> */}
          </div>
          <span className={style.errorTxt}>
            {errors.phoneNum && t('phone_invalid')}
          </span>
          <div className={style.input_cont}>
            <FormControl
              className={classes.root}
              fullWidth
              variant='filled'
              required
            >
              <InputLabel htmlFor='filled-adornment-password'>
                {t('password')}
              </InputLabel>
              <FilledInput
                id='filled-adornment-password'
                type={values.showPassword ? 'text' : 'password'}
                value={values.password}
                onChange={handleChange('password')}
                endAdornment={
                  <InputAdornment position='end'>
                    <IconButton
                      aria-label='toggle password visibility'
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge='end'
                    >
                      {values.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>

            {/* <input
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
            /> */}
            {/* <div
              className={style.eye}
              onClick={() => setShowPassword(!showPassword)}
            >
              {!showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
            </div> */}
          </div>
          <div className={style.input_cont}>
            <FormControl
              className={classes.root}
              fullWidth
              variant='filled'
              required
            >
              <InputLabel htmlFor='filled-adornment-password'>
                {t('confirm_password')}
              </InputLabel>
              <FilledInput
                id='filled-adornment-password'
                type={values.showPassword ? 'text' : 'password'}
                value={values.passwordConfirm}
                onChange={handleChange('passwordConfirm')}
                endAdornment={
                  <InputAdornment position='end'>
                    <IconButton
                      aria-label='toggle password visibility'
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge='end'
                    >
                      {values.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            {/* <TextField
              id='filled-basic'
              name='passwordConfirm'
              variant='filled'
              fullWidth
              type='text'
              className={classes.root}
              required
              label={t('confirm_password')}
            /> */}
            {/* <input
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
            /> */}

            {/* <div
              className={style.eye}
              onClick={() => setShowPassword(!showPassword)}
            >
              {!showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
            </div> */}
          </div>
          <span className={style.errorTxt}>
            {errors.password_repeat && errors.password_repeat.message}
          </span>
          <div className={style.input_cont}>
            <Button type='submit' fullWidth>
              {t('continue')}
            </Button>
          </div>
          {/* <div className={style.input_cont}>
            <button className='input' type='submit'>
              {t('continue')}
            </button>
          </div> */}
        </form>
      </div>
    </div>
  )
}

export default SignUpForm
