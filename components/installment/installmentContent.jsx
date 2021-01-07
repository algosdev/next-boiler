import React from 'react'
import style from './installment.module.scss'
import { Container } from '@material-ui/core'
function InstallmentContent() {
  return (
    <div className={style.wrapper}>
      <Container>
        <h1>
          Специальная рассрочка от MACBRO! Не откладывайте мечты на завтра!
          Покупайте сейчас, платите потом по выгодной схеме.
        </h1>
        <h2>Купить в рассрочку</h2>
        <p>на 3 месяца</p>
        <p>на 6 месяцев</p>
        <p>на 9 месяцев</p>
        <p>на 12 месяцев</p>
        <br />
        <p>
          Требуется только паспорт. Без первоначального взноса, лишь первая
          оплата по договору рассрочки!{' '}
        </p>
        <h2>В нашем магазине вы можете взять:</h2>
        <p>Телефон в рассрочку в Ташкенте</p>
        <p>Ноутбук в рассрочку</p>
        <p>Технику в рассрочку</p>
        <p>Публичная оферта по рассрочке</p>
      </Container>
    </div>
  )
}

export default InstallmentContent
