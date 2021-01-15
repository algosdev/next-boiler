import React from 'react'
import style from './installment.module.scss'
import { Container } from '@material-ui/core'
function InstallmentContent() {
  return (
    <div className={style.wrapper}>
      <Container>
        <h1>Рассрочка</h1>
        <h2>
          Специальная рассрочка от MACBRO! Не откладывайте мечты на завтра!
          Покупайте сейчас, платите потом по выгодной схеме.
        </h2>
        <h3>Купить в рассрочку</h3>
        <ul>
          <li>на 3 месяца</li>
          <li>на 6 месяцев</li>
          <li>на 9 месяцев</li>
          <li>на 12 месяцев</li>
        </ul>

        <br />
        <p className={style.info}>
          Требуется только паспорт. Без первоначального взноса, лишь первая
          оплата по договору рассрочки!{' '}
        </p>
        <h3>В нашем магазине вы можете взять:</h3>
        <ul>
          <li>Телефон в рассрочку в Ташкенте</li>
          <li>Ноутбук в рассрочку</li>
          <li>Технику в рассрочку</li>
          <li>Публичная оферта по рассрочке</li>
        </ul>
      </Container>
    </div>
  )
}

export default InstallmentContent
