import React from 'react'
import { TextField, Button } from '@material-ui/core'
import style from './contact.module.scss'
import { useStyles } from '../authForm/textFieldStyle'
function ContactForm() {
  const classes = useStyles()
  return (
    <div className={style.wrapper_form}>
      <div className={style.header}>
        <div className={style.main_title}>Связаться с нами</div>
        <div className={style.leading}>
          Используйте форму ниже, чтобы отправить нам свои комментарии или
          сообщить о любых проблемах, с которыми вы столкнулись при поиске
          информации на нашем веб-сайте. Мы внимательно читаем все отзывы, но
          учтите, что мы не можем отвечать на отправленные вами комментарии.
        </div>
      </div>
      <form>
        <div className={style.input_cont}>
          <TextField
            id='filled-basic'
            name='name'
            variant='filled'
            fullWidth
            type='tel'
            className={classes.root}
            //   onChange={(e) => setValues({ ...values, phoneNum: e.target.value })}
            required
            label='Имя'
          />
        </div>
        <div className={style.input_cont}>
          <TextField
            id='filled-basic'
            name='phoneNum'
            variant='filled'
            fullWidth
            type='tel'
            className={classes.root}
            //   onChange={(e) => setValues({ ...values, phoneNum: e.target.value })}
            required
            label='Номер телефона'
          />
        </div>
        <div className={style.input_cont}>
          <TextField
            id='filled-basic'
            name='Message'
            variant='filled'
            fullWidth
            type='tel'
            className={classes.root}
            //   onChange={(e) => setValues({ ...values, phoneNum: e.target.value })}
            required
            multiline
            rows={3}
            label='Сообщение'
          />
        </div>
        <div className={style.input_cont}>
          <Button fullWidth type='submit'>
            Отправить
          </Button>
        </div>
      </form>
    </div>
  )
}

export default ContactForm
